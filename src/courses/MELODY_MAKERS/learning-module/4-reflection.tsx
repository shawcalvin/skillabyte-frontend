"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { FreeResponseQuestion } from "@/components/interactive/questions";
import { ChatFeedback } from "@/components/interactive/feedback";
import { Heading } from "@/components/ui/heading";
import { ChatbotModel } from "@/lib/enums/chatbot";
import { LearningModulePageProps } from "@/lib/types/modules";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Reflection"} isComplete={false} {...props}>
                <Heading>Interview Feedback</Heading>
                <ChatFeedback
                    courseId={props.courseId}
                    attemptId={props.attemptId}
                    promptIndex={1}
                    model={ChatbotModel.GPT4o_MINI}
                />
                <Heading>Self-Evaluation</Heading>
                <Text>
                    Review the feedback provided and provide a written reflection on how you can improve your audit interviewing skills in the future (25 words minimum).
                </Text>
                <FreeResponseQuestion
                    minWords={30}
                    setIsComplete={() => props.setIsComplete(true)}
                />
                <Text>
                    If you would like one more chance to interview Noah, please click &quot;Try Again&quot;. If you are ready to move onto the conclusion, click &quot;Next&quot;. If you interview Noah again, he will not remember anything from your previous interview.
                </Text>
                <div className="w-full flex justify-center">
                    <Button color="light" onClick={props.prev} className="w-32">
                        Try Again
                    </Button>
                </div>
            </ModuleContainer>
        </>
    )
}