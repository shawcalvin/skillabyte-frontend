import { ReviewQuiz } from "@/components/interactive/questions"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/fieldset"
import { Subheading } from "@/components/ui/heading";
import { Radio, RadioField, RadioGroup } from "@/components/ui/radio"
import { ListItem, Strong, Text, UnorderedList } from "@/components/ui/text";
import { Tile } from "@/components/ui/tile";
import { useState } from "react"


export function ChallengeThreeWidget({ setIsComplete }: { setIsComplete: () => void }) {
    const [selected, setSelected] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        if (selected !== null) {
            const answerIsCorrect = quiz.answers[selected].isCorrect;
            if (answerIsCorrect) {
                setIsComplete();
            }
            setIsCorrect(answerIsCorrect);
        }
    };

    return (
        <>
            <Tile center>
                <div className="flex justify-between">
                    <Subheading>
                        {quiz.question}
                    </Subheading>
                    <Button
                        onClick={checkAnswer}
                        color="light"
                        className="h-8 ml-4 text-xs text-nowrap"
                        disabled={isCorrect !== null}
                    >
                        Check Answer
                    </Button>
                </div>
                <RadioGroup value={selected !== null ? selected.toString() : ""} onChange={(e) => setSelected(parseInt(e))}>
                    {quiz.answers.map((answer, index) => (
                        <RadioField key={index}>
                            <Radio color='orange' value={index.toString()} disabled={isCorrect !== null}
                            />
                            <Label>{answer.answer}</Label>
                        </RadioField>
                    ))}
                </RadioGroup>
                {isCorrect !== null && selected !== null &&
                    <div className="w-full space-y-5 mt-2">
                        <div className={`${isCorrect ? 'border-green-500 bg-green-100' : 'border-red-500 bg-red-100'} text-sm mt-8 border-2 p-4 rounded-md`}>
                            {quiz.answers[selected].feedback()}
                        </div>
                    </div>
                }
            </Tile>
            {isCorrect !== null && isCorrect === false &&
                <div className="space-y-8">
                    <Text className="text-center">
                        <Strong>
                            As you did not answer correctly, you must now answer these questions before you can continue:
                        </Strong>
                    </Text>
                    <ReviewQuiz
                        quiz={quiz2}
                        setIsComplete={setIsComplete}
                    />
                </div>
            }
        </>
    )
}

const correctFeedback = () => {
    return (
        <div className="text-sm space-y-2">
            <p>
                ✅ Correct! Alex Rodriguez, the Chief Risk Officer, is clearly overstating the company’s readiness in the Data and Compliance Management domain. According to Alex, TechnoVista is at an “Established” maturity level, with progress toward “Leading” in Data and Compliance Management. However, based on his description, several critical elements are still in development, which contradicts the maturity expectations for “Established” or “Leading” levels:
            </p>
            <UnorderedList>
                <ListItem>
                    <p><Strong>Access control policies</Strong>: He mentions “learning moments” and that these policies are still being refined. In the GenAI Maturity Model, “Established” level access control policies should be more consistently enforced, while “Leading” would require fully enforced, strict role-based access. TechnoVista is still working toward these goals, indicating a more “Emerging” maturity.</p>
                </ListItem>
                <ListItem>
                    <p><Strong>Data encryption and anonymization</Strong>: He admits the process is incremental, starting with sensitive data, but not fully covered yet. For “Established,” data encryption should already be consistently applied to sensitive data, and “Leading” would imply all sensitive information is protected.</p>
                </ListItem>
                <ListItem>
                    <p><Strong>Compliance monitoring system</Strong>: Alex notes that the system is a “work in progress” and not fully comprehensive.An “Established” maturity would require a more systematic and continuous monitoring system, while “Leading” would imply advanced, real-time coverage.</p>
                </ListItem>
            </UnorderedList>
            <p>
                Thus, while Alex claims to be in the “Established” phase, the actual practices described align more with the “Emerging” phase, reflecting an overstatement of maturity.
            </p>
        </div>
    )
}

const incorrectFeedback = () => {
    return (
        <div className="text-sm space-y-2">
            <p>
                ❌ I’m sorry that is not correct. The correct answer was Alex Rodriguez, the Chief Risk Officer, is clearly overstating the company’s readiness in the Data and Compliance Management domain. Here are reasons why he was too confident in his assessment:
            </p>
            <UnorderedList>
                <ListItem>
                    <p><Strong>Access control policies</Strong>: He mentions “learning moments” and that these policies are still being refined. In the GenAI Maturity Model, “Established” level access control policies should be more consistently enforced, while “Leading” would require fully enforced, strict role-based access. TechnoVista is still working toward these goals, indicating a more “Emerging” maturity.</p>
                </ListItem>
                <ListItem>
                    <p><Strong>Data encryption and anonymization</Strong>: He admits the process is incremental, starting with sensitive data, but not fully covered yet. For “Established,” data encryption should already be consistently applied to sensitive data, and “Leading” would imply all sensitive information is protected.</p>
                </ListItem>
                <ListItem>
                    <p><Strong>Compliance monitoring system</Strong>: Alex notes that the system is a “work in progress” and not fully comprehensive.An “Established” maturity would require a more systematic and continuous monitoring system, while “Leading” would imply advanced, real-time coverage.</p>
                </ListItem>
            </UnorderedList>
            <p>
                This significant mismatch between the described state of controls and the claimed maturity levels indicates that Alex is substantially overstating TechnoVista’s readiness in GenAI data and compliance management.
            </p>
        </div>
    )
}

