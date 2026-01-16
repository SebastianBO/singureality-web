import { NextRequest, NextResponse } from 'next/server'
import { createEssay, getAllEssays, type EssaySubmission } from '@/lib/essays'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const topic = searchParams.get('topic')

    let essays = await getAllEssays()

    if (topic) {
      essays = essays.filter(
        essay => essay.topic.toLowerCase() === topic.toLowerCase()
      )
    }

    return NextResponse.json(essays)
  } catch (error) {
    console.error('Error fetching essays:', error)
    return NextResponse.json({ error: 'Failed to fetch essays' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as EssaySubmission

    // Basic validation
    if (!body.title || body.title.trim().length < 3) {
      return NextResponse.json(
        { error: 'Title must be at least 3 characters' },
        { status: 400 }
      )
    }

    if (!body.content || body.content.trim().length < 100) {
      return NextResponse.json(
        { error: 'Content must be at least 100 characters' },
        { status: 400 }
      )
    }

    if (!body.topic) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      )
    }

    if (!body.timeframe) {
      return NextResponse.json(
        { error: 'Timeframe is required' },
        { status: 400 }
      )
    }

    const essay = await createEssay({
      title: body.title.trim(),
      content: body.content.trim(),
      topic: body.topic,
      timeframe: body.timeframe,
    })

    return NextResponse.json(essay, { status: 201 })
  } catch (error) {
    console.error('Error creating essay:', error)
    return NextResponse.json({ error: 'Failed to create essay' }, { status: 500 })
  }
}
