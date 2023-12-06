'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"


export const Form = () => {

    const [post, setPost] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const router = useRouter()

    const createPost = () => {
        setIsLoading(true)

        axios.post('/api/posts', { post })
            .then(() => {
                setPost('')
                setIsLoading(false)
                router.refresh()
            })
    }

    return (
        <div className="mt-4">
            <div className="mr-5 flex flex-col">
                <textarea
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    className="resize-none w-full bg-black outline-none peer placeholder-neutral-500 "
                    placeholder="What's happening?"
                >

                </textarea>
                <hr className="opacity-0 peer-focus:opacity-100 h-[1px] w-full border-neutral-800 transition" />
                <button
                    disabled={isLoading || !post}
                    onClick={createPost}
                    className="bg-[#1D9BF0] disabled:opacity-70 w-fit rounded-full px-5 py-2 font-bold my-3 self-end">Tweet</button>
            </div>
        </div>
    )
}
