import { syncReportingSite } from '../connectors/reportingSiteConnector.js';
import { syncFileImports } from '../importers/fileImportService.js';
import { currentDateInTimeZone, normalizeReportingDate } from '../utils/dateUtils.js';

// Beta 0.2.23: /api/sync/all is deliberately file-only and fast.
// Live scraping is isolated in POS day/backfill endpoints so one slow external
// page cannot block the main app sync.
export async function syncAll(env, _fetchImpl, opts = {}) {
  const reportingDate = normalizeReportingDate(opts.reportingDate || opts.date || opts.today, env.TIMEZONE || 'Australia/Sydney');
  const startedAt = new Date().toISOString();
  const imports = await safeRun(
    'File imports',
    Number(env.IMPORT_SYNC_TIMEOUT_MS || 18000),
    () => syncFileImports(env, { ...opts, reportingDate }),
    notSyncedResult('File imports', reportingDate, startedAt)
  );

  return {
    ok: imports.ok,
    status: imports.status || (imports.ok ? 'success' : 'not_synced'),
    source: 'sync-all-file-only',
    mode: 'file-imports-only-fast-no-live-fallback',
    reportingDate,
    startedAt,
    finishedAt: new Date().toISOString(),
    fileImports: imports,
    warnings: [
      ...(imports.warnings || []),
      'Beta 0.2.23: Sync all is file-only. Use Live POS only for one selected date or Sync current + last days for sequential POS backfill.'
    ],
    errors: imports.errors || []
  };
}

// Backward-compatible helper. Server routes save partial results themselves.
export async function syncRecentFallback(env, fetchImpl, opts = {}) {
  const count = Math.max(1, Number(opts.days ?? env.LIVE_FALLBACK_DAYS ?? 10));
  const baseDate = normalizeReportingDate(opts.reportingDate || opts.date || currentDateInTimeZone(env.TIMEZONE || 'Australia/Sydney'), env.TIMEZONE || 'Australia/Sydney');
  const dates = Array.from({ length: count }, (_v, i) => addDays(baseDate, -i));
  const startedAt = new Date().toISOString();
  const runs = [];
  for (const reportingDate of dates) {
    runs.push(await syncReportingSite(withPosDayTimeout(env), fetchImpl, { ...opts, reportingDate, liveFallback: true, recentOnly: true, dayOnly: true }));
  }
  return {
    ok: runs.some(r => r.ok),
    status: runs.every(r => r.ok) ? 'success' : runs.some(r => r.ok) ? 'partial_success' : 'not_synced',
    source: 'pos-recent-backfill-sequential',
    mode: 'pos-backfill-sequential-no-parallel-no-file-reload',
    reportingDate: baseDate,
    startedAt,
    finishedAt: new Date().toISOString(),
    runs,
    latestResult: runs[0] || null,
    warnings: runs.flatMap(r => r.warnings || []),
    errors: runs.flatMap(r => r.errors || [])
  };
}

function withPosDayTimeout(env) {
  return {
    ...env,
    REPORTING_SYNC_TIMEOUT_MS: String(env.POS_DAY_TIMEOUT_MS || env.REPORTING_DAY_TIMEOUT_MS || 45000),
    REPORTING_MAX_DATE_ATTEMPTS: String(env.REPORTING_MAX_DATE_ATTEMPTS || 5)
  };
}

async function safeRun(label, timeoutMs, fn, fallback) {
  try {
    return await withTimeout(Promise.resolve().then(fn), timeoutMs, `${label} timed out after ${Math.round(timeoutMs / 1000)}s`);
  } catch (err) {
    return {
      ...fallback,
      ok: false,
      status: 'not_synced',
      finishedAt: new Date().toISOString(),
      warnings: [...(fallback.warnings || [])],
      errors: [...(fallback.errors || []), `${label}: ${err?.message || err}`]
    };
  }
}
function withTimeout(promise, ms, message) {
  let timer;
  const timeout = new Promise((_resolve, reject) => { timer = setTimeout(() => reject(new Error(message)), ms); });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}
function notSyncedResult(source, reportingDate, startedAt) {
  return { ok: false, status: 'not_synced', source, reportingDate, periodMatched: false, startedAt, finishedAt: new Date().toISOString(), warnings: [], errors: [] };
}
function addDays(iso, days) {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}
