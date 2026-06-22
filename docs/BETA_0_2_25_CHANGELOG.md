# Beta 0.2.25 Changelog

Focused patch after Beta 0.2.24 showed `fetch failed` for every reporting.site page.

## Fixes

- Keeps Beta 0.2.24 sync-first POS, Busy Hours POST parsing and hourly benchmark sync behavior.
- Adds retry logic for reporting.site page fetches.
- Adds native Node `http/https` fallback when Node/undici `fetch()` fails with generic `TypeError: fetch failed`.
- Adds browser-like headers, `Connection: close`, no-cache headers and identity encoding for the fallback client.
- Preserves detailed network diagnostics with underlying error/cause codes when both fetch paths fail.

## Why

The 0.2.24 logs showed all pages failing before any HTTP status/HTML was returned. That means the failure happened at the network fetch layer, not in the parser, cookie/date validation, or WTD logic.
