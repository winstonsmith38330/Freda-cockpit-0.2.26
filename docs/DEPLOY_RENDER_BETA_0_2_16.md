# Deploy Beta 0.2.16 on Render

Use this repo shape:

```text
server/
web/
docs/
README.md
seed-data.json
```

Render settings:

```text
Root Directory: server
Build Command: rm -f package-lock.json && npm install --omit=optional
Start Command: node server.js
Health Check Path: /health
```

Important env:

```env
ENABLE_FILE_IMPORTS=true
IMPORT_PARSE_TICKET_HISTORY=false
ENABLE_LIVE_CONNECTORS=false
ENABLE_LIVE_FALLBACK=true
LIVE_FALLBACK_DAYS=10
ENABLE_BROWSER_SYNC=false
IMPORTS_PATH=./data/imports
```

Keep `IMPORT_PARSE_TICKET_HISTORY=false` on Render. Upload POS product sales exports to `server/data/imports/pos/product/` for product mix. The large ticket history CSVs remain available for offline/heavy parsing but are skipped during normal Render reloads.
