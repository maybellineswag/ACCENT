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
import SeoHead from "@/components/SeoHead"
import Image from "next/image"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [lang, setLang] = useState<'cs' | 'en' | 'ru'>('cs')

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem('accent-lang') : null;
    if (storedLang) setLang(storedLang as 'cs' | 'en' | 'ru')
  }, [])

  const handleLangChange = (newLang: 'cs' | 'en' | 'ru') => {
    setLang(newLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('accent-lang', newLang)
    }
  }

  const faqs = [
    {
      question: "Jak dlouho trvá proces brandingu?",
      answer:
        "Většina brandingových projektů je dokončena do 7 pracovních dnů. Prémiové balíčky s webovými stránkami mohou trvat až 15 dní.",
    },
    {
      question: "Potřebuji technické znalosti pro používání AI systémů?",
      answer:
        "Vůbec ne! Postaráme se o veškeré technické nastavení a poskytneme vám jednoduché instrukce.",
    },
    {
      question: "Mohu přizpůsobit automatizační pracovní postupy?",
      answer:
        "Ano, veškerá automatizace je vytvořena na míru vašim specifickým podnikatelským potřebám. Budeme s vámi spolupracovat na vytvoření dokonalého pracovního postupu.",
    },
    {
      question: "Co když budu potřebovat změny po dokončení projektu?",
      answer:
        "Nabízíme 30 dní bezplatných revizí na všechny balíčky. Poté poskytujeme průběžnou podporu za konkurenční ceny.",
    },
  ]

  const benefitTitles: Record<'cs' | 'en' | 'ru', string[]> = {
    cs: [
      'Okamžitě vypadejte prémiově',
      'Získejte si více klientů bez stresu',
      'Získejte více recenzí',
      'Nikdy nepromeškejte potenciálního zákazníka',
    ],
    en: [
      'Instantly Look Premium',
      'Get More Clients Without Stress',
      'Get More Reviews',
      'Never Miss a Potential Customer',
    ],
    ru: [
      'Станьте премиум мгновенно',
      'Получайте больше клиентов без стресса',
      'Получайте больше отзывов',
      'Никогда не упускайте потенциального клиента',
    ],
  }

  const translations = {
    nav: {
      cs: { services: 'Služby', how: 'Jak to funguje', pricing: 'Ceník', faq: 'FAQ', rezervovat: 'Rezervovat' },
      en: { services: 'Services', how: 'How it works', pricing: 'Pricing', faq: 'FAQ', rezervovat: 'Book now' },
      ru: { services: 'Услуги', how: 'Как это работает', pricing: 'Цены', faq: 'FAQ', rezervovat: 'Забронировать' },
    },
    hero: {
      cs: {
        title: 'Prémiový branding &',
        subtitle: 'AI Automatizace',
        desc: 'Přestaňte ztrácet klienty své konkurenci kvůli zastaralému brandingu. Získejte prvotřídní design & chytrou automatizaci, která funguje 24 hodin denně, 7 dní v týdnu.'
      },
      en: {
        title: 'Premium Branding &',
        subtitle: 'AI Automation',
        desc: 'Stop losing clients to your competition due to outdated branding. Get top-tier design & smart automation that works 24/7.'
      },
      ru: {
        title: 'Премиальный брендинг &',
        subtitle: 'AI Автоматизация',
        desc: 'Перестаньте терять клиентов из-за устаревшего брендинга. Получите первоклассный дизайн и умную автоматизацию, которая работает 24/7.'
      },
    },
    heroBullets: {
      cs: [
        'Úspěšně transformováno přes 20 firem',
        'Se sídlem v Praze',
        'Výsledky za týdny, ne za měsíce',
      ],
      en: [
        'Successfully transformed 20+ businesses',
        'Based in Prague',
        'Results in weeks, not months',
      ],
      ru: [
        'Успешно трансформировано более 20 компаний',
        'Офис в Праге',
        'Результаты за недели, а не месяцы',
      ],
    },
    heroCta: {
      cs: 'Rezervovat',
      en: 'Book now',
      ru: 'Забронировать',
    },
    benefits: {
      sectionTitle: {
        cs: 'Jak pomáháme vašemu podniku',
        en: 'How We Help Your Business',
        ru: 'Как мы помогаем вашему бизнесу',
      },
      sectionDesc: {
        cs: 'Soustřeďte se na to, co je důležité - o zbytek se postaráme my',
        en: 'Focus on what matters – we handle the rest',
        ru: 'Сосредоточьтесь на главном — остальное мы возьмём на себя',
      },
      titles: benefitTitles,
    },
  }

  return (
    <>
      <SeoHead />
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
              <a href="/" className="flex items-center">
                <Image
                  src="/accent_logo.svg"
                  alt="ACCENT Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto mr-2 sm:h-10 select-none logo-gradient"
                  priority
                />
                <span className="sr-only">ACCENT</span>
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-neutral-600 hover:text-black transition-colors">
                  {translations.nav[lang].services}
                </a>
                <a href="#how-it-works" className="text-neutral-600 hover:text-black transition-colors">
                  {translations.nav[lang].how}
                </a>
                <a href="#pricing" className="text-neutral-600 hover:text-black transition-colors">
                  {translations.nav[lang].pricing}
                </a>
                <a href="#faq" className="text-neutral-600 hover:text-black transition-colors">
                  {translations.nav[lang].faq}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://zcal.co/accentdesign/accentmeeting" target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full px-3 py-1 text-xs sm:px-6 sm:py-3 sm:text-base font-medium glow-on-hover bg-conic-gradient-accent hover:animate-conic-rotate text-black border-0">
                    {translations.nav[lang].rezervovat}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-2 lg:px-4 relative">
          <div className="max-w-5xl mx-auto text-center relative">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-black mb-6 leading-snug tracking-tight text-center">
                {translations.hero[lang].title} {" "}
                <span className="text-gradient-blobs block text-2xl sm:text-3xl lg:text-5xl">
                  {translations.hero[lang].subtitle}
                </span>
              </h1>

              {/* Social Proof Bullets */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 text-neutral-600 text-base sm:text-lg">
                {translations.heroBullets[lang].map((bullet, i) => (
                  <div className="flex items-center" key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1" style={{display:'inline'}}>
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
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-normal font-normal">
                {translations.hero[lang].desc}
              </p>

              {/* Main CTA Button with Blurry Glowing Blobs Effect */}
              <div className="blobs-glow-hover inline-block relative">
                <span className="blob-glow blob-glow-1"></span>
                <span className="blob-glow blob-glow-2"></span>
                <span className="blob-glow blob-glow-3"></span>
                <span className="blob-glow blob-glow-4"></span>
                <span className="blob-glow blob-glow-5"></span>
                <a href="https://zcal.co/accentdesign/accentmeeting" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="relative z-10 bg-conic-gradient-accent hover:animate-conic-rotate transition-colors duration-500 text-black text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto rounded-full border-0 font-medium shadow-lg backdrop-blur-md"
                  >
                    {translations.heroCta[lang]}
                    <ArrowRight className="ml-2 w-5 h-5 text-black" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partners/Trust Section */}
        <section className="py-16 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-neutral-500 mb-8 font-medium">Naši klienti</p>
            <div className="flex items-center justify-center gap-x-4 sm:gap-x-12 opacity-60">
              <Image src="/workedwith/longlerielogo.svg" alt="Longlerie Logo" width={48} height={20} className="w-12 h-auto sm:w-20 flex-shrink-0" />
              <Image src="/workedwith/yubilogo.svg" alt="Yubi Logo" width={48} height={20} className="w-12 h-auto sm:w-20 flex-shrink-0" />
              <Image src="/workedwith/mixlogo.svg" alt="Mix Logo" width={48} height={20} className="w-12 h-auto sm:w-20 flex-shrink-0" />
              <Image src="/workedwith/rosalogo.svg" alt="Rosa Logo" width={48} height={20} className="w-12 h-auto sm:w-20 flex-shrink-0" />
              <Image src="/workedwith/belgravialogo.svg" alt="Belgravia Logo" width={48} height={20} className="w-12 h-auto sm:w-20 flex-shrink-0" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="services" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6 tracking-tighter">
                {translations.benefits.sectionTitle[lang]}
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-normal">
                {translations.benefits.sectionDesc[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Showcase 1 */}
              <div className="text-center bg-white">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-6 tracking-tight text-black">
                  {translations.benefits.titles[lang][0]}
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/accentlogos.png"
                    alt="Ukázka brandingu"
                    width={600}
                    height={300}
                    className=""
                    style={{ objectFit: "contain", background: "#fff" }}
                  />
                </div>
              </div>
              {/* Showcase 2 */}
              <div className="text-center bg-white">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-6 tracking-tight text-black">
                  {translations.benefits.titles[lang][1]}
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/accentsms.png"
                    alt="Ukázka automatizace"
                    width={600}
                    height={300}
                    className=""
                    style={{ objectFit: "contain", background: "#fff" }}
                  />
                </div>
              </div>
              {/* Showcase 3 */}
              <div className="text-center bg-white">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-6 tracking-tight text-black">
                  {translations.benefits.titles[lang][2]}
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/accentmail.png"
                    alt="Ukázka úspory času"
                    width={600}
                    height={300}
                    className=""
                    style={{ objectFit: "contain", background: "#fff" }}
                  />
                </div>
              </div>
              {/* Showcase 4 */}
              <div className="text-center bg-white">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-6 tracking-tight text-black">
                  {translations.benefits.titles[lang][3]}
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/accentprocess.png"
                    alt="Ukázka zachycení klienta"
                    width={600}
                    height={300}
                    className=""
                    style={{ objectFit: "contain", background: "#fff" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6 tracking-tighter">Jak to celé funguje?</h2>
              <p className="text-xl text-neutral-600 font-normal">Začněte ve 3 jednoduchých krocích</p>
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
                <h3 className="text-2xl font-semibold mb-4 tracking-tight text-black">Rezervujte si bezplatnou konzultaci</h3>
                <p className="text-neutral-600 leading-relaxed">
                Probereme vaše cíle a vytvoříme individuální plán – nebo si vyberete ten, který nejlépe odpovídá vašim potřebám a rozpočtu.
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
                <h3 className="text-2xl font-semibold mb-4 tracking-tight text-black">Postaráme se o vše – od návrhu po spuštění</h3>
                <p className="text-neutral-600 leading-relaxed">
                Postaráme se o váš branding i automatizaci, abyste se mohli věnovat tomu, co děláte nejlépe – svému podnikání
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
                <h3 className="text-2xl font-semibold mb-4 tracking-tight text-black">Sledujte růst</h3>
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
                Ceník
              </h2>
              <p className="text-xl text-neutral-600 font-normal">Jasné ceny, skutečné výsledky — vaše investice se sama zaplatí</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto scale-90">
              {/* Starter Package */}
              <Card className="glow-on-hover border border-neutral-200/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl flex flex-col">
                <CardHeader className="text-center pt-10">
                  <CardTitle className="text-2xl font-semibold tracking-tight text-black">Moderní Web</CardTitle>
                  <div className="text-4xl font-bold text-gradient-blobs mt-6">CZK 35 000</div>
                  <CardDescription className="mt-4 text-neutral-600">Postavíme vám moderní web</CardDescription>
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
                      <span className="text-black">Přizpůsobený design pro mobily, tablety i počítače</span>
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
                      <span className="text-black">Přehledná struktura, která prodává</span>
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
                      <span className="text-black">Sekce: Domů, O nás, Služby, Kontakt</span>
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
                      <span className="text-black">Profesionální texty psané na míru (včetně SEO)</span>
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
                      <span className="text-black">Kontaktní nebo rezervační formulář</span>
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
                      <span className="text-black">Rychlé načítání & základní SEO nastavení</span>
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
                      <span className="text-black">Možnost rozšíření o AI asistenta</span>
                    </li>
                  </ul>
                  <div className="flex-1"></div>
                  <Button className="btn-gradient-outline rounded-full h-12 px-10 font-medium w-full mt-auto" asChild>
                    <a href="https://buy.stripe.com/9B614m4e93880nl3E7f7i00" target="_blank" rel="noopener noreferrer">
                    Začněte hned
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Standard Package - Highlighted */}
              <Card className="glow-on-hover gradient-border bg-white shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl relative scale-105 h-full flex flex-col min-h-[700px]">
                <Badge className="absolute top-6 left-1/2 -translate-x-1/2 bg-conic-gradient-accent text-black rounded-full border-0 w-max px-4 py-1">
                  Nejžádanější
                </Badge>
                <CardHeader className="text-center pt-10">
                  <CardTitle className="text-2xl font-semibold tracking-tight text-black">AI Prodejní Asistent</CardTitle>
                  <div className="text-4xl font-bold text-gradient-blobs mt-6 flex items-center justify-center">
                    CZK 10 000
                    <span className="relative -top-3 text-sm text-neutral-400 ml-0.5">*</span>
                  </div>
                  <CardDescription className="mt-4 text-neutral-600">Získejte více poptávek</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="space-y-2 text-sm sm:text-base">
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
                      <span className="text-black">Vlastní AI chatbot pro váš web nebo WhatsApp/SMS</span>
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
                      <span className="text-black">Ovládá vaše služby, ceník, nejčastější dotazy i námitky</span>
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
                      <span className="text-black">Přímá rezervace přes chat – napojený na váš systém</span>
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
                      <span className="text-black">Komunikuje vaším tónem – jako skutečný asistent</span>
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
                      <span className="text-black">Nouzová podpora – když se něco pokazí</span>
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
                      <span className="text-black">Měsíční úpravy a zlepšení výkonu</span>
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
                      <span className="text-black">Statistiky: sledujte, co funguje a co zlepšit</span>
                    </li>
                  </ul>
                  <div className="flex-1"></div>
                  <Button className="bg-conic-gradient-accent text-black rounded-full h-12 px-10 font-medium w-full mt-auto mb-1" asChild>
                    <a href="https://buy.stripe.com/9B69AS5idbEE4DB5Mff7i01" target="_blank" rel="noopener noreferrer">
                    Začněte hned
                    </a>
                  </Button>
                  <p className="text-[10px] text-neutral-400 mt-1 text-center">*Měsíčně</p>
                </CardContent>
              </Card>

              {/* Premium Package */}
              <Card className="glow-on-hover border border-neutral-200/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl flex flex-col">
                <CardHeader className="text-center pt-10">
                  <CardTitle className="text-2xl font-semibold tracking-tight text-black">AI Klient Boost</CardTitle>
                  <div className="text-4xl font-bold text-gradient-blobs mt-6 flex items-center justify-center">
                    CZK 15 000
                    <span className="relative -top-3 text-sm text-neutral-400 ml-0.5">*</span>
                  </div>
                  <CardDescription className="mt-4 text-neutral-600">Škálujte tržby a loajalitu</CardDescription>
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
                      <span className="text-black">Vše z AI Prodejního Asistenta (chatbot, rezervace, podpora, optimalizace)</span>
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
                      <span className="text-black">Automatické žádosti o Google recenze po každé návštěvě</span>
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
                      <span className="text-black">Follow-up pro nerozhodnuté návštěvníky – slevy, připomenutí, pobídky</span>
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
                      <span className="text-black">Snížení počtu nedostavených rezervací pomocí chytrých připomínek</span>
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
                      <span className="text-black">Automatické nabídky doplňkových služeb a balíčků</span>
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
                      <span className="text-black">Systém pro opakované objednávky – více věrných zákazníků</span>
                    </li>
                  </ul>
                  <div className="flex-1"></div>
                  <Button className="btn-gradient-outline rounded-full h-12 px-10 font-medium w-full mt-auto" asChild>
                    <a href="https://buy.stripe.com/14A7sKeSNeQQ7PNa2vf7i02" target="_blank" rel="noopener noreferrer">
                    Začněte hned
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Custom Package */}
              <Card className="glow-on-hover border border-neutral-200/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-500 rounded-3xl flex flex-col">
                <CardHeader className="text-center pt-10">
                  <CardTitle className="text-2xl font-semibold tracking-tight text-black">Individuální</CardTitle>
                  <div className="text-4xl font-bold text-gradient-blobs mt-6">Na míru</div>
                  <CardDescription className="mt-4 text-neutral-600">Ušité na míru vašim potřebám i finančním možnostem</CardDescription>
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
                      <span className="text-black">Zcela na míru vytvořený branding a automatizace</span>
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
                      <span className="text-black">Branding, automatizace nebo marketing — váš vlastní mix na míru</span>
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
                      <span className="text-black">Flexibilní rozsah, plán a rozpočet</span>
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
                      <span className="text-black">Ideální pro firmy, které potřebují něco výjimečného a chtějí rychle růst</span>
                    </li>
                  </ul>
                  <div className="flex-1"></div>
                  <Button className="btn-gradient-outline rounded-full h-12 px-10 font-medium w-full mt-auto" asChild>
                    <a href="/custom-quote">Získat nabídku</a>
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
                Milováno lidmi po celé Evropě
              </h2>
              <p className="text-xl text-neutral-600 font-normal">Skutečné výsledky skutečných podniků</p>
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
                    "Upřímně jsem si nemyslela, že to něco změní — ale změnilo, a hodně. Díky AI se většina našich klientů rezervuje automaticky a náš salon působí mnohem profesionálněji. Klienti si toho opravdu všímají."
                    </p>
                  </div>
                  <div className="flex justify-center items-baseline gap-2 mt-auto">
                    <span className="font-semibold tracking-tight text-black">Thảo My Nguyễn</span>
                    <span className="text-neutral-500 text-sm">Majitelka kosmetického salonu</span>
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
                    "Automatizace mi každý den ušetří tolik času. Nemusím pořád dokola odpovídat na stejné otázky a klienti milují, jak je teď vše snadné a plynulé."
                    </p>
                  </div>
                  <div className="flex justify-center items-baseline gap-2 mt-auto">
                    <span className="font-semibold tracking-tight text-black">Alina Dovzhenko</span>
                    <span className="text-neutral-500 text-sm">Majitelka nehtového salonu</span>
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
                    "Nový web a branding dal našemu salonu úplně nový vzhled a chatbot sám rezervuje klienty. Rozhodně nejlepší krok, který jsme pro podnikání udělali."
                    </p>
                  </div>
                  <div className="flex justify-center items-baseline gap-2 mt-auto">
                    <span className="font-semibold tracking-tight text-black">Élodie Carpentier</span>
                    <span className="text-neutral-500 text-sm">Wellness centrum</span>
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
                Často kladené otázky
              </h2>
              <p className="text-xl text-neutral-600 font-normal">Vše, co potřebujete vědět</p>
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
              Připraveni transformovat vaše podnikání?
            </h2>
            <p className="text-xl text-black/90 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
              Připojte se k více než 20 podnikům v Evropě, které již vylepšily svou značku a automatizovaly svůj pracovní postup. Rezervujte si bezplatnou konzultaci ještě dnes.
            </p>
            <a href="https://zcal.co/accentdesign/accentmeeting" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="relative z-10 bg-conic-gradient-accent hover:animate-conic-rotate transition-colors duration-500 text-black text-lg px-12 py-6 h-auto rounded-full border-0 font-medium shadow-lg backdrop-blur-md"
              >
                Rezervujte si bezplatnou schůzku
                <ArrowRight className="ml-3 w-5 h-5 text-black" />
              </Button>
            </a>
            <p className="text-black/70 mt-4 text-sm">Bez závazků • Bezplatná konzultace</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-neutral-100 text-black py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 justify-start">
              <div className="flex flex-col items-start">
                <Image
                  src="/accent_logo.svg"
                  alt="ACCENT Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto mb-4 select-none"
                  style={{ filter: "brightness(0)" }}
                />
                <p className="text-neutral-600 leading-relaxed">
                  Prémiový branding a AI automatizace pro moderní podniky v Praze.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <h4 className="font-semibold mb-4">Služby</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Branding
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      AI Chatboty
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Automatizace
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Webové stránky
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start">
                <h4 className="font-semibold mb-4">Společnost</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      O nás
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Kontakt
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Ochrana soukromí
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Podmínky
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start w-full">
                <h4 className="font-semibold mb-4">Kontaktujte nás</h4>
                <form className="w-full flex flex-col space-y-3">
                  <input
                    type="text"
                    placeholder="Jméno"
                    className="px-4 py-2 rounded-full bg-neutral-200 border border-neutral-300 text-black placeholder-neutral-600 focus:outline-none focus:border-[#823038] w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 rounded-full bg-neutral-200 border border-neutral-300 text-black placeholder-neutral-600 focus:outline-none focus:border-[#823038] w-full"
                  />
                  <textarea
                    placeholder="Zpráva"
                    rows={3}
                    className="px-4 py-2 rounded-2xl bg-neutral-200 border border-neutral-300 text-black placeholder-neutral-600 focus:outline-none focus:border-[#823038] w-full resize-none"
                  />
                  <Button type="submit" className="bg-conic-gradient-accent hover:animate-conic-rotate text-black rounded-full px-6 border-0 w-full">
                    Odeslat
                  </Button>
                </form>
              </div>
            </div>
            <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-600">
              <p>&copy; 2024 ACCENT. Všechna práva vyhrazena.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