const quiz =
{
    question: "Based on the presentations you’ve heard, which executive, if any, appears to be overstating the maturity level of their domain’s controls compared to the actual practices they described?",
    answers: [
        {
            answer: "Sarah Johnson - Chief Strategy Officer (Strategic Alignment and Control Environment)",
            isCorrect: false,
            feedback: incorrectFeedback
        },
        {
            answer: "Michael Chen - Chief Information Officer (Operational and Technology Management)",
            isCorrect: false,
            feedback: incorrectFeedback
        },
        {
            answer: "Victoria Pemberton - Chief Ethics Officer (Human, Ethical, and Social Considerations)",
            isCorrect: false,
            feedback: incorrectFeedback
        },
        {
            answer: "Alex Rodriguez - Chief Risk Officer (Data and Compliance Management)",
            isCorrect: true,
            feedback: correctFeedback
        },
        {
            answer: "Emma Thompson - Chief Compliance Officer (Transparency, Accountability, and Continuous Improvement)",
            isCorrect: false,
            feedback: incorrectFeedback
        },
        {
            answer: "None of the executives are overstating their domain’s maturity level.",
            isCorrect: false,
            feedback: incorrectFeedback
        },
    ]
}

const quiz2 = [
    {
        question: "What are the four maturity levels described in the GenAI Governance Framework Maturity Model?",
        answers: [
            {
                answer: "Beginner, Intermediate, Advanced, Expert",
                isCorrect: false,
                feedback: "These are common terms for skill levels but not the specific maturity levels used in this model."
            },
            {
                answer: "Nascent, Emerging, Established, Leading",
                isCorrect: true,
                feedback: "The GenAI Governance Framework Maturity Model uses these four levels to describe an organization’s maturity in various aspects of GenAI governance."
            },
            {
                answer: "Basic, Developing, Proficient, Mastery",
                isCorrect: false,
                feedback: "While these terms describe progression, they are not the specific levels used in this maturity model."
            },
            {
                answer: "Initial, Defined, Managed, Optimized",
                isCorrect: false,
                feedback: "These are maturity levels used in some other models (like CMMI) but not in this specific GenAI Governance Framework Maturity Model."
            }
        ]
    },
    {
        question: "In the 'Strategic Alignment and Control Environment' domain, what characterizes the 'Established' level for the 'GenAI Risk Management Framework' control consideration?",
        answers: [
            {
                answer: "No formal framework exists; ad-hoc processes in place",
                isCorrect: false,
                feedback: "This describes the 'Nascent' level, where GenAI risk management is still in its early stages."
            },
            {
                answer: "Basic framework developed but not fully integrated or implemented",
                isCorrect: false,
                feedback: "This describes the 'Emerging' level, where a basic framework exists but isn’t fully integrated."
            },
            {
                answer: "Structured framework in place, mostly integrated with other governance frameworks",
                isCorrect: true,
                feedback: "At the 'Established' level, the GenAI risk management framework is structured and mostly integrated with other governance frameworks."
            },
            {
                answer: "Comprehensive, integrated framework fully aligned and implemented",
                isCorrect: false,
                feedback: "This describes the 'Leading' level, which goes beyond 'Established' to full alignment and implementation."
            }
        ]
    },
    {
        question: "Which of the following best describes the 'Leading' maturity level for the 'Bias Detection and Mitigation Framework' control consideration under the 'Ethical and Bias Risks' category?",
        answers: [
            {
                answer: "No framework for identifying or mitigating biases",
                isCorrect: false,
                feedback: "This describes the 'Nascent' level where no framework exists."
            },
            {
                answer: "Basic bias detection and mitigation framework in place",
                isCorrect: false,
                feedback: "This describes the 'Emerging' level with a basic framework in place."
            },
            {
                answer: "Comprehensive framework for bias detection and mitigation integrated into AI development",
                isCorrect: false,
                feedback: "This describes the 'Established' level with a comprehensive framework integrated into AI development."
            },
            {
                answer: "Advanced and proactive bias management practices, continuously updated",
                isCorrect: true,
                feedback: "The 'Leading' level goes beyond comprehensive to include advanced, proactive practices that are continuously updated."
            }
        ]
    },
    {
        question: "In the 'Transparency, Accountability, and Continuous Improvement' domain, how does the maturity model differentiate between 'Established' and 'Leading' levels for the 'Technology Evolution Monitoring Program' control consideration?",
        answers: [
            {
                answer: "Established has a basic monitoring program, while Leading has a comprehensive one",
                isCorrect: false,
                feedback: "Both levels have more than just basic monitoring programs."
            },
            {
                answer: "Established reactively responds to trends, while Leading proactively identifies risks and opportunities",
                isCorrect: false,
                feedback: "Both levels involve proactive identification of risks and opportunities."
            },
            {
                answer: "Established has internal monitoring, while Leading includes external stakeholder input",
                isCorrect: false,
                feedback: "The model doesn’t specifically mention internal vs. external monitoring for these levels."
            },
            {
                answer: "Established identifies new risks and opportunities, while Leading influences technology evolution",
                isCorrect: true,
                feedback: "The key difference is that at the Established level, the program 'proactively identifies new risks and opportunities,' while at the Leading level, it goes further to have 'industry-leading monitoring and adaptation strategies, influencing technology evolution.' This shows a progression from identifying trends to actually shaping them."
            }
        ]
    }
];

