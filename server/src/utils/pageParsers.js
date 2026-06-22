import * as cheerio from 'cheerio';
import { cleanText, moneyToNumber, numberOrNull, round2 } from './safe.js';
import { extractPeriodFromText, extractDatesFromText, hourFromTimestamp, parseDisplayDate } from './dateUtils.js';

const SALES_LABELS = ['sales', 'ventes', 'revenue', 'turnover', 'total sales', 'net sales', 'total encaissé', 'ventes nettes'];
const ORDER_LABELS = ['orders', 'commandes', 'tickets', 'transactions', 'receipts', 'transactions finalisées', 'units sold', 'unités vendues', 'quantity sold', 'qty sold'];
const AOV_LABELS = ['aov', 'average order', 'coût moyen', 'average spend', 'panier moyen'];

export function htmlToTextAndTables(html = '') {
  const $ = cheerio.load(String(html || ''));
  const scripts = [];
  $('script').each((_i, el) => scripts.push($(el).html() || ''));
  $('script,style,noscript,svg').remove();
  const title = cleanText($('title').first().text());
  const bodyText = cleanText($('body').text() || $.root().text());
  const tables = [];
  $('table').each((_i, table) => {
    const rows = [];
    $(table).find('tr').each((_j, tr) => {
      const cells = [];
      $(tr).find('th,td').each((_k, td) => cells.push(cleanText($(td).text())));
      if (cells.some(Boolean)) rows.push(cells);
    });
    if (rows.length) tables.push(rows);
  });
  const inputs = [];
  $('input,select').each((_i, el) => {
    inputs.push({ name: $(el).attr('name') || '', id: $(el).attr('id') || '', type: $(el).attr('type') || '', value: $(el).attr('value') || '' });
  });
  return { title, text: bodyText, tables, inputs, scripts };
}

export function parseKpisFromText(text = '') {
  const source = cleanText(text);
  const lower = source.toLowerCase();
  const out = { sales: null, totalSales: null, netSales: null, orders: null, transactions: null, aov: null };
  out.sales = findMoneyNearLabels(source, SALES_LABELS);
  out.totalSales = out.sales;
  out.netSales = out.sales;
  out.orders = findIntegerNearLabels(source, ORDER_LABELS);
  out.transactions = out.orders;
  out.aov = findMoneyNearLabels(source, AOV_LABELS);

  if (out.aov == null && out.sales != null && out.orders) out.aov = round2(out.sales / out.orders);

  // Fallback for card-style dashboards where labels and values are adjacent but reversed.
  const moneyValues = [...source.matchAll(/(?:A\$|AU\$|\$)\s*\d[\d,]*(?:\.\d{1,2})?|\d[\d,]*\.\d{2}\s*(?:A\$|AU\$|\$)/gi)].map(m => moneyToNumber(m[0])).filter(Number.isFinite);
  if (out.sales == null && moneyValues.length && hasAny(lower, SALES_LABELS)) {
    out.sales = moneyValues[0]; out.totalSales = out.sales; out.netSales = out.sales;
  }
  return out;
}

export function parseDashboardPage(html = '', context = {}) {
  const { title, text, tables, inputs, scripts } = htmlToTextAndTables(html);
  const metrics = parseKpisFromText(text);
  const period = extractPeriodFromText(text);
  const inputPeriod = extractPeriodFromInputs(inputs);
  const finalPeriod = period.start ? period : inputPeriod;
  const tableRows = parseGenericTables(tables);
  const rawHourlyRows = [...parseHourlyFromScripts(String(html || ''), scripts), ...parseHourlyFromTables(tables), ...parseHourlyFromText(text)];
  const hourlyRows = sanitizeHourlyRows(rawHourlyRows, metrics.sales ?? metrics.totalSales ?? metrics.netSales);
  const productRows = parseProductsFromTables(tables);
  return {
    ok: Boolean(metrics.sales != null || metrics.orders != null || hourlyRows.length || productRows.length || tableRows.length),
    title,
    period: finalPeriod,
    textPeriod: period,
    inputPeriod,
    metrics,
    hourlyRows: mergeHourly(hourlyRows),
    productRows,
    tableRows,
    inputs,
    warnings: finalPeriod.start ? [] : ['No exact period/date text found in page text or date inputs. Values will not be accepted for Today unless another page confirms the date.'],
    sourcePage: context.sourcePage || ''
  };
}

