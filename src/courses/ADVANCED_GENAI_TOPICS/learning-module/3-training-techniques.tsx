"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Video } from "@/components/ui/media";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Pre-Training and Post-Training Techniques"} {...props}>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/advanced-genai-topics/Advanced+GenAI+Pre+and+Post+Training.mp4"
                    size="48rem"
                    className="my-8 rounded-md"
                    center
                />
            </ModuleContainer>
        </>
    );
}