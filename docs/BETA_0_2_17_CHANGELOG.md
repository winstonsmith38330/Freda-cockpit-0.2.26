# Beta 0.2.18 Changelog

## Purpose
Beta 0.2.18 keeps the Beta 0.2.16 file-first import layer but fixes the recent live fallback behaviour and the Frieda's Pies display logic.

## Sync fixes
- `/api/sync/all` now wraps imports, POS, Uber and Square fallback calls in safe timeouts so Render returns JSON instead of a browser `Network error` / HTML 502 page.
- Recent fallback now runs today/yesterday/day-before safely and in parallel by date.
- POS recent fallback is now intentionally narrow: `busy_hours.php`, `product_sales_summary.php`, `product_sales.php`, `dashboard.php`, `eod_summary.php`, `daily_sales.php`.
- Ticket enrichment is skipped during recent fallback to avoid slow full-history scraping.
- Reporting.site fetch defaults are shorter and safer: 5 date attempts and 6s per request unless overridden.
- Reporting.site cookie builder now handles either a full Cookie header or a raw PHPSESSID, and can add `REPORTING_EMAIL` / `REPORTING_PASSWORD` cookies if supplied.

## Frieda's Pies disclosure
- Frieda's Pies no longer shows POS or Uber cards.
- Frieda's Pies displays only Square/Frieda item CSV / Square API values.
- WTD table now has distinct columns for POS, Uber, and Square/Frieda.

## Existing behaviour retained
- Uploaded CSV/XLSX files remain the historical baseline.
- POS priority remains: product sales files, hourly files, then ticket history only if explicitly enabled.
- Large ticket history files remain skipped by default on Render with `IMPORT_PARSE_TICKET_HISTORY=false`.
- Production week starts Monday.
