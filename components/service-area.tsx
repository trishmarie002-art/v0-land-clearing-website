"use client"

import { CheckCircle2, MapPin } from "lucide-react"

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
            Proudly serving San Antonio and surrounding communities within a 60-mile radius.
          </p>
        </div>

        {/* Map and Cities Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map Container */}
          <div className="animate-on-scroll slide-in-left">
            <div className="relative aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden bg-card border border-border">
              {/* Dark themed map placeholder */}
              <div className="absolute inset-0 bg-[#1a1a2e]">
                {/* Grid pattern overlay for map texture */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }}
                />
                
                {/* Subtle road network effect */}
                <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                  <defs>
                    <pattern id="roads" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <path d="M0 50 L100 50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
                      <path d="M50 0 L50 100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
                      <path d="M20 0 L80 100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none"/>
                      <path d="M80 0 L20 100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#roads)"/>
                </svg>

                {/* 60-mile radius circle - translucent green */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-[70%] aspect-square rounded-full border-2 border-green-500/60"
                    style={{
                      background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 50%, rgba(34, 197, 94, 0.03) 100%)',
                      boxShadow: '0 0 60px rgba(34, 197, 94, 0.2), inset 0 0 60px rgba(34, 197, 94, 0.1)'
                    }}
                  />
                </div>

                {/* San Antonio center marker */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulse animation */}
                    <div className="absolute inset-0 w-4 h-4 bg-primary/50 rounded-full animate-ping" />
                    {/* Center dot */}
                    <div className="relative w-4 h-4 bg-primary rounded-full border-2 border-primary-foreground shadow-lg" />
                    {/* Label */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border shadow-lg">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">San Antonio, TX</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Radius label */}
                <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-2 rounded-md border border-border">
                  <p className="text-xs text-muted-foreground">Service Radius</p>
                  <p className="text-lg font-bold text-primary font-[family-name:var(--font-display)]">60 Miles</p>
                </div>

                {/* Map attribution placeholder */}
                <div className="absolute bottom-4 left-4 text-xs text-muted-foreground/50">
                  Map powered by Mapbox
                </div>
              </div>
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
