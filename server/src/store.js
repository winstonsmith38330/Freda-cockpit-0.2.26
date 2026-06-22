import fs from 'fs';
import path from 'path';
import { currentDateInTimeZone, normalizeReportingDate } from './utils/dateUtils.js';
import { makeId } from './utils/safe.js';
import { DEFAULT_SHAPE_MAP, normaliseShapeMap } from './services/productionMix.js';

export function readJson(filePath, fallback = {}) {
  try {
    if (!fs.existsSync(filePath)) return clone(fallback);
    const raw = fs.readFileSync(filePath, 'utf8');
    if (!raw.trim()) return clone(fallback);
    return JSON.parse(raw);
  } catch (err) {
    return { ...clone(fallback), readError: String(err?.message || err) };
  }
}

export function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2));
  return value;
}

export function emptyLiveState() {
  return {
    version: '0.2.24',
    reportingDate: currentDateInTimeZone('Australia/Sydney'),
    updatedAt: null,
    reportingPOS: {},
    // POS sync is the operational source of truth from 0.2.24 onward.
    // Uploaded POS Excel/CSV remains available only as backup/history.
    posSyncByStoreDate: {},
    uberEats: {},
    square: {},
    staleExternalSources: { uberEats: {}, square: {} },
    connectorStatus: {},
    syncRuns: [],
    captures: [],
    whatsapp: { summaries: [], actions: [] },
    ticketRowsByStore: {},
    posTicketWatermarks: {},
    productionShapeMap: DEFAULT_SHAPE_MAP,
    hourlyHistory: {},
    sellOutPlans: {},
    candidates: seedCandidates(),
    training: seedTraining(),
    audits: seedAudits(),
    actions: [],
    importStatus: {},
    productionPlan: {},
    weeklySummary: {},
    fileImportCache: {}
  };
}

export function mergeLive(seed = {}, live = {}) {
  const reportingDate = normalizeReportingDate(live.reportingDate || seed.reportingDate, 'Australia/Sydney');
  let merged = {
    ...(seed || {}),
    liveVersion: live.version || '0.2.24',
    version: '0.2.24',
    reportingDate,
    updatedAt: live.updatedAt || seed.generatedAt || null,
    stores: seed.stores || defaultStores(),
    fredaFeedbackPriorities: seed.fredaFeedbackPriorities || [],
    reportingPOS: sameDayPosMap(live, reportingDate),
    uberEats: sameDayMap(live.uberEats, reportingDate),
    square: sameDayMap(live.square, reportingDate),
    staleExternalSources: {
      uberEats: staleMap(live.uberEats, reportingDate),
      square: staleMap(live.square, reportingDate)
    },
    referenceExternalSources: {
      uberEats: { ...(seed.sampleMetrics?.uberEats || {}), ...staleMap(live.uberEats, reportingDate) },
      square: { ...(seed.sampleMetrics?.square || {}), ...staleMap(live.square, reportingDate) }
    },
    connectorStatus: live.connectorStatus || {},
    syncRuns: live.syncRuns || [],
    captures: live.captures || [],
    whatsapp: live.whatsapp || { summaries: [], actions: [] },
    ticketRowsByStore: live.ticketRowsByStore || {},
    posTicketWatermarks: live.posTicketWatermarks || {},
    productionShapeMap: normaliseShapeMap(live.productionShapeMap || seed.productRules?.shapeMap || DEFAULT_SHAPE_MAP),
    hourlyHistory: live.hourlyHistory || seed.hourlyHistory || {},
    sellOutPlans: live.sellOutPlans || seed.sellOutPlans || {},
    candidates: live.candidates?.length ? live.candidates : seedCandidates(),
    training: live.training || seedTraining(),
    audits: live.audits || seedAudits(),
    actions: live.actions || [],
    importStatus: live.importStatus || seed.importStatus || {},
    productionPlan: live.productionPlan || seed.productionPlan || {},
    weeklySummary: live.weeklySummary || seed.weeklySummary || {},
    fileImportCache: live.fileImportCache || seed.fileImportCache || {},
    posSyncByStoreDate: live.posSyncByStoreDate || seed.posSyncByStoreDate || {}
  };
  merged.weeklySummary = buildLiveAwareWeeklySummary(merged);
  return merged;
}

