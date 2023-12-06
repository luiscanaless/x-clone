import { Avatar } from "./Avatar"

export const UserHero = ({ userId }: { userId: string }) => {
    return (

        <div>
            <div className="bg-neutral-700 h-44 relative">
                <div className="absolute -bottom-16 left-4 h-32 w-32 border-4 border-black rounded-full">
                    <Avatar userId={userId} />
                </div>
            </div>
        </div>


    )
}
