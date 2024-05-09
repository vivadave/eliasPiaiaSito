export const _t = (translations: unknown[], key: string, language: string) => {
  if (!translations) return 'No translations available';
  const translation = translations.find((t) => t.key === key);
  if (!translation) return 'No translation found';
  return translation[language] || '';
}
