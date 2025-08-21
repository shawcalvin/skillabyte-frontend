import { Chatbot } from "@/components/interactive/chatbot";
import { Button } from "@/components/ui/button";
import { Checkbox, CheckboxField, CheckboxGroup } from "@/components/ui/checkbox";
import { Field, Label } from "@/components/ui/fieldset";
import { Subheading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Tile } from "@/components/ui/tile";
import { ChatbotModel } from "@/lib/enums/chatbot";
import React, { useState } from "react";


export function ChallengeFourWidget({ courseId, attemptId, setIsComplete }: { courseId: number, attemptId: number, setIsComplete: () => void }) {
    const [stepOneFinished, setStepOneFinished] = useState(false);

    return (
        <>
            <Step1 setIsComplete={() => setStepOneFinished(true)} />
            {stepOneFinished && <Step2 courseId={courseId} attemptId={attemptId} setIsComplete={setIsComplete} />}
        </>
    )
}

function Step1({ setIsComplete }: { setIsComplete: () => void }) {
    const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleCheck = (index: number) => {
        setIsCorrect(null);
        setSelectedBoxes((prevSelected) => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter((i) => i !== index);
            } else {
                return [...prevSelected, index];
            }
        });
    };

    const checkAnswer = () => {
        const allCorrect = selectedBoxes.length === 3 && selectedBoxes.every(
            (index) => checkboxFields[index]?.isCorrect === true
        );

        if (allCorrect) {
            setIsComplete();
        }

        setIsCorrect(allCorrect);
    };

    const correctFeedback = `Correct! Now company management would like you to explain why each of these 3 policies needs correction.`
    const incorrectFeedback = `That is not correct, please try again. There are three policies that are problematic.`

    const checkboxFields = [
        { label: "1.1: Innovation", isCorrect: false },
        { label: "1.2: Risk Assessment", isCorrect: false },
        { label: "2.1: Data Usage", isCorrect: false },
        { label: "2.2: Updates and Maintenance", isCorrect: false },
        { label: "3.1: Ethical Considerations", isCorrect: false },
        { label: "3.2: Training and Education", isCorrect: true },
        { label: "4.1: Human Oversight", isCorrect: true },
        { label: "4.2: Model Transparency", isCorrect: false },
        { label: "5.1: Compliance", isCorrect: false },
        { label: "5.2: Incident Response", isCorrect: true }
    ];

    return (
        <>
            <Tile center>
                <div className="flex justify-between">
                    <Subheading>
                        Which of TechnoVista Solutions governance policies are problematic?
                    </Subheading>
                    <Button
                        onClick={checkAnswer}
                        color="light"
                        className="h-8 ml-4 text-xs text-nowrap"
                    >
                        Check Answer
                    </Button>
                </div>
                <CheckboxGroup>
                    {checkboxFields.map((field, index) => (
                        <CheckboxField key={index}>
                            <Checkbox
                                checked={selectedBoxes.includes(index)}
                                onChange={() => handleCheck(index)}
                                color="orange"
                            />
                            <Label>{field.label}</Label>
                        </CheckboxField>
                    ))}
                </CheckboxGroup>
                {isCorrect !== null && selectedBoxes.length > 0 &&
                    <div className="w-full space-y-5 mt-2">
                        <div className={`${isCorrect ? 'border-green-500 bg-green-100' : 'border-red-500 bg-red-100'} text-sm mt-8 border-2 p-4 rounded-md`}>
                            {isCorrect ? '✅ ' : '❌ '}{isCorrect ? correctFeedback : incorrectFeedback}
                        </div>
                    </div>
                }
            </Tile>
        </>
    )
}

function Step2({ courseId, attemptId, setIsComplete }: { courseId: number, attemptId: number, setIsComplete: () => void }) {
    const [input, setInput] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const correctFeedback = "Congratulations, consultant! You've found the code and completed the challenges!"
    const incorrectFeedback = "That's not the right code! Check your input and try again."

    const submitCode = () => {
        if (input === "XXYYZZ") {
            setIsCorrect(true)
            setIsComplete();
        }
        else {
            setIsCorrect(false);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setIsCorrect(null);
    }

    return (
        <>
            <div className="w-full h-full flex justify-center">
                <div className="w-full max-w-3xl h-full">
                    <Chatbot
                        courseId={courseId}
                        attemptId={attemptId}
                        promptIndex={1}
                        model={ChatbotModel.GPT4o}
                        displayName="TechnoVista Solutions"
                        maxAttempts={1}
                        maxMessages={30}
                    />
                    <Subheading className="mt-8">Enter the code to continue.</Subheading>
                    <Field className="">
                        <Input
                            value={input}
                            onChange={(e) => handleChange(e)}
                        />
                    </Field>
                    <Button
                        onClick={submitCode}
                        color="light"
                        className="h-8 mt-4 text-xs text-nowrap"
                    >
                        Check Answer
                    </Button>
                    {isCorrect !== null && input.length > 0 &&
                        <div className="w-full space-y-5 mt-2">
                            <div className={`${isCorrect ? 'border-green-500 bg-green-100' : 'border-red-500 bg-red-100'} text-sm mt-8 border-2 p-4 rounded-md`}>
                                {isCorrect ? correctFeedback : incorrectFeedback}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}