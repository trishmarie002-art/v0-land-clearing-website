import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"
import { serviceBySlug, servicePages } from "@/lib/service-pages"

const origin = "https://jayslandclearingserviceanddirtwork.com"
type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = serviceBySlug[slug]
  if (!service) return {}
  const url = `${origin}/services/${service.slug}`
  const title = `${service.title} in San Antonio, TX | Jay's Land Clearing`
  const description = `${service.title} for San Antonio and nearby South Texas properties. Learn what affects your project and request a free estimate at (210) 891-4174.`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: "Jay's Land Clearing Service & Dirt Work" },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = serviceBySlug[slug]
  if (!service) notFound()
  const url = `${origin}/services/${service.slug}`
  const questions = [
    { question: service.questionOne, answer: service.answerOne },
    { question: service.questionTwo, answer: service.answerTwo },
  ]
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.introduction,
    url,
    serviceType: service.title,
    areaServed: { "@type": "AdministrativeArea", name: "Greater San Antonio, Texas" },
    provider: { "@type": "LocalBusiness", name: "Jay's Land Clearing Service & Dirt Work", url: origin, telephone: "+1-210-891-4174" },
  }
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: origin },
      { "@type": "ListItem", position: 2, name: "Services", item: `${origin}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: url },
    ],
  }
  return (
    <main className="min-h-screen bg-background">
      <UrgentQuoteBanner />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="pt-40 md:pt-48 pb-16 border-b border-border bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-foreground/65 mb-6">
            <Link href="/" className="hover:text-primary">Home</Link> / <Link href="/services" className="hover:text-primary">Services</Link> / {service.title}
          </nav>
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">San Antonio & Surrounding Areas</p>
          <h1 className="text-4xl md:text-6xl font-bold uppercase font-[family-name:var(--font-display)] mt-3">{service.title} <span className="text-primary">Services</span></h1>
          <p className="mt-5 text-lg md:text-xl text-foreground/75 max-w-3xl">{service.tagline}. {service.introduction}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="tel:+12108914174" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground"><Phone size={18}/> Call for a Free Estimate</a>
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 font-bold text-primary">Request a Quote <ArrowRight size={18}/></Link>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold uppercase font-[family-name:var(--font-display)]">Common Project Needs</h2>
            <p className="mt-4 text-foreground/70">The exact work depends on your property, access, safety conditions and desired finished result. These are common topics to discuss when planning {service.title.toLowerCase()}.</p>
            <ul className="mt-6 space-y-4">
              {service.examples.map((item) => <li key={item} className="flex items-start gap-3"><CheckCircle2 className="text-primary shrink-0 mt-1" size={20}/>{item}</li>)}
            </ul>
          </div>
          <div className="rounded-xl bg-card border border-border p-7">
            <h2 className="text-2xl font-bold uppercase font-[family-name:var(--font-display)]">What to Send for an Estimate</h2>
            <p className="mt-3 text-foreground/70">Share your property city or ZIP, photos, and the details below. This helps determine whether the scope and travel are a fit.</p>
            <ul className="mt-5 space-y-4">{service.quoteDetails.map((item) => <li className="flex items-start gap-3" key={item}><CheckCircle2 className="text-primary shrink-0 mt-1" size={18}/>{item}</li>)}</ul>
            <a href="sms:+12108914174" className="inline-block mt-7 font-semibold text-primary hover:underline">Text project photos to (210) 891-4174</a>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold uppercase font-[family-name:var(--font-display)] mb-7">Questions About {service.title}</h2>
          <div className="space-y-5">{questions.map(({question,answer}) => <article key={question} className="bg-card border border-border rounded-lg p-6"><h3 className="text-xl font-bold">{question}</h3><p className="mt-3 text-foreground/75 leading-relaxed">{answer}</p></article>)}</div>
          <p className="text-sm text-foreground/60 mt-6">General planning information, not a project-specific quote. Availability, permits, and scope must be confirmed for each job.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold uppercase font-[family-name:var(--font-display)] mb-6">Other Property Services</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.filter((other) => other.slug !== service.slug).map((other) => <Link key={other.slug} href={`/services/${other.slug}`} className="rounded-lg border border-border bg-card p-4 font-semibold hover:border-primary hover:text-primary">{other.title} <ArrowRight className="inline h-4 w-4"/></Link>)}
          </div>
          <p className="text-foreground/70 mt-8">We serve San Antonio and surrounding South Texas communities. <Link href="/service-areas" className="font-semibold text-primary hover:underline">Browse the service areas</Link> or call to confirm travel to your property.</p>
        </div>
      </section>
      <Footer />
      <ChatWidget />
    </main>
  )
}
