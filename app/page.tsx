'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TOPICS } from '@/lib/essays'

interface Essay {
  id: string
  title: string
  excerpt: string
  topic: string
  timeframe: string
  createdAt: string
  readTime: string
}

export default function Home() {
  const [essays, setEssays] = useState<Essay[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchEssays() {
      try {
        const response = await fetch('/api/essays')
        if (response.ok) {
          const data = await response.json()
          setEssays(data)
        }
      } catch (error) {
        console.error('Error fetching essays:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchEssays()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Compact Header */}
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-violet-400 text-sm uppercase tracking-wider mb-2">
                Anonymous Reflections on the Far Future
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-white">
                What Will Humanity Become?
              </h1>
            </div>
            <Link
              href="/submit"
              className="mt-6 md:mt-0 btn-primary inline-block"
            >
              Write an Essay
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Essays Feed - Main Column */}
            <div className="lg:col-span-3">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
                Latest Essays
              </h2>

              {loading ? (
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-24 mb-4" />
                      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
                      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                      <div className="h-4 bg-gray-200 rounded w-2/3" />
                    </div>
                  ))}
                </div>
              ) : essays.length === 0 ? (
                <div className="text-center py-16 border border-dashed border-gray-300 rounded-lg">
                  <p className="text-gray-500 mb-4">No essays yet.</p>
                  <p className="text-gray-400 text-sm mb-6">
                    Be the first to share your vision of humanity&apos;s far future.
                  </p>
                  <Link href="/submit" className="btn-primary">
                    Write the First Essay
                  </Link>
                </div>
              ) : (
                <div className="space-y-12">
                  {essays.map((essay, index) => (
                    <article
                      key={essay.id}
                      className={index !== 0 ? 'pt-12 border-t border-gray-200' : ''}
                    >
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="text-violet-600 font-medium">{essay.topic}</span>
                        <span>·</span>
                        <span>{formatDate(essay.createdAt)}</span>
                        <span>·</span>
                        <span>{essay.readTime}</span>
                      </div>

                      <Link href={`/essays/${essay.id}`} className="group">
                        <h3 className="text-2xl md:text-3xl font-serif text-navy-800 mb-4 group-hover:text-violet-600 transition-colors">
                          {essay.title}
                        </h3>
                      </Link>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {essay.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                          {essay.timeframe}
                        </span>
                        <Link
                          href={`/essays/${essay.id}`}
                          className="text-violet-600 text-sm font-medium hover:text-violet-700 transition-colors"
                        >
                          Read essay →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {essays.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                  <Link href="/essays" className="btn-outline">
                    View All Essays
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Topics */}
              <div className="mb-10">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  Topics
                </h3>
                <div className="space-y-2">
                  {TOPICS.filter(t => t !== 'Other').map((topic) => (
                    <Link
                      key={topic}
                      href={`/essays?topic=${encodeURIComponent(topic)}`}
                      className="block text-gray-600 hover:text-violet-600 text-sm py-1 transition-colors"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>

              {/* About Box */}
              <div className="bg-gray-50 p-6 border border-gray-200">
                <h3 className="font-serif text-navy-800 mb-3">About</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Singureality is an anonymous space to explore humanity&apos;s
                  far future—centuries, millennia, and beyond.
                </p>
                <Link
                  href="/about"
                  className="text-violet-600 text-sm hover:text-violet-700 transition-colors"
                >
                  Learn more →
                </Link>
              </div>

              {/* Write CTA */}
              <div className="mt-6 bg-navy-800 p-6 text-center">
                <p className="text-gray-300 text-sm mb-4">
                  Have a vision to share?
                </p>
                <Link href="/submit" className="btn-primary w-full text-center block">
                  Write an Essay
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
