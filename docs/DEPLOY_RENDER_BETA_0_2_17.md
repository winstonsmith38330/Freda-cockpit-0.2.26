# Deploy Beta 0.2.18 on Render

Use this repo shape:

```text
server/
web/
docs/
seed-data.json
README.md
```

Render settings:

```text
Root Directory: server
Build Command: rm -f package-lock.json && npm install --omit=optional
Start Command: node server.js
Health Check Path: /health
```

Critical environment values:

```env
ENABLE_FILE_IMPORTS=true
IMPORT_PARSE_TICKET_HISTORY=false
ENABLE_LIVE_CONNECTORS=false
ENABLE_LIVE_FALLBACK=true
LIVE_FALLBACK_DAYS=10
LIVE_FALLBACK_SOURCES=pos,uber,square
LIVE_SOURCE_TIMEOUT_MS=18000
RECENT_WINDOW_PER_DATE_TIMEOUT_MS=18000
REPORTING_MAX_DATE_ATTEMPTS=5
REPORTING_SYNC_TIMEOUT_MS=6000
REPORTING_DISABLE_TICKET_ENRICHMENT=true
ENABLE_BROWSER_SYNC=false
```

For reporting.site, `REPORTING_COOKIE` should be the full raw Cookie header from Network > Request Headers > Cookie. If you only have PHPSESSID, put it in `REPORTING_PHPSESSID` and optionally add `REPORTING_EMAIL` / `REPORTING_PASSWORD`.

Do not commit real secrets to GitHub.
