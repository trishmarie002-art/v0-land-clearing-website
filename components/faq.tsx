import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Native details render the answers as accessible HTML without requiring client-side JavaScript.
// Project-dependent conditions are deliberately not presented as fixed prices or guarantees.
const faqs = [
  {
    question: "How much does land clearing cost in San Antonio and South Texas?",
    answer: "A clearing estimate depends on acreage, brush and tree density, slope, access, debris hauling, stump work and the finish you need. A lightly overgrown lot and wooded acreage are different jobs, even when their sizes match. Share photos, approximate acreage and your intended use for a project-specific quote.",
  },
  {
    question: "What communities does Jay's serve?",
    answer: "Jay's discusses projects across San Antonio and surrounding South Texas communities, including Poteet, Pleasanton, Floresville, Boerne and New Braunfels. Travel and scheduling depend on the project location, scope and equipment needs. Confirm availability for your property when you request an estimate.",
  },
  {
    question: "How long does land clearing take?",
    answer: "The schedule depends on vegetation density, acreage, weather, terrain, access and whether debris must be loaded and hauled. Acreage alone does not establish a reliable timeline. The contractor can discuss a schedule once the actual work and desired finished condition are clear.",
  },
  {
    question: "Is brush and debris hauling included with land clearing?",
    answer: "Not automatically. Cutting, mulching, piling, loading, hauling and disposal can be separate scope items. Tell the estimator whether you want material left on-site, processed in place or removed, and ask for those details in the written quote.",
  },
  {
    question: "Can a cleared lot be made ready for new construction?",
    answer: "Clearing is often the first step. Construction preparation may also require excavation, rough grading, drainage planning and work to a builder's specifications. Provide the planned building footprint, access location and available site plans before agreeing on the scope.",
  },
  {
    question: "How do I request a free project estimate?",
    answer: "Use the quote form or call (210) 891-4174. Include your property city or ZIP, approximate size, photos showing the work area and equipment access, the service requested and your preferred finished condition.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-secondary/30" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Common Questions</span>
          <h2 id="faq-heading" className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 uppercase tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto text-balance">
            Practical answers for property owners in San Antonio and surrounding South Texas communities.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map(({ question, answer }, index) => (
            <details key={question} open={index === 0} className="group rounded-lg border border-border bg-card p-5">
              <summary className="cursor-pointer font-semibold text-foreground marker:text-primary">{question}</summary>
              <p className="pt-4 text-foreground/70 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">Have questions about a specific service or property?</p>
          <Link href="/questions" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
            Browse all 72 service answers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
