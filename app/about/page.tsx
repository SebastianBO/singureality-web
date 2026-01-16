import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="overline mb-4 text-violet-400">About</p>
            <h1 className="text-white mb-6">Why Singureality Exists</h1>
            <div className="divider mb-8" />
            <p className="subtitle text-gray-300 leading-relaxed">
              A space for contemplating the vast future that awaits humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="text-lg">
              Most of what we think about is trapped in the present. The news cycle,
              the next quarter, maybe the next election. Even &quot;long-term thinking&quot;
              usually means a decade or two at most.
            </p>

            <p>
              But humanity&apos;s story doesn&apos;t end there. If we survive the next
              few centuries, our descendants may spread across the galaxy. They may
              merge with machines. They may transcend biology entirely. The universe
              is 13.8 billion years old, and it will continue for trillions more. What
              happens in that incomprehensible span of time?
            </p>

            <p>
              Singureality is a place to think about that. Not to predict&mdash;prediction
              is impossible at these scales&mdash;but to imagine. To explore the possibility
              space. To consider what it might mean to be human, or post-human, or something
              else entirely, across millennia and eons.
            </p>

            <div className="border-l-2 border-violet-500 pl-6 py-2 my-12">
              <p className="text-xl font-serif text-navy-800 italic">
                &quot;The far future is the most important thing there is. Almost all
                people who will ever exist will live in the future.&quot;
              </p>
            </div>

            <h2 className="text-2xl font-serif text-navy-800 mt-16 mb-6">
              Why Anonymous?
            </h2>

            <p>
              Ideas should stand on their own. We don&apos;t want credentials, followers,
              or reputations influencing how ideas are received. A teenager&apos;s vision
              of the deep future is as valid as a professor&apos;s.
            </p>

            <p>
              Anonymity also creates freedom. When you&apos;re not attached to your name,
              you can think more boldly. You can explore ideas that might seem strange or
              naive. Some of the best speculative thinking comes from that freedom.
            </p>

            <h2 className="text-2xl font-serif text-navy-800 mt-16 mb-6">
              What We&apos;re Looking For
            </h2>

            <p>
              We want thoughtful speculation about the far future. Not predictions, but
              explorations. Not optimism or pessimism, but honest imagination about what
              might be.
            </p>

            <ul className="list-none space-y-4 my-8">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                <span>
                  <strong className="text-navy-800">Think far:</strong> Centuries at minimum.
                  Millennia, millions of years, or the end of time are even better.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                <span>
                  <strong className="text-navy-800">Think deep:</strong> Consider second-order
                  effects, unintended consequences, and the strangeness of deep time.
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                <span>
                  <strong className="text-navy-800">Think bold:</strong> Don&apos;t be afraid
                  to imagine radically different futures. The future will be strange.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-serif text-navy-800 mt-16 mb-6">
              Topics We Explore
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 border border-gray-200">
                <h3 className="font-serif text-navy-800 mb-2">Posthuman Futures</h3>
                <p className="text-sm">What becomes of humanity when biology is optional?</p>
              </div>
              <div className="p-6 border border-gray-200">
                <h3 className="font-serif text-navy-800 mb-2">Cosmic Civilization</h3>
                <p className="text-sm">Humanity among the stars, across galaxies and beyond.</p>
              </div>
              <div className="p-6 border border-gray-200">
                <h3 className="font-serif text-navy-800 mb-2">Digital Consciousness</h3>
                <p className="text-sm">Minds uploaded, merged, transformed, or created anew.</p>
              </div>
              <div className="p-6 border border-gray-200">
                <h3 className="font-serif text-navy-800 mb-2">Social Evolution</h3>
                <p className="text-sm">How societies, relationships, and meaning might change.</p>
              </div>
              <div className="p-6 border border-gray-200">
                <h3 className="font-serif text-navy-800 mb-2">The Deep Future</h3>
                <p className="text-sm">Billions of years hence, at the edge of time itself.</p>
              </div>
              <div className="p-6 border border-gray-200">
                <h3 className="font-serif text-navy-800 mb-2">First Contact</h3>
                <p className="text-sm">When we meet minds unlike anything we&apos;ve imagined.</p>
              </div>
            </div>

            <p className="mt-12">
              If you&apos;ve thought about these questions&mdash;if you&apos;ve imagined
              what humanity might become&mdash;we want to hear from you.
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link href="/submit" className="btn-primary">
              Share Your Vision
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
