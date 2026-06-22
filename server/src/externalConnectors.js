// Freda Ops Cockpit Beta 0.2.12
// Same-day Uber / Square connectors. These intentionally reject stale WTD/MTD data.

import { extractMetricCards, extractHourlyRows } from './captureParser.js';

const UBER_STORES = [
  { name: 'Beverly Hills', key: 'UBER_STORE_BEVERLY_HILLS', urlKey: 'UBER_URL_BEVERLY_HILLS' },
  { name: 'Penrith', key: 'UBER_STORE_PENRITH', urlKey: 'UBER_URL_PENRITH' },
  { name: 'Taren Point', key: 'UBER_STORE_TAREN_POINT', urlKey: 'UBER_URL_TAREN_POINT' }
];

export async function syncUberDaily(env, fetchImpl, opts = {}) {
  const today = normalizeDate(opts.today || opts.reportingDate || env.REPORTING_TODAY || currentDateInTimeZone(env.REPORTING_TIMEZONE || 'Australia/Sydney'));
  const startedAt = new Date().toISOString();
  const result = { ok: false, mode: 'uber-manager-cookie-daily', today, startedAt, finishedAt: null, details: [], uberEats: {}, errors: [] };
  const cookie = String(env.UBER_COOKIE || '').trim();
  if (!cookie) {
    result.errors.push('Missing UBER_COOKIE in Render Environment. Use the Request Headers > Cookie value from merchants.ubereats.com.');
    result.finishedAt = new Date().toISOString();
    return result;
  }

  for (const store of UBER_STORES) {
    const storeId = String(env[store.key] || '').trim();
    const explicitUrl = String(env[store.urlKey] || '').trim();
    const detail = { store: store.name, ok: false, sourceUrl: explicitUrl || null, errors: [] };
    if (!storeId && !explicitUrl) {
      detail.errors.push(`Missing ${store.key} or ${store.urlKey}.`);
      result.details.push(detail);
      continue;
    }
    try {
      const url = buildUberUrl(env, storeId, explicitUrl, today);
      detail.sourceUrl = scrubUrl(url);
      const html = await fetchText(fetchImpl, url, {
        cookie: withSelectedRestaurant(cookie, storeId),
        accept: 'text/html,application/xhtml+xml,application/json,text/plain,*/*',
        'accept-language': env.UBER_ACCEPT_LANGUAGE || 'en-AU,en;q=0.9,fr-FR;q=0.8,fr;q=0.7',
        'user-agent': userAgent(),
        referer: 'https://merchants.ubereats.com/'
      }, Number(env.UBER_SYNC_TIMEOUT_MS || 15000));
      const parsed = parseUberPage(html, today);
      detail.metrics = parsed.metrics;
      detail.hourlyRows = parsed.hourlyRows?.length || 0;
      if (!parsed.ok) {
        detail.errors.push(parsed.error || 'Uber page fetched but no same-day sales KPI was detected. Uber may render values client-side or the cookie may be blocked for Render.');
      } else {
        result.uberEats[store.name] = {
          ...parsed.metrics,
          store: store.name,
          period: today,
          periodLabel: 'Uber Today',
          hourlyRows: parsed.hourlyRows || [],
          source: 'uber-manager-cookie-sync',
          capturedAt: new Date().toISOString()
        };
        detail.ok = true;
      }
    } catch (err) {
      detail.errors.push(String(err?.message || err));
      result.errors.push(`${store.name}: ${String(err?.message || err)}`);
    }
    result.details.push(detail);
  }
  result.ok = Object.keys(result.uberEats).length > 0;
  if (!result.ok && !result.errors.length) result.errors.push('No same-day Uber sales parsed from Uber Manager.');
  result.finishedAt = new Date().toISOString();
  return result;
}

export async function syncSquareDaily(env, fetchImpl, opts = {}) {
  const today = normalizeDate(opts.today || opts.reportingDate || env.REPORTING_TODAY || currentDateInTimeZone(env.REPORTING_TIMEZONE || 'Australia/Sydney'));
  const startedAt = new Date().toISOString();
  const result = { ok: false, mode: 'square-payments-api-daily', today, startedAt, finishedAt: null, details: [], square: {}, errors: [] };
  const token = String(env.SQUARE_ACCESS_TOKEN || '').trim();
  const locationId = String(env.SQUARE_LOCATION_ID || '').trim();
  const environment = String(env.SQUARE_ENVIRONMENT || 'production').toLowerCase();
  if (!token) result.errors.push('Missing SQUARE_ACCESS_TOKEN.');
  if (!locationId) result.errors.push('Missing SQUARE_LOCATION_ID.');
  if (result.errors.length) { result.finishedAt = new Date().toISOString(); return result; }

  const base = environment === 'sandbox' ? 'https://connect.squareupsandbox.com' : 'https://connect.squareup.com';
  const offset = env.SQUARE_TIMEZONE_OFFSET || env.REPORTING_TIMEZONE_OFFSET || '+10:00';
  const beginTime = `${today}T00:00:00${offset}`;
  const endTime = `${today}T23:59:59${offset}`;
  const headers = {
    authorization: `Bearer ${token}`,
    accept: 'application/json',
    'content-type': 'application/json',
    'square-version': env.SQUARE_VERSION || '2026-05-20'
  };
  const detail = { store: "Frieda's Pies", ok: false, locationId, beginTime, endTime, payments: 0, errors: [] };
  try {
    let cursor = '';
    const payments = [];
    for (let page = 0; page < Number(env.SQUARE_MAX_PAGES || 10); page++) {
      const url = new URL('/v2/payments', base);
      url.searchParams.set('location_id', locationId);
      url.searchParams.set('begin_time', beginTime);
      url.searchParams.set('end_time', endTime);
      url.searchParams.set('sort_order', 'DESC');
      url.searchParams.set('limit', '100');
      if (cursor) url.searchParams.set('cursor', cursor);
      const json = await fetchJson(fetchImpl, url.toString(), headers, Number(env.SQUARE_SYNC_TIMEOUT_MS || 15000));
      payments.push(...(json.payments || []));
      cursor = json.cursor || '';
      if (!cursor) break;
    }
    const completed = payments.filter(p => !p.status || ['COMPLETED', 'APPROVED'].includes(String(p.status).toUpperCase()));
    const totalCents = completed.reduce((sum, p) => sum + Number(p?.amount_money?.amount || 0), 0);
    const refundCents = completed.reduce((sum, p) => sum + Number(p?.refunded_money?.amount || 0), 0);
    const netCents = totalCents - refundCents;
    const transactions = completed.length;
    const sales = round2(netCents / 100);
    result.square["Frieda's Pies"] = {
      store: "Frieda's Pies",
      period: today,
      periodLabel: 'Square Today',
      netSales: sales,
      sales,
      totalCollected: round2(totalCents / 100),
      refunds: round2(refundCents / 100),
      transactions,
      orders: transactions,
      aov: transactions ? round2(sales / transactions) : null,
      source: 'square-payments-api',
      capturedAt: new Date().toISOString()
    };
    detail.ok = true;
    detail.payments = completed.length;
  } catch (err) {
    detail.errors.push(String(err?.message || err));
    result.errors.push(String(err?.message || err));
  }
  result.details.push(detail);
  result.ok = Object.keys(result.square).length > 0;
  result.finishedAt = new Date().toISOString();
  return result;
}

