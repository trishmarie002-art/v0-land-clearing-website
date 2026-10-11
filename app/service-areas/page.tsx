import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"
import { locations } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Land Clearing Service Areas Around San Antonio, TX",
  description:
    "Jay's Land Clearing Service & Dirt Work serves communities around San Antonio with land clearing, brush removal, dirt work, grading and excavation. Browse all service areas.",
  alternates: {
    canonical: "https://jayslandclearingserviceanddirtwork.com/service-areas",
  },
}

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen bg-background">
      <UrgentQuoteBanner />
      <Header />

      <section className="pt-40 md:pt-48 pb-20 md:pb-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4" />
              Greater San Antonio Service Area
            </div>
            <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight font-[family-name:var(--font-display)]">
              Land Clearing & Dirt Work <span className="text-primary">Service Areas</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-3xl">
              San Antonio is our main market. We also provide land clearing, brush removal, grading, excavation,
              hauling and site preparation throughout surrounding South Texas and Hill Country communities.
              Choose your area below for local service information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/${location.slug}`}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">{location.county}</p>
                    <h2 className="text-2xl font-bold uppercase font-[family-name:var(--font-display)]">
                      {location.city}, TX
                    </h2>
                    <p className="text-sm text-foreground/65 mt-3 leading-relaxed">
                      Land clearing, dirt work, grading, excavation and site preparation.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 bg-secondary border border-border rounded-lg p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl font-bold uppercase font-[family-name:var(--font-display)]">
              Don't See Your Area?
            </h2>
            <p className="text-foreground/70 mt-3 max-w-3xl">
              Call us anyway. Project size, equipment access and location all matter, and we may be able to travel
              outside the primary service area for the right job.
            </p>
            <a href="tel:+12108914174" className="inline-block mt-5 text-primary font-bold text-xl hover:underline">
              (210) 891-4174
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
