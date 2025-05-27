"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { useEffect, useState } from "react"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const faqs = [
    {
      question: "How long does the branding process take?",
      answer:
        "Most branding projects are completed within 7 business days. Premium packages with websites may take up to 15 days.",
    },
    {
      question: "Do I need technical skills to use the AI chatbot?",
      answer:
        "Not at all! We handle all the technical setup and provide you with simple instructions. The chatbot works automatically once installed.",
    },
    {
      question: "Can I customize the automation workflows?",
      answer:
        "Yes, all automation is custom-built for your specific business needs. We'll work with you to create the perfect workflow.",
    },
    {
      question: "What if I need changes after the project is complete?",
      answer:
        "We offer 30 days of free revisions on all packages. After that, we provide ongoing support at competitive rates.",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Cursor Following Background Gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(254, 234, 250, 0.15), transparent 40%)`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-2xl border-b border-neutral-200/50 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-semibold tracking-tight text-black">ACCENT</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-neutral-600 hover:text-black transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="text-neutral-600 hover:text-black transition-colors">
                How it works
              </a>
              <a href="#pricing" className="text-neutral-600 hover:text-black transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-neutral-600 hover:text-black transition-colors">
                FAQ
              </a>
            </div>
            <a href="https://calendly.com/advantagesofkindness/30min" target="_blank" rel="noopener noreferrer">
              <Button className="glow-on-hover bg-conic-gradient-accent hover:animate-conic-rotate text-black border-0 rounded-full px-6 font-medium">
                Book Free Consult
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-8 leading-[0.85] tracking-tighter">
              Premium Branding &{" "}
              <span className="text-gradient-blobs">
                AI Automation
              </span>
            </h1>

            {/* Social Proof Bullets */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-neutral-600">
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2" style={{display:'inline'}}>
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
                <span>50+ businesses transformed</span>
              </div>
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2" style={{display:'inline'}}>
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
                <span>Based in Prague</span>
              </div>
              <div className="flex items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2" style={{display:'inline'}}>
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
                <span>Results in days, not weeks</span>
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-neutral-600 mb-10 max-w-4xl mx-auto leading-relaxed font-normal">
              Stop losing clients to competitors with outdated branding. Get premium design and smart automation that
              works 24/7.
            </p>

            {/* Main CTA Button with Blurry Glowing Blobs Effect */}
            <div className="blobs-glow-hover inline-block relative">
              <span className="blob-glow blob-glow-1"></span>
              <span className="blob-glow blob-glow-2"></span>
              <span className="blob-glow blob-glow-3"></span>
              <span className="blob-glow blob-glow-4"></span>
              <span className="blob-glow blob-glow-5"></span>
              <a href="https://calendly.com/advantagesofkindness/30min" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="relative z-10 bg-conic-gradient-accent hover:animate-conic-rotate transition-colors duration-500 text-black text-lg px-12 py-6 h-auto rounded-full border-0 font-medium shadow-lg backdrop-blur-md"
                >
                  Book Free 15-Minute Consult
                  <ArrowRight className="ml-3 w-5 h-5 text-black" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Trust Section */}
      <section className="py-16 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-neutral-500 mb-8 font-medium">Trusted by</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            {/* Placeholder for partner logos */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-24 h-12 flex items-center justify-center">
                {/* Replace with actual logo images later */}
                <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle cx="16" cy="16" r="10" stroke="black" strokeWidth="2" fill="none" />
                    <rect x="28" y="8" width="12" height="16" stroke="black" strokeWidth="2" fill="none" rx="3" />
                  </g>
                  <text x="50%" y="90%" textAnchor="middle" fill="black" fontSize="8" fontFamily="Arial, sans-serif">Logo</text>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6 tracking-tighter">
              How We Help Your Business
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-normal">
              Focus on what matters - we handle the rest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="featureGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7C83FF" />
                        <stop offset="0.5" stopColor="#D16BA5" />
                        <stop offset="1" stopColor="#FFB6D9" />
                      </linearGradient>
                    </defs>
                    <path d="M12 21c-4.97 0-9-3.58-9-8 0-4.42 4.03-8 9-8s9 3.58 9 8c0 2.21-1.79 4-4 4-.55 0-1 .45-1 1 0 1.1-.9 2-2 2zm-4-7a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2zm-4-4a1 1 0 100-2 1 1 0 000 2z" stroke="url(#featureGradient)" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Look Premium Instantly</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Professional branding that makes you stand out from competitors and attract higher-paying clients.
                </p>
              </div>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="featureGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7C83FF" />
                        <stop offset="0.5" stopColor="#D16BA5" />
                        <stop offset="1" stopColor="#FFB6D9" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="3" width="18" height="14" rx="2" stroke="url(#featureGradient)" strokeWidth="2" fill="none"/>
                    <path d="M8 21h8l-4-4-4 4z" stroke="url(#featureGradient)" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Book More Clients</h3>
                <p className="text-neutral-600 leading-relaxed">
                  AI chatbots that handle inquiries, qualify leads, and book appointments while you sleep.
                </p>
              </div>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="featureGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7C83FF" />
                        <stop offset="0.5" stopColor="#D16BA5" />
                        <stop offset="1" stopColor="#FFB6D9" />
                      </linearGradient>
                    </defs>
                    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="url(#featureGradient)" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Save 3+ Hours Daily</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Automation handles repetitive tasks so you can focus on delivering quality service.
                </p>
              </div>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="featureGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7C83FF" />
                        <stop offset="0.5" stopColor="#D16BA5" />
                        <stop offset="1" stopColor="#FFB6D9" />
                      </linearGradient>
                    </defs>
                    <circle cx="9" cy="7" r="4" stroke="url(#featureGradient)" strokeWidth="2" fill="none"/>
                    <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="url(#featureGradient)" strokeWidth="2" fill="none"/>
                    <circle cx="17" cy="7" r="4" stroke="url(#featureGradient)" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Never Miss a Lead</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Capture and follow up with every potential client automatically, even when you're busy.
                </p>
              </div>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="featureGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7C83FF" />
                        <stop offset="0.5" stopColor="#D16BA5" />
                        <stop offset="1" stopColor="#FFB6D9" />
                      </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="10" stroke="url(#featureGradient)" strokeWidth="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="url(#featureGradient)" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Fast Implementation</h3>
                <p className="text-neutral-600 leading-relaxed">
                  See results in days, not months. We handle everything so you don't need any tech skills.
                </p>
              </div>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="featureGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7C83FF" />
                        <stop offset="0.5" stopColor="#D16BA5" />
                        <stop offset="1" stopColor="#FFB6D9" />
                      </linearGradient>
                    </defs>
                    <path d="M12 21s-6-5.686-6-10A6 6 0 0112 5a6 6 0 016 6c0 4.314-6 10-6 10z" stroke="url(#featureGradient)" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="11" r="2" stroke="url(#featureGradient)" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Local Market Expert</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Based in Prague, we understand what works for Czech and European businesses.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6 tracking-tighter">How It Works</h2>
            <p className="text-xl text-neutral-600 font-normal">Get started in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="stepGradient1" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7C83FF" />
                    <stop offset="0.5" stopColor="#D16BA5" />
                    <stop offset="1" stopColor="#FFB6D9" />
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="36" fill="url(#stepGradient1)" />
                <text x="40" y="52" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#fff" fontFamily="inherit">1</text>
              </svg>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight text-black">Book Free Consult</h3>
              <p className="text-neutral-600 leading-relaxed">
                We'll discuss your business goals and create a custom plan that fits your needs and budget.
              </p>
            </div>

            <div className="text-center">
              <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="stepGradient2" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7C83FF" />
                    <stop offset="0.5" stopColor="#D16BA5" />
                    <stop offset="1" stopColor="#FFB6D9" />
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="36" fill="url(#stepGradient2)" />
                <text x="40" y="52" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#fff" fontFamily="inherit">2</text>
              </svg>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight text-black">We Build Everything</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our team creates your branding and sets up automation while you focus on running your business.
              </p>
            </div>

            <div className="text-center">
              <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto mb-6" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="stepGradient3" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7C83FF" />
                    <stop offset="0.5" stopColor="#D16BA5" />
                    <stop offset="1" stopColor="#FFB6D9" />
                  </linearGradient>
                </defs>
                <circle cx="40" cy="40" r="36" fill="url(#stepGradient3)" />
                <text x="40" y="52" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#fff" fontFamily="inherit">3</text>
              </svg>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight text-black">Launch & Grow</h3>
              <p className="text-neutral-600 leading-relaxed">
                Go live with your new brand and automation, then watch your business grow on autopilot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6 tracking-tighter">
              Pricing
            </h2>
            <p className="text-xl text-neutral-600 font-normal">Transparent investment that pays for itself</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Starter Package */}
            <Card className="glow-on-hover border border-neutral-200/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl flex flex-col">
              <CardHeader className="text-center pt-10">
                <CardTitle className="text-2xl font-semibold tracking-tight text-black">Starter</CardTitle>
                <div className="text-5xl font-bold text-gradient-blobs mt-6">€350</div>
                <CardDescription className="mt-4 text-neutral-600">Perfect for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col grow space-y-8 pb-10">
                <ul className="space-y-4">
                  <li className="flex items-start">
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
                    <span className="text-black">Logo & brand refresh</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Instagram post templates & 10 ready-to-post pieces</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Instagram story templates & highlights set up</span>
                  </li>
                  <hr className="my-2 border-neutral-200" />
                  <li className="flex items-start">
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
                    <span className="text-black">Instantly look more professional</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Attract more clients online</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Build trust with first-time visitors</span>
                  </li>
                </ul>
                <div className="flex-1"></div>
                <Button className="glow-on-hover w-full bg-neutral-100 hover:bg-neutral-200 text-black rounded-full border-0 font-medium mt-auto">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Standard Package - Highlighted */}
            <Card className="glow-on-hover gradient-border bg-white shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl relative scale-105 h-full flex flex-col min-h-[700px]">
              <Badge className="absolute top-6 left-1/2 -translate-x-1/2 bg-conic-gradient-accent text-black rounded-full border-0 w-max px-4 py-1">
                Most Popular
              </Badge>
              <CardHeader className="text-center pt-10">
                <CardTitle className="text-2xl font-semibold tracking-tight text-black">Standard</CardTitle>
                <div className="text-5xl font-bold text-gradient-blobs mt-6">€750</div>
                <CardDescription className="mt-4 text-neutral-600">Everything you need to start automating & saving hours every day</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="space-y-2 text-[15px] sm:text-base">
                  <li className="flex items-start">
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
                    <span className="text-black">Everything from Starter</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">AI chatbot for auto replies & appointment handling</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Automated booking system setup</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Auto-review request system</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Missed call follow up system</span>
                  </li>
                  <hr className="my-2 border-neutral-200" />
                  <li className="flex items-start">
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
                    <span className="text-black">Book more clients on autopilot</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Stop wasting time on manual replies</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Consistent, modern online presence</span>
                  </li>
                </ul>
                <div className="flex-1"></div>
                <Button className="glow-on-hover w-full bg-conic-gradient-accent hover:animate-conic-rotate text-black rounded-full border-0 font-medium mt-auto mb-6">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="glow-on-hover border border-neutral-200/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl flex flex-col">
              <CardHeader className="text-center pt-10">
                <CardTitle className="text-2xl font-semibold tracking-tight text-black">Premium</CardTitle>
                <div className="text-5xl font-bold text-gradient-blobs mt-6">€1,500</div>
                <CardDescription className="mt-4 text-neutral-600">Complete business transformation</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col grow space-y-8 pb-10">
                <ul className="space-y-2 text-[15px] sm:text-base">
                  <li className="flex items-start">
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
                    <span className="text-black">Everything from Standard</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Full brand identity package</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">New website or modernisation</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Google Business setup or optimization</span>
                  </li>
                  <hr className="my-2 border-neutral-200" />
                  <li className="flex items-start">
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
                    <span className="text-black">Attract high-end, loyal clients</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Bring back clients with smart follow-ups</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Run your business like a modern salon on autopilot</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Smart client follow-up flows (promos, rebooking)</span>
                  </li>
                </ul>
                <div className="flex-1"></div>
                <Button className="glow-on-hover w-full bg-neutral-100 hover:bg-neutral-200 text-black rounded-full border-0 font-medium mt-auto">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Custom Package */}
            <Card className="glow-on-hover border border-neutral-200/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl flex flex-col">
              <CardHeader className="text-center pt-10">
                <CardTitle className="text-2xl font-semibold tracking-tight text-black">Personalized</CardTitle>
                <div className="text-5xl font-bold text-gradient-blobs mt-6">Custom</div>
                <CardDescription className="mt-4 text-neutral-600">Tailored to your business needs & budgets</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col grow space-y-8 pb-10">
                <ul className="space-y-2 text-[15px] sm:text-base">
                  <li className="flex items-start">
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
                    <span className="text-black">Fully bespoke branding & automation</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Branding, automation, or marketing — custom mix</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Flexible scope, timeline & budget</span>
                  </li>
                  <li className="flex items-start">
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
                    <span className="text-black">Perfect for businesses ready to grow fast or need something special</span>
                  </li>
                </ul>
                <div className="flex-1"></div>
                <Button className="glow-on-hover w-full bg-conic-gradient-accent hover:animate-conic-rotate text-black rounded-full border-0 font-medium mt-auto" asChild>
                  <a href="/custom-quote">Request Custom Quote</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6 tracking-tighter">
              Loved by People Worldwide
            </h2>
            <p className="text-xl text-neutral-600 font-normal">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glow-on-hover border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl">
              <CardContent className="p-10 text-center flex flex-col justify-between h-full">
                <div>
                  <div className="flex mb-6 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-8 italic leading-relaxed">
                    "ACCENT transformed our entire business. The AI chatbot handles 80% of our bookings now, and our new
                    branding makes us look so professional."
                  </p>
                </div>
                <div className="flex justify-center items-baseline gap-2 mt-auto">
                  <span className="font-semibold tracking-tight text-black">Maria Kovář</span>
                  <span className="text-neutral-500 text-sm">Beauty Salon Owner</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl">
              <CardContent className="p-10 text-center flex flex-col justify-between h-full">
                <div>
                  <div className="flex mb-6 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-8 italic leading-relaxed">
                    "The automation saves me 3 hours every day. No more answering the same questions over and over. My
                    clients love how smooth everything is."
                  </p>
                </div>
                <div className="flex justify-center items-baseline gap-2 mt-auto">
                  <span className="font-semibold tracking-tight text-black">Jan Novák</span>
                  <span className="text-neutral-500 text-sm">Fitness Coach</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl">
              <CardContent className="p-10 text-center flex flex-col justify-between h-full">
                <div>
                  <div className="flex mb-6 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-8 italic leading-relaxed">
                    "Best investment we've made for our business. The branding looks amazing and the chatbot books clients
                    while we sleep."
                  </p>
                </div>
                <div className="flex justify-center items-baseline gap-2 mt-auto">
                  <span className="font-semibold tracking-tight text-black">Anna Svoboda</span>
                  <span className="text-neutral-500 text-sm">Wellness Center</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6 tracking-tighter">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600 font-normal">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="glow-on-hover border border-neutral-200/50 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden"
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
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl sm:text-6xl font-bold text-black mb-8 tracking-tighter leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-black/90 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
            Join 50+ businesses in Prague who've already upgraded their brand and automated their workflow. Book your
            free consultation today.
          </p>
          <a href="https://calendly.com/advantagesofkindness/30min" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="relative z-10 bg-conic-gradient-accent hover:animate-conic-rotate transition-colors duration-500 text-black text-lg px-12 py-6 h-auto rounded-full border-0 font-medium shadow-lg backdrop-blur-md"
            >
              Book Your Free Meeting Now
              <ArrowRight className="ml-3 w-5 h-5 text-black" />
            </Button>
          </a>
          <p className="text-black/70 mt-4 text-sm">No commitment • 15 minutes • Free consultation</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-100 text-black py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 justify-start">
            <div className="flex flex-col items-start">
              <div className="text-2xl font-bold mb-4 tracking-tight">ACCENT</div>
              <p className="text-neutral-600 leading-relaxed">
                Premium branding and AI automation for modern businesses in Prague.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-neutral-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    AI Chatbots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Websites
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-neutral-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start w-full">
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <form className="w-full flex flex-col space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 rounded-full bg-neutral-200 border border-neutral-300 text-black placeholder-neutral-600 focus:outline-none focus:border-[#823038] w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 rounded-full bg-neutral-200 border border-neutral-300 text-black placeholder-neutral-600 focus:outline-none focus:border-[#823038] w-full"
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="px-4 py-2 rounded-2xl bg-neutral-200 border border-neutral-300 text-black placeholder-neutral-600 focus:outline-none focus:border-[#823038] w-full resize-none"
                />
                <Button type="submit" className="bg-conic-gradient-accent hover:animate-conic-rotate text-black rounded-full px-6 border-0 w-full">
                  Send
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-600">
            <p>&copy; 2024 ACCENT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
