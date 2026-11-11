"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, MessageSquareText, X } from "lucide-react"
import { HeroQuoteForm } from "@/components/hero-quote-form"

const FIRST_VISIT_KEY = "jays_quote_popup_first_visit_at"
const SEEN_KEY = "jays_quote_popup_seen"
const POPUP_DELAY_MS = 30_000

export function SitewideQuotePopup() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Show once, 30 seconds after the visitor first arrives during this browser session.
  // Manual quote buttons continue to open the dialog at any time.
  useEffect(() => {
    const markSeen = () => {
      try { window.sessionStorage.setItem(SEEN_KEY, "1") } catch {}
    }

    const showQuote = () => {
      markSeen()
      setOpen(true)
    }
    window.addEventListener("open-jays-quote", showQuote)

    let timer: ReturnType<typeof setTimeout> | undefined
    let previouslySeen = false
    let elapsed = 0
    try {
      previouslySeen = window.sessionStorage.getItem(SEEN_KEY) === "1"
      if (!previouslySeen) {
        const now = Date.now()
        const stored = Number(window.sessionStorage.getItem(FIRST_VISIT_KEY))
        const started = stored > 0 && stored <= now ? stored : now
        if (started === now) window.sessionStorage.setItem(FIRST_VISIT_KEY, String(now))
        elapsed = now - started
      }
    } catch {
      // Storage may be disabled. In that case, use the normal 30-second delay.
    }

    if (!previouslySeen) {
      timer = setTimeout(() => {
        try {
          if (window.sessionStorage.getItem(SEEN_KEY) === "1") return
        } catch {}
        markSeen()
        setOpen(true)
      }, Math.max(0, POPUP_DELAY_MS - elapsed))
    }

    return () => {
      if (timer) clearTimeout(timer)
      window.removeEventListener("open-jays-quote", showQuote)
    }
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
