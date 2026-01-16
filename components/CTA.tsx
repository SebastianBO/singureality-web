'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&fm=jpg)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy-900/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="overline mb-4 text-violet-400">Partner With Us</p>
          <h2 className="text-white mb-6">
            Building the Future Together
          </h2>
          <div className="divider mx-auto mb-8" />
          <p className="subtitle text-gray-300 mb-10 leading-relaxed">
            We partner with visionary founders and researchers working on
            transformative technologies. If you are building something that
            could reshape the future, we want to hear from you.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
