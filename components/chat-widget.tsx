"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-card border border-border rounded-lg shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-foreground text-sm">{"Jay's Land Clearing"}</h4>
                  <p className="text-primary-foreground/70 text-xs">{"We're here to help!"}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <p className="text-foreground/80 text-sm mb-6">
              {"Need a quick response? Reach out to us directly and we'll get back to you as soon as possible!"}
            </p>

            <div className="space-y-3">
              {/* Call Button */}
              <a
                href="tel:+12105551234"
                className="flex items-center gap-3 w-full p-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-colors group"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-foreground text-sm">Call Us Now</span>
                  <span className="text-foreground/60 text-xs">(210) 555-1234</span>
                </div>
              </a>

              {/* Text Button */}
              <a
                href="sms:+12105551234?body=Hi, I'm interested in your land clearing services."
                className="flex items-center gap-3 w-full p-4 bg-secondary hover:bg-secondary/80 border border-border rounded-lg transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <span className="block font-semibold text-foreground text-sm">Send a Text</span>
                  <span className="text-foreground/60 text-xs">Quick response guaranteed</span>
                </div>
              </a>
            </div>

            <p className="text-foreground/50 text-xs text-center mt-4">
              Available Mon-Sat, 7AM - 6PM
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className={`w-16 h-16 rounded-full shadow-lg transition-all ${
          isOpen
            ? "bg-secondary text-foreground hover:bg-secondary/80"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
      )}
    </div>
  )
}
