"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cwo-locale");
    if (saved === "es") setLocale("es");
    setMounted(true);
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem("cwo-locale", next);
      return next;
    });
  };

  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: "en", t: en, setLocale: () => {} }}>
        {children}
      </LanguageContext.Provider>
    );
  }

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
