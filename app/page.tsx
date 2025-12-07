"use client"
import Navigation from "@/components/navigation"
import ParticleBackground from "@/components/particle-background"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Stats />
        <About />
        <Skills
          skills={[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "Tailwind CSS",
            "MUI",
            "GraphQL",
            "AWS",
            "Docker",
            "GitHub Actions",
            "Firebase",
            "Supabase",
            "OpenAI",
            "Gemini",
            "Git",
            "REST APIs",
            "Socket.io",
            "Seqelize",
            "Prisma",
          ]}
        />
        <Projects />
        <GetInTouch />
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}

function Stats() {
  const stats = [
    { number: "1.5+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  return (
    <section className="py-16 px-4 border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GetInTouch() {
  return (
    <section id="get-in-touch" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always open to new projects and opportunities. Whether you have a question or just want to say hello, feel
          free to reach out!
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition transform hover:scale-105 active:scale-95"
          >
            Send Me an Email
          </button>
          <a
            href="https://www.linkedin.com/in/hiishashankhere"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-full transition transform hover:scale-105 active:scale-95"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
