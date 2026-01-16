import { put, list, del } from '@vercel/blob'
import { v4 as uuidv4 } from 'uuid'

export interface Essay {
  id: string
  title: string
  content: string
  excerpt: string
  topic: string
  timeframe: string
  createdAt: string
  readTime: string
}

export interface EssaySubmission {
  title: string
  content: string
  topic: string
  timeframe: string
}

const ESSAYS_PREFIX = 'essays/'

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min`
}

function createExcerpt(content: string, maxLength: number = 200): string {
  const plainText = content.replace(/[#*_`]/g, '').trim()
  if (plainText.length <= maxLength) return plainText
  return plainText.substring(0, maxLength).trim() + '...'
}

export async function createEssay(submission: EssaySubmission): Promise<Essay> {
  const id = uuidv4()
  const now = new Date().toISOString()

  const essay: Essay = {
    id,
    title: submission.title,
    content: submission.content,
    excerpt: createExcerpt(submission.content),
    topic: submission.topic,
    timeframe: submission.timeframe,
    createdAt: now,
    readTime: calculateReadTime(submission.content),
  }

  const blob = await put(
    `${ESSAYS_PREFIX}${id}.json`,
    JSON.stringify(essay),
    {
      access: 'public',
      contentType: 'application/json',
    }
  )

  return essay
}

export async function getEssay(id: string): Promise<Essay | null> {
  try {
    const { blobs } = await list({ prefix: `${ESSAYS_PREFIX}${id}.json` })
    if (blobs.length === 0) return null

    const response = await fetch(blobs[0].url)
    if (!response.ok) return null

    return await response.json()
  } catch (error) {
    console.error('Error fetching essay:', error)
    return null
  }
}

export async function getAllEssays(): Promise<Essay[]> {
  try {
    const { blobs } = await list({ prefix: ESSAYS_PREFIX })

    const essays = await Promise.all(
      blobs.map(async (blob) => {
        try {
          const response = await fetch(blob.url)
          if (!response.ok) return null
          return await response.json() as Essay
        } catch {
          return null
        }
      })
    )

    return essays
      .filter((essay): essay is Essay => essay !== null)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  } catch (error) {
    console.error('Error fetching essays:', error)
    return []
  }
}

export async function getEssaysByTopic(topic: string): Promise<Essay[]> {
  const essays = await getAllEssays()
  return essays.filter(essay => essay.topic.toLowerCase() === topic.toLowerCase())
}

export async function deleteEssay(id: string): Promise<boolean> {
  try {
    await del(`${ESSAYS_PREFIX}${id}.json`)
    return true
  } catch (error) {
    console.error('Error deleting essay:', error)
    return false
  }
}

export const TOPICS = [
  'Posthuman Futures',
  'Cosmic Civilization',
  'Digital Consciousness',
  'Social Evolution',
  'The Deep Future',
  'First Contact',
  'Other',
]

export const TIMEFRAMES = [
  '100-1,000 years',
  '1,000-10,000 years',
  '10,000-100,000 years',
  '100,000-1 million years',
  '1 million-1 billion years',
  'Beyond 1 billion years',
  'The end of time',
]
