# POS ticket filtering notes

Beta 0.2.9 treats `ticket_sales.php` as the safest daily POS source because it has row-level ticket data.

The parser now follows this sequence:

1. Fetch candidate `ticket_sales.php` URLs for the store/date.
2. Parse ticket rows.
3. Keep only rows where the row itself contains an explicit date matching the target date.
4. Deduplicate rows across repeated fetches.
5. Aggregate same-day rows only.

It deliberately avoids falling back to `context.date` when the row has no explicit date. This prevents the historic-page problem where all rows were counted as today.
