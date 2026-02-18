export const actionMessages: Record<string, string> = {
  'POST: AppMobileController.ecoComLivenessStore':
    'Inició el proceso de enrolamiento y verificación para la creación de complemento económico para el afiliado con NUP {affiliateId}',
  'POST: AppMobileController.ecoComEconomicComplementsStore':
    'Creó complemento económico para el afiliado con NUP {affiliateId}',
  'POST: AppMobileController.ecoComSaveIdentity':
    'Verificó la identidad del afiliado de complemento con NUP {affiliateId}',
  'POST: AppMobileController.updatePerson':
    'Actualización de los siguientes datos:' +
    ' [primer nombre -> {firstName}]' +
    ' [segundo nombre -> {secondName}]' +
    ' [primer apellido -> {lastName}]' +
    ' [segundo apellido -> {mothersLastName}]' +
    ' [fecha de nacimiento -> {birthDate}]' +
    ' [email -> {email}]' +
    ' [celular -> {cellphone}]' +
    ' {message}',
};

export function translateAction(
  action: string,
  user: Record<string, any> = {},
  input: Record<string, any> = {},
  output: Record<string, any> = {},
): string {
  let template = actionMessages[action];
  if (!template) return `Acción desconocida: ${action}`;

  const getValue = (key: string) =>
    user?.[key] ??
    input?.[key] ??
    input?.params?.[key] ??
    output?.[key];

  template = template.replace(/\[([^\]]+)\]/g, (block) => {
    const keyMatch = block.match(/\{(\w+)\}/);
    if (!keyMatch) return '';

    const value = getValue(keyMatch[1]);
    if (value === undefined || value === null || value === '') {
      return '';
    }

    return block
      .replace(/\[|\]/g, '')
      .replace(/\{(\w+)\}/g, () => String(value));
  });

  template = template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = getValue(key);
    return value ?? '';
  });

  return template.replace(/\s+/g, ' ').trim();
}
