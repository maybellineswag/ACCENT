"use client"

import { Card } from "@/components/ui/card"
import { GradientButton } from "@/components/ui/gradient-button"
import { ChevronDown, Home, Globe } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import SeoHead from "@/components/SeoHead"
import Image from "next/image"
import Link from "next/link"
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import { useTranslations } from "@/hooks/useTranslations"
import { useLanguage } from "@/contexts/LanguageContext"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function FAQPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const { translations, loading } = useTranslations()
    const { language, setLanguage } = useLanguage()
    const [showLangDropdown, setShowLangDropdown] = useState(false)

    const handleLangChange = (newLang: 'cs' | 'en' | 'ru' | 'uk') => {
        setLanguage(newLang)
        setShowLangDropdown(false)
    }

    if (loading || !translations) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        )
    }

    return (
        <>
            <SeoHead />
            <div className="min-h-screen relative overflow-hidden">
                {/* Full-page background */}
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

                {/* Floating Navigation */}
                <NavBar />

                {/* Mobile Header - Logo and Globe (Matching Hero.tsx and PricingHero.tsx) */}
                <div className="sm:hidden flex items-center justify-between w-full px-4 py-4 relative z-10 transition-all duration-300">
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

                {/* FAQ Section */}
                <section className="pt-4 sm:pt-24 pb-12 px-4 sm:px-2 lg:px-4 relative z-10 w-full min-h-screen">
                    <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">
                        <div className="flex gap-4 pt-8 sm:pt-12 lg:pt-24 pb-8 items-start justify-start flex-col">
                            <motion.div
                                className="text-left mb-12 max-w-4xl"
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                {/* Breadcrumb (HOME > FAQ) */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="mb-2"
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
                                                <BreadcrumbPage className="text-black font-semibold text-xs tracking-widest uppercase">FAQ</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </motion.div>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter text-left font-semibold leading-[0.95] text-black mb-2 flex items-center gap-4">
                                    <Image
                                        src="/accentnewsymbol.svg"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                                        aria-hidden="true"
                                    />
                                    <span>{translations.faq.title}</span>
                                </h1>
                                <p className="text-xl text-neutral-600 font-normal">{translations.faq.subtitle}</p>
                            </motion.div>
                        </div>

                        <motion.div
                            className="space-y-4 max-w-4xl"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {translations.faq.questions.map((faq: any, index: number) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <Card
                                        className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden"
                                    >
                                        <button
                                            className="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-50/50 transition-colors"
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        >
                                            <h3 className="text-lg font-semibold tracking-tight text-black">{faq.question}</h3>
                                            <ChevronDown
                                                className={`w-5 h-5 text-neutral-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <div
                                            className={`px-6 faq-answer-transition ${openFaq === index ? "faq-answer-open" : "faq-answer-closed"}`}
                                            style={{
                                                maxHeight: openFaq === index ? 500 : 0,
                                                opacity: openFaq === index ? 1 : 0,
                                                transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <p className="text-neutral-600 leading-relaxed pb-6 whitespace-pre-line">{faq.answer}</p>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            className="text-left mt-12 max-w-4xl"
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <GradientButton asChild>
                                    <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer">
                                        {translations.faq.cta.button}
                                    </a>
                                </GradientButton>

                                <Link
                                    href="/"
                                    className="text-sm font-medium text-black hover:opacity-70 transition-opacity px-2"
                                >
                                    ← Back to Homepage
                                </Link>
                            </div>
                            <p className="text-black/70 mt-4 text-sm font-medium">{translations.faq.cta.note}</p>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}
