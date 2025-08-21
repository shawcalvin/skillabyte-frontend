"use client"

import { Organization } from "@/lib/types/organization"
import { ChartBarIcon, Cog6ToothIcon, LightBulbIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";

type TabNavigationProps = {
    organization: Organization;
}
export function TabNavigation({ organization }: TabNavigationProps) {
    const router = useRouter();
    const pathname = usePathname();

    const pages = [
        { label: 'Courses', href: `/facilitator/organizations/${organization.id}/courses`, icon: <LightBulbIcon className="w-5 text-primary-blue-900" /> },
        { label: 'Learners', href: `/facilitator/organizations/${organization.id}/learners`, icon: <UserCircleIcon className="w-5 text-primary-blue-900" /> },
        { label: 'Statistics', href: `/facilitator/organizations/${organization.id}/statistics`, icon: <ChartBarIcon className="w-5 text-primary-blue-900" /> },
        { label: 'Settings', href: `/facilitator/organizations/${organization.id}/settings`, icon: <Cog6ToothIcon className="w-5 text-primary-blue-900" /> },
    ]

    return (
        <div className="relative w-full text-primary-blue-900 lg:mx-24">
            <div className="flex justify-between w-full">
                {pages.map((page, index) => (
                    <div
                        key={index}
                        className={`flex-1 text-center font-semibold flex flex-col items-center text-sm transition-all duration-300 cursor-pointer p-4 ${pathname === page.href ? 'border-b-2 border-primary-blue-500' : 'border-b-2 border-primary-gray-300'}`}
                        onClick={() => router.push(page.href)}
                    >
                        {page.icon}
                        <span>{page.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}