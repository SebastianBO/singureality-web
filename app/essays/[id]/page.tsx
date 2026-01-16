'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Essay {
  id: string
  title: string
  content: string
  topic: string
  timeframe: string
  createdAt: string
  readTime: string
}

export default function EssayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [essay, setEssay] = useState<Essay | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchEssay() {
      try {
        const response = await fetch(`/api/essays/${id}`)
        if (response.ok) {
          const data = await response.json()
          setEssay(data)
        } else {
          setError(true)
        }
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchEssay()
  }, [id])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    )
  }

  if (error || !essay) {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h1 className="text-4xl font-serif text-navy-800 mb-6">Essay Not Found</h1>
            <p className="text-gray-600 mb-8">
              This essay may have been removed or the link is incorrect.
            </p>
            <Link href="/essays" className="btn-outline">
              Browse All Essays
            </Link>
          </div>
        </section>
      </div>
    )
  }

  // Simple markdown-ish rendering for paragraphs
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return (
          <h2 key={index} className="text-2xl font-serif text-navy-800 mt-12 mb-6">
            {paragraph.substring(2)}
          </h2>
        )
      }
      if (paragraph.startsWith('## ')) {
        return (
          <h3 key={index} className="text-xl font-serif text-navy-800 mt-10 mb-4">
            {paragraph.substring(3)}
          </h3>
        )
      }
      if (paragraph.startsWith('> ')) {
        return (
          <blockquote
            key={index}
            className="border-l-2 border-violet-500 pl-6 my-8 italic text-gray-600"
          >
            {paragraph.substring(2)}
          </blockquote>
        )
      }
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-6">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-navy-800">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <Link
            href="/essays"
            className="inline-flex items-center text-gray-400 hover:text-white text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Essays
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">
              {essay.topic}
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-xs text-gray-400">{essay.timeframe}</span>
          </div>

          <h1 className="text-white mb-6">{essay.title}</h1>
          <div className="divider mb-8" />

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>{formatDate(essay.createdAt)}</span>
            <span>{essay.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="prose prose-lg max-w-none">
            {renderContent(essay.content)}
          </div>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-gray-600 mb-6">
            What&apos;s your vision of the far future?
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/essays" className="btn-outline">
              Read More Essays
            </Link>
            <Link href="/submit" className="btn-primary">
              Share Your Vision
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
