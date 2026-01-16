'use client'

import Link from 'next/link'

export default function About() {
  const values = [
    {
      title: 'Technical Depth',
      description: 'We invest based on deep technical understanding. Our team includes researchers, engineers, and operators who can evaluate breakthrough technologies.',
    },
    {
      title: 'Patient Capital',
      description: 'Transformative technologies take time. We provide capital with decade-scale horizons, giving founders the runway to pursue ambitious goals.',
    },
    {
      title: 'Active Partnership',
      description: 'We work alongside our portfolio companies, providing technical expertise, strategic guidance, and access to our network.',
    },
    {
      title: 'Global Perspective',
      description: 'Innovation knows no borders. We invest globally, seeking the best founders regardless of geography.',
    },
  ]

  const interests = [
    {
      area: 'Artificial Intelligence',
      description: 'From foundational models to AGI safety research, we invest in the technologies pushing the boundaries of machine intelligence and human-AI collaboration.',
    },
    {
      area: 'Quantum Computing',
      description: 'Hardware, software, and applications that will unlock computational capabilities beyond classical limits.',
    },
    {
      area: 'Biotechnology',
      description: 'Synthetic biology, computational biology, and technologies at the intersection of information and life sciences.',
    },
    {
      area: 'Deep Tech',
      description: 'Advanced materials, neuromorphic computing, brain-computer interfaces, and other fundamental technologies with transformative potential.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="overline mb-4 text-violet-400">About Us</p>
            <h1 className="text-white mb-6">Investing at the Frontier</h1>
            <div className="divider mb-8" />
            <p className="subtitle text-gray-300 leading-relaxed">
              Singularity is a private technology investment firm focused on the
              technologies that will define the next era of human progress.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline mb-4">Who We Are</p>
              <h2 className="text-navy-800 mb-6">A Different Kind of Investor</h2>
              <div className="divider mb-8" />
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Singularity was founded on a simple thesis: the most important
                  technologies of the coming decades will emerge from the convergence
                  of AI, quantum computing, and biology. These technologies require
                  a different kind of investor.
                </p>
                <p>
                  We are not a traditional venture fund. We invest principal capital
                  with no fixed timelines, allowing us to be truly patient partners.
                  Our team includes researchers, engineers, and operators who can
                  evaluate and support breakthrough technologies.
                </p>
                <p>
                  We seek out founders working on hard problems with transformative
                  potential. We prefer substance over hype, and we measure success
                  in impact, not just returns.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-10 border-l-2 border-violet-500">
              <blockquote className="font-serif text-xl text-navy-800 italic leading-relaxed">
                &ldquo;The best time to invest in transformative technology is before
                it is obvious. We look for founders who see what others cannot.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="overline mb-4">Our Values</p>
            <h2 className="text-navy-800 mb-6">What Guides Us</h2>
            <div className="divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 md:p-10 border border-gray-200"
              >
                <div className="flex items-start">
                  <span className="text-violet-500 text-2xl font-serif mr-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-xl font-serif text-navy-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="overline mb-4">Focus Areas</p>
            <h2 className="text-navy-800 mb-6">What Interests Us</h2>
            <div className="divider mx-auto mb-6" />
            <p className="subtitle text-gray-600 max-w-2xl mx-auto">
              Technologies with the potential to fundamentally reshape computation,
              intelligence, and human capability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="p-8 border border-gray-200 group hover:border-violet-500/30 transition-colors duration-300"
              >
                <h3 className="text-xl font-serif text-navy-800 mb-4">{interest.area}</h3>
                <p className="text-gray-600 leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-navy-800 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-4 text-violet-400">Our Approach</p>
            <h2 className="text-white mb-6">Long-Term Thinking, Deep Conviction</h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-gray-300 leading-relaxed">
              We do not chase trends or optimize for the next funding round.
              We invest in technologies and founders we believe in deeply, and
              we stay committed through the long journey of bringing breakthrough
              technology to the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
