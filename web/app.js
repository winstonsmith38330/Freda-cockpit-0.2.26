const state = {
  activeTab: localStorage.getItem('freda.tab') || 'today',
  role: 'Freda / Owner',
  live: null,
  config: null,
  reportingDate: localStorage.getItem('freda.reportingDate') || '',
  deferredPrompt: null
};

const tabs = [
  ['today', 'Today'],
  ['sales', 'Live Sales / Ops'],
  ['imports', 'File Imports'],
  ['sync', 'Live Fallback'],
  ['hourly', 'Hourly Analysis'],
  ['production', 'Production'],
  ['hiring', 'Hiring'],
  ['training', 'Training'],
  ['audits', 'Store Audits'],
  ['whatsapp', 'WhatsApp'],
  ['ask', 'Ask AI']
];

const $ = sel => document.querySelector(sel);
const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
const money = n => n == null || Number.isNaN(Number(n)) ? '—' : '$' + Number(n).toLocaleString('en-AU', { maximumFractionDigits: 2 });
const num = n => n == null || Number.isNaN(Number(n)) ? '—' : Number(n).toLocaleString('en-AU');
const selectedDate = () => state.reportingDate || state.live?.reportingDate || new Date().toISOString().slice(0, 10);
const sourceSales = m => m?.sales ?? m?.totalSales ?? m?.netSales ?? null;

window.addEventListener('beforeinstallprompt', ev => { ev.preventDefault(); state.deferredPrompt = ev; $('#installBtn').hidden = false; });
$('#installBtn').addEventListener('click', async () => { if (state.deferredPrompt) await state.deferredPrompt.prompt(); state.deferredPrompt = null; $('#installBtn').hidden = true; });
$('#roleSelect').addEventListener('change', ev => { state.role = ev.target.value; render(); });

init();

async function init() {
  renderTabs();
  await Promise.all([loadLive(), loadConfig()]);
  render();
}

async function loadConfig() {
  try { state.config = await (await fetch('/api/config/status', { cache: 'no-store' })).json(); } catch { state.config = null; }
}
async function loadLive() {
  try {
    const q = state.reportingDate ? `?reportingDate=${encodeURIComponent(state.reportingDate)}` : '';
    const data = await (await fetch('/api/live/summary' + q, { cache: 'no-store' })).json();
    state.live = data.live;
    if (!state.reportingDate) state.reportingDate = state.live.reportingDate;
    $('#syncStatus').textContent = 'Live server connected';
  } catch (err) {
    $('#syncStatus').textContent = 'Offline / seed fallback';
    state.live = { stores: [], reportingDate: selectedDate(), analysis: {}, production: {}, briefing: { priorities: ['Server not connected.'] } };
  }
}

function renderTabs() {
  $('#tabs').innerHTML = tabs.map(([id, label]) => `<button class="tab ${state.activeTab === id ? 'active' : ''}" data-tab="${id}">${label}</button>`).join('');
  $('#tabs').onclick = ev => {
    const btn = ev.target.closest('[data-tab]');
    if (!btn) return;
    state.activeTab = btn.dataset.tab;
    localStorage.setItem('freda.tab', state.activeTab);
    renderTabs(); render();
  };
}

function render() {
  if (!state.live) return;
  const map = { today: renderToday, sales: renderSales, imports: renderImports, sync: renderSync, hourly: renderHourly, production: renderProduction, hiring: renderHiring, training: renderTraining, audits: renderAudits, whatsapp: renderWhatsapp, ask: renderAsk };
  $('#screen').innerHTML = (map[state.activeTab] || renderToday)();
  bindScreen();
}

function dateControls() {
  return `<div class="date-controls"><label>Reporting date</label><input id="reportingDateInput" type="date" value="${esc(selectedDate())}"><button class="secondary" data-action="set-date">Use date</button><span class="small">Daily cards accept only exact selected-date data.</span></div>`;
}

function renderToday() {
  const b = state.live.briefing || {};
  const actions = state.live.analysis?.openActions || [];
  return `<section class="card">
    <div class="pills"><span class="pill">Beta 0.2.26</span><span class="pill">${esc(state.role)}</span><span class="pill">POS sync-first data layer</span></div>
    <h2>${esc(b.title || 'Today')}</h2>${dateControls()}
    <div class="notice"><b>${esc(b.statusLine || 'Sync today’s data first.')}</b></div>
    <div class="grid grid-2">${(b.priorities || []).map(p => `<div class="kpi"><div class="label">Priority</div><div>${esc(p)}</div></div>`).join('')}</div>
  </section>
  ${weeklySummaryCard()}
  ${storeStatusCards()}
  <section class="card"><h2>Open actions</h2>${actionList(actions)}</section>`;
}

