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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setSubmitted(false)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9596e7f8-7d7a-43ad-a818-08dab78a7202",
          subject: "New message from Jay's Land Clearing website",
          from_name: "Jay's Land Clearing Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          botcheck: "",
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Estimate</h2>
              <p className="text-white/70 text-lg">
                Ready to clear your land or start your dirt work project? Contact us today for a
                free quote.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                    <p className="text-white/70">{item.value}</p>
                  </div>
                )

                return item.href ? (
                  <a key={item.title} href={item.href} className="block transition hover:scale-[1.02]">
                    {content}
                  </a>
                ) : (
                  <div key={item.title}>{content}</div>
                )
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white p-6 text-black shadow-2xl md:p-8">
            <h3 className="mb-6 text-2xl font-bold">Send Us a Message</h3>

            {submitted && (
              <div className="mb-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                <CheckCircle className="h-5 w-5" />
                <p>Your message has been sent successfully.</p>
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="Land Clearing">Land Clearing</option>
                    <option value="Dirt Work">Dirt Work</option>
                    <option value="Site Prep">Site Prep</option>
                    <option value="Brush Removal">Brush Removal</option>
                    <option value="Grading">Grading</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black hover:bg-yellow-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
