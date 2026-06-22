# Beta 0.2.16 Changelog

## Main change

0.2.16 adds a file-first data layer. Instead of trying to live-scrape all historical ticket and sales data, the app reads uploaded CSV/XLSX files from GitHub:

```text
server/data/imports/pos/history
server/data/imports/pos/hourly
server/data/imports/uber
server/data/imports/friedas
server/data/imports/production
```

## Source priority

1. Uploaded POS history/product/ticket CSVs for product mix and ticket/product volume.
2. Uploaded POS hourly workbooks for daily/hourly sales totals and last-week / 4-week comparisons.
3. Uploaded Uber workbook for daily Uber totals.
4. Uploaded Square/Frieda item CSV exports for pies sales and product mix.
5. Uploaded production and cook sheets for the Production page.
6. Live connectors only for current day or dates after the latest uploaded file.

## Operational rule

The app no longer tries to live-sync all YTD history. Historical files become the baseline. Current-day live sync is optional and controlled by:

```env
ENABLE_LIVE_CONNECTORS=false
```

Turn it on later only after imports are working.

## New endpoints

```text
GET  /api/import/status
POST /api/import/reload
POST /api/sync/imports
```

## Frontend

Added a new **File Imports** tab showing:

- exact GitHub folders,
- file list,
- last imported dates,
- source policy,
- reload button.

## Production

Production page now reads uploaded production and cook sheet workbooks when present, including PLAN_INPUTS, COOK_INPUTS and SHAPE_CHECK.


## Upload hotfix
- Split Beverly Hills history CSV into two files below GitHub browser upload's 25MB single-file limit.
- Importer continues to load all CSV files in `server/data/imports/pos/history/`, so the split files aggregate normally.
