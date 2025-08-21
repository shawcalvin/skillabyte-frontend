import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/fieldset";
import { Heading } from "@/components/ui/heading";
import { Radio, RadioField, RadioGroup } from "@/components/ui/radio";
import { ListItem, Strong, Text, UnorderedList } from "@/components/ui/text";
import { Tile } from "@/components/ui/tile";
import { useState } from "react";


export function ChallengeTwoWidget({ setIsComplete }: { setIsComplete: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>(Array(scenarios.length).fill(null));
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState<number>(0);
    const [completedAttempts, setCompletedAttempts] = useState(0);

    const currentScenario = scenarios[currentIndex];

    const handleSelect = (index: number, option: number) => {
        setSelectedOptions(prevOptions =>
            prevOptions.map((opt, i) => (i === index ? option : opt))
        );
    };

    const handleSubmit = () => {
        if (currentIndex < scenarios.length - 1 && selectedOptions[currentIndex] !== null) {
            setCurrentIndex(prev => prev + 1)
        } else if (currentIndex == scenarios.length - 1) {
            setIsFinished(true);

            const totalScore = selectedOptions.reduce((score, selectedOption, index) => {
                const correctOptionIndex = scenarios[index].options.findIndex(option => option.isCorrect);
                return selectedOption === correctOptionIndex ? score! + 1 : score;
            }, 0);

            setScore(totalScore!);
            if (totalScore === 8) {
                setIsComplete()
            }
        }
    }

    const restart = () => {
        setIsFinished(false);
        setSelectedOptions(Array(scenarios.length).fill(null));
        setCurrentIndex(0);
        setCompletedAttempts(prev => prev + 1);
    }

    return (
        <>
            {!isFinished &&
                <Tile center>
                    <Heading>Scenario {currentIndex + 1}: {currentScenario.title}</Heading>
                    <Text>{currentScenario.prompt}</Text>
                    <RadioGroup
                        value={selectedOptions[currentIndex] !== null ? selectedOptions[currentIndex].toString() : ""}
                        onChange={(e: string) => handleSelect(currentIndex, parseInt(e))}
                    >
                        {currentScenario.options.map((option, index) => (
                            <RadioField key={index}>
                                <Radio
                                    color='orange'
                                    value={index.toString()}
                                />
                                <Label>{option.prompt}</Label>
                            </RadioField>
                        ))}
                    </RadioGroup>
                    <Button
                        onClick={handleSubmit}
                        color="light"
                        disabled={selectedOptions[currentIndex] === null}
                    >Submit</Button>
                </Tile>
            }
            {isFinished &&
                <div>
                    <Tile center>
                        <Heading>Score: {score} / 8</Heading>
                        {score < 8 &&
                            <>
                                <Text>
                                    Not quite! Some of your decisions left TechnoVista Solutions vulnerable to GenAI risks! Review their exposure profile below to see where you went wrong. When you feel ready, click &quot;Try Again&quot; to reassess your decisions and address these risks.
                                </Text>
                                <UnorderedList>
                                    {scenarios.map((scenario, index) => {
                                        const selectedIndex = selectedOptions[index]
                                        const selectedOption = scenario.options[selectedIndex!]
                                        const feedback = selectedOption.isCorrect ? null : selectedOption.feedback;
                                        if (!feedback) return;
                                        return (
                                            <ListItem key={index}>
                                                {feedback}
                                                {completedAttempts >= 1 && <p className="mt-2 mb-4 bg-gray-100 p-2 text-sm text-center rounded-sm">Hint: Review Scenario {index + 1}</p>}
                                            </ListItem>
                                        )
                                    }
                                    )}
                                </UnorderedList>
                                <Button
                                    color="light"
                                    onClick={restart}
                                >
                                    Try Again
                                </Button>
                            </>
                        }
                        {score === 8 &&
                            <>
                                <Text>
                                    Excellent job consultant! You have led the TechnoVista Solutions through applying the framework to their real-world challenges. Review how your decisions helped TechnoVista Solutions to effectively implement GenAI. Now on to your next task!
                                </Text>
                                <UnorderedList>
                                    {scenarios.map((scenario, index) => {
                                        const selectedIndex = selectedOptions[index]
                                        const selectedOption = scenario.options[selectedIndex!]
                                        const feedback = selectedOption.feedback;
                                        if (!feedback) return;
                                        return (
                                            <ListItem key={index}>
                                                {feedback}
                                            </ListItem>
                                        )
                                    }
                                    )}
                                </UnorderedList>
                            </>
                        }
                    </Tile>

                </div>
            }
        </>
    )
}

const scenarios = [
    {
        title: "The Strategic Start",
        prompt: "TechnoVista’s CEO is excited about the potential of GenAI and wants to implement it across all departments immediately. However, you’re concerned about the lack of alignment between this initiative and the company’s overall strategy. The GenAI Governance Framework emphasizes the importance of strategic alignment in the “Strategic Alignment and Control Environment” domain. You need to decide how to proceed in a way that sets a strong foundation for TechnoVista’s AI journey.",
        options: [
            {
                prompt: "Create a strategic GenAI roadmap with cross-functional buy-in",
                isCorrect: true,
                feedback: `The organization operates at an "Established" level of maturity, with well-aligned initiatives supporting business objectives. Risks related to fragmented processes and miscommunication are minimized, ensuring seamless collaboration across departments. This alignment fosters sustainable growth, enhances adoption, and strengthens governance, laying a solid foundation for future innovations.`
            },
            {
                prompt: "Start implementing GenAI and then add controls as problems arise",
                isCorrect: false,
                feedback: `The organization exhibits a "Nascent" level of maturity, struggling with inefficiencies and conflicting systems. Poor alignment creates data silos and operational friction, hindering productivity and increasing exposure to reputational and compliance risks. The lack of strategic direction leaves the company vulnerable to disruptions and limits long-term success.`
            }
        ]
    },
    {
        title: "The Data Dilemma",
        prompt: "TechnoVista’s customer service GenAI has been operational for six months. Recently, there’s been a surge in customer complaints about the AI providing outdated information. Upon investigation, you discover that the AI hasn’t been updated with the latest product data. This situation falls under the “Data and Compliance Management” domain of the GenAI Governance Framework. You need to address this issue to ensure the AI system remains effective and trustworthy.",
        options: [
            {
                prompt: "Implement regular data audits",
                isCorrect: true,
                feedback: `The organization operates at an "Established" level of maturity, with strong data governance practices ensuring the AI remains accurate and relevant. Regular audits maintain data integrity, reducing the risk of outdated information and improving customer satisfaction. This proactive approach reinforces trust in the system and positions the company as a reliable, customer-focused leader.`
            },
            {
                prompt: "Create a manual override system for customer service representatives",
                isCorrect: false,
                feedback: `Missed opportunity! The organization exhibits a "Nascent" level of maturity, relying on reactive measures that fail to address underlying data management issues. Inconsistent processes slow response times, leading to customer frustration and diminished trust. The lack of proper data governance leaves the company vulnerable to inefficiencies, risking both reputation and market share.`
            }
        ]
    },
    {
        title: "The Security Situation",
        prompt: "TechnoVista’s R&D department has developed a groundbreaking GenAI system for product design. Before launch, you need to ensure its security. This falls under the “Operational and Technology Management” domain, specifically addressing “Enhanced Operational and IT Security Risks.” The success of this innovative system depends on robust security measures to protect valuable intellectual property and maintain TechnoVista’s competitive edge.",
        options: [
            {
                prompt: "Implement a quarterly security review process",
                isCorrect: false,
                feedback: `The organization exhibits an "Emerging" level of maturity, relying on periodic reviews that leave it exposed to evolving threats. This reactive approach increases the risk of breaches, resulting in compromised intellectual property and potential legal challenges. The loss of consumer trust and competitive advantage highlights the need for more robust, real-time security practices.`
            },
            {
                prompt: "Maintain continuous monitoring systems for security threats",
                isCorrect: true,
                feedback: `The organization operates at a "Leading" level of maturity, with continuous monitoring systems that effectively mitigate security risks. This proactive stance ensures that threats are identified and addressed in real-time, protecting valuable intellectual property. With strong security measures in place, the company maintains its competitive edge and builds a reputation for reliability and innovation.`
            }
        ]
    },
    {
        title: "The Ethical Enigma",
        prompt: "TechnoVista is developing a GenAI system to assist in medical diagnoses. While the potential benefits are significant, there are concerns about the ethical implications and potential biases in the system. This scenario falls under the “Human, Ethical, and Social Considerations” domain of the GenAI Governance Framework. You need to address these concerns to ensure the AI system is both effective and ethically sound.",
        options: [
            {
                prompt: "Implement a bias detection and mitigation framework",
                isCorrect: true,
                feedback: `The organization operates at an "Established" level of maturity, proactively addressing biases through a structured detection and mitigation framework. This approach ensures fair and accurate outcomes, promoting trust in the AI system among both healthcare professionals and patients. Strong ethical governance strengthens the company’s reputation as a responsible innovator in the healthcare sector.`
            },
            {
                prompt: "Rely on the expertise of the medical professionals using the system",
                isCorrect: false,
                feedback: `The organization exhibits a "Nascent" level of maturity, exposing itself to risks by relying solely on human oversight. Unchecked biases within the AI system can perpetuate disparities in diagnoses, leading to ethical and legal challenges. This oversight undermines trust, damaging the company’s standing in the healthcare community and highlighting the need for robust ethical controls.`
            }
        ]
    },
    {
        title: "The Compliance Conundrum",
        prompt: "TechnoVista is expanding its GenAI-powered services to international markets. You need to ensure compliance with various international AI regulations. This scenario falls under the “Data and Compliance Management” domain, specifically addressing “Legal and Regulatory Risks.” The success of TechnoVista’s global expansion depends on navigating the complex landscape of international AI governance.",
        options: [
            {
                prompt: "Adapt existing compliance policies for each new market as you enter",
                isCorrect: false,
                feedback: `The organization exhibits an "Emerging" level of maturity, relying on ad-hoc policy adjustments that introduce inconsistencies and oversights. This reactive approach increases the likelihood of legal issues in multiple jurisdictions, disrupting operations and harming the company’s global reputation. A lack of cohesive compliance strategy jeopardizes long-term growth and market success.`
            },
            {
                prompt: "Develop a comprehensive cross-border compliance strategy",
                isCorrect: true,
                feedback: `The organization operates at a "Leading" level of maturity, with a comprehensive cross-border compliance strategy in place. This proactive approach ensures consistent adherence to international regulations, minimizing legal risks and supporting smooth global expansion. Strong compliance management reinforces trust and positions the company as a reliable, forward-thinking market leader.`
            }
        ]
    },
    {
        title: "The Transparency Test",
        prompt: "Regulators are demanding detailed explanations for TechnoVista’s AI-driven financial decisions. This situation falls under the “Transparency, Accountability, and Continuous Improvement” domain of the GenAI Governance Framework. The company’s ability to provide clear, traceable information about its AI decision-making processes is crucial for maintaining regulatory compliance and stakeholder trust.",
        options: [
            {
                prompt: "Implement comprehensive GenAI decision-making documentation",
                isCorrect: true,
                feedback: `The organization operates at a "Leading" level of maturity, with comprehensive documentation ensuring transparency and accountability in AI decision-making. This detailed approach builds trust with regulators and stakeholders, reinforcing the company's reputation as an industry leader in responsible AI governance. Clear traceability minimizes compliance risks and supports sustainable innovation.`
            },
            {
                prompt: "Provide a high-level overview of the AI’s decision-making process",
                isCorrect: false,
                feedback: `The organization exhibits a "Nascent" or "Emerging" level of maturity, falling short of regulatory expectations with insufficient transparency. High-level overviews fail to provide the necessary traceability, exposing the company to fines and heightened scrutiny. This lack of accountability undermines trust, stifles innovation, and creates barriers to future AI development.`
            }
        ]
    },
    {
        title: "The Evolution Endeavor",
        prompt: "AI technology is advancing rapidly, and TechnoVista needs to stay ahead of the curve. This scenario relates to the “Continuing Evolution of the Technology Risks” in the “Transparency, Accountability, and Continuous Improvement” domain. Your challenge is to ensure that TechnoVista’s GenAI governance practices evolve alongside technological advancements.",
        options: [
            {
                prompt: "Focus on optimizing current GenAI systems",
                isCorrect: false,
                feedback: `The organization operates at a "Leading" level of maturity, proactively embracing innovation through dedicated labs for experimenting with emerging GenAI technologies. This forward-thinking approach keeps the company at the forefront of advancements, driving new applications and maintaining its competitive edge in the market. Continuous evolution ensures long-term growth and leadership.`
            },
            {
                prompt: "Establish innovation labs to experiment with emerging GenAI technologies",
                isCorrect: true,
                feedback: `The organization exhibits an "Emerging" level of maturity, focusing solely on optimizing current systems while neglecting future technological advancements. This short-sighted approach leaves the company vulnerable to disruption as competitors adopt cutting-edge innovations. Over time, market relevance and competitive positioning deteriorate, limiting growth opportunities.`
            }
        ]
    },
    {
        title: "The Governance Gambit",
        prompt: "To maintain its AI leadership, TechnoVista needs a comprehensive governance overhaul. This final challenge encompasses all domains of the GenAI Governance Framework, testing your ability to implement a holistic, forward-thinking approach to AI governance.",
        options: [
            {
                prompt: "Integrate dynamic, continuously evolving GenAI governance practices across all domains",
                isCorrect: true,
                feedback: `The organization operates at a "Leading" level of maturity, with dynamic and adaptive governance practices integrated across all domains. This holistic approach ensures the company remains agile, addressing emerging challenges proactively and setting new industry standards. Continuous evolution of governance practices drives sustainable growth, fostering innovation and long-term success.`
            },
            {
                prompt: "Implement a centralized AI governance committee to oversee all GenAI initiatives",
                isCorrect: false,
                feedback: `The organization exhibits an "Established" level of maturity in some areas, but the reliance on a centralized governance structure limits agility. As AI technologies evolve rapidly, the governance framework struggles to keep pace, creating bottlenecks and slowing innovation. This rigidity erodes the company’s competitive edge over time, underscoring the need for a more adaptive approach.`
            }
        ]
    }
]
