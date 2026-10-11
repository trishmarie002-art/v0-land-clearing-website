import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, MapPin, Phone, ArrowRight, Truck, Trees, Shovel, Ruler } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"
import { locations, locationBySlug } from "@/lib/locations"

type Props = {
  params: Promise<{ slug: string }>
}

const baseUrl = "https://jayslandclearingserviceanddirtwork.com"

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = locationBySlug[slug]

  if (!location) {
    return {}
  }

  const title = `Land Clearing Services & Dirt Work in ${location.city}, TX`
  const description = `Land clearing services & dirt work in ${location.city}, TX. Brush clearing, grading, excavation, lot prep & hauling. Free estimates: (210) 891-4174.`
  const url = `${baseUrl}/${location.slug}`

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Jay's Land Clearing Service`,
      description,
      url,
      siteName: "Jay's Land Clearing Service & Dirt Work",
      type: "website",
      images: [
        {
          url: "/images/hero-1.jpg",
          width: 1200,
          height: 630,
          alt: `Land clearing and dirt work in ${location.city}, Texas`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero-1.jpg"],
    },
  }
}

const services = [
  {
    title: "Land & Brush Clearing",
    icon: Trees,
    text: "Clear thick brush, small trees, overgrowth and unwanted vegetation so your property is easier to access, maintain and improve.",
  },
  {
    title: "Dirt Work & Grading",
    icon: Ruler,
    text: "Shape and level ground for driveways, building areas, drainage improvements, access routes and general property preparation.",
  },
  {
    title: "Excavation & Site Prep",
    icon: Shovel,
    text: "Prepare sites for homes, shops, pads, driveways and other improvements with equipment-based excavation and earthwork.",
  },
  {
    title: "Hauling & Cleanup",
    icon: Truck,
    text: "Move dirt, remove debris and clean up material left from clearing or site preparation so the property is ready for the next phase.",
  },
]

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = locationBySlug[slug]

  if (!location) {
    notFound()
  }

  const nearbyLinks = location.nearby
    .map((city) => locations.find((item) => item.city === city))
    .filter(Boolean)

  const pageUrl = `${baseUrl}/${location.slug}`

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jay's Land Clearing Service & Dirt Work",
    url: pageUrl,
    telephone: "+1-210-891-4174",
    email: "jayslandclearingservices@gmail.com",
    areaServed: {
      "@type": "City",
      name: `${location.city}, Texas`,
    },
    serviceType: [
      "Land Clearing",
      "Brush Clearing",
      "Dirt Work",
      "Grading",
      "Excavation",
      "Lot Preparation",
      "Fence Line Clearing",
      "Hauling",
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: `${baseUrl}/service-areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${location.city}, TX`,
        item: pageUrl,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <UrgentQuoteBanner />
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative pt-40 md:pt-48 pb-20 md:pb-28 overflow-hidden border-b border-border">
        <img
          src="https://res.cloudinary.com/doosan-bobcat/image/upload/ar_1.5,c_fill,f_auto,g_auto,q_auto,w_1600/v1642779103/bobcat-assets/na-bobcat-com/products/loaders/skid-steer-loaders/s66-r/images/bobcat-s66-flail-cutter-s6c5357-19f4-fc-544x362"
          alt={`Land clearing services and dirt work in ${location.city}, Texas`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.22),transparent_42%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-white/70 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-primary transition-colors">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{location.city}, TX</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4" />
              Serving {location.city} & {location.county}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight text-white font-[family-name:var(--font-display)]">
              Land Clearing Services & <span className="text-primary">Dirt Work</span> in {location.city}, TX
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl">
              {location.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="tel:+12108914174"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-4 rounded-md hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (210) 891-4174
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-black/40 text-white px-6 py-4 rounded-md font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Get a Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Local Property Services</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 uppercase font-[family-name:var(--font-display)]">
                Property Clearing & Site Work in {location.city}
              </h2>
              <p className="text-foreground/75 leading-relaxed text-lg mb-6">
                {location.localNeeds}
              </p>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Every property is different. The amount of vegetation, access for equipment, slope, soil conditions,
                debris, acreage and final use of the property all affect the best approach. We start by understanding
                what you want the finished site to do, then determine the clearing and dirt work needed to get it there.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Whether you are preparing a new homesite, opening a ranch road, reclaiming an overgrown lot, cleaning
                fence lines, making room for a shop or simply trying to make acreage manageable again, Jay's Land
                Clearing Service & Dirt Work can provide the equipment-based work needed before construction,
                landscaping or fencing begins.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold uppercase font-[family-name:var(--font-display)] mb-5">
                Common {location.city} Projects
              </h3>
              <ul className="space-y-4">
                {location.focus.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-foreground/60 mb-3">Need a faster estimate?</p>
                <a href="tel:+12108914174" className="text-primary font-bold text-xl hover:underline">
                  Call or text (210) 891-4174
                </a>
                <p className="text-sm text-foreground/60 mt-2">
                  Photos of the property can help us understand the project before an on-site visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 uppercase font-[family-name:var(--font-display)]">
              Land Services Available in {location.city}
            </h2>
            <p className="text-foreground/70 mt-4">
              One contractor for the clearing and earthwork needed to move your property project forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="bg-card border border-border rounded-lg p-7">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold uppercase font-[family-name:var(--font-display)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{service.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">A Better Starting Point</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 uppercase font-[family-name:var(--font-display)]">
              Preparing {location.city} Property for the Next Step
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Good site preparation is about more than making a property look cleaner. Clearing gives you access and
                visibility. Grading creates a more workable surface. Excavation and dirt work help establish the areas
                where roads, pads, buildings or other improvements will go. Doing those steps in the right order can
                reduce duplicated work and make it easier for the contractors who come after us.
              </p>
              <p>
                We work with homeowners, landowners, ranch-property owners, builders and businesses. Small jobs may
                involve reclaiming one overgrown section of a property, while larger projects can involve multiple acres,
                access routes, fence lines and building areas. The estimate is based on the actual scope rather than a
                one-size-fits-all price.
              </p>
              <p>
                If you are planning a project in {location.city} or elsewhere in {location.county}, call us with the
                property location and what you want completed. If possible, send photos showing the vegetation, access
                points and areas you want cleared or graded. That gives us a much better picture of the job before we
                schedule the next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-primary-foreground font-[family-name:var(--font-display)]">
            Need Land Cleared in {location.city}?
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
            Tell us what you need cleared, graded, excavated or prepared. Free estimates are available for projects
            throughout the greater San Antonio service area.
          </p>
          <a
            href="tel:+12108914174"
            className="inline-flex items-center justify-center gap-2 mt-8 bg-background text-foreground font-bold px-7 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            Call (210) 891-4174
          </a>
        </div>
      </section>

      {nearbyLinks.length > 0 && (
        <section className="py-16 bg-secondary border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold uppercase font-[family-name:var(--font-display)] mb-6">
              Nearby Service Areas
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyLinks.map((nearby) => nearby && (
                <Link
                  key={nearby.slug}
                  href={`/${nearby.slug}`}
                  className="border border-border bg-card rounded-md px-4 py-3 hover:border-primary hover:text-primary transition-colors"
                >
                  Land Clearing in {nearby.city}, TX
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="border border-primary text-primary rounded-md px-4 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <ChatWidget />
    </main>
  )
}
