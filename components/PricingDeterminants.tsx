"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, FileText, Paintbrush, Layers, Calendar, Phone } from "lucide-react"
import Image from "next/image"
import { GradientButton } from "@/components/ui/gradient-button"
import { Card } from "@/components/ui/card"

import { useTranslations } from "@/hooks/useTranslations"

export function PricingDeterminants() {
    const { translations, loading } = useTranslations()

    if (loading || !translations) return null

    const detContents = translations.pricingPage.determinants
    const icons = [
        <FileText key="0" className="w-6 h-6" />,
        <Paintbrush key="1" className="w-6 h-6" />,
        <Layers key="2" className="w-6 h-6" />,
        <Calendar key="3" className="w-6 h-6" />
    ]

    const determinants = detContents.items.map((item: any, index: number) => ({
        ...item,
        icon: icons[index]
    }))

    return (
        <section className="pt-0 pb-12 px-4 sm:px-2 lg:px-4 relative z-10 w-full">
            <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-left mb-16"
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl sm:text-6xl font-normal text-black mb-6 tracking-tighter flex items-center gap-4">
                            <Image
                                src="/accentnewsymbol.svg"
                                alt=""
                                width={48}
                                height={48}
                                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                                aria-hidden="true"
                            />
                            <span>{detContents.title}</span>
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-2xl">
                            {detContents.description}
                        </p>
                    </motion.div>

                    {/* Creative Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {determinants.map((item: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <Card className="h-full bg-white/20 backdrop-blur-md border border-neutral-200/20 rounded-3xl p-6 hover:bg-white/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-[#8B8DD1] mb-6 group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-3 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Callout */}
                    <motion.div
                        className="text-left flex flex-col items-start gap-8 py-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="max-w-2xl space-y-4">
                            <p className="text-2xl text-black font-semibold tracking-tight">
                                {detContents.callout}
                            </p>
                            <p className="text-xl text-neutral-600 font-medium">
                                {detContents.subCallout}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
                            <GradientButton asChild className="relative z-50 border-none shadow-xl hover:shadow-2xl">
                                <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer">
                                    {detContents.ctaEstimate}
                                    <ArrowRight className="ml-2 w-6 h-6" />
                                </a>
                            </GradientButton>

                            <a
                                href="tel:+420773037505"
                                className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition-opacity px-2"
                            >
                                <Phone fill="currentColor" className="w-4 h-4 text-black flex-shrink-0" />
                                <span>+420 773 037 505</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
