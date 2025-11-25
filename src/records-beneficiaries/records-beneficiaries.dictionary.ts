export const actionMessages: Record<string, string> = {
  'POST: AffiliatesController.createOrUpdateDocumentt': `{message} por {name}.`,

  'POST: AffiliatesController.createOrUpdateFileDossier':
    '{message} por {name}.',

  'DELETE: AffiliatesController.deleteFileDossier': '{message} por {name}.',

  'POST: AffiliatesController.documentsAnalysis':
    '{name} realizó el análisis de documentos.',

  'POST: AffiliatesController.documentsImports': '{message} por {name}.',

  'POST: PersonsController.createPersonFingerprint': '{message} por {name}.',
};

export function translateAction(
  action: string,
  user: Record<string, any> = {},
  input: Record<string, any> = {},
  output: Record<string, any> = {},
): string {
  let template = actionMessages[action];
  if (!template) {
    template = `{message} por {name}.`;
  }

  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = user?.[key] ?? output?.[key] ?? input?.params?.[key] ?? '';
    return String(value);
  });
}
