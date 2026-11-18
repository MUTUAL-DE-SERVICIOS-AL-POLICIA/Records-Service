export const actionMessages: Record<string, string> = {
  'POST: NameController.function': `{message} por {name}.`,
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
