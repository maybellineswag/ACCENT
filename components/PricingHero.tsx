"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Globe } from "lucide-react"
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
import { cn } from "@/lib/utils"

interface PricingHeroProps {
    translations: any
}

export function PricingHero({ translations }: PricingHeroProps) {
    const { language } = useLanguage();

    return (
        <motion.div
            className="w-full relative"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="w-full px-2 sm:container sm:mx-auto sm:px-6 relative z-10">
                <div className="flex gap-4 pt-32 sm:pt-12 lg:pt-24 pb-8 items-start justify-start flex-col">
                    {/* Logo and Brand above Hero - Exact Match with Hero.tsx */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-2"
                    >
                        <Image
                            src="/accentnewlogo.svg"
                            alt="ACCENT Logo"
                            width={100}
                            height={25}
                            className="w-auto h-5 sm:h-6 opacity-90"
                        />
                    </motion.div>

                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex items-center gap-2 mb-2"
                    >
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="flex items-center gap-1 text-neutral-500 hover:text-black transition-colors text-xs font-semibold tracking-widest uppercase">
                                        {translations.common.breadcrumbs.home}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-neutral-300" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-black font-semibold text-xs tracking-widest uppercase">{translations.common.breadcrumbs.pricing}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </motion.div>

                    <div className="flex gap-3 flex-col items-start max-w-4xl">
                        <h1 className="text-[32px] sm:text-5xl md:text-6xl tracking-tight sm:tracking-tighter text-left font-semibold leading-tight text-black max-w-[800px]">
                            {translations.pricingPage.hero.titlePart1}<span className="text-gradient-blobs">{translations.pricingPage.hero.titleGradient}</span>{translations.pricingPage.hero.titlePart2}
                        </h1>

                        <p className="text-base sm:text-lg md:text-2xl leading-relaxed tracking-tight text-neutral-500 max-w-2xl text-left font-medium">
                            {translations.pricingPage.hero.description}
                        </p>
                    </div>

                    {/* Main CTA Buttons - Exact Match with Hero.tsx styling */}
                    <div className="flex flex-row flex-nowrap items-center gap-3 sm:gap-6 mt-3 overflow-visible">
                        <GradientButton asChild className="relative z-50 border-none shadow-lg hover:shadow-xl px-4 sm:px-9">
                            <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-4">
                                <span className={cn(
                                    "font-medium tracking-normal text-black text-left",
                                    language === 'en' ? "text-[14px] sm:text-sm" : "text-[13px] sm:text-sm"
                                )}>
                                    {translations.pricingPage.hero.ctaRequest}
                                </span>
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
                            </a>
                        </GradientButton>

                        <a
                            href="https://t.me/maybellineswag"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-sm font-medium tracking-normal text-black hover:opacity-70 transition-opacity whitespace-nowrap flex-shrink-0 px-2"
                        >
                            <Image src="/tglogo.svg" alt="Telegram" width={20} height={20} className="w-5 h-5" />
                            <span>{translations?.common?.sendMessage || translations.pricingPage.hero.ctaMessage}</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
