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
  Star,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import SeoHead from "@/components/SeoHead"
import Image from "next/image"
import Link from "next/link"
import { Hero } from "@/components/Hero"
import { NavBar } from "@/components/NavBar"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/hooks/useTranslations"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [counts, setCounts] = useState({ businesses: 5, bookings: 2950, months: 1, increase: 5 })
  const metricsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const howItWorksRef = useRef<HTMLDivElement>(null)
  
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-200px" })
  const howItWorksInView = useInView(howItWorksRef, { once: true, margin: "-200px" })
  
  const { language } = useLanguage()
  const { translations, loading } = useTranslations()

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Metrics section is intersecting, starting animation')
            // Reset counts to starting values
            setCounts({ businesses: 5, bookings: 2950, months: 1, increase: 5 })
            
            // Animate businesses from 5 to 25 with slowing down
            let businessSpeed = 100
            const businessInterval = setInterval(() => {
              setCounts(prev => {
                if (prev.businesses >= 25) {
                  clearInterval(businessInterval)
                  return prev
                }
                // Slow down as we get closer to the end
                if (prev.businesses >= 20) businessSpeed = 200
                if (prev.businesses >= 23) businessSpeed = 300
                return { ...prev, businesses: prev.businesses + 1 }
              })
            }, businessSpeed)

            // Animate bookings from 2950 to 3000 with slowing down
            let bookingSpeed = 20
            const bookingInterval = setInterval(() => {
              setCounts(prev => {
                if (prev.bookings >= 3000) {
                  clearInterval(bookingInterval)
                  return prev
                }
                // Slow down as we get closer to the end
                if (prev.bookings >= 2990) bookingSpeed = 40
                if (prev.bookings >= 2995) bookingSpeed = 80
                return { ...prev, bookings: prev.bookings + 1 }
              })
            }, bookingSpeed)

            // Animate months from 1 to 3 with slowing down
            let monthSpeed = 200
            const monthInterval = setInterval(() => {
              setCounts(prev => {
                if (prev.months >= 3) {
                  clearInterval(monthInterval)
                  return prev
                }
                // Slow down as we get closer to the end
                if (prev.months >= 2) monthSpeed = 400
                return { ...prev, months: prev.months + 1 }
              })
            }, monthSpeed)

            // Animate increase from 5 to 40 with slowing down
            let increaseSpeed = 100
            const increaseInterval = setInterval(() => {
              setCounts(prev => {
                if (prev.increase >= 40) {
                  clearInterval(increaseInterval)
                  return prev
                }
                // Slow down as we get closer to the end
                if (prev.increase >= 30) increaseSpeed = 200
                if (prev.increase >= 35) increaseSpeed = 300
                return { ...prev, increase: prev.increase + 1 }
              })
            }, increaseSpeed)
          }
        })
      },
      { threshold: 0.5 }
    )

    // Use a timeout to ensure the ref is available
    const timeoutId = setTimeout(() => {
      if (metricsRef.current) {
        observer.observe(metricsRef.current)
      }
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current)
      }
      observer.disconnect()
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
        {/* Aurora Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <AuroraBackground className="h-full w-full" showRadialGradient={true}>
            <div></div>
          </AuroraBackground>
        </div>
        {/* Cursor Following Background Gradient */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(254, 234, 250, 0.15), transparent 40%)`,
          }}
        />

        {/* Floating Navigation */}
        <NavBar />

        {/* Hero Section */}
        <section id="home" className="pt-4 sm:pt-24 pb-16 px-4 sm:px-2 lg:px-4 relative z-10">
          <Hero translations={translations} />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="pb-8 relative z-10" ref={testimonialsRef}>
          <div className="w-full pl-6 pr-4 sm:container sm:mx-auto sm:px-6">
            <motion.div
              className="text-left sm:text-center mb-16"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tighter">
                {translations.testimonials.title}
              </h2>
            </motion.div>

            {/* Metrics Section */}
            <motion.div 
              ref={metricsRef} 
              className="mb-16"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div 
                className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3
                    }
                  }
                }}
              >
                <motion.div 
                  className="text-left sm:text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="text-6xl md:text-7xl font-bold text-gradient-blobs mb-3">{counts.businesses}+</div>
                  <div className="text-sm text-neutral-600 leading-relaxed">{translations.testimonials.metrics.businesses}</div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 sm:mx-auto mt-4"></div>
                </motion.div>
                <motion.div 
                  className="text-left sm:text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="text-6xl md:text-7xl font-bold text-gradient-blobs mb-3">{counts.bookings.toLocaleString()}+</div>
                  <div className="text-sm text-neutral-600 leading-relaxed">{translations.testimonials.metrics.bookings}</div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 sm:mx-auto mt-4"></div>
                </motion.div>
                <motion.div 
                  className="text-left sm:text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="text-6xl md:text-7xl font-bold text-gradient-blobs mb-3">{counts.months}</div>
                  <div className="text-sm text-neutral-600 leading-relaxed">{translations.testimonials.metrics.months}</div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 sm:mx-auto mt-4"></div>
                </motion.div>
                <motion.div 
                  className="text-left sm:text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="text-6xl md:text-7xl font-bold text-gradient-blobs mb-3">{counts.increase}%</div>
                  <div className="text-sm text-neutral-600 leading-relaxed">{translations.testimonials.metrics.increase}</div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 sm:mx-auto mt-4"></div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-12 sm:gap-6 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="sm:glow-on-hover sm:border-0 sm:bg-white/25 sm:backdrop-blur-sm sm:border sm:border-neutral-200/20 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-2xl sm:h-[280px]">
                <div className="p-0 sm:p-6 text-left sm:text-center flex flex-col h-full">
                  <div className="flex mb-4 justify-start sm:justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
                  <div className="flex-1 flex items-start sm:items-center justify-start sm:justify-center">
                    <p className="text-neutral-700 italic leading-relaxed text-sm">
                    "Nečekala jsem moc, ale teď máme pořád plný kalendář. <strong>Web funguje dobře, lidi sami dělají rezervace a já nemusím pořád telefonovat.</strong> Hodně mi to pomohlo."
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-left">
                      <span className="font-semibold tracking-tight text-black text-sm">Thảo My Nguyễn</span>
                      <span className="text-neutral-500 text-xs block">{translations.testimonial1.occupation}</span>
                      <span className="text-neutral-400 text-xs block">{translations.testimonial1.location}</span>
                    </div>
                    <span className="text-neutral-400 text-xs">{translations.testimonial1.date}</span>
                  </div>
                </div>
              </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="sm:glow-on-hover sm:border-0 sm:bg-white/25 sm:backdrop-blur-sm sm:border sm:border-neutral-200/20 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-2xl sm:h-[280px]">
                <div className="p-0 sm:p-6 text-left sm:text-center flex flex-col h-full">
                  <div className="flex mb-4 justify-start sm:justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex-1 flex items-start sm:items-center justify-start sm:justify-center">
                    <p className="text-neutral-700 italic leading-relaxed text-sm">
                    "Pro mě je to velká změna. <strong>Dřív jsem měla chaos, teď všechno jde samo. Klienti píšou přímo přes web, já mám víc času na práci, ne na papíry.</strong>"
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-left">
                      <span className="font-semibold tracking-tight text-black text-sm">Alina Dovzhenko</span>
                      <span className="text-neutral-500 text-xs block">{translations.testimonial2.occupation}</span>
                      <span className="text-neutral-400 text-xs block">{translations.testimonial2.location}</span>
                    </div>
                    <span className="text-neutral-400 text-xs">{translations.testimonial2.date}</span>
                  </div>
                </div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="sm:glow-on-hover sm:border-0 sm:bg-white/25 sm:backdrop-blur-sm sm:border sm:border-neutral-200/20 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-2xl sm:h-[280px]">
                <div className="p-0 sm:p-6 text-left sm:text-center flex flex-col h-full">
                  <div className="flex mb-4 justify-start sm:justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
              </div>
                  <div className="flex-1 flex items-start sm:items-center justify-start sm:justify-center">
                    <p className="text-neutral-700 italic leading-relaxed text-sm">
                    "Our new website completely changed how we get customers. <strong>Bookings come in automatically, the site looks modern, and I can finally focus on growing instead of chasing calls.</strong>"
                    </p>
            </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-left">
                      <span className="font-semibold tracking-tight text-black text-sm">Élodie Carpentier</span>
                      <span className="text-neutral-500 text-xs block">{translations.testimonial3.occupation}</span>
                      <span className="text-neutral-400 text-xs block">{translations.testimonial3.location}</span>
                    </div>
                    <span className="text-neutral-400 text-xs">{translations.testimonial3.date}</span>
                  </div>
                </div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="text-left sm:text-center"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <p className="text-lg text-neutral-600 mb-3">
                {translations.testimonials.trustedBy}
              </p>
              <GradientButton asChild>
                <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer">
                  {translations.testimonials.readyToJoin}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </GradientButton>
            </motion.div>
          </div>
        </section>

        {/* How It Works - Founder Focused */}
        <section id="how-it-works" className="pt-8 pb-16 relative z-10" ref={howItWorksRef}>
          <div className="w-full pl-6 pr-4 sm:max-w-6xl sm:mx-auto sm:px-6 lg:px-8">
            <motion.div 
              className="text-left sm:text-center mb-12"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tighter">
                {translations.howItWorks.title}
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-12 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              <motion.div 
                className="flex flex-col gap-2"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="sm:glow-on-hover sm:border-0 sm:bg-white/25 sm:backdrop-blur-sm sm:border sm:border-neutral-200/20 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-2xl sm:h-[280px]">
                  <div className="p-0 sm:p-6 text-left sm:text-center relative h-full">
                    <div className="top-0 sm:absolute sm:top-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 mb-2">
                      <span className="text-2xl font-bold text-black">{translations.howItWorks.step1.title}</span>
                </div>
                    <div className="sm:absolute sm:top-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full sm:px-4 mb-2">
                      <h4 className="text-xl font-semibold text-black">{translations.howItWorks.step1.subtitle}</h4>
              </div>
                    <div className="sm:absolute sm:top-32 sm:left-1/2 sm:transform sm:-translate-x-1/2 mb-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-neutral-700" />
                        <span className="text-neutral-700">{translations.howItWorks.step1.duration}</span>
                </div>
              </div>
                    <div className="sm:absolute sm:top-44 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full sm:px-4">
                      <p className="text-neutral-700 text-sm">
                        {translations.howItWorks.step1.description}
                      </p>
                </div>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex items-start gap-1.5 w-fit">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-green-700 text-xs font-medium">{translations.howItWorks.step1.note}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col gap-2"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="sm:glow-on-hover sm:border-0 sm:bg-white/25 sm:backdrop-blur-sm sm:border sm:border-neutral-200/20 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-2xl sm:h-[280px]">
                  <div className="p-0 sm:p-6 text-left sm:text-center relative h-full">
                    <div className="top-0 sm:absolute sm:top-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 mb-2">
                      <span className="text-2xl font-bold text-black">{translations.howItWorks.step2.title}</span>
              </div>
                    <div className="sm:absolute sm:top-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full sm:px-4 mb-2">
                      <h4 className="text-xl font-semibold text-black">{translations.howItWorks.step2.subtitle}</h4>
            </div>
                    <div className="sm:absolute sm:top-32 sm:left-1/2 sm:transform sm:-translate-x-1/2 mb-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-neutral-700" />
                        <span className="text-neutral-700">{translations.howItWorks.step2.duration}</span>
          </div>
            </div>
                    <div className="sm:absolute sm:top-44 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full sm:px-4">
                      <p className="text-neutral-700 text-sm">
                        {translations.howItWorks.step2.description}
                </p>
              </div>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex items-start gap-1.5 w-fit">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-green-700 text-xs font-medium">{translations.howItWorks.step2.note}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col gap-2"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="sm:glow-on-hover sm:border-0 sm:bg-white/25 sm:backdrop-blur-sm sm:border sm:border-neutral-200/20 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-2xl sm:h-[280px]">
                  <div className="p-0 sm:p-6 text-left sm:text-center relative h-full">
                    <div className="top-0 sm:absolute sm:top-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 mb-2">
                      <span className="text-2xl font-bold text-black">{translations.howItWorks.step3.title}</span>
                    </div>
                    <div className="sm:absolute sm:top-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full sm:px-4 mb-2">
                      <h4 className="text-xl font-semibold text-black">{translations.howItWorks.step3.subtitle}</h4>
                    </div>
                    <div className="sm:absolute sm:top-32 sm:left-1/2 sm:transform sm:-translate-x-1/2 mb-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-neutral-700" />
                        <span className="text-neutral-700">{translations.howItWorks.step3.duration}</span>
                      </div>
                    </div>
                    <div className="sm:absolute sm:top-44 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full sm:px-4">
                      <p className="text-neutral-700 text-sm">
                        {translations.howItWorks.step3.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex items-start gap-1.5 w-fit">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-green-700 text-xs font-medium">{translations.howItWorks.step3.note}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pt-8 pb-16 relative z-10">
          <div className="w-full pl-2 pr-4 sm:max-w-7xl sm:mx-auto sm:px-6 lg:px-8">
            <motion.div 
              className="text-left sm:text-center mb-6 sm:mb-8 pl-4 pr-4"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tighter">
                {translations.pricing.title}
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-12 sm:gap-8 sm:max-w-4xl sm:mx-auto scale-90 origin-left sm:scale-100 sm:origin-center items-stretch w-full pl-4 pr-4 mt-4 sm:mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {/* Website/Branding Package */}
              <motion.div
                className="h-full flex"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                 <div className="sm:glow-on-hover sm:border-0 sm:bg-white/25 sm:backdrop-blur-sm sm:border sm:border-neutral-200/20 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-3xl flex flex-col w-full">
                 <div className="text-left p-0 sm:p-10">
                   <h3 className="text-3xl font-semibold tracking-tight text-black">{translations.pricing.websiteBranding.title}</h3>
                   <div className="text-5xl font-bold text-gradient-blobs mt-2">{translations.pricing.websiteBranding.price}</div>
                   <p className="mt-2 text-neutral-600">{translations.pricing.websiteBranding.description}</p>
                 </div>
                 <div className="flex flex-col grow space-y-4 sm:space-y-8 p-0 sm:px-10 sm:pb-10">
                  <ul className="space-y-2 text-base sm:text-lg mt-6">
                    {translations.pricing.websiteBranding.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-1 flex-shrink-0" style={{display:'inline'}}>
                        <defs>
                          <linearGradient id="checkGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7C83FF" />
                            <stop offset="0.5" stopColor="#D16BA5" />
                            <stop offset="1" stopColor="#FFB6D9" />
                          </linearGradient>
                        </defs>
                        <path d="M9 12l2 2l4 -4" stroke="url(#checkGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="9" stroke="url(#checkGradient)" strokeWidth="2" fill="none"/>
                      </svg>
                        <span className="text-black">{feature}</span>
                    </li>
                    ))}
                  </ul>
                  <div className="flex-1"></div>
                  <GradientButton asChild className="w-full mt-auto">
                    <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer">{translations.pricing.websiteBranding.cta}</a>
                  </GradientButton>
                </div>
              </div>
              </motion.div>

              {/* Modern Website Package */}
              <motion.div
                className="h-full flex"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                 <div className="sm:glow-on-hover sm:border-0 sm:bg-white/25 sm:backdrop-blur-sm sm:border sm:border-neutral-200/20 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-3xl flex flex-col w-full">
                 <div className="text-left p-0 sm:p-10">
                   <h3 className="text-3xl font-semibold tracking-tight text-black">{translations.pricing.modernWebsite.title}</h3>
                   <div className="text-5xl font-bold text-gradient-blobs mt-2">{translations.pricing.modernWebsite.price}</div>
                   <p className="mt-2 text-neutral-600">{translations.pricing.modernWebsite.description}</p>
                 </div>
                 <div className="flex flex-col grow space-y-4 sm:space-y-8 p-0 sm:px-10 sm:pb-10">
                  <ul className="space-y-2 text-base sm:text-lg mt-6">
                    {translations.pricing.modernWebsite.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-1 flex-shrink-0" style={{display:'inline'}}>
                        <defs>
                          <linearGradient id="checkGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#7C83FF" />
                            <stop offset="0.5" stopColor="#D16BA5" />
                            <stop offset="1" stopColor="#FFB6D9" />
                          </linearGradient>
                        </defs>
                        <path d="M9 12l2 2l4 -4" stroke="url(#checkGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="9" stroke="url(#checkGradient)" strokeWidth="2" fill="none"/>
                      </svg>
                        <span className="text-black">{feature}</span>
                    </li>
                    ))}
                  </ul>
                  <div className="flex-1"></div>
                  <GradientButton asChild className="w-full mt-auto">
                    <a href="https://buy.stripe.com/6oU5kCdOJdMMda76Qjf7i03" target="_blank" rel="noopener noreferrer">{translations.pricing.modernWebsite.cta}</a>
                  </GradientButton>
                </div>
              </div>
              </motion.div>
            </motion.div>
            
            {/* Limited Spots Alert */}
            <motion.div 
              className="w-full text-left sm:text-center mt-6 sm:mt-8 scale-90 origin-left sm:scale-100 sm:origin-center pl-4 pr-4 sm:flex sm:justify-center"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <div className="flex items-start gap-1.5 sm:gap-3 w-fit">
                <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 bg-amber-500 rounded-full mt-1 flex-shrink-0"></div>
                <span className="text-amber-800 text-[12px] sm:text-sm font-medium">{translations.pricing.limitedSpots}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="guarantees" className="pt-8 pb-16 relative z-10">
          <div className="w-full pl-2 pr-4 sm:max-w-6xl sm:mx-auto sm:px-6 lg:px-8">
            <motion.div 
              className="text-left sm:text-center mb-16 pl-4 pr-4"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tighter">
                {translations.guarantees.title}
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8 items-stretch pl-4 pr-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {/* Guarantee Card 1 */}
              <motion.div
                className="h-full flex"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="sm:glow-on-hover sm:border-0 sm:bg-white/25 sm:backdrop-blur-sm sm:border sm:border-neutral-200/20 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-2xl flex flex-col w-full">
                  <div className="text-left sm:text-center pl-0 pr-0 sm:p-8">
                    <div className="flex items-start justify-start mb-3 sm:items-center sm:justify-center sm:mx-auto sm:mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="url(#iconGradient1)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="iconGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c2a9f2" />
                            <stop offset="25%" stopColor="#cda9ed" />
                            <stop offset="50%" stopColor="#d1a9eb" />
                            <stop offset="75%" stopColor="#dfade2" />
                            <stop offset="100%" stopColor="#dba1cd" />
                          </linearGradient>
                        </defs>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-4">{translations.guarantees.onTime.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{translations.guarantees.onTime.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Guarantee Card 2 */}
              <motion.div
                className="h-full flex"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="sm:glow-on-hover sm:border-0 sm:bg-white/25 sm:backdrop-blur-sm sm:border sm:border-neutral-200/20 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-2xl flex flex-col w-full">
                  <div className="text-left sm:text-center pl-0 pr-0 sm:p-8">
                    <div className="flex items-start justify-start mb-3 sm:items-center sm:justify-center sm:mx-auto sm:mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="url(#iconGradient2)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="iconGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c2a9f2" />
                            <stop offset="25%" stopColor="#cda9ed" />
                            <stop offset="50%" stopColor="#d1a9eb" />
                            <stop offset="75%" stopColor="#dfade2" />
                            <stop offset="100%" stopColor="#dba1cd" />
                          </linearGradient>
                        </defs>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-4">{translations.guarantees.professional.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{translations.guarantees.professional.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Guarantee Card 3 */}
              <motion.div
                className="h-full flex"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="sm:glow-on-hover sm:border-0 sm:bg-white/25 sm:backdrop-blur-sm sm:border sm:border-neutral-200/20 sm:shadow-lg sm:hover:shadow-xl sm:transition-all sm:duration-500 sm:rounded-2xl flex flex-col w-full">
                  <div className="text-left sm:text-center pl-0 pr-0 sm:p-8">
                    <div className="flex items-start justify-start mb-3 sm:items-center sm:justify-center sm:mx-auto sm:mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="url(#iconGradient3)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="iconGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c2a9f2" />
                            <stop offset="25%" stopColor="#cda9ed" />
                            <stop offset="50%" stopColor="#d1a9eb" />
                            <stop offset="75%" stopColor="#dfade2" />
                            <stop offset="100%" stopColor="#dba1cd" />
                          </linearGradient>
                        </defs>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-4">{translations.guarantees.noHiddenFees.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{translations.guarantees.noHiddenFees.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scarcity Section */}
        <section className="pt-8 pb-16 relative z-10">
          <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">
            <motion.div 
              className="text-left sm:text-center mb-12 pl-4 pr-4"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tighter">
                {translations.scarcity.subtitle}
              </h2>
            </motion.div>

            <motion.div 
              className="sm:max-w-4xl sm:mx-auto pl-4 pr-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <motion.div 
                  className="hidden sm:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 transform -translate-y-1/2 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                ></motion.div>
                
                {/* Timeline Items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                  {/* Today */}
                  <motion.div 
                    className="relative z-10"
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="sm:bg-white/80 sm:backdrop-blur-md sm:border sm:border-white/30 sm:shadow-lg sm:rounded-2xl sm:p-6 text-left sm:text-center">
                      <div className="hidden sm:block w-4 h-4 bg-red-500 rounded-full mx-auto mb-4 relative"></div>
                      <div className="flex sm:hidden items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <h3 className="text-lg font-semibold text-black">{translations.scarcity.today.title}</h3>
                      </div>
                      <h3 className="hidden sm:block text-lg font-semibold text-black mb-2">{translations.scarcity.today.title}</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        {translations.scarcity.today.description}
                      </p>
                      <div className="text-xs text-red-500 font-medium">
                        {translations.scarcity.today.status}
                      </div>
                    </div>
                  </motion.div>

                  {/* 30 Days Later */}
                  <motion.div 
                    className="relative z-10"
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="sm:bg-white/80 sm:backdrop-blur-md sm:border sm:border-white/30 sm:shadow-lg sm:rounded-2xl sm:p-6 text-left sm:text-center">
                      <div className="hidden sm:block w-4 h-4 bg-red-600 rounded-full mx-auto mb-4 relative"></div>
                      <div className="flex sm:hidden items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <h3 className="text-lg font-semibold text-black">{translations.scarcity.thirtyDays.title}</h3>
                      </div>
                      <h3 className="hidden sm:block text-lg font-semibold text-black mb-2">{translations.scarcity.thirtyDays.title}</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        {translations.scarcity.thirtyDays.description}
                      </p>
                      <div className="text-xs text-red-600 font-medium">
                        {translations.scarcity.thirtyDays.status}
                      </div>
                    </div>
                  </motion.div>

                  {/* 90 Days Later */}
                  <motion.div 
                    className="relative z-10"
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="sm:bg-white/80 sm:backdrop-blur-md sm:border sm:border-white/30 sm:shadow-lg sm:rounded-2xl sm:p-6 text-left sm:text-center">
                      <div className="hidden sm:block w-4 h-4 bg-red-700 rounded-full mx-auto mb-4 relative"></div>
                      <div className="flex sm:hidden items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-red-700 rounded-full flex-shrink-0"></div>
                        <h3 className="text-lg font-semibold text-black">{translations.scarcity.ninetyDays.title}</h3>
                      </div>
                      <h3 className="hidden sm:block text-lg font-semibold text-black mb-2">{translations.scarcity.ninetyDays.title}</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        {translations.scarcity.ninetyDays.description}
                      </p>
                      <div className="text-xs text-red-700 font-medium">
                        {translations.scarcity.ninetyDays.status}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* CTA */}
              <motion.div 
                className="text-left sm:text-center mt-12"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-black mb-6">
                  {translations.scarcity.cta.title}
                </h3>
                <GradientButton asChild className="sm:mx-auto">
                  <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer">
                    {translations.scarcity.cta.button}
                  </a>
                </GradientButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="pt-8 pb-12 relative z-10">
          <div className="w-full pl-2 pr-4 sm:max-w-4xl sm:mx-auto sm:px-6 lg:px-8">
            <motion.div 
              className="text-left sm:text-center mb-12 pl-4 pr-4"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tighter">
                {translations.faq.title}
              </h2>
              <p className="text-xl text-neutral-600 font-normal">{translations.faq.subtitle}</p>
            </motion.div>

            <motion.div 
              className="space-y-4 pl-4 pr-4"
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
              className="text-left sm:text-center mt-8 pl-4 pr-4"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <GradientButton asChild className="sm:mx-auto">
                <a href="https://cal.com/accent/start" target="_blank" rel="noopener noreferrer">
                  {translations.faq.cta.button}
                </a>
              </GradientButton>
              <p className="text-black/70 mt-4 text-sm">{translations.faq.cta.note}</p>
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
                  src="/accent_logo.svg"
                  alt="ACCENT Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto mb-2 select-none"
                  style={{ filter: "brightness(0)" }}
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
