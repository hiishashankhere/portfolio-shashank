"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Loader2, CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("Failed to send message. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        {/* Top Heading + Description */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent block mx-auto">
              Get in Touch
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-xl mx-auto font-semibold">
            Have a project in mind? Let's talk about how I can help bring your ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-black/40 p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-3 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 12.75 2.25 6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25" />
                </svg>
                Email
              </h3>
              <p className="text-gray-300">hishashankthisside@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="bg-black/40 p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-3 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.09l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.39 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.39-1.21l1.293-.97c.37-.28.533-.753.417-1.173L6.0 3.102A1.125 1.125 0 004.91 2.25H3.75A1.125 1.125 0 002.25 3.375v3.375z" />
                </svg>
                Phone
              </h3>
              <p className="text-gray-300">+91 88663 35179</p>
            </div>

            {/* Location */}
            <div className="bg-black/40 p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-3 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Location
              </h3>
              <p className="text-gray-300">Surat, Gujarat</p>
            </div>

          </div>

          {/* RIGHT: Contact Form (60%) */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-purple-500/30 bg-slate-900 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-purple-500/30 bg-slate-900 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-purple-500/30 bg-slate-900 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-purple-500/30 bg-slate-900 rounded-lg focus:ring-2 focus:ring-purple-500 text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
