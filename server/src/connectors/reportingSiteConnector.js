import { parseDashboardPage, combineHourlyRows, mergeProductRows } from '../utils/pageParsers.js';
import { cleanText, maskSecret, round2 } from '../utils/safe.js';
import { currentDateInTimeZone, dateParamVariants, normalizeReportingDate, periodMatchesSelectedDate } from '../utils/dateUtils.js';
import http from 'http';
import https from 'https';

const DEFAULT_STORES = [
  { name: 'Beverly Hills', envKey: 'REPORTING_STORE_BEVERLY_HILLS', slug: 'ladonuts_beverlyhills' },
  { name: 'Penrith', envKey: 'REPORTING_STORE_PENRITH', slug: 'ladonuts_penrith' },
  { name: 'Taren Point', envKey: 'REPORTING_STORE_TAREN_POINT', slug: 'ladonuts_tarenpoint' }
];

const DEFAULT_VIEWS = [
  'dashboard.php',
  'eod_summary.php',
  'daily_sales.php',
  'busy_hours.php',
  'product_sales.php',
  'product_sales_summary.php',
  'sold_out_date.php',
  'lineremoved.php',
  'ticket_sales.php'
];

export async function syncReportingSite(env, fetchImpl = fetch, opts = {}) {
  const selectedDate = normalizeReportingDate(opts.reportingDate || opts.date || opts.today, env.TIMEZONE || 'Australia/Sydney');
  const startedAt = new Date().toISOString();
  const result = {
    ok: false,
    status: 'failed',
    mode: 'reporting-site-dashboard-first',
    source: 'reporting.site',
    reportingDate: selectedDate,
    periodMatched: false,
    startedAt,
    finishedAt: null,
    reportingPOS: {},
    ticketRowsByStore: {},
    details: [],
    warnings: [],
    errors: [],
    diagnostics: reportingDiagnostics(env, { includeAttempts: false })
  };

  const cookieHeader = buildCookieHeader(env);
  if (!cookieHeader) {
    result.status = 'not_synced';
    result.errors.push('Missing REPORTING_COOKIE or REPORTING_PHPSESSID. Add it in Render Environment.');
    result.finishedAt = new Date().toISOString();
    return result;
  }

  const stores = DEFAULT_STORES.map(s => ({ ...s, slug: env[s.envKey] || s.slug }));
  for (const store of stores) {
    const storeResult = await syncReportingStore(env, fetchImpl, store, selectedDate, cookieHeader, opts);
    result.details.push(storeResult.detail);
    if (storeResult.metric) result.reportingPOS[store.name] = storeResult.metric;
    if (storeResult.ticketRows?.length) result.ticketRowsByStore[store.name] = storeResult.ticketRows;
  }

  const successes = Object.values(result.reportingPOS).length;
  result.ok = successes > 0;
  result.periodMatched = Object.values(result.reportingPOS).some(x => x.period === selectedDate);
  result.status = successes ? (result.details.some(d => d.status === 'partial_success') ? 'partial_success' : 'success') : 'not_synced';
  if (!successes && !result.errors.length) result.errors.push('No reporting.site KPI page returned an exact selected-date period. Stale or undated pages were rejected.');
  result.finishedAt = new Date().toISOString();
  return result;
}

export function reportingDiagnostics(env, extra = {}) {
  const views = getViews(env);
  const stores = DEFAULT_STORES.map(s => ({ name: s.name, slug: env[s.envKey] || s.slug, envKey: s.envKey }));
  return {
    source: 'reporting.site',
    baseUrl: trimSlash(env.REPORTING_BASE_URL || 'https://reporting.site'),
    reportingCookie: maskSecret(env.REPORTING_COOKIE || ''),
    phpSessionId: maskSecret(env.REPORTING_PHPSESSID || ''),
    legacyEmailEnvPresent: Boolean(env.REPORTING_EMAIL),
    legacyPasswordEnvPresent: Boolean(env.REPORTING_PASSWORD),
    timezone: env.TIMEZONE || 'Australia/Sydney',
    browserFallbackEnabled: String(env.ENABLE_BROWSER_SYNC || '').toLowerCase() === 'true',
    views,
    stores,
    ...extra
  };
}

