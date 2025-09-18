"use client"

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { BlurAnimate, BlurAnimateUp, BlurAnimateDown, BlurAnimateScale } from "@/components/ui/blur-animate";
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
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-12 lg:py-8 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            {/* Notification Banner */}
            <BlurAnimateDown delay={0} className="relative mb-1">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="!text-black text-sm font-medium tracking-wide">
                  {translations.notificationBanner}
                </span>
              </div>
            </BlurAnimateDown>

            {/* Main Title */}
            <BlurAnimateUp delay={5}>
              <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
                <span className="text-black">{translations.hero.title}</span>
                <br />
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-8 md:pt-2">
                  &nbsp;
                  {titles.map((title, index) => (
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
            </BlurAnimateUp>

            {/* Description */}
            <BlurAnimate delay={10}>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center">
                {translations.hero.desc}
              </p>
            </BlurAnimate>
          </div>
          
          {/* Main CTA Button */}
          <BlurAnimateScale delay={15}>
            <div className="flex flex-col sm:flex-row items-center gap-8">
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
          </BlurAnimateScale>

          {/* Clients Section */}
          <BlurAnimateUp delay={20}>
            <div className="mt-2">
              <div className="flex items-center justify-center gap-x-4 sm:gap-x-12">
                <p className="text-black font-medium">{translations.ourClients}</p>
                <Image src="/workedwith/longlerielogo.svg" alt="Longlerie Logo" width={48} height={20} className="w-12 h-auto sm:w-20 flex-shrink-0" />
                <Image src="/workedwith/yubilogo.svg" alt="Yubi Logo" width={48} height={20} className="w-12 h-auto sm:w-20 flex-shrink-0" />
                <Image src="/workedwith/mixlogo.svg" alt="Mix Logo" width={48} height={20} className="w-12 h-auto sm:w-20 flex-shrink-0" />
                <Image src="/workedwith/belgravialogo.svg" alt="Belgravia Logo" width={48} height={20} className="w-12 h-auto sm:w-20 flex-shrink-0" />
                <span className="text-black text-sm font-medium">{translations.moreClients}</span>
              </div>
            </div>
          </BlurAnimateUp>
        </div>
      </div>
    </div>
  );
}

export { Hero };
