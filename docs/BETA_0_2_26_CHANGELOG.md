# Beta 0.2.26 Changelog — Browser Sync Fallback

## Purpose
Beta 0.2.26 keeps the 0.2.22/0.2.23 sync-first POS policy and the 0.2.23 busy-hours POST parser, then adds a Playwright/Chromium browser fallback for reporting.site when Render server-side HTTP requests are reset by LiteSpeed/reporting.site.

## Why this patch exists
0.2.25 exposed the low-level failure:

```text
ECONNRESET / read ECONNRESET
```

That means reporting.site closed the Render HTTP connection before returning HTML. When this happens, normal `fetch()` and native Node HTTP have nothing to parse.

## Changes
- Keeps `/api/sync/all` file-only and fast.
- Keeps `/api/sync/pos/day` as selected-date POS sync.
- Keeps `/api/sync/pos/benchmarks` for selected date, WTD benchmark, same-day last week, and 4-week comparison dates.
- Keeps reporting.site `busy_hours.php` POST date-range form logic.
- Adds browser fallback when no normal fetch pages are accepted and `ENABLE_BROWSER_SYNC=true`.
- Browser fallback:
  - launches Chromium via Playwright;
  - injects reporting.site cookies into the browser context;
  - opens each reporting.site dashboard page like a normal browser;
  - submits the date-range form where present;
  - reads the rendered HTML/chart JavaScript;
  - parses daily, hourly and product data using the existing parsers;
  - saves accepted store/date results.
- Adds clearer diagnostics:
  - `browser_fallback_started`
  - `browser fetched`
  - `BROWSER_POST_DATE_RANGE`
  - `browser auth/login page`
  - `browser_saved_page`
  - `browser_error`

## Important
Browser sync is heavier and should be used with throttling. Avoid repeated benchmark syncs if reporting.site starts resetting connections.

Recommended env:

```env
ENABLE_BROWSER_SYNC=true
PLAYWRIGHT_HEADLESS=true
PLAYWRIGHT_BROWSERS_PATH=0
REPORTING_REQUEST_DELAY_MS=2500
REPORTING_BROWSER_VIEWS=busy_hours.php,product_sales_summary.php,product_sales.php,dashboard.php,eod_summary.php,daily_sales.php
```
