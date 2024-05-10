import { w as writable } from "./index.js";
const _t = (translations, key, language) => {
  if (!translations)
    return "No translations available";
  const translation = translations.find((t) => t.key === key);
  if (!translation)
    return "No translation found";
  return translation[language] || "";
};
const languageStore = writable();
export {
  _t as _,
  languageStore as l
};
