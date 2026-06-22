# Beta 0.2.21 Changelog

Beta 0.2.21 keeps Beta 0.2.18 imports and UI structure unchanged, but isolates live POS fallback so sync no longer blocks the whole app.

## Changes

- `/api/sync/all` is now file-import only and fast.
- Added `/api/sync/pos/day` for one selected reporting date only.
- Added `/api/sync/pos/backfill` for sequential 10-day POS backfill.
- POS backfill saves partial results after every date, so successful dates are kept even if a later date fails.
- POS day timeout increased to 45 seconds via `POS_DAY_TIMEOUT_MS=45000`.
- Current-day reporting.site GET pages are accepted when KPI cards are present, even when the page does not visibly print the selected date.
- Live POS diagnostics now expose per-store statuses: fetched, rejected by date check, KPI not found, timeout, saved.

## Not changed

- File import parsing remains the same as 0.2.18.
- UI layout remains the same as 0.2.18.
- Uber remains file-based by default unless manually synced.
- Frieda/Square remains file-based by default until Square API access is provided.
