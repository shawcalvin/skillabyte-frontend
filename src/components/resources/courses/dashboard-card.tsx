import { RegisteredCourse } from "@/lib/types/course"
import { formatDateString } from "@/lib/dates";
import { TagLabel } from "../../ui/tag";
import { Card, CardField, CardFieldGroup, CardLabelGroup, CardTitle } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";

type DashboardCourseCardProps = {
    course: RegisteredCourse
}

export function DashboardCard({ course }: DashboardCourseCardProps) {
    const courseDetails = course.course;
    const organizationDetails = course.organization;

    return (
        <Card href={`/learner/courses/${courseDetails.id}/preview`}>
            <CardTitle>
                {courseDetails.title}
            </CardTitle>
            <Divider />
            <CardLabelGroup>
                {courseDetails.fields_of_study.map((field, index) => (
                    <TagLabel key={index} color="orange">
                        {field.name}
                    </TagLabel>
                ))}
                {courseDetails.tags.map((tag, index) => (
                    <TagLabel key={index}>
                        {tag.name}
                    </TagLabel>
                ))}
            </CardLabelGroup>
            <CardFieldGroup>
                <CardField label="CPE Credits">
                    {courseDetails.cpe_credits}
                </CardField>
                <CardField label="Knowledge Level">
                    {courseDetails.knowledge_level.name}
                </CardField>
                <CardField label="Expires">
                    {formatDateString(course.expires)}
                </CardField>
                {!course.organization.is_personal &&
                    <CardField label="Organization">
                        {course.organization.name}
                    </CardField>}
            </CardFieldGroup>
        </Card>

    );
}