import prisma from "@/lib/prisma"


export const UserBio = async ({ userId }: { userId: string }) => {

    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    return (
        <div className="p-4 border-b-[1px] border-neutral-800">
            <div className="flex flex-col mb-7">
                <button className="self-end border-[#44525D] border rounded-full px-5 py-1 font-bold">
                    Edit profile
                </button>
            </div>
            <h2>{user?.name!}</h2>
            <span className="text-neutral-500">@{user?.username!}</span>
        </div>
    )
}
