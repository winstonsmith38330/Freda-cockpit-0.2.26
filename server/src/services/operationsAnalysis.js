import { round2 } from '../utils/safe.js';

export function analyseOperations(live = {}) {
  const reportingDate = live.reportingDate;
  const stores = live.stores || [];
  const storeStatus = stores.map(store => analyseStore(store, live, reportingDate));
  const hourly = buildHourlyComparison(live, reportingDate);
  const sellOut = buildSellOutAnalysis(live);
  const openActions = buildOpenActions(live, storeStatus, sellOut);
  return { reportingDate, storeStatus, hourly, sellOut, openActions, generatedAt: new Date().toISOString() };
}

function analyseStore(store, live, reportingDate) {
  const isPie = store.name.includes('Frieda');
  const pos = isPie ? null : live.reportingPOS?.[store.name] || null;
  const uber = isPie ? null : live.uberEats?.[store.name] || null;
  const square = isPie ? live.square?.[store.name] || null : null;
  const external = isPie ? square : uber;
  const externalLabel = isPie ? 'Square' : 'Uber';
  const posSales = isPie ? null : value(pos, ['sales', 'totalSales', 'netSales']);
  const extSales = external?.period === reportingDate ? value(external, ['sales', 'totalSales', 'netSales']) : null;
  const total = round2((posSales || 0) + (extSales || 0));
  const warnings = [];
  if (!isPie && !pos) warnings.push('POS not synced for selected date.');
  if (!isPie && !external) warnings.push('Uber not synced today.');
  if (isPie && !square) warnings.push('Square/Frieda item export not synced for selected date.');
  if (external && external.period !== reportingDate) warnings.push(`${externalLabel} period is stale and excluded.`);
  const status = isPie ? (extSales ? 'Green' : 'Amber') : (!pos ? 'Red' : warnings.length ? 'Amber' : 'Green');
  return { store: store.name, isPie, status, posSales, externalSales: extSales, externalLabel, total, orders: pos?.orders || external?.orders || null, aov: pos?.aov || external?.aov || null, warnings };
}

export function buildHourlyComparison(live = {}, reportingDate) {
  const out = [];
  for (const store of live.stores || []) {
    if (store.name.includes('Frieda')) continue;
    const pos = live.reportingPOS?.[store.name];
    const uber = live.uberEats?.[store.name];
    const hourly = mergeHourly([...(pos?.hourlyRows || []), ...(uber?.period === reportingDate ? uber.hourlyRows || [] : [])]);
    const posDailySales = value(pos, ['sales', 'totalSales', 'netSales']);
    const hasMeaningfulTodayHourly = hourly.some(r => Number(r.sales) > 0);
    const history = mergedHistory(live, store.name, reportingDate);
    const sameDayLastWeek = history.sameDayLastWeek || [];
    const last4WeekAverage = history.last4WeekAverage || [];
    const wtdAverage = history.wtdAverage || [];
    const hours = unionHours(hourly, sameDayLastWeek, wtdAverage, last4WeekAverage);
    const rows = hours.map(hour => {
      const today = hourly.find(x => x.hour === hour)?.sales ?? null;
      const lastWeek = sameDayLastWeek.find(x => x.hour === hour)?.sales ?? null;
      const avg4 = last4WeekAverage.find(x => x.hour === hour)?.sales ?? null;
      const wtdAvg = wtdAverage.find(x => x.hour === hour)?.sales ?? null;
      return { hour, today, sameDayLastWeek: lastWeek, last4WeekAverage: avg4, wtdAverage: wtdAvg, deltaVsLastWeekPct: pctDelta(today, lastWeek), deltaVs4WeekAvgPct: pctDelta(today, avg4), deltaVsWtdAvgPct: pctDelta(today, wtdAvg) };
    });
    out.push({
      store: store.name,
      rows,
      includesUber: Boolean(uber?.period === reportingDate && uber?.hourlyRows?.length),
      dailyTotalCaptured: posDailySales || null,
      hourlyNote: posDailySales && !hasMeaningfulTodayHourly
        ? (pos?.source === 'pos-file-backup' ? 'Using uploaded POS hourly workbook as backup because no live POS hourly sync exists for the selected date.' : 'Live POS daily total is captured, but reporting.site did not provide a reliable hour-by-hour split for the selected date.')
        : null,
      historyNote: history.note || null,
      status: rows.length ? 'available' : 'waiting_for_sync'
    });
  }
  return out;
}


