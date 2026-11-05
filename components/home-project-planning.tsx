import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const planningSteps = [
  {
    title: "Brush, Cedar & Overgrown Acreage",
    detail: "If your property is overgrown, start by deciding which areas need full access and which trees or natural features you want to keep. Brush density, slopes, and equipment access influence the clearing approach and the estimate.",
    guide: "/blog/brush-clearing-for-overgrown-property-in-san-antonio-tx",
    guideLabel: "Read the brush clearing guide",
  },
  {
    title: "Building Pads, Homesites & New Construction",
    detail: "Preparing a home, shop, or barn site usually begins with clearing a usable work area, then reviewing access, elevations, drainage, and the planned building footprint. Tell us what you plan to build so the site work matches the next contractor's needs.",
    guide: "/blog/how-to-prepare-land-for-a-new-home-in-san-antonio-tx",
    guideLabel: "Read the homesite preparation guide",
  },
  {
    title: "Driveways, Grading & Dirt Work",
    detail: "For a driveway or rough lot, the current grade, runoff, soil conditions, and intended vehicle access matter. A good scope distinguishes material movement and surface shaping from vegetation removal or debris hauling.",
    guide: "/blog/driveway-grading-and-dirt-work-in-san-antonio-tx",
    guideLabel: "Read the driveway and grading guide",
  },
]

export function HomeProjectPlanning() {
  return (
    <section aria-labelledby="project-planning-heading" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Plan Your Land Clearing Project</p>
          <h2 id="project-planning-heading" className="text-3xl md:text-5xl font-bold uppercase font-[family-name:var(--font-display)] mt-2">
            From Overgrown Property to a Workable Site
          </h2>
          <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
            Land clearing in San Antonio can mean reclaiming brush-covered acreage, getting a lot ready for construction,
            or improving access with grading and dirt work. The right estimate starts with how you plan to use the land.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {planningSteps.map((step) => (
            <article key={step.title} className="rounded-xl border border-border bg-card p-6">
              <CheckCircle2 className="mb-4 h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-foreground/70 leading-relaxed mb-5">{step.detail}</p>
              <Link href={step.guide} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                {step.guideLabel}<ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-primary/30 bg-card p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-3">What to Send for a More Useful Free Estimate</h3>
          <p className="leading-relaxed text-foreground/70">
            Share the property city or ZIP code, approximate acreage, photos of the vegetation and access points,
            and whether you want brush cleared, material hauled, ground graded, or a building area prepared.
            We'll use those details to discuss the scope and next step.
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <Link href="/service-areas" className="font-bold text-primary hover:underline">Find your local service area</Link>
            <a href="sms:+12108914174" className="font-bold text-primary hover:underline">Text project photos</a>
            <a href="tel:+12108914174" className="font-bold text-primary hover:underline">Call (210) 891-4174</a>
          </div>
        </div>
      </div>
    </section>
  )
}
