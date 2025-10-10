"use client"

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function HtmlLangSetter() {
  const { language } = useLanguage()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  return null
}


