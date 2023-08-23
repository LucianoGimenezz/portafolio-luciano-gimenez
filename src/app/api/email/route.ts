import { type NextRequest, NextResponse } from 'next/server'

export async function POST (request: NextRequest) {
  const data = await request.json()
  const { email, name, message } = data
  if (email === undefined || name === undefined) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
  }
  console.log({ email, name, message })
  return NextResponse.json({ message: 'OK' }, { status: 201 })
}
