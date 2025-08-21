import { HttpClient } from "@/lib/client";
import { LearningModuleLoader } from "./module-loader";
import { LearningModule, LearningModuleAttempt, LearningModulePageCompletion } from "@/lib/types/modules";
import { Text } from "@/components/ui/text";


type LearningModulePageProps = {
    params: { courseId: number, attemptId: number, pageName: string }
}

export default async function CourseAttemptPage({ params }: LearningModulePageProps) {
    const learningModule = (await HttpClient.get<LearningModule>(`/modules/courses/${params.courseId}/modules/`)).data;
    const pageCompletion = (await HttpClient.get<LearningModulePageCompletion[]>(`/modules/attempts/${params.attemptId}/completions`)).data;
    const moduleAttempts = (await HttpClient.get<LearningModuleAttempt[]>(`/modules/courses/${params.courseId}/attempts/`)).data;

    return (
        <>
            <LearningModuleLoader
                courseId={params.courseId}
                attemptId={params.attemptId}
                learningModule={learningModule}
                pageCompletion={pageCompletion}
                learningModuleAttempt={moduleAttempts[moduleAttempts.length - 1]}
            />
        </>
    )
}