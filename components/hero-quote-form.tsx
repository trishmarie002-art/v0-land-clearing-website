"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { trackLeadEvent } from "@/components/lead-tracking"

const services = ["Land Clearing", "Dirt Work & Grading", "Excavation", "Hauling Services", "Lot Preparation", "Fence Line Clearing", "Brush Removal", "Concrete Removal", "Rock Removal", "Junk Removal", "Hoarding Cleanouts", "Demolition", "Other"]

export function HeroQuoteForm({ city, variant = "hero" }: { city?: string; variant?: "hero" | "popup" }) {
  const idPrefix = variant === "popup" ? "popup-quote" : "hero-quote"
  const formSource = variant === "popup" ? "Sitewide Quick Quote Popup" : city ? `${city} Service Area Hero Quick Quote` : "Homepage Hero Quick Quote"
  const trackingLocation = variant === "popup" ? "sitewide_popup" : city ? "service_area_hero" : "homepage_hero"
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [service, setService] = useState("")
  const [details, setDetails] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (loading) return
    setLoading(true)
    setError("")

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
      if (!accessKey) throw new Error("Missing form configuration")
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New ${formSource} - ${service || "Land Clearing"}`,
          from_name: "Jay's Land Clearing Website",
          name,
          phone,
          email: "Not provided",
          zip_code: location,
          service,
          message: details || `Customer requested a quick quote from ${formSource}.`,
          form_source: formSource,
        }),
      })
      if (!response.ok) throw new Error("Quote service unavailable")
      const result = await response.json()
      if (!result.success) throw new Error("Quote service rejected submission")
      trackLeadEvent("lead_form_submit_success", { service, form_location: trackingLocation })
      setSent(true)
    } catch (err) {
      console.error("Quick quote submission failed", err)
      trackLeadEvent("lead_form_submit_error", { form_location: trackingLocation })
      setError("We couldn't send your request. Please call (210) 891-4174 instead.")
    } finally {
      setLoading(false)
    }
  }

  const input = "w-full min-w-0 rounded-md border border-white/20 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
  return (
    <div className="w-full rounded-xl border border-yellow-400/50 bg-zinc-950/95 p-5 xl:p-6 text-left text-white shadow-2xl">
      {sent ? (
        <div role="status" className="flex min-h-72 flex-col items-center justify-center gap-4 text-center">
          <CheckCircle2 className="h-12 w-12 text-yellow-400" />
          <h2 className="text-2xl font-bold">Quote Request Sent!</h2>
          <p className="text-sm text-white/80">Thanks! We received your request and will contact you as soon as possible.</p>
          <button type="button" onClick={() => { setSent(false); setName(""); setPhone(""); setLocation(""); setService(""); setDetails("") }} className="font-semibold text-yellow-400 underline">
            Send another request
          </button>
        </div>
      ) : (
        <>
          <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">Fast & Easy</p>
          <h2 className="mt-1 text-2xl font-bold uppercase">{variant === "popup" ? "Get Your Free Quote Scheduled" : "Get a Free Quote"}</h2>
          <p className="mt-1 mb-4 text-sm text-white/75">Tell us what you need done, and we’ll contact you to schedule your free estimate.</p>
          <form className="space-y-3" onSubmit={submit}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor={`${idPrefix}-name`} className="mb-1 block text-xs font-medium">Your name *</label>
                <input id={`${idPrefix}-name`} autoComplete="name" className={input} required maxLength={120} value={name} onChange={e => setName(e.target.value)} placeholder="Full name" />
              </div>
              <div>
                <label htmlFor={`${idPrefix}-phone`} className="mb-1 block text-xs font-medium">Phone number *</label>
                <input id={`${idPrefix}-phone`} type="tel" autoComplete="tel" className={input} required maxLength={30} value={phone} onChange={e => setPhone(e.target.value)} placeholder="(210) 555-0000" />
              </div>
            </div>
            <div>
              <label htmlFor={`${idPrefix}-location`} className="mb-1 block text-xs font-medium">Property city or ZIP *</label>
              <input id={`${idPrefix}-location`} autoComplete="postal-code" className={input} required maxLength={100} value={location} onChange={e => setLocation(e.target.value)} placeholder="San Antonio, TX" />
            </div>
            <div>
              <label htmlFor={`${idPrefix}-service`} className="mb-1 block text-xs font-medium">Service needed *</label>
              <select id={`${idPrefix}-service`} className={input} required value={service} onChange={e => setService(e.target.value)}>
                <option value="">Select a service</option>
                {services.map(item => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor={`${idPrefix}-details`} className="mb-1 block text-xs font-medium">Project details (optional)</label>
              <textarea id={`${idPrefix}-details`} rows={2} maxLength={1500} className={input} value={details} onChange={e => setDetails(e.target.value)} placeholder="Approximate acreage or what you need cleared..." />
            </div>
            {error && <p role="alert" className="text-sm text-red-300">{error} <a href="tel:+12108914174" className="font-semibold underline">Call now</a></p>}
            <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-md bg-yellow-400 px-4 py-3 font-bold uppercase text-black transition-colors hover:bg-yellow-300 disabled:cursor-wait disabled:opacity-60">
              <Send className="h-4 w-4" />{loading ? "Sending..." : "Request My Free Quote"}
            </button>
            <p className="text-center text-xs text-white/60">Prefer to call? (210) 891-4174</p>
          </form>
        </>
      )}
    </div>
  )
}