function storeStatusCards() {
  const rows = state.live.analysis?.storeStatus || [];
  return `<section class="card"><h2>Store status</h2><div class="grid grid-2">${rows.map(s => {
    const isPie = s.isPie || String(s.store || '').includes('Frieda');
    const grid = isPie
      ? `<div class="grid grid-2"><div class="kpi"><div class="label">Square / Frieda</div><div class="value">${s.externalSales == null ? 'Not synced' : money(s.externalSales)}</div></div><div class="kpi"><div class="label">Daily total</div><div class="value">${money(s.total)}</div></div></div>`
      : `<div class="grid grid-3"><div class="kpi"><div class="label">POS</div><div class="value">${money(s.posSales)}</div></div><div class="kpi"><div class="label">${esc(s.externalLabel || 'Uber')}</div><div class="value">${s.externalSales == null ? 'Not synced' : money(s.externalSales)}</div></div><div class="kpi"><div class="label">Total</div><div class="value">${money(s.total)}</div></div></div>`;
    return `<div class="store-card"><div class="store-head"><h3>${esc(s.store)}</h3><span class="status ${esc(s.status)}">${esc(s.status)}</span></div>${grid}<p class="small">${esc((s.warnings || []).join(' ') || 'No warnings.')}</p></div>`;
  }).join('')}</div></section>`;
}

function renderSales() {
  return `<section class="card"><h2>Live Sales / Ops</h2>${dateControls()}<p>POS daily/hourly/product data is sync-first from reporting.site. Uploaded POS files are backup only. Uber, Frieda’s/Square and production still use uploaded files/API data.</p><div class="actions"><button class="primary" data-action="sync-all">Sync all</button><button class="secondary" data-action="sync-recent">Sync hourly benchmarks</button><button class="secondary" data-action="sync-pos">Sync POS</button><button class="secondary" data-action="sync-uber">Sync Uber</button><button class="secondary" data-action="sync-square">Sync Square</button><button class="ghost" data-action="refresh">Refresh</button></div></section>${weeklySummaryCard()}${storeSalesCards()}${staleWarnings()}`;
}

function weeklySummaryCard() {
  const w = state.live.weeklySummary || {};
  if (!w.weekStart) return `<section class="card"><h2>Week-to-date</h2><p>Reload file imports to build WTD sales from Monday.</p></section>`;
  const stores = w.stores || [];
  return `<section class="card"><h2>Week-to-date sales</h2><p>Monday-start WTD period: <b>${esc(w.period)}</b>. POS excludes Uber; Uber and Frieda’s/Square are separate and then included in total WTD. POS WTD uses reporting.site live sync first and uploaded POS files only as backup for unsynced dates.</p><div class="grid grid-4"><div class="kpi"><div class="label">POS WTD</div><div class="value">${money(w.posTotal)}</div></div><div class="kpi"><div class="label">Uber WTD</div><div class="value">${money(w.uberTotal)}</div></div><div class="kpi"><div class="label">Frieda/Square WTD</div><div class="value">${money(w.friedasTotal)}</div></div><div class="kpi"><div class="label">Total WTD</div><div class="value">${money(w.combinedAllTotal)}</div></div></div>${stores.length ? `<table class="table"><thead><tr><th>Store</th><th>POS WTD</th><th>Uber WTD</th><th>Square/Frieda WTD</th><th>Total WTD</th><th>Dates</th></tr></thead><tbody>${stores.map(r => `<tr><td>${esc(r.store)}</td><td>${money(r.posSales)}</td><td>${money(r.uberSales)}</td><td>—</td><td>${money(r.totalSales)}</td><td>${esc((r.datesCovered || []).join(', '))}</td></tr>`).join('')}<tr><td><b>Frieda's Pies</b></td><td>—</td><td>—</td><td>${money(w.friedasTotal)}</td><td>${money(w.friedasTotal)}</td><td>${esc((w.friedas?.datesCovered || []).join(', '))}</td></tr></tbody></table>` : ''}</section>`;
}

