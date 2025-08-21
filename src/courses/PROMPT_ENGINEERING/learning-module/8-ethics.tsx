"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Video } from "@/components/ui/media";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Prompting Ethics"} {...props}>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/prompt-engineering/Prompt+Engineering+Ethics.mp4"
                    size="48rem"
                    className="my-8 rounded-md"
                    center
                />
            </ModuleContainer>
        </>
    );
}