import { getServerSession } from 'next-auth';
import { NextResponse, NextRequest } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/app/actions/getCurrentUser';


export async function POST(request: Request) {

    const { post: content } = await request.json()

    const user = await getCurrentUser()

    if (!user) throw new Error('Not signed in')

    const post = await prisma.post.create({
        data: {
            userId: user.id,
            content,
        }
    })

    return NextResponse.json(post)
}

export async function PUT(request: Request) {

    const { postId } = await request.json()

    const user = await getCurrentUser()

    if (!user) throw new Error('Not signed in')

    const posts = await prisma.post.findFirst({
        where: {
            id: postId
        }
    })

    let likedIds = [...posts?.likedIds || []]
    const hasLiked = likedIds.includes(user.id)

    if (hasLiked) {

        likedIds = likedIds.filter(id => id !== user.id)

        await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                likedIds: likedIds
            }
        })

    } else {
        likedIds.push(user.id)

        await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                likedIds: likedIds
            }

        })

    }


    return NextResponse.json(hasLiked)
}