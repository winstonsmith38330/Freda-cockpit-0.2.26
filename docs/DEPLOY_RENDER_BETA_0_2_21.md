# Deploy Beta 0.2.21 on Render

Use the same Render settings as 0.2.20.

## Render settings

- Root Directory: `server`
- Build Command: `rm -f package-lock.json && npm install --omit=optional`
- Start Command: `node server.js`
- Health Check Path: `/health`

## Required environment values

```env
ENABLE_FILE_IMPORTS=true
IMPORT_PARSE_TICKET_HISTORY=false
ENABLE_LIVE_CONNECTORS=false
ENABLE_LIVE_FALLBACK=true
LIVE_FALLBACK_DAYS=10
LIVE_FALLBACK_SOURCES=pos
POS_DAY_TIMEOUT_MS=45000
REPORTING_SYNC_TIMEOUT_MS=45000
REPORTING_DISABLE_TICKET_ENRICHMENT=true
REPORTING_ALLOW_UNDATED_RECENT_SCRAPE=true
```

`REPORTING_COOKIE` must be the full raw cookie header value, for example:

```env
REPORTING_COOKIE=email=...; password=...; PHPSESSID=...
```

`REPORTING_PHPSESSID` must be only the session ID value.

## Smoke test

1. Open `/health` and confirm `version` is `0.2.21`.
2. Open `/api/config/status` and confirm `REPORTING_COOKIE` starts with `ema...` and has length over 80.
3. In the app, select the date and click `Live POS only`.
4. Check `Live Sales / Ops`: POS daily totals should appear in Store status and WTD.
5. Check `Hourly Analysis`: if no hourly split is available from reporting.site, the page should show a daily-total notice instead of looking unsynced.
