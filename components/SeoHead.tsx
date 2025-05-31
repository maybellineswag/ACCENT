import Head from "next/head"

const SeoHead = () => (
  <Head>
    <title>ACCENT | Prémiový Branding & AI Automatizace v Praze</title>
    <meta name="description" content="Prémiový branding a AI automatizace pro moderní podniky v Praze. Získejte profesionální design, chytrou automatizaci a více klientů během dnů, ne týdnů." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href="https://accent.agency/" />
    
    {/* Basic favicon */}
    <link rel="icon" type="image/x-icon" href="/accenticon.ico" />
    <link rel="shortcut icon" type="image/x-icon" href="/accenticon.ico" />
    
    {/* Additional meta tags */}
    <meta name="application-name" content="ACCENT" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="ACCENT" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    
    {/* Structured data for local business */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ACCENT",
          "description": "Prémiový branding a AI automatizace pro moderní podniky v Praze",
          "url": "https://accent.agency",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Praha",
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
            "closes": "17:00"
          },
          "sameAs": [
            "https://www.instagram.com/accentagency",
            "https://www.linkedin.com/company/accentagency"
          ]
        })
      }}
    />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://accent.agency/" />
    <meta property="og:title" content="ACCENT | Prémiový Branding & AI Automatizace v Praze" />
    <meta property="og:description" content="Prémiový branding a AI automatizace pro moderní podniky v Praze. Získejte profesionální design, chytrou automatizaci a více klientů během dnů, ne týdnů." />
    <meta property="og:image" content="https://accent.agency/accenticon.ico" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://accent.agency/" />
    <meta name="twitter:title" content="ACCENT | Prémiový Branding & AI Automatizace v Praze" />
    <meta name="twitter:description" content="Prémiový branding a AI automatizace pro moderní podniky v Praze. Získejte profesionální design, chytrou automatizaci a více klientů během dnů, ne týdnů." />
    <meta name="twitter:image" content="https://accent.agency/accenticon.ico" />
  </Head>
)

export default SeoHead 