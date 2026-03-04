"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon, Home, Star, Settings, CreditCard, Shield, HelpCircle, Globe, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { GradientButton } from "@/components/ui/gradient-button"
import { useLanguage } from "@/contexts/LanguageContext"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  className?: string;
  isClinics?: boolean;
}

export function NavBar({ className, isClinics }: NavBarProps) {
  const [activeTab, setActiveTab] = useState('home')
  const [isMobile, setIsMobile] = useState(false)
  const [showLangDropdown, setShowLangDropdown] = useState(false)
  const { language, setLanguage } = useLanguage()

  const translations = {
    nav: {
      cs: {
        industries: 'Kliniky a Krása',
        works: 'Práce',
        pricing: 'Cena',
        faq: 'FAQ'
      },
      en: {
        industries: 'Clinics & Beauty',
        works: 'Works',
        pricing: 'Pricing',
        faq: 'FAQ'
      },
      ru: {
        industries: 'Клиники и Бьюти',
        works: 'Работы',
        pricing: 'Цены',
        faq: 'FAQ'
      },
      uk: {
        industries: 'Клініки та Б’юті',
        works: 'Роботи',
        pricing: 'Ціни',
        faq: 'FAQ'
      },
    },
  }

  const items: NavItem[] = [
    { name: 'industries', url: '/clinics-beauty', icon: Shield },
    { name: 'works', url: '#works', icon: Star },
    { name: 'pricing', url: '#faq', icon: CreditCard },
    { name: 'faq', url: '/faq', icon: HelpCircle },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = [
            { id: 'home', element: document.getElementById('home') },
            { id: 'works', element: document.getElementById('works') },
            { id: 'how-it-works', element: document.getElementById('how-it-works') },
            { id: 'faq', element: document.getElementById('faq') }
          ]
          let currentSection = 'home'
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i]
            if (section.element) {
              const rect = section.element.getBoundingClientRect()
              if (rect.top <= 150) {
                currentSection = section.id
                break
              }
            }
          }
          const sectionToTab: { [key: string]: string } = {
            'home': 'industries',
            'works': 'works',
            'how-it-works': 'industries',
            'faq': 'pricing'
          }
          const newActiveTab = sectionToTab[currentSection] || 'industries'
          if (newActiveTab !== activeTab) {
            setActiveTab(newActiveTab)
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeTab])

  const handleLangChange = (newLang: 'cs' | 'en' | 'ru' | 'uk') => {
    setLanguage(newLang)
    setShowLangDropdown(false)
  }

  return (
    <div className={cn("fixed top-0 left-0 z-30 pt-4 sm:pt-6 w-fit px-4 sm:px-12 pointer-events-none", className)}>
      <div className="flex items-center gap-2 sm:gap-4 backdrop-blur-md border border-neutral-200/50 p-1.5 rounded-2xl shadow-sm pointer-events-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {isClinics ? (
            <Image src="/accentnewsymbolmedical.svg" alt="Logo" width={24} height={24} className="w-6 h-6" />
          ) : (
            <Image src="/accentnewsymbol.svg" alt="Logo" width={24} height={24} className="w-6 h-6" />
          )}
        </Link>

        {/* Navigation Items */}
        <div className="hidden sm:flex items-center gap-1">
          {items.map((item) => {
            const isActive = activeTab === item.name
            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all rounded-xl",
                  isActive ? "text-black" : "text-neutral-500 hover:text-neutral-900"
                )}
              >
                {(translations.nav as any)[language][item.name] || item.name}
              </Link>
            )
          })}
        </div>

        {/* CTA & Language */}
        <div className="flex items-center gap-2 sm:gap-3 ml-2">
          <GradientButton asChild className="border-none shadow-sm h-10 px-6">
            <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Book a call <ArrowRight className="w-4 h-4" />
            </a>
          </GradientButton>

          <div
            className="relative h-10 flex items-center"
            onMouseEnter={() => setShowLangDropdown(true)}
            onMouseLeave={() => setShowLangDropdown(false)}
          >
            <button
              className="w-10 h-10 backdrop-blur-md border border-neutral-200/50 flex items-center justify-center rounded-xl shadow-sm hover:bg-neutral-200/20 transition-colors"
            >
              <Globe className="w-4 h-4 text-neutral-600" />
            </button>
            <AnimatePresence>
              {showLangDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-10 right-0 pt-2 z-50 pointer-events-auto"
                >
                  <div className="backdrop-blur-md bg-white/40 border border-neutral-200/50 rounded-2xl shadow-lg py-2 min-w-[140px] text-black overflow-hidden">
                    <button onClick={() => handleLangChange('cs')} className="w-full px-4 py-2 text-sm text-left hover:bg-black/5 flex items-center gap-3 transition-colors">Čeština</button>
                    <button onClick={() => handleLangChange('en')} className="w-full px-4 py-2 text-sm text-left hover:bg-black/5 flex items-center gap-3 transition-colors">English</button>
                    <button onClick={() => handleLangChange('ru')} className="w-full px-4 py-2 text-sm text-left hover:bg-black/5 flex items-center gap-3 transition-colors">Русский</button>
                    <button onClick={() => handleLangChange('uk')} className="w-full px-4 py-2 text-sm text-left hover:bg-black/5 flex items-center gap-3 transition-colors">Українська</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
