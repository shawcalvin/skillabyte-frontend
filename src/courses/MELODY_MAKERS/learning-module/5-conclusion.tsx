"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Video } from "@/components/ui/media";
import { Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Conclusion"} isFinished={true} {...props}>
                <Text className="text-center">Watch this video carefully as answers to several final questions are listed in it.</Text>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/Melody+Makers+Video.mp4"
                    size="48rem"
                    className="rounded-lg my-8"
                    center
                />
                <Text className="text-center">Now that you&apos;ve completed the case, you&apos;re ready for the quiz. Please click &quot;Begin Quiz&quot; to start. Good luck!</Text>
            </ModuleContainer>
        </>
    )
}