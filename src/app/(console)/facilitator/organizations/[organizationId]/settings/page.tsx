import { HttpClient } from "@/lib/client";
import { Organization } from "@/lib/types/organization";
import { SettingsForm } from "./settings-form";


type OrganizationPageProps = {
    params: { organizationId: number }
}

export default async function SettingsPage({ params }: OrganizationPageProps) {

    const { organizationId } = params;
    const res = await HttpClient.get<Organization>(`/organizations/organizations/${organizationId}`);
    const organization = res.data;

    return (
        <div className="flex justify-center">
            <SettingsForm organization={organization} />
        </div>
    )
}