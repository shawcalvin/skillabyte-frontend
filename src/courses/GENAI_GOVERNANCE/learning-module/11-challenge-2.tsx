"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";
import { ChallengeTwoWidget } from "./challenge-2-widget";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Challenge 2 - Apply the GenAI Governance Framework to address real-world situations in accounting practices."} isComplete={false} {...props}>
                <Text>
                    Welcome, consultant! Your mission is to guide TechnoVista Solutions through the complex world of GenAI governance. As you progress, the scenarios will become more challenging. Choose wisely! If at any point you make the wrong choice, you will have to start over!
                </Text>
                <ChallengeTwoWidget setIsComplete={() => props.setIsComplete(true)} />
            </ModuleContainer>
        </>
    );
}