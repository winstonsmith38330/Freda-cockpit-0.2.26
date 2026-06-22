export function buildBriefing(live = {}, analysis = {}) {
  const date = live.reportingDate || analysis.reportingDate;
  const red = (analysis.storeStatus || []).filter(s => s.status === 'Red');
  const amber = (analysis.storeStatus || []).filter(s => s.status === 'Amber');
  const priorities = [];
  if (red.length) priorities.push(`Fix data/sync gaps first: ${red.map(s => s.store).join(', ')}.`);
  if (amber.length) priorities.push(`Review amber stores: ${amber.map(s => s.store).join(', ')}.`);
  priorities.push('Hiring and training are the biggest operational focus. Do not let routine follow-up route back to Freda.');
  priorities.push('Watch ball-heavy specials and filled donut demand before the next peak.');
  return {
    title: `7am briefing for ${date}`,
    statusLine: red.length ? 'Red: data gaps need action before judging performance.' : amber.length ? 'Amber: sales live, but some external sources are not synced.' : 'Green: all primary sources synced.',
    storeStatus: analysis.storeStatus || [],
    priorities: priorities.slice(0, 5),
    actions: (analysis.openActions || []).slice(0, 6),
    generatedAt: new Date().toISOString()
  };
}
