import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  title: {
    default: "Jay's Land Clearing Service & Dirt Work | San Antonio TX",
    template: "%s | Jay's Land Clearing Service",
  },
  description:
    'Professional land clearing services in San Antonio and surrounding areas. Expert brush removal, dirt work, grading, excavation, and lot preparation. Serving Bexar County, New Braunfels, Boerne, Seguin & more. Call (210) 891-4174 for free estimates.',
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
    'South Texas land clearing',
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
    description:
      'Professional land clearing, brush removal, dirt work & excavation in San Antonio. Serving all surrounding areas. Free estimates! Call (210) 891-4174',
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
    description:
      'Professional land clearing, brush removal & dirt work in San Antonio. Free estimates! Call (210) 891-4174',
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
  category: 'Construction',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Jay's Land Clearing Service & Dirt Work",
  url: 'https://jayslandclearing.com',
  telephone: '+1-210-891-4174',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TBGQ2LPL');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="San Antonio" />
        <meta name="geo.position" content="29.4241;-98.4936" />
        <meta name="ICBM" content="29.4241, -98.4936" />
      </head>

      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TBGQ2LPL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
        <Analytics />

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w8bxwftdzs");
          `}
        </Script>
      </body>
    </html>
  )
}
