'use client';

import React, { createContext, useContext, useCallback } from 'react';
import { translations } from './translations';

const LOCALE = 'en' as const;

interface I18nContextType {
  locale: typeof LOCALE;
  setLocale: (locale: string) => void;
  t: (key: string) => any;
}

const I18nContext = createContext<I18nContextType>({
  locale: LOCALE,
  setLocale: () => {},
  t: () => '',
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const t = useCallback((key: string): any => {
    const keys = key?.split?.('.') ?? [];
    let result: any = translations?.[LOCALE];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) return key;
    }
    return result ?? key;
  }, []);

  return (
    <I18nContext.Provider value={{ locale: LOCALE, setLocale: () => {}, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
