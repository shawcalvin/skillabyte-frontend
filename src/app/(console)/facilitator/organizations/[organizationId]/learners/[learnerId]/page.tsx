import { HttpClient } from "@/lib/client";
import { Learner } from "@/lib/types/user";
import { LearnerActivity } from "./learner-activity";
import { QuizAttempt } from "@/lib/types/content";
import { RegisteredCourse } from "@/lib/types/course";

type LearnerSettingsPageProps = {
    params: { organizationId: number, learnerId: number }
}

export default async function LearnerSettingsPage({ params }: LearnerSettingsPageProps) {

    const { organizationId, learnerId } = params

    const [learner, courses, attempts] = await Promise.all([
        HttpClient.get<Learner>(`/users/learners/${learnerId}`).then(r => r.data),
        HttpClient.get<RegisteredCourse[]>(`/organizations/${organizationId}/courses`).then(r => r.data),
        HttpClient.get<QuizAttempt[]>(
            `/content/quizzes/organization/${organizationId}/learner/${learnerId}`
        ).then(r => r.data),
    ]);

    return (
        <>
            <LearnerActivity organizationId={organizationId} courses={courses} attempts={attempts} learner={learner} />
        </>
    )
}