function buildUberUrl(env, storeId, explicitUrl, today) {
  if (explicitUrl) return explicitUrl.replaceAll('{date}', today).replaceAll('{start}', today).replaceAll('{end}', today);
  const base = String(env.UBER_BASE_URL || 'https://merchants.ubereats.com').replace(/\/+$/, '');
  const id = encodeURIComponent(storeId);
  // This matches the browser URL Nicolas is using. It is a private web endpoint, so it can change.
  return `${base}/manager/home/${id}/analytics/sales-v2?dateRange=custom&start=${today}&end=${today}`;
}

function withSelectedRestaurant(cookie, storeId) {
  if (!storeId) return cookie;
  if (/selectedRestaurant=/.test(cookie)) return cookie;
  return `${cookie}; selectedRestaurant=${storeId}`;
}

function parseUberPage(text, today) {
  const metrics = extractMetricCards(text || '');
  const hourlyRows = extractHourlyRows(text || '');
  const hasSales = Number.isFinite(metrics.sales) || Number.isFinite(metrics.totalSales) || Number.isFinite(metrics.netSales);
  const period = normalizeDate(metrics.period || today);
  if (!hasSales) return { ok: false, metrics, hourlyRows, error: 'No Uber sales KPI found in response body.' };
  if (period && period !== today && !String(metrics.periodLabel || '').toLowerCase().includes('today')) {
    return { ok: false, metrics, hourlyRows, error: `Parsed Uber period ${period}, not ${today}; rejected as stale.` };
  }
  return {
    ok: true,
    metrics: {
      sales: metrics.sales ?? metrics.totalSales ?? metrics.netSales,
      totalSales: metrics.sales ?? metrics.totalSales ?? metrics.netSales,
      orders: metrics.orders ?? metrics.transactions ?? null,
      transactions: metrics.orders ?? metrics.transactions ?? null,
      aov: metrics.aov ?? metrics.averageSpend ?? null,
      averageSpend: metrics.aov ?? metrics.averageSpend ?? null
    },
    hourlyRows
  };
}

async function fetchText(fetchImpl, url, headers, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetchImpl(url, { headers, redirect: 'follow', signal: controller.signal });
    const text = await res.text();
    if (!res.ok) throw new Error(`HTTP ${res.status} from ${new URL(url).hostname}: ${text.slice(0, 180)}`);
    return text;
  } finally { clearTimeout(timer); }
}

async function fetchJson(fetchImpl, url, headers, timeoutMs) {
  const text = await fetchText(fetchImpl, url, headers, timeoutMs);
  try { return JSON.parse(text); } catch (_err) { throw new Error(`Expected JSON but received: ${text.slice(0, 120)}`); }
}

function scrubUrl(url) { try { const u = new URL(url); return `${u.origin}${u.pathname}${u.search}`; } catch { return url; } }
function userAgent(){ return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 FredaOpsCockpit/0.2.12'; }
function round2(n){ return Math.round((Number(n)||0)*100)/100; }
function normalizeDate(value = '') { const text=String(value||'').trim(); const iso=text.match(/20\d{2}-\d{1,2}-\d{1,2}/); if(iso){ const [y,m,d]=iso[0].split('-'); return `${y}-${m.padStart(2,'0')}-${d.padStart(2,'0')}`; } const au=text.match(/(\d{1,2})[/-](\d{1,2})[/-](20\d{2})/); if(au) return `${au[3]}-${au[2].padStart(2,'0')}-${au[1].padStart(2,'0')}`; return text.slice(0,10); }
function currentDateInTimeZone(timeZone){ try{ const parts=new Intl.DateTimeFormat('en-CA',{timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()); const get=t=>parts.find(p=>p.type===t)?.value; return `${get('year')}-${get('month')}-${get('day')}`; }catch(_){ return new Date().toISOString().slice(0,10); } }
