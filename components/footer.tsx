"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Land Clearing",
  "Dirt Work & Grading",
  "Excavation",
  "Hauling Services",
  "Lot Preparation",
  "Fence Line Clearing",
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="bg-secondary border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 py-16" ref={ref}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -5 }}
                className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center"
              >
                <span className="text-primary-foreground font-bold text-lg font-[family-name:var(--font-display)]">J</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-primary font-[family-name:var(--font-display)] uppercase tracking-wide">
                  {"Jay's Land Clearing"}
                </span>
                <span className="text-xs text-muted-foreground">& Dirt Work</span>
              </div>
            </Link>
            <p className="text-foreground/70 text-sm mb-4">
              Professional land clearing and dirt work services in San Antonio and surrounding areas. Transforming properties for over 15 years.
            </p>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-primary font-semibold"
            >
              <Phone className="w-4 h-4" />
              <a href="tel:+12108914174">(210) 891-4174</a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)] uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)] uppercase">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <span className="text-foreground/70 text-sm">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)] uppercase">Contact Info</h4>
            <ul className="space-y-3">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <a href="tel:+12108914174" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    (210) 891-4174
                  </a>
                </div>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <a href="mailto:jayslandclearingservices@gmail.com" className="text-foreground/70 hover:text-primary transition-colors text-sm break-all">
                    jayslandclearingservices@gmail.com
                  </a>
                </div>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <span className="text-foreground/70 text-sm">
                    San Antonio, TX & Surrounding Areas
                  </span>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} {"Jay's Land Clearing Service & Dirt Work"}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <motion.div whileHover={{ y: -2 }}>
              <Link href="#" className="text-foreground/50 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href="#" className="text-foreground/50 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
