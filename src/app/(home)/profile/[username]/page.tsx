import { Header } from "@/components/Header";
import { PostFeed } from "@/components/PostFeed";
import { UserBio } from "@/components/UserBio";
import { UserHero } from "@/components/UserHero";
import prisma from "@/lib/prisma";

export default async function ProfilePage({ params }: { params: { username: string } }) {

    const user = await prisma.user.findUnique({
        where: {
            username: params.username
        }
    })

    return (
        <div>
            <Header label={user?.name!} />
            <UserHero userId={user?.id!} />
            <UserBio userId={user?.id!} />
            <PostFeed username={params.username} />
        </div>
    );
}