# Beta 0.2.13 Changelog

## Architecture

- Added connector modules:
  - `server/src/connectors/reportingSiteConnector.js`
  - `server/src/connectors/uberConnector.js`
  - `server/src/connectors/squareConnector.js`
  - `server/src/connectors/whatsappConnector.js`
- Added services:
  - `syncService.js`
  - `operationsAnalysis.js`
  - `productionMix.js`
  - `briefingEngine.js`
- Added utilities for date parsing, secret masking and page parsing.

## POS

- POS now attempts dashboard/eod/daily/busy/product/sold-out/line-removed pages first.
- Ticket rows are optional enrichment.
- POS can return `partial_success` when KPI pages parse but ticket rows do not.
- Stale/undated POS pages are rejected from Today.

## Uber

- Added diagnostics for same-home UUID and store visible names.
- Added private Manager fetch plus optional Playwright browser fallback.
- Uber daily cards remain `not synced today` unless exact selected date is parsed.

## Square

- Added official Square Payments API sync.
- Added Orders API product-line enrichment where permissions allow.
- Added diagnostics for masked token and location discovery.

## Product / operations

- Added editable ring/ball/long/scroll/apple shape map.
- Added ball-heavy specials warning.
- Added hourly comparison scaffolding.
- Added sell-out/FOMO vs operational sell-out classification scaffolding.
- Added WhatsApp export workflow.
- Added hiring, training and store audit prototype flows.
