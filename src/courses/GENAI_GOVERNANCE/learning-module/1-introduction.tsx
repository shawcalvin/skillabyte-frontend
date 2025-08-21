"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, OrderedList, Strong, Text } from "@/components/ui/text";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Introduction to Generative AI"} {...props}>
                <Text>
                    Introduction to Generative AI

                    Generative artificial intelligence, or GenAI for short, involves AI systems that can generate new content—such as text, images, music, or video—based on the data they are trained on. You are likely familiar with GenAI models like OpenAI’s ChatGPT, Microsoft’s Copilot, or Google’s Gemini models. By leveraging advanced machine learning techniques and neural networks, these models can identify patterns and structures within existing datasets, enabling it to produce results that mimic human creativity. Common business applications include:
                </Text>
                <OrderedList>
                    <ListItem>
                        <Text>
                            <Strong>Text Generation</Strong>: Automating customer support responses to common inquiries, which helps improve efficiency and ensures consistent communication.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Image Creation</Strong>: Designing marketing visuals or promotional material automatically, reducing the cost and time involved in hiring graphic designers.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Music Generation</Strong>: Creating background music for commercials or corporate videos, saving on costs for licensing or custom music production.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Data Analysis and Augmentation</Strong>: Enhancing customer segmentation by generating insights from diverse datasets, helping marketing teams to better target specific demographics.
                        </Text>
                    </ListItem>
                </OrderedList>
                <Text>
                    GenAI has powerful capabilities, but it also introduces risks for both individuals and organizations. At an individual employee level, there is a risk of over-reliance on GenAI for routine decision-making, which could lead to skill degradation. For instance, an employee might defer entirely to GenAI for financial report drafting without verifying the accuracy, resulting in potential errors being overlooked. If the employee continuously defers to GenAI for this and similar tasks, they may eventually lose the ability to complete the task without AI assistance. At a company-wide level, governance challenges arise in ensuring that GenAI systems are compliant with data privacy regulations across different jurisdictions. For example, if GenAI processes customer financial data without adequate encryption or adherence to GDPR, it could lead to significant regulatory penalties.
                </Text>
                <Text>
                    This training covers the most common risks identified by professionals that GenAI introduces and then discusses a GenAI Governance Framework and Maturity Model, which provides controls to help reduce risk and helps companies be more successful at using GenAI. While the training introduces a specific framework, the principles of this framework generalize to other frameworks and governance over GenAI.
                </Text>
            </ModuleContainer>
        </>
    );
}