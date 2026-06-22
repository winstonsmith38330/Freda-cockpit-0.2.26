# Beta 0.2.18 Changelog

## Purpose
Fix the hourly analysis and recent fallback issues found after the reporting.site cookie connection started working.

## Fixes
- Sanitises live reporting.site hourly rows so dashboard chrome/date text cannot become fake midnight or early-morning sales.
- Accepts only trading hours 06:00-23:00 for parsed live POS hourly rows.
- Rejects live hourly rows if their total is implausible compared with the parsed daily revenue card.
- Tightens generic table parsing; no more guessing hourly values from arbitrary page tables.
- Adds locale-aware number parsing for Australian/US and French/European formats such as `1,234.56`, `1 234,56`, and `1.234,56`.
- Ensures Hourly Analysis displays same-day last week, WTD average and 4-week average even when the selected day does not yet have current-day POS hourly rows.
- Skips Frieda's Pies in POS/Uber hourly analysis; Frieda remains Square/Frieda item CSV only.
- Includes the latest June Frieda/Square CSV export and latest Uber workbook supplied by Nicolas.
- Removes the May Frieda CSV from the package so June-only Frieda data is used.
- Extends recent live fallback default window from 2 days to 10 days.
- Sets default live fallback sources to POS only; Uber and Frieda are imported from files unless explicitly synced.

## Deployment
Keep Render settings:
- Root Directory: `server`
- Build Command: `rm -f package-lock.json && npm install --omit=optional`
- Start Command: `node server.js`
- Health Check Path: `/health`
