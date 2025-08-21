"use client"

import { ChatbotModel } from "@/lib/enums/chatbot";
import { ChatConversation } from "@/lib/types/chatbot";
import React, { useEffect, useRef, useState } from "react";
import { LoadingIcon } from "../ui/loading-icon";
import { Button } from "../ui/button";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { IoSend } from "react-icons/io5";
import { Conversations } from "@/lib/conversations";
import Markdown from "react-markdown";
import { SetStateFunction } from "@/lib/types/modules";

type ChatbotProps = {
    courseId: number;
    attemptId: number;
    promptIndex: number;
    model: ChatbotModel;
    displayName: string;
    profilePicture?: string;
    maxMessages?: number;
    maxAttempts?: number;
    className?: string;
    setIsComplete?: () => void;
}
export function Chatbot({ courseId, attemptId, promptIndex, model, displayName, profilePicture, maxMessages = 30, maxAttempts = 1, setIsComplete, className }: ChatbotProps) {
    const [conversations, setConversations] = useState<ChatConversation[]>([]);
    const [selectedConversation, setSelectedConversation] = useState<ChatConversation | null>(null);
    const [input, setInput] = useState("");
    const [complete, setComplete] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isTyping]);

    useEffect(() => {
        const getConversations = async () => {
            const conversations = await Conversations.getConversations(courseId, attemptId, promptIndex);
            setConversations(conversations);

            conversations.forEach(conversation => {
                checkFinished(conversation);
            });

            setIsLoading(false);
        }

        setIsLoading(true);
        getConversations();
    }, [attemptId, courseId, promptIndex]);

    useEffect(() => {
        checkFinished(selectedConversation)
    }, [selectedConversation]);

    const checkFinished = (conversation: ChatConversation | null) => {
        if (conversation !== null && Conversations.isFinished(conversation, maxMessages)) {
            handleFinish(conversation);
        }
    }

    const handleFinish = (conversation: ChatConversation | null) => {
        setComplete(true);
        if (setIsComplete) {
            setIsComplete();
        }
    }

    const startConversation = async () => {
        setIsLoading(true);
        const conversation = await Conversations.startConversation(courseId, attemptId, promptIndex, model);
        conversations.push(conversation);

        setConversations(conversations);
        setSelectedConversation(conversation);
        setIsLoading(false);
    }

    const loadConversation = async () => {
        setSelectedConversation(conversations[conversations.length - 1]);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const message = input.trim();
        setInput('');
        if (!message || !selectedConversation) {
            return;
        }

        setIsTyping(true);

        const newConversation = await Conversations.sendMessage(selectedConversation, message);
        const updatedConversations = Conversations.updateConversations(conversations, newConversation);

        setConversations(updatedConversations);
        setSelectedConversation(newConversation);
        checkFinished(newConversation);

        setIsTyping(false);
    };

    if (isLoading) {
        return (
            <SkeletonChatbot>
                <div className="h-full flex justify-center items-center">
                    <LoadingIcon />
                </div>
            </SkeletonChatbot>
        )
    }

    if (!isLoading && conversations.length === 0) {
        return (
            <SkeletonChatbot>
                <div className="h-full flex justify-center items-center">
                    <Button color="light" onClick={startConversation}>Start New Conversation</Button>
                </div>
            </SkeletonChatbot>
        )
    }

    if (!isLoading && !selectedConversation && conversations.length < maxAttempts) {
        return (

            <SkeletonChatbot>
                <div className="h-full flex justify-center items-center space-x-2">
                    <Button color="light" onClick={loadConversation}>Load Conversations</Button>
                    <Button color="light" onClick={startConversation}>Start New Conversation</Button>
                </div>
            </SkeletonChatbot>
        )
    }

    if (!isLoading && !selectedConversation) {
        return (
            <SkeletonChatbot>
                <div className="h-full flex justify-center items-center">
                    <Button color="light" onClick={loadConversation}>Load Conversations</Button>
                </div>
            </SkeletonChatbot>
        )
    }

    return (
        <>
            <div className="flex w-full h-full rounded-md overflow-hidden border border-gray-200">
                <div className="w-[5%] min-w-[2rem] bg-gray-100 border-r border-gray-200 border-l-4">
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
                        <div className="w-full h-full flex items-center space-x-2">
                            <div className="h-full max-h-[76px] aspect-square ml-4 p-2">
                                {!profilePicture && <UserCircleIcon className="w-full h-full border-2 rounded-full border-primary-blue-500/20" />}
                                {profilePicture && <img src={profilePicture} alt="Chatbot Profile Picture" className="w-full h-full rounded-full border-2 border-primary-blue-500/20" />}
                            </div>
                            <div className="text-lg font-semibold">
                                {displayName}
                            </div>
                        </div>
                    </div>
                    <div className="h-[21rem] bg-gray-50">
                        <div className="py-4 h-full overflow-y-auto">
                            {selectedConversation!.messages.filter(message => Conversations.cleanMessage(message.content).length > 0).map((message, index) => (
                                <div key={index} className={`flex my-2 mx-6 text-xs ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                                    <div className={`px-4 py-2 max-w-[70%] rounded-xl shadow-sm ${message.role === 'assistant' ? 'bg-gray-200 text-gray-800 rounded-bl-none' : 'bg-primary-orange-500 text-gray-50 rounded-br-none'}`}>
                                        <Markdown>{Conversations.cleanMessage(message.content)}</Markdown>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex flex-row justify-center w-1/12 my-1 p-3 rounded-xl">
                                    <div className="bg-gray-400 rounded-full w-1 h-1 animate-pulse m-1" />
                                    <div className="bg-gray-400 rounded-full w-1 h-1 animate-pulse delay-500 m-1" />
                                    <div className="bg-gray-400 rounded-full w-1 h-1 animate-pulse delay-1000 m-1" />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                    <div className="h-[6rem] bg-gray-50 p-1 flex flex-col justify-center">
                        {!complete &&
                            <form className="flex w-full items-center" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className="text-xs flex-grow w-full h-full p-2 rounded-xl m-2 border border-gray text-primary-blue-900"
                                    placeholder="Type to respond..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button type="submit">
                                    <IoSend className="text-gray-400 w-6 h-6" />
                                </button>
                            </form>
                        }
                        {complete && (
                            <form className="flex w-full items-center">
                                <input
                                    type="text"
                                    className="text-xs flex-grow w-full h-full p-2 rounded-xl m-2 border border-gray text-primary-blue-900"
                                    placeholder="You are viewing a completed conversation."
                                    disabled
                                />
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <Button color="light" onClick={() => handleFinish(selectedConversation)} className="m-2">End Conversation</Button>
        </>
    )
}

function SkeletonChatbot({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex w-full h-full rounded-md overflow-hidden border border-gray-200">
                <div className="w-[5%] min-w-[2rem] bg-gray-100 border-r border-gray-200 border-l-4" />
                <div className="w-[95%] h-[32rem]">
                    <div className="h-[5rem] bg-gray-200">
                        <div className="w-full h-full flex items-center space-x-2">
                            <div className="h-full max-h-[76px] aspect-square ml-4 p-2">
                                <UserCircleIcon className="w-full h-full text-gray-100 rounded-full animate-pulse" />
                            </div>
                            <div className="w-96 h-8 bg-gray-100 rounded-lg animate-pulse" />
                        </div>
                    </div>
                    <div className="h-[21rem] bg-gray-50">
                        {children}
                    </div>
                    <div className="h-[6rem] bg-gray-50 flex items-end">
                        <div className="h-10 w-full mx-4 mb-4 bg-gray-100 rounded-lg animate-pulse">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}