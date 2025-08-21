"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Video } from "@/components/ui/media";
import { Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Emerging Trends"} {...props}>
                <Text>
                    Rapid advancements in AI are continuously broadening the scope and potential of these systems. Enhancements in deep learning techniques and hardware acceleration are driving the development of more sophisticated and robust AI models. As a result, AI is becoming faster, more accurate, and more efficient. Some research indicates that Generative AI&apos;s capabilities are doubling roughly every eight months. To see this evolution in action, check out this brief video clip illustrating the progress in AI video generation from 2023 to 2024.
                </Text>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-genai/AI+videos+2023+vs+2024.mp4"
                    size="48rem"
                    className="mt-8 mb-2 rounded-md"
                    center
                />
                <p className="text-center text-xs text-gray-500 mb-8">This video can be seen at https://www.youtube.com/watch?v=kxuIJAgTepQ</p>
                <Text>
                    AI is rapidly advancing in virtually every conceivable domain, unlocking new avenues for creativity and innovation. For example, AI-generated music isn&apos;t just creating novel compositions but also enriching existing ones with added complexity and depth. Likewise, AI-generated videos are becoming more lifelike, allowing filmmakers and content creators to produce stunning visual effects and animations much more quickly. This progress is revolutionizing creative fields.
                </Text>
                <Text>
                    The swift advancement of AI is also reshaping the workplace. Automation driven by AI is optimizing workflows and boosting productivity across various industries. For instance, Amazon reported they saved $260 million and 4,500 years of developer time by using AI to help take old software and modernize it.
                </Text>
                <Text>
                    The ultimate impact of AI on employment remains uncertain. While some jobs may disappear, new opportunities will arise, and many existing roles will evolve. This shifting job market highlights the need for AI education and training to equip individuals for the future. As AI becomes more integrated into daily life, it is expected to boost efficiency, foster innovation, and enhance the overall quality of life, though this transition may present challenges as we adjust to the complexities of these technological advancements.
                </Text>
            </ModuleContainer>
        </>
    );
}