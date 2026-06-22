# Deploy Freda Ops Cockpit Beta 0.2.13 to Render

## 1. Upload package to GitHub

Create a new GitHub repository or branch with this root shape:

```text
server/
web/
docs/
seed-data.json
.env.example
README.md
```

Do not upload real `.env` values.

## 2. Create Render web service

Use:

```text
Runtime: Node
Root Directory: server
Build Command: npm install
Start Command: npm start
Health Check Path: /health
```

If you enable Playwright browser fallback, use this build command instead:

```text
npm install && npx playwright install chromium
```

`ENABLE_BROWSER_SYNC=false` is the safest first deploy. Turn it on only after the basic server-fetch diagnostics work.

## 3. Environment variables

Copy keys from `.env.example` into Render Environment.

Important:

- `REPORTING_COOKIE` is the raw browser Cookie request header from `reporting.site`.
- `REPORTING_PHPSESSID` is only the raw session ID if used.
- `UBER_COOKIE` is the raw browser Cookie request header from `merchants.ubereats.com`.
- `SQUARE_ACCESS_TOKEN` and `SQUARE_LOCATION_ID` come from Square Developer tools, not the Square dashboard network cookies.
- Never put real secrets in GitHub.

## 4. First verification

Open:

```text
/health
/api/config/status
/api/diagnostics/connectors
/api/diagnostics/reporting
/api/diagnostics/uber
/api/diagnostics/square
```

Then run from the UI or with curl:

```text
POST /api/sync/pos
POST /api/sync/square
POST /api/sync/uber
POST /api/sync/all
```

## 5. Rollback

If 0.2.13 fails, point Render back to the 0.2.12 repo/service. No database migration is required because 0.2.13 uses prototype JSON storage.
