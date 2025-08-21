import { HttpClient } from "@/lib/client";
import { Organization } from "@/lib/types/organization";


type OrganizationPageProps = {
    params: { organizationId: number }
}

export default async function StatisticsPage({ params }: OrganizationPageProps) {

    const { organizationId } = params;
    const res = await HttpClient.get<Organization>(`/organizations/organizations/${organizationId}`);
    const organization = res.data;

    return (
        <>
        </>
    )
}