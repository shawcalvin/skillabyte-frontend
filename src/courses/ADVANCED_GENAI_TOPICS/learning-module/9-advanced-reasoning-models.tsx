"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Video } from "@/components/ui/media";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Runtime Strategies: Advanced Reasoning Models"} {...props}>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/advanced-genai-topics/Advanced+GenAI+-+Advanced+Reasoning+Models.mp4"
                    size="48rem"
                    center
                    className="my-8 rounded-md"
                />
            </ModuleContainer>
        </>
    );
}