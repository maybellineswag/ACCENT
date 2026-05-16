"use client"

import { useTranslations } from "@/hooks/useTranslations"
import { usePathname } from "next/navigation"

const SeoHead = () => {
  const { translations } = useTranslations()
  const pathname = usePathname()

  if (!translations) return null

  const baseUrl = "https://accentai.eu"
  const currentUrl = `${baseUrl}${pathname}`

  // Base Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ACCENT",
    "url": baseUrl,
    "logo": `${baseUrl}/accentnewsymbol.svg`,
    "description": translations.seo?.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Praha",
      "addressCountry": "CZ"
    },
    "sameAs": [
      "https://www.instagram.com/accent.eu",
      "https://www.linkedin.com/company/accentagency"
    ]
  }

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": organizationSchema.name,
    "description": organizationSchema.description,
    "url": organizationSchema.url,
    "telephone": "+420123456789", // Placeholder or from translations
    "address": organizationSchema.address,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.0755",
      "longitude": "14.4378"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  }

  // Services Schema
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": ["Brand Identity", "Print Design", "Web Design", "Product/UI/UX Design", "Digital & Automation"],
    "provider": {
      "@type": "Organization",
      "name": "ACCENT"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Czech Republic"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Print Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product/UI/UX Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital & Automation"
          }
        }
      ]
    }
  }

  // FAQ Schema (only for FAQ page)
  const faqSchema = pathname === "/faq" && translations.faq?.categories ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": translations.faq.categories.flatMap((cat: any) =>
      cat.questions.map((q: any) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  )
}

export default SeoHead