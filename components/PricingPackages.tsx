"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { GradientButton } from "@/components/ui/gradient-button"
import { cn } from "@/lib/utils"

const pricingPackages = [
    {
        title: "Starter Website",
        description: "Perfect for businesses launching their first professional website",
        features: [
            "Custom homepage design",
            "Up to 4–5 pages",
            "Mobile optimized layout",
            "Conversion-focused structure",
            "Fast launch timeline"
        ]
    },
    {
        title: "Business Website",
        description: "For growing companies that want a stronger digital presence",
        features: [
            "Fully custom website design",
            "Conversion-focused page structure",
            "Strategic UX & layout planning",
            "Mobile-first optimization",
            "SEO-ready foundation"
        ],
        popular: true
    },
    {
        title: "Premium Website",
        description: "For brands that want a high-end digital experience",
        features: [
            "Fully bespoke website design",
            "Advanced UX and visual direction",
            "Custom interactions & animations",
            "Scalable structure for future growth",
            "Priority delivery timeline"
        ]
    }
]

export function PricingPackages() {
    return (
        <section className="pt-0 pb-8 px-4 sm:px-2 lg:px-4 relative z-10 w-full">
            <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
                    {pricingPackages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <div className="relative h-full overflow-hidden rounded-3xl group">
                                {/* Gradient Border for Popular Card (Outline only, no fill) */}
                                {pkg.popular && (
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-[#8B8DD1] via-[#AD9CE1] to-[#EDE8F0] z-0"
                                        style={{
                                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                            WebkitMaskComposite: 'xor',
                                            maskComposite: 'exclude',
                                            padding: '2px'
                                        }}
                                    />
                                )}

                                <Card className={cn(
                                    "relative flex flex-col h-full bg-white/25 backdrop-blur-md rounded-[calc(1.5rem-1px)] p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden",
                                    pkg.popular ? "z-10 border-0 shadow-lg" : "z-0 border border-neutral-200/20"
                                )}>
                                    {pkg.popular && (
                                        <div className="absolute top-0 right-0 py-1.5 px-4 bg-gradient-to-r from-[#8B8DD1] via-[#AD9CE1] to-[#EDE8F0] rounded-bl-xl text-white text-[10px] font-bold tracking-widest uppercase shadow-sm z-20">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-black mb-3">{pkg.title}</h3>
                                        <p className="text-neutral-600 text-sm leading-relaxed font-medium">
                                            {pkg.description}
                                        </p>
                                    </div>

                                    <div className="flex-grow flex flex-col">
                                        <ul className="space-y-4 mb-8">
                                            {pkg.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-start gap-3 group/item">
                                                    <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover/item:scale-110 transition-transform">
                                                        <Check className="w-3.5 h-3.5" />
                                                    </div>
                                                    <span className="text-neutral-700 text-sm font-semibold">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <GradientButton asChild className="w-full mt-auto h-12 text-base font-semibold group/btn border-none shadow-md">
                                            <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer">
                                                Request estimate
                                                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                            </a>
                                        </GradientButton>
                                    </div>

                                    {/* Decorative Subtle Glow */}
                                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/5 blur-[80px] rounded-full group-hover:bg-purple-500/10 transition-colors pointer-events-none" />
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Price Range Note - filter out cheap clients */}
                <motion.div
                    className="mt-4 text-left"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-neutral-500 font-medium text-lg">
                        Most projects fall between <span className="text-black font-semibold">€1,500 – €4,000</span> depending on scope.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
