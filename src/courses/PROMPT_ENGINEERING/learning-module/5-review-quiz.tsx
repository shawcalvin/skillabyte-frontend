"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { MultipleChoiceQuestion, ReviewQuiz } from "@/components/interactive/questions";
import { Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Practice Quiz"} isComplete={false} {...props}>
                <Text>
                    To help solidify these foundational techniques in your mind, please answer each of the following questions. For each question, identify whether the prompt is a zero-shot, few-shot, or chain-of-thought prompt.
                </Text>
                <ReviewQuiz quiz={quiz} setIsComplete={() => props.setIsComplete(true)} />
            </ModuleContainer>
        </>
    );
}

const quiz = [
    {
        "question": "Identify the key objectives of an internal audit process.",
        "answers": [
            {
                "answer": "Zero-shot prompting",
                "isCorrect": true,
                "feedback": "This is an example of zero-shot prompting because the AI is asked to list the objectives without any prior examples or context. The AI relies on its pre-existing knowledge to answer the question."
            },
            {
                "answer": "Few-shot prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            },
            {
                "answer": "Chain-of-thought prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            }
        ]
    },
    {
        "question": "Here are a few examples of how to record stock option compensation:\n\n Example 1: When stock options are granted: Record a debit to Stock Compensation Expense for $10,000 and a credit to Stock Options Outstanding for $10,000. This entry records the stock compensation expense for the options granted.\n\n Example 2: When stock options are exercised: Record a debit to Cash for $15,000, a credit to Common Stock for $5,000, and a credit to Additional Paid-in Capital for $10,000. This entry records the cash received and equity issued upon the exercise of options. Now, create the journal entries for recording stock option compensation for a new set of employees.",
        "answers": [
            {
                "answer": "Zero-shot prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            },
            {
                "answer": "Few-shot prompting",
                "isCorrect": true,
                "feedback": "This is an example of few-shot prompting because the AI is provided with examples of how to record stock option compensation before being asked to create new entries. The AI uses the examples to guide its response."
            },
            {
                "answer": "Chain-of-thought prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            }
        ]
    },
    {
        "question": "To determine the appropriate tax treatment for a new type of business expense, consider:\n\n 1. The nature of the expense.\n\n 2. IRS guidelines.\n\n 3. The impact on taxable income.\n\n 4. Potential deductions.",
        "answers": [
            {
                "answer": "Zero-shot prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            },
            {
                "answer": "Few-shot prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            },
            {
                "answer": "Chain-of-thought prompting",
                "isCorrect": true,
                "feedback": "This is an example of chain-of-thought prompting because it guides the AI through a structured reasoning process to determine the correct tax treatment. The AI is prompted to consider multiple factors before making a decision."
            }
        ]
    },
    {
        "question": "List the primary steps involved in a forensic accounting investigation.",
        "answers": [
            {
                "answer": "Zero-shot prompting",
                "isCorrect": true,
                "feedback": "This is an example of zero-shot prompting because the AI is asked to list the steps without any examples or additional context. The AI is expected to generate the answer based on its existing knowledge."
            },
            {
                "answer": "Few-shot prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            },
            {
                "answer": "Chain-of-thought prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            }
        ]
    },
    {
        "question": "To assess the risk of material misstatement in financial statements, consider:\n\n 1. The client’s internal controls.\n\n 2. Historical audit results.\n\n 3. Industry-specific risks.\n\n 4. The economic environment.",
        "answers": [
            {
                "answer": "Zero-shot prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            },
            {
                "answer": "Few-shot prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            },
            {
                "answer": "Chain-of-thought prompting",
                "isCorrect": true,
                "feedback": "This is an example of chain-of-thought prompting because the AI is led through a series of considerations to assess the risk. The structured steps encourage a logical progression to the final assessment."
            }
        ]
    },
    {
        "question": "Here are a few examples of how accounting systems are designed for various industries:\n\n Example 1: For a retail business: The accounting system includes a Point of Sale (POS) integration feature that automatically inputs sales data into the accounting system, facilitating revenue recognition.\n\n Example 2: For a manufacturing company: The system incorporates a Cost Accounting Module that tracks raw material costs and allocates overhead, enabling the calculation of the cost of goods sold. Now, design an accounting system for a service-based business.",
        "answers": [
            {
                "answer": "Zero-shot prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            },
            {
                "answer": "Few-shot prompting",
                "isCorrect": true,
                "feedback": "This is an example of few-shot prompting because the AI is provided with examples of how accounting systems are designed for different industries before being asked to create a new design. The AI uses the provided examples as a model for its own design."
            },
            {
                "answer": "Chain-of-thought prompting",
                "isCorrect": false,
                "feedback": "Please review the definitions of each type of prompt and try again."
            }
        ]
    }
]


