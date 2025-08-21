"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Chatbot } from "@/components/interactive/chatbot";
import { ChatbotModel } from "@/lib/enums/chatbot";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Interview"} isComplete={false} {...props}>
                <Chatbot
                    courseId={props.courseId}
                    attemptId={props.attemptId}
                    promptIndex={1}
                    model={ChatbotModel.GPT4o}
                    displayName="Noah Roberts"
                    profilePicture="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/noah-young.png"
                    maxAttempts={2}
                    setIsComplete={() => props.setIsComplete(true)}
                />
            </ModuleContainer>
        </>
    )
}