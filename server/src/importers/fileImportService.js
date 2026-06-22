import fs from 'fs';
import path from 'path';
import { parse as parseCsvStream } from 'csv-parse';
import { parse as parseCsvSync } from 'csv-parse/sync';
import XLSX from 'xlsx';
import { normalizeReportingDate, pad2 } from '../utils/dateUtils.js';
import { maskSecret, round2 } from '../utils/safe.js';

const STORE_ALIASES = [
  { key: 'Beverly Hills', short: 'BH', patterns: [/beverly/i, /\bbh\b/i] },
  { key: 'Penrith', short: 'Pen', patterns: [/penrith/i, /\bpn\b/i, /\bpen\b/i] },
  { key: 'Taren Point', short: 'TP', patterns: [/taren/i, /\btp\b/i] }
];
const HOURS = Array.from({ length: 18 }, (_, i) => `${pad2(i + 6)}:00`);

export function importsRoot(env = {}) {
  return path.resolve(process.cwd(), env.IMPORTS_PATH || './data/imports');
}

export function fileImportDiagnostics(env = {}) {
  const root = importsRoot(env);
  const files = listImportFiles(root).map(f => ({
    path: path.relative(root, f.path),
    bytes: f.bytes,
    mtime: f.mtime,
    type: classifyImportFile(f.path)
  }));
  return {
    root,
    rootExists: fs.existsSync(root),
    fileCount: files.length,
    files,
    expectedFolders: [
      'pos/product',
      'pos/history',
      'pos/hourly',
      'uber',
      'friedas',
      'production'
    ],
    mode: '0.2.23 fast imports: production/Uber/Frieda files plus POS backup files. POS live sync is primary; large ticket CSVs are skipped unless IMPORT_PARSE_TICKET_HISTORY=true.'
  };
}

