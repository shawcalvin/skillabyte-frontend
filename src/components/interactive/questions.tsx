"use client"

import React, { useState } from "react"
import { Radio, RadioField, RadioGroup } from "../ui/radio"
import { Label } from "../ui/fieldset"
import { Button } from "../ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid"
import { Tile } from "../ui/tile"
import { UnprotectedQuestion, UnprotectedQuiz } from "@/lib/types/quizzes"
import { Textarea } from "../ui/textarea"
import { Markdown } from "../ui/markdown"
import { Input } from "../ui/input"

type MultipleChoiceQuestionProps = {
    index: number;
    question: UnprotectedQuestion;
    selectedIndex: number | null;
    onAnswerSelect: (index: number, selectedAnswerIndex: number) => void;
    submitted: boolean | null;
    onAnswerSubmit: (index: number, isCorrect: boolean) => void;
}
export function MultipleChoiceQuestion({ index, question, selectedIndex, onAnswerSelect, submitted, onAnswerSubmit }: MultipleChoiceQuestionProps) {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(selectedIndex);

    const handleSelectionChange = (e: string) => {
        setSelectedAnswerIndex(parseInt(e))
        onAnswerSelect(index, parseInt(e))
    };

    const checkAnswer = () => {
        if (selectedAnswerIndex !== null) {
            const isCorrect = question.answers[selectedAnswerIndex].isCorrect;
            onAnswerSubmit(index, isCorrect);
        }
    };

    return (
        <>
            <div className="flex justify-between mb-2">
                <Markdown>{question.question}</Markdown>
                <Button
                    onClick={checkAnswer}
                    color="light"
                    className="h-8 ml-4 text-xs text-nowrap"
                >
                    Check Answer
                </Button>
            </div>
            <RadioGroup value={selectedIndex !== null ? selectedIndex.toString() : ""} onChange={(e) => handleSelectionChange(e)}>
                {question.answers.map((answer, index) => (
                    <RadioField key={index}>
                        <Radio color='orange' value={index.toString()}
                        />
                        <Label>{answer.answer}</Label>
                    </RadioField>
                ))}
            </RadioGroup>
            {submitted !== null && selectedIndex !== null &&
                <div className="w-full space-y-5 mt-2">
                    <div className={`${question.answers[selectedIndex].isCorrect ? 'border-green-500 bg-green-100' : 'border-red-500 bg-red-100'} text-sm mt-8 border-2 p-4 rounded-md`}>
                        {question.answers[selectedIndex].isCorrect ? '✅' : '❌'} {question.answers[selectedIndex].feedback}
                    </div>
                </div>
            }
        </>
    );
}

type ReviewQuizProps = {
    setIsComplete: () => void;
    quiz: UnprotectedQuiz;
}
export function ReviewQuiz({ setIsComplete, quiz }: ReviewQuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndexes, setSelectedAnswerIndexes] = useState<(number | null)[]>(Array(quiz.length).fill(null));
    const [questionResults, setQuestionResults] = useState<(boolean | null)[]>(Array(quiz.length).fill(null));

    const next = () => {
        if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const prev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const onAnswerSelect = (index: number, selectedAnswerIndex: number) => {
        const updatedAnswerIndexes = [...selectedAnswerIndexes];
        updatedAnswerIndexes[index] = selectedAnswerIndex;
        const updatedQuestionResults = [...questionResults];
        updatedQuestionResults[index] = null;
        setSelectedAnswerIndexes(updatedAnswerIndexes);
        setQuestionResults(updatedQuestionResults);
    };

    const onAnswerSubmit = (index: number, isCorrect: boolean) => {
        const updatedQuestionResults = [...questionResults];
        updatedQuestionResults[index] = isCorrect;
        setQuestionResults(updatedQuestionResults);
        if (updatedQuestionResults.every((entry) => entry === true)) {
            setIsComplete();
        }
    }

    return (
        <Tile center>
            <div className="mb-8">
                <MultipleChoiceQuestion
                    index={currentQuestionIndex}
                    question={quiz[currentQuestionIndex]}
                    selectedIndex={selectedAnswerIndexes[currentQuestionIndex]}
                    onAnswerSelect={onAnswerSelect}
                    submitted={questionResults[currentQuestionIndex]}
                    onAnswerSubmit={onAnswerSubmit}
                />
            </div>
            {quiz.length > 1 &&
                <>
                    <div className="mt-4 flex justify-between">
                        <Button
                            onClick={prev}
                            disabled={currentQuestionIndex === 0}
                            color="light"
                        >
                            <ChevronLeftIcon />
                        </Button>
                        <Button
                            onClick={next}
                            disabled={currentQuestionIndex === quiz.length - 1}
                            color="light"
                        >
                            <ChevronRightIcon />
                        </Button>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">Question {currentQuestionIndex + 1} of {quiz.length}</p>
                </>}
        </Tile>
    );
}

