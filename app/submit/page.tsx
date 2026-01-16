'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { TOPICS, TIMEFRAMES } from '@/lib/essays'

interface FormData {
  title: string
  topic: string
  timeframe: string
  content: string
}

export default function Submit() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  const content = watch('content', '')
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/essays', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const essay = await response.json()
        router.push(`/essays/${essay.id}`)
      } else {
        const errorData = await response.json()
        setSubmitError(errorData.error || 'Failed to submit essay')
      }
    } catch (error) {
      setSubmitError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClassName =
    'w-full px-4 py-3 bg-white border border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-colors text-gray-900 text-sm'

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-navy-800">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="overline mb-4 text-violet-400">Contribute</p>
            <h1 className="text-white mb-6">Share Your Vision</h1>
            <div className="divider mb-8" />
            <p className="subtitle text-gray-300 leading-relaxed">
              Describe your vision of humanity&apos;s far future. Your submission
              is anonymous&mdash;no account required, no identifying information collected.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title <span className="text-violet-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                {...register('title', {
                  required: 'Title is required',
                  minLength: { value: 3, message: 'Title must be at least 3 characters' },
                  maxLength: { value: 200, message: 'Title must be less than 200 characters' },
                })}
                className={inputClassName}
                placeholder="The title of your vision..."
              />
              {errors.title && (
                <p className="mt-2 text-sm text-red-600">{errors.title.message}</p>
              )}
            </div>

            {/* Topic & Timeframe */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                  Topic <span className="text-violet-500">*</span>
                </label>
                <select
                  id="topic"
                  {...register('topic', { required: 'Please select a topic' })}
                  className={inputClassName}
                >
                  <option value="">Select a topic</option>
                  {TOPICS.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
                {errors.topic && (
                  <p className="mt-2 text-sm text-red-600">{errors.topic.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-2">
                  Timeframe <span className="text-violet-500">*</span>
                </label>
                <select
                  id="timeframe"
                  {...register('timeframe', { required: 'Please select a timeframe' })}
                  className={inputClassName}
                >
                  <option value="">How far into the future?</option>
                  {TIMEFRAMES.map((timeframe) => (
                    <option key={timeframe} value={timeframe}>
                      {timeframe}
                    </option>
                  ))}
                </select>
                {errors.timeframe && (
                  <p className="mt-2 text-sm text-red-600">{errors.timeframe.message}</p>
                )}
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Your Vision <span className="text-violet-500">*</span>
                </label>
                <span className="text-xs text-gray-400">{wordCount} words</span>
              </div>
              <textarea
                id="content"
                rows={20}
                {...register('content', {
                  required: 'Content is required',
                  minLength: { value: 100, message: 'Please write at least 100 characters' },
                })}
                className={`${inputClassName} resize-none font-mono`}
                placeholder="Describe your vision of the far future...

You can use simple formatting:
# Heading
## Subheading
> Blockquote

Separate paragraphs with blank lines."
              />
              {errors.content && (
                <p className="mt-2 text-sm text-red-600">{errors.content.message}</p>
              )}
            </div>

            {/* Guidelines */}
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Before you submit:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Think far into the future&mdash;centuries, millennia, or beyond
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Be thoughtful and consider implications and second-order effects
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Your submission is completely anonymous
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  Once submitted, essays cannot be edited or deleted
                </li>
              </ul>
            </div>

            {/* Error Message */}
            {submitError && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
                {submitError}
              </div>
            )}

            {/* Submit */}
            <div className="flex items-center justify-between pt-4">
              <Link href="/essays" className="text-sm text-gray-500 hover:text-gray-700">
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Publish Anonymously'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
