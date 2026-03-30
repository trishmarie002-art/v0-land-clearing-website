"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(210) 891-4174",
    href: "tel:+12108914174",
  },
  {
    icon: Mail,
    title: "Email",
    value: "jayslandclearingservices@gmail.com",
    href: "mailto:jayslandclearingservices@gmail.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "San Antonio & Surrounding Areas",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Sat: 7AM - 6PM",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })

      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError("Something went wrong. Please call us directly at (210) 891-4174")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 font-[family-name:var(--font-display)] uppercase">
            Get Your <span className="text-primary">Free Estimate</span>
          </h2>
          <p className="text-foreground/70">
            Ready to transform your property? Contact us today for a free, no-obligation estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-on-scroll slide-in-left">
            <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-display)] uppercase">
              Get in Touch
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 transition-transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 transition-all hover:bg-primary/20 hover:scale-110">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground/70">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444477.30153655!2d-98.82064099999999!3d29.4246002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e13b10a016bc!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="San Antonio Service Area Map"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 animate-on-scroll slide-in-right">
            <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-display)] uppercase">
              Request a Quote
            </h3>

            {submitted ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center animate-scale-in">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">Thank You!</h4>
                <p className="text-foreground/70">
                  {"We've received your message and will get back to you within 24 hours."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border transition-all focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(210) 555-1234"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background border-border transition-all focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border transition-all focus:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all focus:scale-[1.02]"
                  >
                    <option value="">Select a service</option>
                    <option value="Land Clearing">Land Clearing</option>
                    <option value="Brush Removal">Brush Removal</option>
                    <option value="Dirt Work & Grading">Dirt Work & Grading</option>
                    <option value="Excavation">Excavation</option>
                    <option value="Hauling Services">Hauling Services</option>
                    <option value="Lot Preparation">Lot Preparation</option>
                    <option value="Fence Line Clearing">Fence Line Clearing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project - property size, type of work needed, timeline, etc."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background border-border resize-none transition-all focus:scale-[1.01]"
                  />
                </div>

                {error && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-center">
                    <p className="text-destructive text-sm">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Submit Request"
                  )}
                </Button>

                <p className="text-xs text-foreground/50 text-center">
                  By submitting this form, you agree to be contacted regarding your request.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
