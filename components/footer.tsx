"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#faq", label: "FAQ" },
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
  return (
    <footer className="bg-secondary border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll fade-in">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center transition-transform group-hover:scale-105 group-hover:-rotate-3">
                <span className="text-primary-foreground font-bold text-lg font-[family-name:var(--font-display)]">J</span>
              </div>
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
            <div className="flex items-center gap-2 text-primary font-semibold transition-transform hover:translate-x-1">
              <Phone className="w-4 h-4" />
              <a href="tel:+12108914174">(210) 891-4174</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)] uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-all text-sm hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)] uppercase">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 font-[family-name:var(--font-display)] uppercase">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 transition-transform hover:translate-x-1">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <a href="tel:+12108914174" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    (210) 891-4174
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 transition-transform hover:translate-x-1">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <a href="mailto:jayslandclearingservices@gmail.com" className="text-foreground/70 hover:text-primary transition-colors text-sm break-all">
                    jayslandclearingservices@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 transition-transform hover:translate-x-1">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <span className="text-foreground/70 text-sm">
                    San Antonio, TX & Surrounding Areas
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} {"Jay's Land Clearing Service & Dirt Work"}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-foreground/50 hover:text-primary transition-colors hover:-translate-y-0.5 inline-block">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/50 hover:text-primary transition-colors hover:-translate-y-0.5 inline-block">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
