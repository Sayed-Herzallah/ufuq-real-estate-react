import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/content";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("ar");
  const t = translations[lang];

  // Sync <html> dir + <body> class for CSS hooks
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir  = t.dir;
    document.body.classList.remove("lang-ar", "lang-en");
    document.body.classList.add(`lang-${lang}`);
  }, [lang, t.dir]);

  const toggle = () => setLang(prev => prev === "ar" ? "en" : "ar");

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
