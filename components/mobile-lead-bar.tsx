"use client"

import { ClipboardList, MessageSquareText, Phone } from "lucide-react"

export function MobileLeadBar() {
  return (
    <aside aria-label="Quick contact options" className="fixed bottom-0 inset-x-0 z-[60] border-t border-yellow-400/40 bg-zinc-950/95 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a href="tel:+12108914174" className="flex min-h-12 items-center justify-center gap-1.5 rounded-lg border border-yellow-400/50 px-2 text-sm font-semibold text-yellow-400">
          <Phone aria-hidden="true" size={17} /> Call
        </a>
        <a href="sms:+12108914174" className="flex min-h-12 items-center justify-center gap-1.5 rounded-lg border border-yellow-400/50 px-2 text-sm font-semibold text-yellow-400">
          <MessageSquareText aria-hidden="true" size={17} /> Text
        </a>
        <button type="button" onClick={() => window.dispatchEvent(new Event("open-jays-quote"))} className="flex min-h-12 items-center justify-center gap-1.5 rounded-lg bg-yellow-400 px-2 text-sm font-bold text-zinc-950">
          <ClipboardList aria-hidden="true" size={17} /> Free Quote
        </button>
      </div>
    </aside>
  )
}
