import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react"
import type { LocationPage } from "@/lib/locations"

type LocalDetail = { heading: string; detail: string; question: string; answer: string }

// Local project considerations, not claims about completed jobs, permits or universal soil conditions.
const cityDetails: Record<string, LocalDetail> = {
  "Helotes": { heading: "Wooded acreage and selective clearing", detail: "On wooded tracts near Helotes, identify the mature trees and natural areas you want to preserve before opening a drive, homesite, or fence line. Narrow or sloped access may affect which equipment can reach the work area.", question: "Can I keep some trees when clearing acreage near Helotes?", answer: "Yes, selective clearing can be discussed. Mark the trees and areas you want untouched, and share photos of the access route so the work scope can be reviewed." },
  "Boerne": { heading: "Hill Country slopes, cedar and rock", detail: "Boerne-area land projects can involve cedar, surface rock, changing grades, and winding approaches to rural tracts. For a building site or driveway, assess equipment access and how runoff should move after the work.", question: "What should I check before clearing a rocky property in Boerne?", answer: "Note the slope, visible rock, access width, trees to preserve, and where you want the cleared area. Rock removal, clearing and finish grading should be discussed as separate scope items." },
  "Bulverde": { heading: "Cedar-covered homesites and property access", detail: "For wooded lots around Bulverde, plan the building footprint, driveway path and protected tree areas together. Ask whether brush will be mulched, piled or hauled, since each option changes the scope.", question: "Can brush be cleared without stripping my entire Bulverde lot?", answer: "Selective clearing may be appropriate. Identify the planned building area and any trees or screening vegetation you want to keep." },
  "New Braunfels": { heading: "Homesites, access and drainage", detail: "New Braunfels-area projects range from compact lots to rural acreage. Before grading for a shop, home or driveway, identify the planned finished surface, access point and any low spots where water collects.", question: "Do I need land clearing or grading for a New Braunfels homesite?", answer: "It depends on the current vegetation and finished condition. Clearing removes obstacles; grading changes the ground surface. Many projects need a defined scope for both." },
  "Seguin": { heading: "Agricultural acreage and new building areas", detail: "On larger Seguin-area tracts, separate pasture or brush cleanup from the smaller area that must be prepared for a home, barn, driveway or equipment access. This helps avoid quoting work you do not need.", question: "Can I clear only part of my acreage near Seguin?", answer: "Yes, request a quote for the specific portion you want accessible. Share the approximate acreage and mark the intended boundaries in photos or a map." },
  "Schertz": { heading: "Tight access and developed property edges", detail: "On infill lots and properties near existing homes or structures in Schertz, the location of fences, utilities, driveways and neighboring improvements can matter as much as acreage.", question: "What information helps quote a small Schertz lot?", answer: "Share the lot dimensions, photos of the entrance, nearby structures, vegetation and whether concrete or debris needs removal as well as clearing." },
  "Cibolo": { heading: "Preparing former rural tracts for improvements", detail: "When converting a Cibolo-area tract to a homesite or shop area, map out vegetation removal, vehicle access and any grading needs before deciding how much ground to disturb.", question: "Can one project include clearing and pad preparation in Cibolo?", answer: "Those services can be discussed together. Provide the intended building footprint and any plans or elevation requirements supplied by your builder." },
  "Garden Ridge": { heading: "Selective work around established trees", detail: "Many Garden Ridge property owners want improved access without losing the wooded look of their lots. Define keep-out areas around desirable trees and confirm equipment room near fences and structures.", question: "How do I protect mature trees during a Garden Ridge clearing project?", answer: "Mark trees to keep and discuss equipment routes and work limits before the estimate. The exact approach depends on site access and the requested finish." },
  "Converse": { heading: "Unused lots, fence lines and construction space", detail: "A Converse cleanup may involve a smaller work area than a rural acreage job. Identify brush, dumped material, concrete and any access restrictions separately so the estimate covers the actual work.", question: "Can brush and unwanted debris be removed together in Converse?", answer: "Ask for both items in the estimate and specify what needs hauling away. Cutting vegetation and loading or disposing of debris are not always the same service." },
  "Universal City": { heading: "Clearing near existing improvements", detail: "For properties around Universal City, check entry width, nearby buildings, fences and buried utilities before planning equipment-based clearing or excavation.", question: "What should I send for a Universal City site-work estimate?", answer: "Send clear photos of access, obstacles and the exact work area, along with the property ZIP code and desired result." },
  "Live Oak": { heading: "Small-lot cleanup and rough grading", detail: "For a Live Oak site with overgrowth, old materials or uneven ground, decide whether the goal is vegetation removal, debris hauling or a changed finished grade. These are different project scopes.", question: "Is a cleared lot automatically level in Live Oak?", answer: "No. Clearing vegetation does not necessarily include grading. Request the desired finished condition as a separate line in the work description." },
  "La Vernia": { heading: "Ranch gates, fence lines and home pads", detail: "La Vernia-area acreage projects often start with creating access across brush-covered land. Measure the planned entrance or fence-line run and identify any separate homesite or pad work.", question: "Can Jay's open an overgrown fence line near La Vernia?", answer: "Fence-line clearing is among the advertised services. Provide approximate length, desired width, access photos and whether cut material should remain or be hauled." },
  "St. Hedwig": { heading: "Agricultural tracts and access planning", detail: "For rural acreage around St. Hedwig, mark boundaries, gates and the path equipment will use. Prioritize the working area, fence-line access and any future building footprint before requesting a quote.", question: "What should I measure before clearing a St. Hedwig tract?", answer: "Approximate acres, fence-line length, entry width and the portion of the property that needs to be usable." },
  "Adkins": { heading: "Heavy brush and future homesites", detail: "Adkins property owners planning a home or shop can avoid unnecessary clearing by outlining the building footprint, access route and nearby brush to remove first.", question: "Can I prepare just a homesite on an Adkins property?", answer: "Yes, discuss a defined work area rather than an entire parcel. Provide site plans if available and identify where the driveway and structures will go." },
  "China Grove": { heading: "Overgrown lots and driveway entrances", detail: "For China Grove properties, equipment entrance size and nearby improvements can affect the clearing method. Define what vegetation stays and which areas need grading after cleanup.", question: "What affects the cost to clear a lot in China Grove?", answer: "Lot size, brush density, access, debris handling and any added grading or excavation all influence an estimate." },
  "Elmendorf": { heading: "Southeast Bexar County lot preparation", detail: "On Elmendorf-area tracts, separate clearing for access from ground work needed for a future pad, driveway or utility route. Note any low areas and existing obstacles.", question: "Can I combine brush clearing and dirt work in Elmendorf?", answer: "Yes, request both in the project scope. Tell the estimator the intended use and whether material needs to be added, removed or spread." },
  "Floresville": { heading: "Rural acreage, pads and fence lines", detail: "Around Floresville, property jobs may include clearing portions of a ranch, opening boundary access or creating an approach for a new home or barn. Flag any areas you need left undisturbed.", question: "Do I need to clear my whole Floresville property?", answer: "Not necessarily. A defined work area for a pad, road or fence line can be quoted separately from the rest of the acreage." },
  "Poth": { heading: "Pasture access and brush-covered land", detail: "For Poth-area acreage, map out the specific brush areas, the access gates and any future driveway or building site. This gives the estimator a clearer scope than acreage alone.", question: "What helps estimate brush clearing near Poth?", answer: "Approximate clearing area, vegetation photos, gate width and whether cut material must be hauled away." },
  "Somerset": { heading: "Mesquite, access roads and rural lots", detail: "When working on a Somerset-area tract, first identify dense brush or mesquite, fence boundaries, and the route trucks or equipment should use. Grading and haul-off may require separate planning.", question: "Can a Somerset quote include driveway preparation?", answer: "Yes. Describe the driveway route and intended use, plus any clearing and grading needed along it." },
  "Von Ormy": { heading: "Acreage access and shop or home sites", detail: "For Von Ormy land, opening the gate-to-building route can be as important as clearing the pad itself. Note soft ground, drainage concerns and where material should be moved.", question: "What is needed before preparing a Von Ormy building site?", answer: "The intended building footprint, access location, photos, and any site specifications from the installer or builder." },
  "Atascosa": { heading: "Brush and mesquite on rural properties", detail: "Atascosa-area projects may involve thick brush, access for heavy equipment and fence lines that have become difficult to reach. Clarify whether your priority is access, vegetation removal or a build-ready area.", question: "Can I get a quote for only fence-line clearing in Atascosa?", answer: "Yes. Provide approximate linear footage, desired width and photos of the current growth." },
  "Poteet": { heading: "South Texas brush and usable acreage", detail: "On rural Poteet property, decide whether you need brush cleared for access, a future home pad, fencing or general upkeep. Existing gates and the density of vegetation can change the work plan.", question: "What should I send for a Poteet land-clearing estimate?", answer: "Send the property location, approximate acres to clear, photos of vegetation and access, and whether you want debris removed." },
  "Pleasanton": { heading: "Ranch cleanup, entrances and dirt work", detail: "Pleasanton-area jobs may involve reclaiming overgrown acreage, opening ranch entrances or grading an area for a home, shop or parking space. Identify the exact area and final use before estimating.", question: "Can I request grading and land clearing together in Pleasanton?", answer: "Yes. Explain which areas need vegetation removal and which need dirt moved or reshaped, so both services are included in the quote." },
  "Jourdanton": { heading: "Overgrown tracts and fence-line access", detail: "For Jourdanton property owners, it helps to separate larger brush-clearing zones from smaller access roads, fence lines and future building areas. Specify hauling expectations up front.", question: "Does clearing acreage near Jourdanton include hauling debris?", answer: "Not automatically. Ask whether material will be mulched, piled, loaded or hauled, and have that included in the written scope." },
  "Lytle": { heading: "Rural homesites and driveway preparation", detail: "On Lytle-area property, first decide where the entrance, driveway and building area should be. That determines which brush needs clearing and where grading may be required.", question: "What should be planned first for a Lytle homesite?", answer: "Identify the future structure, equipment entrance, driveway and desired surface before deciding how much vegetation to remove." },
  "Devine": { heading: "Brush-covered acreage and pasture access", detail: "Devine-area property owners can plan clearing in stages: access, fence lines and building areas first, followed by additional acreage if needed. This helps define a practical initial estimate.", question: "Can I clear my Devine property in stages?", answer: "A phased scope can be discussed. Mark the first area you need accessible and explain any later plans when requesting the estimate." },
  "Castroville": { heading: "Homesite access and uneven tracts", detail: "For Castroville projects, document slopes, water flow and the route to the planned work area. Clearing and grading should be scoped separately when a driveway or pad is involved.", question: "Will clearing my Castroville lot also improve drainage?", answer: "Not by itself. Drainage and grading work need to be evaluated separately from vegetation removal." },
  "Hondo": { heading: "Large tracts, gates and haul distances", detail: "For Hondo-area acreage, the travel route onto the property, the size of the actual clearing zone and where debris will go can matter more than total parcel acreage.", question: "How can I get a more accurate Hondo acreage quote?", answer: "Mark the acres to work on, show gate access and vegetation density, and explain whether material should stay on-site." },
  "Canyon Lake": { heading: "Wooded, sloped and lakeside-area properties", detail: "Some Canyon Lake-area lots have slopes and limited equipment access. Plan tree preservation, runoff and entry routes before deciding on clearing or grade changes; check applicable local restrictions.", question: "What should I check before clearing near Canyon Lake?", answer: "Confirm property boundaries, access, slope and any applicable permits or vegetation restrictions with the appropriate local authority before work begins." },
  "Bandera": { heading: "Hill Country ranch roads and cedar clearing", detail: "For Bandera-area tracts, plan where ranch roads and gate openings should run and what cedar or other vegetation needs removal. Rocky or sloped areas may need a different approach from flat ground.", question: "Can I request selective cedar clearing on a Bandera tract?", answer: "Yes. Identify what must be removed and what should stay; access, rock and debris handling will influence the work scope." },
  "Leon Springs": { heading: "Tree preservation and hillside access", detail: "Near Leon Springs, wooded lots and sloping entrances can require careful planning around trees, existing improvements and runoff before a site is opened.", question: "How should I plan clearing on a sloped Leon Springs property?", answer: "Share photos from the entrance and across the slope, flag trees to preserve, and explain the finished use of the area." },
  "Spring Branch": { heading: "Cedar, surface rock and rural entrances", detail: "Around Spring Branch, wooded acreage may involve cedar growth and surface rock. Mark the desired entrance and building area, and ask about the separate cost of handling rock or hauling debris.", question: "Is rock removal part of standard clearing near Spring Branch?", answer: "Not necessarily. Rock removal and grading should be specifically included if the site requires them." }
}

