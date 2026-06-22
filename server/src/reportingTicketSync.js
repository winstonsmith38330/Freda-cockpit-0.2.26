// Freda Ops Cockpit Beta 0.2.12
// Primary POS sync now uses the same script.php?ticketId= JSON endpoint as Nicolas' working Python harvester.
// Dashboard pages remain fallback/browser-capture only.

const DEFAULT_STORES = [
  { name: 'Beverly Hills', slugKey: 'REPORTING_STORE_SLUG_Beverly_Hills', defaultSlug: 'ladonuts_beverlyhills', watermarkKey: 'REPORTING_LAST_TICKET_Beverly_Hills' },
  { name: 'Penrith', slugKey: 'REPORTING_STORE_SLUG_Penrith', defaultSlug: 'ladonuts_penrith', watermarkKey: 'REPORTING_LAST_TICKET_Penrith' },
  { name: 'Taren Point', slugKey: 'REPORTING_STORE_SLUG_Taren_Point', defaultSlug: 'ladonuts_tarenpoint', watermarkKey: 'REPORTING_LAST_TICKET_Taren_Point' }
];

const DAILY_SAFETY_LIMITS = {
  maxRowsPerStoreDay: 5000,
  maxSalesPerStoreDay: 60000,
  maxAov: 300
};

export async function syncTicketSales(env, fetchImpl, opts = {}) {
  const startedAt = new Date().toISOString();
  const config = readConfig(env, opts);
  const result = {
    ok: false,
    mode: 'script.php-ticket-json/date-filtered',
    today: config.today,
    startedAt,
    finishedAt: null,
    details: [],
    reportingPOS: {},
    errors: []
  };

  if (!config.cookieHeader && !(config.email && config.password)) {
    result.errors.push('Missing REPORTING_COOKIE / REPORTING_PHPSESSID or REPORTING_EMAIL / REPORTING_PASSWORD in Render Environment.');
    result.finishedAt = new Date().toISOString();
    return result;
  }

  let cookieHeader = config.cookieHeader;
  if (!cookieHeader && config.email && config.password) {
    const login = await attemptLogin(config, fetchImpl);
    result.login = login;
    cookieHeader = login.cookieHeader || '';
  }
  if (!cookieHeader) {
    result.errors.push('Could not obtain an authenticated reporting.site session. Use REPORTING_COOKIE copied from the ticket_sales.php Network request.');
    result.finishedAt = new Date().toISOString();
    return result;
  }

  const seedWatermarks = opts.seed?.posTicketWatermarks || {};
  const liveWatermarks = opts.liveState?.posTicketWatermarks || {};
  const liveRowsByStore = opts.liveState?.ticketRowsByStore || {};

  for (const store of config.stores) {
    const envStart = Number(env[store.watermarkKey] || 0);
    const seedStart = Number(seedWatermarks[store.name] || 0);
    const liveStart = Number(liveWatermarks[store.name] || 0);
    const explicitEnd = Number(env[`REPORTING_LATEST_TICKET_${safeEnvName(store.name)}`] || opts.latestTickets?.[store.name] || 0);
    // Beta 0.2.12: this is an anchor, not a lower-bound date filter. Earlier builds only looked for IDs
    // newer than this value, so changing the date to yesterday still returned zero rows. We now scan a
    // backward ticket window from the latest known/discovered ID and then apply the date filter to rows.
    const anchor = Math.max(envStart, seedStart, liveStart, 0);
    const storeDetail = {
      store: store.name,
      slug: store.slug,
      ok: false,
      rows: 0,
      todayRows: 0,
      ticketAnchor: anchor,
      ticketStart: null,
      ticketEnd: null,
      discoveredLatest: null,
      scannedTickets: 0,
      errors: [],
      source: 'script.php?ticketId= backward date-filtered scan'
    };

    try {
      const latest = explicitEnd || await discoverLatestTicketId(fetchImpl, config, store, anchor, cookieHeader, storeDetail) || anchor;
      storeDetail.discoveredLatest = latest || null;
      storeDetail.ticketEnd = latest || null;
      if (!latest || latest < 1) {
        storeDetail.errors.push(`No ticket anchor available for ${store.name}. Set REPORTING_LATEST_TICKET_${safeEnvName(store.name)} once, or keep the seed watermark.`);
        result.details.push(storeDetail);
        continue;
      }

      const maxFetch = Number(env.REPORTING_MAX_TICKETS_PER_STORE || env.REPORTING_SCAN_BACK_TICKETS || opts.maxTicketsPerStore || 12000);
      const rangeStart = Math.max(1, latest - maxFetch + 1);
      storeDetail.ticketStart = rangeStart;
      const fetched = await fetchTicketRange(fetchImpl, config, store, rangeStart, latest, cookieHeader, storeDetail);
      const previousRows = Array.isArray(liveRowsByStore[store.name]) ? liveRowsByStore[store.name] : [];
      const allRows = dedupeTicketRows([...(config.keepCachedRows ? previousRows : []), ...fetched.rows]);
      const limitedRows = keepUsefulRowWindow(allRows, config.today, config.lookbackDays);
      const summary = aggregateTicketRows(store.name, limitedRows, config.today);
      const datesSeen = Array.from(new Set(limitedRows.map(r => r.date))).sort();
      storeDetail.rows = limitedRows.length;
      storeDetail.todayRows = summary.todayRows;
      storeDetail.datesSeen = datesSeen.slice(-12);
      storeDetail.summary = {
        totalSales: summary.totalSales,
        orders: summary.orders,
        aov: summary.aov,
        firstTicket: summary.firstTicketTime,
        lastTicket: summary.lastTicketTime,
        unsafe: summary.unsafe || false
      };

      result.ticketRowsByStore = result.ticketRowsByStore || {};
      result.ticketRowsByStore[store.name] = limitedRows;
      result.posTicketWatermarks = result.posTicketWatermarks || {};
      result.posTicketWatermarks[store.name] = latest;

      if (summary.todayRows > 0 && !summary.unsafe) {
        result.reportingPOS[store.name] = summary;
        storeDetail.ok = true;
      } else if (summary.unsafe) {
        storeDetail.errors.push(summary.unsafeReason || 'Unsafe POS parse rejected.');
      } else {
        storeDetail.errors.push(`No exact same-day ticket JSON rows matched ${config.today}. Scanned ticket IDs ${rangeStart}-${latest}. Dates seen: ${datesSeen.slice(-8).join(', ') || 'none'}. Increase REPORTING_SCAN_BACK_TICKETS if the selected day is older than the scanned window.`);
      }
    } catch (err) {
      storeDetail.errors.push(String(err?.message || err));
      result.errors.push(`${store.name}: ${String(err?.message || err)}`);
    }

    result.details.push(storeDetail);
  }

  result.ok = Object.keys(result.reportingPOS).length > 0;
  if (!result.ok && !result.errors.length) result.errors.push('No usable same-day script.php ticket rows parsed.');
  result.finishedAt = new Date().toISOString();
  return result;
}

