'use client'

import { signOut } from "next-auth/react"
import { BiLogOut } from "react-icons/bi"


export const LogoutButton = () => {
    return (
        <div
            onClick={() => signOut()}
            className='cursor-pointer'
        >
            <div className='flex items-center gap-4 hover:bg-[rgba(231,233,234,0.1)] w-fit p-3 pr-6 rounded-3xl'>
                <BiLogOut size={30} />
                <h3 className='text-lg'>Logout</h3>
            </div>
        </div>
    )
}
