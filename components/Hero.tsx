'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Deep Space */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80&fm=jpg)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy-900/80" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative z-10 section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Overline */}
          <p className="overline mb-6 text-violet-400">
            Anonymous Reflections on the Far Future
          </p>

          {/* Main Heading */}
          <h1 className="hero-text text-white mb-8">
            What Will Humanity<br />Become?
          </h1>

          {/* Divider */}
          <div className="divider mx-auto mb-8" />

          {/* Subtitle */}
          <p className="subtitle text-gray-300 max-w-2xl mx-auto mb-12">
            A collective journal of speculative thought. Share your visions of
            humanity&apos;s future&mdash;ten thousand years from now, a million,
            or beyond the heat death of the universe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/essays" className="btn-outline">
              Read Essays
            </Link>
            <Link href="/submit" className="btn-primary">
              Share Your Vision
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
