"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, OrderedList, Strong, Text, UnorderedList } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Conclusion"} isFinished={true} {...props}>
                <Text>
                    Congratulations on completing the GenAI Risks and Governance escape room training! Throughout this interactive experience, you&apos;ve navigated complex scenarios that tested your understanding of Generative AI implementation, risk assessment, and governance best practices. You&apos;ve applied the GenAI Governance Framework to real-world situations, evaluated maturity levels, and developed actionable governance strategies. To solidify your knowledge, please review the learning objectives outlined at the beginning of the training. Once you feel confident in your grasp of these key concepts, proceed to take the final graded quiz to demonstrate your mastery of the material.
                </Text>
                <Heading>
                    Learning Objectives
                </Heading>
                <OrderedList>
                    <ListItem>
                        Identify key risks associated with GenAI in business contexts and recognize appropriate governance strategies.
                    </ListItem>
                    <ListItem>
                        Apply the GenAI Governance Framework to address real-world situations in accounting practices.
                    </ListItem>
                    <ListItem>
                        Evaluate the maturity level of GenAI implementation in accounting contexts using the provided maturity model.
                    </ListItem>
                    <ListItem>
                        Distinguish between key components of a basic GenAI governance action plan for an accounting environment.
                    </ListItem>
                </OrderedList>
                <Heading>
                    Key Terms
                </Heading>
                <UnorderedList>
                    <ListItem>
                        <Text>
                            <Strong>Data and Compliance Management</Strong>: One of the five domains in the GenAI Governance Framework, focusing on managing data and ensuring regulatory compliance.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Emerging</Strong>: The second level in the GenAI Governance Maturity Model, indicating growing implementation but not yet fully established.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Established</Strong>: The third level in the GenAI Governance Maturity Model, indicating a well-developed implementation of GenAI governance.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>GenAI Governance Framework</Strong>: A comprehensive framework outlining key procedures across five domains of AI management, spanning operational, technological, human, ethical, and social considerations.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Generative Artificial Intelligence (GenAI)</Strong>: AI systems that can generate new content—such as text, images, music, or video—based on the data they are trained on.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Human, Ethical, and Social Considerations</Strong>: One of the five domains in the GenAI Governance Framework, addressing the impact of GenAI on people and society.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Human-in-the-Loop</Strong>: A policy requiring human oversight in AI-driven processes, especially for critical decisions.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Leading</Strong>: The highest level in the GenAI Governance Maturity Model, indicating advanced and comprehensive implementation of GenAI governance.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Maturity Model</Strong>: A tool used to evaluate an organization’s current AI governance capabilities and guide their journey towards improved maturity.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Nascent</Strong>: The lowest level in the GenAI Governance Maturity Model, indicating initial or basic implementation.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Operational and Technology Management</Strong>: One of the five domains in the GenAI Governance Framework, dealing with the management of GenAI systems and associated technologies.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Strategic Alignment and Control Environment</Strong>: One of the five domains in the GenAI Governance Framework, focusing on aligning GenAI initiatives with organizational objectives.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Transparency, Accountability, and Continuous Improvement</Strong>: One of the five domains in the GenAI Governance Framework, emphasizing the need for clear processes and ongoing enhancement of GenAI systems.
                        </Text>
                    </ListItem>
                </UnorderedList>
            </ModuleContainer>
        </>
    );
}