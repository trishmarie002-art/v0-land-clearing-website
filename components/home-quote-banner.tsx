"use client"

import { ArrowRight, Phone } from "lucide-react"

type BannerVariant = "clearing" | "planning" | "estimate"

const contentByVariant: Record<BannerVariant, { eyebrow: string; heading: string; detail: string }> = {
  clearing: {
    eyebrow: "Land Clearing & Brush Removal",
    heading: "Ready to Reclaim Your Property?",
    detail: "Tell us what you need cleared in San Antonio or the surrounding South Texas area.",
  },
  planning: {
    eyebrow: "Grading, Excavation & Site Prep",
    heading: "Planning Dirt Work or a New Project?",
    detail: "Discuss access, drainage, grading, excavation and site preparation with our team.",
  },
  estimate: {
    eyebrow: "Your Next Step",
    heading: "Have a Property Project in Mind?",
    detail: "Call now or request a free, no-obligation estimate for the work you need done.",
  },
}

export function HomeQuoteBanner({ variant }: { variant: BannerVariant }) {
  const banner = contentByVariant[variant]

  return (
    <section aria-label={banner.heading} className="border-y border-yellow-400/35 bg-zinc-950 py-10 text-white md:py-14">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400 sm:text-sm">{banner.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-extrabold uppercase leading-tight font-[family-name:var(--font-display)] sm:text-3xl md:text-4xl">
              {banner.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75 sm:text-base lg:mx-0">{banner.detail}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:w-auto">
            <a
              href="tel:+12108914174"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-yellow-400 bg-zinc-900 px-5 py-3 text-lg font-bold text-yellow-400 transition-colors hover:bg-zinc-800"
              aria-label="Call Jay's Land Clearing at (210) 891-4174"
            >
              <Phone aria-hidden="true" className="h-5 w-5 shrink-0" />
              (210) 891-4174
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-jays-quote"))}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-base font-extrabold uppercase text-zinc-950 transition-colors hover:bg-yellow-300"
            >
              Free Quote <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
