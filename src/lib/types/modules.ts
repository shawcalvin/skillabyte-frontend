import { Dispatch, SetStateAction } from "react";
import { Course } from "./course";

export type LearningModule = {
    id: number;
    course: Course;
    module_path: string;
}

export type LearningModuleAttempt = {
    id: number;
    module: number;
    learner: number;
    date_started: string;
    date_submitted: string;
}

export type LearningModulePageCompletion = {
    id: number;
    attempt: LearningModuleAttempt;
    page_number: number;
    time_spent: number;
}

export type SetStateFunction = Dispatch<SetStateAction<any>>
export type LearningModulePageProps = {
    attemptId: number;
    courseId: number;
    next: () => void;
    prev: () => void;
    goToPage: (index: number) => void;
    handleFinish: () => void;
    setIsComplete: SetStateFunction;
}
export type LearningModulePage = React.ComponentType<LearningModulePageProps>