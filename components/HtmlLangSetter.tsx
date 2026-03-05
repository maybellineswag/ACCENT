"use client"

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslations } from '@/hooks/useTranslations'

export function HtmlLangSetter() {
  const { language } = useLanguage()
  const { translations } = useTranslations()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language

      // Dynamic SEO updates
      if (translations?.seo) {
        document.title = translations.seo.title

        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]')
        if (metaDesc) {
          metaDesc.setAttribute('content', translations.seo.description)
        } else {
          metaDesc = document.createElement('meta')
          metaDesc.setAttribute('name', 'description')
          metaDesc.setAttribute('content', translations.seo.description)
          document.head.appendChild(metaDesc)
        }

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]')
        if (metaKeywords) {
          metaKeywords.setAttribute('content', translations.seo.keywords)
        } else {
          metaKeywords = document.createElement('meta')
          metaKeywords.setAttribute('name', 'keywords')
          metaKeywords.setAttribute('content', translations.seo.keywords)
          document.head.appendChild(metaKeywords)
        }
      }
    }
  }, [language, translations])

  return null
}
