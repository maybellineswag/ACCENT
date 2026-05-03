"use client"

import React from "react"
import { motion } from "framer-motion"
import { Zap, Bot, MessageSquare, ArrowRight, Workflow, PhoneCall } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { cn } from "@/lib/utils"
import { useTranslations } from "@/hooks/useTranslations"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"
import Link from "next/link"

export function AiSection() {
    const { translations, loading } = useTranslations()
    const { language } = useLanguage()

    if (loading || !translations || !translations.ai) return null

    const t = translations.ai

    return (
        <section id="ai" className="py-12 sm:py-24 px-4 sm:px-2 lg:px-4 relative z-10 w-full overflow-hidden">
            <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">
                
                {/* Header Section - Exact Match with Agency Standard */}
                <motion.div
                    className="text-left mb-12"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl sm:text-6xl font-normal text-black tracking-tighter flex items-center gap-4">
                        <Image
                            src="/accentnewsymbol.svg"
                            alt=""
                            width={48}
                            height={48}
                            className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                            aria-hidden="true"
                        />
                        {t.subtitlePart1}
                        <span className="text-gradient-blobs">{t.subtitlePart2}</span>
                    </h2>
                </motion.div>

                {/* Clean 3-Column Grid - Typographic Focus */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            icon: <MessageSquare className="w-6 h-6" />,
                            title: t.features.leadGen.title,
                            desc: t.features.leadGen.desc
                        },
                        {
                            icon: <Workflow className="w-6 h-6" />,
                            title: t.features.workflows.title,
                            desc: t.features.workflows.desc
                        },
                        {
                            icon: <Bot className="w-6 h-6" />,
                            title: t.features.custom.title,
                            desc: t.features.custom.desc
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            className="bg-white/25 backdrop-blur-md rounded-2xl border border-white/20 p-10 flex flex-col items-start gap-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center text-black">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black tracking-tight mb-4">{feature.title}</h3>
                                <p className="text-neutral-600 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Buttons - EXACT MATCH WITH HERO.TSX */}
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

                    <Link
                        href="/ai-automations"
                        className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-sm font-medium tracking-normal text-black hover:opacity-70 transition-opacity whitespace-nowrap flex-shrink-0 px-2 rounded-[11px]"
                    >
                        <Zap className="w-4 h-4" />
                        <span>Explore Technicals</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
