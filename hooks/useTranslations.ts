import { useLanguage } from '@/contexts/LanguageContext'

export function useTranslations() {
  const { language } = useLanguage()
  
  // Return fallback translations immediately - no loading, no delays
  const fallbackTranslations = {
    "nav": {
      "home": "Home",
      "reviews": "Reviews", 
      "plan": "Plan",
      "services": "Services",
      "how": "How it works",
      "pricing": "Pricing",
      "guarantees": "Guarantees",
      "faq": "FAQ",
      "rezervovat": "Book a call"
    },
    "hero": {
      "title": "Get a website that grows your business without",
      "subtitle": "AI Automation",
      "desc": "Founders who are serious about growth trust our websites and automation to get clients while they focus on their work."
    },
    "notificationBanner": "7 FOUNDERS BOOKED A CALL THIS WEEK",
    "heroBullets": [
      "Successfully transformed over 20 businesses",
      "Based in Prague",
      "Results in weeks, not months"
    ],
    "heroCta": "Book a call",
    "viewWork": "View Work",
    "ourClients": "Our Clients",
    "moreClients": "20+ more",
    "heroRotatingWords": ["Templates", "Stress", "Wasted Time"],
    "benefits": {
      "sectionTitle": "How we help your business",
      "sectionDesc": "Focus on what matters - we'll take care of the rest",
      "titles": [
        "Look premium instantly",
        "Get more clients without stress",
        "Get more reviews",
        "Never miss a potential customer"
      ]
    },
    "testimonials": {
      "title": "Loved by clients across Europe.",
      "metrics": {
        "businesses": "Websites Launched",
        "bookings": "Booking Requests", 
        "months": "Months to First Google Page",
        "increase": "Average Revenue Increase"
      },
      "trustedBy": "Trusted by 30+ businesses",
      "readyToJoin": "Ready to join them?"
    },
    "testimonial1": {
      "occupation": "Beauty Salon Owner",
      "location": "Prague",
      "date": "Dec 15, 2024"
    },
    "testimonial2": {
      "occupation": "Nail Salon Owner", 
      "location": "Prague",
      "date": "Jan 8, 2025"
    },
    "testimonial3": {
      "occupation": "Restaurant Owner",
      "location": "Prague", 
      "date": "Feb 3, 2025"
    },
    "howItWorks": {
      "title": "Your business runs on autopilot in 14 weeks",
      "step1": {
        "title": "STEP 1",
        "subtitle": "Strategic call & brief",
        "duration": "60 minutes",
        "description": "We schedule a call to learn about your services, brand and goals. Then we send you a simple form (content brief) - you don't have to write anything, just bullet points or voice notes.",
        "note": "You don't have to write texts or suggest anything - we'll extract everything from you."
      },
      "step2": {
        "title": "STEP 2", 
        "subtitle": "Design, texts & website creation",
        "duration": "7-14 days",
        "description": "Our team prepares texts, designs pages and builds the entire website. You just rest. Once it's done, we'll send you a preview.",
        "note": "We do 100% of the work. You don't have to touch anything."
      },
      "step3": {
        "title": "STEP 3",
        "subtitle": "Launch & AI assistant", 
        "duration": "2-3 days",
        "description": "After your approval, we launch the website. If you choose an AI assistant, we'll teach it your services and connect it to the website or WhatsApp.",
        "note": "Now you have a website and AI assistant working 24/7 without hiring anyone."
      }
    },
    "pricing": {
      "title": "Pricing",
      "websiteBranding": {
        "title": "Website & Branding",
        "price": "INDIVIDUAL PRICE",
        "description": "Complete branding and website solution created specifically for you",
        "features": [
          "Unique brand identity and logo design",
          "Custom website layout and UX/UI strategy", 
          "Professional conversion-focused copywriting",
          "Interactive graphics and animations",
          "Fully responsive and speed optimized",
          "Dedicated consultation and strategy meeting"
        ],
        "cta": "Book introductory call"
      },
      "modernWebsite": {
        "title": "Modern Website",
        "price": "CZK 35,000",
        "description": "Modern, conversion-optimized website for your business",
        "features": [
          "Custom landing page + basic pages (Home, About, Services, Contact)",
          "Optimized for mobile, tablet and desktop",
          "High-conversion layout with clear calls to action",
          "Contact/booking form integration",
          "SEO-friendly and fast loading",
          "Optional AI sales assistant to increase leads"
        ],
        "cta": "Reserve your spot"
      },
      "limitedSpots": "Limited spots each month - guaranteed personal attention."
    },
    "guarantees": {
      "title": "Our Guarantees",
      "onTime": {
        "title": "On Time",
        "description": "Your website or AI system will be launched on the promised date - no delays, no excuses."
      },
      "professional": {
        "title": "Professional and Secure", 
        "description": "Your website and AI are built according to best industry practices - secure, reliable and professional."
      },
      "noHiddenFees": {
        "title": "No Hidden Fees",
        "description": "What we offer you, you pay exactly - no surprises, no additional costs."
      }
    },
    "scarcity": {
      "title": "If you wait...",
      "subtitle": "Every day without a professional website costs you clients",
      "today": {
        "title": "TODAY",
        "description": "Outdated website, missed calls",
        "status": "Losing opportunities right now"
      },
      "thirtyDays": {
        "title": "IN 30 DAYS", 
        "description": "Lost 50+ potential bookings",
        "status": "Revenue is evaporating"
      },
      "ninetyDays": {
        "title": "IN 90 DAYS",
        "description": "Competitors dominate your market",
        "status": "Recovery becomes expensive"
      },
      "cta": {
        "title": "Don't let this be your story",
        "button": "Get started today"
      }
    },
    "faq": {
      "title": "Frequently Asked Questions",
      "subtitle": "Everything you need to know",
      "questions": [
        {
          "question": "How long does it take to create a website?",
          "answer": "Typically 7-14 days for a complete website, depending on complexity."
        },
        {
          "question": "Do you provide ongoing support?",
          "answer": "Yes, we provide support and maintenance for all our websites."
        },
        {
          "question": "What's included in the website package?",
          "answer": "Custom design, responsive layout, SEO optimization, contact forms, and basic content management."
        },
        {
          "question": "Can I make changes to my website after launch?",
          "answer": "Yes, we provide training and ongoing support for content updates and modifications."
        },
        {
          "question": "Do you offer hosting services?",
          "answer": "Yes, we can provide reliable hosting with 99.9% uptime guarantee."
        },
        {
          "question": "What if I'm not satisfied with the result?",
          "answer": "We offer unlimited revisions until you're completely happy with your website."
        }
      ],
      "cta": {
        "button": "Book a call",
        "note": "Free consultation, no obligation"
      }
    },
    "footer": {
      "copyright": "© 2024 ACCENT. All rights reserved.",
      "description": "Premium branding and AI automation for modern businesses in Prague.",
      "services": {
        "title": "Services",
        "items": ["Web Design", "Branding", "AI Automation", "SEO"]
      },
      "company": {
        "title": "Company", 
        "items": ["About Us", "Our Work", "Contact", "Blog"]
      },
      "contact": {
        "title": "Contact",
        "email": "Your email",
        "message": "Your message", 
        "send": "Send"
      }
    }
  }

  return { translations: fallbackTranslations, loading: false, language }
}