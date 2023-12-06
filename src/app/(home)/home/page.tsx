import { Header } from "@/components/Header";
import { PostFeed } from "@/components/PostFeed";
import { PostForm } from "@/components/PostForm";

export default function HomePage() {

    return (
        <>
            <Header label="Home" />

            <PostForm />
            <PostFeed />
        </>


    );
}