export function parseSquareUiText(text = '') {
  const source = cleanText(text);
  const period = extractPeriodFromText(source);
  const metrics = parseKpisFromText(source);
  return { period, metrics };
}

export function parseUberUiText(text = '') {
  const source = cleanText(text);
  const period = extractPeriodFromText(source);
  const metrics = parseKpisFromText(source);
  const hourlyRows = parseHourlyFromText(source);
  return { period, metrics, hourlyRows };
}


function extractPeriodFromInputs(inputs = []) {
  const values = [];
  for (const input of inputs || []) {
    const name = `${input.name || ''} ${input.id || ''} ${input.type || ''}`.toLowerCase();
    const value = String(input.value || '').trim();
    if (!value) continue;
    if (/date|from|to|start|end|range|day|report/.test(name) || parseDisplayDate(value)) {
      values.push(value);
    }
  }
  const dates = [];
  for (const value of values) {
    const direct = parseDisplayDate(value);
    if (direct) dates.push(direct);
    for (const d of extractDatesFromText(value)) dates.push(d);
  }
  const uniq = [...new Set(dates)].filter(Boolean);
  if (uniq.length === 1) return { start: uniq[0], end: uniq[0], label: values.join(' | ') };
  if (uniq.length >= 2) return { start: uniq[0], end: uniq[uniq.length - 1], label: values.join(' | ') };
  return { start: '', end: '', label: '' };
}

function parseGenericTables(tables = []) {
  return tables.flatMap(rows => rows.slice(0, 80).map(row => row.map(cleanText))).filter(r => r.length > 1);
}


function parseHourlyFromScripts(html = '', scripts = []) {
  const source = [String(html || ''), ...(scripts || [])].join('\n');
  const out = [];
  const hours = parseJsConst(source, 'RAW_HOURS');
  const revenueTotals = parseJsConst(source, 'HOUR_REVENUE_TOTALS');
  const txTotals = parseJsConst(source, 'HOUR_TX_TOTALS');
  const seriesRevenue = parseJsConst(source, 'SERIES_REVENUE');
  const seriesTx = parseJsConst(source, 'SERIES_TX');

  const hourList = Array.isArray(hours) && hours.length ? hours.map(h => Number(h)).filter(Number.isFinite) : Array.from({ length: 18 }, (_v, i) => i + 6);

  // Preferred source on reporting.site busy_hours.php: hourly totals objects.
  if (revenueTotals && typeof revenueTotals === 'object' && !Array.isArray(revenueTotals)) {
    for (const h of hourList) {
      const sales = Number(revenueTotals[String(h)] ?? revenueTotals[h] ?? 0);
      const orders = txTotals && typeof txTotals === 'object' ? Number(txTotals[String(h)] ?? txTotals[h] ?? 0) : 0;
      const hour = `${String(h).padStart(2, '0')}:00`;
      if (validTradingHour(hour) && (sales > 0 || orders > 0)) out.push({ hour, sales: round2(sales), orders: Number.isFinite(orders) ? Math.round(orders) : 0 });
    }
  }

  // Fallback: Apex series arrays, often [{name:'2026-06-22', data:[...]}].
  if (!out.length && Array.isArray(seriesRevenue) && seriesRevenue.length) {
    const data = Array.isArray(seriesRevenue[0]?.data) ? seriesRevenue[0].data : [];
    const txData = Array.isArray(seriesTx?.[0]?.data) ? seriesTx[0].data : [];
    data.forEach((value, idx) => {
      const h = hourList[idx];
      const hour = `${String(h).padStart(2, '0')}:00`;
      const sales = Number(value || 0);
      const orders = Number(txData[idx] || 0);
      if (validTradingHour(hour) && (sales > 0 || orders > 0)) out.push({ hour, sales: round2(sales), orders: Number.isFinite(orders) ? Math.round(orders) : 0 });
    });
  }

  // Fallback: CROSS_BODY table rows if present.
  const cross = parseJsConst(source, 'CROSS_BODY');
  if (!out.length && Array.isArray(cross) && cross.length) {
    for (const row of cross) {
      const cells = Array.isArray(row?.cells) ? row.cells : Array.isArray(row) ? row.slice(1) : [];
      cells.forEach((value, idx) => {
        const h = hourList[idx];
        const hour = `${String(h).padStart(2, '0')}:00`;
        const sales = moneyToNumber(String(value)) ?? Number(value || 0);
        if (validTradingHour(hour) && sales > 0) out.push({ hour, sales: round2(sales), orders: 0 });
      });
    }
  }
  return out;
}

