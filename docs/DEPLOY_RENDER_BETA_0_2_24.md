# Deploy Beta 0.2.24 on Render

Use the same Render settings:

- Root Directory: `server`
- Build Command: `rm -f package-lock.json && npm install --omit=optional`
- Start Command: `node server.js`
- Health Check Path: `/health`

Expected health:

```json
{"ok":true,"service":"freda-ops-cockpit-server","version":"0.2.24"}
```

Recommended workflow:

1. Select the reporting date.
2. Click `Live POS only` for the selected date.
3. Click `Sync current + last days` to fetch hourly benchmarks for WTD, same day last week and 4-week average.
4. Check Hourly Analysis.
