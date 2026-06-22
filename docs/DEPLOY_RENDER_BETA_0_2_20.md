# Deploy Beta 0.2.21 on Render

Use the same Render service settings as 0.2.18.

## Build settings

```text
Root Directory: server
Build Command: rm -f package-lock.json && npm install --omit=optional
Start Command: node server.js
Health Check Path: /health
```

## Required environment highlights

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

`REPORTING_COOKIE` must be the full raw Cookie header value, for example:

```env
REPORTING_COOKIE=email=...; password=...; PHPSESSID=...
```

`REPORTING_PHPSESSID` must contain only the PHP session ID value.

## Test order

1. Open `/health` and confirm version `0.2.21`.
2. Open `/api/config/status` and confirm `REPORTING_COOKIE` preview starts with `ema...` and not `18c...`.
3. Use `File Imports > Reload uploaded files`.
4. Use `Live Fallback > Live POS only` for one selected date.
5. Use `Live Fallback > Sync current + last days` only when a 10-day sequential backfill is needed.

## Endpoint behaviour

- `/api/sync/all`: file imports only.
- `/api/sync/pos/day`: selected date POS only.
- `/api/sync/pos/backfill`: sequential recent POS backfill with partial saves.
