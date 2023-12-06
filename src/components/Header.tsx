
interface Props {
    label: string
    showBack?: boolean
}

export const Header = ({ label, showBack }: Props) => {
    return (
        <header className="p-3 border-b-[1px] border-b-neutral-800">
            <h1 className="text-lg font-bold">{label}</h1>
        </header>
    )
}
