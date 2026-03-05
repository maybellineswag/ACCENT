"use strict"

import React from "react"
import { motion } from "framer-motion"
import { Clock, CheckCircle2, Layout, Zap } from "lucide-react"
import { useTranslations } from "@/hooks/useTranslations"
import { GradientButton } from "@/components/ui/gradient-button"
import Link from "next/link"
import Image from "next/image"

interface HowWeWorkSectionProps {
    isClinics?: boolean;
}

const HowWeWorkSection = ({ isClinics }: HowWeWorkSectionProps = {}) => {
    const { translations, loading } = useTranslations()

    if (loading) return null

    // We can reuse the steps from howItWorks but adapt them if needed
    // For now, let's use the content from step1, step2, step3
    const steps = [
        {
            number: "01",
            title: translations.howItWorks.step1.subtitle,
            duration: translations.howItWorks.step1.duration,
            description: translations.howItWorks.step1.description,
            icon: <Layout className="w-6 h-6" />
        },
        {
            number: "02",
            title: translations.howItWorks.step2.subtitle,
            duration: translations.howItWorks.step2.duration,
            description: translations.howItWorks.step2.description,
            icon: <Zap className="w-6 h-6" />
        },
        {
            number: "03",
            title: translations.howItWorks.step3.subtitle,
            duration: translations.howItWorks.step3.duration,
            description: translations.howItWorks.step3.description,
            icon: <CheckCircle2 className="w-6 h-6" />
        }
    ]

    return (
        <section id="how-it-works" className="pt-8 pb-8 px-4 sm:px-2 lg:px-4 relative z-10 overflow-hidden w-full">
            <div className="w-full px-2 sm:container sm:mx-auto sm:px-6">
                <motion.div
                    className="text-left mb-10"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl sm:text-6xl font-normal text-black mb-2 tracking-tighter flex items-center gap-4">
                        {isClinics ? (
                            <Image
                                src="/accentnewsymbolmedical.svg"
                                alt=""
                                width={48}
                                height={48}
                                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                                aria-hidden="true"
                            />
                        ) : (
                            <Image
                                src="/accentnewsymbol.svg"
                                alt=""
                                width={48}
                                height={48}
                                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                                aria-hidden="true"
                            />
                        )}
                        <span>{translations.howItWorks.title}</span>
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-2xl">
                        {translations.howItWorks.description}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-16 relative max-w-5xl">
                    {/* Connection Lines (Desktop) - removed as it might interfere with left alignment aesthetic or look odd if not centered */}
                    {/* <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-neutral-100 -translate-y-1/2 z-0"></div> */}

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative z-10"
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                        >
                            <div className="group h-full flex flex-col rounded-3xl bg-transparent transition-all duration-500">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 rounded-2xl backdrop-blur-md border border-neutral-200/50 shadow-sm flex items-center justify-center text-[var(--accent-color)] transition-all duration-500">
                                        {step.icon}
                                    </div>
                                    <span className="text-4xl font-bold text-black transition-colors duration-500">
                                        {step.number}
                                    </span>
                                </div>

                                <div className="space-y-4 flex-1">
                                    <div className="flex items-center gap-2 text-[var(--accent-color)] font-medium text-sm">
                                        <Clock className="w-4 h-4" />
                                        {step.duration}
                                    </div>
                                    <h3 className="text-2xl font-bold text-black tracking-tight leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed whitespace-pre-wrap">
                                        {step.description}
                                    </p>
                                </div>


                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-14 text-left max-w-4xl"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <GradientButton asChild className="border-none shadow-lg">
                            <Link href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer">
                                {translations.pricing.modernWebsite.cta || "Book a free consultation"}
                            </Link>
                        </GradientButton>

                        <a
                            href="https://t.me/maybellineswag"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition-opacity px-2"
                        >
                            <Image src="/tglogo.svg" alt="Telegram" width={20} height={20} className="w-5 h-5 flex-shrink-0" />
                            <span>Send a Message</span>
                        </a>
                    </div>
                    <p className="text-black/70 mt-4 text-sm font-medium">{translations.howItWorks.footerNote}</p>
                </motion.div>
            </div>
        </section>
    )
}

export default HowWeWorkSection