export function applySyncResult(state, result) {
  let next = { ...state, version: '0.2.24', reportingDate: result.reportingDate || state.reportingDate, updatedAt: new Date().toISOString() };
  const isFileImport = result.source === 'File imports' || String(result.mode || '').includes('file-import');
  const isReportingSite = result.source === 'reporting.site' || String(result.mode || '').includes('reporting-site');

  if (result.reportingPOS) {
    if (isReportingSite) {
      next.reportingPOS = { ...(next.reportingPOS || {}), ...result.reportingPOS };
      next.posSyncByStoreDate = storePosByDate(next.posSyncByStoreDate || {}, result.reportingPOS, result.reportingDate || next.reportingDate);
    } else if (!isFileImport) {
      next.reportingPOS = { ...(next.reportingPOS || {}), ...result.reportingPOS };
    }
    // File-import POS rows are intentionally not promoted to reportingPOS in 0.2.24.
    // They remain available through fileImportCache as backup only.
  }
  if (result.uberEats) next.uberEats = { ...(next.uberEats || {}), ...result.uberEats };
  if (result.square) next.square = { ...(next.square || {}), ...result.square };
  if (result.ticketRowsByStore) next.ticketRowsByStore = { ...(next.ticketRowsByStore || {}), ...result.ticketRowsByStore };

  if (result.hourlyHistory) next.hourlyHistory = { ...(next.hourlyHistory || {}), ...result.hourlyHistory };
  if (result.productionPlan) next.productionPlan = result.productionPlan;
  if (result.weeklySummary) next.weeklySummary = result.weeklySummary;
  if (result.importStatus) next.importStatus = result.importStatus;
  if (result.fileImportCache) next.fileImportCache = result.fileImportCache;
  next.connectorStatus = { ...(next.connectorStatus || {}) };
  if (isReportingSite) next.connectorStatus.reportingSite = statusFromResult(result);
  if (isFileImport) next.connectorStatus.fileImports = statusFromResult(result);
  if (result.source === 'Uber Eats Manager' || result.mode?.includes('uber')) next.connectorStatus.uberEats = statusFromResult(result);
  if (result.source === 'Square API' || result.mode?.includes('square')) next.connectorStatus.square = statusFromResult(result);
  if (result.fileImports) next = applySyncResult(next, result.fileImports);
  if (result.pos) next = applySyncResult(next, result.pos);
  if (result.uber) next = applySyncResult(next, result.uber);
  if (result.square && result.square.source === 'Square API') next = applySyncResult(next, result.square);
  next.syncRuns = [{ id: makeId('sync'), source: result.source || result.mode || 'sync', status: result.status, ok: result.ok, reportingDate: result.reportingDate, startedAt: result.startedAt, finishedAt: result.finishedAt || new Date().toISOString(), errors: result.errors || [], warnings: result.warnings || [], details: result.details || [] }, ...(next.syncRuns || [])].slice(0, 80);
  return next;
}

export function addCapture(state, capture) {
  return { ...state, updatedAt: new Date().toISOString(), captures: [{ id: makeId('cap'), capturedAt: new Date().toISOString(), ...capture }, ...(state.captures || [])].slice(0, 100) };
}

export function addWhatsapp(state, syncResult) {
  return {
    ...state,
    updatedAt: new Date().toISOString(),
    whatsapp: {
      summaries: [syncResult.summary, ...(state.whatsapp?.summaries || [])].filter(Boolean).slice(0, 20),
      actions: [...(syncResult.actions || []), ...(state.whatsapp?.actions || [])].slice(0, 120)
    }
  };
}

export function saveShapeMap(state, rows = []) {
  return { ...state, updatedAt: new Date().toISOString(), productionShapeMap: normaliseShapeMap(rows) };
}

export function addCandidate(state, body = {}) {
  const candidate = scoreCandidate({ id: makeId('cand'), createdAt: new Date().toISOString(), ...body });
  return { ...state, updatedAt: new Date().toISOString(), candidates: [candidate, ...(state.candidates || [])] };
}

export function addTrainingCompletion(state, body = {}) {
  const completion = { id: makeId('train'), completedAt: new Date().toISOString(), staffName: body.staffName || 'Staff', moduleId: body.moduleId || 'sop', score: Number(body.score || 0), managerSignoff: Boolean(body.managerSignoff) };
  return { ...state, updatedAt: new Date().toISOString(), training: { ...(state.training || seedTraining()), completions: [completion, ...((state.training || {}).completions || [])] } };
}