function parseJsConst(source = '', name = '') {
  const re = new RegExp(`(?:const|let|var)\\s+${name}\\s*=\\s*([\\s\\S]*?);`, 'm');
  const m = String(source || '').match(re);
  if (!m) return null;
  return parseJsLiteral(m[1]);
}

function parseJsLiteral(raw = '') {
  let s = String(raw || '').trim();
  if (!s) return null;
  for (const candidate of [s, relaxJsLiteral(s)]) {
    try { return JSON.parse(candidate); } catch (_err) {}
  }
  return null;
}

function relaxJsLiteral(raw = '') {
  return String(raw || '')
    .replace(/'/g, '"')
    .replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g, '$1"$2":')
    .replace(/,\s*([}\]])/g, '$1');
}

function parseHourlyFromTables(tables = []) {
  const out = [];
  for (const rows of tables) {
    const headers = (rows[0] || []).map(h => h.toLowerCase());
    const hourIdx = headers.findIndex(h => /hour|time|heure/.test(h));
    const salesIdx = headers.findIndex(h => /sales|vente|revenue|amount|total/.test(h));
    const ordersIdx = headers.findIndex(h => /order|commande|ticket|transaction/.test(h));
    // Do not guess from arbitrary tables. The old parser used row[0] + first money
    // found and could turn dates/page chrome into fake midnight/early-morning sales.
    if (hourIdx < 0 || salesIdx < 0) continue;
    for (const row of rows.slice(1)) {
      const hour = hourFromTimestamp(row[hourIdx]);
      if (!validTradingHour(hour)) continue;
      const sales = moneyToNumber(row[salesIdx]);
      if (sales == null || sales < 0) continue;
      const orders = ordersIdx >= 0 ? numberOrNull(row[ordersIdx] || '') : 0;
      out.push({ hour, sales, orders: orders || 0 });
    }
  }
  return out;
}

function parseHourlyFromText(text = '') {
  const out = [];
  const source = String(text || '').replace(/\r/g, '\n');
  const lines = source.split(/\n+/).map(cleanText).filter(Boolean);
  const lineRe = /\b(\d{1,2})(?::|h\s?)(\d{2})\b.{0,120}?((?:A\$|AU\$|\$)\s*-?\d[\d,]*(?:\.\d{1,2})?|-?\d[\d,]*(?:\.\d{1,2})?\s*(?:A\$|AU\$|\$))/i;
  for (const line of lines) {
    if (!/(A\$|AU\$|\$)/i.test(line)) continue;
    const m = line.match(lineRe);
    if (!m) continue;
    const hour = `${String(m[1]).padStart(2, '0')}:00`;
    if (!validTradingHour(hour)) continue;
    const sales = moneyToNumber(m[3]);
    if (sales != null && sales >= 0) out.push({ hour, sales, orders: 0 });
  }
  return out;
}

