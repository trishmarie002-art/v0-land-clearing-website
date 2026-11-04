"use client"

import { useEffect } from "react"

type LeadEvent = "lead_call_click" | "lead_sms_click" | "lead_form_submit_success" | "lead_form_submit_error"

export function trackLeadEvent(event: LeadEvent, details: Record<string, string> = {}) {
  if (typeof window === "undefined") return
  const dataLayerWindow = window as Window & { dataLayer?: Array<Record<string, string>> }
  dataLayerWindow.dataLayer = dataLayerWindow.dataLayer || []
  dataLayerWindow.dataLayer.push({
    event,
    page_path: window.location.pathname,
    ...details,
  })
}

// Count intent (clicks), not completed phone calls. Actual calls require separate call reporting.
export function LeadTracking() {
  useEffect(() => {
    const trackLinks = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest("a[href]")
      if (!(link instanceof HTMLAnchorElement)) return
      const href = link.getAttribute("href") || ""
      if (href.startsWith("tel:")) {
        trackLeadEvent("lead_call_click", { link_text: link.textContent?.trim().slice(0, 80) || "Phone link" })
      } else if (href.startsWith("sms:")) {
        trackLeadEvent("lead_sms_click", { link_text: link.textContent?.trim().slice(0, 80) || "Text link" })
      }
    }

    document.addEventListener("click", trackLinks, true)
    return () => document.removeEventListener("click", trackLinks, true)
  }, [])

  return null
}
