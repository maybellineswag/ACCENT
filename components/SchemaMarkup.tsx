import React from 'react'

export function SchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://accent.agency/#organization",
        "name": "ACCENT",
        "url": "https://accent.agency",
        "logo": "https://accent.agency/accentflower.svg",
        "image": "https://accent.agency/accentlogos.png",
        "description": "Professional web design and visual identity for modern businesses. Get a premium, custom-built website that builds trust and grows your revenue.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Prague",
            "addressCountry": "CZ"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.0755",
            "longitude": "14.4378"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.instagram.com/accentagency",
            "https://www.linkedin.com/company/accentagency"
        ],
        "priceRange": "$$",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Business Services",
            "itemListElement": [
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
                        "name": "Visual Identity"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Branding"
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
