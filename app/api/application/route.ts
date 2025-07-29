import { NextRequest, NextResponse } from 'next/server'
import { applicationsApi } from '@/lib/api'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const application = await applicationsApi.create({
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      subject: body.subject,
      message: body.message
    })

    return NextResponse.json({ 
      success: true, 
      data: application 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Ошибка отправки сообщения' },
      { status: 500 }
    )
  }
}