type FreeResponseProps = {
    minWords?: number;
    maxWords?: number;
    minChars?: number;
    maxChars?: number;
    setIsComplete: () => void;
}
export function FreeResponseQuestion({ minWords, maxWords, minChars, maxChars, setIsComplete }: FreeResponseProps) {
    const [input, setInput] = useState("");
    const [count, setCount] = useState(0)
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedInput = e.target.value;
        setInput(updatedInput);
        if (minChars || maxChars) {
            setCount(updatedInput.trim().length);
        }
        else {
            setCount(updatedInput.trim().split(/\s+/).filter(Boolean).length);
        }
    }

    const handleSubmit = () => {
        const isCharCount = minChars || maxChars;
        const unit = isCharCount ? "characters" : "words";

        const min = isCharCount ? minChars : minWords;
        const max = isCharCount ? maxChars : maxWords;

        if ((!min || count >= min) && (!max || count <= max)) {
            setError("");
            setIsComplete();
        } else if (min && count < min) {
            setError(`Please enter at least ${min} ${unit}.`);
        } else if (max && count > max) {
            setError(`Please enter no more than ${max} ${unit}.`);
        }
    }

    const countDisplay = () => {
        const isCharCount = minChars || maxChars;
        const unit = isCharCount ? "character" : "word";
        const plural = count === 1 ? "" : "s";

        let textColor = "text-gray-400";

        const min = isCharCount ? minChars : minWords;
        const max = isCharCount ? maxChars : maxWords;

        if (min && count > min) {
            textColor = "text-green-400";
        } else if (max && count > max) {
            textColor = "text-red-500";
        }

        return (
            <p className={`px-8 ${textColor} text-sm w-36`}>
                {`${count} ${unit}${plural}`}
            </p>
        );
    };

    return (
        <div className="w-full">
            <form className="w-full mb-4">
                <Textarea
                    value={input}
                    onChange={handleChange}
                    className="h-64"
                    resizable={false}
                />
            </form>
            <div className="w-full flex justify-between">
                <p className="text-sm font-semibold text-red-500 pl-4">
                    {error}
                </p>
                <div className="flex justify-end items-center">
                    {countDisplay()}
                    <Button color="light" onClick={handleSubmit} className="w-32">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export function SelectManyQuestion() {
    return (
        <></>
    )
}

type ShortInputProps = {
    answers: string[];
    feedback?: {
        correct?: string;
        incorrect?: string;
    };
    explanation?: string | React.ReactNode;
    handleFinish?: () => void;
}
export function ShortInputQuestion({
    answers,
    feedback = {
        correct: "Correct!",
        incorrect: "Incorrect!"
    },
    explanation,
    handleFinish
}: ShortInputProps) {
    const [response, setResponse] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [attempts, setAttempts] = useState(0);

    const submit = () => {
        const cleanedResponse = response.trim().toLowerCase();
        if (cleanedResponse.length == 0) {
            return;
        }

        const isCorrect = answers.some((answer) => answer.toLowerCase() === cleanedResponse)
        if (isCorrect || attempts == 1) {
            handleFinish?.();
        }

        setCorrect(isCorrect);
        setSubmitted(true);
        setAttempts(prev => prev + 1)
    }

    return (
        <>
            <Input
                className="w-full max-w-64"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
            />
            <Button color="blue" onClick={submit} className="w-32 my-2">
                Submit
            </Button>
            {submitted && (
                <div className="w-full space-y-5 my-4">
                    <div className={`${correct ? 'border-green-500 bg-green-100 animate-bounce' : 'border-red-500 bg-red-100 animate-shake'} text-sm mt-8 border-2 p-4 rounded-md`}>
                        {correct ? `✅ ${feedback?.correct}` : `❌ ${feedback?.incorrect}`}
                    </div>
                </div>
            )}
            {explanation && (correct || attempts >= 2) && <div>
                {explanation}
            </div>}
        </>
    )
}