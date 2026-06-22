# Beta 0.2.16 Changelog

## Purpose
Fast Render-safe import patch after 0.2.15 API requests returned Render HTML/502 pages during heavy import reloads.

## Changes
- File imports now prioritise POS hourly/product files and skips large POS ticket history CSVs by default.
- Large history CSVs can still be parsed deliberately with `IMPORT_PARSE_TICKET_HISTORY=true`, but this is off by default for Render.
- Added friendly frontend errors when an API route returns a Render HTML 502/503 page instead of JSON.
- Added backend async error wrappers so API routes return JSON errors instead of crashing silently.
- Kept Monday WTD totals, Uber/Frieda separate WTD totals, selected-date workflow, production Monday plan logic, and WhatsApp parser improvements from 0.2.15.

## Recommended env
```env
IMPORT_PARSE_TICKET_HISTORY=false
ENABLE_FILE_IMPORTS=true
ENABLE_LIVE_FALLBACK=true
ENABLE_LIVE_CONNECTORS=false
ENABLE_BROWSER_SYNC=false
```
