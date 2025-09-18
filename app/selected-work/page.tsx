"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/hooks/useTranslations"

export default function SelectedWorkPage() {
  const [activeCategory, setActiveCategory] = useState('web-design')
  const { language } = useLanguage()
  const { translations, loading } = useTranslations()

  const categories = [
    { id: 'web-design', label: 'Web Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'ai-automation', label: 'AI Automation' }
  ]

  const projects = {
    'web-design': [
      {
        id: 1,
        title: 'Website Design 1',
        image: '/WEBSITES/Z2APdoxL9VAqk4Fu0TKGubQxw.jpg.avif'
      },
      {
        id: 2,
        title: 'Website Design 2',
        image: '/WEBSITES/uY9cX3TUnob6lDyPL29U3KIyQ.jpeg.avif'
      },
      {
        id: 3,
        title: 'Website Design 3',
        image: '/WEBSITES/I8oHWGEspoFvoyq8wSOzRqn4NE.jpeg.avif'
      },
      {
        id: 4,
        title: 'Website Design 4',
        image: '/WEBSITES/YhqnGG8Adem6abok9bC2fs3QTJs.jpg.avif'
      },
      {
        id: 5,
        title: 'Website Design 5',
        image: '/WEBSITES/QPsqCsx9WSJfhtmSGf0ghwSu6Eg.jpeg.avif'
      }
    ],
    'branding': [
      {
        id: 1,
        title: 'Branding Project 1',
        image: '/WEBSITES/Z2APdoxL9VAqk4Fu0TKGubQxw.jpg.avif'
      },
      {
        id: 2,
        title: 'Branding Project 2',
        image: '/WEBSITES/uY9cX3TUnob6lDyPL29U3KIyQ.jpeg.avif'
      }
    ],
    'ai-automation': [
      {
        id: 1,
        title: 'AI Automation Project 1',
        image: '/WEBSITES/I8oHWGEspoFvoyq8wSOzRqn4NE.jpeg.avif'
      },
      {
        id: 2,
        title: 'AI Automation Project 2',
        image: '/WEBSITES/YhqnGG8Adem6abok9bC2fs3QTJs.jpg.avif'
      }
    ]
  }

  if (loading || !translations) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <>
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
            <span className="text-sm font-medium">Back to Home</span>
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
                Selected Work
              </motion.h1>

              {/* Category Navigation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center gap-4 mb-12"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-black text-white shadow-lg'
                        : 'text-black hover:text-neutral-700'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Projects Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {projects[activeCategory as keyof typeof projects].map((project, index) => (
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
               width={2512}
               height={1640}
               className="w-full h-auto object-cover"
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
                Ready to join our portfolio of successful clients?
              </p>
              <Link 
                href="/custom-quote"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors"
              >
                Start Your Project
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
