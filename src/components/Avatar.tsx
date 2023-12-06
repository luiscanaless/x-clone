import prisma from "@/lib/prisma"
import Image from "next/image"


export const Avatar = async ({ userId }: { userId: string }) => {

    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    return (
        <Image
            className="rounded-full"
            fill
            alt="user image"
            src={user?.image || '/placeholder.png'}
        />
    )
}
