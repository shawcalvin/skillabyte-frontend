import { CardGroup } from "@/components/ui/card";
import { OrganizationCard } from "@/components/resources/organizations/organization-card";
import { Organization } from "@/lib/types/organization";

type OrganizationListProps = {
    organizations: Organization[]
}
export function OrganizationList({ organizations }: OrganizationListProps) {
    if (organizations.length === 0) {
        return (
            <div className="text-primary-blue-900 w-full text-center mt-8">
                It looks like you&apos;re not a facilitator for any active organizations. If you believe this is an error, reach out to David Wood at davidwood@byu.edu.
            </div>
        )
    }
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