"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";
import { Video } from "@/components/ui/media";
import { ChallengeThreeWidget } from "./challenge-3-widget";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Challenge 3 - Evaluate the maturity level of GenAI implementation in accounting contexts using the provided maturity model."} isComplete={false} {...props}>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/genai-governance/GenAI+Governance+Escape+Room+Video.mp4"
                    size="48rem"
                    center
                    className="my-8 rounded-md"
                />
                <ChallengeThreeWidget setIsComplete={() => props.setIsComplete(true)} />
            </ModuleContainer>
        </>
    );
}