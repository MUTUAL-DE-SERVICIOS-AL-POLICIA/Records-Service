export const actionMessages: Record<string, string> = {
  'POST: KioskController.saveDataKioskAuth':
    'Se registró record del kiosko de la persona con personId: {person_id}',

  'POST: KioskController.uploadPhoto':
    'Se guardo la foto de la persona con personId: {personId}',
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
