import { getCurrentUser } from '@/app/actions/getCurrentUser'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    const user = await getCurrentUser()

    return NextResponse.json(user)
}