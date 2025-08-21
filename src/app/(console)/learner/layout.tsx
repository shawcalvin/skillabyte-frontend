import { LearnerLayout } from "@/components/layouts/learner-layout"

export default function RootConsoleLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <section>
            <LearnerLayout>
                {children}
            </LearnerLayout>
        </section>
    )
}