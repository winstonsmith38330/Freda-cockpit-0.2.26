import { parseUberUiText, combineHourlyRows } from '../utils/pageParsers.js';
import { cleanText, maskSecret, round2 } from '../utils/safe.js';
import { normalizeReportingDate, periodMatchesSelectedDate } from '../utils/dateUtils.js';

const UBER_STORES = [
  { name: 'Beverly Hills', idKey: 'UBER_STORE_BEVERLY_HILLS', nameKey: 'UBER_STORE_NAME_BEVERLY_HILLS', defaultVisible: 'L.A Donut' },
  { name: 'Penrith', idKey: 'UBER_STORE_PENRITH', nameKey: 'UBER_STORE_NAME_PENRITH', defaultVisible: 'L.A DONUTS (Penrith)' },
  { name: 'Taren Point', idKey: 'UBER_STORE_TAREN_POINT', nameKey: 'UBER_STORE_NAME_TAREN_POINT', defaultVisible: 'L.A Donuts Taren Point' }
];

export async function syncUber(env, fetchImpl = fetch, opts = {}) {
  const selectedDate = normalizeReportingDate(opts.reportingDate || opts.date || opts.today, env.TIMEZONE || 'Australia/Sydney');
  const startedAt = new Date().toISOString();
  const result = {
    ok: false,
    status: 'not_synced',
    mode: 'uber-manager-api-or-browser',
    source: 'Uber Eats Manager',
    reportingDate: selectedDate,
    periodMatched: false,
    startedAt,
    finishedAt: null,
    uberEats: {},
    details: [],
    warnings: [],
    errors: [],
    diagnostics: uberDiagnostics(env)
  };
  if (!String(env.UBER_COOKIE || '').trim()) {
    result.errors.push('Missing UBER_COOKIE. Add a fresh Uber Manager Cookie header in Render Environment.');
    result.finishedAt = new Date().toISOString();
    return result;
  }

  for (const store of UBER_STORES) {
    const detail = await syncUberStore(env, fetchImpl, store, selectedDate).catch(err => ({ store: store.name, ok: false, status: 'failed', errors: [String(err?.message || err)], warnings: [] }));
    result.details.push(detail);
    if (detail.metric) result.uberEats[store.name] = detail.metric;
  }
  result.ok = Object.keys(result.uberEats).length > 0;
  result.status = result.ok ? 'success' : 'not_synced';
  result.periodMatched = result.ok;
  if (!result.ok && !result.errors.length) result.errors.push('Uber did not produce exact selected-date values. Stale WTD/month values were rejected.');
  result.finishedAt = new Date().toISOString();
  return result;
}

export function uberDiagnostics(env, extra = {}) {
  const manager = managerBase(env);
  return {
    source: 'Uber Eats Manager',
    cookie: maskSecret(env.UBER_COOKIE || ''),
    managerBaseUrl: manager,
    note: 'The same home UUID can appear for all stores. 0.2.14 treats it as the manager/home ID, not proof of individual restaurant IDs.',
    stores: UBER_STORES.map(s => ({
      store: s.name,
      idEnv: s.idKey,
      id: maskSecret(env[s.idKey] || ''),
      visibleNameEnv: s.nameKey,
      visibleName: env[s.nameKey] || s.defaultVisible
    })),
    browserFallbackEnabled: String(env.ENABLE_BROWSER_SYNC || '').toLowerCase() === 'true',
    ...extra
  };
}