export async function syncFileImports(env = {}, options = {}) {
  const startedAt = new Date().toISOString();
  const reportingDate = normalizeReportingDate(options.reportingDate || options.date || 'today', env.TIMEZONE || 'Australia/Sydney');
  const root = importsRoot(env);
  const warnings = [];
  const errors = [];
  const details = [];
  const files = listImportFiles(root);

  const importStatus = {
    root,
    rootExists: fs.existsSync(root),
    generatedAt: startedAt,
    reportingDate,
    files: files.map(f => ({ path: path.relative(root, f.path), bytes: f.bytes, mtime: f.mtime, type: classifyImportFile(f.path) })),
    lastImportedDates: { posHistory: {}, posHourly: {}, uber: {}, friedas: null, productionWeek: null },
    sourcePolicy: {
      historicalBaseline: 'GitHub CSV/XLSX files under server/data/imports',
      currentDay: 'Live connector only for selected dates after the latest uploaded history/hourly files, or manual upload at EOD.',
      posRule: 'Product sales files are used for product volume when present. Hourly workbook is used for daily/hourly sales totals. Large ticket history CSVs are skipped by default on Render; set IMPORT_PARSE_TICKET_HISTORY=true only for a heavier/offline parse.',
      staleRule: 'No stale WTD/MTD value is counted as today.'
    }
  };

  if (!fs.existsSync(root)) {
    return notSynced(reportingDate, startedAt, ['Import folder does not exist. Create server/data/imports and upload files.']);
  }

  const productFiles = files.filter(f => classifyImportFile(f.path) === 'pos-product');
  const historyFiles = files.filter(f => classifyImportFile(f.path) === 'pos-history');
  const parseTicketHistory = options.parseTicketHistory === true || String(env.IMPORT_PARSE_TICKET_HISTORY || '').toLowerCase() === 'true';
  const hourlyFiles = files.filter(f => classifyImportFile(f.path) === 'pos-hourly');
  const uberFiles = files.filter(f => classifyImportFile(f.path) === 'uber');
  const friedasFiles = files.filter(f => classifyImportFile(f.path) === 'friedas');
  const productionFiles = files.filter(f => classifyImportFile(f.path) === 'production');

  const historyAgg = makeHistoryAgg(reportingDate);
  for (const file of productFiles) {
    try {
      const s = await parsePosHistoryFile(file.path, reportingDate, historyAgg, 'pos-product-sales');
      details.push({ source: 'pos-product-sales', file: path.relative(root, file.path), ...s });
      importStatus.lastImportedDates.posHistory[s.store || path.basename(file.path)] = s.maxDate || null;
    } catch (err) {
      errors.push(`POS product ${path.basename(file.path)}: ${err.message || err}`);
    }
  }
  if (parseTicketHistory) {
    for (const file of historyFiles) {
      try {
        const s = await parsePosHistoryFile(file.path, reportingDate, historyAgg, 'pos-ticket-history');
        details.push({ source: 'pos-history', file: path.relative(root, file.path), ...s });
        importStatus.lastImportedDates.posHistory[s.store || path.basename(file.path)] = s.maxDate || null;
      } catch (err) {
        errors.push(`POS history ${path.basename(file.path)}: ${err.message || err}`);
      }
    }
  } else if (historyFiles.length) {
    const totalMb = Math.round(historyFiles.reduce((sum, f) => sum + (f.bytes || 0), 0) / 1024 / 1024);
    warnings.push(`Large ticket history CSVs skipped for fast Render import (${historyFiles.length} files, about ${totalMb} MB). POS live sync is now primary for daily/hourly/product data. Uploaded POS files remain backup only. Set IMPORT_PARSE_TICKET_HISTORY=true only if you intentionally want the slower ticket parse.`);
    details.push({ source: 'pos-history', status: 'skipped_fast_import', fileCount: historyFiles.length, totalMb, reason: 'IMPORT_PARSE_TICKET_HISTORY is not true' });
  }

  const hourlyAgg = makeHourlyAgg(reportingDate);
  for (const file of hourlyFiles) {
    try {
      const s = parseHourlyWorkbook(file.path, hourlyAgg);
      details.push({ source: 'pos-hourly', file: path.relative(root, file.path), ...s });
      importStatus.lastImportedDates.posHourly[s.store || path.basename(file.path)] = s.maxDate || null;
    } catch (err) {
      errors.push(`POS hourly ${path.basename(file.path)}: ${err.message || err}`);
    }
  }

  const reportingPOS = buildReportingPOS(reportingDate, historyAgg, hourlyAgg, warnings);
  const hourlyHistory = buildAllHourlyHistory(reportingDate, hourlyAgg);

  const uberAgg = makeUberAgg(reportingDate);
  for (const file of uberFiles) {
    try {
      const s = parseUberWorkbook(file.path, reportingDate, uberAgg, hourlyAgg);
      details.push({ source: 'uber-file', file: path.relative(root, file.path), ...s });
      for (const [store, date] of Object.entries(s.maxDateByStore || {})) importStatus.lastImportedDates.uber[store] = date;
    } catch (err) {
      errors.push(`Uber file ${path.basename(file.path)}: ${err.message || err}`);
    }
  }

  const squareAgg = makeSquareAgg(reportingDate);
  for (const file of friedasFiles) {
    try {
      const s = parseFriedasItemsFile(file.path, reportingDate, squareAgg);
      details.push({ source: 'friedas-items', file: path.relative(root, file.path), ...s });
      if (s.maxDate && (!importStatus.lastImportedDates.friedas || s.maxDate > importStatus.lastImportedDates.friedas)) importStatus.lastImportedDates.friedas = s.maxDate;
    } catch (err) {
      errors.push(`Frieda items ${path.basename(file.path)}: ${err.message || err}`);
    }
  }

  let productionPlan = { source: 'not_found', files: [], warnings: ['No production/cook workbook found.'] };
  if (productionFiles.length) {
    try {
      productionPlan = parseProductionFiles(productionFiles.map(f => f.path), reportingDate);
      details.push({ source: 'production-files', fileCount: productionFiles.length, weekStart: productionPlan.weekStart, weekEnd: productionPlan.weekEnd, productRows: productionPlan.productRows?.length || 0, cookRows: productionPlan.cookRows?.length || 0 });
      importStatus.lastImportedDates.productionWeek = productionPlan.weekStart && productionPlan.weekEnd ? `${productionPlan.weekStart} to ${productionPlan.weekEnd}` : null;
    } catch (err) {
      errors.push(`Production files: ${err.message || err}`);
    }
  }

  const square = buildSquare(reportingDate, squareAgg, warnings);
  const uberEats = uberAgg.uberEats;
  const weeklySummary = buildWeeklySummary(reportingDate, hourlyAgg, uberAgg, squareAgg);

  const anySelectedDateData = Object.keys(reportingPOS).length || Object.keys(uberEats).length || Object.keys(square).length;
  if (!anySelectedDateData) warnings.push(`No imported sales rows matched selected date ${reportingDate}. Check the date or upload newer files.`);

  return {
    ok: errors.length === 0 || files.length > 0,
    status: files.length ? (errors.length ? 'partial_success' : 'success') : 'not_synced',
    source: 'File imports',
    mode: 'file-imports-production-uber-square-pos-backup',
    reportingDate,
    periodMatched: anySelectedDateData,
    startedAt,
    finishedAt: new Date().toISOString(),
    warnings,
    errors,
    details,
    reportingPOS,
    uberEats,
    square,
    weeklySummary,
    hourlyHistory,
    productionPlan,
    importStatus,
    fileImportCache: {
      reportingDate,
      generatedAt: new Date().toISOString(),
      hourlyByStoreDate: hourlyAgg.byStoreDate,
      uberByStoreDate: uberAgg.byStoreDate,
      squareByDate: squareAgg.byDate
    },
    diagnostics: fileImportDiagnostics(env)
  };
}

