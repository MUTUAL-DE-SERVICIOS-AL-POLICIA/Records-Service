export const actionMessages: Record<string, string> = {
  'POST: AffiliatesController.createOrUpdateDocument':
    '{name} registró/actualizó para el afiliado con NUP {affiliateId} el documento: {message}.',

  'POST: AffiliatesController.createOrUpdateFileDossier':
    '{name} registró/actualizó para el afiliado con NUP {affiliateId} el expediente: {message}.',

  'DELETE: AffiliatesController.deleteFileDossier':
    '{name} eliminó el expediente del afiliado con NUP {affiliateId}: {message}.',

  'POST: AffiliatesController.documentsAnalysis':
    '{name} realizó el análisis de documentos.',

  'POST: AffiliatesController.documentsImports':
    '{name} realizó la importación de documentos, {message}',

  'POST: PersonsController.createPersonFingerprint':
    '{name} registró la huella digital para la persona con C.I. {identityCard}.',
};

export function translateAction(
  action: string,
  user: Record<string, any> = {},
  input: Record<string, any> = {},
  output: Record<string, any> = {},
): string {
  const template = actionMessages[action];
  if (!template) {
    return `Acción desconocida: ${action}`;
  }

  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = user?.[key] ?? output?.[key] ?? input?.params?.[key] ?? '';
    return String(value);
  });
}
