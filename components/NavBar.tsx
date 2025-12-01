"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon, Home, Star, Settings, Shield, HelpCircle, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/hooks/useTranslations"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  className?: string
}

export function NavBar({ className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState('home')
  const [isMobile, setIsMobile] = useState(false)
  const [showLangDropdown, setShowLangDropdown] = useState(false)
  const { language, setLanguage } = useLanguage()

  // Working translations that were actually functioning before
  const translations = {
    nav: {
      cs: { 
        home: 'Domů', 
        reviews: 'Recenze', 
        plan: 'Plán', 
        pricing: 'Ceník', 
        guarantees: 'Záruky', 
        faq: 'FAQ' 
      },
      en: { 
        home: 'Home', 
        reviews: 'Reviews', 
        plan: 'Plan', 
        pricing: 'Pricing', 
        guarantees: 'Guarantees', 
        faq: 'FAQ' 
      },
      ru: { 
        home: 'Главная', 
        reviews: 'Отзывы', 
        plan: 'План', 
        pricing: 'Цены', 
        guarantees: 'Гарантии', 
        faq: 'FAQ' 
      },
      uk: { 
        home: 'Головна', 
        reviews: 'Відгуки', 
        plan: 'План', 
        pricing: 'Ціни', 
        guarantees: 'Гарантії', 
        faq: 'FAQ' 
      },
    },
  }

  const items: NavItem[] = [
    { name: 'home', url: '#home', icon: Home },
    { name: 'reviews', url: '#testimonials', icon: Star },
    { name: 'plan', url: '#how-it-works', icon: Settings },
    { name: 'guarantees', url: '#guarantees', icon: Shield },
    { name: 'faq', url: '#faq', icon: HelpCircle },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Automatic section detection based on scroll position - using Lenis scroll event
  useEffect(() => {
    let ticking = false
    let lastScrollY = 0
    
    // Cache section elements to avoid repeated queries
    const sectionIds = ['home', 'testimonials', 'how-it-works', 'guarantees', 'faq']
    const sectionToTab: { [key: string]: string } = {
      'home': 'home',
      'testimonials': 'reviews',
      'how-it-works': 'plan',
      'guarantees': 'guarantees',
      'faq': 'faq'
    }
    
    const handleScroll = (scrollY: number) => {
      // Only check if scroll changed significantly (every ~50px) to reduce calculations
      if (Math.abs(scrollY - lastScrollY) < 50 && ticking) {
        return
      }
      lastScrollY = scrollY
      
      if (!ticking) {
        requestAnimationFrame(() => {
          let currentSection = 'home'
          
          // Check sections in reverse order (bottom to top)
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const sectionId = sectionIds[i]
            const element = document.getElementById(sectionId)
            if (element) {
              const rect = element.getBoundingClientRect()
              if (rect.top <= 150) {
                currentSection = sectionId
                break
              }
            }
          }

          const newActiveTab = sectionToTab[currentSection] || 'home'
          if (newActiveTab !== activeTab) {
            setActiveTab(newActiveTab)
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    // Use Lenis scroll event for better performance
    const handleLenisScroll = (e: CustomEvent) => {
      if (e.detail?.scroll !== undefined) {
        handleScroll(e.detail.scroll)
      }
    }

    window.addEventListener('lenis-scroll', handleLenisScroll as EventListener, { passive: true })
    
    // Initial check
    handleScroll(window.scrollY)
    
    return () => {
      window.removeEventListener('lenis-scroll', handleLenisScroll as EventListener)
    }
  }, [activeTab])

  const handleLangChange = (newLang: 'cs' | 'en' | 'ru' | 'uk') => {
    setLanguage(newLang)
    setShowLangDropdown(false)
  }

  return (
    <div
      className={cn(
        "fixed top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 z-30 pt-4 sm:pt-6 w-full sm:w-fit pointer-events-none",
        className,
      )}
    >
      {/* Mobile Header - Logo and Globe - Hidden, moved to Hero */}
      <div className="hidden sm:hidden flex items-center justify-between w-full px-4 pointer-events-auto">
        <Image
          src="/accent_logo.svg"
          alt="ACCENT Logo"
          width={40}
          height={40}
          className="h-10 w-auto select-none text-gradient-blobs"
        />
        <div className="relative">
          <button
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            className="flex items-center justify-center w-8 h-8 hover:text-black transition-colors"
          >
            <Globe className="w-4 h-4 text-neutral-600" />
          </button>
          
          {showLangDropdown && (
            <div className="absolute top-10 right-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 rounded-xl shadow-lg py-2 min-w-[140px] z-50">
              <button
                onClick={() => handleLangChange('cs')}
                className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'cs' ? 'text-black font-medium' : 'text-black'}`}
              >
                <Image src="/flags/cz.svg" alt="Czech Flag" width={20} height={15} className="w-5 h-auto flex-shrink-0 rounded-sm" />
                <span>Čeština</span>
              </button>
              <button
                onClick={() => handleLangChange('en')}
                className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'en' ? 'text-black font-medium' : 'text-black'}`}
              >
                <Image src="/flags/us.svg" alt="US Flag" width={20} height={15} className="w-5 h-auto flex-shrink-0 rounded-sm" />
                <span>English</span>
              </button>
              <button
                onClick={() => handleLangChange('ru')}
                className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'ru' ? 'text-black font-medium' : 'text-black'}`}
              >
                <Image src="/flags/ru.svg" alt="Russian Flag" width={20} height={15} className="w-5 h-auto flex-shrink-0 rounded-sm" />
                <span>Русский</span>
              </button>
              <button
                onClick={() => handleLangChange('uk')}
                className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'uk' ? 'text-black font-medium' : 'text-black'}`}
              >
                <Image src="/flags/ua.svg" alt="Ukrainian Flag" width={20} height={15} className="w-5 h-auto flex-shrink-0 rounded-sm" />
                <span>Українська</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex items-center gap-2 sm:gap-3 bg-white/25 backdrop-blur-sm border border-neutral-200/20 py-1 px-1 rounded-[11px] shadow-lg relative pointer-events-auto">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2"
          onClick={() => {
            // Smoothly animate indicator back to home
            setActiveTab('home')
          }}
        >
          <Image
            src="/accentflower.svg"
            alt="ACCENT Flower Logo"
            width={24}
            height={24}
            className="h-5 sm:h-6 w-auto select-none"
            priority
          />
        </Link>

        {/* Navigation Items */}
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault()
                setActiveTab(item.name)
                
                // Smooth scroll to section using Lenis
                const hash = item.url
                const targetElement = document.querySelector(hash) as HTMLElement
                
                if (targetElement) {
                  const headerOffset = 80
                  const elementPosition = targetElement.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                  
                  // Get Lenis instance from window
                  const lenis = (window as any).lenis
                  if (lenis) {
                    lenis.scrollTo(offsetPosition, {
                      duration: 0.6,
                      easing: (t: number) => t, // Linear for fastest performance
                    })
                  } else {
                    // Fallback to native smooth scroll
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    })
                  }
                  
                  // Update URL
                  window.history.pushState(null, '', hash)
                }
              }}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-2 sm:px-4 py-1.5 sm:py-2 rounded-[11px] transition-colors",
                "text-neutral-600 hover:text-black",
                isActive && "text-black",
              )}
            >
              <span className="hidden md:inline">
                {item.name === 'home' ? translations.nav[language].home : 
                 item.name === 'reviews' ? translations.nav[language].reviews :
                 item.name === 'plan' ? translations.nav[language].plan :
                 item.name === 'guarantees' ? translations.nav[language].guarantees :
                 item.name === 'faq' ? translations.nav[language].faq : item.name}
              </span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  className="absolute inset-0 w-full rounded-[11px] -z-10"
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-purple-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-pink-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-purple-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}

        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 hover:text-black transition-colors ml-2 sm:ml-3"
          >
            <Globe className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-neutral-600" />
          </button>
          
          <AnimatePresence>
            {showLangDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 8, scale: 0.98, filter: "blur(6px)" }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute top-10 sm:top-12 right-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 rounded-xl shadow-lg py-2 min-w-[140px] z-50"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 1 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05, delayChildren: 0.05 }
                    },
                    exit: { opacity: 1 }
                  }}
                >
                  <motion.button
                    onClick={() => handleLangChange('cs')}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'cs' ? 'text-black font-medium' : 'text-black'}`}
                    variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 4 } }}
                  >
                    <Image src="/flags/cz.svg" alt="Czech Flag" width={20} height={15} className="w-5 h-auto flex-shrink-0 rounded-sm" />
                    <span>Čeština</span>
                  </motion.button>
                  <motion.button
                    onClick={() => handleLangChange('en')}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'en' ? 'text-black font-medium' : 'text-black'}`}
                    variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 4 } }}
                  >
                    <Image src="/flags/us.svg" alt="US Flag" width={20} height={15} className="w-5 h-auto flex-shrink-0 rounded-sm" />
                    <span>English</span>
                  </motion.button>
                  <motion.button
                    onClick={() => handleLangChange('ru')}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'ru' ? 'text-black font-medium' : 'text-black'}`}
                    variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 4 } }}
                  >
                    <Image src="/flags/ru.svg" alt="Russian Flag" width={20} height={15} className="w-5 h-auto flex-shrink-0 rounded-sm" />
                    <span>Русский</span>
                  </motion.button>
                  <motion.button
                    onClick={() => handleLangChange('uk')}
                    className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'uk' ? 'text-black font-medium' : 'text-black'}`}
                    variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 4 } }}
                  >
                    <Image src="/flags/ua.svg" alt="Ukrainian Flag" width={20} height={15} className="w-5 h-auto flex-shrink-0 rounded-sm" />
                    <span>Українська</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
