"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Strong, Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Practical Considerations"} {...props}>
                <Text>
                    Implementing generative AI in accounting firms will be a process. Here are some considerations managers should consider related to the implementation process.
                </Text>

                <Text><Strong>Assess Needs</Strong>: Begin by evaluating where AI can be most beneficial. For instance, pinpoint which accounting tasks are ripe for automation and could benefit from AI-enhanced analytics.</Text>

                <Text><Strong>Select Suitable AI Solutions</Strong>: Scrutinize various AI tools and vendors based on their functionality, dependability, and industry standing. AI solutions vary widely, so it&apos;s essential to test different options to find the best fit for your organization.</Text>

                <Text><Strong>Educate Staff and Integrate AI</Strong>: Offer thorough training to help employees get acquainted with AI technologies and their advantages. Seamlessly incorporate AI into current workflows to facilitate a smoother transition for the team.</Text>

                <Text><Strong>Evaluate AI Performance</Strong>: Continuously monitor the effectiveness of AI systems and make necessary adjustments to improve their efficiency. It&apos;s common to refine AI tool choices over time, especially during the initial phases of implementation.</Text>

            </ModuleContainer>
        </>
    );
}