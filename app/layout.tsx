import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import TanstackProvider from '@/provider/TanStackProvider'
import { Toaster } from '@/components/ui/sonner'
import { Suspense } from 'react'
import {
  SITE_URL,
  SITE_NAME,
  SITE_FULL_NAME,
  SITE_DESCRIPTION_EN,
  SITE_DESCRIPTION_MY,
  SITE_KEYWORDS,
  SITE_CONTACT,
  SITE_SOCIAL,
  absoluteUrl,
} from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_FULL_NAME} — Myanmar Taxi & Ride-Hailing App | Loyar Thwar, Sar, Poh, Airport`,
    template: `%s | ${SITE_NAME} Myanmar`,
  },
  description: SITE_DESCRIPTION_EN,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_FULL_NAME, url: SITE_URL }],
  creator: SITE_FULL_NAME,
  publisher: SITE_FULL_NAME,
  category: 'Transportation',
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      my: SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['my_MM'],
    url: SITE_URL,
    siteName: SITE_FULL_NAME,
    title: `${SITE_FULL_NAME} — Myanmar Taxi & Ride-Hailing App`,
    description: SITE_DESCRIPTION_EN,
    images: [
      {
        url: absoluteUrl('/images/loyar-logo.jpg'),
        width: 1200,
        height: 630,
        alt: 'Loyar Myanmar — Taxi & Ride-Hailing in Myanmar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_FULL_NAME} — Myanmar Taxi & Ride-Hailing App`,
    description: SITE_DESCRIPTION_EN,
    images: [absoluteUrl('/images/loyar-logo.jpg')],
  },
  icons: {
    icon: [
      { url: '/images/loyar_logo.png', type: 'image/png' },
    ],
    apple: [{ url: '/images/loyar_logo.png', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add real codes via env when available:
    // google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'description:my': SITE_DESCRIPTION_MY,
  },
}

export const viewport: Viewport = {
  themeColor: '#F5B301',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: SITE_FULL_NAME,
      alternateName: [SITE_NAME, 'Loyar Taxi', 'လိုရာ'],
      url: SITE_URL,
      logo: absoluteUrl('/images/loyar_logo.png'),
      image: absoluteUrl('/images/loyar-logo.jpg'),
      description: SITE_DESCRIPTION_EN,
      email: SITE_CONTACT.email,
      telephone: SITE_CONTACT.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No.A3, Kabar Aye Villa, Mayangone Township',
        addressLocality: 'Yangon',
        postalCode: '11052',
        addressCountry: 'MM',
      },
      sameAs: [SITE_SOCIAL.facebook, SITE_SOCIAL.youtube],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_FULL_NAME,
      alternateName: SITE_NAME,
      publisher: { '@id': `${SITE_URL}#organization` },
      inLanguage: ['en', 'my'],
    },
    {
      '@type': 'TaxiService',
      name: 'Loyar Taxi',
      url: SITE_URL,
      description:
        'Ride-hailing in Myanmar: Loyar Thwar (premium), Loyar Sar (shared/affordable), Loyar Poh (family/spacious), Airport Checkin transfers. 24/7, verified drivers, transparent pricing.',
      provider: { '@id': `${SITE_URL}#organization` },
      areaServed: { '@type': 'Country', name: 'Myanmar' },
      telephone: SITE_CONTACT.phone,
      priceRange: '$$',
      openingHours: 'Mo-Su 00:00-23:59',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Loyar ride services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Loyar Thwar — premium business rides' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Loyar Sar — affordable shared rides' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Loyar Poh — family-friendly spacious rides' },
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Airport Checkin — airport transfers with flight tracking' },
          },
        ],
      },
    },
    {
      '@type': 'MobileApplication',
      name: 'LOYAR — Myanmar Taxi App',
      operatingSystem: ['Android', 'iOS'],
      applicationCategory: 'TravelApplication',
      url: SITE_URL,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'MMK' },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <TanstackProvider>
          <Suspense>
            {children}
          </Suspense>
          <Toaster richColors position='bottom-right' />
        </TanstackProvider>
        <Analytics />
      </body>
    </html>
  )
}
