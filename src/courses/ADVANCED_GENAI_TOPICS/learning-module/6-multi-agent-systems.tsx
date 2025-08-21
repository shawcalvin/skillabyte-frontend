"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

import ClaudeArtifact from './claude-artifact-2'

export default function ModulePage(props: LearningModulePageProps) {

    props.setIsComplete(true);

    return (
        <>
            <ModuleContainer title={"Deployment Strategies: Multi-Agent Systems"} {...props}>
                <ClaudeArtifact />
                <Text>
                    The primary advantage of multi-agent systems is their ability to tackle complex tasks by dividing them into smaller parts, with each agent specialized to perform its task. Despite this advantage, multi-agent GenAI systems come with challenges. The primary risks include increased complexity in managing multiple specialized agents, which can lead to coordination overhead and slower processing times. There’s also a heightened risk of conflicting outputs, where different agents may produce inconsistent or contradictory results. This can make debugging and maintaining consistency across the system more difficult. Additionally, multi-agent systems often require more computational resources, potentially increasing costs. Perhaps most critically, the complex interactions between agents can lead to unexpected behaviors that are hard to predict or control, posing challenges for system reliability and trustworthiness.
                </Text>
            </ModuleContainer>
        </>
    );
}