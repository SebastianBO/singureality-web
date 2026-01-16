'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Futuristic/Abstract */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80&fm=jpg)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy-900/85" />

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
            Technology Investment for the Future
          </p>

          {/* Main Heading */}
          <h1 className="hero-text text-white mb-8">
            Investing at the Edge<br />of Intelligence
          </h1>

          {/* Divider */}
          <div className="divider mx-auto mb-8" />

          {/* Subtitle */}
          <p className="subtitle text-gray-300 max-w-2xl mx-auto mb-12">
            Singularity is a private technology investment firm focused on artificial
            intelligence, quantum computing, and the transformative technologies
            defining the next era of human progress.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link href="/about" className="btn-outline">
              Explore Our Vision
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-violet-500/50 to-violet-500" />
        </div>
      </div>
    </section>
  )
}