async function syncUberStore(env, fetchImpl, store, selectedDate) {
  const detail = { store: store.name, ok: false, status: 'not_synced', attemptedUrls: [], warnings: [], errors: [] };
  const simple = await tryFetchManagerPage(env, fetchImpl, store, selectedDate, detail).catch(err => ({ error: String(err?.message || err) }));
  if (simple?.metric) return { ...detail, ok: true, status: 'success', metric: simple.metric };
  if (simple?.error) detail.warnings.push(`Simple Uber fetch not enough: ${simple.error}`);

  if (String(env.ENABLE_BROWSER_SYNC || '').toLowerCase() === 'true') {
    const browser = await tryUberBrowser(env, store, selectedDate, detail).catch(err => ({ error: String(err?.message || err) }));
    if (browser?.metric) return { ...detail, ok: true, status: 'success', metric: browser.metric };
    if (browser?.error) detail.errors.push(`Browser Uber sync failed: ${browser.error}`);
  } else {
    detail.warnings.push('Browser sync disabled. Enable ENABLE_BROWSER_SYNC=true and install Playwright browsers to parse Uber Manager UI automatically.');
  }
  return detail;
}

async function tryFetchManagerPage(env, fetchImpl, store, selectedDate, detail) {
  const url = buildUberSalesUrl(env, store, selectedDate);
  detail.attemptedUrls.push(scrubUrl(url));
  const text = await fetchText(fetchImpl, url, {
    cookie: addSelectedRestaurant(env.UBER_COOKIE || '', env[store.idKey] || ''),
    accept: 'text/html,application/xhtml+xml,application/json,text/plain,*/*',
    'accept-language': 'en-AU,en;q=0.9,fr-FR;q=0.7,fr;q=0.6',
    referer: managerBase(env),
    'user-agent': userAgent()
  }, Number(env.UBER_SYNC_TIMEOUT_MS || 20000));
  const parsed = parseUberUiText(text);
  if (!periodMatchesSelectedDate(parsed.period, selectedDate)) return { error: `Fetched Uber page did not expose selected daily period ${selectedDate}.` };
  const metric = metricFromParsed(store.name, selectedDate, parsed, 'uber-manager-fetch');
  if (!metric) return { error: 'No sales/orders/AOV cards were visible in fetched Uber HTML. Uber probably rendered the app client-side.' };
  return { metric };
}

async function tryUberBrowser(env, store, selectedDate, detail) {
  let chromium;
  try {
    const mod = await import('playwright');
    chromium = mod.chromium;
  } catch (_err) {
    return { error: 'Playwright package/browser is not available. Use npm install and npx playwright install chromium for browser fallback.' };
  }
  const browser = await chromium.launch({ headless: String(env.PLAYWRIGHT_HEADLESS || 'true').toLowerCase() !== 'false' });
  try {
    const context = await browser.newContext({ extraHTTPHeaders: { cookie: env.UBER_COOKIE || '', 'user-agent': userAgent() } });
    const candidates = [];
    context.on('response', async response => {
      const url = response.url();
      if (!/analytics|sales|graphql|restaurant|cohort|summary/i.test(url)) return;
      try {
        const ct = response.headers()['content-type'] || '';
        if (ct.includes('json')) candidates.push({ url: scrubUrl(url), json: await response.json().catch(() => null) });
      } catch (_err) {}
    });
    const page = await context.newPage();
    const url = buildUberSalesUrl(env, store, selectedDate);
    detail.attemptedUrls.push(`${scrubUrl(url)}#browser`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: Number(env.BROWSER_SYNC_TIMEOUT_MS || 45000) });

    const visibleName = env[store.nameKey] || store.defaultVisible;
    await selectUberStore(page, visibleName).catch(err => detail.warnings.push(`Store selector not confirmed: ${err.message || err}`));
    await setUberDate(page, selectedDate).catch(err => detail.warnings.push(`Date selector not confirmed: ${err.message || err}`));
    await page.waitForLoadState('networkidle', { timeout: 12000 }).catch(() => {});
    const bodyText = cleanText(await page.locator('body').innerText({ timeout: 5000 }).catch(() => ''));
    const parsed = parseUberUiText(bodyText);
    if (!periodMatchesSelectedDate(parsed.period, selectedDate)) {
      return { error: `Uber rendered period was ${parsed.period?.label || parsed.period?.start || 'unknown'}, not ${selectedDate}.` };
    }
    const metric = metricFromParsed(store.name, selectedDate, parsed, 'uber-manager-browser-render');
    if (metric) return { metric, candidates: candidates.slice(0, 15).map(c => c.url) };
    return { error: 'Uber browser page loaded but no exact sales/order cards were parsed.' };
  } finally {
    await browser.close().catch(() => {});
  }
}

