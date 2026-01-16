'use client'

export default function Services() {
  const focusAreas = [
    {
      title: 'Artificial Intelligence',
      description: 'From foundational models to AGI research, we invest in the technologies pushing the boundaries of machine intelligence.',
      features: [
        'Foundation models and LLMs',
        'AI safety and alignment',
        'Autonomous systems',
        'Machine learning infrastructure',
      ],
    },
    {
      title: 'Quantum Computing',
      description: 'Supporting the development of quantum hardware, software, and applications that will revolutionize computation.',
      features: [
        'Quantum processors',
        'Error correction',
        'Quantum algorithms',
        'Hybrid quantum-classical systems',
      ],
    },
    {
      title: 'Deep Tech',
      description: 'Backing breakthrough technologies in biotechnology, advanced materials, and novel computing architectures.',
      features: [
        'Synthetic biology',
        'Advanced materials',
        'Neuromorphic computing',
        'Brain-computer interfaces',
      ],
    },
  ]

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <p className="overline mb-4">Focus Areas</p>
          <h2 className="text-navy-800 mb-6">What We Invest In</h2>
          <div className="divider mx-auto mb-6" />
          <p className="subtitle text-gray-600 max-w-2xl mx-auto">
            Technologies with the potential to fundamentally transform how we compute, create, and understand the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="card-elegant group"
            >
              <div className="mb-6">
                <span className="text-violet-500 text-4xl font-serif">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-serif text-navy-800 mb-4">{area.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
              <ul className="space-y-3">
                {area.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
