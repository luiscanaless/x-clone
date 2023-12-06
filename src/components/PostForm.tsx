
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from 'react'
import { Avatar } from "./Avatar"
import { Form } from "./Form"
import { getCurrentUser } from "@/app/actions/getCurrentUser"

export const PostForm = async () => {

    const user = await getCurrentUser()

    return (
        <section className="flex border-b-[1px] border-b-neutral-800">
            <div className="m-4 w-10 h-10 relative">
                <Avatar userId={user!.id} />
            </div>
            <div className="flex-grow">
                <Form />
            </div>
        </section>
    )
}
