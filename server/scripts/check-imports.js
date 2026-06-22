import { syncFileImports } from '../src/importers/fileImportService.js';

const reportingDate = process.argv[2] || '2026-06-18';
const result = await syncFileImports(process.env, { reportingDate });
console.log(JSON.stringify({
  ok: result.ok,
  status: result.status,
  reportingDate: result.reportingDate,
  stores: Object.keys(result.reportingPOS || {}),
  uberStores: Object.keys(result.uberEats || {}),
  squareStores: Object.keys(result.square || {}),
  importStatus: result.importStatus?.lastImportedDates,
  warnings: result.warnings,
  errors: result.errors
}, null, 2));
