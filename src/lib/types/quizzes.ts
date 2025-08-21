import { Course } from "./course";

export type ProtectAnswerChoice = {
    id: number;
    question: number;
    answer: string;
    answer_num: number;
}

export type ProtectedQuestion = {
    id: number;
    question: string;
    question_num: number;
    answer_choices: ProtectAnswerChoice[];
}

export type ProtectedQuiz = {
    id: number;
    course: Course;
    title: string;
    description: string;
    questions: ProtectedQuestion[];
}

export type QuizAttempt = {
    id: number;
    learner: number;
    quiz: ProtectedQuiz;
    time_started: string;
    time_submitted: string;
    score: number;
}

export type UnprotectedAnswerChoice = {
    answer: string;
    isCorrect: boolean;
    feedback: string;
}

export type UnprotectedQuestion = {
    question: string;
    answers: UnprotectedAnswerChoice[]
}

export type UnprotectedQuiz = UnprotectedQuestion[];