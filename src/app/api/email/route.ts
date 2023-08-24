import { type NextRequest, NextResponse } from 'next/server'

export async function POST (request: NextRequest) {
  const body = await request.json()
  const res = await fetch('https://api-to-sendemail-jpg8-dev.fl0.io/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    return NextResponse.json({ message: 'Unexpected Error' }, { status: 500 })
  }
  const data = await res.json()

  console.log({ data })
  return NextResponse.json({ message: 'OK' }, { status: 201 })
}
