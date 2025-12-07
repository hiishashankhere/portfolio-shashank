interface SkillsProps {
  skills: string[]
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="py-20 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 mt-4">Technologies I work with</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 hover:border-purple-500/60 hover:bg-purple-500/20 transition text-purple-300 font-medium text-sm md:text-base"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
