interface Service {
  title: string
  description: string
  icon: string
}

interface ServicesProps {
  services: Service[]
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400">Delivering high-quality solutions tailored to your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-purple-500/20 bg-slate-900/50 hover:border-purple-500/50 transition group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
