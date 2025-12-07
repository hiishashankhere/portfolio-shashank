"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition"
        >
          Shashank
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-purple-400 hover:text-purple-300">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div
          className={`${isOpen ? "flex" : "hidden"} md:flex absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto flex-col md:flex-row gap-8 bg-slate-950/90 md:bg-transparent p-4 md:p-0 border-b md:border-none border-purple-500/20`}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-300 hover:text-purple-400 transition font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-300 hover:text-purple-400 transition font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-300 hover:text-purple-400 transition font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-purple-400 transition font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}
