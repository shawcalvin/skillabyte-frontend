"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";
import { Video } from "@/components/ui/media";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Databases and Querying"} {...props}>
                <Text>Watch the following video to learn about databases and querying. This knowledge will give you the foundation to understand SQL!</Text>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/SQL+Video.mp4"
                    size="48rem"
                    className="my-8 rounded-md"
                    center
                />
            </ModuleContainer>
        </>
    );
}