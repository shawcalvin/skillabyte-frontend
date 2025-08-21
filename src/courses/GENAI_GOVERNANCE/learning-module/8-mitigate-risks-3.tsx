"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Video } from "@/components/ui/media";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Who should Drive the Maturity Model Evaluation?"} {...props}>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/genai-governance/Advanced+GenAI+Who+should+drive.mp4"
                    size="48rem"
                    center
                    className="my-8 rounded-md"
                />
            </ModuleContainer>
        </>
    );
}