function planningTip(focus: string): string {
  const topic = focus.toLowerCase()
  if (/driveway|road|access|entrance|gate/.test(topic)) return "Identify equipment access, the width you need and any soft spots, slopes or drainage concerns."
  if (/pad|home.?site|site prep|construction|building|lot/.test(topic)) return "Share the planned use, area to prepare and any specifications from your builder or installer."
  if (/cedar|mesquite|brush|tree|vegetation|wooded|selective/.test(topic)) return "Mark the trees or vegetation to keep and share photos showing brush density and access."
  if (/fence|trail|boundary/.test(topic)) return "Describe the length and width to open, known boundaries and whether cut material needs hauling."
  if (/grading|dirt|excavat|drainage|level/.test(topic)) return "Explain current runoff, the surface you need and whether dirt must be moved, added or removed."
  if (/haul|debris|cleanup|material/.test(topic)) return "Describe the material, approximate quantity and truck or equipment access."
  return "Describe the work area, terrain, obstacles and what you want the property used for afterward."
}

export function LocationProjectGuide({ location }: { location: LocationPage }) {
  const detail = cityDetails[location.city]
  return (
    <section aria-labelledby="local-planning-heading" className="py-16 md:py-24 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-9">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Local Project Planning • {location.county}</p>
          <h2 id="local-planning-heading" className="text-3xl md:text-4xl font-bold uppercase font-[family-name:var(--font-display)] mt-2">
            Land Clearing & Dirt Work in {location.city}, TX: What to Know
          </h2>
          <p className="text-foreground/70 leading-relaxed mt-4 text-lg">{location.localNeeds}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-6 md:p-8">
            <div className="mb-3 flex items-center gap-2 text-primary"><MapPin className="h-5 w-5" aria-hidden="true" /><span className="text-sm font-semibold uppercase tracking-wider">{location.city} property considerations</span></div>
            <h3 className="text-xl font-bold mb-3">{detail?.heading ?? `Planning a ${location.city} property project`}</h3>
            <p className="text-foreground/70 leading-relaxed">{detail?.detail ?? location.intro}</p>
          </article>
          <article className="rounded-lg border border-border bg-card p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Local question</p>
            <h3 className="text-xl font-bold mb-3">{detail?.question ?? `What should I prepare for a land-clearing estimate in ${location.city}?`}</h3>
            <p className="text-foreground/70 leading-relaxed">{detail?.answer ?? `Share the location in ${location.county}, approximate area, photos of brush and access, and whether you need clearing, grading or hauling. The finished use of the land helps define the scope.`}</p>
          </article>
        </div>
        <h3 className="text-2xl font-bold mt-12 mb-5">Common Projects Around {location.city}</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {location.focus.map((focus) => (
            <article key={focus} className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-bold flex items-start gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 mt-1 shrink-0 text-primary" aria-hidden="true" />
                {focus}
              </h4>
              <p className="text-foreground/70 leading-relaxed">{planningTip(focus)}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-primary/30 bg-card p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-3">Request a Free {location.city} Project Estimate</h3>
          <p className="text-foreground/70 leading-relaxed">
            Tell us your property location, approximate work area, and what you want done. Photos of gates, access routes,
            vegetation and rough ground help explain the job. Ask whether brush cutting, grading, hauling and disposal
            are included. Project availability depends on location, scope and scheduling.
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <a href="tel:+12108914174" className="font-semibold text-primary hover:underline">Call (210) 891-4174</a>
            <a href="sms:+12108914174" className="font-semibold text-primary hover:underline">Text Property Photos</a>
            <Link href="/service-areas" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
              Explore Nearby Service Areas <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
