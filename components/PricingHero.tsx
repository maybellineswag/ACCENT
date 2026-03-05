"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Home, Globe } from "lucide-react"
import Image from "next/image"
import { GradientButton } from "@/components/ui/gradient-button"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useLanguage } from "@/contexts/LanguageContext"

interface PricingHeroProps {
    translations: any
}

export function PricingHero({ translations }: PricingHeroProps) {
    const [showLangDropdown, setShowLangDropdown] = React.useState(false);
    const { language, setLanguage } = useLanguage();

    const handleLangChange = (newLang: 'cs' | 'en' | 'ru' | 'uk') => {
        setLanguage(newLang);
        setShowLangDropdown(false);
    };

    return (
        <motion.div
            className="w-full relative"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Mobile Header - Logo and Globe (Matching Hero.tsx) */}
            <div className="sm:hidden flex items-center justify-between w-full px-4 py-4 relative z-10">
                <Image
                    src="/accentnewsymbol.svg"
                    alt="ACCENT Logo"
                    width={44}
                    height={44}
                    className="h-10 w-auto select-none"
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
                            <button onClick={() => handleLangChange('cs')} className="w-full px-4 py-2 text-sm text-left text-black hover:bg-white/20 transition-colors">Čeština</button>
                            <button onClick={() => handleLangChange('en')} className="w-full px-4 py-2 text-sm text-left text-black hover:bg-white/20 transition-colors">English</button>
                            <button onClick={() => handleLangChange('ru')} className="w-full px-4 py-2 text-sm text-left text-black hover:bg-white/20 transition-colors">Русский</button>
                            <button onClick={() => handleLangChange('uk')} className="w-full px-4 py-2 text-sm text-left text-black hover:bg-white/20 transition-colors">Українська</button>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6 relative z-10">
                <div className="flex gap-4 pt-8 sm:pt-12 lg:pt-24 pb-8 items-start justify-start flex-col">
                    {/* Breadcrumb (Replacing the Logo in the Hero area) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-2 mb-2"
                    >
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="flex items-center gap-1 text-neutral-500 hover:text-black transition-colors text-xs font-semibold tracking-widest uppercase">
                                        HOME
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-neutral-300" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-black font-semibold text-xs tracking-widest uppercase">PRICING</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </motion.div>

                    <div className="flex gap-6 flex-col items-start max-w-4xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter text-left font-semibold leading-[0.95] text-black max-w-[800px]">
                            Every great website starts with the <span className="text-gradient-blobs">right investment</span>.
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed tracking-tight text-neutral-500 max-w-2xl text-left font-medium">
                            Tell us a bit about your business and we’ll prepare a tailored estimate for your website project.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
                        <GradientButton asChild className="relative z-50 border-none shadow-lg hover:shadow-xl">
                            <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer">
                                Request estimate
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </a>
                        </GradientButton>

                        <a
                            href="https://t.me/maybellineswag"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition-opacity px-2"
                        >
                            <Image src="/tglogo.svg" alt="Telegram" width={20} height={20} className="w-5 h-5" />
                            <span>Send a Message</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
