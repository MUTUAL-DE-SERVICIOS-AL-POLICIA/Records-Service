export const actionMessages: Record<string, string> = {
  "GET: AppMobileController.informationLoan":
    "{fullname} obtuvo la información de sus préstamos exitosamente.",
};

export function translateAction(
  action: string,
  user: Record<string, any> = {},
  input: Record<string, any> = {},
  output: Record<string, any> = {}
): string {
  const template = actionMessages[action];
  if (!template) {
    return `Acción desconocida: ${action}`;
  }

  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value =
      user?.[key] ??
      "N/A";
    return String(value);
  });
}
