'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

export type Language = 'el' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('el');
  const isInitialized = useRef(false);
  const hasLoadedFromStorage = useRef(false);

  // Load language from localStorage on mount (client-side only)
  useEffect(() => {
    if (hasLoadedFromStorage.current) return;
    hasLoadedFromStorage.current = true;
    
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
    if (savedLanguage === 'el' || savedLanguage === 'en') {
      // Use setTimeout to make state update async and avoid React warning
      setTimeout(() => {
        setLanguage(savedLanguage);
        isInitialized.current = true;
      }, 0);
    } else {
      isInitialized.current = true;
    }
  }, []);

  // Save language to localStorage when it changes (but not on initial load)
  useEffect(() => {
    // Skip saving during initial mount
    if (!isInitialized.current) return;
    
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
