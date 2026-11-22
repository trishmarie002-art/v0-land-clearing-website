import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ClipboardList, MapPin, Phone, ShieldCheck, Trees, Truck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { HomeQuoteBanner } from "@/components/home-quote-banner"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"

const baseUrl = "https://jayslandclearingserviceanddirtwork.com"
const pageUrl = `${baseUrl}/about`

export const metadata: Metadata = {
  title: { absolute: "About Us & Why Choose Us | Jay's Land Clearing Service & Dirt Work" },
  description: "Learn about Jay's Land Clearing Service & Dirt Work, our approach to land clearing, grading, excavation and property services in San Antonio and surrounding South Texas communities. Call (210) 891-4174 for a free quote.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "About Jay's Land Clearing Service & Dirt Work",
    description: "About our services, how we approach property projects, and why South Texas customers contact us. Call (210) 891-4174 for a free estimate.",
    url: pageUrl,
    siteName: "Jay's Land Clearing Service & Dirt Work",
    type: "website",
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "About Us and Why Choose Us — Jay's Land Clearing Service & Dirt Work",
  about: { "@type": "LocalBusiness", "@id": `${baseUrl}/#business` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "About Us", item: pageUrl },
    ],
  },
}

const reasons = [
  {
    title: "Work Defined Around Your Property",
    description: "We start with your intended result, from opening up an overgrown lot to preparing access for a future building project. Your quote should reflect your actual scope, not a generic price per acre.",
    icon: Trees,
  },
  {
    title: "Multiple Property Services",
    description: "Land clearing, brush removal, dirt work, grading, excavation, hauling, site preparation and selected removal projects can be discussed with one team.",
    icon: Truck,
  },
  {
    title: "Clear Estimate Conversations",
    description: "Discuss equipment access, vegetation density, hauling, grading, and how you want the site left before agreeing on a scope of work.",
    icon: ClipboardList,
  },
  {
    title: "South Texas Service Focus",
    description: "Jay's serves San Antonio and discusses projects in surrounding communities. Availability and travel depend on the work, location and schedule.",
    icon: MapPin,
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <UrgentQuoteBanner />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-border bg-secondary pt-40 pb-14 md:pt-48 md:pb-20">
        <div className="container mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-foreground/65">
            <Link href="/" className="hover:text-primary">Home</Link><span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page">About Us</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Jay's Land Clearing Service & Dirt Work</p>
          <h1 className="mt-3 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight md:text-6xl">
            About Us <span className="text-primary">& Why Choose Us</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/75">
            Helping property owners plan clearing, dirt work, grading, excavation and cleanup in San Antonio
            and surrounding South Texas communities. Learn what we do, how we discuss projects, and how to reach us.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#about" className="inline-flex min-h-11 items-center rounded-lg bg-primary px-5 py-3 font-bold text-primary-foreground">About Our Company</a>
            <a href="#why-us" className="inline-flex min-h-11 items-center rounded-lg border border-primary/50 px-5 py-3 font-bold text-primary hover:bg-primary/10">Why Choose Us?</a>
          </div>
        </div>
      </section>

      <HomeQuoteBanner variant="clearing" />

      <section id="about" aria-labelledby="about-heading" className="scroll-mt-40 py-16 md:scroll-mt-48 md:py-24">
        <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image src="/images/hero-2.jpg" alt="Land clearing equipment at a work site" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Our Company</p>
            <h2 id="about-heading" className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-5xl">
              Property Work That Starts With <span className="text-primary">Your Plans</span>
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/75">
              Jay's Land Clearing Service & Dirt Work provides land clearing and property services across the greater
              San Antonio area. We discuss projects ranging from brush-covered lots and fence lines to dirt work,
              site preparation, removal and hauling.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/75">
              Every property is different. Access, terrain, vegetation, nearby structures, debris handling and the
              finished condition you need all affect how the work should be planned. We encourage property owners
              to share their location, photos and project goals so we can discuss the appropriate scope.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/services" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
                Explore our services <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href="tel:+12108914174" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
                <Phone size={18} aria-hidden="true" /> (210) 891-4174
              </a>
            </div>
          </div>
        </div>
      </section>

      <HomeQuoteBanner variant="planning" />

      <section id="why-us" aria-labelledby="why-us-heading" className="scroll-mt-40 bg-secondary py-16 md:scroll-mt-48 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary"><ShieldCheck size={18} aria-hidden="true" /> Why Choose Us</p>
            <h2 id="why-us-heading" className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-5xl">
              What to Expect When You <span className="text-primary">Contact Jay's</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75">
              A useful estimate starts with an understanding of the project. Here are the practical reasons
              to discuss your property with our team.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reasons.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-xl border border-border bg-card p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase md:text-2xl">{title}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-foreground/70">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-primary/30 bg-card p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase">Before Requesting an Estimate</h3>
            <p className="mt-3 text-foreground/75">For a more useful first conversation, have your property city or ZIP, approximate work area, photos of the site and entrance, and the outcome you want. Ask which preparation and debris-removal items are included.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Property city or ZIP", "Photos of work area and access", "Work you need completed", "Desired finished condition"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <CheckCircle2 size={19} aria-hidden="true" className="shrink-0 text-primary" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeQuoteBanner variant="estimate" />

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase md:text-4xl">Ready to Discuss Your Property?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70">Learn more about our services, browse the communities we work with, or contact us directly for a free project estimate.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link href="/service-areas" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">View service areas <ArrowRight size={17} aria-hidden="true" /></Link>
            <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">Contact our team <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
