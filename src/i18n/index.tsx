"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import en from "./en";
import es from "./es";

export type Locale = "en" | "es";
export type Translations = typeof en;

const dictionaries: Record<Locale, Translations> = { en, es };

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = () => {
    setLocale((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ locale, t: dictionaries[locale], setLocale: toggleLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
