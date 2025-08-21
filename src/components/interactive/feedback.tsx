"use client"

import { HttpClient } from "@/lib/client";
import { ChatbotModel } from "@/lib/enums/chatbot";
import { ChatConversation, ChatFeedback as Feedback } from "@/lib/types/chatbot";
import { useEffect, useRef, useState } from "react";
import { LoadingIcon } from "../ui/loading-icon";
import { Conversations } from "@/lib/conversations";
import { Button } from "../ui/button";
import Markdown from "react-markdown";

type FeedbackProps = {
    courseId: number;
    attemptId: number;
    promptIndex: number;
    model: ChatbotModel;
    prepend?: boolean;
    className?: string;
}
export function ChatFeedback({ courseId, attemptId, promptIndex, model, prepend = false, className }: FeedbackProps) {
    const [conversations, setConversations] = useState<ChatConversation[]>([]);
    const [selectedConversation, setSelectedConversation] = useState<ChatConversation | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getConversationsWithFeedback = async () => {
            const conversations = await Conversations.getConversations(courseId, attemptId, promptIndex);
            const conversationsWithFeedback = await Promise.all(conversations.map(async (conversation) => {
                if (conversation.feedback) {
                    return conversation;
                }

                const feedback = (await HttpClient.post<Feedback>(`/content/chatbots/conversations/${conversation.id}/feedback/`, {
                    model: model,
                    prepend: prepend
                })).data;

                return {
                    ...conversation,
                    feedback: feedback.feedback
                };
            }));

            setConversations(conversationsWithFeedback);
            setIsLoading(false);
        };

        setIsLoading(true);
        getConversationsWithFeedback();
    }, [attemptId, courseId, promptIndex, model, prepend]);

    const loadConversation = async () => {
        setSelectedConversation(conversations[conversations.length - 1]);
    }

    if (isLoading) {
        return (
            <SkeletonFeedback>
                <div className="h-full flex justify-center items-center">
                    <LoadingIcon />
                </div>
            </SkeletonFeedback>
        )
    }

    if (!isLoading && !selectedConversation) {
        return (
            <SkeletonFeedback>
                <div className="h-full flex justify-center items-center">
                    <Button color="light" onClick={loadConversation}>Get Feedback</Button>
                </div>
            </SkeletonFeedback>
        )
    }

    return (
        <>
            <div className="flex h-full rounded-md overflow-hidden border border-gray-200">
                <div className="w-[5%] bg-gray-100 border-r border-gray-200 border-l-4">
                    {conversations.map((conversation, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedConversation(conversation)}
                            className={`cursor-pointer p-2 text-sm text-center font-medium ${selectedConversation === conversation ? 'bg-white hover:bg-white' : 'hover:bg-gray-200'
                                } transition-colors`}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
                <div className="w-[95%] h-[32rem]">
                    <div className="h-[5rem] bg-gray-200">
                        <div className="text-nowrap w-full h-full flex items-center space-x-2">
                            <div className="text-lg font-bold p-4">
                                Chat Feedback
                            </div>
                        </div>
                    </div>
                    <div className="h-[27rem] bg-gray-50">
                        <div className="py-4 h-full overflow-y-auto p-4">
                            {!selectedConversation && "Select a completed conversation to receive feedback. If you have no completed conversations, make sure you've completed the associated chat conversation."}
                            <Markdown>{selectedConversation && selectedConversation.feedback}</Markdown>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function SkeletonFeedback({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex w-full h-full rounded-md overflow-hidden border border-gray-200">
                <div className="w-[5%] min-w-[2rem] bg-gray-100 border-r border-gray-200 border-l-4" />
                <div className="w-[95%] h-[32rem]">
                    <div className="h-[5rem] bg-gray-200">
                        <div className="w-full h-full flex items-center space-x-2">
                            <div className="h-8 w-64 bg-gray-100 mx-4 rounded-lg animate-pulse" />
                        </div>
                    </div>
                    <div className="h-[27rem] bg-gray-50">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}