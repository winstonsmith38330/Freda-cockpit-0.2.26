# Beta 0.2.23 Changelog

Focused busy-hours sync patch.

## Changed

- Keeps the 0.2.22 sync-first POS policy.
- Keeps daily/WTD sales logic unchanged.
- `busy_hours.php` is now fetched using the reporting.site POST date-range form instead of `?date=YYYY-MM-DD`.
- Parses hourly sales from reporting.site JavaScript constants: `SERIES_REVENUE`, `SERIES_TX`, `RAW_HOURS`, `HOUR_REVENUE_TOTALS`, `HOUR_TX_TOTALS`, and `CROSS_BODY`.
- Rejects empty placeholder hourly rows such as `06:00 = 0`.
- Adds explicit diagnostics when busy-hours POST returns an empty dataset.
- Excludes `Total:` / `Totals:` rows from POS product mix.
- Recalculates AOV from `sales / orders` when the parsed AOV is clearly invalid.

## Workflow

- `Sync all` remains file-only and fast.
- `Live POS only` syncs the selected date from reporting.site.
- `Sync current + last days` runs sequential POS backfill.