export function addAudit(state, body = {}) {
  const score = Math.max(1, Math.min(10, Number(body.score || 5)));
  const status = score >= 8 ? 'Green' : score >= 5 ? 'Amber' : 'Red';
  const audit = { id: makeId('audit'), createdAt: new Date().toISOString(), store: body.store || 'Unknown', type: body.type || 'opening', zone: body.zone || 'cabinet', score, status, comment: body.comment || 'Manager review required. AI photo scoring placeholder until vision configured.' };
  return { ...state, updatedAt: new Date().toISOString(), audits: { ...(state.audits || seedAudits()), records: [audit, ...((state.audits || {}).records || [])] } };
}


function buildLiveAwareWeeklySummary(live = {}) {
  const reportingDate = normalizeReportingDate(live.reportingDate || currentDateInTimeZone('Australia/Sydney'), 'Australia/Sydney');
  const weekStart = mondayOf(reportingDate);
  const dates = dateRange(weekStart, reportingDate);
  const livePosByStoreDate = clone(live.posSyncByStoreDate || {});
  const backupPosByStoreDate = clone(live.fileImportCache?.hourlyByStoreDate || {});
  const uberByStoreDate = clone(live.fileImportCache?.uberByStoreDate || {});
  const squareByDate = clone(live.fileImportCache?.squareByDate || {});

  // Keep compatibility with the latest same-day reportingPOS object. The
  // persisted posSyncByStoreDate map is still the primary source.
  for (const [store, pos] of Object.entries(live.reportingPOS || {})) {
    const period = normalizeReportingDate(pos?.period || pos?.reportingDate || reportingDate, 'Australia/Sydney');
    if (!dates.includes(period)) continue;
    livePosByStoreDate[store] = livePosByStoreDate[store] || {};
    if (!livePosByStoreDate[store][period]) livePosByStoreDate[store][period] = pos;
  }

  for (const [store, uber] of Object.entries(live.uberEats || {})) {
    const period = normalizeReportingDate(uber?.period || uber?.reportingDate || reportingDate, 'Australia/Sydney');
    if (period !== reportingDate || !dates.includes(period)) continue;
    const sales = firstFinite(uber, ['sales', 'totalSales', 'netSales']);
    if (!Number.isFinite(sales) || sales <= 0) continue;
    uberByStoreDate[store] = uberByStoreDate[store] || {};
    uberByStoreDate[store][period] = { ...(uberByStoreDate[store][period] || {}), period, sales: roundMoney(sales), source: 'live-uber' };
  }

  for (const [_store, sq] of Object.entries(live.square || {})) {
    const period = normalizeReportingDate(sq?.period || sq?.reportingDate || reportingDate, 'Australia/Sydney');
    if (period !== reportingDate || !dates.includes(period)) continue;
    const sales = firstFinite(sq, ['sales', 'totalSales', 'netSales']);
    if (!Number.isFinite(sales) || sales <= 0) continue;
    squareByDate[period] = { ...(squareByDate[period] || {}), period, sales: roundMoney(sales), source: 'live-square-or-frieda' };
  }

  const storeNames = new Set([
    'Beverly Hills',
    'Penrith',
    'Taren Point',
    ...Object.keys(livePosByStoreDate || {}),
    ...Object.keys(backupPosByStoreDate || {}),
    ...Object.keys(uberByStoreDate || {})
  ]);
  const rows = [];
  let posTotal = 0;
  let uberTotal = 0;
  let friedasTotal = 0;
  for (const store of storeNames) {
    let posSales = 0;
    const liveDates = [];
    const backupDates = [];
    for (const d of dates) {
      const liveDay = livePosByStoreDate?.[store]?.[d];
      const liveSales = daySales(liveDay);
      if (Number.isFinite(liveSales) && liveSales > 0) {
        posSales += liveSales;
        liveDates.push(d);
        continue;
      }
      const backupDay = backupPosByStoreDate?.[store]?.[d];
      const backupSales = daySales(backupDay);
      if (Number.isFinite(backupSales) && backupSales > 0) {
        posSales += backupSales;
        backupDates.push(d);
      }
    }
    posSales = roundMoney(posSales);
    const uberSales = roundMoney(dates.reduce((sum, d) => sum + (Number(uberByStoreDate?.[store]?.[d]?.sales) || 0), 0));
    posTotal += posSales;
    uberTotal += uberSales;
    rows.push({
      store,
      posSales,
      uberSales,
      totalSales: roundMoney(posSales + uberSales),
      datesCovered: [...new Set([...liveDates, ...backupDates, ...dates.filter(d => uberByStoreDate?.[store]?.[d])])].sort(),
      livePosDates: liveDates,
      backupPosDates: backupDates,
      livePosIncluded: liveDates.includes(reportingDate),
      posSource: liveDates.length ? (backupDates.length ? 'live-pos-sync-plus-file-backup' : 'live-pos-sync') : (backupDates.length ? 'file-backup-only' : 'not-synced')
    });
  }
  for (const d of dates) friedasTotal += Number(squareByDate?.[d]?.sales) || 0;
  const summary = {
    source: 'sync-first-pos-plus-file-backups',
    period: `${weekStart} to ${reportingDate}`,
    weekStart,
    weekEnd: reportingDate,
    dates,
    posTotal: roundMoney(posTotal),
    uberTotal: roundMoney(uberTotal),
    friedasTotal: roundMoney(friedasTotal),
    combinedDonutTotal: roundMoney(posTotal + uberTotal),
    combinedAllTotal: roundMoney(posTotal + uberTotal + friedasTotal),
    stores: rows.sort((a, b) => a.store.localeCompare(b.store)),
    friedas: {
      store: "Frieda's Pies",
      squareSales: roundMoney(friedasTotal),
      totalSales: roundMoney(friedasTotal),
      datesCovered: dates.filter(d => squareByDate?.[d])
    },
    note: '0.2.24 POS source policy: reporting.site live sync is primary for POS daily/hourly/product data; uploaded POS files are backup only. Uber, Square/Frieda and production still use uploaded files/API data.'
  };
  return summary;
}

