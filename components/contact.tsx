"use client"

import { useState } from "react"

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
    address: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://jayswebdesignservices.app.n8n.cloud/webhook/4963c5da-1739-4b50-8971-1c4f9f0b513e", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          service: formData.service,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send form")
      }

      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        message: "",
      })
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 uppercase">
              Get Your <span className="text-primary">Free Quote</span>
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Professional land clearing & dirt work services in Texas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-background border border-border rounded-lg p-6 md:p-8">

              {submitted ? (
                <div className="text-center py-8">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>We’ll get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-primary underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (

                <form onSubmit={handleSubmit} className="space-y-4">

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black"
                  />

                  <input
                    type="text"
                    name="address"
                    placeholder="Property Address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black"
                  />

                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black"
                  >
                    <option value="">Select a Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <textarea
                    name="message"
                    placeholder="Project Details"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 text-black p-3 rounded font-bold"
                  >
                    {isSubmitting ? "Sending..." : "Get Free Quote"}
                  </button>

                </form>

              )}
            </div>

            <div className="space-y-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p>(210) 891-4174</p>
                <p>jayslandclearingservices@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
