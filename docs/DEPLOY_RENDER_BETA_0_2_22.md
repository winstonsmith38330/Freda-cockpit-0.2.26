# Deploy Beta 0.2.23 on Render

Use the same Render settings as Beta 0.2.21.

## Render settings

```text
Root Directory: server
Build Command: rm -f package-lock.json && npm install --omit=optional
Start Command: node server.js
Health Check Path: /health
```

## Required environment settings

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
ENABLE_BROWSER_SYNC=false
```

## Reporting.site cookies

```env
REPORTING_COOKIE=email=...; password=...; PHPSESSID=...
REPORTING_PHPSESSID=only_the_session_id
```

`REPORTING_COOKIE` must be the full browser Cookie request header value, without the word `Cookie:`.

## Data source policy

Beta 0.2.23 is sync-first for POS:

- POS daily/hourly/product sales: reporting.site sync first
- Uploaded POS Excel/CSV: backup only
- Production, Uber and Frieda/Square: uploaded files/API remain the source

## Test sequence

1. Open `/health` and confirm `version` is `0.2.23`.
2. Open `/api/config/status` and confirm `REPORTING_COOKIE` starts with `ema...` and `REPORTING_PHPSESSID` is present.
3. In the app, select the date.
4. Click `Live POS only`.
5. Check Store Status, Live Sales / Ops, WTD, and Hourly Analysis.
6. Use `Sync current + last days` only when you want sequential recent POS backfill.
