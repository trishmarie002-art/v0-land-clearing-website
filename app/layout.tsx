import Script from "next/script";
import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700']
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    default: "Jay's Land Clearing Service & Dirt Work | San Antonio TX",
    template: "%s | Jay's Land Clearing Service"
  },
  description: 'Professional land clearing services in San Antonio and surrounding areas. Expert brush removal, dirt work, grading, excavation, and lot preparation. Serving Bexar County, New Braunfels, Boerne, Seguin & more. Call (210) 891-4174 for free estimates.',
  keywords: [
    'land clearing San Antonio',
    'land clearing services near me',
    'brush removal San Antonio',
    'dirt work San Antonio',
    'excavation services San Antonio',
    'lot clearing San Antonio TX',
    'tree removal San Antonio',
    'land grading San Antonio',
    'brush clearing near me',
    'lot preparation San Antonio',
    'fence line clearing',
    'cedar clearing San Antonio',
    'mesquite removal Texas',
    'land clearing Bexar County',
    'dirt work near me',
    'excavation near me',
    'San Antonio land clearing contractor',
    'affordable land clearing San Antonio',
    'residential land clearing San Antonio',
    'commercial land clearing San Antonio',
    'ranch clearing San Antonio',
    'property clearing services',
    'land clearing New Braunfels',
    'land clearing Boerne TX',
    'land clearing Seguin TX',
    'land clearing Helotes',
    'land clearing Castroville',
    'South Texas land clearing'
  ],
  authors: [{ name: "Jay's Land Clearing Service & Dirt Work" }],
  creator: "Jay's Land Clearing Service & Dirt Work",
  publisher: "Jay's Land Clearing Service & Dirt Work",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://jayslandclearing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jay's Land Clearing Service & Dirt Work | San Antonio TX",
    description: 'Professional land clearing, brush removal, dirt work & excavation in San Antonio. Serving all surrounding areas. Free estimates! Call (210) 891-4174',
    url: 'https://jayslandclearing.com',
    siteName: "Jay's Land Clearing Service & Dirt Work",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-1.jpg',
        width: 1200,
        height: 630,
        alt: "Jay's Land Clearing Service - Professional Land Clearing in San Antonio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jay's Land Clearing Service | San Antonio TX",
    description: 'Professional land clearing, brush removal & dirt work in San Antonio. Free estimates! Call (210) 891-4174',
    images: ['/images/hero-1.jpg'],
  },
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
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
  category: 'Construction',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

// Local Business JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://jayslandclearing.com',
  name: "Jay's Land Clearing Service & Dirt Work",
  description: 'Professional land clearing, brush removal, dirt work, grading, and excavation services in San Antonio and surrounding areas.',
  url: 'https://jayslandclearing.com',
  telephone: '+1-210-891-4174',
  email: 'jayslandclearingservices@gmail.com',
  image: 'https://jayslandclearing.com/images/hero-1.jpg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Antonio',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.4241,
    longitude: -98.4936,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'San Antonio',
      '@id': 'https://www.wikidata.org/wiki/Q975',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Bexar County',
    },
    { '@type': 'City', name: 'New Braunfels' },
    { '@type': 'City', name: 'Boerne' },
    { '@type': 'City', name: 'Seguin' },
    { '@type': 'City', name: 'Helotes' },
    { '@type': 'City', name: 'Castroville' },
    { '@type': 'City', name: 'Floresville' },
    { '@type': 'City', name: 'Pleasanton' },
    { '@type': 'City', name: 'Schertz' },
    { '@type': 'City', name: 'Cibolo' },
    { '@type': 'City', name: 'Universal City' },
    { '@type': 'City', name: 'Live Oak' },
    { '@type': 'City', name: 'Converse' },
  ],
  serviceType: [
    'Land Clearing',
    'Brush Removal',
    'Dirt Work',
    'Grading',
    'Excavation',
    'Lot Preparation',
    'Fence Line Clearing',
    'Tree Removal',
    'Cedar Clearing',
    'Hauling Services',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    // Add social media links here when available
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
}

// Service JSON-LD for rich results
const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Land Clearing Service',
  provider: {
    '@type': 'LocalBusiness',
    name: "Jay's Land Clearing Service & Dirt Work",
    telephone: '+1-210-891-4174',
  },
  areaServed: {
    '@type': 'State',
    name: 'Texas',
  },
  description: 'Professional land clearing, brush removal, dirt work, and excavation services. We clear residential and commercial properties, ranches, and lots throughout San Antonio and South Texas.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="San Antonio" />
        <meta name="geo.position" content="29.4241;-98.4936" />
        <meta name="ICBM" content="29.4241, -98.4936" />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}

        <Script id="clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "w8bxwftdzs");
  `}
</Script>
        
        <Analytics />
      </body>
    </html>
  )
}
