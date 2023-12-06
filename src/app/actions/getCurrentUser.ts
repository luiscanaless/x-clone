import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const getCurrentUser = async () => {

    const session = await getServerSession(authOptions)

    if (!session?.user?.email) throw new Error('Not signed in')

    const user = await prisma.user.findUnique({
        where: { email: session.user.email }
    })

    if (!user) throw new Error('Not signed in')

    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    return currentUser

}

