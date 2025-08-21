import { TagLabel } from "../../ui/tag";
import { Card, CardField, CardFieldGroup, CardLabelGroup, CardText, CardTitle } from "@/components/ui/card";
import { BadgeButton } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import { Product } from "@/lib/types/payments";


type CatalogCardProps = {
    course: Product;
    disabled?: boolean;
}

export function CourseCard({ course, disabled = false }: CatalogCardProps) {

    return (
        <Card
            href={`/courses/${course.course.id}/preview`}
            disabled={disabled}
        >
            <CardTitle className="flex-1 mr-4">
                {course.course.title}
            </CardTitle>
            <Divider />

            <CardLabelGroup>
                {course.course.fields_of_study.map((field, index) => (
                    <TagLabel key={index} color="orange">
                        {field.name}
                    </TagLabel>
                ))}
                {course.course.tags.map((tag, index) => (
                    <TagLabel key={index}>
                        {tag.name}
                    </TagLabel>
                ))}
            </CardLabelGroup>
            <CardFieldGroup>
                <CardField label="CPE Credits">
                    {course.course.cpe_credits}
                </CardField>
                <CardField label="Knowledge Level">
                    {course.course.knowledge_level.name}
                </CardField>
                {course.course.prerequisite_courses.length > 0 &&
                    <CardField label="Suggested Prerequisite Courses">
                        {course.course.prerequisite_courses.map((course, index) => (
                            <BadgeButton key={index} href={`/learner/catalog/courses/${course.id}/preview`} color="blue" className="z-20">
                                {course.title}
                            </BadgeButton>
                        ))}
                    </CardField>}
            </CardFieldGroup>
            <CardText>
                {course.course.description}
            </CardText>
        </Card>
    );
}