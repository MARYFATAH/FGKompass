import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locals/en/translation.json";
import de from "./locals/de/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: localStorage.getItem("lang") || "de",
  fallbackLng: "de",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
