import { IconNavItem } from "@/lib/types/navigation";
import { BaseLayout } from "./base-layout"

export function FacilitatorLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const navItems = [
        { label: 'Dashboard', url: '/facilitator/dashboard' },
    ]

    const iconNavItems: IconNavItem[] = [
    ]

    return (
        <BaseLayout navItems={navItems} iconNavItems={iconNavItems}>
            {children}
        </BaseLayout>
    )
}