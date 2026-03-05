"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "@/hooks/useTranslations"
import { GradientButton } from "@/components/ui/gradient-button"
import Link from "next/link"

interface WhyAccentSectionProps {
    isClinics?: boolean;
}

const WhyAccentSection = ({ isClinics }: WhyAccentSectionProps = {}) => {
    const { translations, loading } = useTranslations()

    if (loading) return null

    const reasons = translations.whyAccent.reasons

    return (
        <section className="pt-8 pb-8 px-4 sm:px-2 lg:px-4 relative z-10 w-full">
            <div className="w-full px-4 sm:container sm:mx-auto sm:px-6">

                {/* Title */}
                <motion.div
                    className="text-left mb-12"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl sm:text-6xl font-normal text-black tracking-tighter flex items-center gap-4">
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
                        <span>{translations.whyAccent.title}</span>
                    </h2>
                </motion.div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 mb-14 max-w-4xl">
                    {reasons.map((reason: any, index: number) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        >
                            {/* ACCENT logo as large decorative watermark behind title */}
                            <div className="relative">
                                {isClinics ? (
                                    <Image
                                        src="/accentnewsymbolmedical.svg"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="absolute -top-3 -left-1 w-12 h-12 opacity-50 pointer-events-none select-none z-0"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <Image
                                        src="/accentnewsymbol.svg"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="absolute -top-3 -left-1 w-12 h-12 opacity-50 pointer-events-none select-none"
                                        aria-hidden="true"
                                    />
                                )}
                                <h3 className="text-3xl sm:text-4xl font-bold text-black tracking-tight leading-tight mb-3 relative z-10 pl-1">
                                    {reason.title}
                                </h3>
                                <p className="text-neutral-600 text-lg leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                    <GradientButton asChild className="relative z-50 border-none shadow-lg hover:shadow-xl">
                        <Link href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-4">
                            <span className="font-semibold text-[14px] leading-tight tracking-normal text-black text-left">
                                {translations.whyAccent.cta}
                            </span>
                            <ArrowRight className="w-6 h-6 text-black flex-shrink-0" />
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
                </motion.div>
            </div>
        </section>
    )
}

export default WhyAccentSection
