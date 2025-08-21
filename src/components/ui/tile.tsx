import clsx from "clsx";

type CardProps = {
    children: React.ReactNode;
    center?: boolean;
    className?: string;
}
export function Tile({ center, children, className }: CardProps) {
    const element = (
        <div className={clsx(className, "w-full max-w-3xl p-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-md rounded-md space-y-5")}>
            {children}
        </div>
    )

    if (center) {
        return (
            <div className="flex justify-center">
                {element}
            </div>
        )
    }
    return element
}