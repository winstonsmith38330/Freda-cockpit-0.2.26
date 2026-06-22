# Beta 0.2.21 Changelog

Beta 0.2.21 keeps the Beta 0.2.20 isolated POS sync architecture and parser fixes, with a focused propagation fix.

## Fixed

- Live POS values captured by `/api/sync/pos/day` are now merged into the Monday-start WTD summary.
- WTD cards now use uploaded file history plus same-day live POS fallback values.
- Hourly Analysis now shows a clear daily-total notice when live POS sales are available but reporting.site does not expose a reliable hour-by-hour split.
- Store status, Live Sales / Ops and Today now read from the same live-aware merged data layer.

## Unchanged

- `/api/sync/all` remains file-only and fast.
- `/api/sync/pos/day` remains selected-date POS only.
- `/api/sync/pos/backfill` remains sequential recent POS backfill.
- Uploaded CSV/XLSX imports remain the historical baseline.
- Large POS ticket-history CSVs remain skipped on Render unless `IMPORT_PARSE_TICKET_HISTORY=true`.
