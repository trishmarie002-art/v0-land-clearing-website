"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Over 15 years of experience in land clearing",
  "Locally owned and operated in San Antonio",
  "Fully licensed",
  "State-of-the-art equipment and techniques",
  "Commitment to environmental responsibility",
  "Competitive pricing with no hidden fees",
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-on-scroll slide-in-left">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/hero-2.jpg"
                alt="Jay's Land Clearing team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg hidden md:block shadow-2xl transition-transform hover:scale-105">
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary-foreground font-[family-name:var(--font-display)]">
                  15+
                </span>
                <span className="text-primary-foreground/80 text-sm">Years of Experience</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll slide-in-right">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 font-[family-name:var(--font-display)] uppercase">
              Your Trusted Partner in <span className="text-primary">Land Clearing</span>
            </h2>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              {"Jay's Land Clearing Service & Dirt Work has been serving San Antonio and the surrounding areas for over 15 years. What started as a small family operation has grown into one of the most trusted land clearing companies in South Texas."}
            </p>

            <p className="text-foreground/80 mb-8 leading-relaxed">
              We take pride in transforming properties of all sizes, from residential lots to large commercial developments. Our team combines years of expertise with modern equipment to deliver exceptional results on every project.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 transition-transform hover:translate-x-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
