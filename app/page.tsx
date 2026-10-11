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
  { name: "Maria G. — SAMPLE", service: "Land Clearing", quote: "We had an overgrown section of property that was hard to walk through. The crew cleared the thick brush while keeping the trees we wanted. It made planning the rest of our project much easier." },
  { name: "James R. — SAMPLE", service: "Driveway Grading", quote: "Our gravel driveway had uneven spots that collected water after rain. The grading work made the entrance smoother and easier to use. Communication about the project was clear from start to finish." },
  { name: "Angela M. — SAMPLE", service: "Brush Removal", quote: "We needed room along the fence line without clearing the entire property. The work opened the area up and made it much easier to see where repairs were needed. The finished space looked great." },
  { name: "Robert T. — SAMPLE", service: "Dirt Work", quote: "We were getting a site ready for a small workshop and needed the ground shaped first. The crew explained what the dirt work would involve and left us with a much better starting point." },
  { name: "Linda S. — SAMPLE", service: "Property Cleanup", quote: "A neglected lot had brush and scattered debris everywhere. After the cleanup, we could finally see the usable space and make plans for it. The difference in the property was noticeable." },
  { name: "David C. — SAMPLE", service: "Site Preparation", quote: "We needed a clear access route and a prepared area before the next contractor arrived. The crew worked around the sections we wanted to preserve and made the site easier to reach." },
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
