const EN_MONTHS = {
  jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3, apr: 4, april: 4,
  may: 5, jun: 6, june: 6, jul: 7, july: 7, aug: 8, august: 8, sep: 9, sept: 9, september: 9,
  oct: 10, october: 10, nov: 11, november: 11, dec: 12, december: 12
};
const FR_MONTHS = {
  janv: 1, janvier: 1, fevr: 2, fevrier: 2, 'févr': 2, 'février': 2, mars: 3, avr: 4, avril: 4,
  mai: 5, juin: 6, juil: 7, juillet: 7, aout: 8, 'août': 8, sept: 9, septembre: 9,
  oct: 10, octobre: 10, nov: 11, novembre: 11, dec: 12, 'déc': 12, decembre: 12, 'décembre': 12
};
const MONTHS = { ...EN_MONTHS, ...FR_MONTHS };

export function currentDateInTimeZone(timeZone = 'Australia/Sydney') {
  try {
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
    const get = type => parts.find(p => p.type === type)?.value;
    return `${get('year')}-${get('month')}-${get('day')}`;
  } catch (_err) {
    return new Date().toISOString().slice(0, 10);
  }
}

export function normalizeReportingDate(value, timeZone = 'Australia/Sydney') {
  const raw = String(value || '').trim();
  if (!raw || raw === 'today') return currentDateInTimeZone(timeZone);
  const parsed = parseDisplayDate(raw);
  return parsed || currentDateInTimeZone(timeZone);
}

export function pad2(n) { return String(n).padStart(2, '0'); }

export function isoDate(y, m, d) {
  const yy = Number(y), mm = Number(m), dd = Number(d);
  if (!yy || !mm || !dd || mm < 1 || mm > 12 || dd < 1 || dd > 31) return '';
  return `${yy}-${pad2(mm)}-${pad2(dd)}`;
}

export function parseDisplayDate(value = '') {
  const text = String(value || '').trim();
  if (!text) return '';

  const iso = text.match(/\b(20\d{2})[-/.](\d{1,2})[-/.](\d{1,2})\b/);
  if (iso) return isoDate(iso[1], iso[2], iso[3]);

  const au = text.match(/\b(\d{1,2})[/-](\d{1,2})[/-](20\d{2})\b/);
  if (au) return isoDate(au[3], au[2], au[1]);

  const monthName1 = text.toLowerCase().normalize('NFC').match(/\b(\d{1,2})(?:er|st|nd|rd|th)?\s+([a-zà-ÿ.]+)\s*,?\s*(20\d{2})\b/i);
  if (monthName1) {
    const month = monthNumber(monthName1[2]);
    if (month) return isoDate(monthName1[3], month, monthName1[1]);
  }

  const monthName2 = text.toLowerCase().normalize('NFC').match(/\b([a-zà-ÿ.]+)\s+(\d{1,2})(?:st|nd|rd|th)?\s*,?\s*(20\d{2})\b/i);
  if (monthName2) {
    const month = monthNumber(monthName2[1]);
    if (month) return isoDate(monthName2[3], month, monthName2[2]);
  }

  return '';
}

export function extractDatesFromText(text = '') {
  const source = String(text || '').replace(/\s+/g, ' ');
  const results = new Set();
  const patterns = [
    /\b20\d{2}[-/.]\d{1,2}[-/.]\d{1,2}\b/g,
    /\b\d{1,2}[/-]\d{1,2}[/-]20\d{2}\b/g,
    /\b\d{1,2}(?:er|st|nd|rd|th)?\s+[A-Za-zÀ-ÿ.]+\s*,?\s*20\d{2}\b/g,
    /\b[A-Za-zÀ-ÿ.]+\s+\d{1,2}(?:st|nd|rd|th)?\s*,?\s*20\d{2}\b/g
  ];
  for (const pattern of patterns) {
    let m;
    while ((m = pattern.exec(source))) {
      const iso = parseDisplayDate(m[0]);
      if (iso) results.add(iso);
    }
  }
  return [...results];
}

export function extractPeriodFromText(text = '') {
  const source = String(text || '').replace(/\s+/g, ' ');
  const rangePatterns = [
    /(\d{1,2}\s+[A-Za-zÀ-ÿ.]+\s+20\d{2})\s*[–-]\s*(\d{1,2}\s+[A-Za-zÀ-ÿ.]+\s+20\d{2})/i,
    /(20\d{2}-\d{1,2}-\d{1,2})\s*(?:to|au|a|à|–|-)\s*(20\d{2}-\d{1,2}-\d{1,2})/i,
    /(\d{1,2}[/-]\d{1,2}[/-]20\d{2})\s*(?:to|au|a|à|–|-)\s*(\d{1,2}[/-]\d{1,2}[/-]20\d{2})/i
  ];
  for (const re of rangePatterns) {
    const m = source.match(re);
    if (m) {
      const start = parseDisplayDate(m[1]);
      const end = parseDisplayDate(m[2]);
      if (start || end) return { start, end, label: m[0] };
    }
  }
  const dates = extractDatesFromText(source);
  if (dates.length === 1) return { start: dates[0], end: dates[0], label: dates[0] };
  return { start: '', end: '', label: '' };
}

export function periodMatchesSelectedDate(period, selectedDate) {
  if (!period || !selectedDate) return false;
  const start = period.start || parseDisplayDate(period.period || period.date || '');
  const end = period.end || start;
  return Boolean(start && end && start === selectedDate && end === selectedDate);
}

export function displayDateVariants(iso) {
  const [y, m, d] = String(iso || '').split('-');
  if (!y || !m || !d) return [];
  const monthLong = new Date(`${iso}T00:00:00Z`).toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
  return [...new Set([
    `${y}-${m}-${d}`,
    `${Number(d)}/${Number(m)}/${y}`,
    `${d}/${m}/${y}`,
    `${Number(d)}-${Number(m)}-${y}`,
    `${d}-${m}-${y}`,
    `${monthLong} ${Number(d)}, ${y}`,
    `${Number(d)} ${monthLong} ${y}`
  ])];
}

export function dateParamVariants(iso) {
  const variants = displayDateVariants(iso);
  const pairs = [];
  const dateKeys = ['date', 'selected_date', 'report_date', 'reporting_date', 'day', 'from_date', 'to_date'];
  for (const value of variants) for (const key of dateKeys) pairs.push({ [key]: value });
  for (const value of variants) {
    pairs.push({ start: value, end: value });
    pairs.push({ from: value, to: value });
    pairs.push({ start_date: value, end_date: value });
    pairs.push({ date_from: value, date_to: value });
    pairs.push({ daterange: `${value} - ${value}` });
  }
  return pairs;
}

export function hourFromTimestamp(value = '') {
  const m = String(value || '').match(/\b(\d{1,2})[:h](\d{2})/i);
  if (!m) return '';
  return `${pad2(m[1])}:00`;
}

function monthNumber(raw = '') {
  const key = String(raw).toLowerCase().replace(/[.]/g, '').normalize('NFC');
  return MONTHS[key] || MONTHS[key.slice(0, 3)] || 0;
}
