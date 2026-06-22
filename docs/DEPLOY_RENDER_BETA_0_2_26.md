# Deploy Freda Ops Cockpit Beta 0.2.26 on Render

## Render service settings

Use these settings for the web service:

```text
Root Directory: server
Build Command: npm install && npx playwright install chromium
Start Command: node server.js
Health Check Path: /health
```

Do not use `--omit=optional` for this version unless Playwright is a normal dependency in your package. This package includes Playwright as a normal dependency because browser sync is required as fallback.

## Required environment

```env
NODE_VERSION=20.18.0
NODE_ENV=production
TIMEZONE=Australia/Sydney
ENABLE_FILE_IMPORTS=true
IMPORT_PARSE_TICKET_HISTORY=false
ENABLE_LIVE_FALLBACK=true
LIVE_FALLBACK_SOURCES=pos
POS_SOURCE_POLICY=sync_first_file_backup
POS_EXCEL_BACKUP_ONLY=true
```

## Browser fallback environment

```env
ENABLE_BROWSER_SYNC=true
PLAYWRIGHT_HEADLESS=true
PLAYWRIGHT_BROWSERS_PATH=0
REPORTING_REQUEST_DELAY_MS=2500
REPORTING_BROWSER_VIEWS=busy_hours.php,product_sales_summary.php,product_sales.php,dashboard.php,eod_summary.php,daily_sales.php
BROWSER_SYNC_TIMEOUT_MS=45000
REPORTING_SYNC_TIMEOUT_MS=45000
POS_DAY_TIMEOUT_MS=45000
```

## reporting.site cookies

Use the full cookie header from a working browser request:

```env
REPORTING_COOKIE=email=...; password=...; PHPSESSID=...
REPORTING_PHPSESSID=only_the_php_session_value
```

If sync reaches `index.php` or says `browser auth/login page`, refresh those cookies from DevTools Network → working reporting.site page → Request Headers → Cookie.

## Test after deploy

1. Open `/health`; expected version is `0.2.26`.
2. Open `/api/config/status`; confirm reporting cookie is present.
3. In browser console, run:

```js
fetch('/api/sync/pos/day', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ reportingDate: '2026-06-22' })
}).then(async r => {
  const text = await r.text();
  console.log('STATUS:', r.status);
  console.log(text.slice(0, 5000));
});
```

Expected diagnostics should show either normal accepted pages or browser fallback steps such as `browser_fallback_started` and `browser_saved_page`.
