# Beta 0.2.12 changelog

## Main fixes

1. POS selected-date filter fixed.
   - Beta 0.2.11 treated the latest ticket watermark as a lower bound, so yesterday or any date with no newer tickets returned zero rows.
   - Beta 0.2.12 scans a recent backward ticket window from the latest known/discovered ticket ID and then filters exact same-day rows.
   - Use `REPORTING_SCAN_BACK_TICKETS` to widen the scan if the selected date is older than the default window.

2. Uber daily connector added.
   - New endpoint: `POST /api/live/uber/sync`.
   - Reads `UBER_COOKIE` and `UBER_STORE_*` or `UBER_URL_*` variables.
   - Accepts only same-day values and keeps WTD/old values out of Today.
   - This uses Uber Eats Manager private browser session pages, so it may still fail if Uber renders all data client-side or blocks server-side requests.

3. Square daily connector added.
   - New endpoint: `POST /api/live/square/sync`.
   - Uses the official Square Payments API via `SQUARE_ACCESS_TOKEN` and `SQUARE_LOCATION_ID`.
   - Accepts only the selected reporting date.

4. UI updates.
   - Live Sales and POS Ticket Sync tabs now include buttons for POS, Uber Today, Square Today and Refresh.
   - Connector status now shows POS, Uber and Square separately.

## Freda logic retained

- Hour-by-hour comparison against same day last week and last four same weekdays.
- Sell-out timing and planned/FOMO vs operational sell-out logic.
- Leftover and first-sell-out monitoring workflow.
- Updated ring/ball/long/scroll/apple production shape map.
- WhatsApp stock request workflow for weekly stock trips.
- Viral NZ pie/social momentum and training/hiring priorities remain visible.
