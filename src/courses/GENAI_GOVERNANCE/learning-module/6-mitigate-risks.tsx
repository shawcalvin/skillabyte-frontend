"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";
import { Video } from "@/components/ui/media";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"How the Framework Helps Mitigate Risks"} {...props}>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/genai-governance/Advanced+GenAI+-+how+framework+helps+with+risks.mp4"
                    size="48rem"
                    center
                    className="my-8 rounded-md"
                />
            </ModuleContainer>
        </>
    );
}