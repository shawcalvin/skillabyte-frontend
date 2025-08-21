"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, OrderedList, Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {

    return (
        <>
            <ModuleContainer title={"What is GenAI?"} {...props}>
                <Text>
                    Before we explore the advanced Generative AI (GenAI) techniques, let&apos;s briefly revisit what sets GenAI apart from non-GenAI techniques. Unlike traditional AI systems that analyze and interpret existing data, GenAI creates—or generates—new content. It&apos;s the technology behind chatbots that engage in human-like conversations, algorithms that generate realistic images from text descriptions, and systems that can write code or compose music. Popular GenAI large language models (LLMs are GenAI tools that work with text) include OpenAI&apos;s ChatGPT, Anthropic&apos;s Claude, Google&apos;s Gemini, X&apos;s Grok, and Meta&apos;s Llama models. Popular GenAI image generators include OpenAI&apos;s DALL-E, Stability AI&apos;s Stable Diffusion, Midjourney, and Google&apos;s Imagen. There are other GenAI programs for generating videos, music, etc.
                </Text>
                <Text>
                    GenAI models are trained on vast datasets, allowing them to understand and mimic patterns in the training dataset content. This unique capability enables GenAI to:
                </Text>
                <OrderedList>
                    <ListItem>Produce human-like text across various styles and formats.</ListItem>
                    <ListItem>Generate creative content, from art to music.</ListItem>
                    <ListItem>Assist in complex problem-solving by offering novel solutions.</ListItem>
                    <ListItem>Enhance productivity by automating content creation tasks.</ListItem>
                </OrderedList>
                <Text>
                    GenAI is changing report writing, data analysis, and predictive modeling. It&apos;s not just about automation; it&apos;s also about augmenting human capabilities with AI-driven insights and creativity. For instance, in tax planning, GenAI systems can now analyze a company&apos;s financial data, current tax laws, and proposed legislative changes to generate potential tax strategies. These AI-driven strategies can include multiple scenarios, each with detailed explanations of potential tax implications, risk assessments, and suggestions for optimizing tax positions. This allows tax professionals to more quickly evaluate complex tax situations and provide more strategic advice to clients, enhancing both efficiency and the quality of tax planning services.
                </Text>
                <Text>
                    As a second example, Amazon announced in a quarterly earnings announcement they were able to save $260 million in costs and 4,500 years of developer time by using GenAI to help reprogram apps programmed in an older coding language to a new coding language. The GenAI model was trained to understand computer code and then could automatically update old code.
                </Text>
                <Text>
                    As we explore advanced GenAI techniques, keep in mind that we&apos;re building upon this foundation, pushing the boundaries of what&apos;s possible in AI-assisted decision-making and analysis.
                </Text>
            </ModuleContainer>
        </>
    );
}