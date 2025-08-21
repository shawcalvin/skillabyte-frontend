import { HttpClient } from "@/lib/client"
import { DashboardHeader } from "./dashboard-header"
import { OrganizationList } from "./organization-list"
import { Organization } from "@/lib/types/organization"

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
    const organizations = (await HttpClient.get<Organization[]>('/organizations/facilitated/')).data
    const filteredOrganizations = organizations.filter((organization) => !organization.is_personal)
    return (
        <>
            <DashboardHeader />
            <OrganizationList organizations={filteredOrganizations} />
        </>
    )
}