function storeSalesCards() {
  return `<section class="card"><h2>Daily captured totals</h2>${(state.live.stores || []).map(store => {
    const isPie = store.name.includes('Frieda');
    const pos = isPie ? {} : (state.live.reportingPOS?.[store.name] || {});
    const uber = isPie ? null : state.live.uberEats?.[store.name] || null;
    const square = isPie ? state.live.square?.[store.name] || null : null;
    const ext = isPie ? square : uber;
    const extLabel = isPie ? 'Square / Frieda' : 'Uber';
    const posValue = isPie ? null : sourceSales(pos);
    const extValue = ext?.period === selectedDate() ? sourceSales(ext) : null;
    const total = (posValue || 0) + (extValue || 0);
    if (isPie) {
      return `<div class="store-card"><div class="store-head"><h3>${esc(store.name)}</h3><span class="status ${extValue ? 'Green' : 'Amber'}">${extValue ? 'Live' : 'Waiting'}</span></div><div class="grid grid-2"><div class="kpi"><div class="label">Square/Frieda Today</div><div class="value">${extValue == null ? 'Not synced today' : money(extValue)}</div></div><div class="kpi"><div class="label">Daily total</div><div class="value">${total ? money(total) : '—'}</div></div></div><p class="small">Orders ${num(ext?.orders)} · AOV ${money(ext?.aov)} · Source: ${esc(ext?.source || 'Frieda item CSV / Square API not synced')}</p></div>`;
    }
    return `<div class="store-card"><div class="store-head"><h3>${esc(store.name)}</h3><span class="status ${posValue ? 'Green' : 'Amber'}">${posValue ? 'Live' : 'Waiting'}</span></div><div class="grid grid-3"><div class="kpi"><div class="label">POS Today</div><div class="value">${money(posValue)}</div></div><div class="kpi"><div class="label">${extLabel} Today</div><div class="value">${extValue == null ? 'Not synced today' : money(extValue)}</div></div><div class="kpi"><div class="label">Daily total</div><div class="value">${total ? money(total) : '—'}</div></div></div><p class="small">Orders ${num(pos.orders || ext?.orders)} · AOV ${money(pos.aov || ext?.aov)} · Source pages: ${esc((pos.sourcePagesUsed || []).join(', ') || pos.source || 'not synced')}</p></div>`;
  }).join('')}</section>`;
}

function staleWarnings() {
  const staleUber = Object.entries(state.live.staleExternalSources?.uberEats || {});
  const staleSquare = Object.entries(state.live.staleExternalSources?.square || {});
  if (!staleUber.length && !staleSquare.length) return '';
  return `<section class="card"><h2>Stale external values excluded</h2>${[...staleUber.map(([k,v]) => ['Uber',k,v]), ...staleSquare.map(([k,v]) => ['Square',k,v])].map(([kind, store, v]) => `<div class="notice"><b>${kind} · ${esc(store)}</b><br>${esc(v.reason || 'Excluded because period does not match selected date.')} Reference: ${money(v.sales)} ${esc(v.periodLabel || v.period || '')}</div>`).join('')}</section>`;
}

