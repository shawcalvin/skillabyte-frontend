"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { OrderedList, Text } from "@/components/ui/text";
import { Subheading } from "@/components/ui/heading";
import { Image } from "@/components/ui/media";
import { ReviewQuiz } from "@/components/interactive/questions";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer isComplete={false} title={"Challenge 1 - Explain the key risks associated with GenAI in business contexts and describe appropriate governance strategies."} {...props}>
                <Text>
                    TechnoVista Solutions has encountered significant issues with their GenAI-powered decision-making system. Recently, they noticed that several vendors have not been paid, even though the system shows that the transactions were approved. The company cannot figure out why this is happening, as the GenAI system is supposed to handle payments seamlessly, with all approvals appearing to have gone through correctly.
                </Text>
                <Text>
                    The consultant who built the system created a document outlining how the system was supposed to function. Additionally, the company has produced a process mining visualization that shows the activities and process flows as they actually occur. You have been tasked with reviewing both the system documentation and the process mining data. If you can solve the problem, TechnoVista will hire you for additional GenAI consulting opportunities.
                </Text>
                <Subheading>System Documentation</Subheading>
                <Text>
                    A diagram that shows how the GenAI system is supposed to process high-value transactions.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/genai-governance/SystemDocumentation.png"
                    alt="GenAI Risk Domains"
                    size="600px"
                    className="my-8 rounded-lg"
                    center
                />
                <Subheading>Process Mining Visualization</Subheading>
                <Text>
                    A simplified diagram showing how the GenAI system actually processed these transactions in practice. That is, this visualization shows every activity that was actually performed. If an activity is not listed, it was not performed on any transactions.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/genai-governance/ProcessMining.png"
                    alt="GenAI Risk Domains"
                    size="600px"
                    className="my-8 rounded-lg"
                    center
                />
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
        question: "Based on your review, what key risk was introduced into the system in practice that was not present in the design of the system?",
        answers: [
            {
                answer: "Enhanced Operational and IT Security Risks – The system failed to secure sensitive transaction data, leading to the mismanagement of payments and exposing the organization to security threats.",
                isCorrect: false,
                feedback: "This option focuses on data security and preventing external threats, but the issue was an internal process failure due to missing validation steps, not a security breach or data mismanagement."
            },
            {
                answer: "Transparency and Trust Issues – The auto-approval process made it difficult to trace decisions, eroding trust in the system and causing the unpaid vendor problem.",
                isCorrect: false,
                feedback: "While transparency could be a factor, the core problem was not the lack of traceability or trust but the removal of human oversight in the approval process, leading to unpaid vendors."
            },
            {
                answer: "Process Management Risks – The system’s auto-approval of high-value transactions bypassed key validation steps, resulting in operational failures such as unpaid vendors.",
                isCorrect: true,
                feedback: "The issue stems from bypassing critical validation steps in the transaction process. This is a clear example of Process Management Risks, where an operational failure led to unpaid vendors due to missing checks in high-value transaction approvals."
            },
            {
                answer: "Data-Related Risks – The AI system propagated incorrect information, resulting in mismanagement of financial data and failed vendor payments.",
                isCorrect: false,
                feedback: "The problem was not related to data inaccuracies or mismanagement. The AI did not propagate incorrect information; it simply approved transactions without the required oversight."
            },
            {
                answer: "Knowledge and Training Risks – Employees lacked proper training on how to manage the AI system, resulting in incorrect approvals and failed payments.",
                isCorrect: false,
                feedback: "This would be relevant if the issue were due to a lack of understanding or training, but the problem was procedural—human oversight was removed from the approval process, leading to operational breakdowns."
            }
        ]
    }
];