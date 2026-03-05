import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://accentai.eu'
    const today = new Date().toISOString().split('T')[0]

    return [
        {
            url: baseUrl,
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/clinics-beauty`,
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/selected-work`,
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/custom-quote`,
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]
}
