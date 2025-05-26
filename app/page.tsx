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
        "Most branding projects are completed within 5-7 business days. Premium packages with websites may take 10-14 days.",
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
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-2xl border-b border-gray-100/50 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-semibold tracking-tight text-gray-900">ACCENT</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How it works
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
            </div>
            <Button className="glow-on-hover bg-[#823038] hover:bg-[#6d2830] text-white border-0 rounded-full px-6 font-medium">
              Book Free Consult
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-[0.85] tracking-tighter">
              Premium Branding &{" "}
              <span className="bg-gradient-to-r from-[#823038] via-[#a23c46] to-[#823038] bg-clip-text text-transparent">
                AI Automation
              </span>
            </h1>

            {/* Social Proof Bullets */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-[#823038] mr-2" />
                <span>50+ businesses transformed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-[#823038] mr-2" />
                <span>Based in Prague</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-[#823038] mr-2" />
                <span>Results in days, not weeks</span>
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-normal">
              Stop losing clients to competitors with outdated branding. Get premium design and smart automation that
              works 24/7.
            </p>

            <Button
              size="lg"
              className="glow-on-hover bg-[#823038] hover:bg-[#6d2830] text-white text-lg px-12 py-6 h-auto rounded-full border-0 font-medium"
            >
              Book Free 15-Minute Consult
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners/Trust Section */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8 font-medium">Trusted by companies in</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            {/* Placeholder for partner logos */}
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Prague</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Brno</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Bratislava</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-500">Vienna</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tighter">
              How We Help Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              Focus on what matters - we handle the rest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-12 h-12 text-[#823038]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Look Premium Instantly</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional branding that makes you stand out from competitors and attract higher-paying clients.
                </p>
              </div>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-12 h-12 text-[#823038]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Book More Clients</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI chatbots that handle inquiries, qualify leads, and book appointments while you sleep.
                </p>
              </div>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-12 h-12 text-[#823038]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Save 3+ Hours Daily</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automation handles repetitive tasks so you can focus on delivering quality service.
                </p>
              </div>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-[#823038]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Never Miss a Lead</h3>
                <p className="text-gray-600 leading-relaxed">
                  Capture and follow up with every potential client automatically, even when you're busy.
                </p>
              </div>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-12 h-12 text-[#823038]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Fast Implementation</h3>
                <p className="text-gray-600 leading-relaxed">
                  See results in days, not months. We handle everything so you don't need any tech skills.
                </p>
              </div>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-12 h-12 text-[#823038]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Local Market Expert</h3>
                <p className="text-gray-600 leading-relaxed">
                  Based in Prague, we understand what works for Czech and European businesses.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tighter">How It Works</h2>
            <p className="text-xl text-gray-600 font-normal">Get started in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#823038] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">Book Free Consult</h3>
              <p className="text-gray-600 leading-relaxed">
                We'll discuss your business goals and create a custom plan that fits your needs and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#823038] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">We Build Everything</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team creates your branding and sets up automation while you focus on running your business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#823038] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">Launch & Grow</h3>
              <p className="text-gray-600 leading-relaxed">
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
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tighter">
              Why Buy? How It Helps
            </h2>
            <p className="text-xl text-gray-600 font-normal">Transparent pricing that pays for itself</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Package */}
            <Card className="glow-on-hover border border-gray-200/50 bg-white/80 backdrop-blur-sm transition-all duration-500 rounded-3xl">
              <CardHeader className="text-center pt-10">
                <CardTitle className="text-2xl font-semibold tracking-tight">Starter</CardTitle>
                <div className="text-5xl font-bold text-[#823038] mt-6">€300</div>
                <div className="text-gray-500">/month</div>
                <CardDescription className="mt-4 text-gray-600">Perfect for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pb-10">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Logo and brand refresh</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Instagram post kit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Professional look instantly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Attract more clients online</span>
                  </li>
                </ul>
                <Button className="glow-on-hover w-full bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full border-0 font-medium">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Standard Package - Highlighted */}
            <Card className="glow-on-hover border-2 border-[#823038] bg-white transition-all duration-500 rounded-3xl relative scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#823038] text-white rounded-full border-0">
                Most Popular
              </Badge>
              <CardHeader className="text-center pt-10">
                <CardTitle className="text-2xl font-semibold tracking-tight">Standard</CardTitle>
                <div className="text-5xl font-bold text-[#823038] mt-6">€700</div>
                <div className="text-gray-500">/month</div>
                <CardDescription className="mt-4 text-gray-600">Everything you need to automate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pb-10">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Everything from Starter</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">AI chatbot</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Smart booking system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Book more clients automatically</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Save time replying to messages</span>
                  </li>
                </ul>
                <Button className="glow-on-hover w-full bg-[#823038] hover:bg-[#6d2830] text-white rounded-full border-0 font-medium">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="glow-on-hover border border-gray-200/50 bg-white/80 backdrop-blur-sm transition-all duration-500 rounded-3xl">
              <CardHeader className="text-center pt-10">
                <CardTitle className="text-2xl font-semibold tracking-tight">Premium</CardTitle>
                <div className="text-5xl font-bold text-[#823038] mt-6">€1,500</div>
                <div className="text-gray-500">/month</div>
                <CardDescription className="mt-4 text-gray-600">Complete business transformation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pb-10">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Everything from Standard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Full branding package</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Website or refresh</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Run business on autopilot</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#823038] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Free up time for quality service</span>
                  </li>
                </ul>
                <Button className="glow-on-hover w-full bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full border-0 font-medium">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tighter">
              Loved by People Worldwide
            </h2>
            <p className="text-xl text-gray-600 font-normal">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glow-on-hover border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl">
              <CardContent className="p-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic leading-relaxed">
                  "ACCENT transformed our entire business. The AI chatbot handles 80% of our bookings now, and our new
                  branding makes us look so professional."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#823038] font-semibold">MK</span>
                  </div>
                  <div>
                    <div className="font-semibold tracking-tight">Maria Kovář</div>
                    <div className="text-gray-500 text-sm">Beauty Salon Owner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl">
              <CardContent className="p-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic leading-relaxed">
                  "The automation saves me 3 hours every day. No more answering the same questions over and over. My
                  clients love how smooth everything is."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#823038] font-semibold">JN</span>
                  </div>
                  <div>
                    <div className="font-semibold tracking-tight">Jan Novák</div>
                    <div className="text-gray-500 text-sm">Fitness Coach</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-on-hover border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl">
              <CardContent className="p-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic leading-relaxed">
                  "Best investment we've made for our business. The branding looks amazing and the chatbot books clients
                  while we sleep."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#823038] font-semibold">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold tracking-tight">Anna Svoboda</div>
                    <div className="text-gray-500 text-sm">Wellness Center</div>
                  </div>
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
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tighter">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 font-normal">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="glow-on-hover border border-gray-200/50 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold tracking-tight">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#823038] via-[#a23c46] to-[#823038] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
            Join 50+ businesses in Prague who've already upgraded their brand and automated their workflow. Book your
            free consultation today.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="glow-on-hover text-lg px-12 py-6 h-auto bg-white text-[#823038] hover:bg-gray-50 rounded-full border-0 font-medium"
          >
            Book Your Free Call Now
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>
          <p className="text-white/70 mt-4 text-sm">No commitment • 15 minutes • Free consultation</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 tracking-tight">ACCENT</div>
              <p className="text-gray-400 leading-relaxed">
                Premium branding and AI automation for modern businesses in Prague.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Chatbots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Websites
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Get tips on branding and automation</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-4 py-2 rounded-l-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#823038]"
                />
                <Button className="bg-[#823038] hover:bg-[#6d2830] text-white rounded-r-full px-6 border-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ACCENT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
