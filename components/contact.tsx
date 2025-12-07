"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-purple-500/20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Let's{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-gray-400 mb-8 text-lg">Feel free to reach out for collaborations or just a friendly hello</p>

        <div className="flex gap-6 justify-center mb-12">
          <a
            href="mailto:your.email@example.com"
            className="p-4 rounded-lg border border-purple-500/20 bg-slate-900/50 hover:border-purple-500/50 transition group"
          >
            <Mail className="w-6 h-6 text-purple-400 group-hover:scale-110 transition" />
          </a>
          <a
            href="https://linkedin.com/in/hiishashankhere"
            target="_blank"
            className="p-4 rounded-lg border border-purple-500/20 bg-slate-900/50 hover:border-purple-500/50 transition group"
            rel="noreferrer"
          >
            <Linkedin className="w-6 h-6 text-purple-400 group-hover:scale-110 transition" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="p-4 rounded-lg border border-purple-500/20 bg-slate-900/50 hover:border-purple-500/50 transition group"
            rel="noreferrer"
          >
            <Github className="w-6 h-6 text-purple-400 group-hover:scale-110 transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="p-4 rounded-lg border border-purple-500/20 bg-slate-900/50 hover:border-purple-500/50 transition group"
            rel="noreferrer"
          >
            <Twitter className="w-6 h-6 text-purple-400 group-hover:scale-110 transition" />
          </a>
        </div>

        <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-6 text-lg">Send Me an Email</Button>
      </div>
    </section>
  )
}
