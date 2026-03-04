"use client"

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  translations: any;
}

function Hero({ translations }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { language, setLanguage } = useLanguage();
  const titles = useMemo(
    () => translations.heroRotatingWords || ["Templates", "Stress", "Wasted Time"],
    [translations.heroRotatingWords]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const handleLangChange = (newLang: 'cs' | 'en' | 'ru' | 'uk') => {
    setLanguage(newLang);
    setShowLangDropdown(false);
  };

  return (
    <motion.div
      className="w-full relative"
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Mobile Header - Logo and Globe */}
      < div className="sm:hidden flex items-center justify-between w-full px-4 py-4 relative z-10" >
        <Image
          src="/accentnewsymbol.svg"
          alt="ACCENT Logo"
          width={44}
          height={44}
          className="h-10 w-auto select-none"
        />
        <div className="relative">
          <button
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            className="flex items-center justify-center w-8 h-8 hover:text-black transition-colors"
          >
            <Globe className="w-4 h-4 text-neutral-600" />
          </button>

          {showLangDropdown && (
            <div className="absolute top-10 right-0 bg-white/25 backdrop-blur-sm border border-neutral-200/20 rounded-xl shadow-lg py-2 min-w-[140px] z-50">
              <button
                onClick={() => handleLangChange('cs')}
                className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'cs' ? 'text-black font-medium' : 'text-black'}`}
              >
                <Image src="/flags/cz.svg" alt="Czech" width={16} height={12} className="w-4 h-3" />
                Čeština
              </button>
              <button
                onClick={() => handleLangChange('en')}
                className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'en' ? 'text-black font-medium' : 'text-black'}`}
              >
                <Image src="/flags/us.svg" alt="English" width={16} height={12} className="w-4 h-3" />
                English
              </button>
              <button
                onClick={() => handleLangChange('ru')}
                className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'ru' ? 'text-black font-medium' : 'text-black'}`}
              >
                <Image src="/flags/ru.svg" alt="Russian" width={16} height={12} className="w-4 h-3" />
                Русский
              </button>
              <button
                onClick={() => handleLangChange('uk')}
                className={`w-full px-4 py-2 text-sm text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${language === 'uk' ? 'text-black font-medium' : 'text-black'}`}
              >
                <Image src="/flags/ua.svg" alt="Ukrainian" width={16} height={12} className="w-4 h-3" />
                Українська
              </button>
            </div>
          )}
        </div>
      </div >

      <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6 relative z-10">
        <div className="flex gap-4 pt-8 sm:pt-12 lg:pt-24 pb-8 items-start justify-start flex-col">
          {/* Logo and Brand above Hero */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-2"
          >
            <Image
              src="/accentnewlogo.svg"
              alt="ACCENT Logo"
              width={100}
              height={25}
              className="w-auto h-5 sm:h-6 opacity-90"
            />
          </motion.div>

          <div className="flex gap-6 flex-col items-start max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter text-left font-semibold leading-[0.95] text-black max-w-[800px]">
              {translations.hero.title1}
              <span className="text-gradient-blobs">{translations.hero.titlePremium}</span>
              <br className="hidden sm:block" />
              {translations.hero.title2}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed tracking-tight text-neutral-500 max-w-2xl text-left font-medium">
              {translations.hero.desc}
            </p>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
            <GradientButton asChild className="relative z-50 border-none shadow-lg hover:shadow-xl">
              <a href="https://form.typeform.com/to/EcyerrAq" target="_blank" rel="noopener noreferrer">
                {translations.heroCta}
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </GradientButton>

            <a
              href="https://t.me/maybellineswag"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition-opacity px-2"
            >
              <Image src="/tglogo.svg" alt="Telegram" width={20} height={20} className="w-5 h-5" />
              <span>Send a Message</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div >
  );
}

export { Hero };
