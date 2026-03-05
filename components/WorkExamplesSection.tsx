"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { GradientButton } from "@/components/ui/gradient-button"
import { cn } from "@/lib/utils"

interface WorkExamplesSectionProps {
    industryFilter?: 'clinics-beauty';
}

export function WorkExamplesSection({ industryFilter }: WorkExamplesSectionProps = {}) {
    return (
        <section id="works" className="pt-0 pb-8 px-4 sm:px-2 lg:px-4 relative z-10 w-full">
            {/* Work Examples Content */}

            <div className="w-full px-4 sm:container sm:mx-auto sm:px-6">

                {/* Overlapping Cards Container - removed min-w to prevent scrolling */}
                <div className="w-full relative pb-4 pt-2 h-auto sm:h-[400px] flex flex-col gap-6 sm:block">
                    {/* Cards made smaller and positions adjusted to stay within container */}

                    {/* 1. Health & Beauty - LUMEASTUDIO */}
                    <motion.div
                        className={cn(
                            "relative sm:absolute flex flex-col transition-all duration-500 w-full",
                            industryFilter === "clinics-beauty"
                                ? "sm:left-0 sm:top-[0%] sm:w-[32%] z-[15]"
                                : "sm:left-0 sm:top-[4%] sm:w-[28%] z-[5]"
                        )}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-2 mb-1 pl-4">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#eca9eb] opacity-90 shadow-[0_0_8px_rgba(236,169,235,0.8)]" />
                            <span className="text-[#333] font-medium text-[15px] sm:text-[17px] tracking-normal">Health & Beauty</span>
                        </div>
                        <div className="w-full rounded-[1.2rem] sm:rounded-[1.8rem] bg-[#dadada] shadow-xl overflow-hidden aspect-[4096/2657] relative">
                            <Image src="/WEBSITES/LUMEASTUDIO.webp" alt="Health & Beauty" fill className="object-cover" />
                        </div>
                    </motion.div>

                    {/* 2. Health & Beauty - BLOOM (Conditional for Clinics) */}
                    {industryFilter === "clinics-beauty" && (
                        <motion.div
                            className="relative sm:absolute sm:left-[24%] sm:top-[24%] sm:w-[34%] w-full z-[25] flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2 mb-1 pl-4">
                                <div className="w-[8px] h-[8px] rounded-full bg-[#ffc0cb] opacity-90 shadow-[0_0_8px_rgba(255,192,203,0.8)]" />
                                <span className="text-[#333] font-medium text-[15px] sm:text-[17px] tracking-tight">Cosmetology</span>
                            </div>
                            <div className="w-full rounded-[1.2rem] sm:rounded-[1.8rem] bg-[#dadada] shadow-2xl overflow-hidden aspect-[4096/2657] relative backdrop-blur-sm">
                                <Image src="/WEBSITES/BLOOM.webp" alt="Cosmetology" fill className="object-cover" />
                            </div>
                        </motion.div>
                    )}

                    {/* 2. Automotive (Original) */}
                    {!industryFilter && (
                        <motion.div
                            className="relative sm:absolute sm:left-[16%] sm:top-[24%] sm:w-[30%] w-full z-[15] flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
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
                    )}

                    {/* 3. Health & Beauty - TRANQUIL (Conditional for Clinics) */}
                    {industryFilter === "clinics-beauty" && (
                        <motion.div
                            className="relative sm:absolute sm:left-[52%] sm:top-[2%] sm:w-[32%] w-full z-[20] flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="flex items-center gap-2 mb-1 pl-4">
                                <div className="w-[8px] h-[8px] rounded-full bg-[#b2f2bb] opacity-90 shadow-[0_0_8px_rgba(178,242,187,0.8)]" />
                                <span className="text-[#333] font-medium text-[15px] sm:text-[17px] tracking-tight">Wellness</span>
                            </div>
                            <div className="w-full rounded-[1.2rem] sm:rounded-[1.8rem] bg-[#dadada] shadow-xl overflow-hidden aspect-[4096/2657] relative">
                                <Image src="/WEBSITES/TRANQUILSTUDIO.webp" alt="Wellness" fill className="object-cover" />
                            </div>
                        </motion.div>
                    )}

                    {/* 3. Food (Original) */}
                    {!industryFilter && (
                        <motion.div
                            className="relative sm:absolute sm:left-[40%] sm:top-[0%] sm:w-[28%] w-full z-[10] flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
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
                    )}

                    {/* 4. Health & Beauty - SERENITY (Conditional for Clinics) */}
                    {industryFilter === "clinics-beauty" && (
                        <motion.div
                            className="relative sm:absolute sm:left-[72%] sm:top-[30%] sm:w-[28%] w-full z-[30] flex flex-col items-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="flex items-center gap-2 mb-1 pl-4">
                                <div className="w-[8px] h-[8px] rounded-full bg-[#eeb2f2] opacity-90 shadow-[0_0_8px_rgba(238,178,242,0.8)]" />
                                <span className="text-[#333] font-medium text-[15px] sm:text-[17px] tracking-tight">Aesthetic</span>
                            </div>
                            <div className="w-full rounded-[1.2rem] sm:rounded-[1.8rem] bg-[#dadada] shadow-2xl overflow-hidden aspect-[4096/2657] relative">
                                <Image src="/WEBSITES/SERENITY.webp" alt="Aesthetic" fill className="object-cover" />
                            </div>
                        </motion.div>
                    )}

                    {/* 4. SAAS (Original) */}
                    {!industryFilter && (
                        <motion.div
                            className="relative sm:absolute sm:left-[60%] sm:top-[14%] sm:w-[32%] w-full z-[20] flex flex-col items-end"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="w-full">
                                <div className="flex items-center gap-2 mb-1 pl-4">
                                    <div className="w-[8px] h-[8px] rounded-full bg-white opacity-90 shadow-[0_0_8_rgba(255,255,255,0.8)]" />
                                    <span className="text-[#333] sm:text-white font-medium text-[15px] sm:text-[17px] tracking-tight">SAAS</span>
                                </div>
                                <div className="w-full rounded-[1.2rem] sm:rounded-[1.8rem] bg-[#dadada] shadow-2xl overflow-hidden aspect-[4096/2657] relative">
                                    <Image src="/WEBSITES/BILLO.webp" alt="SAAS" fill className="object-cover" />
                                </div>
                            </div>

                            {/* "See more examples" placed relative to this card and styled like Telegram button */}
                            <motion.div
                                className="mt-4 sm:mr-2 w-full flex justify-start sm:justify-end"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
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
                    )}
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
                            <span className="font-semibold text-[14px] leading-tight tracking-normal text-black text-left">
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
