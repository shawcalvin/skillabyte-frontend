"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { ReviewQuiz } from "@/components/interactive/questions";
import { Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Ungraded Quiz"} isComplete={false} {...props}>
                <ReviewQuiz quiz={quiz} setIsComplete={() => props.setIsComplete(true)} />
            </ModuleContainer>
        </>
    );
}

const quiz = [
    {
        "question": "Which of the following best explains why fine-tuning an AI model might not always be the best option for a business?",
        "answers": [
            {
                "answer": "Fine-tuning guarantees perfect results every time, making it unnecessary",
                "isCorrect": false,
                "feedback": "Fine-tuning doesn't guarantee perfect results. It's a process to improve model performance for specific tasks, but perfection is not assured."
            },
            {
                "answer": "Fine-tuning is inexpensive and doesn't require much additional data",
                "isCorrect": false,
                "feedback": "Fine-tuning can be costly and often requires substantial additional data specific to the task at hand."
            },
            {
                "answer": "Fine-tuning can be costly and may not significantly improve model performance",
                "isCorrect": true,
                "feedback": "This accurately reflects the potential drawbacks of fine-tuning. It can be expensive and the improvements may not always justify the cost and effort."
            },
            {
                "answer": "Fine-tuning eliminates the need for any human oversight",
                "isCorrect": false,
                "feedback": "Fine-tuning doesn't eliminate the need for human oversight. Regardless of fine-tuning, human supervision remains crucial in AI applications."
            }
        ]
    },
    {
        "question": "How is AI likely to impact accounting roles in the near future?",
        "answers": [
            {
                "answer": "AI will completely replace all accounting professionals",
                "isCorrect": false,
                "feedback": "While AI will automate many tasks, it's not expected to entirely replace accounting professionals. Human expertise and judgment remain crucial."
            },
            {
                "answer": "AI will have no significant impact on accounting roles",
                "isCorrect": false,
                "feedback": "AI is already having a significant impact on accounting and is expected to continue transforming the field."
            },
            {
                "answer": "AI will primarily create new job roles without affecting existing ones",
                "isCorrect": false,
                "feedback": "While AI may create new roles, it's also expected to significantly change existing roles in accounting."
            },
            {
                "answer": "AI will automate routine tasks, allowing accountants to focus more on analysis and strategy",
                "isCorrect": true,
                "feedback": "This aligns with the expected impact of AI in accounting, where routine tasks are automated, freeing accountants for higher-level work."
            }
        ]
    },
    {
        "question": "How can the 'temperature' parameter affect the output of an AI model like ChatGPT?",
        "answers": [
            {
                "answer": "It ensures that the AI selects the most probable word without any variability",
                "isCorrect": false,
                "feedback": "A very low temperature might approach this, but it's not the primary function of the temperature parameter."
            },
            {
                "answer": "It has no impact on the variability of the generated responses",
                "isCorrect": false,
                "feedback": "Temperature directly impacts the variability of responses."
            },
            {
                "answer": "It allows the model to choose words randomly, ignoring context",
                "isCorrect": false,
                "feedback": "While higher temperatures increase randomness, the model doesn't ignore context entirely."
            },
            {
                "answer": "It controls the level of randomness, balancing between predictable and creative outputs",
                "isCorrect": true,
                "feedback": "This accurately describes the function of the temperature parameter. Higher temperatures increase variability and creativity, while lower temperatures make outputs more predictable."
            }
        ]
    },
    {
        "question": "What is a key step in implementing AI in an accounting firm?",
        "answers": [
            {
                "answer": "Immediately replacing all existing systems with AI solutions",
                "isCorrect": false,
                "feedback": "Abrupt, complete replacement of systems is risky and often impractical. A more gradual, strategic approach is typically recommended."
            },
            {
                "answer": "Waiting for AI technology to fully mature before considering implementation",
                "isCorrect": false,
                "feedback": "While caution is important, waiting too long to adopt AI could put a firm at a competitive disadvantage."
            },
            {
                "answer": "Assessing current processes to identify where AI can add the most value",
                "isCorrect": true,
                "feedback": "This is a crucial step in effective AI implementation. It ensures that AI is applied where it can have the greatest positive impact."
            },
            {
                "answer": "Focusing solely on cost reduction when selecting AI tools",
                "isCorrect": false,
                "feedback": "While cost is a factor, it shouldn't be the only consideration. Functionality, reliability, and strategic fit are equally important."
            }
        ]
    }
]
