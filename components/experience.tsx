export default function Experience() {
  const experiences = [
    {
      role: "Fullstack Developer",
      company: "Tech Startup",
      period: "2022 - Present",
      description: "Building scalable web applications and APIs for a growing tech company",
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2021 - 2022",
      description: "Developed responsive websites and web applications for various clients",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-slate-300 pl-8">
              <p className="text-sm text-slate-500 mb-1">{exp.period}</p>
              <h3 className="text-2xl font-bold text-slate-950 mb-1">{exp.role}</h3>
              <p className="text-lg text-slate-600 mb-3">{exp.company}</p>
              <p className="text-slate-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
