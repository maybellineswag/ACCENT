"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon, Home, Star, Settings, CreditCard, Shield, HelpCircle, Globe, ArrowRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { GradientButton } from "@/components/ui/gradient-button"
import { useTranslations } from "@/hooks/useTranslations"
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
  const { translations, loading } = useTranslations()
  const navRef = useRef<HTMLDivElement>(null)

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

  const handleLangChange = (newLang: 'cs' | 'en' | 'ru' | 'uk') => {
    setLanguage(newLang)
    setShowLangDropdown(false)
  }

  const toggleLangDropdown = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isMobile) {
      if (!showLangDropdown) setMobileMenuOpen(false)
      setShowLangDropdown(!showLangDropdown)
    }
  }

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!mobileMenuOpen) setShowLangDropdown(false)
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className={cn("fixed top-0 left-0 z-30 pt-4 sm:pt-6 w-full sm:w-fit px-4 sm:px-12 pointer-events-none", className)}>
      <div className="relative w-fit">
        {/* Main Nav Pill */}
        <div
          ref={navRef}
          className="flex items-center gap-2 sm:gap-4 backdrop-blur-md border border-neutral-200/50 p-1.5 rounded-2xl shadow-sm pointer-events-auto bg-white/40"
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
            <Image
              src={isClinics ? "/accentnewsymbolmedical.svg" : "/accentnewsymbol.svg"}
              alt="Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Link>

          {/* Navigation Items - Desktop only */}
          <div className="hidden sm:flex items-center gap-1">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all rounded-xl",
                  activeTab === item.name ? "text-black" : "text-neutral-500 hover:text-neutral-900"
                )}
              >
                {translations?.nav?.[item.name as keyof typeof translations.nav] || item.name}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-3 ml-2">
            <GradientButton asChild className="border-none shadow-sm h-10 px-4 sm:px-6 flex">
              <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] sm:text-sm whitespace-nowrap">
                {translations?.common?.bookCall || "Book a call"} <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </GradientButton>

            {/* Language Selector Trigger */}
            <div
              className="relative h-10 flex items-center"
              onMouseEnter={() => !isMobile && setShowLangDropdown(true)}
              onMouseLeave={() => !isMobile && setShowLangDropdown(false)}
            >
              <button
                onClick={toggleLangDropdown}
                className="w-10 h-10 backdrop-blur-md border border-neutral-200/50 flex items-center justify-center rounded-xl shadow-sm hover:bg-neutral-200/20 transition-colors pointer-events-auto bg-white/40"
              >
                <Globe className="w-4 h-4 text-neutral-600" />
              </button>
            </div>

            {/* Hamburger Trigger - Mobile only */}
            <div className="sm:hidden relative h-10 flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="w-10 h-10 backdrop-blur-md border border-neutral-200/50 flex items-center justify-center rounded-xl shadow-sm hover:bg-neutral-200/20 transition-colors pointer-events-auto bg-white/40"
              >
                {mobileMenuOpen ? <X className="w-4 h-4 text-neutral-600" /> : <Menu className="w-4 h-4 text-neutral-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* Floating Dropdowns - RESTACKED AS SIBLINGS TO PREVENT NESTED BLUR FAIL */}
        <AnimatePresence>
          {showLangDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              className="absolute top-14 right-12 sm:right-0 z-[100] pointer-events-auto"
            >
              <div className="glass-dropdown border border-neutral-200/50 rounded-2xl shadow-xl py-2 min-w-[140px] text-black">
                <button onClick={() => handleLangChange('cs')} className="w-full px-4 py-2.5 text-sm text-left hover:bg-black/5 transition-colors">Čeština</button>
                <button onClick={() => handleLangChange('en')} className="w-full px-4 py-2.5 text-sm text-left hover:bg-black/5 transition-colors">English</button>
                <button onClick={() => handleLangChange('ru')} className="w-full px-4 py-2.5 text-sm text-left hover:bg-black/5 transition-colors">Русский</button>
                <button onClick={() => handleLangChange('uk')} className="w-full px-4 py-2.5 text-sm text-left hover:bg-black/5 transition-colors">Українська</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              className="absolute top-14 right-0 z-[100] pointer-events-auto sm:hidden"
            >
              <div className="glass-dropdown border border-neutral-200/50 rounded-2xl shadow-xl py-3 min-w-[200px] text-black flex flex-col gap-1">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-5 py-3 text-[15px] font-medium hover:bg-black/5 transition-colors"
                  >
                    {translations?.nav?.[item.name as keyof typeof translations.nav] || item.name}
                  </Link>
                ))}
                <div className="h-[1px] bg-neutral-200/30 my-1 mx-4" />
                <a
                  href="https://cal.com/accent/start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-[15px] font-semibold text-black flex items-center justify-between hover:bg-black/5 transition-colors"
                >
                  {translations?.common?.bookCall || "Book a call"} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
