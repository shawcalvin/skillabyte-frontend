import { CourseList } from "./course-list";
import { DashboardHeader } from "./dashboard-header";

export const dynamic = 'force-dynamic';

export default function DashboardPage() {
    return (
        <>
            <DashboardHeader />
            <CourseList />
        </>
    )
}