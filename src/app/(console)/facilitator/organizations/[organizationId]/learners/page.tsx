import { HttpClient } from "@/lib/client";
import { Organization } from "@/lib/types/organization";
import LearnerHeader from "./header";
import { LearnerList } from "./learner-list";
import { OrganizationLearnerProfile } from "@/lib/types/user";

type OrganizationPageProps = {
    params: { organizationId: number }
}

export default async function LearnersPage({ params }: OrganizationPageProps) {

    const { organizationId } = params;
    const organizationRes = await HttpClient.get<Organization>(`/organizations/organizations/${organizationId}`);
    const organization = organizationRes.data;
    const learnerRes = await HttpClient.get<OrganizationLearnerProfile[]>(`/organizations/${organizationId}/learners/`)
    const learners = learnerRes.data

    return (
        <div className="flex flex-col items-center">
            <LearnerHeader organization={organization} />
            <LearnerList organization={organization} learners={learners} />
        </div>
    )
}