import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { LocationPage } from "@/lib/locations"

function planningTip(focus: string): string {
  const topic = focus.toLowerCase()
  if (/driveway|road|access|entrance|gate/.test(topic)) {
    return "Identify where equipment and vehicles need to enter, the width you want, and any soft spots, slopes, or drainage concerns."
  }
  if (/pad|home.?site|site prep|construction|building|lot/.test(topic)) {
    return "Share the intended structure or use, the area to prepare, and any requirements from your builder before planning the clearing or grading."
  }
  if (/cedar|mesquite|brush|tree|vegetation|wooded|selective/.test(topic)) {
    return "Mark which trees or areas should stay and which overgrowth needs removal. Photos help show brush density and equipment access."
  }
  if (/fence|trail|boundary/.test(topic)) {
    return "Describe the length and width to open, known property boundaries, and whether debris should remain on-site or be hauled."
  }
  if (/grading|dirt|excavat|drainage|level/.test(topic)) {
    return "Explain where water runs now, what surface or elevation you need, and whether material must be added, removed, or redistributed."
  }
  if (/haul|debris|cleanup|material/.test(topic)) {
    return "Tell us what material is present, how much there is, and where a truck or equipment could safely access the site."
  }
  return "Describe the area, acreage, terrain, existing obstacles, and what you want the land to be used for when the work is finished."
}

export function LocationProjectGuide({ location }: { location: LocationPage }) {
  return (
    <section aria-labelledby="local-planning-heading" className="py-16 md:py-24 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-9">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Project Planning in {location.county}</p>
          <h2 id="local-planning-heading" className="text-3xl md:text-4xl font-bold uppercase font-[family-name:var(--font-display)] mt-2">
            Planning Land Clearing & Dirt Work in {location.city}, TX
          </h2>
          <p className="text-foreground/70 leading-relaxed mt-4 text-lg">
            Whether you are clearing brush, preparing access, or getting a site ready for improvements,
            the first step is to define how the finished property should function. These project-specific
            details can help you plan work in {location.city} before requesting an estimate.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {location.focus.map((focus) => (
            <div key={focus} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold flex items-start gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 mt-1 shrink-0 text-primary" aria-hidden="true" />
                {focus}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{planningTip(focus)}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 max-w-4xl">
          <h3 className="text-2xl font-bold mb-3">Getting an Estimate for a {location.city} Property</h3>
          <p className="text-foreground/70 leading-relaxed">
            The acreage, density of vegetation, equipment access, terrain, debris handling, and any required
            grading all influence the scope. Tell us the property location and what you need completed;
            photos of access routes and the work area are useful. We can discuss the next step before a quote is scheduled.
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <a href="tel:+12108914174" className="font-semibold text-primary hover:underline">Call (210) 891-4174</a>
            <a href="sms:+12108914174" className="font-semibold text-primary hover:underline">Text Photos of Your Property</a>
            <Link href="/" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
              San Antonio Land Clearing Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