function renderImports() {
  const imports = state.live.importStatus || {};
  const diag = state.config?.imports || {};
  return `<section class="card"><h2>File Imports</h2>${dateControls()}<p>0.2.26 uses uploaded files for production, Uber and Frieda/Square. POS Excel/CSV files are backup only; POS daily/hourly/product data should come from Live POS sync.</p><div class="actions"><button class="primary" data-action="reload-imports">Reload uploaded files</button><button class="secondary" data-action="sync-all">Sync all: files only</button><button class="secondary" data-action="sync-recent">Sync hourly benchmarks</button><button class="ghost" data-action="diagnostics">Refresh diagnostics</button></div></section><section class="card"><h2>Import folders</h2><table class="table"><tbody>${['pos/product','pos/history','pos/hourly','uber','friedas','production'].map(x => `<tr><td><code>server/data/imports/${x}</code></td><td>${esc(folderMeaning(x))}</td></tr>`).join('')}</tbody></table></section><section class="card"><h2>Import status</h2>${importStatusTable(imports, diag)}</section><section class="card"><h2>Loaded files</h2>${filesTable(imports.files || diag.files || [])}</section>`;
}
function folderMeaning(x) {
  return { 'pos/product':'Optional POS product backup only. reporting.site sync is the primary product source.', 'pos/history':'Optional POS ticket/product backup only. Disabled by default on Render.', 'pos/hourly':'Optional POS hourly backup only. reporting.site sync is the primary hourly/daily source.', 'uber':'Uber daily workbook: LADonuts_Weekly_Input_TemplateV3.xlsx', 'friedas':'Frieda Square item exports: items-YYYY-MM-DD-YYYY-MM-DD.csv', 'production':'Production plan and baker/cook sheets XLSX' }[x] || '';
}
function importStatusTable(imports, diag) {
  const last = imports.lastImportedDates || {};
  return `<table class="table"><tbody><tr><td>Import root</td><td><code>${esc(imports.root || diag.root || 'server/data/imports')}</code></td></tr><tr><td>Files found</td><td>${num((imports.files || diag.files || []).length)}</td></tr><tr><td>POS history latest</td><td>${esc(JSON.stringify(last.posHistory || {}))}</td></tr><tr><td>POS hourly latest</td><td>${esc(JSON.stringify(last.posHourly || {}))}</td></tr><tr><td>Uber latest</td><td>${esc(JSON.stringify(last.uber || {}))}</td></tr><tr><td>Frieda latest</td><td>${esc(last.friedas || '—')}</td></tr><tr><td>Production week</td><td>${esc(last.productionWeek || '—')}</td></tr></tbody></table>`;
}
function filesTable(files) {
  return files?.length ? `<table class="table"><thead><tr><th>Type</th><th>Path</th><th>Size</th><th>Modified</th></tr></thead><tbody>${files.map(f => `<tr><td>${esc(f.type || '')}</td><td><code>${esc(f.path || '')}</code></td><td>${num(f.bytes)}</td><td>${esc(f.mtime || '')}</td></tr>`).join('')}</tbody></table>` : '<p>No import files found.</p>';
}

function renderSync() {
  const s = state.live.connectorStatus || {};
  return `<section class="card"><h2>Live Fallback</h2>${dateControls()}<p>0.2.26 uses reporting.site as the primary POS source. Use Live POS only for the selected date, or Sync hourly benchmarks to fetch WTD, same-day last week and 4-week comparison dates.</p><div class="actions"><button class="primary" data-action="sync-all">Sync all: files first + fallback</button><button class="secondary" data-action="sync-recent">Sync hourly benchmarks</button><button class="secondary" data-action="sync-pos">Live POS only</button><button class="secondary" data-action="sync-uber">Live Uber only</button><button class="secondary" data-action="sync-square">Live Square API only</button><button class="ghost" data-action="diagnostics">Refresh diagnostics</button></div><div class="notice">Recommended env: <code>ENABLE_LIVE_FALLBACK=true</code>, <code>BENCHMARK_SYNC_WEEKS=4</code>, <code>ENABLE_LIVE_CONNECTORS=false</code>, <code>LIVE_FALLBACK_SOURCES=pos</code>. Uber/Frieda are imported from files unless explicitly synced. This avoids full-history scraping.</div></section><section class="card"><h2>Connector status</h2>${statusTable(s)}</section><section class="card"><h2>Environment status</h2>${envStatus()}</section><section class="card"><h2>Last sync runs</h2>${syncRuns()}</section>`;
}

function statusTable(status) {
  const rows = [['File imports', status.fileImports], ['POS reporting.site', status.reportingSite], ['Uber Eats', status.uberEats], ['Square', status.square]];
  return `<table class="table"><thead><tr><th>Source</th><th>Status</th><th>Period</th><th>Last sync</th><th>Error</th></tr></thead><tbody>${rows.map(([name, s]) => `<tr><td>${name}</td><td>${esc(s?.status || 'not synced')}</td><td>${esc(s?.reportingDate || selectedDate())}</td><td>${esc(s?.lastSync || '—')}</td><td>${esc(s?.error || (s?.warnings || []).join(' | ') || '—')}</td></tr>`).join('')}</tbody></table>`;
}
function envStatus() {
  const e = state.config?.env || {};
  return `<table class="table"><tbody>${Object.entries(e).map(([k,v]) => `<tr><td>${esc(k)}</td><td>${esc(typeof v === 'object' ? (v.present ? `present · length ${v.length} · ${v.preview || ''}` : 'missing') : v)}</td></tr>`).join('')}</tbody></table>`;
}
function syncRuns() {
  const rows = state.live.syncRuns || [];
  return rows.length ? `<table class="table"><thead><tr><th>Time</th><th>Source</th><th>Status</th><th>Errors</th></tr></thead><tbody>${rows.slice(0,15).map(r => `<tr><td>${esc(r.finishedAt || r.startedAt)}</td><td>${esc(r.source)}</td><td>${esc(r.status || (r.ok?'ok':'failed'))}</td><td>${esc((r.errors || []).join(' | ') || '—')}</td></tr>`).join('')}</tbody></table>` : '<p>No sync runs yet.</p>';
}

