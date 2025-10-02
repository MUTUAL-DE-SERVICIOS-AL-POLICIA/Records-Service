export const actionMessages: Record<string, string> = {
  'POST: AppMobileController.version':
    'Ruta pública, se verificó la versión de la aplicación móvil.',
  'POST: AppMobileController.ecoComLivenessStore':
    'Inició el proceso de enrolamiento y verificación para la creación de complementos económicos para el afiliado con NUP {affiliateId}',
  'POST: AppMobileController.ecoComEconomicComplementsStore':
    'Creo complementos económicos para el afiliado con NUP {affiliateId}',
  'GET: AppMobileController.ecoComSaveIdentity':
    'Verifico la identidad del afiliado de complemento con NUP {affiliateId}',
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
    const value = user?.[key] ?? output?.[key] ?? input?.params?.[key] ?? 'N/A';
    return String(value);
  });
}
