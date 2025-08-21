"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Image } from "@/components/ui/media";
import { Text, TextLink } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"AI Governance"} {...props}>
                <Text>
                    AI governance is crucial and should be a priority for all organizations. To effectively manage the risks and rewards of Generative AI, organizations need robust governance frameworks. Although various frameworks exist, a notable one is a free, widely accessible governance framework and maturity model developed by a group of academics and practitioners, based on insights from over 1,000 professionals and experts. This framework stands out for its adaptability across organizations of all sizes and its user-friendly design. You can access this free resource at <TextLink href="https://genai.global">genai.global.</TextLink>
                </Text>
                <Text>
                    As seen in the image below, the framework covers five key domains: Strategic Alignment and Control Environment, Data and Compliance Management, Operational and Technology Management, Human, Ethical, and Social Considerations, and Transparency, Accountability, and Continuous Improvement. Each domain addresses specific risks and offers control considerations to help organizations align GenAI initiatives with their goals, ensure compliance with legal standards, integrate GenAI into operations, manage ethical and social impacts, and maintain transparency and accountability in decision-making.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-genai/framework-original.svg"
                    alt="GenAI Governance Framework - Genai Global"
                    className="rounded-lg my-8"
                    center
                />
                <Text>
                    The website also features a free maturity model that helps organizations assess their AI governance practices. This tool outlines key control considerations and allows organizations to evaluate their performance in each area, helping them identify strengths and weaknesses and create a targeted improvement plan.
                </Text>
                <Text>
                    Whether you use this framework, or another one, a GenAI governance framework is valuable because it offers a comprehensive and flexible guide for organizations navigating the evolving landscape of GenAI. As these technologies become increasingly integrated into business operations, a framework supports organizations in managing the unique risks they present. Frameworks encourage responsible and strategic use of GenAI by providing clear guidance on policy creation, risk management, stakeholder involvement, and ongoing enhancement of AI practices. By implementing a framework, organizations of all sizes can effectively leverage GenAI while addressing potential risks, driving innovation, and maintaining trust and compliance with regulatory standards.
                </Text>

            </ModuleContainer>
        </>
    );
}