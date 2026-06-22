# Deploy Beta 0.2.23 on Render

Use the same Render settings:

```text
Root Directory: server
Build Command: rm -f package-lock.json && npm install --omit=optional
Start Command: node server.js
Health Check Path: /health
```

Expected health response includes:

```json
{ "version": "0.2.23" }
```

Important env values:

```env
ENABLE_FILE_IMPORTS=true
IMPORT_PARSE_TICKET_HISTORY=false
POS_SOURCE_POLICY=sync_first_file_backup
POS_EXCEL_BACKUP_ONLY=true
ENABLE_LIVE_FALLBACK=true
LIVE_FALLBACK_DAYS=10
LIVE_FALLBACK_SOURCES=pos
POS_DAY_TIMEOUT_MS=45000
REPORTING_SYNC_TIMEOUT_MS=45000
REPORTING_ALLOW_UNDATED_RECENT_SCRAPE=true
REPORTING_DISABLE_TICKET_ENRICHMENT=true
```

`REPORTING_COOKIE` must be the full raw Cookie request header from a successful reporting.site dashboard page, for example:

```env
REPORTING_COOKIE=email=...; password=...; PHPSESSID=...
REPORTING_PHPSESSID=only_the_php_session_id
```
