"use client"

import { motion } from "framer-motion"
import { AlertCircle, TrendingDown, MousePointerClick } from "lucide-react"

interface ProblemSectionProps {
    translations: any
}

export function ProblemSection({ translations }: ProblemSectionProps) {
    // Defensive check for translation missing
    if (!translations?.problem) return null;

    const icons = [
        <AlertCircle key="alert" className="w-6 h-6 sm:w-8 sm:h-8 text-rose-500" />,
        <TrendingDown key="trending" className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />,
        <MousePointerClick key="click" className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-500" />
    ]

    return (
        <section id="problem" className="pt-8 pb-16 relative z-10 bg-neutral-50/50 sm:bg-transparent">
            <div className="w-full px-2 sm:max-w-6xl sm:mx-auto sm:px-6 lg:px-8">

                <motion.div
                    className="text-left sm:text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="flex items-start gap-1.5 sm:justify-center mb-4 w-fit sm:mx-auto">
                        <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-rose-700 text-sm font-semibold tracking-wider uppercase">
                            The Cost of Inaction
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tighter">
                        {translations.problem.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-neutral-600 font-medium">
                        {translations.problem.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
                        }
                    }}
                >
                    {translations.problem.points.map((point: any, index: number) => (
                        <motion.div
                            key={index}
                            className="flex flex-col h-full"
                            variants={{
                                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="sm:glow-on-hover sm:border-0 sm:bg-white/40 sm:backdrop-blur-md sm:border sm:border-neutral-200/30 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-2xl flex flex-col w-full h-full">
                                <div className="text-left p-6 sm:p-8 flex flex-col h-full">
                                    <div className="flex items-center justify-start mb-6 w-12 h-12 rounded-xl bg-white/50 border border-neutral-100 shadow-sm sm:mx-auto sm:justify-center">
                                        {icons[index]}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 sm:text-center leading-tight">
                                        {point.title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed text-sm sm:text-base sm:text-center mt-auto">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