function sanitizeHourlyRows(rows = [], dailySales = null) {
  let clean = mergeHourly(rows).filter(r => validTradingHour(r.hour) && Number.isFinite(Number(r.sales)) && Number(r.sales) >= 0);
  // Reject placeholder rows generated by page summary text such as
  // "Peak hour: 06:00 ($0.00)" or empty busy-hours charts.
  if (clean.length && clean.every(r => (Number(r.sales) || 0) === 0 && (Number(r.orders) || 0) === 0)) return [];
  const total = Number(dailySales);
  if (Number.isFinite(total) && total > 0 && clean.length) {
    clean = clean.filter(r => Number(r.sales) <= total * 0.85);
    const sum = clean.reduce((a, b) => a + (Number(b.sales) || 0), 0);
    if (sum > total * 1.35) return [];
  }
  return clean;
}

function validTradingHour(hour) {
  const h = Number(String(hour || '').slice(0, 2));
  return Number.isInteger(h) && h >= 6 && h <= 23;
}

function parseProductsFromTables(tables = []) {
  const out = [];
  for (const rows of tables) {
    if (!rows.length) continue;
    const headers = rows[0].map(h => h.toLowerCase());
    const productIdx = headers.findIndex(h => /product|item|article|produit|name/.test(h));
    const qtyIdx = headers.findIndex(h => /qty|quantity|unit|quant|vendu|sold/.test(h));
    const salesIdx = headers.findIndex(h => /sales|vente|amount|total|revenue|ca\b|turnover/.test(h));

    // Do not guess products from tables without a product/item/name header.
    // Reporting.site pages contain many layout/chart tables where row[0] can be
    // the selected date (e.g. "2026-06-22 Monday"). In 0.2.19 those rows became
    // fake top products and polluted the live sync.
    if (productIdx < 0) continue;

    for (const row of rows.slice(1, 160)) {
      const product = cleanText(row[productIdx]);
      if (shouldRejectProductLabel(product)) continue;
      const qty = qtyIdx >= 0 ? numberOrNull(row[qtyIdx] || '') : null;
      const salesCell = salesIdx >= 0 ? row[salesIdx] : row.find(c => moneyToNumber(c) != null);
      const sales = moneyToNumber(salesCell || '');
      if (qty == null && sales == null) continue;
      out.push({ product, qty: qty || 0, sales: sales || 0, category: inferCategory(product) });
    }
  }
  return out.sort((a, b) => (b.sales || b.qty || 0) - (a.sales || a.qty || 0)).slice(0, 50);
}

function shouldRejectProductLabel(product = '') {
  const p = cleanText(product);
  if (!p || p.length > 80) return true;
  if (/^totals?\b|^totals?:|grand total|subtotal|date range|choose date|selected period/i.test(p)) return true;
  if (parseDisplayDate(p)) return true;
  if (/\b20\d{2}[-/]\d{1,2}[-/]\d{1,2}\b/.test(p)) return true;
  if (/\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)\b/i.test(p) && /\b20\d{2}\b/.test(p)) return true;
  return false;
}

export function inferCategory(product = '') {
  const p = String(product).toLowerCase();
  if (/pie|beef|cheese|steak|sausage|mushroom|naan/.test(p)) return 'Pies';
  if (/coffee|latte|cappuccino|mocha|shake|drink|coke|water/.test(p)) return 'Beverage';
  if (/box|pack|6|12/.test(p)) return 'Boxes';
  if (/special|nutella|biscoff|oreo|brulee|cream|boston|raspberry|banana/.test(p)) return 'Filled / Specials';
  if (/glaze|homer|choc|cinnamon|fairy|caramel|passion|pineapple|m&m/.test(p)) return 'Rings';
  return 'Other';
}

