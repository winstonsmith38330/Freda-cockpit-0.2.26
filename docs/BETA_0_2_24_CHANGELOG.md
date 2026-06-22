# Beta 0.2.24 Changelog

Focused hourly benchmark sync fix.

## Changes
- Keeps 0.2.23 daily/WTD POS sync-first behaviour.
- Keeps Busy Hours POST extraction for current day.
- Adds selected-date hourly benchmark sync for:
  - selected date
  - WTD previous dates from Monday to yesterday
  - same day last week
  - same weekday over the previous 4 weeks
- Adds `/api/sync/pos/benchmarks`.
- Rewires the UI "Sync current + last days" button to call benchmark sync, not blind 10-day sync.
- WTD hourly average now excludes the selected date so it does not compare today against itself.
- Keeps uploaded POS Excel/CSV as backup only.

## Why
0.2.23 correctly parsed current-day busy hours, but historical comparison columns were blank unless those dates had already been synced. 0.2.24 fetches the exact benchmark dates needed by Hourly Analysis.
