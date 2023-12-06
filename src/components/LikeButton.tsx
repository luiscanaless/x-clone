'use client'

import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useRouter } from "next/navigation"

interface Props {
    hasLiked: boolean
    postId: string
    count: number
}




export const LikeButton = ({ hasLiked, postId, count }: Props) => {
    const router = useRouter()
    const onLike = async () => {

        await axios.put('/api/posts', { postId }).then(console.log)
        router.refresh()
    }

    const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart

    return (
        <div onClick={onLike} className='flex items-center'>
            <div className='hover:bg-[rgb(249,24,128,0.1)] hover:text-[rgb(249,24,128)]  w-8 h-8 rounded-full  flex items-center justify-center'>
                <LikeIcon className={`${hasLiked ? 'text-[rgb(249,24,128)]' : ''}`} />
            </div>
            {
                count > 0
                && <span className={`${hasLiked ? 'text-[rgb(249,24,128)]' : ''} text-xs`}>{count}</span>
            }
        </div>
    )
}
