'use client'

import { useEffect, useState } from "react";
import { LearningModuleFrame } from "./module-content";
import { LoadingIcon } from "@/components/ui/loading-icon";
import { LearningModule, LearningModuleAttempt, LearningModulePage, LearningModulePageCompletion } from "@/lib/types/modules";

type LearningModuleLoaderProps = {
    courseId: number;
    attemptId: number;
    learningModule: LearningModule;
    pageCompletion: LearningModulePageCompletion[];
    learningModuleAttempt?: LearningModuleAttempt;
}
export function LearningModuleLoader({ courseId, attemptId, learningModule, pageCompletion, learningModuleAttempt }: LearningModuleLoaderProps) {
    const [pages, setPages] = useState<LearningModulePage[] | null>(null);

    useEffect(() => {
        const loadModule = async () => {
            const learningModuleWebpack = await import(`@/courses/${learningModule.module_path}/module-builder`);
            const moduleBuilder = learningModuleWebpack.default();
            setPages(moduleBuilder.pages);
        }
        loadModule();
    }, [attemptId, courseId, learningModule])

    if (!pages) {
        return (
            <div className="flex justify-center">
                <LoadingIcon />
            </div>
        )
    }

    return (
        <LearningModuleFrame
            courseId={courseId}
            attemptId={attemptId}
            learningModule={learningModule}
            learningModuleAttempt={learningModuleAttempt}
            initialCompletion={pageCompletion}
            pages={pages}
        />
    )
}