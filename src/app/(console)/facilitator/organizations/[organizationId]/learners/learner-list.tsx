import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDateString } from "@/lib/dates";
import { Organization } from "@/lib/types/organization";
import { OrganizationLearnerProfile } from "@/lib/types/user"

type LearnerListProps = {
    organization: Organization;
    learners: OrganizationLearnerProfile[];
}
export function LearnerList({ organization, learners }: LearnerListProps) {
    return (
        <div className="w-full max-w-7xl bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 p-8 rounded-lg shadow-sm">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>
                            Email
                        </TableHeader>
                        <TableHeader>
                            First Name
                        </TableHeader>
                        <TableHeader>
                            Last Name
                        </TableHeader>
                        <TableHeader>
                            Date Joined
                        </TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {learners.map((learner, index) => (
                        <TableRow key={index} className="hover:bg-gray-200" href={`/facilitator/organizations/${organization.id}/learners/${learner.learner.id}`}>
                            <TableCell>
                                {learner.learner.user.email}
                            </TableCell>
                            <TableCell>
                                {learner.learner.user.first_name}
                            </TableCell>
                            <TableCell>
                                {learner.learner.user.last_name}
                            </TableCell>
                            <TableCell>
                                {formatDateString(learner.date_added)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}