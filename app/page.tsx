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


const reviewPlaceholders = [
  { name: "Maria G. — SAMPLE", service: "Land Clearing", quote: "Sample review: Describe how the crew cleared brush and prepared the property for its next use." },
  { name: "James R. — SAMPLE", service: "Driveway Grading", quote: "Sample review: Include specific details about the driveway work, communication, and finished result." },
  { name: "Angela M. — SAMPLE", service: "Brush Removal", quote: "Sample review: Explain the property's original condition and how the completed clearing helped." },
  { name: "Robert T. — SAMPLE", service: "Dirt Work", quote: "Sample review: Share a genuine customer's feedback about site preparation and project timing." },
  { name: "Linda S. — SAMPLE", service: "Property Cleanup", quote: "Sample review: Describe the debris cleanup, care taken around existing features, and overall experience." },
  { name: "David C. — SAMPLE", service: "Site Preparation", quote: "Sample review: Mention the type of site work completed and what the customer valued most." },
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
            Review layout preview. The six examples below are not actual customer testimonials.
            Replace each sample name and quote with verified customer feedback before presenting this section as reviews.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviewPlaceholders.map((review) => (
            <article key={review.name} className="rounded-xl border border-border bg-card p-7 flex flex-col">
              <span className="inline-flex w-fit rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                Example — not a real review
              </span>
              <p className="text-foreground/75 leading-relaxed mt-5 flex-1">“{review.quote}”</p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-bold text-lg">{review.name}</p>
                <p className="text-sm text-foreground/60 mt-1">{review.service} · Illustrative entry</p>
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
