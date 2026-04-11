"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  "Land Clearing",
  "Dirt Work & Grading",
  "Excavation",
  "Hauling Services",
  "Lot Preparation",
  "Fence Line Clearing",
  "Other",
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Quote Request from ${formData.name} - ${formData.service}`,
          from_name: "Jay's Land Clearing Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          zip_code: formData.zipCode,
          service: formData.service,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          zipCode: "",
          service: "",
          message: "",
        })
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    }

    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll fade-in">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-[family-name:var(--font-display)] uppercase text-balance">
            Ready to <span className="text-primary">Transform</span> Your Property?
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Get a free, no-obligation quote for your land clearing project. We respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Contact Form - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="bg-card border border-border rounded-xl p-5 md:p-6 animate-on-scroll fade-in">
              <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-display)] uppercase">
                Request Your Free Quote
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Message Sent Successfully!</h4>
                  <p className="text-foreground/70 mb-6">
                    Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                        Full Name *
                      </label>
                      <input 
                        id="name"
                        name="name" 
                        required 
                        placeholder="John Doe"
                        value={formData.name} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">
                        Phone Number *
                      </label>
                      <input 
                        id="phone"
                        name="phone" 
                        type="tel"
                        required 
                        placeholder="(210) 555-0123"
                        value={formData.phone} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                      Email Address (optional)
                    </label>
                    <input 
                      id="email"
                      name="email" 
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-foreground/80 mb-2">
                      Zip Code (optional)
                    </label>
                    <input 
                      id="zipCode"
                      name="zipCode" 
                      placeholder="78201"
                      value={formData.zipCode} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground/80 mb-2">
                      Service Needed *
                    </label>
                    <select 
                      id="service"
                      name="service" 
                      required
                      value={formData.service} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="text-foreground/40">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="text-foreground bg-secondary">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                      Project Details
                    </label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows={4}
                      placeholder="Tell us about your project: property size, specific needs, timeline, etc."
                      value={formData.message} 
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-bold uppercase tracking-wide transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Get Your Free Quote
                      </span>
                    )}
                  </Button>

                  <p className="text-center text-foreground/50 text-sm">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Sidebar - Right Side */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Contact Info Card */}
            <div className="bg-card border border-border rounded-xl p-5 animate-on-scroll fade-in">
              <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-display)] uppercase">
                Contact Information
              </h3>
              <div className="space-y-3">
                <a 
                  href="tel:+12108914174" 
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-all group"
                >
                  <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Call Us Now</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">(210) 891-4174</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:jayslandclearingservices@gmail.com" 
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-all group"
                >
                  <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Email Us</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-xs break-all">jayslandclearingservices@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Service Area</p>
                    <p className="font-semibold text-foreground text-sm">San Antonio, TX & Surrounding</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Business Hours</p>
                    <p className="font-semibold text-foreground text-sm">Mon - Sat: 7AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-card border border-border rounded-xl p-5 animate-on-scroll fade-in">
              <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-display)] uppercase">
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                {[
                  "Free, no-obligation estimates",
                  "Fast response times",
                  "Competitive pricing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
