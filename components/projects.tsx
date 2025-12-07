"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [visible, setVisible] = useState(4)

  const handleVisibleMore = () => {
    setVisible(visible + 4)
  }

  const projects = [
    {
      title: "Darlink",
      description:
        "DarLink AI is a web-based platform that lets you — theoretically — create a custom virtual companion / “AI girlfriend”.",
      technologies: ["Next.js", "sequelize", "tailwindcss", "Node.js", "Mysql"],
      link: "https://darlink.ai/",
      image: "/darlink.png",
    },
    {
      title: "GFF",
      description:
        "Girls First Finance - A comprehensive financial education and investment platform empowering women in personal finance management.",
      technologies: ["Next.js", "Node.js", "Sequelize", "PostgreSQL"],
      link: "https://www.girlsfirstfinance.com/",
      image: "/gff.png",
    },
    {
      title: "Finideas",
      description:
        "AI-powered financial insights and investment recommendation platform using machine learning and advanced analytics.",
      technologies: ["Next.js", "Graphql", "Firebase", "Node.js", "Sequelize"],
      link: "https://backoffice.finideas.com/",
      image: "/finideas.png",
    },
    {
      title: "LeadTree",
      description:
        "Lead management and CRM system with automated workflows, performance analytics, and advanced tracking capabilities.",
      technologies: ["Next.js", "Node.js", "postgressql", "MUI", "Sequelize"],
      link: "https://leadtree.clearanchor.co/",
      image: "/leadtree.png",
    },
    {
      title: "ShopSignal",
      description:
        "ShopSignal is an AI-powered customer inquiry management platform for auto repair shops. It automates call transcription, extracts customer and vehicle information, and provides AI-driven diagnostic insights to help shops prepare before vehicles arrive.",
      technologies: ["Vite", "twilio", "Node.js", "openai", "tailwindcss", "Supabase"],
      link: "https://shopsignal.io/",
      image: "/shopsignal.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">My Works</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Showcase of recent professional projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects?.slice(0, visible).map((project, index) => (
            <div
              key={index}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer animate-fade-in transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background image */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay - visible on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90 transition-all duration-500 ${hoveredProject === index ? "opacity-100" : "opacity-80"
                  }`}
              />

              {/* Content - card frame with white border */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                {/* Top section - title and tech stack visible on hover */}
                <div
                  className={`transition-all duration-500 ${hoveredProject === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                >
                  <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-700/60 text-white rounded-full text-xs font-semibold border border-purple-400/50 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom section - description and button on hover */}
                <div
                  className={`transition-all duration-500 ${hoveredProject === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                  <p className="text-gray-200 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      className="bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-sm rounded-full px-6 py-2 font-semibold flex items-center gap-2 transition-all duration-300"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* White border frame effect */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none group-hover:border-white/40 transition-colors duration-500" />
            </div>
          ))}

        </div>
        <div className="py-8 px-4 border-t border-purple-500/20">
          {projects?.length > visible && (
            <div className="w-full flex flex-col items-center">
              <Button
                onClick={handleVisibleMore}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg font-semibold 
               flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
              >
                View More
              </Button>
            </div>

          )}
        </div>
      </div>
    </section>
  )
}
