"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";
import { ReviewQuiz } from "@/components/interactive/questions";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Quiz"} isComplete={false} {...props}>
                <Text>
                    Answer each question, by reading the scenario and selecting which risk the scenario describes.
                </Text>
                <ReviewQuiz
                    quiz={quiz}
                    setIsComplete={() => props.setIsComplete(true)}
                />
            </ModuleContainer>
        </>
    );
}

const quiz = [
    {
        question: "A company introduces a new AI system to optimize its hiring process. Shortly after implementation, the system starts to favor candidates from certain demographic groups while unfairly screening out others. What risk does this situation best represent?",
        answers: [
            {
                answer: "Transparency and Trust Issues",
                isCorrect: false,
                feedback: "Although transparency in the decision-making process is important, the key issue in this scenario is the bias in the system’s hiring decisions rather than how traceable or clear the decisions are."
            },
            {
                answer: "Ethical and Bias Risks",
                isCorrect: true,
                feedback: "This risk directly addresses AI systems perpetuating biases or making unethical decisions, which is the central problem in this hiring situation."
            },
            {
                answer: "Knowledge and Training Risks",
                isCorrect: false,
                feedback: "This risk relates more to users and systems being inadequately trained or accepted, not the specific problem of bias in hiring decisions."
            },
            {
                answer: "Environment, Social, and Governance (ESG) Risks",
                isCorrect: false,
                feedback: "This risk pertains more to societal impacts such as workforce displacement or environmental concerns, which are not the focus here."
            },
        ]
    },
    {
        question: "An AI system at a financial institution is designed to handle customer inquiries. However, the system is not able to trace back its decisions, leading to confusion among the customers when asked about why certain actions were taken. What risk does this best represent?",
        answers: [
            {
                answer: "Process Management Risks",
                isCorrect: false,
                feedback: "This risk focuses on validating applications and ensuring compliance, rather than the traceability of decisions."
            },
            {
                answer: "Traceability Risks",
                isCorrect: true,
                feedback: "The scenario involves the inability to trace AI decisions back to their origins, which is the essence of this risk."
            },
            {
                answer: "Strategic and Planning Risks",
                isCorrect: false,
                feedback: "This risk involves long-term organizational alignment with AI initiatives and isn’t related to decision-tracing issues."
            },
            {
                answer: "Control Environment Risks",
                isCorrect: false,
                feedback: "While this risk involves structuring AI governance, the key issue in the scenario is the lack of traceability, not policy development or governance."
            },
        ]
    },
    {
        question: "A company invests heavily in a new AI tool to boost operational efficiency, but the tool requires more computational resources than expected, putting a strain on the company’s budget. What risk does this situation best represent?",
        answers: [
            {
                answer: "Technology Evaluation and Selection Risks",
                isCorrect: true,
                feedback: "This risk involves selecting technologies that may require more resources than the company can provide, which matches the scenario."
            },
            {
                answer: "HR and Employment Risks",
                isCorrect: false,
                feedback: "This risk focuses on the impact of AI on jobs and personnel, not on resource allocation or technology selection."
            },
            {
                answer: "Enhanced Operational and IT Security Risks",
                isCorrect: false,
                feedback: "While important, this risk focuses on securing AI systems and data, not on the financial or computational strain posed by technology."
            },
            {
                answer: "Psychological and Social Risks",
                isCorrect: false,
                feedback: "This risk deals with societal and psychological impacts of AI, such as reputational harm or social disruption, which are not the focus of the scenario."
            },
        ]
    }
];