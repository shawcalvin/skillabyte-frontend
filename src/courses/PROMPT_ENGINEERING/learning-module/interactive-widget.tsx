'use client'

import { Chatbot } from "@/components/interactive/chatbot";
import { ChatFeedback } from "@/components/interactive/feedback";
import { Button } from "@/components/ui/button";
import { Tile } from "@/components/ui/tile";
import { Subheading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { ChatbotModel } from "@/lib/enums/chatbot";
import { SetStateFunction } from "@/lib/types/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { FreeResponseQuestion } from "@/components/interactive/questions";

export function InteractiveWidget({ courseId, attemptId, setIsComplete }: { courseId: number, attemptId: number, setIsComplete: () => void }) {
    const [chatOneSubmitted, setChatOneSubmitted] = useState<boolean>(false);
    const [chatTwoSubmitted, setChatTwoSubmitted] = useState<boolean>(false);
    const [chatThreeSubmitted, setChatThreeSubmitted] = useState<boolean>(false);
    const [chatFourSubmitted, setChatFourSubmitted] = useState<boolean>(false);
    const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);

    const handleFinish = () => {
        setFeedbackSubmitted(true);
        setIsComplete();
    }

    const steps = [
        <Step1 key={1} courseId={courseId} attemptId={attemptId} setIsComplete={() => setChatOneSubmitted(true)} />,
        <Step2 key={2} courseId={courseId} attemptId={attemptId} />,
        <Step3 key={3} courseId={courseId} attemptId={attemptId} setIsComplete={() => setChatTwoSubmitted(true)} />,
        <Step4 key={4} courseId={courseId} attemptId={attemptId} />,
        <Step5 key={5} courseId={courseId} attemptId={attemptId} setIsComplete={() => setChatThreeSubmitted(true)} />,
        <Step6 key={6} courseId={courseId} attemptId={attemptId} />,
        <Step7 key={7} courseId={courseId} attemptId={attemptId} setIsComplete={() => setChatFourSubmitted(true)} />,
        <Step8 key={8} courseId={courseId} attemptId={attemptId} />,
        <Step9 key={9} setIsComplete={handleFinish} />
    ];

    const [currentStep, setCurrentStep] = useState<number>(0);

    const isNextAllowed = () => {
        switch (currentStep) {
            case 0:
                return chatOneSubmitted;
            case 2:
                return chatTwoSubmitted;
            case 4:
                return chatThreeSubmitted;
            case 6:
                return chatFourSubmitted;
            default:
                return true;
        }
    };

    const goNext = () => {
        if (isNextAllowed() && currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const goPrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <>
            <div className="bg-gray-100 flex flex-col items-center rounded-md p-8 space-y-5">
                {steps[currentStep]}
                <div className="mt-8 mb-4 space-x-4">
                    <Button
                        onClick={goPrevious}
                        disabled={currentStep === 0}
                        color="light"
                    >
                        <ChevronLeftIcon />
                    </Button>
                    <Button
                        onClick={goNext}
                        disabled={!isNextAllowed() || currentStep >= steps.length - 1}
                        color="light"
                    >
                        <ChevronRightIcon />
                    </Button>
                </div>
            </div>

        </>
    );
}

const Step1 = ({ courseId, attemptId, setIsComplete }: { courseId: number, attemptId: number, setIsComplete: () => void }) => {
    return (
        <>
            <Subheading>Scenario 1</Subheading>
            <Text>
                You need to create educational content explaining the audit process for your accounting firm&apos;s website. Use the role prompting technique to draft a prompt that will help you generate a clear, professional explanation. Write a prompt that instructs the AI to take on the role of an experienced auditor creating content for potential clients who are unfamiliar with the audit process. You should write just one prompt for this scenario.
            </Text>
            <Chatbot
                courseId={courseId}
                attemptId={attemptId}
                promptIndex={1}
                model={ChatbotModel.GPT4o}
                displayName="ChatGPT - Scenario 1"
                profilePicture="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/noah-young.png"
                maxAttempts={1}
                maxMessages={1}
                setIsComplete={setIsComplete}
            />

        </>
    )
}

const Step2 = ({ courseId, attemptId }: { courseId: number, attemptId: number }) => {
    return (
        <>
            <Subheading>Scenario 1</Subheading>
            <Text>
                Receive feedback below on your prompt for scenario 1.
            </Text>
            <ChatFeedback
                courseId={courseId}
                attemptId={attemptId}
                promptIndex={1}
                model={ChatbotModel.GPT4o_MINI}
                prepend={true}
            />
        </>
    )
}

const Step3 = ({ courseId, attemptId, setIsComplete }: { courseId: number, attemptId: number, setIsComplete: () => void }) => {
    return (
        <>
            <Subheading>Scenario 2</Subheading>
            <Text>
                You want to create a standardized approach for analyzing financial ratios that junior analysts can follow. Utilize the multi-step prompting technique to break down this process into manageable steps. Write a series of prompts that guide the AI through explaining how to calculate and interpret key financial ratios (such as liquidity, profitability, and solvency ratios) for a hypothetical company. You should write a few prompts for this scenario.
            </Text>
            <Chatbot
                courseId={courseId}
                attemptId={attemptId}
                promptIndex={2}
                model={ChatbotModel.GPT4o}
                displayName="ChatGPT - Scenario 1"
                profilePicture="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/noah-young.png"
                maxAttempts={1}
                maxMessages={5}
                setIsComplete={setIsComplete}
            />

        </>
    )
}

const Step4 = ({ courseId, attemptId }: { courseId: number, attemptId: number }) => {
    return (
        <>
            <Subheading>Scenario 2</Subheading>
            <Text>
                Receive feedback below on your prompts for scenario 2.
            </Text>
            <ChatFeedback
                courseId={courseId}
                attemptId={attemptId}
                promptIndex={2}
                model={ChatbotModel.GPT4o_MINI}
                prepend={true}
            />

        </>
    )
}
const Step5 = ({ courseId, attemptId, setIsComplete }: { courseId: number, attemptId: number, setIsComplete: () => void }) => {
    return (
        <>
            <Subheading>Scenario 3</Subheading>
            <Text>
                You’re creating a guide on tax deductions for small businesses in your local area. Apply the constrained prompting technique to focus the AI’s output on relevant deductions for small businesses in a specific industry. Write a prompt that restricts the AI’s analysis to tax deductions applicable to small retail businesses in your state, specifying the exact parameters it should consider. You should write just one prompt for this scenario.
            </Text>
            <Chatbot
                courseId={courseId}
                attemptId={attemptId}
                promptIndex={3}
                model={ChatbotModel.GPT4o}
                displayName="ChatGPT - Scenario 1"
                profilePicture="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/noah-young.png"
                maxAttempts={1}
                maxMessages={1}
                setIsComplete={setIsComplete}
            />

        </>
    )
}

const Step6 = ({ courseId, attemptId }: { courseId: number, attemptId: number }) => {
    return (
        <>
            <Subheading>Scenario 3</Subheading>
            <Text>
                Receive feedback below on your prompt for scenario 3.
            </Text>
            <ChatFeedback
                courseId={courseId}
                attemptId={attemptId}
                promptIndex={3}
                model={ChatbotModel.GPT4o_MINI}
                prepend={true}
            />

        </>
    )
}

const Step7 = ({ courseId, attemptId, setIsComplete }: { courseId: number, attemptId: number, setIsComplete: () => void }) => {
    return (
        <>
            <Subheading>Scenario 4</Subheading>
            <Text>
                You’re developing a checklist for evaluating internal controls in various departments of a company. Employ the recursive prompting technique to create a comprehensive list of internal control measures, refining and expanding on each point. Write an initial prompt to generate a list of basic internal control measures, then show how you would use that output to create a follow-up prompt for more detailed explanations and examples for each measure. You should write two prompts for this scenario.
            </Text>
            <Chatbot
                courseId={courseId}
                attemptId={attemptId}
                promptIndex={4}
                model={ChatbotModel.GPT4o}
                displayName="ChatGPT - Scenario 1"
                profilePicture="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/noah-young.png"
                maxAttempts={1}
                maxMessages={5}
                setIsComplete={setIsComplete}
            />

        </>
    )
}

const Step8 = ({ courseId, attemptId }: { courseId: number, attemptId: number }) => {
    return (
        <>
            <Subheading>Scenario 4</Subheading>
            <Text>
                Receive feedback below on your prompt for scenario 4.
            </Text>
            <ChatFeedback
                courseId={courseId}
                attemptId={attemptId}
                promptIndex={4}
                model={ChatbotModel.GPT4o_MINI}
                prepend={true}
            />

        </>
    )
}

const Step9 = ({ setIsComplete }: { setIsComplete: () => void }) => {
    return (
        <>
            <Subheading>Reflection</Subheading>
            <Text>
                Describe in at least 25 words, what have you learned about prompting based on this training?
            </Text>
            <FreeResponseQuestion
                minWords={25}
                setIsComplete={setIsComplete}
            />
        </>
    )
}