function findMoneyNearLabels(source, labels) {
  const lower = source.toLowerCase();
  for (const label of labels) {
    const idx = lower.indexOf(label.toLowerCase());
    if (idx < 0) continue;
    const window = source.slice(Math.max(0, idx - 80), idx + 180);
    const money = window.match(/(?:A\$|AU\$|\$)\s*\d[\d,]*(?:\.\d{1,2})?|\d[\d,]*\.\d{2}\s*(?:A\$|AU\$|\$)/i);
    if (money) return moneyToNumber(money[0]);
  }
  return null;
}

function findIntegerNearLabels(source, labels) {
  const lower = source.toLowerCase();
  for (const label of labels) {
    const idx = lower.indexOf(label.toLowerCase());
    if (idx < 0) continue;
    const after = source.slice(idx + label.length, idx + label.length + 120);
    const around = source.slice(Math.max(0, idx - 80), idx + 160);
    const afterCandidates = integerCandidates(after);
    if (afterCandidates.length) return afterCandidates[0];
    const candidates = integerCandidates(around);
    if (candidates.length) return candidates[0];
  }
  return null;
}

function integerCandidates(text = '') {
  let window = String(text || '');
  // Remove dates and money before extracting counts. Otherwise the selected date
  // (2026-06-22) or a currency amount ($4,164.00) can be misread as orders.
  window = window
    .replace(/20\d{2}[-/]\d{1,2}[-/]\d{1,2}/g, ' ')
    .replace(/\d{1,2}[-/]\d{1,2}[-/]20\d{2}/g, ' ')
    .replace(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+\d{1,2},?\s+20\d{2}\b/gi, ' ')
    .replace(/(?:A\$|AU\$|\$)\s*-?\d[\d,]*(?:\.\d{1,2})?/gi, ' ')
    .replace(/-?\d[\d,]*(?:\.\d{1,2})?\s*(?:A\$|AU\$|\$)/gi, ' ');
  return [...window.matchAll(/(?<![-\d])\d{1,6}(?![-\d])/g)]
    .map(m => Number(m[0]))
    .filter(n => Number.isFinite(n))
    .filter(n => !(n >= 1900 && n <= 2099));
}

function hasAny(lower, labels) { return labels.some(l => lower.includes(l.toLowerCase())); }

function mergeHourly(rows = []) {
  const map = new Map();
  for (const row of rows) {
    const hour = row.hour || hourFromTimestamp(row.time || '');
    if (!hour) continue;
    const existing = map.get(hour) || { hour, sales: 0, orders: 0 };
    existing.sales = round2((existing.sales || 0) + (Number(row.sales) || 0));
    existing.orders = (existing.orders || 0) + (Number(row.orders) || 0);
    map.set(hour, existing);
  }
  return [...map.values()].sort((a, b) => a.hour.localeCompare(b.hour));
}

export function mergeProductRows(rows = []) {
  const map = new Map();
  for (const row of rows) {
    const key = cleanText(row.product || 'Unknown');
    const existing = map.get(key) || { product: key, qty: 0, sales: 0, category: row.category || inferCategory(key) };
    existing.qty += Number(row.qty) || 0;
    existing.sales = round2((existing.sales || 0) + (Number(row.sales) || 0));
    map.set(key, existing);
  }
  return [...map.values()].sort((a, b) => (b.sales || b.qty || 0) - (a.sales || a.qty || 0));
}

export function combineHourlyRows(rows = []) {
  const map = new Map();
  for (const row of rows) {
    const hour = row.hour || hourFromTimestamp(row.time || '');
    if (!validTradingHour(hour)) continue;
    const sales = Number(row.sales);
    if (!Number.isFinite(sales) || sales < 0) continue;
    const existing = map.get(hour) || { hour, sales: 0, orders: 0 };
    existing.sales = round2((existing.sales || 0) + sales);
    existing.orders += Number(row.orders) || 0;
    map.set(hour, existing);
  }
  return [...map.values()].sort((a, b) => a.hour.localeCompare(b.hour));
}

export function periodFromRow(row = {}) {
  return parseDisplayDate(row.date || row.period || row.timestamp || '');
}
