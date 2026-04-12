"use client"

import { useState } from "react"
import { CheckCircle2, MapPin } from "lucide-react"

// Service cities list
const serviceCities = [
  "San Antonio",
  "Boerne",
  "New Braunfels",
  "Seguin",
  "Floresville",
  "Castroville",
  "Helotes",
  "Leon Valley",
  "Schertz",
  "Cibolo",
  "Universal City",
  "Selma",
  "Converse",
  "Live Oak",
  "Windcrest",
  "Garden Ridge",
  "Fair Oaks Ranch",
  "Hollywood Park",
  "Alamo Heights",
  "Terrell Hills",
]

function ServiceAreaMap() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Google Maps embed URL with dark theme and San Antonio centered
  // Using a custom styled map URL for dark theme appearance
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444976.7025421146!2d-98.86775082699442!3d29.45879538282698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e13b10a016bc!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`

  return (
    <div className="relative w-full h-full">
      {/* Google Maps Embed */}
      <iframe
        src={mapSrc}
        className="w-full h-full min-h-[250px] grayscale invert contrast-90 hue-rotate-180"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Service Area Map - San Antonio, TX"
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a2e]">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-muted-foreground text-sm">Loading map...</p>
          </div>
        </div>
      )}

      {/* Radius label overlay */}
      <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm px-3 py-2 rounded-md border border-border z-10">
        <p className="text-xs text-muted-foreground">Service Radius</p>
        <p className="text-lg font-bold text-primary font-[family-name:var(--font-display)]">50 Miles</p>
      </div>
    </div>
  )
}

export function ServiceArea() {
  return (
    <section id="service-area" className="py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Where We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 font-[family-name:var(--font-display)] uppercase">
            Our <span className="text-primary">Service Area</span>
          </h2>
          <p className="text-foreground/70">
            Proudly serving San Antonio and surrounding communities within a 50-mile radius.
          </p>
        </div>

        {/* Map and Cities Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map Container - Landscape format */}
          <div className="animate-on-scroll slide-in-left">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-card border border-border">
              <ServiceAreaMap />
            </div>
          </div>

          {/* Service Cities */}
          <div className="animate-on-scroll slide-in-right">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] uppercase">
                  Primary Service <span className="text-primary">Cities</span>
                </h3>
              </div>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                We provide land clearing, dirt work, and excavation services throughout the greater San Antonio metropolitan area and beyond.
              </p>

              {/* Two-column grid of cities */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {serviceCities.map((city, index) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 group transition-transform hover:translate-x-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-foreground/80 text-sm">{city}</span>
                  </div>
                ))}
              </div>

              {/* Additional note */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  {"Don't see your city listed? We may still be able to help! Contact us to discuss your project location."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
