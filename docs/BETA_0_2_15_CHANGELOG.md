# Beta 0.2.16 Changelog

## File imports and sales logic

- Added Monday-start WTD totals from uploaded files.
- POS, Uber and Frieda's/Square are shown separately and also included in total WTD.
- Added `pos/product` import folder for product sales exports.
- Product sales exports are preferred for product volume/mix, hourly files are preferred for sales totals/hourly, ticket history is fallback/allocation context.
- Date selector now reloads imported data for the selected date.

## Hourly analysis

- Added WTD hourly average alongside same-day last week and last 4-week average.
- Uber daily totals continue to allocate across POS hourly share when available.

## Production

- Production week starts Monday.
- On Sunday, the app shows the following Monday plan for end-of-day planning.

## WhatsApp

- Parser supports common WhatsApp .txt/.zip formats.
- WhatsApp actions now fill store/title/body/owner/priority so the action table is readable.

## Deployment

- Keep `ENABLE_LIVE_CONNECTORS=false`.
- Keep `ENABLE_LIVE_FALLBACK=true` for current day + last two days.
- Keep `ENABLE_BROWSER_SYNC=false` until file imports are stable.