async function syncReportingStore(env, fetchImpl, store, selectedDate, cookieHeader, opts) {
  const detail = {
    store: store.name,
    slug: store.slug,
    status: 'failed',
    ok: false,
    sourcePagesUsed: [],
    attemptedUrls: [],
    periodChecks: [],
    metricsFound: 0,
    hourlyRows: 0,
    productRows: 0,
    diagnostic: 'not_started',
    liveSyncDiagnostics: { fetched: 0, rejectedByDateCheck: 0, kpiNotFound: 0, timeout: 0, saved: 0 },
    liveSyncSteps: [],
    warnings: [],
    errors: []
  };
  const parsedPages = [];
  let views = getViews(env).filter(v => v !== 'script.php');
  if (opts.liveFallback || opts.recentOnly) {
    const priority = ['busy_hours.php', 'product_sales_summary.php', 'product_sales.php', 'dashboard.php', 'eod_summary.php', 'daily_sales.php'];
    views = priority.filter(v => views.includes(v));
    detail.warnings.push('Recent/day fallback mode: only KPI/product/hourly dashboard pages are attempted; full-history/ticket scraping is skipped.');
  }
  for (const view of views) {
    try {
      const page = await fetchViewWithDate(env, fetchImpl, store, view, selectedDate, cookieHeader, detail, opts);
      if (!page) continue;
      parsedPages.push(page);
      if (page.accepted) detail.sourcePagesUsed.push(view);
    } catch (err) {
      detail.errors.push(`${view}: ${err.message || err}`);
    }
  }

  // Browser fallback is intentionally heavier, but it is the only reliable
  // option when reporting.site/LiteSpeed resets Render server-side fetches
  // with ECONNRESET. It uses a real Chromium session, submits the same
  // date-range forms as the browser, and saves any accepted pages.
  if (!parsedPages.some(p => p.accepted) && String(env.ENABLE_BROWSER_SYNC || '').toLowerCase() === 'true') {
    const browserResult = await tryBrowserFallback(env, store, selectedDate, cookieHeader, detail).catch(err => ({ error: String(err?.message || err) }));
    const browserPages = Array.isArray(browserResult?.pages) ? browserResult.pages : (browserResult?.parsed ? [browserResult.parsed] : []);
    for (const browserPage of browserPages) {
      parsedPages.push(browserPage);
      if (browserPage.accepted) detail.sourcePagesUsed.push(browserPage.sourcePage || 'browser-render');
    }
    if (!browserPages.length && browserResult?.error) {
      detail.warnings.push(`Browser fallback unavailable: ${browserResult.error}`);
    }
  }

  const accepted = parsedPages.filter(p => p.accepted);
  const metric = buildStoreMetric(store, selectedDate, accepted);
  detail.metricsFound = accepted.filter(p => p.parsed?.metrics?.sales != null || p.parsed?.metrics?.orders != null).length;
  detail.hourlyRows = metric?.hourlyRows?.length || 0;
  detail.productRows = metric?.productRows?.length || 0;

  // Ticket rows are optional enrichment. Never fail the store because ticket rows fail.
  // Recent fallback deliberately skips ticket enrichment so current-day sync returns quickly.
  const ticket = (opts.liveFallback || opts.recentOnly)
    ? { rows: [], error: 'skipped in recent live fallback mode' }
    : await tryTicketEnrichment(env, fetchImpl, store, selectedDate, cookieHeader, detail).catch(err => ({ rows: [], error: String(err?.message || err) }));
  if (ticket?.error) detail.warnings.push(`Ticket enrichment skipped: ${ticket.error}`);

  if (metric) {
    detail.ok = true;
    detail.status = ticket?.rows?.length ? 'success' : 'partial_success';
    detail.diagnostic = 'saved';
    detail.liveSyncDiagnostics.saved = 1;
    detail.liveSyncSteps.push({ status: 'saved', message: `Saved ${store.name} POS metrics for ${selectedDate}.`, sourcePagesUsed: detail.sourcePagesUsed });
    if (!ticket?.rows?.length) detail.warnings.push('Dashboard/eod/daily KPI pages parsed. Ticket rows unavailable; POS marked partial success, not failed.');
    metric.status = detail.status;
    metric.warnings = [...new Set([...(metric.warnings || []), ...detail.warnings])];
    return { detail, metric, ticketRows: ticket?.rows || [] };
  }

  detail.status = 'not_synced';
  if (detail.liveSyncDiagnostics.timeout > 0) detail.diagnostic = 'timeout';
  else if (detail.liveSyncDiagnostics.fetched > 0 && detail.liveSyncDiagnostics.kpiNotFound > 0) detail.diagnostic = 'KPI not found';
  else if (detail.liveSyncDiagnostics.fetched > 0 && detail.liveSyncDiagnostics.rejectedByDateCheck > 0) detail.diagnostic = 'rejected by date check';
  else detail.diagnostic = 'not_synced';
  if (!detail.errors.length) detail.errors.push(`No selected-date POS KPI page accepted for ${selectedDate}. Diagnostic: ${detail.diagnostic}.`);
  return { detail, metric: null, ticketRows: [] };
}

