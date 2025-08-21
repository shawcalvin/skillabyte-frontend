"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";
import { InteractiveWidget } from "./interactive-widget";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Practice Prompting Techniques"} isComplete={false} {...props}>
                <Text>
                    You will now practice the various advanced prompting techniques by writing a prompt for each specific scenario. After each prompt, you will receive brief feedback and suggestions on how you could improve your prompt. At the end, you will reflect on what you have learned about prompting.
                </Text>
                <InteractiveWidget courseId={props.courseId} attemptId={props.attemptId} setIsComplete={() => props.setIsComplete(true)} />
            </ModuleContainer>
        </>
    );
}