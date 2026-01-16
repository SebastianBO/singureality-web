import Link from 'next/link'

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="overline mb-4 text-violet-400">Contact</p>
            <h1 className="text-white mb-6">Get in Touch</h1>
            <div className="divider mb-8" />
            <p className="subtitle text-gray-300 leading-relaxed">
              Questions, feedback, or just want to connect with fellow far-future thinkers.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-12">
            {/* Submit Essay */}
            <div className="p-8 bg-gray-50 border border-gray-200">
              <h2 className="text-xl font-serif text-navy-800 mb-4">Want to Share a Vision?</h2>
              <p className="text-gray-600 mb-6">
                The best way to contribute is to submit an essay. Share your thoughts
                on humanity&apos;s far future, anonymously and without any account required.
              </p>
              <Link href="/submit" className="btn-primary">
                Submit an Essay
              </Link>
            </div>

            {/* General Contact */}
            <div className="p-8 border border-gray-200">
              <h2 className="text-xl font-serif text-navy-800 mb-4">General Inquiries</h2>
              <p className="text-gray-600 mb-6">
                For questions about the site, technical issues, or collaboration
                inquiries, reach out via email.
              </p>
              <a
                href="mailto:hello@singularity.blog"
                className="text-violet-600 hover:text-violet-700 transition-colors"
              >
                hello@singularity.blog
              </a>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="text-2xl font-serif text-navy-800 mb-8">Common Questions</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-navy-800 mb-2">
                    Is submission really anonymous?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Yes. We don&apos;t collect any identifying information. No accounts,
                    no IP logging, no tracking. Your ideas stand on their own.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-navy-800 mb-2">
                    Can I edit or delete my essay after submitting?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No. Because submissions are anonymous, there&apos;s no way to verify
                    ownership. Please review your essay carefully before publishing.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-navy-800 mb-2">
                    Are essays moderated?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We review submissions for spam and content that violates our guidelines.
                    Thoughtful speculation, even controversial, is welcome. Hate speech,
                    spam, and off-topic content is not.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-navy-800 mb-2">
                    Can I use my essay elsewhere?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Yes. You retain rights to your ideas. We simply have permission to
                    display your essay on Singureality.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-navy-800 mb-2">
                    How far into the future should I think?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The further the better. We&apos;re most interested in visions that
                    go beyond what current technology makes obvious&mdash;centuries,
                    millennia, or even the end of time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
