export const actionMessages: Record<string, string> = {
  'POST: AppMobileController.ecoComLivenessStore':
    'Inició el proceso de enrolamiento y verificación para la creación de complemento económico para el afiliado con NUP {affiliateId}',
  'POST: AppMobileController.ecoComEconomicComplementsStore':
    'Creó complemento económico para el afiliado con NUP {affiliateId}',
  'POST: AppMobileController.ecoComSaveIdentity':
    'Verificó la identidad del afiliado de complemento con NUP {affiliateId}',
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
