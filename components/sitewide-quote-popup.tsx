"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, MessageSquareText, X } from "lucide-react"
import { HeroQuoteForm } from "@/components/hero-quote-form"

export function SitewideQuotePopup() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Visitors open the quote form deliberately; do not block the landing page on load.
  useEffect(() => {
    const showQuote = () => setOpen(true)
    window.addEventListener("open-jays-quote", showQuote)
    return () => window.removeEventListener("open-jays-quote", showQuote)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss()
      if (event.key === "Tab") {
        const dialog = document.getElementById("sitewide-quote-dialog")
        if (!dialog) return
        const focusables = Array.from(dialog.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled])'
        )).filter(el => el.getClientRects().length > 0)
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (!first || !last) return
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [open])

  function dismiss() {
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 sm:p-5"
      onMouseDown={event => { if (event.target === event.currentTarget) dismiss() }}
    >
      <div
        id="sitewide-quote-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Get Your Free Quote Scheduled"
        className="relative w-full max-w-lg max-h-[calc(100dvh-24px)] overflow-y-auto rounded-xl border border-yellow-400/50 bg-zinc-950 shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 rounded-full border border-white/40 bg-zinc-800 p-2 text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Close free quote popup"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="[&>div]:border-0 [&>div]:shadow-none [&>div]:pr-12">
          <HeroQuoteForm variant="popup" />
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-white/15 px-5 pb-5 pt-4">
          <a
            href="tel:+12108914174"
            onClick={dismiss}
            className="flex items-center justify-center gap-2 rounded-md bg-yellow-400 px-3 py-3 text-sm font-bold text-black hover:bg-yellow-300"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href="sms:+12108914174"
            onClick={dismiss}
            className="flex items-center justify-center gap-2 rounded-md border border-yellow-400 px-3 py-3 text-sm font-bold text-yellow-400 hover:bg-yellow-400/10"
          >
            <MessageSquareText className="h-4 w-4" /> Text Us
          </a>
        </div>
      </div>
    </div>
  )
}