async function selectUberStore(page, visibleName) {
  if (!visibleName) return;
  const body = await page.locator('body').innerText({ timeout: 5000 }).catch(() => '');
  if (body.toLowerCase().includes(visibleName.toLowerCase())) return;
  const candidateButtons = ['button[aria-haspopup="listbox"]', 'button:has-text("L.A")', '[role="button"]'];
  for (const sel of candidateButtons) {
    const btn = await page.$(sel).catch(() => null);
    if (!btn) continue;
    await btn.click().catch(() => {});
    const option = page.getByText(visibleName, { exact: false }).first();
    if (await option.count().catch(() => 0)) {
      await option.click().catch(() => {});
      return;
    }
  }
}

async function setUberDate(page, selectedDate) {
  const url = new URL(page.url());
  if (url.searchParams.get('start') === selectedDate && url.searchParams.get('end') === selectedDate) return;
  url.searchParams.set('dateRange', 'custom');
  url.searchParams.set('start', selectedDate);
  url.searchParams.set('end', selectedDate);
  await page.goto(url.toString(), { waitUntil: 'domcontentloaded', timeout: 30000 });
}

function metricFromParsed(storeName, selectedDate, parsed, source) {
  const m = parsed.metrics || {};
  const sales = m.sales ?? m.totalSales ?? m.netSales;
  const orders = m.orders ?? m.transactions;
  const aov = m.aov ?? (sales != null && orders ? round2(sales / orders) : null);
  if (sales == null && orders == null && aov == null) return null;
  return {
    store: storeName,
    source,
    period: selectedDate,
    periodLabel: 'Uber Today',
    sales,
    totalSales: sales,
    netSales: sales,
    orders,
    transactions: orders,
    aov,
    hourlyRows: combineHourlyRows(parsed.hourlyRows || []),
    capturedAt: new Date().toISOString()
  };
}

function buildUberSalesUrl(env, store, selectedDate) {
  const explicit = String(env[`UBER_URL_${store.name.replace(/\W+/g, '_').toUpperCase()}`] || '').trim();
  if (explicit) return explicit.replaceAll('{date}', selectedDate).replaceAll('{start}', selectedDate).replaceAll('{end}', selectedDate);
  const base = managerBase(env).replace(/\/+$/, '');
  return `${base}/analytics/sales-v2?dateRange=custom&start=${selectedDate}&end=${selectedDate}`;
}

function managerBase(env) {
  const raw = String(env.UBER_MANAGER_BASE_URL || env.UBER_BASE_URL || 'https://merchants.ubereats.com/manager/home/503ef13c-4f47-4581-acdf-2179564db004').trim();
  return raw.replace(/\/analytics\/.*$/, '').replace(/\/+$/, '');
}

function addSelectedRestaurant(cookie, storeId) {
  if (!storeId || /selectedRestaurant=/i.test(cookie)) return cookie;
  return `${cookie}; selectedRestaurant=${storeId}`;
}

async function fetchText(fetchImpl, url, headers, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetchImpl(url, { headers, redirect: 'follow', signal: controller.signal });
    const text = await res.text();
    if (!res.ok) throw new Error(`HTTP ${res.status} from Uber: ${text.slice(0, 180)}`);
    if (/sign in|login|authenticate/i.test(text.slice(0, 1500))) throw new Error('Uber returned a login/authentication page. Refresh UBER_COOKIE.');
    return text;
  } finally {
    clearTimeout(timer);
  }
}

function scrubUrl(url) { try { const u = new URL(url); return `${u.origin}${u.pathname}${u.search}`; } catch { return cleanText(url); } }
function userAgent() { return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 FredaOpsCockpit/0.2.14'; }
