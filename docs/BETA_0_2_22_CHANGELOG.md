# Beta 0.2.22 Changelog

Beta 0.2.22 keeps the Beta 0.2.21 isolated POS sync architecture and parser fixes, but changes the POS data source policy.

## Source policy change

POS reporting.site sync is now the primary source for:

- POS daily sales
- POS hourly sales
- POS product sales / product mix
- POS WTD contribution

Uploaded POS Excel/CSV files are now treated as backup only. They are still parsed and kept in `fileImportCache`, but they are not promoted into the live POS state when file imports run.

## What still uses uploaded files

Uploaded files remain the primary source for:

- production plan
- baker cook sheet
- Uber sales workbook
- Frieda/Square item sales file, until Square API access is available

## Implementation notes

- `posSyncByStoreDate` stores live POS sync data by store and date.
- `/api/sync/pos/day` saves the selected date into `posSyncByStoreDate`.
- `/api/sync/pos/backfill` saves each date sequentially so partial success is preserved.
- WTD totals use live POS sync first, with uploaded POS hourly workbook backup only for dates that have not been live-synced.
- Hourly analysis uses live POS hourly rows first, then uploaded hourly workbook backup. If only the daily POS total is available, the app shows a daily-total notice instead of inventing hourly rows.
- POS product mix uses live reporting.site product rows first. Uploaded POS product/history files are backup only and are not used as the main product source.

## What did not change

- `/api/sync/all` remains file-only and fast.
- `/api/sync/pos/day` remains selected-date POS only.
- `/api/sync/pos/backfill` remains sequential recent-day POS backfill.
- Ticket history remains skipped by default unless `IMPORT_PARSE_TICKET_HISTORY=true` is explicitly set.
