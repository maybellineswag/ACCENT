"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home, Globe } from "lucide-react"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/hooks/useTranslations"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import SeoHead from "@/components/SeoHead"

export default function SelectedWorkPage() {
  const { language } = useLanguage()
  const { translations, loading } = useTranslations()

  const projectImages = [
    '/WEBSITES/APEXMOTORS.webp',
    '/WEBSITES/BILLO.webp',
    '/WEBSITES/BLOOM.webp',
    '/WEBSITES/ELIMINAR.webp',
    '/WEBSITES/LUMEASTUDIO.webp',
    '/WEBSITES/NOVA33.webp',
    '/WEBSITES/SERENITY.webp',
    '/WEBSITES/TRANQUILSTUDIO.webp',
    '/WEBSITES/VELVETVEIL.webp',
  ]

  const projects = projectImages.map((src, index) => {
    const filename = src.split('/').pop() || ''
    const base = filename.split('.')[0]
    const readable = base.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    return {
      id: index + 1,
      title: readable,
      image: src,
    }
  })

  const [displayProjects, setDisplayProjects] = useState<typeof projects>([])

  // Lightweight inline placeholder to improve perceived load while images decode
  const blurDataURL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

  useEffect(() => {
    const shuffled = [...projects].sort(() => Math.random() - 0.5)
    setDisplayProjects(shuffled)
  }, [])

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
        {/* Full-page background */}
        <div className="fixed inset-0 z-0 w-full h-full">
          <Image
            src="/accentbackground.png?v=3"
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden="true"
          />
        </div>

        {/* Floating Navigation */}
        <NavBar />

        {/* Main Content */}
        <div className="pt-24 sm:pt-24 pb-16 px-4 sm:px-2 lg:px-4 relative z-10 w-full">
          <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">
            {/* Header Content Section aligned with other pages */}
            <div className="flex gap-4 pt-12 sm:pt-12 lg:pt-24 pb-8 items-start justify-start flex-col">
              <motion.div
                className="text-left mb-12 max-w-4xl"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Breadcrumb (HOME > WORKS) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mb-2"
                >
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="flex items-center gap-1 text-neutral-500 hover:text-black transition-colors text-xs font-semibold tracking-widest uppercase">
                          {translations.common.breadcrumbs.home}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="text-neutral-300" />
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-black font-semibold text-xs tracking-widest uppercase">{translations.common.breadcrumbs.works}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </motion.div>

                <h1 className="text-[32px] sm:text-5xl md:text-6xl tracking-tight sm:tracking-tighter text-left font-semibold leading-tight text-black mb-2">
                  <span>{translations.selectedWork?.title ?? 'Selected Work'}</span>
                </h1>
                <p className="text-base sm:text-lg md:text-2xl leading-relaxed tracking-tight text-neutral-500 max-w-2xl text-left font-medium">
                  {translations.selectedWork?.ctaLead ?? 'Ready to join our portfolio of successful clients?'}
                </p>
              </motion.div>
            </div>

            {/* Projects Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {(displayProjects.length ? displayProjects : projects).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full"
                >
                  <div className="max-w-4xl bg-white/25 backdrop-blur-sm border border-neutral-200/20 rounded-2xl overflow-hidden shadow-lg glow-on-hover">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1600}
                      height={1045}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      quality={70}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      priority={index === 0}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      decoding="async"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
