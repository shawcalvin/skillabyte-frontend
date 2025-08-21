import useSWR from "swr";
import { LearningModule, LearningModulePageCompletion } from "../types/modules";
import { swrFetcher } from "./swr-fetcher";
import { TokenHandler } from "../tokens";

export const useLearningModule = (courseId: number) => {
    let { data: learningModule, error, isLoading } = useSWR<LearningModule>(
        `/modules/courses/${courseId}/modules/`,
        swrFetcher,
        {
            // revalidateIfStale: false,
            // revalidateOnFocus: false,
            // revalidateOnReconnect: false,
        }
    );

    return {
        learningModule,
        error,
        isLoading
    }
};

export const useLearningModulePageCompletions = (attemptId: number) => {
    let { data: pageCompletions, error, isLoading } = useSWR<LearningModulePageCompletion[]>(
        `/modules/attempts/${attemptId}/completions/`,
        swrFetcher
    )
    return {
        pageCompletions,
        error,
        isLoading
    }
}