"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations } from "@/hooks/useTranslations"

import Link from "next/link"

interface FooterProps {
    isClinics?: boolean
}

export function Footer({ isClinics = false }: FooterProps) {
    const { translations, loading } = useTranslations()

    if (loading || !translations) {
        return null
    }

    const menuLinks = [
        { label: translations.footer.company.items[0], href: "/clinics-beauty" },
        { label: translations.footer.company.items[1], href: "/#works" },
        { label: translations.footer.company.items[2], href: "/pricing" },
        { label: translations.footer.company.items[3], href: "/privacy-policy" },
        { label: translations.footer.company.items[4], href: "https://instagram.com/accent.agency" },
    ]

    return (
        <footer className="text-black pt-16 pb-8 relative z-10 border-t border-neutral-200/20 backdrop-blur-sm bg-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="flex flex-wrap items-start gap-x-12 md:gap-x-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                >
                    {/* Logo and Copyright Column */}
                    <motion.div
                        className="flex flex-col h-[68px] justify-between"
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="flex items-start">
                            <Image
                                src={isClinics ? "/accentnewlogomedical.svg" : "/accentnewlogo.svg"}
                                alt="ACCENT Logo"
                                width={isClinics ? 100 : 40}
                                height={isClinics ? 25 : 40}
                                className="h-10 w-auto select-none"
                            />
                        </div>
                        <p className="text-neutral-500 text-[13px] font-medium tracking-tight whitespace-nowrap">
                            {translations.footer.copyright}
                        </p>
                    </motion.div>

                    {/* Menu Column */}
                    <motion.div
                        className="flex flex-col h-[68px] justify-between"
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h4 className="font-semibold text-sm uppercase tracking-[0.1em] text-black/50 pt-1">
                            {translations.footer.company.title}
                        </h4>
                        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-black/60 font-medium text-[15px] pb-0.5">
                            {menuLinks.map((link, index) => (
                                <li key={index}>
                                    {link.href.startsWith('http') ? (
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors whitespace-nowrap">
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link href={link.href} className="hover:text-black transition-colors whitespace-nowrap">
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    )
}
