"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon, Home, Star, Settings, CreditCard, Shield, HelpCircle, Globe, ArrowRight, Menu, X } from "lucide-react"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const navRef = useRef<HTMLDivElement>(null)

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
    { name: 'works', url: '/selected-work', icon: Star },
    { name: 'pricing', url: '/pricing', icon: CreditCard },
    { name: 'faq', url: '/faq', icon: HelpCircle },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setShowLangDropdown(false)
        setMobileMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Scroll highlighting removed as per user request

  const handleLangChange = (newLang: 'cs' | 'en' | 'ru' | 'uk') => {
    setLanguage(newLang)
    setShowLangDropdown(false)
  }

  const toggleLangDropdown = () => {
    if (isMobile) {
      if (!showLangDropdown) setMobileMenuOpen(false)
      setShowLangDropdown(!showLangDropdown)
    }
  }

  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) setShowLangDropdown(false)
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className={cn("fixed top-0 left-0 z-30 pt-4 sm:pt-6 w-fit px-4 sm:px-12 pointer-events-none", className)}>
      <div
        ref={navRef}
        className="flex items-center gap-2 sm:gap-4 backdrop-blur-md border border-neutral-200/50 p-1.5 rounded-2xl shadow-sm pointer-events-auto"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
            setMobileMenuOpen(false)
            setShowLangDropdown(false)
          }}
        >
          {isClinics ? (
            <Image src="/accentnewsymbolmedical.svg" alt="Logo" width={24} height={24} className="w-6 h-6" />
          ) : (
            <Image src="/accentnewsymbol.svg" alt="Logo" width={24} height={24} className="w-6 h-6" />
          )}
        </Link>

        {/* Navigation Items - Desktop only */}
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

        {/* CTA & Language & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3 ml-2">
          <GradientButton asChild className="border-none shadow-sm h-10 px-4 sm:px-6 flex">
            <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] sm:text-sm whitespace-nowrap">
              Book a call <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </GradientButton>

          {/* Language Selector */}
          <div
            className="relative h-10 flex items-center"
            onMouseEnter={() => !isMobile && setShowLangDropdown(true)}
            onMouseLeave={() => !isMobile && setShowLangDropdown(false)}
            onClick={toggleLangDropdown}
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
                  className="absolute top-10 right-0 pt-2 z-[60] pointer-events-auto"
                >
                  <div
                    className="backdrop-blur-2xl bg-white/45 border border-neutral-200/50 rounded-2xl shadow-lg py-2 min-w-[140px] text-black overflow-hidden"
                    style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
                  >
                    <button onClick={() => handleLangChange('cs')} className="w-full px-4 py-2 text-sm text-left hover:bg-black/5 flex items-center gap-3 transition-colors">Čeština</button>
                    <button onClick={() => handleLangChange('en')} className="w-full px-4 py-2 text-sm text-left hover:bg-black/5 flex items-center gap-3 transition-colors">English</button>
                    <button onClick={() => handleLangChange('ru')} className="w-full px-4 py-2 text-sm text-left hover:bg-black/5 flex items-center gap-3 transition-colors">Русский</button>
                    <button onClick={() => handleLangChange('uk')} className="w-full px-4 py-2 text-sm text-left hover:bg-black/5 flex items-center gap-3 transition-colors">Українська</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger Menu - Mobile only */}
          <div className="sm:hidden relative h-10 flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 backdrop-blur-md border border-neutral-200/50 flex items-center justify-center rounded-xl shadow-sm hover:bg-neutral-200/20 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-neutral-600" /> : <Menu className="w-4 h-4 text-neutral-600" />}
            </button>
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-10 right-0 pt-2 z-[60] pointer-events-auto"
                >
                  <div
                    className="backdrop-blur-2xl bg-white/45 border border-neutral-200/50 rounded-2xl shadow-lg py-3 min-w-[180px] text-black overflow-hidden flex flex-col gap-1"
                    style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
                  >
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.url}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-5 py-2.5 text-sm font-medium hover:bg-black/5 transition-colors"
                      >
                        {(translations.nav as any)[language][item.name] || item.name}
                      </Link>
                    ))}
                    <div className="h-[1px] bg-neutral-200/30 my-1 mx-4" />
                    <a
                      href="https://cal.com/accent/start"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-sm font-semibold text-black flex items-center justify-between hover:bg-black/5 transition-colors"
                    >
                      Book a call <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
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
