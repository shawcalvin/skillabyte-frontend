"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Video } from "@/components/ui/media";
import { Text, TextLink } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"AI History"} {...props}>
                <Text>
                    Artificial Intelligence (AI) refers to the creation of technologies that can mimic human cognitive functions such as reasoning and learning. The origins of AI trace back to the 1950s, specifically to the 1956 Dartmouth Conference, where the term “artificial intelligence” was officially introduced. This pivotal conference brought together scientists eager to build machines that could emulate human thought, leading to the development of the first AI programs. Since that time, there have been ups and downs in the development of AI.
                </Text>
                <Text>
                    The following video will give you a brief history of AI&apos;s growth and transformation from its inception to the 2000s. Just for fun, the video script, actors, and voices are created using AI. The company <TextLink href="https://www.synthesia.io/">Synthesia</TextLink> allows for creating AI videos using AI avatars. There&apos;s the first application of how AI is changing business. Creating videos, with real looking and sounding avatars is now very easy to do.
                </Text>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-genai/Skillabyte+Intro+to+GenAI+Decades+video.mp4"
                    size="48rem"
                    className="my-8 rounded-md"
                    center
                />
            </ModuleContainer>
        </>
    );
}