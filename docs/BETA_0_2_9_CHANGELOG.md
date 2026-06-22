# Freda Ops Cockpit - Beta 0.2.9 changelog

## Purpose
Beta 0.2.9 is a data-accuracy patch after Beta 0.2.8 authenticated successfully but inflated POS daily totals by reading too many ticket rows.

## Main fixes

- POS daily totals now come only from `ticket_sales.php` rows whose own row date equals the reporting date.
- The connector no longer assigns all visible/historical rows to today when a POS page ignores URL date filters.
- Ticket rows are deduplicated across date-lookback fetches.
- If historical POS rows are found but no rows match today's date, the store remains blank instead of showing inflated daily sales.
- Hourly POS analysis is built only from same-day ticket rows.
- Uber and Square are excluded from daily cards unless their explicit `period` equals today's reporting date.
- Stale Uber WTD/sample and Square MTD/sample values are ignored in daily totals and shown as `Not synced today`.
- Default reporting date uses `Australia/Sydney` unless overridden by `REPORTING_TODAY`.

## Important display rule

Daily captured total = POS Today + Uber Today/Square Today only when the Uber/Square source has `period = YYYY-MM-DD` for the same reporting date.

Old WTD/MTD/manual/sample values are not mixed into daily totals.
