import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { ServiceArea } from "@/components/service-area"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { UrgentQuoteBanner } from "@/components/urgent-quote-banner"


const customerReviews = [
  { name: "Jason L.", location: "Poteet, TX", service: "Land Clearing", quote: "I highly recommend Jay's Land Clearing Services and Dirt Work. They are very affordable and reliable." },
  { name: "Evelyn H.", location: "San Antonio, TX", service: "2-Acre Lot Clearing", quote: "Jay's Land Clearing Services and Dirt Work came out and cleared out my 2-acre lot and made my land look very nice." },
  { name: "Curtis S.", location: "Pleasanton, TX", service: "Land Grading", quote: "I highly recommend their land grading, 100%!" },
  { name: "Steven C.", location: "Von Ormy / Somerset, TX", service: "Lot Clearing", quote: "When I needed lot clearing, they came out to my property in no time and gave me an affordable price I couldn't resist." },
  { name: "Juan G.", location: "La Vernia, TX", service: "Customer Experience", quote: "Jay is very reliable and highly recommended." },
  { name: "Samantha K.", location: "Converse, TX", service: "Brush Removal", quote: "I hired them for brush removal on my half-acre lot, and they did a very nice job." },
]

function CustomerReviews() {
  return (
    <section aria-labelledby="reviews-title" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Customer Feedback</p>
          <h2 id="reviews-title" className="text-3xl md:text-5xl font-bold uppercase font-[family-name:var(--font-display)]">
            Customer Reviews
          </h2>
          <p className="text-foreground/70 mt-4">
            Read what customers have shared about their experience with Jay's Land Clearing Service & Dirt Work.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {customerReviews.map((review) => (
            <article key={review.name} className="rounded-xl border border-border bg-card p-7 flex flex-col">
              <p className="text-foreground/75 leading-relaxed mt-5 flex-1">“{review.quote}”</p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-bold text-lg">{review.name}</p>
                <p className="text-sm text-foreground/60 mt-1">{review.service} · {review.location}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="text-sm text-foreground/60 mt-8 text-center">
          Have feedback from a completed project? Contact us to share your experience.
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <UrgentQuoteBanner />
      <Header />
      <Hero />
      <About />
      <Services />
      <ServiceArea />
      <CustomerReviews />
      <FAQ />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  )
}
