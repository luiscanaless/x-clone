
import { useLike } from '@/hooks/useLike';
import { Prisma } from '@prisma/client'

import { formatDistanceToNowStrict } from 'date-fns';
import Image from 'next/image'

import { LikeButton } from './LikeButton';

import { GoComment } from "react-icons/go";
import { Avatar } from './Avatar';
import Link from 'next/link';

export type PostWithUser = Prisma.PostGetPayload<{
    include: { user: true }
}>

interface Props {
    post: PostWithUser;
}

export const PostItem = async ({ post }: Props) => {


    const createdAt = formatDistanceToNowStrict(new Date(post.createdAt))

    const hasLiked = await useLike({ post })

    return (
        <article className="flex border-b-[1px] border-neutral-800 hover:bg-neutral-950 cursor-pointer ">
            <Link href={`/profile/${post.user.username}`} className="my-4 ml-4 mr-3 self-start w-10 h-10 relative">
                <Avatar userId={post.userId} />
            </Link>
            <div className="mt-3 mb-1">
                <div className="flex gap-1">
                    <h3 className="font-bold">{post.user.name}</h3>
                    <span className="text-neutral-500">@{post.user.username}</span>
                    <span className='text-neutral-500'>·</span>
                    <span className='text-neutral-500'>{createdAt}</span>
                </div>
                <div>
                    <p>{post.content}</p>
                </div>
                <div className="flex gap-4 mt-1 items-center">
                    <GoComment size={15} />
                    <LikeButton hasLiked={hasLiked} postId={post.id} count={post.likedIds.length} />

                </div>
            </div>
        </article>
    )
}
