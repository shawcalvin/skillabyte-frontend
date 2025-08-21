'use client'

import { Alert, AlertActions, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { LoadingIcon } from "@/components/ui/loading-icon";
import { HttpClient } from "@/lib/client";
import { LearningModule, LearningModuleAttempt, LearningModulePage, LearningModulePageCompletion } from "@/lib/types/modules";
import { QuizAttempt } from "@/lib/types/quizzes";
import { ArrowLeftIcon, ArrowRightIcon, PencilSquareIcon, PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { KeywordSearch } from "./keyword-search";
import { InfoIcon } from "@/components/ui/info";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { LearningObjective } from "@/lib/types/course";
import { ListItem, UnorderedList } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";

type LearningModuleFrameProps = {
    courseId: number;
    attemptId: number;
    learningModule: LearningModule;
    learningModuleAttempt?: LearningModuleAttempt;
    initialCompletion: LearningModulePageCompletion[];
    pages: LearningModulePage[];
}
export function LearningModuleFrame({ courseId, attemptId, learningModule, learningModuleAttempt, initialCompletion, pages }: LearningModuleFrameProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pageCompletions, setPageCompletions] = useState<number[]>(pages.map((_, index) => {
        const completion = initialCompletion.find(comp => comp.page_number === index);
        return completion ? completion.time_spent : 0;
    }))
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(learningModuleAttempt?.date_submitted !== null)
    const [isOpen, setIsOpen] = useState(false);
    const [isQuizLoading, setIsQuizLoading] = useState(false);

    const timeStartedRef = useRef<number | null>(Date.now());
    const router = useRouter();
    const ActivePage = pages[currentIndex];

    const sendTimeSpent = useCallback(async () => {
        if (!timeStartedRef.current) { return; }

        const timeSpent = Math.floor((Date.now() - timeStartedRef.current)) / 1000;
        try {
            setPageCompletions(prevCompletions =>
                prevCompletions.map((time, index) =>
                    index === currentIndex
                        ? time + timeSpent
                        : time
                )
            );
            await HttpClient.post(`/modules/attempts/${attemptId}/completions/`, {
                page_number: currentIndex,
                time_spent: timeSpent
            });
        }
        catch (error) {
            console.error('Failed to send time spent:', error);
        }
    }, [attemptId, currentIndex]);

    const saveAndExit = async () => {
        await sendTimeSpent();
        router.push(`/learner/courses/${courseId}/preview`)
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const goToPage = (index: number) => {
        setIsComplete(false)
        sendTimeSpent();
        setCurrentIndex(index);
        scrollToTop();
    }

    const next = () => {
        if (currentIndex < pages.length - 1) {
            goToPage(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            goToPage(currentIndex - 1);
        }
    };

    const handleFinish = async () => {
        if (!isSubmitted) {
            await HttpClient.post(`/modules/attempts/${attemptId}/submit/`);
        }
        setIsSubmitted(true);
    }

    const beginQuiz = async () => {
        setIsQuizLoading(true);
        const res = await HttpClient.post<QuizAttempt>(`/content/quizzes/courses/${learningModule.course.id}/attempts/`)
        router.push(`/learner/courses/${learningModule.course.id}/quizzes/attempts/${res.data.id}`);
        setIsQuizLoading(false);
    };

    useEffect(() => {
        if (currentIndex) {
            timeStartedRef.current = Date.now();
        }
    }, [currentIndex, attemptId]);

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-full max-w-7xl p-2">
                    <div className='w-full h-28 bg-gradient-to-r from-gray-50 via-white to-gray-50 text-primary-blue-900 font-bold text-xl rounded-lg overflow-hidden shadow-lg mb-8'>
                        <div className='flex items-center px-6 w-full h-5/6 border-b-2 border-gray-200 flex justify-between'>
                            <div>
                                {learningModule.course.title}
                            </div>

                            <div>
                                <Button href="/learner/courses/instructions" target="_blank" className="m-2" color="light">
                                    Course Instructions
                                </Button>
                                <Button color="light" onClick={saveAndExit}>
                                    Save and Exit
                                </Button>
                            </div>
                        </div>
                        <div className='flex bg-white w-full h-1/6 text-primary-blue-900'>
                            {pages.map((page, index) => {
                                const visited = pageCompletions[index] > 0 || isSubmitted;
                                return (<div
                                    key={index}
                                    className={`flex-1 text-sm flex items-center justify-center transition-all duration-500 ${visited ? "cursor-pointer" : "bg-gray-200 text-gray-400"} ${index === currentIndex ? "bg-primary-orange-500 text-white" : ""}`}
                                    onClick={visited ? () => goToPage(index) : () => null}
                                >
                                    {index + 1}
                                </div>)
                            })}
                        </div>
                    </div>
                    <LearningObjectives courseId={courseId} />
                    <KeywordSearch modulePath={learningModule.module_path} />
                    <ActivePage
                        courseId={courseId}
                        attemptId={attemptId}
                        next={next}
                        prev={prev}
                        goToPage={goToPage}
                        setIsComplete={setIsComplete}
                        handleFinish={handleFinish}
                    />
                </div>
                <div className="flex space-x-2 mt-8">
                    {currentIndex > 0 && <Button onClick={prev} className="w-32"><ArrowLeftIcon />Previous</Button>}
                    {currentIndex < pages.length - 1 &&
                        <>
                            <Button onClick={next} disabled={!(pageCompletions[currentIndex + 1] > 0 || isComplete || isSubmitted)} className="w-32">
                                Next <ArrowRightIcon />
                            </Button>
                            {!(pageCompletions[currentIndex + 1] > 0 || isComplete || isSubmitted) && <InfoIcon info="Complete all content on this page to unlock navigation." />}
                        </>}
                    {currentIndex === pages.length - 1 && <><Button onClick={() => setIsOpen(true)} className="w-32">Begin Quiz<PencilSquareIcon /></Button><InfoIcon info="You may attempt the quiz any number of times. You will not be able to review module content while the quiz is in progress. A score of at least 70% is required to pass." /></>}
                </div>
                <Alert open={isOpen} onClose={setIsOpen}>
                    <AlertTitle>
                        Are you sure you want to begin the graded quiz?
                    </AlertTitle>
                    <AlertDescription>
                        Once you start the quiz, you cannot leave the page until the quiz is submitted. A score of at least 70% is required to pass and receive credit for the course.
                    </AlertDescription>
                    <AlertActions>
                        {!isQuizLoading &&
                            <>
                                <Button color="blue" onClick={beginQuiz} className="w-32 h-8">
                                    Begin Quiz
                                </Button>
                                <Button plain onClick={() => setIsOpen(false)}>
                                    Cancel
                                </Button>
                            </>
                        }
                    </AlertActions>
                    {isQuizLoading && <div className="w-full flex justify-center">
                        <LoadingIcon />
                    </div>}
                </Alert>
            </div>
        </>
    )
}


function LearningObjectives({ courseId }: { courseId: number }) {
    const [objectives, setObjectives] = useState<LearningObjective[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getObjectives = async () => {
            const learningModule = (await HttpClient.get<LearningModule>(`/modules/courses/${courseId}/modules/`)).data;
            setObjectives(learningModule.course.learning_objectives)
            setLoading(false)
        }

        getObjectives()
    }, [])

    return (
        <div className="bg-gray-50 p-4 rounded-md my-4 text-primary-blue-900 shadow-sm">
            <dl>
                <Disclosure as="div" className="py-6 first:pt-0 last:pb-0">
                    <dt>
                        <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base/7 font-semibold">Learning Objectives</span>
                            <span className="ml-6 flex h-7 items-center">
                                <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                <MinusIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                            </span>
                        </DisclosureButton>
                        <Divider className="my-2" />
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                        {loading && <LoadingIcon />}
                        {!loading && <UnorderedList>
                            {objectives.map((obj, index) => (
                                <ListItem key={index}>
                                    {obj.objective}

                                </ListItem>
                            ))}
                        </UnorderedList>}
                    </DisclosurePanel>
                </Disclosure>
            </dl>
        </div>
    )
}
