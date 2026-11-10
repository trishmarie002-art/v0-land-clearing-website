import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"
import { servicePages } from "@/lib/service-pages"
export const metadata: Metadata = {
  title: { absolute: "Land Clearing, Demolition & Property Cleanup Services | San Antonio TX" },
  description: "Explore all 12 services from Jay's Land Clearing Service & Dirt Work in the greater San Antonio area. Compare project needs and request a free estimate.",
  alternates: { canonical: "https://jayslandclearingserviceanddirtwork.com/services" },
}
export default function ServicesPage() {
  return <main className="min-h-screen bg-background">
    <UrgentQuoteBanner/><Header/>
    <section className="pt-40 md:pt-48 pb-16 bg-secondary border-b border-border"><div className="container mx-auto px-4">
      <p className="uppercase tracking-wider text-primary font-semibold text-sm">What We Do</p>
      <h1 className="mt-3 text-4xl md:text-6xl font-bold uppercase font-[family-name:var(--font-display)]">Property Services in <span className="text-primary">San Antonio</span></h1>
      <p className="mt-6 text-lg text-foreground/70 max-w-3xl">Explore land clearing, dirt work, debris and material removal, cleanouts and demolition services. Every property is different; use each guide to plan your project and request a quote.</p>
    </div></section>
    <section className="py-16 md:py-24"><div className="container mx-auto px-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {servicePages.map((service)=><article key={service.slug} className="rounded-xl border border-border bg-card p-7 flex flex-col">
        <h2 className="text-2xl font-bold uppercase font-[family-name:var(--font-display)]">{service.title}</h2><p className="text-foreground/70 mt-4 leading-relaxed flex-1">{service.introduction}</p>
        <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 font-bold text-primary hover:underline">Explore service <ArrowRight size={17}/></Link>
      </article>)}
    </div></section>
    <section className="bg-secondary py-12"><div className="container mx-auto px-4 text-center"><h2 className="text-2xl md:text-3xl font-bold">Need an estimate for your property?</h2><p className="mt-3 text-foreground/70">Call or text project details and photos to (210) 891-4174.</p><a href="tel:+12108914174" className="inline-flex mt-6 bg-primary text-primary-foreground rounded-lg font-bold px-6 py-3">Call (210) 891-4174</a></div></section>
    <Footer/><ChatWidget/>
  </main>
}
