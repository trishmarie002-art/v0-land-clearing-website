"use client"

import { useEffect, useRef, useState } from "react"
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

// San Antonio coordinates
const SAN_ANTONIO_LAT = 29.4241
const SAN_ANTONIO_LNG = -98.4936
const RADIUS_MILES = 50
const RADIUS_METERS = RADIUS_MILES * 1609.34 // Convert miles to meters

function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return

    const loadMap = async () => {
      const L = (await import("leaflet")).default
      await import("leaflet/dist/leaflet.css")

      if (mapRef.current && !mapRef.current.hasChildNodes()) {
        const map = L.map(mapRef.current, {
          center: [SAN_ANTONIO_LAT, SAN_ANTONIO_LNG],
          zoom: 8,
          zoomControl: true,
          scrollWheelZoom: false,
          attributionControl: true,
        })

        // Dark themed map tiles (Carto Dark Matter)
        L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: "abcd",
            maxZoom: 19,
          }
        ).addTo(map)

        // Add yellow 50-mile radius circle that scales with zoom
        L.circle([SAN_ANTONIO_LAT, SAN_ANTONIO_LNG], {
          color: "#eab308",
          fillColor: "#eab308",
          fillOpacity: 0.15,
          weight: 3,
          radius: RADIUS_METERS,
        }).addTo(map)

        // Custom marker icon for San Antonio center
        const centerIcon = L.divIcon({
          className: "custom-marker",
          html: `
            <div style="position: relative; display: flex; align-items: center; justify-content: center;">
              <div style="position: absolute; width: 32px; height: 32px; background: rgba(234, 179, 8, 0.3); border-radius: 50%; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
              <div style="width: 16px; height: 16px; background: #eab308; border-radius: 50%; border: 3px solid #1a1a2e; box-shadow: 0 4px 12px rgba(234, 179, 8, 0.5);"></div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        })

        const marker = L.marker([SAN_ANTONIO_LAT, SAN_ANTONIO_LNG], {
          icon: centerIcon,
        }).addTo(map)

        marker.bindPopup(
          `<div style="text-align: center; padding: 4px 8px;">
            <strong style="font-size: 14px;">San Antonio, TX</strong>
            <p style="margin: 4px 0 0; font-size: 12px; color: #666;">Service Center</p>
          </div>`
        )

        // Custom CSS for map styling
        const style = document.createElement("style")
        style.textContent = `
          @keyframes ping {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          .leaflet-container {
            background: #1a1a2e !important;
            font-family: inherit;
          }
          .leaflet-control-zoom {
            border: 1px solid rgba(255,255,255,0.1) !important;
          }
          .leaflet-control-zoom a {
            background: rgba(26, 26, 46, 0.95) !important;
            color: #fff !important;
            border-color: rgba(255,255,255,0.1) !important;
          }
          .leaflet-control-zoom a:hover {
            background: rgba(50, 50, 70, 0.95) !important;
          }
          .leaflet-control-attribution {
            background: rgba(26, 26, 46, 0.8) !important;
            color: rgba(255,255,255,0.5) !important;
            font-size: 10px !important;
          }
          .leaflet-control-attribution a {
            color: rgba(255,255,255,0.6) !important;
          }
        `
        document.head.appendChild(style)

        setIsLoaded(true)
      }
    }

    loadMap()
  }, [])

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full min-h-[250px]" />

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
      <div className="absolute bottom-4 right-4 bg-primary px-4 py-2 rounded-md shadow-lg z-[1000]">
        <p className="text-xs text-primary-foreground/80 font-medium">Service Radius</p>
        <p className="text-lg font-bold text-primary-foreground font-[family-name:var(--font-display)]">50 Miles</p>
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
