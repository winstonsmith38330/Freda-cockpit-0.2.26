import { combineHourlyRows, mergeProductRows } from '../utils/pageParsers.js';
import { maskSecret, round2 } from '../utils/safe.js';
import { normalizeReportingDate, hourFromTimestamp } from '../utils/dateUtils.js';

export async function syncSquare(env, fetchImpl = fetch, opts = {}) {
  const selectedDate = normalizeReportingDate(opts.reportingDate || opts.date || opts.today, env.TIMEZONE || 'Australia/Sydney');
  const startedAt = new Date().toISOString();
  const result = {
    ok: false,
    status: 'not_synced',
    mode: 'square-official-api',
    source: 'Square API',
    reportingDate: selectedDate,
    periodMatched: false,
    startedAt,
    finishedAt: null,
    square: {},
    details: [],
    warnings: [],
    errors: [],
    diagnostics: squareDiagnostics(env)
  };
  const token = String(env.SQUARE_ACCESS_TOKEN || '').trim();
  const locationId = String(env.SQUARE_LOCATION_ID || '').trim();
  if (!token || !locationId) {
    if (!token) result.errors.push('Missing SQUARE_ACCESS_TOKEN. Create/copy it from Square Developer Console > app > Credentials.');
    if (!locationId) result.errors.push('Missing SQUARE_LOCATION_ID. Use diagnostics after adding token, or Developer Console > app > Locations.');
    result.finishedAt = new Date().toISOString();
    return result;
  }

  const base = squareBase(env);
  const headers = squareHeaders(env);
  const offset = env.SQUARE_TIMEZONE_OFFSET || env.REPORTING_TIMEZONE_OFFSET || '+10:00';
  const beginTime = `${selectedDate}T00:00:00${offset}`;
  const endTime = `${selectedDate}T23:59:59${offset}`;
  const detail = { store: "Frieda's Pies", ok: false, status: 'failed', locationId: maskSecret(locationId), beginTime, endTime, payments: 0, orders: 0, warnings: [], errors: [] };

  try {
    const payments = await listPayments(fetchImpl, base, headers, locationId, beginTime, endTime, Number(env.SQUARE_MAX_PAGES || 10));
    const completed = payments.filter(p => !p.status || ['COMPLETED', 'APPROVED'].includes(String(p.status).toUpperCase()));
    const grossCents = completed.reduce((sum, p) => sum + Number(p?.amount_money?.amount || 0), 0);
    const refundCents = completed.reduce((sum, p) => sum + Number(p?.refunded_money?.amount || 0), 0);
    const netCents = grossCents - refundCents;
    const transactions = completed.length;
    const hourlyRows = combineHourlyRows(completed.map(p => ({ hour: hourFromTimestamp(p.created_at || ''), sales: Number(p?.amount_money?.amount || 0) / 100, orders: 1 })));

    let orderRows = [];
    try {
      const orders = await searchOrders(fetchImpl, base, headers, locationId, beginTime, endTime, Number(env.SQUARE_MAX_PAGES || 6));
      detail.orders = orders.length;
      orderRows = orders.flatMap(order => (order.line_items || []).map(line => ({
        product: line.name || line.catalog_object_id || 'Unknown item',
        qty: Number(line.quantity || 0),
        sales: Number(line?.total_money?.amount || 0) / 100,
        category: 'Pies'
      })));
    } catch (err) {
      detail.warnings.push(`Orders API product detail unavailable: ${err.message || err}`);
    }

    const sales = round2(netCents / 100);
    const grossSales = round2(grossCents / 100);
    const refunds = round2(refundCents / 100);
    const productRows = mergeProductRows(orderRows).slice(0, 50);
    const metric = {
      store: "Frieda's Pies",
      source: 'square-api',
      period: selectedDate,
      periodLabel: 'Square Today',
      grossSales,
      totalCollected: grossSales,
      refunds,
      netSales: sales,
      sales,
      totalSales: sales,
      transactions,
      orders: transactions,
      aov: transactions ? round2(sales / transactions) : null,
      hourlyRows,
      productRows,
      topProduct: productRows[0]?.product || null,
      capturedAt: new Date().toISOString(),
      warnings: detail.warnings
    };
    detail.ok = true;
    detail.status = 'success';
    detail.payments = completed.length;
    result.square["Frieda's Pies"] = metric;
  } catch (err) {
    detail.errors.push(String(err?.message || err));
    result.errors.push(String(err?.message || err));
  }
  result.details.push(detail);
  result.ok = Object.keys(result.square).length > 0;
  result.status = result.ok ? 'success' : 'not_synced';
  result.periodMatched = result.ok;
  result.finishedAt = new Date().toISOString();
  return result;
}

