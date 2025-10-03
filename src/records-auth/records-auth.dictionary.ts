export const actionMessages: Record<string, string> = {
  'POST: AuthController.loginHubWeb': '{name} inició sesión en Hub Web.',
  'POST: AuthController.loginAppMobile':
    'El usuario con CI: {username}. {message} en la aplicación móvil.',
  'POST: AuthController.verifyPin': '{fullName}, {message}',
  'DELETE: AuthController.logoutAppMobile':
    '{fullname} cerró sesión en la aplicación móvil.',
};

export function translateAction(
  action: string,
  input: Record<string, any> = {},
  output: Record<string, any> = {},
): string {
  const template = actionMessages[action];
  if (!template) {
    return null;
  }

  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value =
      output?.[key] ??
      input?.[key] ??
      output?.data?.information?.[key] ??
      output?.user?.[key] ??
      input?.user?.[key] ??
      'N/A';
    return String(value);
  });
}