async function discoverLatestTicketId(fetchImpl, config, store, knownStart, cookieHeader, detail) {
  const maxForward = Number(config.maxDiscoverForward || 15000);
  const start = Math.max(1, knownStart);
  let low = start;
  let high = start + 1;
  let step = Number(config.discoveryStep || 128);
  let tested = 0;

  // Move high upward until it is beyond the latest existing ticket.
  while (high <= start + maxForward) {
    const probe = await fetchTicketJson(fetchImpl, config, store, high, cookieHeader);
    tested += 1;
    if (probe.authFail) throw new Error(`Authentication failed while probing ticket ${high}. Cookie/session may be expired or rejected by reporting.site.`);
    if (!probe.exists) break;
    low = high;
    high += step;
    step = Math.min(step * 2, 2048);
  }
  if (high > start + maxForward) {
    detail.errors.push(`Discovery reached max forward ${maxForward}; using ${low}. Increase REPORTING_DISCOVERY_MAX_FORWARD if needed.`);
    detail.scannedTickets += tested;
    return low;
  }

  // Binary search between low and high.
  let left = low + 1;
  let right = high - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const probe = await fetchTicketJson(fetchImpl, config, store, mid, cookieHeader);
    tested += 1;
    if (probe.authFail) throw new Error(`Authentication failed while probing ticket ${mid}.`);
    if (probe.exists) {
      low = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  detail.scannedTickets += tested;
  return low;
}

async function fetchTicketRange(fetchImpl, config, store, start, end, cookieHeader, detail) {
  const ids = [];
  for (let i = start; i <= end; i++) ids.push(i);
  const concurrency = Math.max(1, Math.min(Number(config.concurrency || 12), 24));
  const rows = [];
  const stats = { ok: 0, empty: 0, missing: 0, authFail: 0, badJson: 0, httpFail: 0, requestFail: 0 };
  let cursor = 0;

  async function worker() {
    while (cursor < ids.length) {
      const id = ids[cursor++];
      const ticket = await fetchTicketJson(fetchImpl, config, store, id, cookieHeader);
      stats[ticket.status] = (stats[ticket.status] || 0) + 1;
      if (ticket.authFail) throw new Error(`Authentication failed at ticket ${id}.`);
      if (ticket.rows?.length) rows.push(...ticket.rows);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  detail.scannedTickets += ids.length;
  detail.ticketStats = stats;
  return { rows: dedupeTicketRows(rows), stats };
}

async function fetchTicketJson(fetchImpl, config, store, ticketId, cookieHeader) {
  const url = `${config.baseUrl}/${store.slug}/dashboard/script.php?ticketId=${encodeURIComponent(ticketId)}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), config.timeoutMs);
  try {
    const res = await fetchImpl(url, {
      headers: {
        cookie: cookieHeader,
        'user-agent': userAgent(),
        accept: 'application/json,text/plain,*/*',
        'x-requested-with': 'XMLHttpRequest'
      },
      signal: controller.signal,
      redirect: 'follow'
    });
    const text = await res.text();
    const lower = text.slice(0, 400).toLowerCase();
    if (res.url?.toLowerCase().includes('login') || lower.includes('<html') || lower.includes('<!doctype')) {
      return { exists: false, authFail: true, status: 'authFail', ticketId, rows: [] };
    }
    if (!res.ok) return { exists: false, authFail: false, status: 'httpFail', ticketId, rows: [] };
    let data;
    try { data = JSON.parse(text); } catch (_err) { return { exists: false, authFail: false, status: 'badJson', ticketId, rows: [] }; }
    const hasTicketShape = Boolean(data && (data.datenew || data.person_name || data.payment || Array.isArray(data.ticketlines)));
    if (!hasTicketShape) return { exists: false, authFail: false, status: 'missing', ticketId, rows: [] };
    const rows = buildRowsFromTicketJson(store.name, ticketId, data);
    return { exists: true, authFail: false, status: rows.length ? 'ok' : 'empty', ticketId, rows, data };
  } catch (_err) {
    return { exists: false, authFail: false, status: 'requestFail', ticketId, rows: [] };
  } finally {
    clearTimeout(timer);
  }
}

function buildRowsFromTicketJson(storeName, ticketId, data) {
  const dateRaw = clean(data?.datenew || data?.date || data?.created_at || '');
  const { date, time } = splitDateTime(dateRaw);
  const staff = clean(data?.person_name || data?.staff || data?.employee || '');
  const payment = clean(data?.payment || data?.payment_type || '');
  const lines = Array.isArray(data?.ticketlines) ? data.ticketlines : [];
  const out = [];
  for (const line of lines) {
    const product = clean(line?.product_name || line?.name || line?.product || 'Unknown');
    const qty = parseNumber(line?.units ?? line?.multiply ?? line?.qty ?? 1) || 1;
    const unitPrice = parseMoney(line?.price ?? line?.product_pricetax ?? line?.currentprice ?? line?.unit_price ?? 0) || 0;
    const lineTotal = round2(qty * unitPrice);
    if (!product || !date || !Number.isFinite(lineTotal)) continue;
    out.push({
      store: storeName,
      date,
      time,
      timestamp: `${date} ${time || '00:00:00'}`,
      receipt: String(ticketId),
      ticketId: Number(ticketId),
      staff,
      product,
      category: inferCategory(product, unitPrice),
      payment,
      qty,
      unitPrice,
      total: lineTotal
    });
  }
  return out;
}

// Browser/paste fallback parsers remain available for View Sync.
export function parseTicketSalesHtml(html = '', context = {}) {
  const textRows = parseTicketRowsFromText(stripTags(html), context);
  return { ok: textRows.length > 0, rows: textRows, warning: textRows.length ? null : 'No ticket rows found in table or page text' };
}

export function parseTicketRowsFromText(text = '', context = {}) {
  const rows = [];
  const lines = String(text || '').split(/\r?\n/).map(clean).filter(Boolean);
  const re = /^(20\d{2}-\d{2}-\d{2})\s+(\d{1,2}:\d{2}(?::\d{2})?)\s+([A-Za-z0-9#-]{3,})\s+(.+?)\s+(Cash|Card|Online|Uber|EFTPOS|Visa|Mastercard)\s+(\d+(?:\.\d+)?)\s+\$?(-?\d+(?:[.,]\d{1,2})?)$/i;
  for (const line of lines) {
    if (line.length > 220) continue;
    const m = line.match(re);
    if (!m) continue;
    const total = parseMoney(m[7]);
    const qty = Number(m[6]);
    rows.push({ store: context.store || '', date: normalizeDate(m[1]), time: m[2], timestamp: `${normalizeDate(m[1])} ${m[2]}`, receipt: m[3], product: clean(m[4]), category: inferCategory(m[4], total / Math.max(qty,1)), payment: clean(m[5]), qty, total });
  }
  return dedupeTicketRows(rows);
}

export function aggregateTicketRows(store, rows, today) {
  const valid = dedupeTicketRows(rows.filter(r => r.product && Number.isFinite(r.total) && normalizeDate(r.date)));
  const todayRows = valid.filter(r => normalizeDate(r.date) === today);
  const totalSales = round2(todayRows.reduce((sum, r) => sum + (r.total || 0), 0));
  const receiptSet = new Set(todayRows.map(r => r.receipt || `${r.timestamp}-${r.product}`).filter(Boolean));
  const orders = receiptSet.size;
  const aov = orders ? round2(totalSales / orders) : null;
  const unsafeReason = detectUnsafeDailyParse(todayRows, totalSales, orders, aov, today);
  const hourlyRows = aggregateByHour(todayRows);
  const productRows = aggregateByProduct(todayRows);
  const topProduct = productRows[0]?.product || null;
  const topCategory = productRows[0]?.category || null;
  const times = todayRows.map(r => r.timestamp || `${r.date || ''} ${r.time || ''}`).filter(Boolean).sort();
  const comparisons = buildComparisons(valid, today);
  const sellOutSignals = buildSellOutSignals(valid, today);

  return { source: 'live-script-ticket-sync', period: today, periodLabel: 'POS Today from script.php ticket JSON', store, totalSales, netSales: totalSales, orders, aov, topProduct, topCategory, todayRows: todayRows.length, totalRowsSynced: valid.length, firstTicketTime: times[0] || null, lastTicketTime: times[times.length - 1] || null, hourlyRows, productRows, comparisons, sellOutSignals, unsafe: Boolean(unsafeReason), unsafeReason, capturedAt: new Date().toISOString() };
}

function detectUnsafeDailyParse(todayRows, totalSales, orders, aov, today) {
  if (!todayRows.length) return '';
  if (todayRows.length > DAILY_SAFETY_LIMITS.maxRowsPerStoreDay) return `Rejected ${todayRows.length.toLocaleString()} rows for ${today}; likely historical/all-table rows, not one trading day.`;
  if (totalSales > DAILY_SAFETY_LIMITS.maxSalesPerStoreDay) return `Rejected ${money(totalSales)} for one store/day; likely historical/all-table rows.`;
  if (aov && aov > DAILY_SAFETY_LIMITS.maxAov) return `Rejected AOV ${money(aov)}; likely duplicate or historical rows.`;
  return '';
}

function readConfig(env, opts = {}) {
  const baseUrl = trimSlash(env.REPORTING_BASE_URL || 'https://reporting.site');
  const today = normalizeDate(opts.today || opts.reportingDate || opts.date || env.REPORTING_TODAY || currentDateInTimeZone(env.REPORTING_TIMEZONE || 'Australia/Sydney'));
  return {
    baseUrl,
    today,
    lookbackDays: Number(env.REPORTING_LOOKBACK_DAYS || opts.lookbackDays || 35),
    timeoutMs: Number(env.REPORTING_SYNC_TIMEOUT_MS || opts.timeoutMs || 12000),
    concurrency: Number(env.REPORTING_SYNC_CONCURRENCY || opts.concurrency || 12),
    discoveryStep: Number(env.REPORTING_DISCOVERY_STEP || opts.discoveryStep || 128),
    maxDiscoverForward: Number(env.REPORTING_DISCOVERY_MAX_FORWARD || opts.maxDiscoverForward || 15000),
    keepCachedRows: String(env.REPORTING_KEEP_CACHED_ROWS || opts.keepCachedRows || '').toLowerCase() === 'true',
    email: env.REPORTING_EMAIL || '',
    password: env.REPORTING_PASSWORD || '',
    cookieHeader: buildCookieHeader(env),
    stores: DEFAULT_STORES.map(s => ({ name: s.name, slug: env[s.slugKey] || s.defaultSlug, watermarkKey: s.watermarkKey }))
  };
}

function buildCookieHeader(env) { if (env.REPORTING_COOKIE) return String(env.REPORTING_COOKIE).trim(); if (env.REPORTING_PHPSESSID) { const value = String(env.REPORTING_PHPSESSID).trim(); return value.startsWith('PHPSESSID=') ? value : `PHPSESSID=${value}`; } return ''; }
async function attemptLogin(_config, _fetchImpl) { return { ok: false, cookieHeader: '', attempts: [], note: 'Beta 0.2.12 prefers REPORTING_COOKIE/PHPSESSID because reporting.site login form fields vary.' }; }
function keepUsefulRowWindow(rows, today, days) { const keepDates = new Set(buildLookbackDates(today, Math.max(days, 35))); return dedupeTicketRows((rows || []).filter(r => keepDates.has(normalizeDate(r.date)))); }
function buildLookbackDates(today, days) { const out=[]; const d=new Date(`${today}T12:00:00Z`); const count=Math.max(1,Math.min(days,70)); for(let i=0;i<count;i++){ const x=new Date(d); x.setUTCDate(d.getUTCDate()-i); out.push(x.toISOString().slice(0,10)); } return out; }
function dedupeTicketRows(rows = []) { const seen = new Set(); const out=[]; for (const row of rows){ const key=ticketKey(row); if (seen.has(key)) continue; seen.add(key); out.push(row);} return out; }
function ticketKey(row = {}) { return [normalizeDate(row.date||''), row.receipt || row.ticketId || '', row.product || '', row.qty ?? '', row.unitPrice ?? '', row.total ?? ''].join('|'); }
function aggregateByHour(rows) { const byHour = new Map(); for (const row of rows) { const hour=(row.time || '00:00').slice(0,2).padStart(2,'0')+':00'; const cur=byHour.get(hour)||{hour,sales:0,orders:new Set(),qty:0}; cur.sales+=row.total||0; cur.qty+=row.qty||0; if(row.receipt) cur.orders.add(row.receipt); byHour.set(hour,cur);} return [...byHour.values()].sort((a,b)=>a.hour.localeCompare(b.hour)).map(x=>({hour:x.hour,sales:round2(x.sales),orders:x.orders.size||null,qty:round2(x.qty)})); }
function aggregateByProduct(rows) { const byProduct=new Map(); for(const row of rows){ const key=row.product; const cur=byProduct.get(key)||{product:key,category:row.category || inferCategory(key),qty:0,sales:0,firstSale:row.timestamp,lastSale:row.timestamp}; cur.qty+=row.qty||0; cur.sales+=row.total||0; if(row.timestamp&&(!cur.firstSale||row.timestamp<cur.firstSale)) cur.firstSale=row.timestamp; if(row.timestamp&&(!cur.lastSale||row.timestamp>cur.lastSale)) cur.lastSale=row.timestamp; byProduct.set(key,cur);} return [...byProduct.values()].map(x=>({...x,qty:round2(x.qty),sales:round2(x.sales)})).sort((a,b)=>b.sales-a.sales); }
function buildComparisons(rows,today){ const todayRows=rows.filter(r=>r.date===today); const lastWeek=shiftDate(today,-7); const lastWeekRows=rows.filter(r=>r.date===lastWeek); const last4Dates=[]; for(let d=-7;d>=-28;d-=7) last4Dates.push(shiftDate(today,d)); const last4Rows=rows.filter(r=>last4Dates.includes(r.date)); const todayTotal=sumRows(todayRows); const lastWeekTotal=sumRows(lastWeekRows); const last4Avg=last4Dates.length?round2(sumRows(last4Rows)/last4Dates.length):null; return {todayTotal,sameDayLastWeek:{date:lastWeek,total:lastWeekTotal,deltaPct:pct(todayTotal,lastWeekTotal)},last4WeeksAverage:{dates:last4Dates,total:last4Avg,deltaPct:pct(todayTotal,last4Avg)},hourly:compareHourly(todayRows,lastWeekRows,last4Rows,last4Dates.length)}; }
function compareHourly(todayRows,lastWeekRows,last4Rows,divisor){ const t=aggregateByHour(todayRows); const lw=aggregateByHour(lastWeekRows); const l4=aggregateByHour(last4Rows).map(r=>({...r,sales:divisor?round2(r.sales/divisor):r.sales,orders:divisor&&r.orders?round2(r.orders/divisor):r.orders})); const hours=Array.from(new Set([...t,...lw,...l4].map(r=>r.hour))).sort(); return hours.map(hour=>{ const today=t.find(x=>x.hour===hour)?.sales||0; const sameDayLastWeek=lw.find(x=>x.hour===hour)?.sales||0; const last4WeekAvg=l4.find(x=>x.hour===hour)?.sales||0; return {hour,today,sameDayLastWeek,last4WeekAvg,deltaVsLastWeekPct:pct(today,sameDayLastWeek),deltaVsLast4AvgPct:pct(today,last4WeekAvg)}; }); }
function buildSellOutSignals(rows,today){ return aggregateByProduct(rows.filter(r=>r.date===today)).slice(0,30).map(p=>{ const hour=Number((p.lastSale||'').match(/\s(\d{1,2}):/)?.[1]||NaN); const early=Number.isFinite(hour)&&hour<16; const nearClose=Number.isFinite(hour)&&hour>=19; return {product:p.product,category:p.category,qty:p.qty,sales:p.sales,lastSale:p.lastSale,signal:early?'Potential operational early sell-out / stopped before 4pm':nearClose?'Likely planned/healthy late sell-out or normal late trade':'Needs comparison to last week / 4-week average'}; }); }
function inferCategory(product='', price=0){ const p=String(product).toLowerCase(); if(/coffee|latte|cappuccino|flat white|long black|mocha|chai/.test(p)) return 'Coffee'; if(/coke|drink|water|sprite|fanta|can|shake/.test(p)) return 'Drinks'; if(/pie|beef|cheese|naan|sausage|steak/.test(p)) return 'Pies'; if(/special|biscoff|oreo|m&m|mnm|snickers|nutella|brulee|caramel|passion|fairy|choc|cinnamon/.test(p) || Number(price) >= 5.5) return 'Gourmet Donuts'; if(/donut|doughnut|boston|vanilla|slice|cream|jam|ring|ball|homer|glaze/.test(p)) return 'Traditional Donuts'; return 'Other'; }
function splitDateTime(value) { const text = clean(value); const dateMatch = text.match(/20\d{2}[-/]\d{1,2}[-/]\d{1,2}|\d{1,2}[-/]\d{1,2}[-/]20\d{2}/); const time = (text.match(/\d{1,2}:\d{2}(?::\d{2})?/) || [''])[0]; const date = dateMatch ? normalizeDate(dateMatch[0].replace(/\//g, '-')) : ''; return { date, time }; }
function stripTags(html){ return String(html||'').replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,'\n'); }
function safeEnvName(s){ return String(s).replace(/[^A-Za-z0-9]+/g,'_'); }
function shiftDate(date,days){ const d=new Date(`${date}T12:00:00Z`); d.setUTCDate(d.getUTCDate()+days); return d.toISOString().slice(0,10); }
function sumRows(rows){ return round2(rows.reduce((sum,r)=>sum+(r.total||0),0)); }
function pct(a,b){ return b?round2(((a-b)/b)*100):null; }
function round2(n){ return Math.round((Number(n)||0)*100)/100; }
function clean(s){ return String(s||'').replace(/\s+/g,' ').trim(); }
function trimSlash(s){ return String(s||'').replace(/\/+$/,''); }
function currentDateInTimeZone(timeZone){ try{ const parts=new Intl.DateTimeFormat('en-CA',{timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()); const get=t=>parts.find(p=>p.type===t)?.value; return `${get('year')}-${get('month')}-${get('day')}`; }catch(_){ return new Date().toISOString().slice(0,10); } }
function userAgent(){ return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 FredaOpsCockpit/0.2.12'; }
function parseNumber(s){ const n=Number(String(s||'').replace(/[^0-9.-]/g,'')); return Number.isFinite(n)?n:null; }
function parseMoney(s){ const cleaned=String(s||'').replace(/\s/g,'').replace(/[^0-9,.-]/g,'').replace(/,(?=\d{2}$)/,'.').replace(/,/g,''); const n=Number(cleaned); return Number.isFinite(n)?n:null; }
function normalizeDate(date){ if(!date) return ''; const text=String(date); const iso=text.match(/(20\d{2})[-/](\d{1,2})[-/](\d{1,2})/); if(iso) return `${iso[1]}-${iso[2].padStart(2,'0')}-${iso[3].padStart(2,'0')}`; const au=text.match(/(\d{1,2})[-/](\d{1,2})[-/](20\d{2})/); if(au) return `${au[3]}-${au[2].padStart(2,'0')}-${au[1].padStart(2,'0')}`; return text.slice(0,10); }
function money(n){ return '$' + Number(n || 0).toLocaleString('en-AU', { maximumFractionDigits: 2 }); }
