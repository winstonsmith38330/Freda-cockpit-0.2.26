import { parseTicketRowsFromText, aggregateTicketRows } from './reportingTicketSync.js';

export function parsePageTextCapture(source = '', text = '', meta = {}) {
  const sourceText = String(source || '').toLowerCase();
  const body = String(text || '');
  const metrics = extractMetricCards(body);
  const hourlyRows = extractHourlyRows(body);
  const ticketRows = parseTicketRowsFromText(body, { store: meta.store || '', date: meta.period || todayIso() });
  const parsed = {
    ok: Boolean(Object.keys(metrics).length || hourlyRows.length || ticketRows.length),
    source,
    metrics,
    hourlyRows,
    ticketRows,
    warnings: []
  };
  if (ticketRows.length) {
    parsed.ticketSummary = aggregateTicketRows(meta.store || 'Captured Store', ticketRows, meta.period || todayIso());
  }
  if (!parsed.ok) parsed.warnings.push('No KPI cards, hourly rows or ticket rows detected. Try Select All on the page after the dashboard has fully loaded.');
  if (sourceText.includes('uber')) metrics.sourceKind = 'uber';
  if (sourceText.includes('square')) metrics.sourceKind = 'square';
  return parsed;
}

export function extractMetricCards(text = '') {
  const t = String(text || '').replace(/\u00a0/g, ' ');
  const out = {};
  const moneyValues = [...t.matchAll(/(?:A\$|\$\s*AU|\$|AU\$)\s*([0-9][0-9\s,.]*)/gi)].map(m => parseMoney(m[1])).filter(n => n != null);
  const plainMoney = [...t.matchAll(/([0-9][0-9\s,.]*)\s*(?:\$\s*AU|AU\$|\$)/gi)].map(m => parseMoney(m[1])).filter(n => n != null);
  const allMoney = [...moneyValues, ...plainMoney].filter(n => n > 0);
  const order = matchNumberAfter(t, /(commandes|orders|transactions|tickets|receipts)[^0-9]{0,80}([0-9][0-9,.]*)/i);
  const aov = matchMoneyNear(t, /(average|aov|moyen|moyenne|valeur moyenne|montant moyen)/i);
  if (allMoney.length) {
    out.sales = allMoney[0];
    out.totalSales = allMoney[0];
    out.netSales = allMoney[0];
  }
  if (order != null) {
    out.orders = order;
    out.transactions = order;
  }
  if (aov != null) {
    out.aov = aov;
    out.averageSpend = aov;
  }
  const dateMatch = t.match(/(20\d{2}-\d{2}-\d{2}|\d{1,2}\s+(?:juin|june|jan|feb|mar|apr|may|jul|aug|sep|oct|nov|dec)[a-z]*\s+20\d{2}|MTD|WTD|this week|cette semaine)/i);
  if (dateMatch) out.period = dateMatch[0];
  return out;
}

export function extractHourlyRows(text = '') {
  const rows = [];
  const re = /(?:^|\n|\s)(\d{1,2})(?::00|\s?(?:am|pm))\s+\$?\s*([0-9][0-9,.]*)/gi;
  for (const m of String(text || '').matchAll(re)) {
    let hour = Number(m[1]);
    if (/pm/i.test(m[0]) && hour < 12) hour += 12;
    if (/am/i.test(m[0]) && hour === 12) hour = 0;
    rows.push({ hour: `${String(hour).padStart(2, '0')}:00`, sales: parseMoney(m[2]) || 0 });
  }
  return dedupeHours(rows);
}

function dedupeHours(rows) {
  const map = new Map();
  for (const row of rows) map.set(row.hour, { hour: row.hour, sales: (map.get(row.hour)?.sales || 0) + row.sales });
  return [...map.values()].sort((a, b) => a.hour.localeCompare(b.hour));
}

function matchNumberAfter(text, re) {
  const m = text.match(re);
  return m ? parseNumber(m[2]) : null;
}

function matchMoneyNear(text, re) {
  const idx = text.search(re);
  if (idx < 0) return null;
  const chunk = text.slice(idx, idx + 200);
  const m = chunk.match(/(?:A\$|\$\s*AU|\$|AU\$)\s*([0-9][0-9\s,.]*)|([0-9][0-9\s,.]*)\s*(?:\$\s*AU|AU\$|\$)/i);
  return m ? parseMoney(m[1] || m[2]) : null;
}

function parseNumber(s) {
  const n = Number(String(s || '').replace(/[^0-9.-]/g, ''));
  return Number.isFinite(n) ? n : null;
}

function parseMoney(s) {
  const cleaned = String(s || '').replace(/\s/g, '').replace(/[^0-9,.-]/g, '').replace(/,(?=\d{2}$)/, '.').replace(/,/g, '');
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function todayIso() { return new Date().toISOString().slice(0, 10); }
