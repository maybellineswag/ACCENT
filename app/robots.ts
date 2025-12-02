import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/custom-quote/thank-you'],
    },
    sitemap: 'https://accent.agency/sitemap.xml',
  }
}


