import { HttpClient } from "@/lib/client";
import { Organization } from "@/lib/types/organization";
import { Header } from "./header";
import { TabNavigation } from "./tab-navigation";

type OrganizationLayoutProps = {
    params: { organizationId: number };
    children: React.ReactNode;
}
export default async function OrganizationLayout({ params, children }: OrganizationLayoutProps) {

    const { organizationId } = params;
    const res = await HttpClient.get<Organization>(`/organizations/organizations/${organizationId}`);
    const organization = res.data;

    return (
        <>
            <div className="flex flex-col items-center mb-16 lg:flex-row lg:items-end">
                <Header organization={organization} />
                <TabNavigation organization={organization} />
            </div>
            <div className="w-full">
                {children}
            </div>
        </>
    )
}