function renderHourly() {
  const rows = state.live.analysis?.hourly || [];
  return `<section class="card"><h2>Hourly Analysis</h2>${dateControls()}<p>Compares selected day vs same day last week, WTD hourly average and 4-week average using live POS hourly sync first, then uploaded hourly backup if needed. If live sync only provides a daily total, the app shows a daily-total notice.</p></section>${rows.map(storeHourly).join('')}`;
}
function storeHourly(h) {
  const notes = [h.hourlyNote, h.historyNote].filter(Boolean);
  const note = h.dailyTotalCaptured || notes.length ? `<div class="notice">${h.dailyTotalCaptured ? `<b>Live POS daily total captured:</b> ${money(h.dailyTotalCaptured)}` : ''}${notes.length ? `<br>${notes.map(esc).join('<br>')}` : ''}</div>` : '';
  return `<section class="card"><h2>${esc(h.store)} ${h.includesUber ? '· includes Uber' : ''}</h2>${note}${h.rows?.length ? `<table class="table"><thead><tr><th>Hour</th><th>Today</th><th>Last week</th><th>WTD avg</th><th>4-week avg</th><th>Δ LW</th><th>Δ WTD</th><th>Δ 4W</th></tr></thead><tbody>${h.rows.map(r => `<tr><td>${esc(r.hour)}</td><td>${money(r.today)}</td><td>${money(r.sameDayLastWeek)}</td><td>${money(r.wtdAverage)}</td><td>${money(r.last4WeekAverage)}</td><td>${r.deltaVsLastWeekPct == null ? '—' : r.deltaVsLastWeekPct + '%'}</td><td>${r.deltaVsWtdAvgPct == null ? '—' : r.deltaVsWtdAvgPct + '%'}</td><td>${r.deltaVs4WeekAvgPct == null ? '—' : r.deltaVs4WeekAvgPct + '%'}</td></tr>`).join('')}</tbody></table>` : '<p>Waiting for same-day POS/Uber hourly sync.</p>'}</section>`;
}

