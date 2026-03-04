"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { GradientButton } from "@/components/ui/gradient-button"

export function WorkExamplesSection() {
    return (
        <section id="works" className="pt-0 pb-8 px-4 sm:px-2 lg:px-4 relative z-10 w-full">
            {/* Work Examples Content */}

            <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">

                {/* Overlapping Cards Container - removed min-w to prevent scrolling */}
                <div className="w-full relative pb-4 pt-2 h-[300px] sm:h-[400px]">
                    {/* Cards made smaller and positions adjusted to stay within container */}

                    {/* 1. Health & Beauty */}
                    <motion.div
                        className="absolute left-0 top-[4%] w-[28%] z-[5] flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-2 mb-1 pl-4">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#eca9eb] opacity-90 shadow-[0_0_8px_rgba(236,169,235,0.8)]" />
                            <span className="text-[#333] font-medium text-[15px] sm:text-[17px] tracking-tight">Health & Beauty</span>
                        </div>
                        <div className="w-full rounded-[1.2rem] sm:rounded-[1.8rem] bg-[#dadada] shadow-xl overflow-hidden aspect-[4096/2657] relative">
                            <Image src="/WEBSITES/LUMEASTUDIO.webp" alt="Health & Beauty" fill className="object-cover" />
                        </div>
                    </motion.div>

                    {/* 2. Automotive */}
                    <motion.div
                        className="absolute left-[16%] top-[24%] w-[30%] z-[15] flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-1 pl-4">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#f96f6f] opacity-90 shadow-[0_0_8px_rgba(249,111,111,0.8)]" />
                            <span className="text-[#333] font-medium text-[15px] sm:text-[17px] tracking-tight">Automotive</span>
                        </div>
                        <div className="w-full rounded-[1.2rem] sm:rounded-[1.8rem] bg-[#dadada] shadow-2xl overflow-hidden aspect-[4096/2657] relative backdrop-blur-sm">
                            <Image src="/WEBSITES/APEXMOTORS.webp" alt="Automotive" fill className="object-cover" />
                        </div>
                    </motion.div>

                    {/* 3. Food */}
                    <motion.div
                        className="absolute left-[40%] top-[0%] w-[28%] z-[10] flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-2 mb-1 pl-4">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#6a7bf6] opacity-90 shadow-[0_0_8px_rgba(106,123,246,0.8)]" />
                            <span className="text-[#333] font-medium text-[15px] sm:text-[17px] tracking-tight">Food</span>
                        </div>
                        <div className="w-full rounded-[1.2rem] sm:rounded-[1.8rem] bg-[#dadada] shadow-xl overflow-hidden aspect-[4096/2657] relative">
                            <Image src="/WEBSITES/NOVA33.webp" alt="Food" fill className="object-cover" />
                        </div>
                    </motion.div>

                    {/* 4. SAAS */}
                    <motion.div
                        className="absolute left-[60%] top-[14%] w-[32%] z-[20] flex flex-col items-end"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="w-full">
                            <div className="flex items-center gap-2 mb-1 pl-4">
                                <div className="w-[8px] h-[8px] rounded-full bg-white opacity-90 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                <span className="text-white font-medium text-[15px] sm:text-[17px] tracking-tight">SAAS</span>
                            </div>
                            <div className="w-full rounded-[1.2rem] sm:rounded-[1.8rem] bg-[#dadada] shadow-2xl overflow-hidden aspect-[4096/2657] relative">
                                <Image src="/WEBSITES/BILLO.webp" alt="SAAS" fill className="object-cover" />
                            </div>
                        </div>

                        {/* "See more examples" placed relative to this card and styled like Telegram button */}
                        <motion.div
                            className="mt-4 mr-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <Link
                                href="/selected-work"
                                className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition-opacity underline-offset-4 hover:underline"
                            >
                                <ArrowRight className="w-4 h-4" />
                                <span>see more examples</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Buttons - exact match with hero */}
                <motion.div
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4 pl-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <GradientButton asChild className="relative z-50 border-none shadow-lg hover:shadow-xl">
                        <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-4">
                            <span className="font-semibold text-[14px] leading-tight tracking-tight text-black text-left">
                                Grow revenue and maximize your business with our help
                            </span>
                            <ArrowRight className="w-6 h-6 text-black flex-shrink-0" />
                        </a>
                    </GradientButton>

                    {/* Secondary Phone CTA */}
                    <a
                        href="tel:+420773037505"
                        className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition-opacity px-2"
                    >
                        <Phone fill="currentColor" className="w-4 h-4 text-black flex-shrink-0" />
                        <span>+420 773 037 505</span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
