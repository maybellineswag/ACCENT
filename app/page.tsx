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
import SeoHead from "@/components/SeoHead"
import Image from "next/image"
import Link from "next/link"
import { Hero } from "@/components/Hero"
import { NavBar } from "@/components/NavBar"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { BlurAnimate, BlurAnimateUp, BlurAnimateDown, BlurAnimateLeft, BlurAnimateRight, BlurAnimateScale, StaggeredBlurAnimateUp, StaggeredBlurAnimateLeft, StaggeredBlurAnimateRight } from "@/components/ui/blur-animate"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/hooks/useTranslations"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [counts, setCounts] = useState({ businesses: 5, bookings: 2950, months: 1, increase: 5 })
  const metricsRef = useRef<HTMLDivElement>(null)
  
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

  const t = translations

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
        <section id="home" className="pt-24 pb-16 px-2 lg:px-4 relative z-10">
          <Hero translations={t} />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="pb-8 relative z-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BlurAnimateUp delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tighter">
                  {t.testimonials.title}
                </h2>
              </div>
            </BlurAnimateUp>

            {/* Metrics Section */}
            <BlurAnimateScale delay={5}>
              <div ref={metricsRef} className="mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-gradient-blobs mb-3">{counts.businesses}+</div>
                    <div className="text-sm text-neutral-600 leading-relaxed">{t.testimonials.metrics.businesses}</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-gradient-blobs mb-3">{counts.bookings.toLocaleString()}+</div>
                    <div className="text-sm text-neutral-600 leading-relaxed">{t.testimonials.metrics.bookings}</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-gradient-blobs mb-3">{counts.months}</div>
                    <div className="text-sm text-neutral-600 leading-relaxed">{t.testimonials.metrics.months}</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-gradient-blobs mb-3">{counts.increase}%</div>
                    <div className="text-sm text-neutral-600 leading-relaxed">{t.testimonials.metrics.increase}</div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4"></div>
                  </div>
                </div>
              </div>
            </BlurAnimateScale>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <BlurAnimateUp delay={10}>
                <Card className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl h-[280px]">
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    <div className="flex mb-4 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-neutral-700 italic leading-relaxed text-sm">
                      "Nečekala jsem moc, ale teď máme pořád plný kalendář. <strong>Web funguje dobře, lidi sami dělají rezervace a já nemusím pořád telefonovat.</strong> Hodně mi to pomohlo."
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <span className="font-semibold tracking-tight text-black text-sm">Thảo My Nguyễn</span>
                        <span className="text-neutral-500 text-xs block">{t.testimonial1.occupation}</span>
                        <span className="text-neutral-400 text-xs block">{t.testimonial1.location}</span>
                      </div>
                      <span className="text-neutral-400 text-xs">{t.testimonial1.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </BlurAnimateUp>

              <BlurAnimateUp delay={15}>
                <Card className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl h-[280px]">
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    <div className="flex mb-4 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-neutral-700 italic leading-relaxed text-sm">
                      "Pro mě je to velká změna. <strong>Dřív jsem měla chaos, teď všechno jde samo. Klienti píšou přímo přes web, já mám víc času na práci, ne na papíry.</strong>"
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <span className="font-semibold tracking-tight text-black text-sm">Alina Dovzhenko</span>
                        <span className="text-neutral-500 text-xs block">{t.testimonial2.occupation}</span>
                        <span className="text-neutral-400 text-xs block">{t.testimonial2.location}</span>
                      </div>
                      <span className="text-neutral-400 text-xs">{t.testimonial2.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </BlurAnimateUp>

              <BlurAnimateUp delay={20}>
                <Card className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl h-[280px]">
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    <div className="flex mb-4 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                </div>
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-neutral-700 italic leading-relaxed text-sm">
                      "Our new website completely changed how we get customers. <strong>Bookings come in automatically, the site looks modern, and I can finally focus on growing instead of chasing calls.</strong>"
                      </p>
              </div>
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <span className="font-semibold tracking-tight text-black text-sm">Élodie Carpentier</span>
                        <span className="text-neutral-500 text-xs block">{t.testimonial3.occupation}</span>
                        <span className="text-neutral-400 text-xs block">{t.testimonial3.location}</span>
                      </div>
                      <span className="text-neutral-400 text-xs">{t.testimonial3.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </BlurAnimateUp>
            </div>

            {/* CTA Section */}
            <BlurAnimateUp delay={25}>
              <div className="text-center">
                <p className="text-lg text-neutral-600 mb-3">{t.testimonials.trustedBy}</p>
                <GradientButton asChild>
                  <a href="#contact">
                    {t.testimonials.readyToJoin}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </GradientButton>
              </div>
            </BlurAnimateUp>
          </div>
        </section>

        {/* How It Works - Founder Focused */}
        <section id="how-it-works" className="pt-8 pb-16 relative z-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BlurAnimateUp delay={0}>
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tighter">
                  {t.howItWorks.title}
                </h2>
              </div>
            </BlurAnimateUp>

            <div className="grid md:grid-cols-3 gap-6">
              <BlurAnimateLeft delay={5}>
                <div className="flex flex-col gap-4">
                <Card className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl h-[280px]">
                  <CardContent className="p-6 text-center relative h-full">
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <span className="text-2xl font-bold text-black">{t.howItWorks.step1.title}</span>
                </div>
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full px-4">
                      <h4 className="text-xl font-semibold text-black">{t.howItWorks.step1.subtitle}</h4>
              </div>
                    <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-neutral-700" />
                        <span className="text-neutral-700">{t.howItWorks.step1.duration}</span>
                </div>
              </div>
                    <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-full px-4">
                      <p className="text-neutral-700 text-sm">
                        {t.howItWorks.step1.description}
                      </p>
                </div>
                  </CardContent>
                </Card>
                <div className="mt-4">
                  <div className="flex items-start gap-2 w-fit">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-green-700 text-sm font-medium">{t.howItWorks.step1.note}</span>
                  </div>
                </div>
                </div>
              </BlurAnimateLeft>

              <BlurAnimateLeft delay={700}>
                <div className="flex flex-col gap-4">
                  <Card className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl h-[280px]">
                  <CardContent className="p-6 text-center relative h-full">
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <span className="text-2xl font-bold text-black">{t.howItWorks.step2.title}</span>
              </div>
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full px-4">
                      <h4 className="text-xl font-semibold text-black">{t.howItWorks.step2.subtitle}</h4>
            </div>
                    <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-neutral-700" />
                        <span className="text-neutral-700">{t.howItWorks.step2.duration}</span>
          </div>
            </div>
                    <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-full px-4">
                      <p className="text-neutral-700 text-sm">
                        {t.howItWorks.step2.description}
                </p>
              </div>
                  </CardContent>
                </Card>
                <div className="mt-4">
                  <div className="flex items-start gap-2 w-fit">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-green-700 text-sm font-medium">{t.howItWorks.step2.note}</span>
                  </div>
                </div>
                </div>
              </BlurAnimateLeft>

              <BlurAnimateLeft delay={20}>
                <div className="flex flex-col gap-4">
                  <Card className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl h-[280px]">
                  <CardContent className="p-6 text-center relative h-full">
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <span className="text-2xl font-bold text-black">{t.howItWorks.step3.title}</span>
                    </div>
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full px-4">
                      <h4 className="text-xl font-semibold text-black">{t.howItWorks.step3.subtitle}</h4>
                    </div>
                    <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-neutral-700" />
                        <span className="text-neutral-700">{t.howItWorks.step3.duration}</span>
                      </div>
                    </div>
                    <div className="absolute top-44 left-1/2 transform -translate-x-1/2 w-full px-4">
                      <p className="text-neutral-700 text-sm">
                        {t.howItWorks.step3.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <div className="mt-4">
                  <div className="flex items-start gap-2 w-fit">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-green-700 text-sm font-medium">{t.howItWorks.step3.note}</span>
                  </div>
                </div>
                </div>
              </BlurAnimateLeft>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pt-8 pb-16 relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <BlurAnimateUp delay={0}>
              <div className="text-center mb-0">
                <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tighter">
                  {t.pricing.title}
                </h2>
              </div>
            </BlurAnimateUp>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto scale-90">
              <BlurAnimateLeft delay={5}>
                {/* Website/Branding Package */}
              <Card className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl flex flex-col">
                <CardHeader className="text-left pt-10">
                  <CardTitle className="text-2xl font-semibold tracking-tight text-black">{t.pricing.websiteBranding.title}</CardTitle>
                  <div className="text-4xl font-bold text-gradient-blobs mt-6">{t.pricing.websiteBranding.price}</div>
                  <CardDescription className="mt-4 text-neutral-600">{t.pricing.websiteBranding.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col grow space-y-8 pb-10">
                  <ul className="space-y-2 text-base sm:text-lg">
                    {t.pricing.websiteBranding.features.map((feature: string, index: number) => (
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
                    <a href="/custom-quote">{t.pricing.websiteBranding.cta}</a>
                  </GradientButton>
                </CardContent>
              </Card>
              </BlurAnimateLeft>

              <BlurAnimateLeft delay={700}>
                {/* Modern Website Package */}
              <Card className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl flex flex-col">
                <CardHeader className="text-left pt-10">
                  <CardTitle className="text-2xl font-semibold tracking-tight text-black">{t.pricing.modernWebsite.title}</CardTitle>
                  <div className="text-4xl font-bold text-gradient-blobs mt-6">{t.pricing.modernWebsite.price}</div>
                  <CardDescription className="mt-4 text-neutral-600">{t.pricing.modernWebsite.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col grow space-y-8 pb-10">
                  <ul className="space-y-2 text-base sm:text-lg">
                    {t.pricing.modernWebsite.features.map((feature: string, index: number) => (
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
                    <a href="/custom-quote">{t.pricing.modernWebsite.cta}</a>
                  </GradientButton>
                </CardContent>
              </Card>
              </BlurAnimateLeft>
            </div>
            
            {/* Limited Spots Alert */}
            <BlurAnimateUp delay={20}>
              <div className="text-center mt-2">
                <div className="inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-amber-800 text-sm font-medium">{t.pricing.limitedSpots}</span>
                </div>
              </div>
            </BlurAnimateUp>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="guarantees" className="pt-8 pb-16 relative z-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BlurAnimateUp delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tighter">
                  {t.guarantees.title}
                </h2>
              </div>
            </BlurAnimateUp>

            <div className="grid md:grid-cols-3 gap-8">
              <BlurAnimateUp delay={5}>
                {/* Guarantee Card 1 */}
              <Card className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mx-auto mb-6">
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
                                     <h3 className="text-xl font-semibold text-black mb-4">{t.guarantees.onTime.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {t.guarantees.onTime.description}
                    </p>
                </CardContent>
              </Card>
              </BlurAnimateUp>

              <BlurAnimateUp delay={10}>
                {/* Guarantee Card 2 */}
              <Card className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mx-auto mb-6">
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
                                     <h3 className="text-xl font-semibold text-black mb-4">{t.guarantees.professional.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {t.guarantees.professional.description}
                    </p>
                </CardContent>
              </Card>
              </BlurAnimateUp>

              <BlurAnimateUp delay={15}>
                {/* Guarantee Card 3 */}
              <Card className="glow-on-hover border-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mx-auto mb-6">
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
                                     <h3 className="text-xl font-semibold text-black mb-4">{t.guarantees.noHiddenFees.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {t.guarantees.noHiddenFees.description}
                    </p>
                </CardContent>
              </Card>
              </BlurAnimateUp>
            </div>
          </div>
        </section>

        {/* Scarcity Section */}
        <section className="pt-8 pb-16 relative z-10">
          <div className="container mx-auto px-4">
            <BlurAnimateUp delay={0}>
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tighter">
                  {t.scarcity.subtitle}
                </h2>
              </div>
            </BlurAnimateUp>

            <BlurAnimateScale delay={5}>
              <div className="max-w-4xl mx-auto">
                {/* Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 transform -translate-y-1/2 rounded-full"></div>
                  
                  {/* Timeline Items */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <BlurAnimateUp delay={10}>
                      {/* Today */}
                  <div className="relative z-10">
                    <div className="bg-white/80 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-6 text-center">
                      <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-4 relative">
                        <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-2">{t.scarcity.today.title}</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        {t.scarcity.today.description}
                      </p>
                      <div className="text-xs text-red-500 font-medium">
                        {t.scarcity.today.status}
                      </div>
                    </div>
                  </div>
                    </BlurAnimateUp>

                    <BlurAnimateUp delay={900}>
                      {/* 30 Days Later */}
                  <div className="relative z-10">
                    <div className="bg-white/80 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-6 text-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full mx-auto mb-4 relative">
                        <div className="absolute inset-0 bg-red-600 rounded-full animate-pulse"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-2">{t.scarcity.thirtyDays.title}</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        {t.scarcity.thirtyDays.description}
                      </p>
                      <div className="text-xs text-red-600 font-medium">
                        {t.scarcity.thirtyDays.status}
                      </div>
                    </div>
                  </div>
                    </BlurAnimateUp>

                    <BlurAnimateUp delay={25}>
                      {/* 90 Days Later */}
                  <div className="relative z-10">
                    <div className="bg-white/80 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl p-6 text-center">
                      <div className="w-4 h-4 bg-red-700 rounded-full mx-auto mb-4 relative">
                        <div className="absolute inset-0 bg-red-700 rounded-full animate-pulse"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-2">{t.scarcity.ninetyDays.title}</h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        {t.scarcity.ninetyDays.description}
                      </p>
                      <div className="text-xs text-red-700 font-medium">
                        {t.scarcity.ninetyDays.status}
                      </div>
                    </div>
                  </div>
                    </BlurAnimateUp>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <BlurAnimateUp delay={25}>
                <div className="text-center mt-12">
                  <h3 className="text-2xl font-bold text-black mb-6">
                    {t.scarcity.cta.title}
                  </h3>
                  <GradientButton asChild>
                    <Link href="#contact">
                      {t.scarcity.cta.button}
                    </Link>
                  </GradientButton>
                </div>
              </BlurAnimateUp>
            </BlurAnimateScale>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="pt-8 pb-12 relative z-10">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <BlurAnimateUp delay={0}>
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tighter">
                  {t.faq.title}
                </h2>
                <p className="text-xl text-neutral-600 font-normal">{t.faq.subtitle}</p>
              </div>
            </BlurAnimateUp>

            <div className="space-y-4">
              {t.faq.questions.map((faq: any, index: number) => (
                <BlurAnimateUp key={index} delay={400 + (index * 150)}>
                <Card
                  key={index}
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
                </BlurAnimateUp>
              ))}
            </div>

            {/* CTA Button */}
            <BlurAnimateUp delay={20}>
              <div className="text-center mt-8">
                <GradientButton asChild>
                  <a href="https://zcal.co/accentdesign/accentmeeting" target="_blank" rel="noopener noreferrer">
                    {t.faq.cta.button}
                  </a>
                </GradientButton>
                <p className="text-black/70 mt-4 text-sm">{t.faq.cta.note}</p>
              </div>
            </BlurAnimateUp>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-black pt-16 pb-8 relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 justify-start">
              <BlurAnimateUp delay={0}>
                <div className="flex flex-col items-start">
                <Image
                  src="/accent_logo.svg"
                  alt="ACCENT Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto mb-2 select-none"
                  style={{ filter: "brightness(0)" }}
                />
                <p className="text-neutral-600 text-sm mb-3">
                  {t.footer.copyright}
                </p>
                                  <p className="text-neutral-600 leading-relaxed">
                    {t.footer.description}
                  </p>
              </div>
              <div className="flex flex-col items-start">
                <h4 className="font-semibold mb-4">{t.footer.services.title}</h4>
                <ul className="space-y-2 text-neutral-600">
                  {t.footer.services.items.map((item: string, index: number) => (
                    <li key={index}>
                    <a href="#" className="hover:text-black transition-colors">
                        {item}
                    </a>
                  </li>
                  ))}
                </ul>
              </div>
              </BlurAnimateUp>
              <BlurAnimateUp delay={5}>
                <div className="flex flex-col items-start">
                <h4 className="font-semibold mb-4">{t.footer.company.title}</h4>
                <ul className="space-y-2 text-neutral-600">
                  {t.footer.company.items.map((item: string, index: number) => (
                    <li key={index}>
                    <a href="#" className="hover:text-black transition-colors">
                        {item}
                    </a>
                  </li>
                  ))}
                </ul>
              </div>
              </BlurAnimateUp>
              <BlurAnimateUp delay={10}>
                <div className="flex flex-col items-start w-full">
                <h4 className="font-semibold mb-4">{t.footer.contact.title}</h4>
                <form className="w-full flex flex-col space-y-2">
                                      <input
                      type="email"
                      placeholder={t.footer.contact.email}
                      className="px-3 py-1.5 rounded-[11px] bg-white/25 backdrop-blur-sm border border-neutral-200/20 text-black placeholder-neutral-600 focus:outline-none focus:border-[#823038] w-full text-sm"
                    />
                    <textarea
                      placeholder={t.footer.contact.message}
                      rows={2}
                      className="px-3 py-1.5 rounded-[11px] bg-white/25 backdrop-blur-sm border border-neutral-200/20 text-black placeholder-neutral-600 focus:outline-none focus:border-[#823038] w-full resize-none text-sm"
                    />
                  <GradientButton type="submit" className="w-full">
                                          {t.footer.contact.send}
                  </GradientButton>
                </form>
              </div>
              </BlurAnimateUp>
            </div>

          </div>
        </footer>
      </div>
    </>
  )
}
