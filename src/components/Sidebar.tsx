
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
import { RiNotification2Line } from 'react-icons/ri'
import { HiOutlineUser } from 'react-icons/hi'
import { BiLogOut } from 'react-icons/bi'
import { SidebarItem } from './SidebarItem'
import { signOut } from 'next-auth/react'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { LogoutButton } from './LogoutButton'
import { getCurrentUser } from '@/app/actions/getCurrentUser'




export const Sidebar = async () => {

    const user = await getCurrentUser()

    const items = [
        {
            path: '/home',
            title: 'Home',
            icon: <AiOutlineHome size={30} />
        },
        // {
        //     path: '/notifications',
        //     title: 'Notifications',
        //     icon: <RiNotification2Line size={30} />
        // },
        {
            path: `/profile/${user?.username}`,
            title: 'Profile',
            icon: <HiOutlineUser size={30} />
        },

    ]

    return (
        <aside className='flex flex-col fixed w-72'>
            <div className='mt-1 mb-2 hover:bg-[rgba(231,233,234,0.1)] w-fit rounded-full p-3'>
                <Link href={'/home'} >
                    <FaXTwitter size={30} />
                </Link>
            </div>
            <div className='flex flex-col gap-2'>
                {
                    items.map(item => (
                        <SidebarItem key={item.path} {...item} />
                    ))
                }
                <LogoutButton />
            </div>
            <div className='p-3'>
                <button className='bg-[#1D9BF0] w-[90%] rounded-full p-3 font-bold text-lg mt-5'>
                    Post
                </button>
            </div>
        </aside >

    )
}