const HOURS = Array.from({ length: 18 }, (_v, i) => `${String(i + 6).padStart(2, '0')}:00`);

function mergedHistory(live, storeName, reportingDate) {
  const synced = posSyncHourlyByDate(live.posSyncByStoreDate?.[storeName] || {});
  const backup = live.fileImportCache?.hourlyByStoreDate?.[storeName] || {};
  const merged = mergeByDateWithLivePriority(backup, synced);
  const existing = live.hourlyHistory?.[storeName] || {};
  const derived = deriveHistoryFromByDate(merged, reportingDate);
  return {
    sameDayLastWeek: existing.sameDayLastWeek?.length ? existing.sameDayLastWeek : derived.sameDayLastWeek,
    last4WeekAverage: existing.last4WeekAverage?.length ? existing.last4WeekAverage : derived.last4WeekAverage,
    wtdAverage: existing.wtdAverage?.length ? existing.wtdAverage : derived.wtdAverage,
    wtdDates: existing.wtdDates?.length ? existing.wtdDates : derived.wtdDates,
    last4WeekDates: existing.last4WeekDates?.length ? existing.last4WeekDates : derived.last4WeekDates,
    sourcePolicy: 'live-pos-sync-first-file-backup',
    note: derived.missingBenchmarksNote
  };
}


function posSyncHourlyByDate(byDate = {}) {
  const out = {};
  for (const [date, pos] of Object.entries(byDate || {})) {
    const sales = value(pos, ['sales', 'totalSales', 'netSales']);
    const hourlyRows = meaningfulHourlyRows(pos.hourlyRows || []);
    if ((Number.isFinite(sales) && sales > 0) || hourlyRows.length) {
      out[date] = { date, store: pos.store, sales: sales || 0, hourlyRows, source: 'live-reporting-site-pos' };
    }
  }
  return out;
}

function mergeByDateWithLivePriority(backup = {}, synced = {}) {
  const out = { ...(backup || {}) };
  for (const [date, day] of Object.entries(synced || {})) out[date] = { ...(out[date] || {}), ...day, source: 'live-reporting-site-pos' };
  return out;
}

function meaningfulHourlyRows(rows = []) {
  return (rows || []).filter(r => {
    const h = Number(String(r?.hour || '').slice(0, 2));
    const sales = Number(r?.sales);
    return Number.isInteger(h) && h >= 6 && h <= 23 && Number.isFinite(sales) && sales > 0;
  }).map(r => ({ ...r, sales: round2(r.sales) }));
}

function deriveHistoryFromByDate(byDate = {}, reportingDate) {
  const sameDayLastWeekDate = addDays(reportingDate, -7);
  const sameDayLastWeek = byDate[sameDayLastWeekDate]?.hourlyRows || [];
  const last4WeekDates = [-7, -14, -21, -28].map(d => addDays(reportingDate, d));
  const wtdEnd = addDays(reportingDate, -1);
  const wtdDates = wtdEnd >= mondayOf(reportingDate) ? dateRange(mondayOf(reportingDate), wtdEnd).filter(d => byDate[d]?.hourlyRows?.length) : [];
  return {
    sameDayLastWeek,
    last4WeekAverage: averageHours(byDate, last4WeekDates),
    wtdAverage: averageHours(byDate, wtdDates),
    wtdDates,
    last4WeekDates,
    missingBenchmarksNote: buildMissingBenchmarksNote(byDate, reportingDate, sameDayLastWeekDate, wtdDates, last4WeekDates)
  };
}


function buildMissingBenchmarksNote(byDate, reportingDate, sameDayLastWeekDate, wtdDates, last4WeekDates) {
  const missing = [];
  if (!byDate?.[sameDayLastWeekDate]?.hourlyRows?.length) missing.push(`same day last week (${sameDayLastWeekDate})`);
  const wtdStart = mondayOf(reportingDate);
  const wtdExpected = addDays(reportingDate, -1) >= wtdStart ? dateRange(wtdStart, addDays(reportingDate, -1)) : [];
  const missingWtd = wtdExpected.filter(d => !byDate?.[d]?.hourlyRows?.length);
  if (missingWtd.length) missing.push(`WTD previous day(s): ${missingWtd.join(', ')}`);
  const missing4w = last4WeekDates.filter(d => !byDate?.[d]?.hourlyRows?.length);
  if (missing4w.length) missing.push(`4-week benchmark date(s): ${missing4w.join(', ')}`);
  return missing.length ? `Missing hourly benchmark sync for ${missing.join('; ')}. Use Sync current + last days to populate benchmarks.` : null;
}