function notSynced(reportingDate, startedAt, errors = []) {
  return { ok: false, status: 'not_synced', source: 'File imports', mode: 'file-imports-production-uber-square-pos-backup', reportingDate, periodMatched: false, startedAt, finishedAt: new Date().toISOString(), errors, warnings: [], reportingPOS: {}, uberEats: {}, square: {}, weeklySummary: {}, hourlyHistory: {}, importStatus: {} };
}

function listImportFiles(root) {
  if (!fs.existsSync(root)) return [];
  const out = [];
  walk(root, out);
  return out.filter(f => /\.(csv|xlsx)$/i.test(f.path)).sort((a, b) => a.path.localeCompare(b.path));
}
function walk(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, out);
    else out.push({ path: full, bytes: st.size, mtime: st.mtime.toISOString() });
  }
}

function classifyImportFile(filePath = '') {
  const rel = filePath.replace(/\\/g, '/').toLowerCase();
  const base = path.basename(rel);
  if (rel.includes('/pos/product/') || base.includes('product_sales') || base.includes('productsales')) return 'pos-product';
  if (rel.includes('/pos/history/') || base.startsWith('history_')) return 'pos-history';
  if (rel.includes('/pos/hourly/') || base.includes('daily_hour')) return 'pos-hourly';
  if (rel.includes('/uber/') || base.includes('weekly_input') || base.includes('uber')) return 'uber';
  if (rel.includes('/friedas/') || base.startsWith('items-')) return 'friedas';
  if (rel.includes('/production/') || base.includes('production') || base.includes('cook_sheet') || base.includes('cook_sheets')) return 'production';
  return 'unknown';
}

function makeHistoryAgg(reportingDate) {
  return { reportingDate, byStore: {}, allStoreStats: {}, selectedProducts: {}, selectedCategories: {}, selectedPayments: {}, selectedTickets: {}, selectedHourlyTickets: {}, selectedSales: {} };
}
function makeHourlyAgg(reportingDate) {
  return { reportingDate, byStoreDate: {}, stats: {} };
}
function makeUberAgg(reportingDate) { return { reportingDate, stats: {}, uberEats: {}, byStoreDate: {} }; }
function makeSquareAgg(reportingDate) { return { reportingDate, stats: { rows: 0, minDate: null, maxDate: null }, byDate: {}, selected: { sales: 0, grossSales: 0, qty: 0, transactions: new Set(), productMap: new Map(), hourlyMap: new Map() } }; }

async function parsePosHistoryFile(filePath, reportingDate, agg, sourceType = 'pos-history') {
  const storeFromFile = storeFromText(path.basename(filePath));
  const stats = { rows: 0, selectedRows: 0, minDate: null, maxDate: null, store: storeFromFile, sourceType };
  await new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(parseCsvStream({ columns: true, bom: true, trim: true, relax_column_count: true, skip_empty_lines: true }))
      .on('data', row => {
        stats.rows += 1;
        const rawDate = row.Date || row.date || row.Timestamp || row.timestamp || '';
        const date = isoFromDateTime(rawDate);
        if (!date) return;
        stats.minDate = minDate(stats.minDate, date);
        stats.maxDate = maxDate(stats.maxDate, date);
        const store = cleanStore(row.Store || storeFromFile || 'Unknown');
        stats.store = store;
        if (date !== reportingDate) return;
        stats.selectedRows += 1;
        const product = clean(row.Product || row.product || row.Item || row.item || row.Article || row.article || 'Unknown');
        const category = clean(row.Category || row.category || row.Family || row.family || row.Section || row.section || 'Uncategorised');
        const qty = parseNumber(row.Qty ?? row.Quantity ?? row.quantity ?? row['Qty Sold'] ?? row['Quantity Sold'] ?? row.Units);
        const sales = parseMoney(row.Line_Total ?? row.Total ?? row.total ?? row.Sales ?? row.sales ?? row.Net_Sales ?? row['Net Sales'] ?? row.Amount ?? row.amount);
        const ticket = clean(row.Ticket_ID || row.TicketId || row.ticket_id || row.ticket || '');
        const payment = clean(row.Payment_Type || row.Payment || row.payment_type || 'Unknown');
        const hour = hourFromDateTime(rawDate);
        addNumber(agg.selectedSales, store, sales);
        addAggMap(agg.selectedProducts, store, product, { product, qty, sales, category });
        addAggMap(agg.selectedCategories, store, category, { category, qty, sales });
        addAggMap(agg.selectedPayments, store, payment, { paymentType: payment, sales, qty });
        if (ticket) addSet(agg.selectedTickets, store, ticket);
        if (hour) addAggMap(agg.selectedHourlyTickets, store, hour, { hour, sales, orders: ticket ? 1 : 0, qty });
      })
      .on('error', reject)
      .on('end', resolve);
  });
  agg.allStoreStats[stats.store || storeFromFile || path.basename(filePath)] = stats;
  return stats;
}

