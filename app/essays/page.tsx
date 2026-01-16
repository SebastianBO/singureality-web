'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
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

function EssaysContent() {
  const searchParams = useSearchParams()
  const topicFilter = searchParams.get('topic')

  const [essays, setEssays] = useState<Essay[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTopic, setSelectedTopic] = useState<string>(topicFilter || '')

  useEffect(() => {
    async function fetchEssays() {
      try {
        const url = selectedTopic
          ? `/api/essays?topic=${encodeURIComponent(selectedTopic)}`
          : '/api/essays'
        const response = await fetch(url)
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
  }, [selectedTopic])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <>
      {/* Topic Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedTopic('')}
            className={`px-4 py-2 text-sm transition-colors ${
              selectedTopic === ''
                ? 'bg-violet-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Topics
          </button>
          {TOPICS.filter(t => t !== 'Other').map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-2 text-sm transition-colors ${
                selectedTopic === topic
                  ? 'bg-violet-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Essays Grid */}
      {loading ? (
        <div className="text-center py-16">
          <div className="animate-pulse text-gray-400">Loading essays...</div>
        </div>
      ) : essays.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-6">
            {selectedTopic
              ? `No essays found for "${selectedTopic}"`
              : 'No essays yet. Be the first to share your vision.'}
          </p>
          <Link href="/submit" className="btn-primary">
            Submit an Essay
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {essays.map((essay) => (
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
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{formatDate(essay.createdAt)}</span>
                <span>{essay.timeframe}</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 text-center">
        <div className="inline-block p-8 bg-gray-50 border border-gray-200">
          <p className="text-gray-600 mb-4">Have a vision to share?</p>
          <Link href="/submit" className="btn-outline">
            Submit an Essay
          </Link>
        </div>
      </div>
    </>
  )
}

export default function Essays() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-navy-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="overline mb-4 text-violet-400">Archive</p>
            <h1 className="text-white mb-6">Essays</h1>
            <div className="divider mb-8" />
            <p className="subtitle text-gray-300 leading-relaxed">
              Visions of humanity&apos;s far future, submitted anonymously by
              thinkers contemplating what we might become.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Essays */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Suspense fallback={<div className="text-center py-16 text-gray-400">Loading...</div>}>
            <EssaysContent />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
