"use client"

import { Button } from "@/components/ui/button";
import { InfoIcon } from "@/components/ui/info";
import { LoadingIcon } from "@/components/ui/loading-icon";
import { HttpClient } from "@/lib/client";
import { LearningModule, LearningModuleAttempt } from "@/lib/types/modules";
import { QuizAttempt } from "@/lib/types/quizzes";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ModuleButtonsProps = {
    learningModule: LearningModule;
    learningAttempts: LearningModuleAttempt[];
    quizAttempts: QuizAttempt[];
}
export function ModuleButtons({ learningModule, learningAttempts, quizAttempts }: ModuleButtonsProps) {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const launchModule = async () => {
        setIsLoading(true);
        let recentAttempt = learningAttempts[learningAttempts.length - 1]
        if (!recentAttempt) {
            const res = await HttpClient.post<LearningModuleAttempt>(`/modules/courses/${learningModule.course.id}/attempts/`)
            recentAttempt = res.data;
        }
        router.push(`/learner/courses/${learningModule.course.id}/modules/attempts/${recentAttempt.id}`);
    }

    const launchAssessment = async () => {
        setIsLoading(true);
        const res = await HttpClient.post<QuizAttempt>(`/content/quizzes/courses/${learningModule.course.id}/attempts/`)
        router.push(`/learner/courses/${learningModule.course.id}/quizzes/attempts/${res.data.id}`);
    }

    const finishedAttemptExists = learningAttempts.some(attempt => attempt.date_submitted);
    const unfinishedAttemptExists = learningAttempts.some(attempt => attempt.date_started);

    const unfinishedQuizAttemptExists = quizAttempts.some(attempt => !attempt.time_submitted)

    if (isLoading) {
        return (
            <>
                <div className="w-full flex justify-center">
                    <LoadingIcon />
                </div>
            </>
        )
    }

    return (
        <>
            <Button onClick={launchModule} className="w-48 mx-2 flex justify-center">
                {finishedAttemptExists ? "Review Module" : unfinishedAttemptExists ? "Continue Module" : "Start Module"}
                <InfoIcon info="Complete the module to gain access to the graded quiz." className="text-white" />
            </Button>
            {finishedAttemptExists &&
                <Button onClick={launchAssessment} className="w-48 mx-2 flex justify-center">
                    {unfinishedQuizAttemptExists ? "Continue Quiz" : "Start Quiz"}
                    <InfoIcon info="You may attempt the quiz any number of times. You will not be able to review module content while the quiz is in progress. A score of at least 70% is required to pass." className="text-white" />
                </Button>}
        </>
    )
}