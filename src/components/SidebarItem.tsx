import Link from "next/link"

interface Props {
    path: string
    title: string
    icon: React.ReactNode
}

export const SidebarItem = ({ path, title, icon }: Props) => {
    return (
        <Link key={path} href={path}>
            <div className='flex items-center gap-4 hover:bg-[rgba(231,233,234,0.1)] w-fit p-3 pr-6 rounded-3xl'>
                {icon}
                <h3 className='text-lg'>{title}</h3>
            </div>
        </Link>
    )
}
