"use client"

import React from "react"
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import { PricingHero } from "@/components/PricingHero"
import Image from "next/image"
import { useTranslations } from "@/hooks/useTranslations"
import { motion } from "framer-motion"
import SeoHead from "@/components/SeoHead"
import { GradientButton } from "@/components/ui/gradient-button"
import { ArrowRight } from "lucide-react"

import { PricingPackages } from "@/components/PricingPackages"
import { PricingDeterminants } from "@/components/PricingDeterminants"

export default function PricingPage() {
    const { translations, loading } = useTranslations()

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

                <div className="relative pt-4 sm:pt-24 min-h-screen">
                    {(!loading && translations) ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Hero Section */}
                            <section id="pricing-hero" className="pb-8 px-4 sm:px-2 lg:px-4 relative z-10 w-full">
                                <PricingHero translations={translations} />
                            </section>

                            <PricingPackages />
                            <PricingDeterminants />
                            <Footer />
                        </motion.div>
                    ) : (
                        <div className="flex items-center justify-center min-h-[60vh]">
                            <div className="w-8 h-8 border-2 border-neutral-200 border-t-purple-600 rounded-full animate-spin" />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
