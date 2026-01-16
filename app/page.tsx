import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CTA from '@/components/CTA'
import Link from 'next/link'

export default function Home() {
  const principles = [
    {
      title: 'Vision',
      description: 'We invest in technologies that will define the next century, not just the next decade.',
    },
    {
      title: 'Conviction',
      description: 'We back founders with audacious ideas and provide patient capital through their journey.',
    },
    {
      title: 'Partnership',
      description: 'We work alongside founders as true partners, offering expertise and resources.',
    },
  ]

  const qualities = [
    { title: 'Private', description: 'Principal investing, not a fund' },
    { title: 'Long-term', description: 'Decade-scale thinking' },
    { title: 'Technical', description: 'Deep technology focus' },
    { title: 'Global', description: 'Worldwide investment scope' },
  ]

  return (
    <>
      <Hero />

      {/* Introduction Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline mb-4">About Singularity</p>
              <h2 className="text-navy-800 mb-6">
                Investing in Transformative Intelligence
              </h2>
              <div className="divider mb-8" />
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Singularity is a private technology investment firm focused on the
                  technologies that will define the coming era of human progress.
                  We invest with conviction in artificial intelligence, quantum computing,
                  and breakthrough deep tech.
                </p>
                <p>
                  We are not a traditional fund. We deploy principal capital with a
                  long-term horizon, partnering with visionary founders building
                  the infrastructure of tomorrow.
                </p>
              </div>
              <Link href="/about" className="btn-outline inline-block mt-8">
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div key={index} className="text-center p-6 border border-gray-200">
                  <div className="text-xl md:text-2xl font-serif text-navy-800 mb-2">
                    {quality.title}
                  </div>
                  <div className="text-sm text-gray-500 tracking-wide leading-relaxed">
                    {quality.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="overline mb-4">Our Philosophy</p>
            <h2 className="text-navy-800 mb-6">How We Think</h2>
            <div className="divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-violet-500">
                  <span className="text-2xl font-serif text-violet-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-navy-800 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* Technology Focus Section */}
      <section className="bg-navy-800 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-4 text-violet-400">Our Perspective</p>
            <h2 className="text-white mb-6">
              At the Frontier of Progress
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-gray-300 leading-relaxed mb-8">
              We believe we are at an inflection point in human history. The convergence
              of artificial intelligence, quantum computing, and biotechnology will
              reshape every aspect of our world. We invest in the companies building this future.
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-gray-400">
              <span>Artificial Intelligence</span>
              <span className="text-violet-500">|</span>
              <span>Quantum Computing</span>
              <span className="text-violet-500">|</span>
              <span>Biotechnology</span>
              <span className="text-violet-500">|</span>
              <span>Deep Tech</span>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