async function fetchViewWithDate(env, fetchImpl, store, view, selectedDate, cookieHeader, detail, opts = {}) {
  const baseUrl = reportingBaseForStore(env, store, view);
  const maxAttempts = Number(env.REPORTING_MAX_DATE_ATTEMPTS || ((opts.liveFallback || opts.recentOnly || opts.dayOnly) ? 5 : 10));
  const timeoutMs = Number(env.REPORTING_SYNC_TIMEOUT_MS || ((opts.liveFallback || opts.recentOnly || opts.dayOnly) ? 45000 : 10000));

  // Beta 0.2.23: busy_hours.php is a POST-filtered page. A simple
  // ?date=YYYY-MM-DD GET returns the shell with empty JS arrays
  // (SERIES_REVENUE=[], CROSS_BODY=[]), so try the exact date-range form first.
  if (/busy_hours\.php$/i.test(view) && (opts.liveFallback || opts.recentOnly || opts.dayOnly)) {
    const postPage = await fetchBusyHoursPost(env, fetchImpl, store, view, baseUrl, selectedDate, cookieHeader, detail, timeoutMs);
    if (postPage) return postPage;
  }

  const attempts = buildUrlAttempts(baseUrl, selectedDate, opts.liveFallback || opts.recentOnly || opts.dayOnly);
  for (const url of attempts.slice(0, maxAttempts)) {
    const cleanUrl = scrubUrl(url);
    detail.attemptedUrls.push(cleanUrl);
    let response;
    try {
      response = await fetchText(fetchImpl, url, cookieHeader, timeoutMs);
    } catch (err) {
      const isTimeout = err?.name === 'AbortError' || /abort|timeout|timed out/i.test(String(err?.message || err));
      if (isTimeout) {
        detail.liveSyncDiagnostics.timeout += 1;
        detail.liveSyncSteps.push({ view, url: cleanUrl, status: 'timeout', timeoutMs, message: `${view} timed out after ${Math.round(timeoutMs / 1000)}s` });
        detail.periodChecks.push({ view, url: cleanUrl, status: 'timeout', finalUrl: cleanUrl, period: { start: '', end: '', label: '' }, periodSource: 'none', accepted: false, hasData: false, diagnostic: 'timeout' });
        continue;
      }
      throw err;
    }

    detail.liveSyncDiagnostics.fetched += 1;
    const parsed = parseDashboardPage(response.text, { sourcePage: view });
    const acceptedStrict = periodMatchesSelectedDate(parsed.period, selectedDate);
    const hasKpi = Boolean(parsed.metrics?.sales != null || parsed.metrics?.totalSales != null || parsed.metrics?.netSales != null || parsed.metrics?.orders != null || parsed.metrics?.transactions != null || parsed.metrics?.aov != null);
    const hasData = Boolean(hasKpi || parsed.hourlyRows?.length || parsed.productRows?.length);
    const fallback = allowRecentUndatedFallback(env, selectedDate, url, view, parsed, response, hasData);
    const accepted = acceptedStrict || fallback.ok;
    const periodSource = parsed.textPeriod?.start ? 'page-text' : parsed.inputPeriod?.start ? 'date-inputs' : fallback.ok ? fallback.reason : 'none';

    let diagnostic = 'fetched';
    if (!hasData) {
      diagnostic = 'KPI not found';
      detail.liveSyncDiagnostics.kpiNotFound += 1;
    } else if (!accepted) {
      diagnostic = 'rejected by date check';
      detail.liveSyncDiagnostics.rejectedByDateCheck += 1;
    }
    detail.periodChecks.push({ view, url: cleanUrl, status: response.status, finalUrl: scrubUrl(response.finalUrl || url), period: parsed.period, periodSource, accepted, hasData, hasKpi, diagnostic });
    detail.liveSyncSteps.push({ view, url: cleanUrl, status: diagnostic, httpStatus: response.status, accepted, hasData, hasKpi, periodSource });

    if (response.looksUnauthenticated) throw new Error('Authentication failed or login page returned. Refresh REPORTING_COOKIE / REPORTING_PHPSESSID.');
    if (accepted && hasData) {
      if (fallback.ok && !acceptedStrict) {
        detail.warnings.push(`Accepted ${view} using ${fallback.reason}. Date was not visible in page text; verify first run manually.`);
        parsed.period = { start: selectedDate, end: selectedDate, label: `${selectedDate} (${fallback.reason})`, matchedByFallback: true };
      }
      return { sourcePage: view, url: cleanUrl, parsed, accepted: true };
    }
  }
  return null;
}


async function fetchBusyHoursPost(env, fetchImpl, store, view, baseUrl, selectedDate, cookieHeader, detail, timeoutMs) {
  const dateLabel = reportingDateLabel(selectedDate);
  const body = new URLSearchParams();
  body.set('filters[date_range]', `${dateLabel} - ${dateLabel}`);
  body.set('btn-create', '');
  const cleanUrl = `${scrubUrl(baseUrl)}#post-date-range`;
  detail.attemptedUrls.push(cleanUrl);

  let response;
  try {
    response = await fetchText(fetchImpl, baseUrl, cookieHeader, timeoutMs, {
      method: 'POST',
      body,
      referer: baseUrl
    });
  } catch (err) {
    const isTimeout = err?.name === 'AbortError' || /abort|timeout|timed out/i.test(String(err?.message || err));
    if (isTimeout) {
      detail.liveSyncDiagnostics.timeout += 1;
      detail.liveSyncSteps.push({ view, url: cleanUrl, status: 'timeout', timeoutMs, method: 'POST', message: `${view} POST timed out after ${Math.round(timeoutMs / 1000)}s` });
      detail.periodChecks.push({ view, url: cleanUrl, status: 'timeout', finalUrl: cleanUrl, period: { start: '', end: '', label: '' }, periodSource: 'none', accepted: false, hasData: false, diagnostic: 'timeout', method: 'POST' });
      return null;
    }
    throw err;
  }

  detail.liveSyncDiagnostics.fetched += 1;
  const parsed = parseDashboardPage(response.text, { sourcePage: view });
  const hourlyTotal = (parsed.hourlyRows || []).reduce((sum, row) => sum + (Number(row.sales) || 0), 0);
  const hasHourlyDataset = (parsed.hourlyRows || []).length > 0 && hourlyTotal > 0;
  const acceptedStrict = periodMatchesSelectedDate(parsed.period, selectedDate);
  const hasKpi = Boolean(parsed.metrics?.sales != null || parsed.metrics?.totalSales != null || parsed.metrics?.netSales != null || parsed.metrics?.orders != null || parsed.metrics?.transactions != null || parsed.metrics?.aov != null);
  const hasData = Boolean(hasHourlyDataset || hasKpi || parsed.productRows?.length);
  const fallback = allowRecentUndatedFallback(env, selectedDate, baseUrl, view, parsed, response, hasData);
  const accepted = acceptedStrict || fallback.ok;
  const periodSource = parsed.textPeriod?.start ? 'page-text' : parsed.inputPeriod?.start ? 'date-inputs' : fallback.ok ? fallback.reason : 'none';

  let diagnostic = 'fetched';
  if (!hasData) {
    diagnostic = 'Busy hours POST returned empty dataset';
    detail.liveSyncDiagnostics.kpiNotFound += 1;
  } else if (!accepted) {
    diagnostic = 'rejected by date check';
    detail.liveSyncDiagnostics.rejectedByDateCheck += 1;
  }
  detail.periodChecks.push({ view, url: cleanUrl, status: response.status, finalUrl: scrubUrl(response.finalUrl || baseUrl), period: parsed.period, periodSource, accepted, hasData, hasKpi, hourlyRows: parsed.hourlyRows?.length || 0, hourlySalesTotal: round2(hourlyTotal), diagnostic, method: 'POST' });
  detail.liveSyncSteps.push({ view, url: cleanUrl, status: diagnostic, httpStatus: response.status, accepted, hasData, hasKpi, hourlyRows: parsed.hourlyRows?.length || 0, hourlySalesTotal: round2(hourlyTotal), periodSource, method: 'POST' });

  if (response.looksUnauthenticated) throw new Error('Authentication failed or login page returned. Refresh REPORTING_COOKIE / REPORTING_PHPSESSID.');
  if (accepted && hasData) {
    if (fallback.ok && !acceptedStrict) {
      detail.warnings.push(`Accepted ${view} POST using ${fallback.reason}. Date was not visible in page text; verify first run manually.`);
      parsed.period = { start: selectedDate, end: selectedDate, label: `${selectedDate} (${fallback.reason})`, matchedByFallback: true };
    }
    if (!hasHourlyDataset) detail.warnings.push('busy_hours.php POST did not expose a non-zero hourly dataset. Daily POS can still sync from KPI/product pages.');
    else detail.warnings.push(`busy_hours.php POST hourly dataset parsed (${parsed.hourlyRows.length} rows, total ${round2(hourlyTotal)}).`);
    return { sourcePage: view, url: cleanUrl, parsed, accepted: true };
  }
  return null;
}

