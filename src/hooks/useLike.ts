import { PostWithUser } from "@/components/PostItem"
import { useCurrentUser } from "./useCurrentUser"
import { getCurrentUser } from "@/app/actions/getCurrentUser"


export const useLike = async ({ post }: { post: PostWithUser }) => {

    const currentUser = await getCurrentUser()

    const hasLiked = post.likedIds.includes(currentUser!.id)

    return hasLiked
}
