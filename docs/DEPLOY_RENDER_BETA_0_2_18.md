# Deploy Beta 0.2.18 on Render

Use:

```text
Root Directory: server
Build Command: rm -f package-lock.json && npm install --omit=optional
Start Command: node server.js
Health Check Path: /health
```

Recommended environment:

```env
ENABLE_FILE_IMPORTS=true
IMPORT_PARSE_TICKET_HISTORY=false
ENABLE_LIVE_CONNECTORS=false
ENABLE_LIVE_FALLBACK=true
LIVE_FALLBACK_DAYS=10
LIVE_FALLBACK_SOURCES=pos
REPORTING_DISABLE_TICKET_ENRICHMENT=true
REPORTING_ALLOW_UNDATED_RECENT_SCRAPE=true
ENABLE_BROWSER_SYNC=false
```

After deploy, open `/health` and confirm version `0.2.18`.
