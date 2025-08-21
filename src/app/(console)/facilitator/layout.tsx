import { FacilitatorLayout } from "@/components/layouts/facilitator-layout"

export default function RootConsoleLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <section>
            <FacilitatorLayout>
                {children}
            </FacilitatorLayout>
        </section>
    )
}