function firstFinite(obj = {}, keys = []) {
  for (const key of keys) {
    const n = Number(obj?.[key]);
    if (Number.isFinite(n)) return n;
  }
  return null;
}
function roundMoney(value) { return Math.round((Number(value) || 0) * 100) / 100; }
function meaningfulHourlyRows(rows = []) {
  return (rows || []).filter(r => {
    const h = Number(String(r?.hour || '').slice(0, 2));
    const sales = Number(r?.sales);
    return Number.isInteger(h) && h >= 6 && h <= 23 && Number.isFinite(sales) && sales > 0;
  }).map(r => ({ ...r, sales: roundMoney(r.sales) }));
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


function sameDayPosMap(live = {}, reportingDate) {
  const out = {};
  const byDate = live.posSyncByStoreDate || {};
  for (const [store, rowsByDate] of Object.entries(byDate || {})) {
    const hit = rowsByDate?.[reportingDate];
    if (hit) out[store] = { ...hit, sourcePolicy: 'live-pos-sync-primary' };
  }
  for (const [store, value] of Object.entries(sameDayMap(live.reportingPOS, reportingDate))) {
    if (!out[store]) out[store] = { ...value, sourcePolicy: 'live-pos-sync-primary' };
  }
  // Backup only: if no synced POS exists for the selected date, use uploaded
  // hourly workbook daily total as a transparent fallback, with no product rows.
  const backup = backupPosMapFromFileCache(live.fileImportCache, reportingDate);
  for (const [store, value] of Object.entries(backup)) {
    if (!out[store]) out[store] = value;
  }
  return out;
}

function backupPosMapFromFileCache(fileImportCache = {}, reportingDate) {
  const out = {};
  const byStore = fileImportCache?.hourlyByStoreDate || {};
  for (const [store, byDate] of Object.entries(byStore || {})) {
    const day = byDate?.[reportingDate];
    const sales = daySales(day);
    if (!Number.isFinite(sales) || sales <= 0) continue;
    out[store] = {
      store,
      source: 'pos-file-backup',
      sourcePolicy: 'backup-only-no-product-sales',
      sourceDetail: 'Uploaded POS hourly workbook backup. Live reporting.site sync remains the primary POS source.',
      period: reportingDate,
      periodMatched: true,
      sales: roundMoney(sales),
      totalSales: roundMoney(sales),
      netSales: roundMoney(sales),
      orders: null,
      transactions: null,
      aov: null,
      hourlyRows: meaningfulHourlyRows(day.hourlyRows || []),
      productRows: [],
      categoryRows: [],
      paymentRows: [],
      sourcePagesUsed: ['server/data/imports/pos/hourly backup'],
      warnings: ['Using uploaded POS hourly file as backup only. Product sales are not sourced from POS Excel/CSV in 0.2.24.'],
      capturedAt: day.capturedAt || fileImportCache.generatedAt || null
    };
  }
  return out;
}

function storePosByDate(existing = {}, reportingPOS = {}, fallbackDate) {
  const out = clone(existing || {});
  for (const [store, pos] of Object.entries(reportingPOS || {})) {
    const period = normalizeReportingDate(pos?.period || pos?.reportingDate || fallbackDate, 'Australia/Sydney');
    if (!period) continue;
    out[store] = out[store] || {};
    out[store][period] = { ...pos, period, reportingDate: period, sourcePolicy: 'live-pos-sync-primary' };
  }
  return out;
}

function daySales(day = {}) {
  const n = firstFinite(day, ['sales', 'totalSales', 'netSales']);
  return Number.isFinite(n) ? roundMoney(n) : null;
}

function statusFromResult(result = {}) {
  return { ok: Boolean(result.ok), status: result.status || (result.ok ? 'success' : 'failed'), mode: result.mode, source: result.source, reportingDate: result.reportingDate, periodMatched: Boolean(result.periodMatched), lastSync: result.finishedAt || new Date().toISOString(), error: (result.errors || []).join(' | ') || null, warnings: result.warnings || [], details: result.details || [] };
}

function sameDayMap(source = {}, reportingDate) {
  const out = {};
  for (const [key, value] of Object.entries(source || {})) {
    if (!value) continue;
    const period = normalizeReportingDate(value.period || value.reportingDate || '', 'Australia/Sydney');
    if (period === reportingDate) out[key] = value;
  }
  return out;
}

function staleMap(source = {}, reportingDate) {
  const out = {};
  for (const [key, value] of Object.entries(source || {})) {
    if (!value) continue;
    const raw = value.period || value.reportingDate || '';
    const period = raw ? normalizeReportingDate(raw, 'Australia/Sydney') : '';
    if (period !== reportingDate) out[key] = { period: value.period || null, periodLabel: value.periodLabel || value.period || null, source: value.source || null, capturedAt: value.capturedAt || null, sales: value.sales || value.totalSales || value.netSales || null, transactions: value.transactions || value.orders || null, reason: `Ignored for daily cards because period is not ${reportingDate}` };
  }
  return out;
}

function scoreCandidate(candidate) {
  const text = `${candidate.availability || ''} ${candidate.transport || ''} ${candidate.experience || ''} ${candidate.answers || ''}`.toLowerCase();
  let score = 50;
  const flags = [];
  if (/fri|friday|sat|saturday|weekend/.test(text)) score += 20; else flags.push('Cannot confirm Friday/Saturday peak availability.');
  if (/car|drive|own transport|near|walk|bus/.test(text)) score += 15; else flags.push('Transport/distance needs checking.');
  if (/food|cafe|retail|customer|barista|kitchen/.test(text)) score += 15; else flags.push('Limited food/customer-service experience.');
  if (/quit|short|few weeks/.test(text)) { score -= 15; flags.push('Possible short-tenure risk.'); }
  const recommendation = score >= 80 ? 'Hire' : score >= 60 ? 'Maybe' : 'Pass';
  return { ...candidate, score: Math.max(0, Math.min(100, score)), recommendation, riskFlags: flags, interviewQuestions: ['Can you reliably work Friday/Saturday peaks?', 'How would you handle a customer complaint during a rush?', 'Which store can you get to fastest and how?'] };
}

function seedCandidates() { return [scoreCandidate({ id: 'sample_candidate_1', name: 'Sample strong weekend candidate', store: 'Penrith', availability: 'Friday Saturday Sunday', transport: 'Own car', experience: 'Cafe and customer service', answers: 'Likes fast-paced work' })]; }
function seedTraining() { return { modules: [
  { id: 'food-safety', title: 'Food safety and hygiene', steps: ['Wash hands before production and service.', 'Keep raw/finished areas separate.', 'Escalate any food safety concern to manager.'] },
  { id: 'cabinet', title: 'Cabinet presentation', steps: ['Keep display full and neat.', 'Group like products.', 'Face labels forward.', 'Escalate gaps before peak.'] },
  { id: 'upsell', title: 'Upsell and AOV', steps: ['Offer 6-pack or box.', 'Suggest drink combo.', 'Use one short friendly sentence.'] },
  { id: 'thickshake', title: 'Milkshake / thickshake', steps: ['Confirm flavour.', 'Use correct scoop count.', 'Blend to standard texture.', 'Wipe cup and hand over cleanly.'] }
], completions: [] }; }
function seedAudits() { return { records: [], zones: ['Cabinet and display', 'Front-of-house cleanliness', 'Production area', 'Beverage station', 'Signage and pricing'] }; }
function defaultStores() { return ['Beverly Hills', 'Penrith', 'Taren Point', "Frieda's Pies"].map(name => ({ name, status: 'Amber' })); }
function clone(value) { return JSON.parse(JSON.stringify(value)); }
