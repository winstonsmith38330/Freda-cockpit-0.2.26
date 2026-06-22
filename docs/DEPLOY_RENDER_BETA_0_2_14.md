# Deploy Beta 0.2.16 on Render

Use this repo shape:

```text
server/
web/
docs/
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

Recommended env:

```env
NODE_VERSION=20.18.0
NODE_ENV=production
TIMEZONE=Australia/Sydney
DEFAULT_REPORTING_DATE_MODE=today
IMPORTS_PATH=./data/imports
ENABLE_LIVE_CONNECTORS=false
ENABLE_BROWSER_SYNC=false
PLAYWRIGHT_HEADLESS=true
```

First test:

```text
/health
/api/config/status
/api/import/status
```

Then open the app:

```text
File Imports > Reload uploaded files
```

Only after file imports work, optionally enable current-day live sync:

```env
ENABLE_LIVE_CONNECTORS=true
```

If using Playwright later:

```text
Build Command: npm install && npx playwright install chromium
```
