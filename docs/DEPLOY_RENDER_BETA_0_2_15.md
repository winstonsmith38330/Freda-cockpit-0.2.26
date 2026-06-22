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
Runtime: Node
Root Directory: server
Build Command: rm -f package-lock.json && npm install --omit=optional
Start Command: npm start
Health Check Path: /health
```

Important env vars:

```env
NODE_VERSION=20.18.0
NODE_ENV=production
TIMEZONE=Australia/Sydney
IMPORTS_PATH=./data/imports
ENABLE_FILE_IMPORTS=true
ENABLE_LIVE_CONNECTORS=false
ENABLE_LIVE_FALLBACK=true
LIVE_FALLBACK_DAYS=10
ENABLE_BROWSER_SYNC=false
```

After deploy:

```text
/health
/api/config/status
/api/import/status
```

In the app:

1. Select reporting date.
2. Click `Use date`.
3. Check WTD and hourly analysis.
