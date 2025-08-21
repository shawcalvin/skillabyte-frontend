import { ChatbotModel } from "@/lib/enums/chatbot";

export type ChatMessage = {
    role: 'user' | 'assistant';
    content: string;
}

export type ChatConversation = {
    id: number;
    messages: ChatMessage[];
    feedback: string;
    model: ChatbotModel;
    attempt: number;
}

export type ChatFeedback = {
    feedback: string;
}

export type ChatbotInitializationResponse = {
    conversation_id: number;
    response: string;
}

export type ChatbotResponse = {
    response: string;
}

export type ChatbotProps = {
    attemptId: number;
    promptId: number;
    model: ChatbotModel;
    displayName: string;
    profilePicture?: string;
    maxMessages: number;
    maxAttempts: number;
    className?: string;
    completed: boolean;
    setCompleted: () => void;
}

export type ChatbotFeedbackProps = {
    attemptId: number;
    promptId: number;
    model: ChatbotModel;
    prepend: boolean;
    className?: string;
    completed: boolean;
    setCompleted: () => void;
}