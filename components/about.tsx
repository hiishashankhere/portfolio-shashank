"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">About Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi — I’m Shashank Singh, a MERN-stack developer from Surat with 1.5+ years of experience.
              I build scalable web apps using React, Node.js, Express, and MongoDB, focusing on clean APIs and smooth, responsive UIs.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I love solving real-world problems — from building solid CRUD features to handling auth and performance optimization.
              I aim for clean, maintainable code and enjoy turning product ideas into polished experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I’m constantly learning and exploring new tools to level up my craft.
              If you’re looking to build something impactful, let’s connect!
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition">
              <h3 className="font-bold text-xl text-white mb-4">Technical Expertise</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Frontend</p>
                  <p className="text-purple-300">React, Next.js, TypeScript, Tailwind CSS, MUI</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Backend</p>
                  <p className="text-pink-300">Node.js, Express, GraphQL, REST APIs</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Databases & ORM's</p>
                  <p className="text-purple-300">PostgreSQL, MongoDB, Firebase, Supabase, Sequelize, Prisma</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">DevOps & AI</p>
                  <p className="text-pink-300">Docker, AWS, GitHub Actions, OpenAI, Gemini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