function reportingDateLabel(iso) {
  try {
    return new Date(`${iso}T00:00:00Z`).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
  } catch {
    return iso;
  }
}

function reportingBaseForStore(env, store, view) {
  const storeKey = store.name.replace(/\W+/g, '_').toUpperCase();
  const explicitBase = String(env[`REPORTING_POS_${storeKey}_BASE`] || env[`REPORTING_${storeKey}_BASE`] || '').trim();
  const base = explicitBase || `${trimSlash(env.REPORTING_BASE_URL || 'https://reporting.site')}/${store.slug}/dashboard`;
  if (/\.php(?:$|[?#])/.test(base)) return base;
  return `${trimSlash(base)}/${view}`;
}

function allowRecentUndatedFallback(env, selectedDate, url, view, parsed, response, hasData) {
  if (!hasData) return { ok: false };
  const enabled = String(env.REPORTING_ALLOW_UNDATED_RECENT_SCRAPE || env.ALLOW_UNDATED_RECENT_SCRAPE || 'true').toLowerCase() !== 'false';
  if (!enabled) return { ok: false };
  if (!isRecentDate(selectedDate, env)) return { ok: false };
  const urlHasDate = urlContainsSelectedDate(url, selectedDate);
  const current = currentDateInTimeZone(env.TIMEZONE || 'Australia/Sydney');
  const currentDashboard = selectedDate === current && /dashboard\.php|eod_summary\.php|daily_sales\.php|busy_hours\.php|product_sales_summary\.php|product_sales\.php/.test(view);
  const hasKpiCards = Boolean(parsed?.metrics?.sales != null || parsed?.metrics?.totalSales != null || parsed?.metrics?.netSales != null || parsed?.metrics?.orders != null || parsed?.metrics?.transactions != null || parsed?.metrics?.aov != null);
  if (currentDashboard && hasKpiCards) return { ok: true, reason: 'current-day-kpi-card-fallback' };
  const text = `${parsed?.title || ''} ${parsed?.textSample || ''} ${response?.text?.slice(0, 2500) || ''}`.toLowerCase();
  if (/this week|cette semaine|month|mois|mtd|wtd|year to date|ytd/.test(text)) return { ok: false };
  if (urlHasDate) return { ok: true, reason: 'recent-url-date-fallback' };
  if (currentDashboard) return { ok: true, reason: 'current-day-dashboard-fallback' };
  return { ok: false };
}

function urlContainsSelectedDate(url, selectedDate) {
  try {
    const u = new URL(url);
    const compact = selectedDate.replace(/-/g, '');
    const au = selectedDate.slice(8, 10) + '/' + selectedDate.slice(5, 7) + '/' + selectedDate.slice(0, 4);
    const dashAu = selectedDate.slice(8, 10) + '-' + selectedDate.slice(5, 7) + '-' + selectedDate.slice(0, 4);
    const hay = decodeURIComponent(u.search).replace(/\s+/g, '');
    return hay.includes(selectedDate) || hay.includes(compact) || hay.includes(au) || hay.includes(dashAu);
  } catch {
    return false;
  }
}

function isRecentDate(selectedDate, env) {
  const days = Number(env.LIVE_FALLBACK_DAYS || env.RECENT_SCRAPE_DAYS || 10);
  const today = currentDateInTimeZone(env.TIMEZONE || 'Australia/Sydney');
  const diff = daysBetween(selectedDate, today);
  return diff >= 0 && diff <= days;
}

function daysBetween(a, b) {
  const da = new Date(`${a}T00:00:00Z`);
  const db = new Date(`${b}T00:00:00Z`);
  return Math.round((db - da) / 86400000);
}

function buildStoreMetric(store, selectedDate, acceptedPages = []) {
  if (!acceptedPages.length) return null;
  const allMetrics = acceptedPages.map(p => p.parsed.metrics || {});
  const productRows = mergeProductRows(acceptedPages.flatMap(p => p.parsed.productRows || [])).slice(0, 50);
  const productSalesTotal = productRows.reduce((sum, row) => sum + (Number(row.sales) || 0), 0);
  const hourlyRows = combineHourlyRows(acceptedPages.flatMap(p => p.parsed.hourlyRows || []));
  const hourlySalesTotal = hourlyRows.reduce((sum, row) => sum + (Number(row.sales) || 0), 0);

  // 0.2.21: choose the strongest non-zero sales figure across accepted pages.
  // In 0.2.19 a zero parsed from busy_hours.php could hide a valid product
  // sales summary amount from product_sales_summary.php.
  const sales = bestPositiveNumber(allMetrics, ['sales', 'totalSales', 'netSales']) ??
    (productSalesTotal > 0 ? round2(productSalesTotal) : null) ??
    (hourlySalesTotal > 0 ? round2(hourlySalesTotal) : null) ??
    firstNumber(allMetrics, ['sales', 'totalSales', 'netSales']);

  const orders = saneCount(bestPositiveNumber(allMetrics, ['orders', 'transactions']) ?? firstNumber(allMetrics, ['orders', 'transactions']));
  const computedAov = sales != null && orders ? round2(sales / orders) : null;
  const parsedAov = bestPositiveNumber(allMetrics, ['aov']);
  const aov = (computedAov != null && (!parsedAov || parsedAov > 200 || parsedAov > sales * 0.5)) ? computedAov : (parsedAov ?? computedAov);
  return {
    store: store.name,
    source: 'reporting.site-dashboard-pages',
    period: selectedDate,
    periodLabel: 'POS Today from reporting.site dashboard/eod/daily pages',
    totalSales: sales,
    netSales: sales,
    sales,
    orders,
    transactions: orders,
    aov,
    topProduct: productRows[0]?.product || null,
    topCategory: productRows[0]?.category || null,
    hourlyRows,
    productRows,
    categoryRows: categoryRows(productRows),
    sellOutSignals: buildSellOutSignals(productRows, hourlyRows),
    leftoverSignals: [],
    sourcePagesUsed: acceptedPages.map(p => p.sourcePage),
    sourceUrls: acceptedPages.map(p => p.url),
    capturedAt: new Date().toISOString(),
    warnings: []
  };
}

async function tryTicketEnrichment(env, fetchImpl, store, selectedDate, cookieHeader, detail) {
  if (String(env.REPORTING_DISABLE_TICKET_ENRICHMENT || '').toLowerCase() === 'true') return { rows: [] };
  const base = trimSlash(env.REPORTING_BASE_URL || 'https://reporting.site');
  const url = `${base}/${store.slug}/dashboard/ticket_sales.php`;
  detail.attemptedUrls.push(scrubUrl(url));
  const response = await fetchText(fetchImpl, url, cookieHeader, Number(env.REPORTING_SYNC_TIMEOUT_MS || 15000));
  const parsed = parseDashboardPage(response.text, { sourcePage: 'ticket_sales.php' });
  if (!periodMatchesSelectedDate(parsed.period, selectedDate)) return { rows: [], error: 'ticket_sales.php did not show the selected reporting date.' };
  return { rows: [] };
}

async function tryBrowserFallback(env, store, selectedDate, cookieHeader, detail) {
  let chromium;
  try {
    const mod = await import('playwright');
    chromium = mod.chromium;
  } catch (_err) {
    return { error: 'Playwright package/browser is not installed. Use Build Command: npm install && npx playwright install chromium.' };
  }

  const headless = String(env.PLAYWRIGHT_HEADLESS || 'true').toLowerCase() !== 'false';
  const browserTimeoutMs = Number(env.BROWSER_SYNC_TIMEOUT_MS || env.REPORTING_SYNC_TIMEOUT_MS || 45000);
  const delayMs = Math.max(0, Number(env.REPORTING_REQUEST_DELAY_MS || 1500));
  const pages = [];
  const base = trimSlash(env.REPORTING_BASE_URL || 'https://reporting.site');
  const browserViews = browserFallbackViews(env);

  detail.liveSyncSteps.push({ status: 'browser_fallback_started', store: store.name, selectedDate, views: browserViews, message: 'Server fetch did not return accepted pages; starting Playwright browser fallback.' });

  const browser = await chromium.launch({
    headless,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  try {
    const context = await browser.newContext({
      userAgent: userAgent(),
      locale: 'en-AU',
      timezoneId: env.TIMEZONE || 'Australia/Sydney',
      viewport: { width: 1365, height: 900 },
      ignoreHTTPSErrors: true,
      extraHTTPHeaders: {
        'accept-language': 'en-AU,en;q=0.9,fr-FR;q=0.7,fr;q=0.6',
        'cache-control': 'no-cache',
        pragma: 'no-cache'
      }
    });
    await addCookieHeaderToContext(context, cookieHeader, base);
    const page = await context.newPage();
    page.setDefaultTimeout(browserTimeoutMs);
    page.setDefaultNavigationTimeout(browserTimeoutMs);

    for (const view of browserViews) {
      const url = reportingBaseForStore(env, store, view);
      const cleanUrl = `${scrubUrl(url)}#browser-render`;
      detail.attemptedUrls.push(cleanUrl);
      try {
        const html = await loadReportingViewInBrowser(env, page, view, url, selectedDate, browserTimeoutMs);
        const finalUrl = page.url();
        const parsed = parseDashboardPage(html, { sourcePage: `browser-render-${view}` });
        const hourlyTotal = (parsed.hourlyRows || []).reduce((sum, row) => sum + (Number(row.sales) || 0), 0);
        const acceptedStrict = periodMatchesSelectedDate(parsed.period, selectedDate);
        const hasKpi = Boolean(parsed.metrics?.sales != null || parsed.metrics?.totalSales != null || parsed.metrics?.netSales != null || parsed.metrics?.orders != null || parsed.metrics?.transactions != null || parsed.metrics?.aov != null);
        const hasData = Boolean(hasKpi || parsed.hourlyRows?.length || parsed.productRows?.length);
        const fakeResponse = { text: html, finalUrl };
        const fallback = allowRecentUndatedFallback(env, selectedDate, url, view, parsed, fakeResponse, hasData);
        const accepted = acceptedStrict || fallback.ok;
        const periodSource = parsed.textPeriod?.start ? 'page-text' : parsed.inputPeriod?.start ? 'date-inputs' : fallback.ok ? fallback.reason : 'none';
        const looksUnauthenticated = finalUrl.toLowerCase().includes('/index.php') || /password/i.test(html.slice(0, 3000)) && !/logout/i.test(html.slice(0, 3000));

        detail.liveSyncDiagnostics.fetched += 1;
        let diagnostic = 'browser fetched';
        if (looksUnauthenticated) diagnostic = 'browser auth/login page';
        else if (!hasData) { diagnostic = view === 'busy_hours.php' ? 'Busy hours browser returned empty dataset' : 'KPI not found'; detail.liveSyncDiagnostics.kpiNotFound += 1; }
        else if (!accepted) { diagnostic = 'rejected by date check'; detail.liveSyncDiagnostics.rejectedByDateCheck += 1; }

        detail.periodChecks.push({
          view,
          url: cleanUrl,
          status: 'browser',
          finalUrl: scrubUrl(finalUrl),
          period: parsed.period,
          periodSource,
          accepted,
          hasData,
          hasKpi,
          hourlyRows: parsed.hourlyRows?.length || 0,
          hourlySalesTotal: round2(hourlyTotal),
          diagnostic,
          method: view === 'busy_hours.php' ? 'BROWSER_POST_DATE_RANGE' : 'BROWSER'
        });
        detail.liveSyncSteps.push({
          view,
          url: cleanUrl,
          status: diagnostic,
          accepted,
          hasData,
          hasKpi,
          hourlyRows: parsed.hourlyRows?.length || 0,
          hourlySalesTotal: round2(hourlyTotal),
          periodSource,
          method: view === 'busy_hours.php' ? 'BROWSER_POST_DATE_RANGE' : 'BROWSER'
        });

        if (looksUnauthenticated) {
          detail.errors.push(`${view}: browser fallback reached login page. Refresh REPORTING_COOKIE / REPORTING_PHPSESSID.`);
          continue;
        }
        if (accepted && hasData) {
          if (fallback.ok && !acceptedStrict) {
            detail.warnings.push(`Accepted ${view} browser fallback using ${fallback.reason}. Date was not visible in page text; verify first run manually.`);
            parsed.period = { start: selectedDate, end: selectedDate, label: `${selectedDate} (${fallback.reason})`, matchedByFallback: true };
          }
          pages.push({ sourcePage: `browser-render-${view}`, url: cleanUrl, parsed, accepted: true });
          detail.liveSyncSteps.push({ status: 'browser_saved_page', view, url: cleanUrl, message: `Accepted browser-rendered ${view} for ${store.name} ${selectedDate}.` });
        }
      } catch (err) {
        const msg = `${view}: browser fallback failed: ${describeFetchError(err)}`;
        detail.errors.push(msg);
        detail.liveSyncSteps.push({ view, url: cleanUrl, status: 'browser_error', message: msg });
      }
      if (delayMs) await sleep(delayMs);
    }
    return { pages };
  } finally {
    await browser.close().catch(() => {});
  }
}

function browserFallbackViews(env) {
  const configured = String(env.REPORTING_BROWSER_VIEWS || '').trim();
  const requested = configured ? configured.split(',').map(x => x.trim()).filter(Boolean) : ['busy_hours.php', 'product_sales_summary.php', 'product_sales.php', 'dashboard.php', 'eod_summary.php', 'daily_sales.php'];
  const allowed = getViews(env);
  return requested.filter(v => allowed.includes(v));
}

async function loadReportingViewInBrowser(env, page, view, url, selectedDate, timeoutMs) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: timeoutMs });
  await page.waitForLoadState('networkidle', { timeout: Math.min(timeoutMs, 12000) }).catch(() => {});
  if (/busy_hours\.php$|product_sales_summary\.php$|product_sales\.php$|dashboard\.php$|eod_summary\.php$|daily_sales\.php$/i.test(view)) {
    const submitted = await submitDateRangeFormInBrowser(page, selectedDate).catch(() => false);
    if (submitted) {
      await page.waitForLoadState('domcontentloaded', { timeout: timeoutMs }).catch(() => {});
      await page.waitForLoadState('networkidle', { timeout: Math.min(timeoutMs, 12000) }).catch(() => {});
    }
  }
  return await page.content();
}

async function submitDateRangeFormInBrowser(page, selectedDate) {
  const dateLabel = reportingDateLabel(selectedDate);
  const dateRange = `${dateLabel} - ${dateLabel}`;
  return await page.evaluate((dateRangeValue) => {
    const selectors = [
      'input[name="filters[date_range]"]',
      'input[name*="date_range" i]',
      'input[id*="date_range" i]',
      'input[name*="date" i]',
      'input[id*="date" i]'
    ];
    let input = null;
    for (const sel of selectors) {
      input = document.querySelector(sel);
      if (input) break;
    }
    if (!input) return false;
    input.removeAttribute('readonly');
    input.value = dateRangeValue;
    input.setAttribute('value', dateRangeValue);
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    const form = input.form || document.querySelector('form[method="post" i]') || document.querySelector('form');
    if (!form) return false;
    if (!form.querySelector('input[name="btn-create"]')) {
      const hidden = document.createElement('input');
      hidden.type = 'hidden';
      hidden.name = 'btn-create';
      hidden.value = '';
      form.appendChild(hidden);
    }
    form.submit();
    return true;
  }, dateRange);
}

async function addCookieHeaderToContext(context, cookieHeader, baseUrl) {
  const host = new URL(baseUrl).hostname;
  const cookies = parseCookieHeader(cookieHeader).map(({ name, value }) => ({
    name,
    value,
    domain: host,
    path: '/',
    httpOnly: false,
    secure: true,
    sameSite: 'Lax'
  }));
  if (cookies.length) await context.addCookies(cookies);
}

function parseCookieHeader(header = '') {
  return String(header || '')
    .split(';')
    .map(part => part.trim())
    .filter(Boolean)
    .map(part => {
      const idx = part.indexOf('=');
      if (idx < 0) return null;
      return { name: part.slice(0, idx).trim(), value: part.slice(idx + 1).trim() };
    })
    .filter(x => x?.name);
}


function buildUrlAttempts(baseUrl, selectedDate, recentOnly = false) {
  const urls = [baseUrl];
  const variants = dateParamVariants(selectedDate);
  const preferred = variants.filter(params => {
    const keys = Object.keys(params).join('|').toLowerCase();
    return /date|from|to|start|end|range/.test(keys);
  });
  for (const params of (recentOnly ? preferred.slice(0, 4) : variants)) {
    const u = new URL(baseUrl);
    for (const [key, value] of Object.entries(params)) u.searchParams.set(key, value);
    urls.push(u.toString());
  }
  return [...new Set(urls)];
}

async function fetchText(fetchImpl, url, cookieHeader, timeoutMs, options = {}) {
  const method = options.method || 'GET';
  const headers = reportingHeaders(cookieHeader, options.referer || url, method);
  const fetchBody = normalizeRequestBody(options.body);
  const attempts = Math.max(1, Number(process.env.REPORTING_FETCH_RETRIES || 2));
  let lastErr = null;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetchImpl(url, {
        method,
        headers,
        body: fetchBody,
        redirect: 'follow',
        signal: controller.signal
      });
      const text = await res.text();
      return normalizeFetchResponse({ ok: res.ok, status: res.status, finalUrl: res.url, text });
    } catch (err) {
      lastErr = err;
      // Node's undici fetch can occasionally fail with a generic TypeError: fetch failed
      // against LiteSpeed/PHP pages. In 0.2.25 we fall back to the native http/https
      // client before giving up, and preserve the underlying cause for diagnostics.
      if (attempt === attempts) {
        try {
          return await nodeHttpText(url, cookieHeader, timeoutMs, options);
        } catch (fallbackErr) {
          const e = new Error(`fetch failed: ${describeFetchError(err)}; fallback failed: ${describeFetchError(fallbackErr)}`);
          e.name = err?.name || 'FetchError';
          e.cause = fallbackErr;
          throw e;
        }
      }
      await sleep(Math.min(1200, 250 * attempt));
    } finally {
      clearTimeout(timer);
    }
  }

  throw lastErr || new Error('fetch failed');
}

