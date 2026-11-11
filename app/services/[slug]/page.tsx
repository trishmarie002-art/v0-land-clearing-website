import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"
import { serviceBySlug, servicePages } from "@/lib/service-pages"
import { serviceQuestionLibrary } from "@/lib/service-question-library"
import { locations } from "@/lib/locations"
import { relatedArticlesForService } from "@/lib/internal-links"

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
  const title = `${service.title} in San Antonio & South Texas | Jay's Land Clearing`
  const description = `${service.title} in San Antonio and surrounding South Texas communities. Explore services, project planning and free estimates: (210) 891-4174.`
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
  const featuredCities = ["Poteet", "Pleasanton", "Jourdanton", "Floresville", "La Vernia", "Boerne", "New Braunfels", "Seguin", "Castroville", "Helotes", "Devine", "Schertz"]
  const nearbyServiceAreas = featuredCities.map((city) => locations.find((location) => location.city === city)).filter((location): location is (typeof locations)[number] => Boolean(location))
  const otherServiceAreas = locations.filter((location) => !featuredCities.includes(location.city)).sort((a, b) => a.city.localeCompare(b.city))
  const relevantGuides = relatedArticlesForService(service)
  const questions = [
    { question: service.questionOne, answer: service.answerOne },
    { question: service.questionTwo, answer: service.answerTwo },
    ...(serviceQuestionLibrary[service.slug] ?? []),
  ]
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.introduction,
    url,
    serviceType: service.title,
    areaServed: [{ "@type": "AdministrativeArea", name: "Greater San Antonio and surrounding South Texas communities" }, ...locations.map((location) => ({ "@type": "City", name: `${location.city}, Texas` }))],
    provider: { "@type": "LocalBusiness", "@id": `${origin}/#business` },
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
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">San Antonio, South Texas & Surrounding Communities</p>
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
      <section id="service-questions" aria-labelledby="service-questions-title" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="service-questions-title" className="text-3xl md:text-4xl font-bold uppercase font-[family-name:var(--font-display)] mb-4">Questions About {service.title}</h2>
          <p className="text-foreground/70 mb-7 leading-relaxed">Practical answers about estimates, planning, material handling, equipment access, and safety for South Texas property owners.</p>
          <div className="space-y-5">{questions.map(({question,answer}) => <article key={question} className="bg-card border border-border rounded-lg p-6"><h3 className="text-xl font-bold">{question}</h3><p className="mt-3 text-foreground/75 leading-relaxed">{answer}</p></article>)}</div>
          <p className="text-sm text-foreground/60 mt-6">General planning information, not a project-specific quote. Availability, permits, and scope must be confirmed for each job.</p>
          {(service.slug === "excavation" || service.slug === "fence-line-clearing" || service.slug === "demolition") && (
            <p className="mt-4 text-sm text-foreground/70">Safety references: <a href="https://texas811.org/i-want-to-dig/" rel="noopener noreferrer" target="_blank" className="font-semibold text-primary hover:underline">Texas811 utility-locate guidance</a>{service.slug === "demolition" && <> and <a href="https://www.osha.gov/demolition" rel="noopener noreferrer" target="_blank" className="font-semibold text-primary hover:underline">OSHA demolition safety guidance</a></>}.</p>
          )}
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold uppercase font-[family-name:var(--font-display)] mb-6">Other Property Services</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.filter((other) => other.slug !== service.slug).map((other) => <Link key={other.slug} href={`/services/${other.slug}`} className="rounded-lg border border-border bg-card p-4 font-semibold hover:border-primary hover:text-primary">{other.title} <ArrowRight className="inline h-4 w-4"/></Link>)}
          </div>
          <div className="mt-12 border-t border-border pt-9">
            <h2 className="text-2xl font-bold uppercase font-[family-name:var(--font-display)] mb-3">Areas We Serve</h2>
            <p className="text-foreground/70 mb-5">Jay's serves properties throughout the greater San Antonio region and surrounding South Texas communities. Project availability and travel depend on location and scope.</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {nearbyServiceAreas.map((location) => <Link href={`/${location.slug}`} key={location.slug} className="rounded-lg border border-border p-3 hover:border-primary hover:text-primary">Services in {location.city}, TX <ArrowRight className="inline h-4 w-4" /></Link>)}
            </div>
            <details className="mt-6 rounded-xl border border-border bg-card p-5 group">
              <summary className="cursor-pointer font-bold text-primary">View all {locations.length} service-area communities</summary>
              <p className="mt-4 mb-4 text-sm text-foreground/70">Choose a community for local property and project planning details. Availability for each service is confirmed by project scope and location.</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {otherServiceAreas.map((location) => (
                  <Link href={`/${location.slug}`} key={location.slug} className="rounded-lg border border-border px-3 py-3 hover:border-primary hover:text-primary">
                    <span className="font-semibold block">{location.city}, TX</span>
                    <span className="text-xs text-foreground/60">{location.county}</span>
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/service-areas" className="inline-flex mt-6 text-primary font-bold hover:underline">Browse our service area directory <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      {relevantGuides.length > 0 && (
        <section className="bg-secondary border-t border-border py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold uppercase font-[family-name:var(--font-display)] mb-4">Practical {service.title} Guides</h2>
            <p className="text-foreground/70 mb-7">Explore project planning topics before asking for an estimate.</p>
            <div className="grid gap-4 md:grid-cols-3">
              {relevantGuides.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full rounded-lg border border-border bg-card p-5 hover:border-primary hover:text-primary">
                  <span className="font-semibold">{post.title}</span>
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
      <ChatWidget />
    </main>
  )
}
