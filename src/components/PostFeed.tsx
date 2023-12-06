import prisma from "@/lib/prisma"
import { PostItem } from "./PostItem"


export const PostFeed = async ({ username }: { username?: string }) => {

    const posts = await prisma.post.findMany({
        include: {
            user: true
        },
        orderBy: {
            createdAt: 'desc'
        },
        ...(username && {
            where: {
                user: {
                    username
                }
            }
        })
    })


    return (
        <section>
            {
                posts.length === 0
                    ? <div className="text-center text-xl mt-5">No tweets :(</div>
                    :
                    posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))
            }
        </section>
    )
}
