"use client"

import React, { useEffect, useRef, useState } from "react";
import { Subheading } from "../ui/heading";
import { Button } from "../ui/button";
import { Radio, RadioField, RadioGroup } from "../ui/radio";
import { Label } from "../ui/fieldset";
import { ProtectedQuestion, ProtectedQuiz } from "@/lib/types/quizzes";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "../ui/alert";
import { useRouter } from "next/navigation";
import { HttpClient } from "@/lib/client";
import { LoadingIcon } from "../ui/loading-icon";

const DEBOUNCE_DELAY = 5000;

export function GradedQuestion({ question, selectedAnswerId, onAnswerSelect }: { question: ProtectedQuestion, selectedAnswerId: number | null, onAnswerSelect: (answerId: number) => void; }) {
    return (
        <>
            <Subheading className="mb-4">{`${question.question_num ? question.question_num + ". " : ""}`}{question.question}</Subheading>
            <RadioGroup value={selectedAnswerId ? selectedAnswerId.toString() : ""} onChange={(e) => onAnswerSelect(parseInt(e))}>
                {question.answer_choices.sort(answer => answer.answer_num).map((answer, index) => (
                    <RadioField key={index}>
                        <Radio color='orange' value={answer.id.toString()}
                        />
                        <Label>{answer.answer}</Label>
                    </RadioField>
                ))}
            </RadioGroup>
        </>
    );
}

export function GradedQuiz({ courseId, attemptId, quiz, givenAnswers }: { courseId: number, attemptId: number, quiz: ProtectedQuiz, givenAnswers: (number | null)[] }) {
    const questions = quiz.questions;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(givenAnswers);
    const [recordedAnswers, setRecordedAnswers] = useState<(number | null)[]>(givenAnswers)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (!isSubmitted) {
                event.preventDefault();
                event.returnValue = '';
            }
        };
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [isSubmitted]);

    const recordAnswer = async (questionIndex: number, answerId: number) => {
        if (recordedAnswers[questionIndex] !== answerId) {
            try {
                await HttpClient.post(`/content/quizzes/attempts/${attemptId}/questions/${questions[questionIndex].id}/answer/`, {
                    answer_id: answerId
                })
                const updatedRecordedAnswers = [...recordedAnswers];
                updatedRecordedAnswers[questionIndex] = answerId;
                setRecordedAnswers(updatedRecordedAnswers);
            } catch (error) {
                console.warn(error)
            }
        }
    }

    const handleAnswerSelect = (questionIndex: number, answerId: number) => {
        const updatedSelectedAnswers = [...selectedAnswers];
        updatedSelectedAnswers[questionIndex] = answerId;
        setSelectedAnswers(updatedSelectedAnswers);

        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
            recordAnswer(questionIndex, answerId);
        }, DEBOUNCE_DELAY);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        const answersToSubmit = selectedAnswers.map((answerId, index) => {
            return {
                question: questions[index].id,
                answer: answerId,
            };
        });

        await HttpClient.post(`/content/quizzes/attempts/${attemptId}/grade/`, {
            quiz: quiz.id,
            answers: answersToSubmit
        })
        setIsSubmitted(true);
        setIsOpen(false);

        router.push(`/learner/courses/${courseId}/preview`);
        setIsLoading(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
        setIsSubmitted(true);
    }

    const handleClose = () => {
        setIsOpen(false);
        setIsSubmitted(false);
    }

    const navigateToQuestion = (index: number) => {
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
            debounceTimeoutRef.current = null;
        }

        const answerId = selectedAnswers[currentQuestionIndex];
        if (answerId !== null) {
            recordAnswer(currentQuestionIndex, answerId);
        }

        setCurrentQuestionIndex(index);
    };

    const next = () => {
        if (currentQuestionIndex < questions.length - 1) {
            navigateToQuestion(currentQuestionIndex + 1);
        }
    };

    const prev = () => {
        if (currentQuestionIndex > 0) {
            navigateToQuestion(currentQuestionIndex - 1);
        }
    };

    const allQuestionsAnswered = selectedAnswers.every((answerId) => answerId !== null);

    return (
        <div>
            <GradedQuestion
                question={questions[currentQuestionIndex]}
                selectedAnswerId={selectedAnswers[currentQuestionIndex]}
                onAnswerSelect={(answerId: number) => handleAnswerSelect(currentQuestionIndex, answerId)}
            />
            <div className="mt-4 flex justify-between">
                <Button
                    onClick={prev}
                    disabled={currentQuestionIndex === 0}
                    color="light"
                >
                    <ChevronLeftIcon />
                </Button>
                <Button
                    onClick={handleOpen}
                    disabled={!allQuestionsAnswered}
                    className="mt-4 w-32"
                >
                    Submit Quiz
                </Button>
                <Button
                    onClick={next}
                    disabled={currentQuestionIndex === questions.length - 1}
                    color="light"
                >
                    <ChevronRightIcon />
                </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">Question {currentQuestionIndex + 1} of {questions.length}</p>
            <Alert open={isOpen} onClose={setIsOpen}>
                <AlertTitle>
                    Are you sure you want to submit this quiz?
                </AlertTitle>
                <AlertDescription>
                    Once the quiz is submitted, you cannot change your answers.
                </AlertDescription>
                <AlertActions>
                    {!isLoading &&
                        <>
                            <Button plain onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button color="blue" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </>
                    }
                </AlertActions>
                {isLoading &&
                    <div className="w-full flex justify-center">
                        <LoadingIcon />
                    </div>
                }
            </Alert>
        </div>
    );
}