export async function diagnoseSquare(env, fetchImpl = fetch) {
  const diag = squareDiagnostics(env);
  if (!env.SQUARE_ACCESS_TOKEN) return { ...diag, apiReachable: false, locations: [], errors: ['Missing SQUARE_ACCESS_TOKEN.'] };
  try {
    const base = squareBase(env);
    const json = await fetchJson(fetchImpl, `${base}/v2/locations`, squareHeaders(env), Number(env.SQUARE_SYNC_TIMEOUT_MS || 15000));
    return {
      ...diag,
      apiReachable: true,
      locations: (json.locations || []).map(loc => ({ idPreview: maskSecret(loc.id), name: loc.name, status: loc.status, type: loc.type, country: loc.country, currency: loc.currency })),
      note: 'Use the full active location ID in SQUARE_LOCATION_ID. The diagnostic masks it in the response.'
    };
  } catch (err) {
    return { ...diag, apiReachable: false, locations: [], errors: [String(err?.message || err)] };
  }
}

export function squareDiagnostics(env, extra = {}) {
  return {
    source: 'Square API',
    environment: env.SQUARE_ENVIRONMENT || 'production',
    accessToken: maskSecret(env.SQUARE_ACCESS_TOKEN || ''),
    locationId: maskSecret(env.SQUARE_LOCATION_ID || ''),
    timezoneOffset: env.SQUARE_TIMEZONE_OFFSET || env.REPORTING_TIMEZONE_OFFSET || '+10:00',
    squareVersion: env.SQUARE_VERSION || '2026-05-20',
    requiredScopes: ['PAYMENTS_READ', 'ORDERS_READ', 'MERCHANT_PROFILE_READ'],
    ...extra
  };
}

async function listPayments(fetchImpl, base, headers, locationId, beginTime, endTime, maxPages) {
  const out = [];
  let cursor = '';
  for (let page = 0; page < maxPages; page++) {
    const url = new URL('/v2/payments', base);
    url.searchParams.set('location_id', locationId);
    url.searchParams.set('begin_time', beginTime);
    url.searchParams.set('end_time', endTime);
    url.searchParams.set('sort_order', 'ASC');
    url.searchParams.set('limit', '100');
    if (cursor) url.searchParams.set('cursor', cursor);
    const json = await fetchJson(fetchImpl, url.toString(), headers, 20000);
    out.push(...(json.payments || []));
    cursor = json.cursor || '';
    if (!cursor) break;
  }
  return out;
}

async function searchOrders(fetchImpl, base, headers, locationId, beginTime, endTime, maxPages) {
  const out = [];
  let cursor = '';
  for (let page = 0; page < maxPages; page++) {
    const body = {
      location_ids: [locationId],
      query: {
        filter: {
          date_time_filter: { created_at: { start_at: beginTime, end_at: endTime } },
          state_filter: { states: ['COMPLETED', 'OPEN'] }
        },
        sort: { sort_field: 'CREATED_AT', sort_order: 'ASC' }
      },
      limit: 100
    };
    if (cursor) body.cursor = cursor;
    const json = await fetchJson(fetchImpl, `${base}/v2/orders/search`, headers, 20000, 'POST', body);
    out.push(...(json.orders || []));
    cursor = json.cursor || '';
    if (!cursor) break;
  }
  return out;
}

async function fetchJson(fetchImpl, url, headers, timeoutMs, method = 'GET', body) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetchImpl(url, { method, headers, body: body ? JSON.stringify(body) : undefined, signal: controller.signal });
    const text = await res.text();
    let json = {};
    try { json = text ? JSON.parse(text) : {}; } catch (_err) { throw new Error(`Square returned non-JSON: ${text.slice(0, 180)}`); }
    if (!res.ok) throw new Error(`Square HTTP ${res.status}: ${JSON.stringify(json.errors || json).slice(0, 300)}`);
    return json;
  } finally {
    clearTimeout(timer);
  }
}

function squareBase(env) {
  return String(env.SQUARE_ENVIRONMENT || 'production').toLowerCase() === 'sandbox' ? 'https://connect.squareupsandbox.com' : 'https://connect.squareup.com';
}

function squareHeaders(env) {
  return {
    authorization: `Bearer ${String(env.SQUARE_ACCESS_TOKEN || '').trim()}`,
    accept: 'application/json',
    'content-type': 'application/json',
    'square-version': env.SQUARE_VERSION || '2026-05-20'
  };
}