function reportingHeaders(cookieHeader, referer, method = 'GET') {
  const headers = {
    cookie: cookieHeader,
    accept: 'text/html,application/xhtml+xml,application/json,text/plain,*/*',
    'accept-language': 'en-AU,en;q=0.9,fr-FR;q=0.7,fr;q=0.6',
    'cache-control': 'no-cache',
    pragma: 'no-cache',
    connection: 'close',
    'upgrade-insecure-requests': '1',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'user-agent': userAgent(),
    referer
  };
  if (method !== 'GET') headers['content-type'] = 'application/x-www-form-urlencoded';
  return headers;
}

function normalizeRequestBody(body) {
  if (!body) return undefined;
  if (body instanceof URLSearchParams) return body.toString();
  return body;
}

function normalizeFetchResponse(resp) {
  const text = String(resp.text || '');
  const lower = text.slice(0, 1800).toLowerCase();
  const finalUrl = String(resp.finalUrl || '');
  const looksUnauthenticated = finalUrl.toLowerCase().includes('/index.php') || finalUrl.toLowerCase().includes('login') || (lower.includes('password') && (lower.includes('login') || lower.includes('logout') === false));
  return { ok: resp.ok, status: resp.status, finalUrl, text, looksUnauthenticated };
}

async function nodeHttpText(url, cookieHeader, timeoutMs, options = {}, redirectsLeft = 5) {
  return await new Promise((resolve, reject) => {
    let u;
    try { u = new URL(url); } catch (err) { reject(err); return; }
    const method = options.method || 'GET';
    const body = normalizeRequestBody(options.body);
    const isHttps = u.protocol === 'https:';
    const lib = isHttps ? https : http;
    const headers = reportingHeaders(cookieHeader, options.referer || url, method);
    headers['accept-encoding'] = 'identity';
    if (body) headers['content-length'] = Buffer.byteLength(body);

    const req = lib.request({
      protocol: u.protocol,
      hostname: u.hostname,
      port: u.port || (isHttps ? 443 : 80),
      path: `${u.pathname}${u.search}`,
      method,
      headers,
      timeout: timeoutMs
    }, res => {
      const chunks = [];
      res.on('data', c => chunks.push(Buffer.from(c)));
      res.on('end', async () => {
        const status = res.statusCode || 0;
        const location = res.headers.location;
        if ([301, 302, 303, 307, 308].includes(status) && location && redirectsLeft > 0) {
          try {
            const nextUrl = new URL(location, u).toString();
            const nextOptions = status === 303 ? { ...options, method: 'GET', body: undefined, referer: url } : { ...options, referer: url };
            resolve(await nodeHttpText(nextUrl, cookieHeader, timeoutMs, nextOptions, redirectsLeft - 1));
          } catch (err) { reject(err); }
          return;
        }
        const text = Buffer.concat(chunks).toString('utf8');
        resolve(normalizeFetchResponse({ ok: status >= 200 && status < 300, status, finalUrl: url, text }));
      });
    });
    req.on('timeout', () => { req.destroy(new Error(`timeout after ${timeoutMs}ms`)); });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

function describeFetchError(err) {
  const parts = [];
  if (err?.name) parts.push(err.name);
  if (err?.message) parts.push(err.message);
  const cause = err?.cause;
  if (cause?.code) parts.push(`code=${cause.code}`);
  if (cause?.errno) parts.push(`errno=${cause.errno}`);
  if (cause?.syscall) parts.push(`syscall=${cause.syscall}`);
  if (cause?.hostname) parts.push(`host=${cause.hostname}`);
  return parts.join(' | ') || String(err || 'unknown fetch error');
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function buildCookieHeader(env) {
  const raw = String(env.REPORTING_COOKIE || '').trim();
  const sid = String(env.REPORTING_PHPSESSID || '').trim();
  const email = String(env.REPORTING_EMAIL || '').trim();
  const password = String(env.REPORTING_PASSWORD || '').trim();
  const parts = [];

  // REPORTING_COOKIE should usually be the full raw Cookie header.
  // If only the 32-char PHPSESSID was pasted, build a usable cookie from PHPSESSID
  // and, when available, the legacy reporting.site email/password cookies.
  if (raw) {
    if (raw.includes('=')) parts.push(raw);
    else parts.push(`PHPSESSID=${raw}`);
  }
  if (sid && !parts.some(p => /PHPSESSID=/i.test(p))) parts.push(`PHPSESSID=${sid}`);
  if (email && !parts.some(p => /(?:^|;\s*)email=/i.test(p))) parts.unshift(`email=${encodeURIComponent(email)}`);
  if (password && !parts.some(p => /(?:^|;\s*)password=/i.test(p))) parts.splice(email ? 1 : 0, 0, `password=${encodeURIComponent(password)}`);
  return parts.filter(Boolean).join('; ');
}

function getViews(env) {
  const raw = String(env.REPORTING_VIEWS || '').trim();
  return raw ? raw.split(',').map(x => x.trim()).filter(Boolean) : DEFAULT_VIEWS;
}

function firstNumber(objects = [], keys = []) {
  for (const obj of objects) for (const key of keys) if (Number.isFinite(obj?.[key])) return obj[key];
  return null;
}

function bestPositiveNumber(objects = [], keys = []) {
  const values = [];
  for (const obj of objects) {
    for (const key of keys) {
      const n = Number(obj?.[key]);
      if (Number.isFinite(n) && n > 0) values.push(n);
    }
  }
  if (!values.length) return null;
  return round2(Math.max(...values));
}

function saneCount(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return null;
  // Do not allow selected year/date artifacts such as 2026 to become orders.
  if (n >= 1900 && n <= 2099) return null;
  return Math.max(0, Math.round(n));
}

function categoryRows(productRows = []) {
  const map = new Map();
  for (const row of productRows) {
    const key = row.category || 'Other';
    const existing = map.get(key) || { category: key, qty: 0, sales: 0 };
    existing.qty += Number(row.qty) || 0;
    existing.sales = round2((existing.sales || 0) + (Number(row.sales) || 0));
    map.set(key, existing);
  }
  return [...map.values()].sort((a, b) => (b.sales || b.qty || 0) - (a.sales || a.qty || 0));
}

function buildSellOutSignals(productRows = [], hourlyRows = []) {
  const lateHours = hourlyRows.filter(r => Number(String(r.hour).slice(0, 2)) >= 15 && Number(r.sales) <= 0);
  const highDemand = productRows.slice(0, 8).map(r => ({ product: r.product, signal: 'high-demand-product-watch', lastSale: null, qty: r.qty }));
  if (lateHours.length) highDemand.unshift({ product: 'Cabinet / category', signal: 'possible-early-sell-out-or-quiet-late-trade', lastSale: lateHours[0].hour });
  return highDemand.slice(0, 10);
}

function trimSlash(v) { return String(v || '').replace(/\/+$/, ''); }
function scrubUrl(url) { try { const u = new URL(url); return `${u.origin}${u.pathname}${u.search}`; } catch { return cleanText(url); } }
function userAgent() { return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0'; }