function parseHourlyWorkbook(filePath, agg) {
  const wb = XLSX.readFile(filePath, { cellDates: false });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: null });
  const store = cleanStore(storeFromText(path.basename(filePath)) || path.basename(filePath).replace(/_daily_hour\.xlsx$/i, ''));
  const headers = rows[0] || [];
  const stats = { store, rows: 0, minDate: null, maxDate: null, selectedDateFound: false };
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r] || [];
    const date = excelDateToIso(row[0]);
    if (!date) continue;
    stats.rows += 1;
    stats.minDate = minDate(stats.minDate, date);
    stats.maxDate = maxDate(stats.maxDate, date);
    const hourlyRows = [];
    let total = null;
    for (let c = 1; c < headers.length; c++) {
      const header = String(headers[c] || '').trim();
      const val = parseNumber(row[c]);
      if (/^total$/i.test(header)) total = val;
      else if (/^\d{1,2}:\d{2}$/.test(header)) hourlyRows.push({ hour: normalizeHour(header), sales: round2(val || 0), source: 'pos-hourly-xlsx-backup' });
    }
    if (total == null) total = round2(hourlyRows.reduce((s, x) => s + (Number(x.sales) || 0), 0));
    if (!agg.byStoreDate[store]) agg.byStoreDate[store] = {};
    agg.byStoreDate[store][date] = { date, store, hourlyRows, sales: round2(total || 0), source: 'pos-hourly-xlsx-backup', file: path.basename(filePath) };
    if (date === agg.reportingDate) stats.selectedDateFound = true;
  }
  agg.stats[store] = stats;
  return stats;
}

function buildReportingPOS(reportingDate, historyAgg, hourlyAgg, warnings) {
  const stores = new Set([...Object.keys(hourlyAgg.byStoreDate || {}), ...Object.keys(historyAgg.allStoreStats || {})]);
  const out = {};
  for (const store of stores) {
    const hourlyDay = hourlyAgg.byStoreDate?.[store]?.[reportingDate] || null;
    const productRows = sortedMapRows(historyAgg.selectedProducts[store], ['product']).slice(0, 80).map(r => ({ product: r.product, category: r.category, qty: round2(r.qty), sales: round2(r.sales) }));
    const categoryRows = sortedMapRows(historyAgg.selectedCategories[store], ['category']).map(r => ({ category: r.category, qty: round2(r.qty), sales: round2(r.sales) }));
    const paymentRows = sortedMapRows(historyAgg.selectedPayments[store], ['paymentType']).map(r => ({ paymentType: r.paymentType, qty: round2(r.qty), sales: round2(r.sales) }));
    const histSales = historyAgg.selectedSales[store] || 0;
    const tickets = historyAgg.selectedTickets[store]?.size || null;
    if (!hourlyDay && !histSales && !productRows.length) continue;
    const sales = hourlyDay ? hourlyDay.sales : round2(histSales);
    const orders = tickets || null;
    if (hourlyDay && histSales && Math.abs(hourlyDay.sales - histSales) / Math.max(1, hourlyDay.sales) > 0.15) {
      warnings.push(`${store}: POS hourly total and history ticket/product total differ by more than 15%. Keeping uploaded POS files as backup only; live reporting.site sync is the primary POS sales/product source.`);
    }
    out[store] = {
      store,
      source: 'pos-file-backup',
      sourceDetail: hourlyDay ? 'pos-hourly-xlsx backup + product/history-csv backup' : 'product/history-csv backup',
      period: reportingDate,
      periodMatched: true,
      sales,
      totalSales: sales,
      netSales: sales,
      orders,
      transactions: orders,
      aov: orders ? round2(sales / orders) : null,
      hourlyRows: hourlyDay?.hourlyRows || sortedMapRows(historyAgg.selectedHourlyTickets[store], ['hour']).map(r => ({ hour: r.hour, sales: round2(r.sales), orders: r.orders || 0 })),
      productRows,
      categoryRows,
      paymentRows,
      sourcePagesUsed: ['server/data/imports/pos/hourly backup', 'server/data/imports/pos/history backup'],
      warnings: hourlyDay ? ['POS file import is backup only in 0.2.23; live reporting.site sync is the primary POS source.'] : ['POS file import is backup only in 0.2.23; no hourly workbook row for selected date; using history CSV backup only.'],
      capturedAt: new Date().toISOString()
    };
  }
  return out;
}

