import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MapPin, MessageSquareText, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { ChatWidget } from "@/components/chat-widget"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"

const siteUrl = "https://jayslandclearingserviceanddirtwork.com"
const pageUrl = `${siteUrl}/contact`
const businessId = `${siteUrl}/#business`
const title = "Contact Jay's Land Clearing | (210) 891-4174"
const description = "Call or text Jay's Land Clearing Service & Dirt Work at (210) 891-4174 for a free property-service estimate in San Antonio and surrounding South Texas communities."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Jay's Land Clearing Service & Dirt Work",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${pageUrl}#webpage`,
  name: "Contact Jay's Land Clearing Service & Dirt Work",
  url: pageUrl,
  description,
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": businessId,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
    ],
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <UrgentQuoteBanner />
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <section className="border-b border-border bg-secondary pt-40 pb-14 md:pt-48 md:pb-20">
        <div className="container mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-foreground/65">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <p className="font-semibold uppercase tracking-wider text-primary">Call, text, or request an estimate</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold uppercase leading-tight font-[family-name:var(--font-display)] md:text-6xl">
            Contact Jay's <span className="text-primary">Land Clearing Service & Dirt Work</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/75">
            Need land clearing, dirt work, excavation, brush removal, concrete removal, demolition, or property cleanup
            near San Antonio? Call or text the team about your property, or send a quote request using the form below.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href="tel:+12108914174" className="flex min-h-28 flex-col items-start justify-center rounded-xl border border-primary/60 bg-card p-5 transition-colors hover:bg-primary/10" aria-label="Call Jay's Land Clearing at (210) 891-4174">
              <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-primary"><Phone size={20} /> Call Jay's</span>
              <span className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">(210) 891-4174</span>
              <span className="mt-1 text-sm text-foreground/65">Tap to call about your project</span>
            </a>
            <a href="sms:+12108914174" className="flex min-h-28 flex-col items-start justify-center rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary hover:bg-primary/10">
              <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-primary"><MessageSquareText size={20} /> Text Project Details</span>
              <span className="mt-2 text-2xl font-bold text-foreground">(210) 891-4174</span>
              <span className="mt-1 text-sm text-foreground/65">Send your city, scope, and property photos</span>
            </a>
          </div>
          <div className="mt-6 flex items-start gap-3 text-foreground/70">
            <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-primary" size={20} />
            <p>Service area: San Antonio and surrounding South Texas communities, including Poteet, Pleasanton, Floresville, Boerne, and New Braunfels. Scheduling depends on the project and location.</p>
          </div>
          <Link href="/services" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            Explore property services <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <Contact hideProjectQuestions />
      <Footer />
      <ChatWidget />
    </main>
  )
}
