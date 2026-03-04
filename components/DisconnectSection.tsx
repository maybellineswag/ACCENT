"use client"

import { motion } from "framer-motion"
import { CheckCircle2, XCircle } from "lucide-react"

interface DisconnectSectionProps {
    translations: any
}

export function DisconnectSection({ translations }: DisconnectSectionProps) {
    if (!translations?.disconnect) return null

    return (
        <section id="disconnect" className="pt-16 pb-24 relative z-10">
            <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">
                <div className="flex gap-4 py-8 items-start justify-start flex-col">

                    {/* Small tag / Title */}
                    <motion.div
                        className="flex items-start gap-1.5 justify-start mb-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="w-1.5 h-1.5 bg-[#8B8DD1] rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-[#8B8DD1] text-sm font-semibold tracking-wider uppercase">
                            {translations.disconnect.title}
                        </span>
                    </motion.div>

                    {/* Left ALigned Non-Card Flow */}
                    <div className="w-full max-w-4xl flex flex-col pt-4">

                        {/* Headers */}
                        <div className="hidden sm:flex items-center text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4 px-2">
                            <div className="flex-1">{translations.disconnect.table.businessHeader}</div>
                            <div className="w-12"></div>
                            <div className="flex-1">{translations.disconnect.table.websiteHeader}</div>
                        </div>

                        {/* List Items */}
                        <div className="flex flex-col gap-2">
                            {translations.disconnect.table.rows.map((row: string[], idx: number) => (
                                <motion.div
                                    key={idx}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 rounded-2xl hover:bg-black/[0.02] transition-colors border border-transparent hover:border-black/[0.05] group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                                >
                                    {/* Left: What it should be */}
                                    <div className="flex-1 flex items-center gap-4 mb-4 sm:mb-0">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-black" />
                                        </div>
                                        <span className="text-xl sm:text-2xl font-bold text-black tracking-tight">{row[0]}</span>
                                    </div>

                                    {/* Center: Subtle vs */}
                                    <div className="hidden sm:flex w-12 items-center justify-center text-neutral-300 font-medium italic text-sm">
                                        vs
                                    </div>

                                    {/* Right: What it actually is */}
                                    <div className="flex-1 flex items-center gap-4 sm:pl-4">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-50 flex-shrink-0">
                                            <XCircle className="w-4 h-4 text-neutral-400" />
                                        </div>
                                        <span className="text-lg sm:text-xl font-medium text-neutral-400 line-through decoration-neutral-300 decoration-1">{row[1]}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Footer - Punchline & Cost */}
                    <motion.div
                        className="mt-16 w-full max-w-4xl space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
                            {translations.disconnect.punchline1}
                            <br className="hidden sm:block" />
                            <span className="text-neutral-400"> {translations.disconnect.punchline2}</span>
                        </h3>
                        <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-50 to-transparent border-l-4 border-red-500 rounded-r-2xl">
                            <span className="text-xl sm:text-2xl font-bold text-red-600">
                                {translations.disconnect.cost}
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
