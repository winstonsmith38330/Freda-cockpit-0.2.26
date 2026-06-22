# Beta 0.2.11 changelog

## Main fix

Beta 0.2.11 changes POS synchronization from visual dashboard scraping to the same `script.php?ticketId=` JSON endpoint used by Nicolas' working Python ticket harvester.

Previous versions attempted to read `ticket_sales.php` and dashboard cards directly. That was fragile because the reporting dashboards can render tables/cards in the browser and Render may not see the final rows.

## POS ticket sync

- Uses `https://reporting.site/{store_slug}/dashboard/script.php?ticketId={id}`.
- Discovers the latest ticket ID for each store.
- Starts from known watermarks seeded from the uploaded history CSV files:
  - Beverly Hills: 282296
  - Penrith: 52333
  - Taren Point: 60157
- Fetches new tickets after the watermark.
- Filters rows to the selected reporting date before calculating POS Today.
- Persists fetched ticket rows and watermarks in `server/data/live-snapshots.json`.
- Keeps same-day hourly sales and top product calculations from ticket rows only.

## Freda feedback retained

- Hour-by-hour comparison vs same weekday last week and last 4 same weekdays.
- Sell-out timing and early sell-out detection.
- Planned FOMO sell-out separated from operational early sell-out.
- Leftover / first-sold-out framework.
- Rings vs balls production mix from uploaded v94.2 cook-shape map.
- WhatsApp stock-photo/request flow for weekly stock usage and 2-trip planning.
- Pie/social momentum and hiring/training priorities remain in the interface.

## Uber and Square

- Uber/Square are not included in Daily captured total unless their period equals the selected reporting date.
- Old WTD/MTD/sample values are shown only as reference values.
- True Uber/Square automation still needs export/API/network endpoint mapping.
