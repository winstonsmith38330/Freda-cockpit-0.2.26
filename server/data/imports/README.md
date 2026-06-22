# Beta 0.2.15 import files

Short filenames are used to avoid Windows path length errors.

Folders:
- `pos/product/`: optional product sales exports by store/date. Priority source for product volume and product mix.
- `pos/history/`: BH1.csv, BH2.csv, PN.csv, TP.csv. Ticket/product history fallback.
- `pos/hourly/`: BH.xlsx, PN.xlsx, TP.xlsx. Priority source for daily totals and hourly analysis.
- `uber/`: uber.xlsx. Uber daily sales baseline.
- `friedas/`: items_may.csv, items_jun.csv. Frieda's/Square item export baseline.
- `production/`: prod.xlsx, cook.xlsx. Production plan and baker cook sheet.

Rules:
- Monday-start WTD totals are calculated from uploaded files.
- POS hourly workbook is the main historical sales total source.
- Product sales files are preferred for product volume/mix; ticket history is secondary.
- Uber and Frieda's/Square are displayed separately and also included in total WTD.
- Production sheets start Monday. On Sunday the app shows Monday's plan for end-of-day planning.

The importer classifies files primarily by folder and store aliases in file names:
- BH = Beverly Hills
- PN = Penrith
- TP = Taren Point

Upload the unzipped folders to GitHub. Do not upload the ZIP itself.
