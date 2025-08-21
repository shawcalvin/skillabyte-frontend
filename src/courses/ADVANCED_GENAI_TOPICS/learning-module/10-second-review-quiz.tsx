"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { ReviewQuiz } from "@/components/interactive/questions";
import { Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Review Quiz"} isComplete={false} {...props}>
                <Text>Please answer two additional questions correctly before advancing.</Text>
                <ReviewQuiz quiz={quiz} setIsComplete={() => props.setIsComplete(true)} />
            </ModuleContainer>
        </>
    );
}

const quiz = [
    {
        question: "Which of the following best describes the primary advantage of Retrieval-Augmented Generation (RAG) models in financial contexts?",
        answers: [
            {
                answer: "They eliminate the need for human oversight in financial decision-making", isCorrect: false, feedback: "RAG models enhance but do not eliminate the need for human oversight in financial decision-making."
            },
            {
                answer: "They can incorporate up-to-date information from a database in their responses", isCorrect: true, feedback: "RAG models can access and incorporate current information from a database, allowing them to provide answers based on real-time information, unlike traditional GenAI systems that are limited to pre-trained data."
            },
            {
                answer: "They are immune to data quality issues", isCorrect: false, feedback: "RAG models are still dependent on the quality of the data in their knowledge base and can be affected by inaccurate or biased data."
            },
            {
                answer: "They can fully replace professional judgment in complex financial situations", isCorrect: false, feedback: "While RAG models provide valuable insights, they cannot fully replace professional judgment in complex financial situations that require nuanced understanding and experience."
            },
        ]
    },
    {
        question: "In the context of multi-agent systems, what role do reasoning models play?",
        answers: [
            {
                answer: "They replace all other specialized agents", isCorrect: false, feedback: "Reasoning models work alongside other specialized agents, not replace them."
            },
            {
                answer: "They act as a coordinating mechanism to ensure consistency", isCorrect: true, feedback: "In multi-agent systems, reasoning models act as a coordinating mechanism, ensuring that contributions from different specialized agents are consistent and there are no major conflicts."
            },
            {
                answer: "They focus solely on legal compliance tasks", isCorrect: false, feedback: "While legal compliance might be one task in a multi-agent system, reasoning models are not limited to this role."
            },
            {
                answer: "They eliminate the need for multiple agents", isCorrect: false, feedback: "Reasoning models enhance the effectiveness of multi-agent systems, not eliminate the need for multiple agents."
            },
        ]
    }
]