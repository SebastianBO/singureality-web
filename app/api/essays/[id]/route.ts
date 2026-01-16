import { NextRequest, NextResponse } from 'next/server'
import { getEssay } from '@/lib/essays'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const essay = await getEssay(id)

    if (!essay) {
      return NextResponse.json({ error: 'Essay not found' }, { status: 404 })
    }

    return NextResponse.json(essay)
  } catch (error) {
    console.error('Error fetching essay:', error)
    return NextResponse.json({ error: 'Failed to fetch essay' }, { status: 500 })
  }
}
