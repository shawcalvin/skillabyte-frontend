import { CardGroup } from "@/components/ui/card";
import { OrganizationCard } from "@/components/resources/organizations/organization-card";
import { Organization } from "@/lib/types/organization";

type OrganizationListProps = {
    organizations: Organization[]
}
export function OrganizationList({ organizations }: OrganizationListProps) {
    return (
        <CardGroup>
            {
                organizations.map((organization, index) => (
                    <OrganizationCard key={index} href={`/facilitator/organizations/${organization.id}/settings`} organization={organization} />
                ))
            }
        </CardGroup>
    )
}