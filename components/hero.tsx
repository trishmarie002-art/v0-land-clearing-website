"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const heroImage = "https://s7d2.scene7.com/is/image/Caterpillar/CM20151019-51537-20839?$cc-pdp-t5$=&fmt=pjpeg"

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-140px)] md:h-[calc(100vh-172px)] min-h-[500px] md:min-h-[600px] max-h-[700px] md:max-h-[900px] overflow-hidden mt-[140px] md:mt-[172px]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Skid steer with mulcher attachment clearing land in San Antonio, Texas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 h-full flex items-center justify-center">
        <div className="max-w-2xl text-center w-full">
          <div className="mb-4 animate-fade-in">
            <span className="inline-block px-3 sm:px-4 py-1.5 bg-primary/20 text-primary text-xs sm:text-sm font-semibold rounded-full border border-primary/30">
              San Antonio&apos;s Premier Land Clearing Service
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-display)] uppercase tracking-tight text-balance animate-slide-up px-2">
            <span className="text-primary">Land Clearing Service</span> & Dirt Work in San Antonio, TX
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 max-w-lg mx-auto animate-slide-up-delay px-2">
            Professional skid steer mulching, land clearing, grading, and property preparation throughout San Antonio and surrounding areas.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 animate-fade-in-delay justify-center px-2">
            <Button
              asChild
              size="lg"
              className="animate-slow-blink bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs sm:text-sm md:text-base px-3 sm:px-6 md:px-8 transition-transform hover:scale-105 w-full sm:w-auto"
            >
              <a href="tel:+12108914174" className="text-center">SCHEDULE YOUR FREE QUOTE NOW</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-sm sm:text-base px-6 sm:px-8 transition-transform hover:scale-105 w-full sm:w-auto"
            >
              <Link href="#services">Our Services</Link>
            </Button>
          </div>

          <div className="mt-4 sm:mt-6 animate-fade-in-delay">
            <a
              href="sms:+12108914174"
              className="inline-block bg-black/80 text-yellow-400 hover:bg-black font-semibold text-xs sm:text-sm px-4 py-3 rounded-lg transition-transform hover:scale-105 border border-yellow-400/50"
            >
              Text us a photo for a faster quote!
            </a>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-12 flex items-center justify-center gap-8 text-sm text-foreground/60 animate-fade-in-delay-2">
            {["Free Estimates", "Local Owned"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
