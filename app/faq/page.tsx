"use client"

import { Card } from "@/components/ui/card"
import { GradientButton } from "@/components/ui/gradient-button"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import SeoHead from "@/components/SeoHead"
import Image from "next/image"
import Link from "next/link"
import { NavBar } from "@/components/NavBar"
import { useTranslations } from "@/hooks/useTranslations"

export default function FAQPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const { translations, loading } = useTranslations()

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

                {/* FAQ Section */}
                <section className="pt-32 pb-24 px-4 sm:px-2 lg:px-4 relative z-10 w-full min-h-screen">
                    <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">
                        <motion.div
                            className="text-left mb-12 max-w-4xl"
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl sm:text-6xl font-normal text-black mb-2 tracking-tighter flex items-center gap-4">
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
                <footer className="text-black pt-16 pb-8 relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="grid md:grid-cols-4 gap-8 justify-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                        >
                            <motion.div
                                className="flex flex-col items-start"
                                variants={{
                                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <Image
                                    src="/accentnewlogo.svg"
                                    alt="ACCENT Logo"
                                    width={40}
                                    height={40}
                                    className="h-10 w-auto mb-2 select-none"
                                />
                                <p className="text-neutral-600 text-sm mb-3">
                                    {translations.footer.copyright}
                                </p>
                                <p className="text-neutral-600 leading-relaxed">
                                    {translations.footer.description}
                                </p>
                            </motion.div>
                            <motion.div
                                className="flex flex-col items-start"
                                variants={{
                                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <h4 className="font-semibold mb-4">{translations.footer.services.title}</h4>
                                <ul className="space-y-2 text-neutral-600">
                                    {translations.footer.services.items.map((item: string, index: number) => (
                                        <li key={index}>
                                            <a href="#" className="hover:text-black transition-colors">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div
                                className="flex flex-col items-start"
                                variants={{
                                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <h4 className="font-semibold mb-4">{translations.footer.company.title}</h4>
                                <ul className="space-y-2 text-neutral-600">
                                    {translations.footer.company.items.map((item: string, index: number) => (
                                        <li key={index}>
                                            <a href="#" className="hover:text-black transition-colors">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div
                                className="flex flex-col items-start w-full"
                                variants={{
                                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <h4 className="font-semibold mb-4">{translations.footer.contact.title}</h4>
                                <form className="w-full flex flex-col space-y-2">
                                    <input
                                        type="email"
                                        placeholder={translations.footer.contact.email}
                                        className="px-3 py-1.5 rounded-[11px] bg-white/25 backdrop-blur-sm border border-neutral-200/20 text-black placeholder-neutral-600 focus:outline-none focus:border-[#823038] w-full text-sm"
                                    />
                                    <textarea
                                        placeholder={translations.footer.contact.message}
                                        rows={2}
                                        className="px-3 py-1.5 rounded-[11px] bg-white/25 backdrop-blur-sm border border-neutral-200/20 text-black placeholder-neutral-600 focus:outline-none focus:border-[#823038] w-full resize-none text-sm"
                                    />
                                    <GradientButton type="submit" className="w-full">
                                        {translations.footer.contact.send}
                                    </GradientButton>
                                </form>
                            </motion.div>
                        </motion.div>
                    </div>
                </footer>
            </div>
        </>
    )
}