function buildAllHourlyHistory(reportingDate, hourlyAgg) {
  const out = {};
  for (const [store, byDate] of Object.entries(hourlyAgg.byStoreDate || {})) {
    const sameDayLastWeekDate = addDays(reportingDate, -7);
    const sameDayLastWeek = byDate[sameDayLastWeekDate]?.hourlyRows || [];
    const last4Dates = [-7, -14, -21, -28].map(d => addDays(reportingDate, d));
    const wtdDates = dateRange(mondayOf(reportingDate), reportingDate).filter(d => byDate[d]?.hourlyRows?.length);
    const avgRows = HOURS.map(hour => {
      const vals = last4Dates.map(d => byDate[d]?.hourlyRows?.find(x => x.hour === hour)?.sales).filter(v => Number.isFinite(v));
      return { hour, sales: vals.length ? round2(vals.reduce((a, b) => a + b, 0) / vals.length) : null, sampleDays: vals.length };
    }).filter(x => x.sales != null);
    const wtdAverage = HOURS.map(hour => {
      const vals = wtdDates.map(d => byDate[d]?.hourlyRows?.find(x => x.hour === hour)?.sales).filter(v => Number.isFinite(v));
      return { hour, sales: vals.length ? round2(vals.reduce((a, b) => a + b, 0) / vals.length) : null, sampleDays: vals.length };
    }).filter(x => x.sales != null);
    out[store] = { sameDayLastWeekDate, sameDayLastWeek, last4WeekAverage: avgRows, wtdAverage, wtdDates, last4WeekDates: last4Dates, source: 'pos-hourly-xlsx-backup' };
  }
  return out;
}

function parseUberWorkbook(filePath, reportingDate, agg, hourlyAgg) {
  const wb = XLSX.readFile(filePath, { cellDates: false });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: null });
  const headers = rows[0] || [];
  const maxDateByStore = {};
  let selectedRows = 0;
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r] || [];
    const date = excelDateToIso(row[0]);
    if (!date) continue;
    for (let c = 1; c < headers.length; c++) {
      const store = storeFromUberHeader(headers[c]);
      if (!store) continue;
      maxDateByStore[store] = maxDate(maxDateByStore[store], date);
      const sales = parseNumber(row[c]);
      if (!agg.byStoreDate[store]) agg.byStoreDate[store] = {};
      if (sales) agg.byStoreDate[store][date] = { date, store, sales: round2(sales), source: 'uber-file-import' };
      if (date !== reportingDate || !sales) continue;
      selectedRows += 1;
      const allocated = allocateByPosHourly(store, reportingDate, sales, hourlyAgg);
      agg.uberEats[store] = { store, source: 'uber-file-import', period: reportingDate, periodMatched: true, sales: round2(sales), totalSales: round2(sales), orders: null, aov: null, hourlyRows: allocated, allocationMethod: allocated.length ? 'allocated across POS hourly sales share' : 'daily total only', capturedAt: new Date().toISOString() };
    }
  }
  return { rows: Math.max(0, rows.length - 1), selectedRows, maxDateByStore };
}

function parseFriedasItemsFile(filePath, reportingDate, agg) {
  const buffer = fs.readFileSync(filePath);
  const text = decodeCsvBuffer(buffer);
  const firstLine = text.split(/\r?\n/)[0] || '';
  const delimiter = firstLine.includes('\t') ? '\t' : ',';
  const rows = parseCsvSync(text, { columns: true, bom: true, trim: true, relax_column_count: true, skip_empty_lines: true, delimiter });
  const headers = rows.length ? Object.keys(rows[0]) : [];
  const keys = mapFriedasHeaders(headers);
  let selectedRows = 0;
  for (const row of rows) {
    agg.stats.rows += 1;
    const date = isoFromDateTime(row[keys.date]);
    if (!date) continue;
    agg.stats.minDate = minDate(agg.stats.minDate, date);
    agg.stats.maxDate = maxDate(agg.stats.maxDate, date);
    const time = clean(row[keys.time] || '');
    const hour = hourFromTime(time);
    const product = clean(row[keys.item] || 'Unknown');
    const qty = parseNumber(row[keys.qty]);
    const net = parseMoney(row[keys.net]);
    const gross = parseMoney(row[keys.gross]);
    const txn = clean(row[keys.transaction] || '');
    const d = agg.byDate[date] || { date, sales: 0, grossSales: 0, qty: 0, transactions: new Set(), hourlyMap: new Map() };
    d.sales += net || 0; d.grossSales += gross || net || 0; d.qty += qty || 0; if (txn) d.transactions.add(txn);
    if (hour) { const h = d.hourlyMap.get(hour) || { hour, sales: 0, grossSales: 0, qty: 0, transactions: new Set() }; h.sales += net || 0; h.grossSales += gross || net || 0; h.qty += qty || 0; if (txn) h.transactions.add(txn); d.hourlyMap.set(hour, h); }
    agg.byDate[date] = d;
    if (date !== reportingDate) continue;
    selectedRows += 1;
    agg.selected.sales += net || 0;
    agg.selected.grossSales += gross || net || 0;
    agg.selected.qty += qty || 0;
    if (txn) agg.selected.transactions.add(txn);
    const prod = agg.selected.productMap.get(product) || { product, qty: 0, sales: 0, grossSales: 0 };
    prod.qty += qty || 0; prod.sales += net || 0; prod.grossSales += gross || net || 0;
    agg.selected.productMap.set(product, prod);
    if (hour) {
      const h = agg.selected.hourlyMap.get(hour) || { hour, sales: 0, grossSales: 0, qty: 0, transactions: new Set() };
      h.sales += net || 0; h.grossSales += gross || net || 0; h.qty += qty || 0; if (txn) h.transactions.add(txn);
      agg.selected.hourlyMap.set(hour, h);
    }
  }
  return { rows: rows.length, selectedRows, minDate: agg.stats.minDate, maxDate: agg.stats.maxDate, mappedColumns: keys };
}

