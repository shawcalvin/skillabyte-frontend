import { HttpClient } from "@/lib/client";
import { RegisteredCourse } from "@/lib/types/course";
import { CourseList } from "./course-list";
import { Organization } from "@/lib/types/organization";


type OrganizationPageProps = {
    params: { organizationId: number }
}

export default async function CoursesPage({ params }: OrganizationPageProps) {

    const { organizationId } = params;
    const organizationRes = await HttpClient.get<Organization>(`/organizations/organizations/${organizationId}`);
    const organization = organizationRes.data;
    const courseRes = await HttpClient.get<RegisteredCourse[]>(`/organizations/${organizationId}/courses/`)
    const courses = courseRes.data

    return (
        <>
            <CourseList organization={organization} courses={courses} />
        </>
    )
}