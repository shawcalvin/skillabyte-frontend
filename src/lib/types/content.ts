import { Course } from "./course";

export type AnswerChoice = {
    id: number;
    question: number;
    answer: string;
    answer_num: number;
}

export type AnswerChoiceDetails = {
    id: number;
    question: number;
    answer: string;
    answer_num: number;
    is_correct: boolean;
    feedback: string;
}

export type QuizQuestion = {
    id: number;
    question: string;
    question_num: number;
    answer_choices: AnswerChoice[]
}

export type QuizQuestionDetails = {
    id: number;
    question: number;
    question_num: number;
    answer_choices: AnswerChoiceDetails[];
}

export type Quiz = {
    id: number;
    course: Course;
    title: string;
    description: string;
    questions: QuizQuestion[];
}

export type QuizDetails = {
    id: number;
    course: Course;
    title: string;
    description: string;
    questions: QuizQuestionDetails[]
}

export type QuizQuestionSummary = {
    id: number;
    quiz: number;
    question: string;
    question_num: number;
}

export type QuizQuestionCompletion = {
    question: QuizQuestionSummary;
    given_answer: number;
}

export type QuizAttempt = {
    id: number;
    organization_learner: number;
    quiz: Quiz;
    time_started: string;
    time_submitted: string;
    question_completions: QuizQuestionCompletion[];
    score: number;
}