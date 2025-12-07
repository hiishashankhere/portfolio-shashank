"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <p className="text-lg text-purple-400 mb-3 font-semibold">Hi, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Shashank
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-light mb-6">Fullstack Web Developer</p>
            </div>
            <p
              className="text-lg text-gray-400 leading-relaxed max-w-xl animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Full Stack Web Developer | MERN & PERN Stack Specialist | Backend, API & Database ORM Expert | Building Scalable, Secure & High-Performance Web Applications
            </p>
            <div className="flex gap-4 pt-6 flex-wrap animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg font-semibold flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-lg font-semibold flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
              >
                View My Work
              </Button>
              <a href="/Shashank_singh.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg rounded-lg font-semibold flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full p-1 animate-pulse">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/shashanks.jpg"
                    alt="Shashank"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
