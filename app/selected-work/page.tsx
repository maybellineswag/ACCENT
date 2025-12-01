"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/hooks/useTranslations"
import { BreadcrumbStructuredData } from "@/components/BreadcrumbStructuredData"

export default function SelectedWorkPage() {
  const { language } = useLanguage()
  const { translations, loading } = useTranslations()

  const projectImages = [
    '/WEBSITES/APEXMOTORS.png',
    '/WEBSITES/BILLO.avif',
    '/WEBSITES/BLOOM.png',
    '/WEBSITES/ELIMINAR.jpeg',
    '/WEBSITES/LUMEASTUDIO.png',
    '/WEBSITES/NOVA33.png',
    '/WEBSITES/SERENITY.png',
    '/WEBSITES/TRANQUILSTUDIO.png',
    '/WEBSITES/VELVETVEIL.png',
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
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://accent.agency" },
          { name: "Selected Work", url: "https://accent.agency/selected-work" }
        ]}
      />
      <div className="min-h-screen relative overflow-hidden">
        {/* Aurora Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <AuroraBackground className="h-full w-full" showRadialGradient={true}>
            <div></div>
          </AuroraBackground>
        </div>

        {/* Back Button */}
        <div className="fixed top-6 left-6 z-20">
          <Link 
            href="/"
            className="flex items-center gap-2 text-black hover:text-neutral-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{translations.selectedWork?.backToHome ?? 'Back to Home'}</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="pt-24 pb-16 px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold text-black mb-8 tracking-tighter"
              >
                {translations.selectedWork?.title ?? 'Selected Work'}
              </motion.h1>
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="w-full"
                >
                             <div className="max-w-4xl mx-auto bg-white/25 backdrop-blur-sm border border-neutral-200/20 rounded-2xl overflow-hidden shadow-lg">
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

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-16"
            >
              <p className="text-lg text-neutral-600 mb-6">
                {translations.selectedWork?.ctaLead ?? 'Ready to join our portfolio of successful clients?'}
              </p>
              <Link 
                href="https://cal.com/accent/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors"
              >
                {translations.selectedWork?.ctaButton ?? 'Start Your Project'}
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
