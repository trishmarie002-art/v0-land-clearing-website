"use client"

import { Phone } from "lucide-react"

export function UrgentQuoteBanner() {
  const handleCallClick = () => {
    window.location.href = "tel:+12108914174"
  }

  const bannerText = "GET A FREE QUOTE TODAY"
  const repeatedText = Array(10).fill(bannerText).join(" \u2022 ")

  return (
    <div className="fixed top-[80px] md:top-[112px] left-0 right-0 z-30 bg-yellow-400 overflow-hidden">
      <div className="relative py-3">
        {/* Scrolling Marquee Text */}
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-black font-bold text-lg sm:text-xl md:text-2xl tracking-wide uppercase mx-4">
            {repeatedText}
          </span>
          <span className="text-black font-bold text-lg sm:text-xl md:text-2xl tracking-wide uppercase mx-4">
            {repeatedText}
          </span>
        </div>

        {/* Centered Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            {/* Left Arrow Pointer */}
            <div className="animate-point-right">
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                className="text-yellow-600"
              >
                <path
                  d="M0 12L24 12M24 12L16 4M24 12L16 20"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Flashing Call Button */}
            <button
              onClick={handleCallClick}
              className="animate-flash-sync flex items-center gap-2 bg-black text-yellow-400 font-bold px-6 py-3 rounded-lg text-lg sm:text-xl shadow-lg hover:scale-105 transition-transform border-2 border-yellow-600"
            >
              <Phone className="w-5 h-5 animate-phone-ring" />
              Call NOW
            </button>

            {/* Right Arrow Pointer */}
            <div className="animate-point-left">
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                className="text-yellow-600"
              >
                <path
                  d="M32 12L8 12M8 12L16 4M8 12L16 20"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
