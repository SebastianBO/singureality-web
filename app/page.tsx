import Hero from '@/components/Hero'
import Link from 'next/link'

export default function Home() {
  const featuredEssays = [
    {
      id: 1,
      title: 'The Last Human Memory',
      excerpt: 'In the year 50,000 CE, the concept of individual consciousness has become an anachronism. What remains is something far stranger and more beautiful...',
      topic: 'Digital Consciousness',
      readTime: '12 min',
      date: 'Jan 2026',
    },
    {
      id: 2,
      title: 'When Stars Are Gardens',
      excerpt: 'The Dyson swarms around Proxima Centauri pulse with the thoughts of a trillion minds. But the question that haunts them is ancient: what is the purpose of existence?',
      topic: 'Cosmic Civilization',
      readTime: '8 min',
      date: 'Jan 2026',
    },
    {
      id: 3,
      title: 'The End of Loneliness',
      excerpt: 'Once humanity learned to share consciousness directly, the walls between minds dissolved. What emerged was neither utopia nor dystopia, but something we have no word for.',
      topic: 'Social Evolution',
      readTime: '15 min',
      date: 'Dec 2025',
    },
  ]

  const topics = [
    {
      name: 'Posthuman Futures',
      description: 'What becomes of humanity when biology is optional?',
      count: 24,
    },
    {
      name: 'Cosmic Civilization',
      description: 'Humanity among the stars, across galaxies and beyond',
      count: 18,
    },
    {
      name: 'Digital Consciousness',
      description: 'Minds uploaded, merged, and transformed',
      count: 31,
    },
    {
      name: 'Social Evolution',
      description: 'How societies, relationships, and culture might change',
      count: 22,
    },
    {
      name: 'The Deep Future',
      description: 'Billions of years hence, at the edge of time',
      count: 15,
    },
    {
      name: 'First Contact',
      description: 'When we meet minds unlike our own',
      count: 19,
    },
  ]

  return (
    <>
      <Hero />

      {/* Introduction */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="overline mb-4">Welcome</p>
          <h2 className="text-navy-800 mb-6">
            A Space for Long-Term Thinking
          </h2>
          <div className="divider mx-auto mb-8" />
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Most of human thought is trapped in the present moment. We worry about
            tomorrow, plan for next year, occasionally imagine a decade ahead.
            But humanity&apos;s story stretches into incomprehensible spans of time.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Singularity is an anonymous space to explore that vast future. What happens
            when we spread to the stars? When death becomes optional? When artificial
            minds surpass our own? When the last star burns out? Share your visions,
            read others, and contemplate the strange and beautiful futures that await.
          </p>
        </div>
      </section>

      {/* Featured Essays */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="overline mb-4">Featured</p>
            <h2 className="text-navy-800 mb-6">Recent Visions</h2>
            <div className="divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEssays.map((essay) => (
              <Link
                key={essay.id}
                href={`/essays/${essay.id}`}
                className="bg-white p-8 border border-gray-200 hover:border-violet-500/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-violet-500 uppercase tracking-wider">
                    {essay.topic}
                  </span>
                  <span className="text-xs text-gray-400">{essay.readTime}</span>
                </div>
                <h3 className="text-xl font-serif text-navy-800 mb-4 group-hover:text-violet-600 transition-colors">
                  {essay.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {essay.excerpt}
                </p>
                <div className="text-xs text-gray-400">{essay.date}</div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/essays" className="btn-outline">
              View All Essays
            </Link>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="overline mb-4">Explore</p>
            <h2 className="text-navy-800 mb-6">Topics</h2>
            <div className="divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Link
                key={index}
                href={`/essays?topic=${encodeURIComponent(topic.name)}`}
                className="p-6 border border-gray-200 hover:border-violet-500/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-serif text-navy-800 group-hover:text-violet-600 transition-colors">
                    {topic.name}
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    {topic.count}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Write */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80&fm=jpg)',
          }}
        />
        <div className="absolute inset-0 bg-navy-900/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-4 text-violet-400">Contribute</p>
            <h2 className="text-white mb-6">
              Share Your Vision of Tomorrow
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="subtitle text-gray-300 mb-10 leading-relaxed">
              What do you see when you look ten thousand years into the future?
              A million? What becomes of love, of art, of meaning? Your vision
              matters. Share it anonymously with the world.
            </p>
            <div className="flex justify-center">
              <Link href="/submit" className="btn-primary">
                Submit an Essay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="overline mb-4">Guidelines</p>
            <h2 className="text-navy-800 mb-6">What Belongs Here</h2>
            <div className="divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-lg font-serif text-navy-800 mb-4">Think Far</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We&apos;re interested in the deep future. Not next year or next
                decade, but centuries, millennia, and eons from now. The further
                you look, the more interesting it becomes.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-lg font-serif text-navy-800 mb-4">Be Thoughtful</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This isn&apos;t about predicting the future. It&apos;s about
                exploring possibilities thoughtfully. Consider consequences,
                second-order effects, and the strangeness of deep time.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-lg font-serif text-navy-800 mb-4">Stay Anonymous</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ideas should stand on their own. We don&apos;t collect identifying
                information. Your visions are what matter, not your credentials.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-lg font-serif text-navy-800 mb-4">Be Bold</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Don&apos;t be afraid to imagine radically. The future will be
                strange beyond our ability to imagine. Let your speculation run wild.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
