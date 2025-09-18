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
      className="w-full"
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Mobile Header - Logo and Globe */}
      <div className="sm:hidden flex items-center justify-between w-full px-4 py-4">
        <Image
          src="/accent_logo.svg"
          alt="ACCENT Logo"
          width={40}
          height={40}
          className="h-10 w-auto select-none text-gradient-blobs"
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
      </div>
      
      <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">
        <div className="flex gap-6 sm:gap-8 py-8 sm:py-12 lg:py-8 items-start sm:items-center justify-start sm:justify-center flex-col">
          <div className="flex gap-4 flex-col items-start sm:items-center">
            {/* Notification Banner */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-1 pl-2"
            >
              <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                <span className="!text-black text-[10px] sm:text-sm font-medium tracking-wide text-left sm:text-center whitespace-nowrap">
                  {translations.notificationBanner}
                </span>
              </div>
            </motion.div>

                                                   <h1 className="text-5xl sm:text-5xl md:text-7xl max-w-4xl tracking-tighter text-left sm:text-center font-regular">
                <span className="text-black">{translations.hero.title}</span>
                <br />
                <span className="relative flex w-full justify-start sm:justify-center overflow-hidden text-left sm:text-center md:pb-8 md:pt-2">
                  &nbsp;
                  {titles.map((title: string, index: number) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold text-gradient-blobs"
                      initial={{ opacity: 0, y: -50 }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -50 : 50,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>

            <p className="text-xs sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-left sm:text-center">
              {translations.hero.desc}
            </p>
          </div>
          
          {/* Main CTA Button */}
          <div className="flex flex-row items-center gap-6 sm:gap-8">
            <GradientButton asChild className="relative z-50">
              <a href="https://zcal.co/accentdesign/accentmeeting" target="_blank" rel="noopener noreferrer">
                {translations.heroCta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </GradientButton>
            <Link href="/selected-work" className="text-black underline hover:no-underline transition-all">
              {translations.viewWork}
            </Link>
          </div>

          {/* Clients Section */}
          <div className="mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-4 sm:gap-x-6 md:gap-x-12">
              <p className="text-black font-medium text-sm sm:text-base">{translations.ourClients}</p>
              <div className="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-8">
                <Image src="/workedwith/longlerielogo.svg" alt="Longlerie Logo" width={48} height={20} className="w-14 sm:w-18 md:w-24 h-auto flex-shrink-0" />
                <Image src="/workedwith/yubilogo.svg" alt="Yubi Logo" width={48} height={20} className="w-14 sm:w-18 md:w-24 h-auto flex-shrink-0" />
                <Image src="/workedwith/mixlogo.svg" alt="Mix Logo" width={48} height={20} className="w-14 sm:w-18 md:w-24 h-auto flex-shrink-0" />
                <Image src="/workedwith/belgravialogo.svg" alt="Belgravia Logo" width={48} height={20} className="w-14 sm:w-18 md:w-24 h-auto flex-shrink-0" />
                <span className="text-black text-xs sm:text-sm font-medium ml-2">{translations.moreClients}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export { Hero };
