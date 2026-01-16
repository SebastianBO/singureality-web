'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  company: string
  inquiryType: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(false)

    try {
      console.log('Form data:', data)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitSuccess(true)
      reset()

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClassName = "w-full px-4 py-3 bg-white border border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none transition-colors text-gray-900 text-sm"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name <span className="text-violet-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className={inputClassName}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span className="text-violet-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className={inputClassName}
          placeholder="your@email.com"
        />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company / Organization
        </label>
        <input
          type="text"
          id="company"
          {...register('company')}
          className={inputClassName}
          placeholder="Your company name"
        />
      </div>

      {/* Inquiry Type */}
      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
          Area of Interest <span className="text-violet-500">*</span>
        </label>
        <select
          id="inquiryType"
          {...register('inquiryType', { required: 'Please select an area of interest' })}
          className={inputClassName}
        >
          <option value="">Select an option</option>
          <option value="ai">Artificial Intelligence</option>
          <option value="quantum">Quantum Computing</option>
          <option value="deep-tech">Deep Tech / Biotech</option>
          <option value="partnership">Strategic Partnership</option>
          <option value="general">General Inquiry</option>
        </select>
        {errors.inquiryType && <p className="mt-2 text-sm text-red-600">{errors.inquiryType.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-violet-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Please provide details about your inquiry' })}
          className={`${inputClassName} resize-none`}
          placeholder="Tell us about your company, technology, and what you are building..."
        />
        {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* Privacy Notice */}
      <p className="text-xs text-gray-500 leading-relaxed">
        By submitting this form, you acknowledge that your information will be handled
        in accordance with our privacy policy.
      </p>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </div>

      {/* Success Message */}
      {submitSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm">
          Thank you for reaching out. Our team will review your inquiry and respond within 48 hours.
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
          We apologize, but something went wrong. Please try again or contact us directly at contact@singularity.vc
        </div>
      )}
    </form>
  )
}
