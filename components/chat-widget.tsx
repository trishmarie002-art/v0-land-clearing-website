"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-80 bg-card border border-border rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-primary-foreground text-sm">{"Jay's Land Clearing"}</h4>
                    <p className="text-primary-foreground/70 text-xs">{"We're here to help!"}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 text-sm mb-6"
              >
                {"Need a quick response? Reach out to us directly and we'll get back to you as soon as possible!"}
              </motion.p>

              <div className="space-y-3">
                {/* Call Button */}
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+12108914174"
                  className="flex items-center gap-3 w-full p-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-colors group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <div className="text-left">
                    <span className="block font-semibold text-foreground text-sm">Call Us Now</span>
                    <span className="text-foreground/60 text-xs">(210) 891-4174</span>
                  </div>
                </motion.a>

                {/* Text Button */}
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  href="sms:+12108914174?body=Hi, I'm interested in your land clearing services."
                  className="flex items-center gap-3 w-full p-4 bg-secondary hover:bg-secondary/80 border border-border rounded-lg transition-colors group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center"
                  >
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="text-left">
                    <span className="block font-semibold text-foreground text-sm">Send a Text</span>
                    <span className="text-foreground/60 text-xs">Quick response guaranteed</span>
                  </div>
                </motion.a>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-foreground/50 text-xs text-center mt-4"
              >
                Available Mon-Sat, 7AM - 6PM
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
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
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </motion.div>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
          className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full"
        />
      )}
    </div>
  )
}
