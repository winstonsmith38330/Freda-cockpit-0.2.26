# Freda Ops Cockpit - Beta 0.2.22

Lean Phase 1 prototype for L.A. Donuts / Frieda's Pies AI Operations Assistant.

## What changed in 0.2.22

Beta 0.2.22 keeps the isolated POS sync architecture from 0.2.21 and changes the POS data-source policy:

- POS daily sales, hourly sales and product mix are now **sync-first** from reporting.site.
- Uploaded POS Excel/CSV files are kept as **backup only**.
- File imports still load production files, Uber sales and Frieda/Square sales.
- WTD sales now use live POS sync first and fall back to uploaded POS hourly files only for dates not yet live-synced.
- Hourly Analysis uses live POS hourly rows first; if only daily POS total is available, it shows a daily-total notice instead of inventing hours.
- POS product mix uses reporting.site product rows first. POS Excel/history files are not treated as the main product source.

## Repo shape

Upload the unzipped contents to GitHub with this root shape:

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
Start Command: node server.js
Health Check Path: /health
```

## Import folders

```text
server/data/imports/pos/product/    optional POS backup only
server/data/imports/pos/history/    optional POS backup only / ticket history disabled by default
server/data/imports/pos/hourly/     optional POS hourly backup only
server/data/imports/uber/           Uber daily workbook
server/data/imports/friedas/        Square/Frieda item exports
server/data/imports/production/     production plan and cook sheet
```

## Main endpoints

```text
GET  /health
GET  /api/config/status
GET  /api/import/status
GET  /api/live/summary?reportingDate=YYYY-MM-DD
POST /api/import/reload
POST /api/sync/all              file-only, fast
POST /api/sync/pos/day          selected-date POS live sync
POST /api/sync/pos/backfill     sequential recent POS backfill
POST /api/sync/uber             optional Uber connector
POST /api/sync/square           optional Square API connector
POST /api/sync/whatsapp
```

## Workflow

1. Upload production, Uber and Frieda/Square files as before.
2. Use `Sync all` for fast file imports only.
3. Use `Live POS only` for the selected date.
4. Use `Sync current + last days` only when you want a 10-day sequential POS backfill.
5. Use POS Excel/CSV only as backup if reporting.site sync is unavailable.

## Security

Never commit real cookies, API tokens or `.env` files. Put credentials only in Render Environment variables.
