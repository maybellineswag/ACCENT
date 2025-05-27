import Head from "next/head"

const SeoHead = () => (
  <Head>
    <title>ACCENT | Premium Branding & AI Automation in Prague</title>
    <meta name="description" content="Premium branding and AI automation for modern businesses in Prague. Get professional design, smart automation, and more clients in days, not weeks." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href="https://accent.agency/" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://accent.agency/" />
    <meta property="og:title" content="ACCENT | Premium Branding & AI Automation in Prague" />
    <meta property="og:description" content="Premium branding and AI automation for modern businesses in Prague. Get professional design, smart automation, and more clients in days, not weeks." />
    <meta property="og:image" content="https://accent.agency/og-image.jpg" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://accent.agency/" />
    <meta name="twitter:title" content="ACCENT | Premium Branding & AI Automation in Prague" />
    <meta name="twitter:description" content="Premium branding and AI automation for modern businesses in Prague. Get professional design, smart automation, and more clients in days, not weeks." />
    <meta name="twitter:image" content="https://accent.agency/og-image.jpg" />
  </Head>
)

export default SeoHead 