function averageHours(byDate, dates) {
  return HOURS.map(hour => {
    const vals = (dates || []).map(d => byDate?.[d]?.hourlyRows?.find(x => x.hour === hour)?.sales).filter(v => Number.isFinite(Number(v)));
    return vals.length ? { hour, sales: round2(vals.reduce((a, b) => a + Number(b), 0) / vals.length), sampleDays: vals.length } : null;
  }).filter(Boolean);
}

function unionHours(...groups) {
  const set = new Set();
  for (const rows of groups) for (const row of rows || []) if (row?.hour) set.add(row.hour);
  if (!set.size) for (const h of HOURS) set.add(h);
  return [...set].filter(validTradingHour).sort();
}

function validTradingHour(hour) {
  const h = Number(String(hour || '').slice(0, 2));
  return Number.isInteger(h) && h >= 6 && h <= 23;
}

function mondayOf(iso) {
  const d = new Date(`${iso}T00:00:00Z`);
  const day = d.getUTCDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setUTCDate(d.getUTCDate() + diff);
  return d.toISOString().slice(0, 10);
}
function dateRange(start, end) {
  const out = [];
  let cur = start;
  while (cur <= end) { out.push(cur); cur = addDays(cur, 1); }
  return out;
}
function addDays(iso, days) {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function buildSellOutAnalysis(live = {}) {
  const out = [];
  for (const [store, pos] of Object.entries(live.reportingPOS || {})) {
    const signals = pos.sellOutSignals || [];
    const leftovers = pos.leftoverSignals || [];
    const planned = live.sellOutPlans?.[store] || {};
    out.push({ store, plannedFomo: Boolean(planned.plannedFomo), expectedSellOutTime: planned.expectedSellOutTime || 'close', signals, leftovers, status: classifySellOut(signals, planned) });
  }
  return out;
}

function classifySellOut(signals = [], planned = {}) {
  if (!signals.length) return 'No signal yet';
  if (planned.plannedFomo) return 'Planned/FOMO sell-out watch';
  const early = signals.find(s => /early|short|sell-out/i.test(s.signal || ''));
  return early ? 'Operational sell-out risk' : 'Watch';
}

function buildOpenActions(live, storeStatus, sellOut) {
  const items = [];
  for (const s of storeStatus) {
    if (s.status !== 'Green') items.push({ owner: 'Ops', store: s.store, priority: s.status === 'Red' ? 'High' : 'Medium', title: `${s.store}: fix sync/data gap`, body: s.warnings.join(' ') });
  }
  for (const s of sellOut) if (s.status.includes('Operational')) items.push({ owner: 'Manager', store: s.store, priority: 'High', title: `${s.store}: early sell-out risk`, body: 'Increase or re-balance production before the same day next week.' });
  items.push({ owner: 'Freda/Admin', store: 'All stores', priority: 'High', title: 'Hiring and training remains the biggest focus', body: 'Use candidate shortlist, SOP training and manager sign-off before adding more load to Freda.' });
  return items.slice(0, 12);
}

function mergeHourly(rows = []) {
  const map = new Map();
  for (const r of rows) {
    if (!r.hour) continue;
    const e = map.get(r.hour) || { hour: r.hour, sales: 0, orders: 0 };
    e.sales = round2((e.sales || 0) + (Number(r.sales) || 0));
    e.orders += Number(r.orders) || 0;
    map.set(r.hour, e);
  }
  return [...map.values()].sort((a, b) => a.hour.localeCompare(b.hour));
}
function value(obj, keys) { for (const k of keys) if (Number.isFinite(obj?.[k])) return obj[k]; return null; }
function pctDelta(today, base) { return today != null && base ? round2(((today - base) / base) * 100) : null; }
