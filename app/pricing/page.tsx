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

                {/* Hero Section */}
                <section id="pricing-hero" className="pt-4 sm:pt-24 pb-8 px-4 sm:px-2 lg:px-4 relative z-10 w-full">
                    <PricingHero translations={translations} />
                </section>

                {/* Pricing Packages Section */}
                <PricingPackages />

                {/* Pricing Determinants Section */}
                <PricingDeterminants />

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}
