# Deploy Beta 0.2.25 on Render

Render settings:

- Root Directory: `server`
- Build Command: `rm -f package-lock.json && npm install --omit=optional`
- Start Command: `node server.js`
- Health Check Path: `/health`

Expected health response:

```json
{"ok":true,"service":"freda-ops-cockpit-server","version":"0.2.25"}
```

Recommended env additions:

```env
REPORTING_FETCH_RETRIES=2
POS_DAY_TIMEOUT_MS=45000
REPORTING_SYNC_TIMEOUT_MS=45000
```

Keep `REPORTING_COOKIE` as the full Cookie header and `REPORTING_PHPSESSID` as the session id only.
