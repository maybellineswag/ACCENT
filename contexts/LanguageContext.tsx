"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'cs' | 'en' | 'ru' | 'uk'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize synchronously to avoid flash/mismatch on first render
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en'
    const stored = localStorage.getItem('accent-lang')
    if (stored && ['cs', 'en', 'ru', 'uk'].includes(stored)) {
      return stored as Language
    }
    const browserLanguage = (navigator.languages?.[0] || navigator.language || 'en')
    const normalizedLanguage = browserLanguage.split('-')[0].toLowerCase()
    const supportedLanguages: Language[] = ['cs', 'en', 'ru', 'uk']
    const defaultLang: Language = supportedLanguages.includes(normalizedLanguage as Language)
      ? (normalizedLanguage as Language)
      : 'en'
    // Persist for future visits
    localStorage.setItem('accent-lang', defaultLang)
    return defaultLang
  })

  // Keep localStorage in sync when language changes (no-op on server)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('accent-lang', language)
    }
  }, [language])

  const setLanguage = (lang: Language) => {
    // Store scroll position before language change
    const currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0
    
    if (typeof window !== 'undefined') {
      // Temporarily disable scroll restoration to prevent jumping
      const originalScrollRestoration = history.scrollRestoration
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual'
      }
      
      setLanguageState(lang)
      localStorage.setItem('accent-lang', lang)
      
      // Use multiple animation frames to ensure position is maintained
      requestAnimationFrame(() => {
        window.scrollTo(0, currentScrollY)
        requestAnimationFrame(() => {
          window.scrollTo(0, currentScrollY)
          // Restore original scroll restoration behavior
          if (originalScrollRestoration) {
            history.scrollRestoration = originalScrollRestoration
          }
        })
      })
    } else {
      setLanguageState(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