function renderProduction() {
  const p = state.live.production || {};
  const plan = p.importedPlan || {};
  return `<section class="card"><h2>Production mix</h2><p>Uses uploaded production plan + cook sheet, plus editable ring / ball / long / scroll / apple mapping from synced POS product sales when available.</p><div class="grid grid-3"><div class="kpi"><div class="label">Rings sold/mapped</div><div class="value">${num(p.totals?.ring)}</div></div><div class="kpi"><div class="label">Balls sold/mapped</div><div class="value">${num(p.totals?.ball)}</div></div><div class="kpi"><div class="label">Plan week</div><div class="value">${esc(plan.weekStart || '—')}</div></div></div>${(p.warnings || []).map(w => `<div class="notice">${esc(w)}</div>`).join('')}<div class="actions"><button class="primary" data-action="reload-imports">Reload production files</button><button class="secondary" data-action="save-shape-map">Save visible shape map</button></div></section>${productionPlanCards(plan)}<section class="card"><h2>Shape map</h2>${shapeMapTable()}</section><section class="card"><h2>Product drivers from selected date sales</h2>${driverTable(p.drivers || [])}</section>`;
}
function productionPlanCards(plan) {
  if (!plan || plan.source === 'none') return '<section class="card"><h2>Uploaded production plan</h2><p>No production workbook loaded yet.</p></section>';
  const shapes = Object.entries(plan.shapeTotals || {});
  const stores = Object.entries(plan.storeTotals || {});
  const cook = plan.selectedCookRows || [];
  const products = plan.selectedProductRows || [];
  return `<section class="card"><h2>Uploaded production / cook plan</h2><div class="grid grid-3"><div class="kpi"><div class="label">Week</div><div>${esc(plan.weekStart)} to ${esc(plan.weekEnd)}</div></div><div class="kpi"><div class="label">Shown plan date</div><div>${esc(plan.planningDate || plan.selectedDate || selectedDate())}</div></div><div class="kpi"><div class="label">Weekly balls</div><div class="value">${num((plan.shapeTotals || {}).BALL)}</div></div><div class="kpi"><div class="label">Weekly total</div><div class="value">${num(Object.values(plan.storeTotals || {}).reduce((a,b)=>a+Number(b||0),0))}</div></div></div><h3>Cook sheet by shape for selected date</h3>${cook.length ? `<table class="table"><thead><tr><th>Store</th><th>Shape</th><th>Total cook</th><th>Tray text</th></tr></thead><tbody>${cook.map(r => `<tr><td>${esc(r.store)}</td><td>${esc(r.shape)}</td><td>${num(r.totalCook)}</td><td>${esc(r.trayText)}</td></tr>`).join('')}</tbody></table>` : '<p>No cook rows for selected date.</p>'}<h3>Product production rows for selected date</h3>${products.length ? `<table class="table"><thead><tr><th>Store</th><th>Product</th><th>Section</th><th>Total plan</th><th>Trays</th></tr></thead><tbody>${products.slice(0,80).map(r => `<tr><td>${esc(r.store)}</td><td>${esc(r.product)}</td><td>${esc(r.section)}</td><td>${num(r.totalPlan)}</td><td>${esc(r.trayText)}</td></tr>`).join('')}</tbody></table>` : '<p>No production rows for selected date.</p>'}</section>`;
}
function shapeMapTable() {
  const rows = state.live.productionShapeMap || [];
  return `<table class="table"><thead><tr><th>Product/family</th><th>Ring</th><th>Ball</th><th>Long</th><th>Scroll</th><th>Apple</th></tr></thead><tbody>${rows.map((r,i) => `<tr data-shape-row="${i}"><td><input value="${esc(r.product)}" data-field="product"></td>${['ring','ball','long','scroll','apple'].map(f => `<td><input value="${esc(r[f])}" data-field="${f}" inputmode="decimal"></td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
function driverTable(rows) { return rows.length ? `<table class="table"><thead><tr><th>Product</th><th>Qty</th><th>Ring</th><th>Ball</th></tr></thead><tbody>${rows.map(r => `<tr><td>${esc(r.product)}</td><td>${num(r.qty)}</td><td>${num(r.ring)}</td><td>${num(r.ball)}</td></tr>`).join('')}</tbody></table>` : '<p>Sync product sales first.</p>'; }

function renderHiring() {
  const candidates = state.live.candidates || [];
  return `<section class="card"><h2>AI Hiring Assistant</h2><p>Screen candidates for availability, reliability, customer attitude, experience and communication.</p><div class="form-row"><input id="candName" placeholder="Candidate name"><input id="candStore" placeholder="Preferred store"></div><div class="form-row"><input id="candAvailability" placeholder="Availability"><input id="candTransport" placeholder="Transport / distance"></div><textarea id="candExperience" placeholder="Work history and answers"></textarea><div class="actions"><button class="primary" data-action="add-candidate">Score candidate</button></div></section><section class="card"><h2>Shortlist</h2>${candidateTable(candidates)}</section>`;
}
function candidateTable(rows) { return `<table class="table"><thead><tr><th>Name</th><th>Store</th><th>Score</th><th>Recommendation</th><th>Flags</th></tr></thead><tbody>${rows.map(c => `<tr><td>${esc(c.name)}</td><td>${esc(c.store || '—')}</td><td>${num(c.score)}</td><td><b>${esc(c.recommendation)}</b></td><td>${esc((c.riskFlags || []).join(' | ') || 'Positive availability/transport')}</td></tr>`).join('')}</tbody></table>`; }

function renderTraining() {
  const t = state.live.training || { modules: [], completions: [] };
  return `<section class="card"><h2>AI Training Assistant</h2><p>Staff can search SOPs and managers can record practical sign-off.</p><input id="sopSearch" placeholder="Ask: How do I make a thickshake?" value=""><div class="actions"><button class="secondary" data-action="search-sop">Search SOP</button></div><div id="sopResult"></div></section><section class="card"><h2>Modules</h2>${(t.modules || []).map(m => `<div class="store-card"><h3>${esc(m.title)}</h3><ol>${(m.steps || []).map(s => `<li>${esc(s)}</li>`).join('')}</ol><button class="secondary" data-action="complete-training" data-module="${esc(m.id)}">Record sign-off</button></div>`).join('')}</section><section class="card"><h2>Completion tracking</h2>${(t.completions || []).length ? `<table class="table"><tbody>${t.completions.map(c => `<tr><td>${esc(c.staffName)}</td><td>${esc(c.moduleId)}</td><td>${esc(c.completedAt)}</td></tr>`).join('')}</tbody></table>` : '<p>No completions yet.</p>'}</section>`;
}

function renderAudits() {
  const a = state.live.audits || { records: [] };
  return `<section class="card"><h2>AI Store Standards Assistant</h2><p>Photo upload/scoring is staged; Phase 1 records opening/closing audit scores and corrective actions.</p><div class="form-row"><input id="auditStore" placeholder="Store"><select id="auditType"><option>opening</option><option>closing</option><option>manager walk</option></select></div><div class="form-row"><input id="auditZone" placeholder="Zone"><input id="auditScore" placeholder="Score 1-10" inputmode="numeric"></div><textarea id="auditComment" placeholder="Issue / corrective action"></textarea><div class="actions"><button class="primary" data-action="add-audit">Save audit</button></div></section><section class="card"><h2>Audit history</h2>${a.records?.length ? `<table class="table"><thead><tr><th>Store</th><th>Type</th><th>Zone</th><th>Score</th><th>Status</th></tr></thead><tbody>${a.records.map(r => `<tr><td>${esc(r.store)}</td><td>${esc(r.type)}</td><td>${esc(r.zone)}</td><td>${num(r.score)}</td><td><span class="status ${esc(r.status)}">${esc(r.status)}</span></td></tr>`).join('')}</tbody></table>` : '<p>No audits yet.</p>'}</section>`;
}

function renderWhatsapp() {
  const w = state.live.whatsapp || { summaries: [], actions: [] };
  return `<section class="card"><h2>WhatsApp stock workflow</h2><p>Upload exported .txt/.zip to detect sold-out times, leftovers and stock pressure. Photo OCR is staged.</p><input id="whatsappFile" type="file"><div class="actions"><button class="primary" data-action="upload-whatsapp">Upload WhatsApp export</button></div></section><section class="card"><h2>WhatsApp summary</h2>${(w.summaries || []).length ? (w.summaries || []).slice(0,3).map(x => `<div class="notice"><b>${esc(x.source || 'WhatsApp export')}</b><br>${esc(x.summary || '')}<br><span class="small">Messages ${num(x.messageCount)} · Photos ${num(x.photoCount)} · Parsed ${esc(x.parsedAt || '')}</span></div>`).join('') : '<p>No WhatsApp export parsed yet.</p>'}</section><section class="card"><h2>WhatsApp actions</h2>${actionList(w.actions || [])}</section>`;
}

function renderAsk() {
  return `<section class="card"><h2>Ask AI Operations Manager</h2><p>Examples: What needs my attention today? Which store is underperforming? Are balls short? Show sell-out risk.</p><textarea id="askQuestion" placeholder="Ask Freda Ops..."></textarea><div class="actions"><button class="primary" data-action="ask-ai">Ask</button></div><div id="aiAnswer" class="notice" hidden></div></section>`;
}

function actionList(actions) { return actions?.length ? `<table class="table"><thead><tr><th>Priority</th><th>Store</th><th>Action</th><th>Owner</th></tr></thead><tbody>${actions.map(a => `<tr><td>${esc(a.priority || 'Medium')}</td><td>${esc(a.store || '')}</td><td><b>${esc(a.title || a.action || '')}</b><br><span class="small">${esc(a.body || a.reason || '')}</span></td><td>${esc(a.owner || 'Manager')}</td></tr>`).join('')}</tbody></table>` : '<p>No actions yet.</p>'; }

function bindScreen() {
  document.querySelectorAll('[data-action]').forEach(btn => btn.addEventListener('click', () => handleAction(btn.dataset.action, btn)));
}
async function handleAction(action, btn) {
  try {
    if (action === 'set-date') { state.reportingDate = $('#reportingDateInput').value || selectedDate(); localStorage.setItem('freda.reportingDate', state.reportingDate); return await reloadImports(); }
    if (action === 'refresh') { await loadLive(); await loadConfig(); return render(); }
    if (action === 'diagnostics') { await loadConfig(); return render(); }
    if (action === 'reload-imports') return await reloadImports();
    if (action.startsWith('sync-')) return await syncAction(action);
    if (action === 'save-shape-map') return await saveShapeMap();
    if (action === 'add-candidate') return await addCandidate();
    if (action === 'complete-training') return await postJson('/api/training/completions', { staffName: prompt('Staff name?') || 'Staff', moduleId: btn.dataset.module, score: 100, managerSignoff: true });
    if (action === 'search-sop') return searchSop();
    if (action === 'add-audit') return await addAudit();
    if (action === 'upload-whatsapp') return await uploadWhatsapp();
    if (action === 'ask-ai') return await askAi();
  } catch (err) { alert(err.message || err); }
}
async function reloadImports() {
  $('#syncStatus').textContent = 'Reloading uploaded files...';
  const data = await postJson('/api/import/reload', { reportingDate: selectedDate() }, false);
  state.live = data.live;
  await loadConfig();
  $('#syncStatus').textContent = data.ok ? 'Imports loaded' : 'Imports not complete';
  render();
}
async function syncAction(action) {
  $('#syncStatus').textContent = 'Sync running...';
  const route = action === 'sync-all' ? '/api/sync/all' : action === 'sync-recent' ? '/api/sync/pos/benchmarks' : action === 'sync-pos' ? '/api/sync/pos/day' : action === 'sync-uber' ? '/api/sync/uber' : '/api/sync/square';
  const data = await postJson(route, { reportingDate: selectedDate(), forceLiveFallback: action === 'sync-recent' }, false);
  state.live = data.live;
  await loadConfig();
  $('#syncStatus').textContent = data.ok ? 'Sync updated' : 'Sync not complete';
  render();
}
async function saveShapeMap() {
  const shapeMap = [...document.querySelectorAll('[data-shape-row]')].map(row => Object.fromEntries([...row.querySelectorAll('[data-field]')].map(i => [i.dataset.field, i.value])));
  await postJson('/api/production/shape-map', { shapeMap });
}
async function addCandidate() {
  await postJson('/api/hiring/candidates', { name: $('#candName').value, store: $('#candStore').value, availability: $('#candAvailability').value, transport: $('#candTransport').value, experience: $('#candExperience').value, answers: $('#candExperience').value });
}
function searchSop() {
  const q = ($('#sopSearch').value || '').toLowerCase();
  const mods = state.live.training?.modules || [];
  const found = mods.find(m => `${m.title} ${(m.steps||[]).join(' ')}`.toLowerCase().includes(q.replace(/[?]/g,''))) || mods[0];
  $('#sopResult').innerHTML = found ? `<div class="notice"><b>${esc(found.title)}</b><ol>${found.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol></div>` : '<p>No SOP found.</p>';
}
async function addAudit() { await postJson('/api/audits', { store: $('#auditStore').value, type: $('#auditType').value, zone: $('#auditZone').value, score: $('#auditScore').value, comment: $('#auditComment').value }); }
async function uploadWhatsapp() {
  const file = $('#whatsappFile').files[0];
  if (!file) return alert('Choose a WhatsApp .txt/.zip export first.');
  const fd = new FormData(); fd.append('file', file);
  const res = await fetch('/api/sync/whatsapp', { method: 'POST', body: fd });
  const data = await res.json(); if (!res.ok) throw new Error(data.error || 'Upload failed');
  state.live = data.live; render();
}
async function askAi() {
  const data = await postJson('/api/assistant', { question: $('#askQuestion').value }, false);
  const box = $('#aiAnswer'); box.hidden = false; box.textContent = data.answer;
}
async function postJson(url, body, autoRefresh = true) {
  let res;
  try {
    res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body || {}) });
  } catch (err) {
    throw new Error(`Network error calling ${url}. Check that /health works and the Render service is awake.`);
  }
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    const isHtml = /^\s*<!doctype html|^\s*<html|<style/i.test(text || '');
    data = { ok: false, error: isHtml ? `Server returned HTML instead of JSON for ${url} (HTTP ${res.status}). This is usually a Render 502/503 page or a crashed API route. Open Render Logs and /health.` : (text.slice(0, 300) || 'Non-JSON response') };
  }
  if (!res.ok) throw new Error(data.error || data.message || `Request failed (${res.status}). Check Render logs and /health first.`);
  if (autoRefresh && data.live) { state.live = data.live; render(); }
  return data;
}
