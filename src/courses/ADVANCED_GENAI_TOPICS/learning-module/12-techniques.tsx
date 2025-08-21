"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Image } from "@/components/ui/media";
import { Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Selecting the Right Techniques"} {...props}>
                <Text>
                    Choosing AI techniques requires careful consideration of several factors. Complex tasks might demand multi-agent systems, while data sensitivity concerns could push towards prompting methods that don’t share data. When real-time information is crucial, RAG and tool integration shine. Resources matter too. Time, money, training capabilities, and data availability all play a role in technique selection, as some AI approaches are more resource-intensive than others. It’s not always a single-technique solution, though. Often, a user’s specific needs are best met by blending multiple AI techniques. This combination can leverage the strengths of different approaches, creating a more tailored and effective solution. The key is to assess the unique requirements and constraints of each situation. By doing so, one can select the AI technique—or combination of techniques—that best aligns with the task at hand and available resources. In the end, the goal is to find the most suitable approach for each unique application of AI.
                </Text>
                <Text>
                    We prepared the following graphic to help you think through which technique is most appropriate for a given situation.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/advanced-genai-topics/Skillabyte+-+GenAI2+-+AI+Technique+selection.png"
                    alt="Select the Right AI Technique"
                    size="40rem"
                    className="rounded-lg my-8"
                    center
                />
            </ModuleContainer>
        </>
    );
}