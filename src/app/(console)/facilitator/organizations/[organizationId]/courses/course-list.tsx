import { RegisteredCourse } from "@/lib/types/course"
import { Organization } from "@/lib/types/organization"

type CourseListProps = {
    organization: Organization;
    courses: RegisteredCourse[];
}
export async function CourseList({ organization, courses }: CourseListProps) {

    return (
        <div className="text-primary-blue-900">
            {courses.map((course, index) => (
                <div key={index} className="p-8 rounded-md shadow-sm bg-gradient-to-br from-gray-50 via-white to-gray-50">
                    {course.course.title}
                </div>
            ))}
        </div>
    )
}