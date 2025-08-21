"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Strong, Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Dealing With Challenges"} {...props}>
                <Text>
                    Here are some possible solutions to resolve the challenges previously discussed.
                </Text>

                <Text><Strong>Human Oversight</Strong>: It&apos;s important for users of AI to take an active role in ensuring the accuracy of AI outputs by thoroughly cross-checking and validating the information generated. This involves comparing AI outputs with factual data, confirming accuracy, and addressing any inconsistencies. By incorporating rigorous human review, organizations can reduce the risks associated with AI-generated errors. This approach, often referred to as “human-in-the-middle,” emphasizes the responsibility of a human operator to guarantee the quality and accuracy of AI outputs.</Text>

                <Text><Strong>Prompt Engineering</Strong>: Crafting precise and detailed prompts can significantly enhance the effectiveness of AI models, guiding them to produce more accurate and relevant results. By providing specific instructions on how the AI should behave or what to focus on, users can reduce the likelihood of errors or irrelevant responses, helping to ensure that the outputs meet the intended objectives.</Text>

                <Text><Strong>Ensuring Transparency</Strong>: Encouraging AI to explain its reasoning or how it reached a particular conclusion can help users understand the underlying processes and identify potential errors or hallucinations. This transparency is crucial for interpreting AI outputs effectively and involves asking the AI to outline its thought process or show how it derived its results, such as by prompting it with “explain your reasoning” or “demonstrate how you arrived at this answer.”</Text>

                <Text><Strong>Robust Data Training Protocols</Strong>: Using comprehensive and well-structured data training protocols, alongside diverse and representative datasets, can help reduce biases in AI outputs, promoting fairness and inclusivity. For instance, training an AI model on a narrow set of images representing only one ethnicity would limit its ability to generate diverse outputs. Expanding the dataset to include a wider range of demographics ensures that the AI can produce more balanced and representative results.</Text>

            </ModuleContainer>
        </>
    );
}