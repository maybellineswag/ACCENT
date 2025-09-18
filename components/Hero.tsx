"use client"

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  translations: any;
}

function Hero({ translations }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
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

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex gap-6 sm:gap-8 py-8 sm:py-12 lg:py-8 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            {/* Notification Banner */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-1 px-4 sm:px-0"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 bg-white/25 backdrop-blur-sm border border-neutral-200/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                <span className="!text-black text-xs sm:text-sm font-medium tracking-wide text-center">
                  {translations.notificationBanner}
                </span>
              </div>
            </motion.div>

                                                   <h1 className="text-3xl sm:text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
                <span className="text-black">{translations.hero.title}</span>
                <br />
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-8 md:pt-2">
                  &nbsp;
                  {titles.map((title: string, index: number) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold text-gradient-blobs px-2 py-1"
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

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center">
              {translations.hero.desc}
            </p>
          </div>
          
          {/* Main CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
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
          <div className="mt-2">
            <div className="flex items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-12">
              <p className="text-black font-medium text-sm sm:text-base">{translations.ourClients}</p>
              <Image src="/workedwith/longlerielogo.svg" alt="Longlerie Logo" width={48} height={20} className="w-8 sm:w-12 md:w-20 h-auto flex-shrink-0" />
              <Image src="/workedwith/yubilogo.svg" alt="Yubi Logo" width={48} height={20} className="w-8 sm:w-12 md:w-20 h-auto flex-shrink-0" />
              <Image src="/workedwith/mixlogo.svg" alt="Mix Logo" width={48} height={20} className="w-8 sm:w-12 md:w-20 h-auto flex-shrink-0" />
              <Image src="/workedwith/belgravialogo.svg" alt="Belgravia Logo" width={48} height={20} className="w-8 sm:w-12 md:w-20 h-auto flex-shrink-0" />
              <span className="text-black text-xs sm:text-sm font-medium">{translations.moreClients}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export { Hero };
