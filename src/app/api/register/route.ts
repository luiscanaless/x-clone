import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: Request) {

    const { email, password, username, name } = await request.json()

    const newUser = await prisma.user.create({
        data: { email, password, username, name }
    })

    return NextResponse.json(newUser)
}