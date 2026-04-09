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
          address: formData.address,
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
          address: "",
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
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Get Your Free Quote
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input name="name" required placeholder="Full Name"
              value={formData.name} onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black" />

            <input name="email" required placeholder="Email"
              value={formData.email} onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black" />

            <input name="phone" required placeholder="Phone"
              value={formData.phone} onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black" />

            <input name="address" required placeholder="Address"
              value={formData.address} onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black" />

            <select name="service" required
              value={formData.service} onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black">
              <option value="">Select Service</option>
              {services.map((s) => <option key={s}>{s}</option>)}
            </select>

            <textarea name="message" placeholder="Project Details"
              value={formData.message} onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black" />

            <button type="submit" disabled={isSubmitting}
              className="w-full bg-yellow-400 text-black p-3 rounded font-bold">
              {isSubmitting ? "Sending..." : "Get Free Quote"}
            </button>

          </form>

          {submitted && (
            <div className="mt-4 p-3 bg-green-500 text-white rounded text-center">
              Message sent successfully!
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
