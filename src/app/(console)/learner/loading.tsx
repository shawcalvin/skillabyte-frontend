import { FacilitatorLayout } from "@/components/layouts/facilitator-layout"
import { LoadingIcon } from "@/components/ui/loading-icon"

export default function RootConsoleLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <div className="w-full flex justify-center items-center">
            <LoadingIcon />
        </div>
    )
}