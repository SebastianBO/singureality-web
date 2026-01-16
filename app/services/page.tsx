'use client'

import Link from 'next/link'

export default function Services() {
  const focusAreas = [
    {
      number: '01',
      title: 'Artificial Intelligence',
      description: 'We invest in foundational AI research, applied intelligence systems, and the infrastructure powering the next generation of machine learning.',
      details: [
        'Foundation models and large language models',
        'AGI research and safety',
        'AI infrastructure and compute',
        'Autonomous systems and robotics',
        'Human-AI collaboration tools',
        'AI alignment and interpretability',
      ],
    },
    {
      number: '02',
      title: 'Quantum Computing',
      description: 'From quantum hardware to algorithms and applications, we back companies building the future of computation.',
      details: [
        'Quantum processors and hardware',
        'Error correction and fault tolerance',
        'Quantum algorithms and software',
        'Quantum sensing and metrology',
        'Hybrid quantum-classical systems',
        'Quantum networking and communication',
      ],
    },
    {
      number: '03',
      title: 'Biotechnology & Life Sciences',
      description: 'We invest at the intersection of computation and biology, where the tools of AI and engineering are transforming life sciences.',
      details: [
        'Synthetic biology and bioengineering',
        'Computational drug discovery',
        'Protein engineering and design',
        'Genomics and precision medicine',
        'Biomanufacturing and industrial biotech',
        'Longevity and aging research',
      ],
    },
    {
      number: '04',
      title: 'Deep Tech & Emerging Technologies',
      description: 'We are drawn to fundamental technologies with long development horizons and transformative potential.',
      details: [
        'Neuromorphic and novel computing',
        'Brain-computer interfaces',
        'Advanced materials and nanotechnology',
        'Space technology and infrastructure',
        'Energy storage and generation',
        'Climate and sustainability tech',
      ],
    },
  ]

  const approach = [
    {
      step: '01',
      title: 'Research',
      description: 'We spend significant time understanding technologies before we invest. Deep domain knowledge allows us to identify exceptional opportunities.',
    },
    {
      step: '02',
      title: 'Conviction',
      description: 'When we invest, we do so with conviction. We make concentrated bets in technologies and founders we believe in deeply.',
    },
    {
      step: '03',
      title: 'Partnership',
      description: 'We aim to be valuable partners, providing technical expertise, strategic guidance, and access to our network.',
    },
    {
      step: '04',
      title: 'Patience',
      description: 'Breakthrough technologies take time. We invest with decade-scale horizons and do not optimize for quick exits.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="overline mb-4 text-violet-400">Focus Areas</p>
            <h1 className="text-white mb-6">What We Invest In</h1>
            <div className="divider mb-8" />
            <p className="subtitle text-gray-300 leading-relaxed">
              We focus on technologies at the frontier of human knowledge,
              with the potential to fundamentally reshape computation,
              intelligence, and human capability.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas Detail */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-20">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20 border-b border-gray-200 last:border-0 last:pb-0"
              >
                <div className="lg:col-span-4">
                  <span className="text-5xl font-serif text-violet-500 mb-4 block">
                    {area.number}
                  </span>
                  <h2 className="text-2xl font-serif text-navy-800 mb-4">{area.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {area.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start p-4 bg-gray-50">
                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="overline mb-4">Our Approach</p>
            <h2 className="text-navy-800 mb-6">How We Invest</h2>
            <div className="divider mx-auto mb-6" />
            <p className="subtitle text-gray-600 max-w-2xl mx-auto">
              Patient capital, deep conviction, and genuine partnership with
              the founders and teams building the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-violet-500">
                    <span className="text-xl font-serif text-violet-500">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-serif text-navy-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-violet-200 transform -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="bg-navy-800 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-4 text-violet-400">A Note</p>
            <h2 className="text-white mb-6">We Invest in the Future</h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-gray-300 leading-relaxed">
              We are not looking for incremental improvements. We seek founders
              building technologies that will seem obvious in hindsight but feel
              audacious today. If that describes what you are working on, we
              would like to hear from you.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
