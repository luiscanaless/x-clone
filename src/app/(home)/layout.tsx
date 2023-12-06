import { Sidebar } from "@/components/Sidebar";

export default function HomeLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen grid grid-cols-4 max-w-6xl mx-auto">
            <div>
                <Sidebar />
            </div>
            <div className="border border-neutral-800 border-t-0 col-span-2">
                {children}
            </div>
            <p>xd</p>
        </div>
    );
}