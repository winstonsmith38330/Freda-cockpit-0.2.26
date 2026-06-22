import fs from 'fs';
import AdmZip from 'adm-zip';

const STORE_PATTERNS = [
  ['Beverly Hills', /beverly|\bbh\b/i],
  ['Penrith', /penrith|\bpen\b|\bpn\b/i],
  ['Taren Point', /taren|\btp\b/i],
  ["Frieda's Pies", /frieda|frida|pies/i]
];

export function parseWhatsappUpload(file) {
  try {
    const name = String(file.originalname || '').toLowerCase();
    let text = '';
    if (name.endsWith('.zip')) {
      const zip = new AdmZip(file.path);
      for (const entry of zip.getEntries()) {
        if (!entry.isDirectory && /\.txt$/i.test(entry.entryName)) {
          text += '\n' + decodeBuffer(entry.getData());
        }
      }
    } else {
      text = decodeBuffer(fs.readFileSync(file.path));
    }
    if (!text.trim()) return { ok: false, error: 'No readable WhatsApp text found. Export the chat as .txt or upload a .zip containing the .txt export.' };
    const messages = normaliseWhatsAppLines(text);
    const actions = extractActions(messages);
    const stockRequests = extractStockRequests(text);
    const soldOutSignals = actions.filter(a => a.type === 'Sell-out').map(a => ({ store: a.store, time: a.time, text: a.body }));
    const leftoverSignals = actions.filter(a => a.type === 'Leftover').map(a => ({ store: a.store, time: a.time, text: a.body }));
    const photoCount = (text.match(/\b(image omitted|photo omitted|video omitted|\.jpg|\.png|<attached:|attached media omitted|image omise|image absente)\b/gi) || []).length;
    return {
      ok: true,
      source: file.originalname,
      messageCount: messages.length,
      photoCount,
      actions,
      stockRequests,
      soldOutSignals,
      leftoverSignals,
      summary: summarize(actions, stockRequests, photoCount),
      parsedAt: new Date().toISOString()
    };
  } catch (err) {
    return { ok: false, error: String(err?.message || err) };
  }
}

function decodeBuffer(buffer) {
  if (buffer[0] === 0xff && buffer[1] === 0xfe) return new TextDecoder('utf-16le').decode(buffer);
  if (buffer[0] === 0xfe && buffer[1] === 0xff) return new TextDecoder('utf-16be').decode(buffer);
  if (buffer.slice(0, 200).includes(0)) return new TextDecoder('utf-16le').decode(buffer);
  return new TextDecoder('utf-8').decode(buffer);
}

function normaliseWhatsAppLines(text) {
  const out = [];
  const lines = text.split(/\r?\n/).map(x => x.trim()).filter(Boolean);
  for (const line of lines) {
    const parsed = parseWhatsAppLine(line);
    if (parsed) out.push(parsed);
    else if (out.length) out[out.length - 1].body += ' ' + line;
    else out.push({ date: '', time: '', sender: '', body: line, raw: line });
  }
  return out;
}
function parseWhatsAppLine(line) {
  // Supports common exports: 19/06/2026, 7:42 pm - Name: message OR [19/06/2026, 19:42:10] Name: message
  let m = line.match(/^\[?(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}),?\s+(\d{1,2}:\d{2}(?::\d{2})?\s?(?:am|pm|AM|PM)?)\]?\s+-?\s*([^:]{1,80})?:\s*(.*)$/);
  if (!m) m = line.match(/^(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}),?\s+(\d{1,2}:\d{2}(?::\d{2})?\s?(?:am|pm|AM|PM)?)\s+-\s*(.*)$/);
  if (!m) return null;
  if (m.length === 5) return { date: m[1], time: to24h(m[2]), sender: m[3] || '', body: m[4] || '', raw: line };
  return { date: m[1], time: to24h(m[2]), sender: '', body: m[3] || '', raw: line };
}
function to24h(value) {
  const s = String(value || '').trim();
  const m = s.match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*(am|pm)?$/i);
  if (!m) return s;
  let h = Number(m[1]);
  const min = m[2];
  const ap = (m[3] || '').toLowerCase();
  if (ap === 'pm' && h < 12) h += 12;
  if (ap === 'am' && h === 12) h = 0;
  return `${String(h).padStart(2, '0')}:${min}`;
}

function extractActions(messages) {
  const actions = [];
  for (const msg of messages) {
    const line = msg.body || msg.raw || '';
    const lower = line.toLowerCase();
    const store = inferStore(`${msg.sender} ${line}`);
    if (/sell.?out|sold out|soldout|empty|finished|no more|run out|ran out|plus rien|rupture/.test(lower)) {
      actions.push(makeAction('Sell-out', msg, store, 'High', 'Sold-out / empty stock signal', 'Check sell-out timing. If more than 3 hours before close, increase next same-day production unless it was planned/FOMO.'));
    } else if (/left.?over|leftover|waste|remain|remaining|reste|restant/.test(lower)) {
      actions.push(makeAction('Leftover', msg, store, 'Medium', 'Leftover / waste signal', 'Record leftover product and reduce or re-balance next week.'));
    } else if (/stock|need|order|milk|container|coffee shot|cups|bags|boxes|tray|gloves|napkins|balls|rings|besoin|commander/.test(lower)) {
      actions.push(makeAction('Stock', msg, store, 'Medium', 'Stock request / usage signal', 'Add to weekly stock-use estimate and two-trip delivery plan.'));
    } else if (/clean|display|cabinet|photo|training|staff|dirty|standard|présentation/.test(lower)) {
      actions.push(makeAction('Ops', msg, store, 'Medium', 'Ops / training signal', 'Manager follow-up or training evidence required.'));
    }
  }
  return actions.slice(0, 160);
}

function extractStockRequests(text) {
  const words = ['milk', 'coffee', 'cups', 'bags', 'boxes', 'gloves', 'napkins', 'trays', 'balls', 'rings', 'containers', 'labels'];
  const counts = {};
  for (const word of words) {
    const re = new RegExp(`\\b${word}\\b`, 'gi');
    counts[word] = (text.match(re) || []).length;
  }
  return Object.entries(counts).filter(([, count]) => count).map(([item, count]) => ({ item, count }));
}

function inferStore(text = '') {
  const hit = STORE_PATTERNS.find(([, re]) => re.test(text));
  return hit?.[0] || 'Unknown';
}

function makeAction(type, msg, store, priority, title, recommendation) {
  return {
    id: `wa_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    type,
    store,
    time: msg.time || '',
    sender: msg.sender || '',
    priority,
    title: `${store !== 'Unknown' ? store + ': ' : ''}${title}`,
    body: `${msg.time ? msg.time + ' · ' : ''}${msg.sender ? msg.sender + ': ' : ''}${msg.body || msg.raw || ''}`,
    action: recommendation,
    recommendation,
    owner: 'Manager',
    status: 'Open'
  };
}

function summarize(actions, stockRequests, photoCount) {
  const sellouts = actions.filter(a => a.type === 'Sell-out').length;
  const leftovers = actions.filter(a => a.type === 'Leftover').length;
  return `${actions.length} operational messages detected: ${sellouts} sell-out signals, ${leftovers} leftover signals, ${stockRequests.length} stock terms, ${photoCount} possible photos/attachments.`;
}