function buildSquare(reportingDate, agg) {
  const sel = agg.selected;
  if (!sel.sales && !sel.grossSales && !sel.productMap.size) return {};
  const productRows = [...sel.productMap.values()].sort((a,b)=>b.sales-a.sales).slice(0,80).map(r => ({ product: r.product, qty: round2(r.qty), sales: round2(r.sales), grossSales: round2(r.grossSales) }));
  const hourlyRows = [...sel.hourlyMap.values()].sort((a,b)=>a.hour.localeCompare(b.hour)).map(r => ({ hour: r.hour, sales: round2(r.sales), grossSales: round2(r.grossSales), qty: round2(r.qty), transactions: r.transactions.size }));
  const transactions = sel.transactions.size || null;
  return {
    "Frieda's Pies": {
      store: "Frieda's Pies",
      source: 'square-items-file-import',
      period: reportingDate,
      periodMatched: true,
      sales: round2(sel.sales),
      netSales: round2(sel.sales),
      grossSales: round2(sel.grossSales),
      transactions,
      orders: transactions,
      aov: transactions ? round2(sel.sales / transactions) : null,
      qty: round2(sel.qty),
      productRows,
      hourlyRows,
      capturedAt: new Date().toISOString()
    }
  };
}

function parseProductionFiles(files, reportingDate) {
  const productRows = [];
  const cookRows = [];
  const shapeRows = [];
  const fileSummaries = [];
  for (const filePath of files) {
    const wb = XLSX.readFile(filePath, { cellDates: false });
    fileSummaries.push({ file: path.basename(filePath), sheets: wb.SheetNames });
    if (wb.Sheets.PLAN_INPUTS) {
      const rows = XLSX.utils.sheet_to_json(wb.Sheets.PLAN_INPUTS, { raw: true, defval: null });
      for (const row of rows) {
        const date = excelDateToIso(row.Date);
        if (!date) continue;
        productRows.push({ date, day: clean(row.Day), store: cleanStore(row.Store), section: clean(row.Section), product: clean(row.Product), totalPlan: parseNumber(row['Total Plan']), trayText: clean(row['Tray Text']), trayVisual: clean(row['Tray Visual']) });
      }
    }
    if (wb.Sheets.COOK_INPUTS) {
      const rows = XLSX.utils.sheet_to_json(wb.Sheets.COOK_INPUTS, { raw: true, defval: null });
      for (const row of rows) {
        const date = excelDateToIso(row.Date);
        if (!date) continue;
        cookRows.push({ date, day: clean(row.Day), store: cleanStore(row.Store), shape: clean(row.Shape), totalCook: parseNumber(row['Total Cook']), trayText: clean(row['Tray Text']), visual: clean(row.Visual) });
      }
    }
    if (wb.Sheets.SHAPE_CHECK) {
      const rows = XLSX.utils.sheet_to_json(wb.Sheets.SHAPE_CHECK, { raw: true, defval: null });
      for (const row of rows) shapeRows.push({ product: clean(row.Product), section: clean(row.Section), shape: clean(row['Cook Shape']), weeklyUnits: parseNumber(row['Weekly Units']) });
    }
  }
  const allDates = [...new Set([...productRows.map(r=>r.date), ...cookRows.map(r=>r.date)].filter(Boolean))].sort();
  const weekStart = allDates[0] || null;
  const weekEnd = allDates[allDates.length - 1] || null;
  const planningDate = productionPlanningDate(reportingDate, weekStart, weekEnd);
  const selectedProductRows = productRows.filter(r => r.date === planningDate);
  const selectedCookRows = cookRows.filter(r => r.date === planningDate);
  const storeTotals = groupSum(productRows, 'store', 'totalPlan');
  const dayTotals = groupSum(productRows, 'date', 'totalPlan');
  const shapeTotals = groupSum(cookRows, 'shape', 'totalCook');
  return {
    source: 'production-cook-xlsx-import', files: fileSummaries, weekStart, weekEnd,
    productRows, cookRows, shapeRows,
    selectedDate: reportingDate,
    planningDate,
    selectedProductRows,
    selectedCookRows,
    storeTotals,
    dayTotals,
    shapeTotals,
    warnings: selectedProductRows.length || selectedCookRows.length ? (planningDate !== reportingDate ? [`Sunday planning mode: showing Monday ${planningDate} production plan because the uploaded production sheet starts on Monday.`] : []) : [`No production/cook rows for selected date ${reportingDate}. Current loaded plan covers ${weekStart || '?'} to ${weekEnd || '?'}.`]
  };
}


