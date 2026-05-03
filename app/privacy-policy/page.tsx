"use client"

import React from "react"
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function PrivacyPage() {
    const { translations } = useLanguage()
    const t = translations.privacyPage

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

            <NavBar />

            <main className="relative z-10 pt-32 pb-24 px-6 sm:px-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl sm:text-6xl font-semibold tracking-tighter mb-8 text-black">
                        {t.title}
                    </h1>
                    
                    <div className="space-y-8 text-neutral-600 leading-relaxed">
                        {t.sections.map((section: any, index: number) => (
                            <section key={index}>
                                <h2 className="text-xl font-semibold text-black mb-4">{section.title}</h2>
                                <p>
                                    {section.content}
                                    {section.title.includes("5") || section.title.toLowerCase().includes("contact") || section.title.toLowerCase().includes("контакт") ? (
                                        <> <a href="https://t.me/maybellineswag" className="text-black underline font-medium">Telegram</a>.</>
                                    ) : null}
                                </p>
                            </section>
                        ))}

                        <p className="text-sm pt-8 opacity-60">
                            {t.lastUpdated}
                        </p>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    )
}
