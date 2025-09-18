import { useLanguage } from '@/contexts/LanguageContext'
import { useState, useEffect } from 'react'

export function useTranslations() {
  const { language } = useLanguage()
  const [translations, setTranslations] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/translations/${language}.json`)
        if (!response.ok) {
          throw new Error(`Failed to load translations for ${language}`)
        }
        const data = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error('Error loading translations:', error)
        // Fallback to English if translation fails
        if (language !== 'en') {
          try {
            const fallbackResponse = await fetch('/translations/en.json')
            const fallbackData = await fallbackResponse.json()
            setTranslations(fallbackData)
          } catch (fallbackError) {
            console.error('Error loading fallback translations:', fallbackError)
          }
        }
      } finally {
        setLoading(false)
      }
    }

    loadTranslations()
  }, [language])

  return { translations, loading, language }
}
