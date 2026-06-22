import { parseWhatsappUpload } from '../whatsappParser.js';

export function syncWhatsappUpload(file) {
  const parsed = parseWhatsappUpload(file);
  if (!parsed.ok) return { ok: false, status: 'failed', errors: [parsed.error || 'WhatsApp upload could not be parsed.'], parsed };
  return {
    ok: true,
    status: 'success',
    source: 'WhatsApp export parser',
    capturedAt: new Date().toISOString(),
    summary: parsed,
    actions: parsed.actions || [],
    warnings: parsed.warnings || [],
    notes: 'Phase 1 parser supports exported .txt/.zip stock, sold-out and leftover messages. Photo vision/OCR is staged.'
  };
}

export function whatsappDiagnostics() {
  return {
    source: 'WhatsApp export parser',
    status: 'available',
    normalWorkflow: 'Upload WhatsApp export .txt/.zip for Phase 1. Cloud API and photo OCR are staged for 0.2.14.',
    parsedSignals: ['sell-out time', 'leftover notes', 'stock usage words', 'store names', 'urgent manager actions']
  };
}
