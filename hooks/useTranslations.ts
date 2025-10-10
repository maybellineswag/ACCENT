import { useLanguage } from '@/contexts/LanguageContext'
import { useState, useEffect } from 'react'

export function useTranslations() {
  const { language } = useLanguage()
  const [translations, setTranslations] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    const currentLang = language

    const loadTranslations = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/translations/${currentLang}.json?t=${Date.now()}`,{ signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Failed to load translations for ${currentLang}`)
        }
        const data = await response.json()
        if (!controller.signal.aborted && currentLang === language) {
          setTranslations(data)
        }
      } catch (error) {
        console.error('Error loading translations:', error)
        // Fallback to English if translation fails
        if (!controller.signal.aborted && currentLang !== 'en') {
          try {
            const fallbackResponse = await fetch(`/translations/en.json?t=${Date.now()}`, { signal: controller.signal })
            const fallbackData = await fallbackResponse.json()
            if (!controller.signal.aborted && currentLang === language) {
              setTranslations(fallbackData)
            }
          } catch (fallbackError) {
            console.error('Error loading fallback translations:', fallbackError)
          }
        }
      } finally {
        if (!controller.signal.aborted && currentLang === language) {
          setLoading(false)
        }
      }
    }

    loadTranslations()

    return () => controller.abort()
  }, [language])

  return { translations, loading, language }
}
