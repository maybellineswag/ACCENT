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
  isClinics?: boolean;
}

function Hero({ translations, isClinics }: HeroProps) {
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

      <div className="w-full px-4 sm:container sm:mx-auto sm:px-6 relative z-10">
        <div className="flex gap-4 pt-32 sm:pt-12 lg:pt-24 pb-8 items-start justify-start flex-col">
          {/* Logo and Brand above Hero */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-2"
          >
            {isClinics ? (
              <Image
                src="/accentnewlogomedical.svg"
                alt="ACCENT Logo"
                width={100}
                height={25}
                className="w-auto h-5 sm:h-6 opacity-90"
              />
            ) : (
              <Image
                src="/accentnewlogo.svg"
                alt="ACCENT Logo"
                width={100}
                height={25}
                className="w-auto h-5 sm:h-6 opacity-90"
              />
            )}
          </motion.div>

          <div className="flex gap-6 flex-col items-start max-w-4xl">
            <h1 className="text-[34px] sm:text-5xl md:text-6xl tracking-normal sm:tracking-tighter text-left font-semibold leading-tight sm:leading-[0.95] text-black max-w-[800px]">
              {translations.hero.title1}
              <span className="text-gradient-blobs">{translations.hero.titlePremium}</span>
              <br className="hidden sm:block" />
              {translations.hero.title2}
            </h1>

            <p className="text-base sm:text-lg md:text-2xl leading-relaxed tracking-normal text-neutral-500 max-w-2xl text-left font-medium">
              {translations.hero.desc}
            </p>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-row items-center gap-4 sm:gap-6 mt-4">
            <GradientButton asChild className="relative z-50 border-none shadow-lg hover:shadow-xl">
              <a href="https://form.typeform.com/to/EcyerrAq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-4">
                <span className="font-semibold text-[14px] sm:text-base leading-tight tracking-normal text-black text-left">
                  {translations.heroCta}
                </span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black flex-shrink-0" />
              </a>
            </GradientButton>

            <a
              href="https://t.me/maybellineswag"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-sm font-medium tracking-normal text-black hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              <Image src="/tglogo.svg" alt="Telegram" width={20} height={20} className="w-5 h-5" />
              <span>Send Message</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div >
  );
}

export { Hero };
