"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";
import { InteractiveWidget } from "./interactive-widget";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Interactive Activities"} isComplete={false} {...props}>
                <Text>
                    In the following activities, you will practice with a LLM to see how it can help you to be more efficient and effective. Open the LLM that for which you previously registered. When doing these examples, do not put in client information or other sensitive data. Now do the following.
                </Text>
                <InteractiveWidget setIsComplete={props.setIsComplete} />
            </ModuleContainer>
        </>
    );
}