function buildWeeklySummary(reportingDate, hourlyAgg, uberAgg, squareAgg) {
  const weekStart = mondayOf(reportingDate);
  const dates = dateRange(weekStart, reportingDate);
  const stores = new Set([...Object.keys(hourlyAgg.byStoreDate || {}), ...Object.keys(uberAgg.byStoreDate || {})]);
  const rows = [];
  let posTotal = 0, uberTotal = 0, friedasTotal = 0;
  for (const store of stores) {
    const posSales = round2(dates.reduce((sum, d) => sum + (Number(hourlyAgg.byStoreDate?.[store]?.[d]?.sales) || 0), 0));
    const uberSales = round2(dates.reduce((sum, d) => sum + (Number(uberAgg.byStoreDate?.[store]?.[d]?.sales) || 0), 0));
    posTotal += posSales; uberTotal += uberSales;
    rows.push({ store, posSales, uberSales, totalSales: round2(posSales + uberSales), datesCovered: dates.filter(d => hourlyAgg.byStoreDate?.[store]?.[d] || uberAgg.byStoreDate?.[store]?.[d]) });
  }
  for (const d of dates) friedasTotal += Number(squareAgg.byDate?.[d]?.sales) || 0;
  const friedas = { store: "Frieda's Pies", squareSales: round2(friedasTotal), totalSales: round2(friedasTotal), datesCovered: dates.filter(d => squareAgg.byDate?.[d]) };
  return {
    source: 'file-imports-wtd-backup-for-pos',
    period: `${weekStart} to ${reportingDate}`,
    weekStart,
    weekEnd: reportingDate,
    dates,
    posTotal: round2(posTotal),
    uberTotal: round2(uberTotal),
    friedasTotal: round2(friedasTotal),
    combinedDonutTotal: round2(posTotal + uberTotal),
    combinedAllTotal: round2(posTotal + uberTotal + friedasTotal),
    stores: rows.sort((a,b)=>a.store.localeCompare(b.store)),
    friedas
  };
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
function productionPlanningDate(reportingDate, weekStart, weekEnd) {
  const d = new Date(`${reportingDate}T00:00:00Z`);
  const isSunday = d.getUTCDay() === 0;
  const monday = addDays(reportingDate, 1);
  if (isSunday && weekStart && monday === weekStart) return monday;
  if (weekStart && reportingDate < weekStart && daysBetween(reportingDate, weekStart) <= 1) return weekStart;
  return reportingDate;
}
function buildAllDatesByStore(hourlyAgg) { return hourlyAgg.byStoreDate || {}; }

function allocateByPosHourly(store, date, sales, hourlyAgg) {
  const day = hourlyAgg.byStoreDate?.[store]?.[date];
  if (!day?.hourlyRows?.length || !day.sales) return [];
  return day.hourlyRows.map(r => ({ hour: r.hour, sales: round2((Number(r.sales) || 0) / day.sales * sales), source: 'uber-daily-allocated-by-pos-hour-share' })).filter(r => r.sales);
}

function mapFriedasHeaders(headers) {
  const norm = Object.fromEntries(headers.map(h => [normaliseHeader(h), h]));
  const pick = (...parts) => {
    const found = Object.entries(norm).find(([k]) => parts.every(p => k.includes(p)));
    return found?.[1] || '';
  };
  return {
    date: pick('date'),
    time: pick('heure') || pick('time'),
    item: pick('article') || pick('item'),
    qty: pick('qt') || pick('qty'),
    net: pick('ventes', 'nettes') || pick('net', 'sales'),
    gross: pick('ventes', 'brutes') || pick('gross', 'sales'),
    transaction: pick('transaction') || pick('payment')
  };
}

function decodeCsvBuffer(buffer) {
  if (buffer[0] === 0xff && buffer[1] === 0xfe) return new TextDecoder('utf-16le').decode(buffer);
  if (buffer[0] === 0xfe && buffer[1] === 0xff) return new TextDecoder('utf-16be').decode(buffer);
  // Square exports sometimes arrive as UTF-16LE without a clean extension signal.
  if (buffer.slice(0, 200).includes(0)) return new TextDecoder('utf-16le').decode(buffer);
  return new TextDecoder('utf-8').decode(buffer);
}

function isoFromDateTime(value) {
  const s = clean(value);
  const m = s.match(/(20\d{2})[-/](\d{1,2})[-/](\d{1,2})/);
  if (m) return `${m[1]}-${pad2(m[2])}-${pad2(m[3])}`;
  const au = s.match(/(\d{1,2})[-/](\d{1,2})[-/](20\d{2})/);
  if (au) return `${au[3]}-${pad2(au[2])}-${pad2(au[1])}`;
  const serial = Number(value);
  if (Number.isFinite(serial) && serial > 20000 && serial < 60000) return excelDateToIso(serial);
  return '';
}
function hourFromDateTime(value) {
  const m = clean(value).match(/\b(\d{1,2}):(\d{2})(?::\d{2})?\b/);
  return m ? `${pad2(m[1])}:00` : '';
}
function hourFromTime(value) { return hourFromDateTime(`2000-01-01 ${value}`); }
function normalizeHour(h) { const m = String(h).match(/(\d{1,2}):/); return m ? `${pad2(m[1])}:00` : String(h); }
function excelDateToIso(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const serial = Number(value);
  if (!Number.isFinite(serial) || serial < 20000) return isoFromDateTime(String(value));
  const ms = Date.UTC(1899, 11, 30) + Math.floor(serial) * 86400000;
  return new Date(ms).toISOString().slice(0, 10);
}
function addDays(iso, days) { const d = new Date(`${iso}T00:00:00Z`); d.setUTCDate(d.getUTCDate() + days); return d.toISOString().slice(0,10); }
function daysBetween(a, b) { const da = new Date(`${a}T00:00:00Z`); const db = new Date(`${b}T00:00:00Z`); return Math.round((db - da) / 86400000); }
function parseNumber(value) {
  if (value == null || value === '') return 0;
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  let raw = String(value).replace(/ /g, ' ').trim().replace(/\s/g, '').replace(/[$A-Za-z]/g, '');
  if (!raw) return 0;
  const neg = /^-/.test(raw) || /\(.*\)/.test(String(value));
  raw = raw.replace(/[()]/g, '').replace(/^-/, '');
  const lastComma = raw.lastIndexOf(',');
  const lastDot = raw.lastIndexOf('.');
  if (lastComma >= 0 && lastDot >= 0) {
    raw = lastComma > lastDot ? raw.replace(/\./g, '').replace(',', '.') : raw.replace(/,/g, '');
  } else if (lastComma >= 0) {
    raw = raw.replace(',', '.');
  }
  const n = Number(raw);
  return Number.isFinite(n) ? (neg ? -n : n) : 0;
}
function parseMoney(value) { return parseNumber(value); }
function clean(value) { return String(value ?? '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim(); }
function cleanStore(value) {
  const t = clean(value).replace(/V0$/i, '').trim();
  return storeFromText(t) || t || 'Unknown';
}
function storeFromText(text = '') {
  const s = String(text || '').toLowerCase();
  const hit = STORE_ALIASES.find(a => a.patterns.some(p => p.test(s)));
  return hit?.key || '';
}
function storeFromUberHeader(value) {
  const s = clean(value);
  if (/^tp$/i.test(s)) return 'Taren Point';
  if (/^pen$/i.test(s) || /^pn$/i.test(s)) return 'Penrith';
  if (/^bh$/i.test(s)) return 'Beverly Hills';
  return storeFromText(s);
}
function normaliseHeader(h) { return String(h || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ''); }
function minDate(a,b) { return !a || (b && b < a) ? b : a; }
function maxDate(a,b) { return !a || (b && b > a) ? b : a; }
function addNumber(obj, key, val) { obj[key] = (obj[key] || 0) + (Number(val) || 0); }
function addSet(obj, key, val) { if (!obj[key]) obj[key] = new Set(); obj[key].add(val); }
function addAggMap(obj, store, key, row) {
  if (!obj[store]) obj[store] = new Map();
  const e = obj[store].get(key) || { ...row, qty: 0, sales: 0, orders: 0 };
  e.qty += Number(row.qty) || 0;
  e.sales += Number(row.sales) || 0;
  e.orders += Number(row.orders) || 0;
  obj[store].set(key, e);
}
function sortedMapRows(map, tieKeys = []) {
  if (!map) return [];
  return [...map.values()].sort((a,b) => (Number(b.sales)||0) - (Number(a.sales)||0) || String(a[tieKeys[0]]||'').localeCompare(String(b[tieKeys[0]]||'')));
}
function groupSum(rows, key, field) {
  const out = {};
  for (const row of rows) out[row[key] || 'Unknown'] = round2((out[row[key] || 'Unknown'] || 0) + (Number(row[field]) || 0));
  return out;
}
