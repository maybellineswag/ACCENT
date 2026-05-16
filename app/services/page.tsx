"use client"

import React from "react"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Monitor, Palette, Share2, TrendingUp, Bot, PhoneCall } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { useTranslations } from "@/hooks/useTranslations"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ServicesPage() {
    const { translations, loading } = useTranslations()
    const { language } = useLanguage()

    if (loading || !translations || !translations.services) return null

    const t = translations.services

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 z-0 w-full h-full">
                <Image
                    src="/accentbackground.png?v=3"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                    aria-hidden="true"
                />
            </div>


            <main className="relative z-10 pt-32 sm:pt-48 pb-24 px-4 sm:px-2 lg:px-4 max-w-7xl mx-auto">
                <div className="w-full px-2 sm:container sm:mx-auto sm:px-6 relative z-10">

                    {/* Header Hierarchy - Exact Match with AI Automations page */}
                    <div className="flex gap-4 pb-8 items-start justify-start flex-col mb-20">
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
                                        <BreadcrumbPage className="text-black font-semibold text-xs tracking-widest uppercase">
                                            {translations.common.breadcrumbs.services}
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </motion.div>

                        <div className="flex gap-3 flex-col items-start max-w-4xl">
                            <h1 className="text-[32px] sm:text-5xl md:text-6xl tracking-tight sm:tracking-tighter text-left font-semibold leading-tight text-black max-w-[800px]">
                                {t.subtitlePart1} <br />
                                <span className="text-gradient-blobs">{t.subtitlePart2}</span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-2xl leading-relaxed tracking-tight text-neutral-500 max-w-2xl text-left font-medium mb-8">
                                {t.description}
                            </p>
                        </div>

                        {/* Main CTA Buttons - Exact match with AI automations page */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-3 overflow-visible">
                            <GradientButton asChild className="relative z-50 shadow-lg hover:shadow-xl px-4 sm:px-9 w-full sm:w-auto border-none">
                                <a href="https://t.me/maybellineswag" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto">
                                    <span className={cn(
                                        "font-medium tracking-normal text-black text-left",
                                        language === 'en' ? "text-[14px] sm:text-sm" : "text-[13px] sm:text-sm"
                                    )}>
                                        {t.cta}
                                    </span>
                                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
                                </a>
                            </GradientButton>

                            <a
                                href="https://cal.com/accent/start"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-sm font-medium tracking-normal text-black hover:opacity-70 transition-opacity whitespace-nowrap flex-shrink-0 px-2 rounded-[11px]"
                            >
                                <PhoneCall className="w-4 h-4" />
                                <span>{translations?.common?.bookCall || "Book a call"}</span>
                            </a>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                        {[
                            {
                                icon: <Monitor className="w-8 h-8" />,
                                title: t.features.webDesign.title,
                                desc: t.features.webDesign.desc,
                            },
                            {
                                icon: <Palette className="w-8 h-8" />,
                                title: t.features.branding.title,
                                desc: t.features.branding.desc,
                            },
                            {
                                icon: <Share2 className="w-8 h-8" />,
                                title: t.features.socialMedia.title,
                                desc: t.features.socialMedia.desc,
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: t.features.marketing.title,
                                desc: t.features.marketing.desc,
                            },
                            {
                                icon: <Bot className="w-8 h-8" />,
                                title: t.features.aiAutomations.title,
                                desc: t.features.aiAutomations.desc,
                            },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                className="bg-white/25 backdrop-blur-md rounded-2xl border border-white/20 p-10 flex flex-col items-start gap-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center text-black">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-black tracking-tight mb-4">{service.title}</h3>
                                    <p className="text-neutral-600 font-medium leading-relaxed">{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Final CTA - Exact match with AI automations page */}
                    <motion.section
                        className="py-24 border-t border-black/5 flex flex-col items-start gap-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="max-w-4xl">
                            <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-black tracking-tighter leading-[1.1] mb-8">
                                {t.cta_section?.titlePart1} <br />
                                <span className="text-gradient-blobs">{t.cta_section?.titlePart2}</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-2xl leading-relaxed tracking-tight text-neutral-500 max-w-2xl font-medium mb-12">
                                {t.cta_section?.subtitle}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 overflow-visible">
                            <GradientButton asChild className="relative z-50 shadow-lg hover:shadow-xl px-4 sm:px-9 w-full sm:w-auto border-none">
                                <a href="https://t.me/maybellineswag" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto">
                                    <span className={cn(
                                        "font-medium tracking-normal text-black text-left",
                                        language === 'en' ? "text-[14px] sm:text-sm" : "text-[13px] sm:text-sm"
                                    )}>
                                        {t.cta_section?.button}
                                    </span>
                                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
                                </a>
                            </GradientButton>

                            <a
                                href="https://cal.com/accent/start"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-sm font-medium tracking-normal text-black hover:opacity-70 transition-opacity whitespace-nowrap flex-shrink-0 px-2 rounded-[11px]"
                            >
                                <PhoneCall className="w-4 h-4" />
                                <span>{translations?.common?.bookCall || "Book a call"}</span>
                            </a>
                        </div>
                    </motion.section>
                </div>
            </main>

            <Footer />
        </div>
    )
}
