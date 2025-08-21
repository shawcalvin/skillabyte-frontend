"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Video } from "@/components/ui/media";
import { Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Challenges"} {...props}>
                <Text>The following video discusses a few of the challenges that come from using AI in accounting.</Text>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-genai/Intro+to+GenAI+Challenges.mp4"
                    size="48rem"
                    className="my-8 rounded-md"
                    center
                />
            </ModuleContainer>
        </>
    );
}