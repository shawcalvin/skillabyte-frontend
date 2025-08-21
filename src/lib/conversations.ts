import { HttpClient } from "./client";
import { ChatbotModel } from "./enums/chatbot";
import { ChatConversation, ChatMessage } from "./types/chatbot";


export class Conversations {

    static END_KEY = "6To6cWPM"

    static async getConversations(courseId: number, attemptId: number, promptIndex: number): Promise<ChatConversation[]> {
        const res = await HttpClient.get<ChatConversation[]>(`/content/chatbots/courses/${courseId}/attempts/${attemptId}/prompts/${promptIndex}/conversations`);
        return res.data;
    }

    static getUnfinishedConversation(conversations: ChatConversation[], maxMessages: number): ChatConversation | null {
        return conversations.find(conversation => !Conversations.isFinished(conversation, maxMessages)) || null
    }

    static async startConversation(courseId: number, attemptId: number, promptIndex: number, model: ChatbotModel): Promise<ChatConversation> {
        const res = await HttpClient.post<ChatConversation>(`/content/chatbots/courses/${courseId}/attempts/${attemptId}/prompts/${promptIndex}/conversations`, {
            model: model
        });
        return res.data;
    }

    static updateConversations(conversations: ChatConversation[], updatedConversation: ChatConversation): ChatConversation[] {
        return conversations.map(conversation =>
            conversation.id === updatedConversation.id
                ? { ...conversation, ...updatedConversation }
                : conversation
        );
    }

    static addMessage(conversation: ChatConversation, message: string): ChatConversation {
        conversation.messages.push({ role: "user", content: message });
        return conversation;
    }

    static async sendMessage(conversation: ChatConversation, message: string): Promise<ChatConversation> {
        const newMessage: ChatMessage = { role: "user", content: message };
        conversation.messages.push(newMessage);
        const res = await HttpClient.post<ChatMessage>(`/content/chatbots/conversations/${conversation.id}/chat/`, {
            message: message
        });

        conversation.messages.push(res.data);
        return conversation;
    }

    static cleanMessage(message: string) {
        message = message.replace(/\"/g, "")
        return message.replace(/6To6cWPM\.?/, "")
    }

    static isFinished(conversation: ChatConversation, maxMessages: number): boolean {
        const userMessagesCount = conversation.messages.filter((message) => message.role === 'user').length;
        return userMessagesCount >= maxMessages ||
            conversation.messages.some((message) => message.role === 'assistant' && message.content.includes(Conversations.END_KEY));
    }
}