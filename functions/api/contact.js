"use client"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        setError("Failed to send message")
      }
    } catch (err) {
      setError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-2xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Get Your Free Estimate
        </h2>

        {success && (
          <div className="mb-4 p-3 bg-green-500 text-white rounded">
            Message sent successfully!
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-500 text-white rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white text-black"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white text-black"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white text-black"
          >
            <option value="">Select a Service</option>
            <option value="Land Clearing">Land Clearing</option>
            <option value="Dirt Work">Dirt Work</option>
            <option value="Site Prep">Site Prep</option>
            <option value="Brush Removal">Brush Removal</option>
            <option value="Grading">Grading</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-white text-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black p-3 rounded font-bold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  )
}
