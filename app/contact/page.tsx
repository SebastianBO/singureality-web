'use client'

import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="overline mb-4 text-violet-400">Contact</p>
            <h1 className="text-white mb-6">Get in Touch</h1>
            <div className="divider mb-8" />
            <p className="subtitle text-gray-300 leading-relaxed">
              We are always interested in meeting visionary founders working on
              transformative technologies in our areas of focus.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="overline mb-4">What We Look For</p>
              <h2 className="text-navy-800 mb-6">Founders Building the Future</h2>
              <div className="divider mb-8" />
              <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
                <p>
                  We partner with founders working on breakthrough technologies
                  in artificial intelligence, quantum computing, and deep tech.
                  We are drawn to teams with deep technical expertise and ambitious visions.
                </p>
                <p>
                  If you are building something that could reshape how we compute,
                  understand, or interact with the world, we would like to hear from you.
                </p>
              </div>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center border border-violet-500 flex-shrink-0">
                    <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-serif text-navy-800 mb-2">Location</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      San Francisco, California
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center border border-violet-500 flex-shrink-0">
                    <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-serif text-navy-800 mb-2">Email</h3>
                    <a href="mailto:contact@singularity.vc" className="text-violet-600 hover:text-violet-700 transition-colors">
                      contact@singularity.vc
                    </a>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-12 p-6 bg-navy-50 border-l-2 border-violet-500">
                <h3 className="text-lg font-serif text-navy-800 mb-3">A Note</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We receive many inquiries and prioritize founders working on
                  technologies within our focus areas. Due to volume, we may not
                  be able to respond to every message, but we read them all.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 md:p-10 border border-gray-200">
              <h3 className="text-xl font-serif text-navy-800 mb-2">Send a Message</h3>
              <p className="text-gray-500 text-sm mb-6">
                Tell us about what you are building and how it relates to our
                areas of focus.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
