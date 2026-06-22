# Beta 0.2.10 changelog

## Fixes

1. Added explicit reporting date selector to the UI.
2. POS ticket sync sends the selected reporting date to the backend.
3. POS parser rejects unsafe daily parses:
   - too many rows for one store/day,
   - implausibly high store/day sales,
   - implausibly high AOV.
4. Text fallback parser is stricter and only accepts lines that start with an explicit ticket timestamp.
5. Table parser only accepts tables with date, receipt, product, quantity and total columns.
6. Uber/Square stale values remain visible as reference, but not in daily totals.
7. Production shape split now uses the uploaded v94.2 cook workbook, not the old 65/35 placeholder.

## Production shape summary from uploaded v94.2 cook workbook

Weekly cook total: 20,100 units.

- RING: 11,436 (56.9%)
- BALL: 5,817 (28.9%)
- LONG: 1,411 (7.0%)
- SCROLL: 785 (3.9%)
- APPLE: 651 (3.2%)

Specials Total uses mixed allocation:

- 55% RING
- 30% BALL
- 5% LONG
- 5% SCROLL
- 5% APPLE
