import { HttpClient } from "@/lib/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LearningModule, LearningModuleAttempt } from "@/lib/types/modules";
import { ModuleButtons } from "./module-buttons";
import { QuizAttempt } from "@/lib/types/quizzes";
import { formatDateString, getDate } from "@/lib/dates";
import { Markdown } from "@/components/ui/markdown";
import { headers } from "next/headers";
import { PreviewHeader } from "./preview-header";
import { CourseRatingCategory, RegisteredCourse } from "@/lib/types/course";
import { NasbaStatement } from "@/components/resources/courses/nasba-statement";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "@/components/ui/info";

export const dynamic = 'force-dynamic';

export default async function CoursePreviewPage({
    params
}: {
    params: { courseId: number }
}) {
    const { courseId } = params;
    const learningModule = (await HttpClient.get<LearningModule>(`/modules/courses/${courseId}/modules/`)).data;
    const moduleAttempts = (await HttpClient.get<LearningModuleAttempt[]>(`/modules/courses/${courseId}/attempts/`)).data;
    const quizAttempts = (await HttpClient.get<QuizAttempt[]>(`/content/quizzes/courses/${courseId}/attempts/`)).data;
    const ratingCategories = (await HttpClient.get<CourseRatingCategory[]>(`/ratings/categories/`)).data;
    const registeredCourses = (await HttpClient.get<RegisteredCourse[]>('/courses/registered/')).data

    const headersList = headers();
    const referer = headersList.get('referer');

    const filteredCourses = registeredCourses.filter(course => course.course.id == courseId);

    const registeredCourse = filteredCourses.length
        ? filteredCourses.reduce((latest, course) =>
            new Date(course.expires) > new Date(latest.expires)
                ? course
                : latest
        )
        : null;

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-full text-gray-800 max-w-[72rem]">
                    <PreviewHeader courseId={courseId} learningModule={learningModule} registeredCourse={registeredCourse} categories={ratingCategories} referer={referer} isComplete={quizAttempts.length > 0} />
                    <Button href="/learner/courses/instructions" target="_blank" color="light">
                        Course Instructions
                    </Button>
                    <div className="mt-8">
                        <div className="mt-8">
                            <div className="w-64 text-base font-semibold text-primary-blue-800">
                                Module Overview
                            </div>
                            <div className="mt-4">
                                <Markdown>
                                    {learningModule.course.overview}
                                </Markdown>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="w-64 text-base font-semibold text-primary-blue-800">
                                Learning Objectives
                            </div>
                            <ol className="ml-8 mt-4 list-decimal">
                                {learningModule.course.learning_objectives.map((objective, index) => (
                                    <li key={index} className="pl-2">
                                        {objective.objective}
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="mt-8">
                            <div className="w-64 text-base font-semibold text-primary-blue-800">
                                Prerequisite Knowledge
                            </div>
                            <div className="mt-4">
                                <Markdown>
                                    {learningModule.course.prerequisite_knowledge}
                                </Markdown>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="w-64 text-base font-semibold text-primary-blue-800">
                                Advance Preparation
                            </div>
                            <div className="mt-4">
                                <Markdown>
                                    {learningModule.course.advance_preparation}
                                </Markdown>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-8 flex justify-center">
                        <ModuleButtons learningModule={learningModule} learningAttempts={moduleAttempts} quizAttempts={quizAttempts} />
                    </div>
                    <CourseAttemptsTable courseId={params.courseId} attempts={quizAttempts} />
                    <NasbaStatement />
                </div>
            </div>
        </>
    )
}

function CourseAttemptsTable({ courseId, attempts }: { courseId: number; attempts: QuizAttempt[] }) {
    const reviewIsAvailable = attempts.some(attempt => attempt.score >= 70);

    return (
        <Table className="mt-16 rounded-md overflow-hidden border border-gray-200" striped>
            <TableHead>
                <TableRow>
                    <TableHeader className="text-center">Quiz Attempt</TableHeader>
                    <TableHeader className="text-center">Date Submitted</TableHeader>
                    <TableHeader className="text-center">Time Spent</TableHeader>
                    <TableHeader className="text-center">Score</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {attempts.map((attempt, index) => {
                    const dateStarted = getDate(attempt.time_started);
                    const dateSubmitted = attempt.time_submitted ? getDate(attempt.time_submitted) : null;

                    let timeSpentDisplay;
                    if (dateSubmitted) {
                        const timeSpentMilliseconds = dateSubmitted.getTime() - dateStarted.getTime();
                        const timeSpentMinutes = timeSpentMilliseconds / 1000 / 60;
                        timeSpentDisplay = timeSpentMinutes < 1
                            ? `${Math.round(timeSpentMilliseconds / 1000)} seconds`
                            : `${timeSpentMinutes.toFixed(2)} minutes`;
                    } else {
                        timeSpentDisplay = 'N/A';
                    }

                    const scoreDisplay = attempt.score != null
                        ? reviewIsAvailable
                            ? `${parseFloat(attempt.score.toFixed(2))}%`
                            : '< 70%'
                        : 'N/A';

                    return (
                        <TableRow key={index} href={reviewIsAvailable ? `/learner/courses/${courseId}/quizzes/attempts/${attempt.id}/review` : undefined}>
                            <TableCell className="text-center">{index + 1}</TableCell>
                            <TableCell className="text-center">{formatDateString(attempt.time_started)}</TableCell>
                            <TableCell className="text-center">{timeSpentDisplay}</TableCell>
                            <TableCell className="text-center flex justify-center items-center space-x-2">{scoreDisplay} {!reviewIsAvailable && <InfoIcon info="You must score at least 70% on the qualified assessment to receive your score and related feedback. Retake the qualified assessment to improve your score." />}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    )
}