export const actionMessages: Record<string, string> = {
  "POST: AuthController.loginHubWeb":
    "{name} inició sesión.",
  "POST: AuthController.loginAppMobile":
    "El usuario con CI: {username}. {message}",
  "POST: AuthController.verifyPin":
    "{fullName}, {message}",
  "DELETE: AuthController.logoutAppMobile":
    "El usuario con CI: {username} cerró sesión.",
};

export function translateAction(
  action: string,
  input: Record<string, any> = {},
  output: Record<string, any> = {}
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
      "N/A";
    return String(value);
  });
}
