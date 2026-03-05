"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GradientButton } from "@/components/ui/gradient-button"
import {
  CheckCircle,
  MessageSquare,
  Palette,
  Zap,
  Users,
  ChevronDown,
  ArrowRight,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import SeoHead from "@/components/SeoHead"
import Image from "next/image"
import Link from "next/link"
import { Hero } from "@/components/Hero"
import { MetricsSection } from "@/components/MetricsSection"
import { WorkExamplesSection } from "@/components/WorkExamplesSection"
import HowWeWorkSection from "@/components/HowWeWorkSection"
import WhyAccentSection from "@/components/WhyAccentSection"
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/hooks/useTranslations"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { language } = useLanguage()
  const { translations, loading } = useTranslations()

  // Feature flags
  const showPricing = false

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])



  // Animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  // Show loading state while translations are loading
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
        <div className="fixed left-0 right-0 bottom-0 top-[48px] sm:top-0 z-0 w-full h-full">
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
        <section id="home" className="pt-4 sm:pt-24 pb-12 px-4 sm:px-2 lg:px-4 relative z-10">
          <Hero translations={translations} />
        </section>

        {/* Work Examples Section */}
        <WorkExamplesSection />

        {/* Metrics Section */}
        <MetricsSection translations={translations} />

        {/* How We Work Section */}
        <HowWeWorkSection />

        {/* Why Accent Section */}
        <WhyAccentSection />





        {/* FAQ Section */}
        <section id="faq" className="pt-8 pb-8 px-4 sm:px-2 lg:px-4 relative z-10 w-full">
          <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">
            <motion.div
              className="text-left mb-12 max-w-4xl"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-6xl font-normal text-black mb-2 tracking-tighter flex items-center gap-4">
                <Image
                  src="/accentnewsymbol.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>{translations.faq.title}</span>
              </h2>
              <p className="text-xl text-neutral-600 font-normal">{translations.faq.subtitle}</p>
            </motion.div>

            <motion.div
              className="space-y-4 max-w-4xl"
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
              {translations.faq.questions.slice(0, 6).map((faq: any, index: number) => (
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
                        maxHeight: openFaq === index ? 200 : 0,
                        opacity: openFaq === index ? 1 : 0,
                        transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
                        overflow: 'hidden',
                      }}
                    >
                      <p className="text-neutral-600 leading-relaxed pb-6">{faq.answer}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="text-left mt-8 max-w-4xl"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <GradientButton asChild>
                  <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer">
                    {translations.faq.cta.button}
                  </a>
                </GradientButton>

                <Link
                  href="/faq"
                  className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition-opacity px-2"
                >
                  <span>{translations.faq.cta.more}</span>
                  <ArrowRight className="w-4 h-4 text-black flex-shrink-0" />
                </Link>
              </div>
              <p className="text-black/70 mt-4 text-sm font-medium">{translations.faq.cta.note}</p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
