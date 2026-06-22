import { round2 } from '../utils/safe.js';

export const DEFAULT_SHAPE_MAP = [
  ['Homer', 1, 0, 0, 0, 0], ['Glaze', 1, 0, 0, 0, 0], ['Choc', 1, 0, 0, 0, 0], ['Cinnamon', 1, 0, 0, 0, 0],
  ['Caramel', 1, 0, 0, 0, 0], ['Fairy', 1, 0, 0, 0, 0], ['Passion', 1, 0, 0, 0, 0], ['Pineapple', 1, 0, 0, 0, 0], ['M&M', 1, 0, 0, 0, 0],
  ['Nutella', 0, 1, 0, 0, 0], ['Biscoff Cream', 0, 1, 0, 0, 0], ['Oreo', 0, 1, 0, 0, 0], ['Brulee', 0, 1, 0, 0, 0],
  ['Strawberry Nutella', 0, 1, 0, 0, 0], ['Nutella Biscoff', 0, 1, 0, 0, 0], ['Vanilla Slice', 0, 1, 0, 0, 0], ['Boston', 0, 1, 0, 0, 0], ['Raspberry', 0, 1, 0, 0, 0], ['Banana', 0, 1, 0, 0, 0],
  ['Cream Finger Bun', 0, 0, 1, 0, 0], ['Eclairs', 0, 0, 1, 0, 0], ['Scroll', 0, 0, 0, 1, 0], ['Apple', 0, 0, 0, 0, 1],
  ['Specials Total', 0.55, 0.30, 0.05, 0.05, 0.05], ['Unknown Special', 0.25, 0.65, 0.03, 0.04, 0.03]
].map(([product, ring, ball, long, scroll, apple]) => ({ product, ring, ball, long, scroll, apple }));

export function normaliseShapeMap(shapeMap = DEFAULT_SHAPE_MAP) {
  return (shapeMap || []).map(row => ({
    product: row.product || row.name || 'Unknown',
    ring: pct(row.ring ?? row.RING),
    ball: pct(row.ball ?? row.BALL),
    long: pct(row.long ?? row.LONG),
    scroll: pct(row.scroll ?? row.SCROLL),
    apple: pct(row.apple ?? row.APPLE)
  }));
}

export function analyseProductionMix(live = {}) {
  const map = normaliseShapeMap(live.productionShapeMap || live.productRules?.shapeMap || DEFAULT_SHAPE_MAP);
  const salesRows = Object.values(live.reportingPOS || {}).flatMap(store => (store.productRows || []).map(row => ({ ...row, store: store.store })));
  const plan = live.productionPlan || {};
  const plannedCookTotals = plan.shapeTotals || {};
  const selectedCookRows = plan.selectedCookRows || [];
  const selectedProductRows = plan.selectedProductRows || [];
  const totals = { ring: 0, ball: 0, long: 0, scroll: 0, apple: 0, unknown: 0 };
  const drivers = [];
  for (const row of salesRows) {
    const qty = Number(row.qty) || 0;
    const match = findShapeMatch(row.product, map);
    if (!match) {
      totals.unknown += qty;
      drivers.push({ product: row.product, qty, shape: 'unknown', store: row.store });
      continue;
    }
    for (const shape of ['ring', 'ball', 'long', 'scroll', 'apple']) totals[shape] += qty * (Number(match[shape]) || 0);
    drivers.push({ product: row.product, qty, store: row.store, ring: round2(qty * match.ring), ball: round2(qty * match.ball), long: round2(qty * match.long), scroll: round2(qty * match.scroll), apple: round2(qty * match.apple) });
  }
  const ballShare = sumShapes(totals) ? round2(totals.ball / sumShapes(totals)) : null;
  const warnings = [];
  if (ballShare != null && ballShare >= 0.45) warnings.push('Ball-heavy product mix. Specials/fills may need more balls than old cook sheet assumptions.');
  if (totals.unknown > 0) warnings.push('Some sold products do not match the shape map. Categorise specials/unknowns before production planning.');
  return {
    shapeMap: map,
    totals: Object.fromEntries(Object.entries(totals).map(([k, v]) => [k, round2(v)])),
    ballShare,
    warnings: [...warnings, ...(plan.warnings || [])],
    drivers: drivers.sort((a, b) => (b.qty || 0) - (a.qty || 0)).slice(0, 30),
    importedPlan: {
      source: plan.source || 'none',
      weekStart: plan.weekStart || null,
      weekEnd: plan.weekEnd || null,
      storeTotals: plan.storeTotals || {},
      dayTotals: plan.dayTotals || {},
      shapeTotals: plannedCookTotals,
      selectedCookRows,
      selectedProductRows: selectedProductRows.slice ? selectedProductRows.slice(0, 120) : []
    }
  };
}

function pct(v) {
  const n = Number(v || 0);
  if (!Number.isFinite(n)) return 0;
  return n > 1 ? n / 100 : n;
}

function findShapeMatch(product = '', map = []) {
  const p = String(product || '').toLowerCase();
  let match = map.find(row => p === String(row.product || '').toLowerCase());
  if (match) return match;
  match = map.find(row => p.includes(String(row.product || '').toLowerCase()) && String(row.product || '').length > 2);
  if (match) return match;
  if (/special|limited|weekly|filled/i.test(product)) return map.find(row => /unknown special|specials total/i.test(row.product));
  return null;
}
function sumShapes(t) { return (t.ring || 0) + (t.ball || 0) + (t.long || 0) + (t.scroll || 0) + (t.apple || 0); }
