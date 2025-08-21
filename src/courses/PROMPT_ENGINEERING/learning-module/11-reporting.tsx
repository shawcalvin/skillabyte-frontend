"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Tile } from "@/components/ui/tile";
import { Divider } from "@/components/ui/divider";
import { Subheading } from "@/components/ui/heading";
import { ListItem, OrderedList, Text, UnorderedList } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Reporting and Documentation"} {...props}>
                <Text>GenAI is improving the way accountants approach reporting and documentation tasks. Here are three examples of how GenAI is being used in this area:</Text>
                <div className="my-8">
                    <Subheading className="mt-4 mb-2">Example</Subheading>
                    <Text>
                        You’ve just finalized an audit and have compiled your findings. Now, you need to draft a comprehensive report for the audit committee, synthesizing the objective, scope, and findings into a clear, actionable document.
                    </Text>
                    <Subheading className="mt-4 mb-2">Discussion</Subheading>
                    <Text>
                        GenAI can significantly streamline the report writing process. By inputting your audit details, you can quickly generate a well-structured report that effectively communicates your findings. Moreover, GenAI’s versatility allows you to easily adapt the report for different audiences, such as line management, with minimal additional effort.
                    </Text>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt</Subheading>
                    <Tile>
                        <Text>
                            Act as an experienced internal auditor drafting a report for the audit committee. Use the following information to create a comprehensive audit report:
                        </Text>
                        <Text className="italic">
                            Objective: [Insert audit objective] Scope: [Insert audit scope] Findings: [List key findings]
                        </Text>
                        <Text>
                            The report should include:
                        </Text>
                        <OrderedList>
                            <ListItem><Text>An executive summary</Text></ListItem>
                            <ListItem><Text>Detailed explanation of each finding, including its risk level and potential impact</Text></ListItem>
                            <ListItem><Text>Recommendations for addressing each finding</Text></ListItem>
                            <ListItem><Text>A timeline for implementing recommendations</Text></ListItem>
                            <ListItem><Text>Conclusion</Text></ListItem>
                        </OrderedList>
                        <Text>
                            Format the report in a professional structure suitable for presentation to the audit committee.
                        </Text>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Prompt Effectiveness</Subheading>
                    <Text>
                        This prompt employs role prompting by asking the AI to act as an experienced internal auditor. It uses constrained prompting by specifying the exact components the report should include. The prompt also encourages comprehensive output by requesting detailed explanations and recommendations for each finding.
                    </Text>
                    <Divider className="mt-4 mb-8" />
                </div>
                <div className="my-8">
                    <Subheading className="mt-4 mb-2">Example</Subheading>
                    <Text>
                        You have a detailed written control narrative and need to convert it into a clear, visual flowchart for easier comprehension and presentation.
                    </Text>
                    <Subheading className="mt-4 mb-2">Discussion</Subheading>
                    <Text>
                        GenAI can automate the process of turning text-based control narratives into visual flowcharts using open-source tools like Mermaid. This not only saves time but also ensures consistency in documentation across different audits or projects.
                    </Text>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt</Subheading>
                    <Tile>
                        <Text>
                            I have a control narrative that I need to convert into a flowchart using Mermaid syntax. Here’s the narrative:
                        </Text>
                        <Text className="italic">
                            [Insert control narrative text]
                        </Text>
                        <Text>
                            Please:
                        </Text>
                        <UnorderedList>
                            <ListItem><Text>Analyze the narrative and identify the key steps or decision points</Text></ListItem>
                            <ListItem><Text>Create a flowchart structure that accurately represents the process described in the narrative</Text></ListItem>
                            <ListItem><Text>Write the Mermaid code to generate this flowchart</Text></ListItem>
                            <ListItem><Text>Provide any notes on areas where the flowchart might not fully capture nuances in the narrative, requiring manual review or adjustment</Text></ListItem>
                        </UnorderedList>
                        <Text>
                            [The output is then entered into the Mermaid website to automatically generate the editable flowchart]
                        </Text>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Prompt Effectiveness</Subheading>
                    <Text>
                        This prompt uses multi-step prompting by breaking down the task into clear, sequential steps. It employs constrained prompting by specifying the exact output needed (Mermaid code). The prompt also encourages critical thinking by requesting notes on potential limitations, promoting a more thorough and accurate final product.
                    </Text>
                    <Divider className="mt-4 mb-8" />
                </div>
                <div className="my-8">
                    <Subheading className="mt-4 mb-2">Example</Subheading>
                    <Text>
                        You’ve completed a written audit report and want to convert it into a more engaging video format for easier consumption by stakeholders.
                    </Text>
                    <Subheading className="mt-4 mb-2">Discussion</Subheading>
                    <Text>
                        GenAI can transform written audit reports into scripts suitable for video presentation. These scripts can then be used with AI avatar technology, such as Synthesia, to create professional-looking video reports. This approach can make complex audit findings more accessible and engaging for a wider audience.
                    </Text>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt</Subheading>
                    <Tile>
                        <Text>
                            I need to convert the following written audit report into a script for a video presentation. The video should be engaging, clear, and suitable for a general business audience who may not have deep accounting knowledge.
                        </Text>
                        <Text className="italic">
                            [Insert written audit report]
                        </Text>
                        <Text>
                            Please create a script that:
                        </Text>
                        <OrderedList>
                            <ListItem><Text>Starts with a brief, attention-grabbing introduction</Text></ListItem>
                            <ListItem><Text>Summarizes the key findings in a clear, concise manner</Text></ListItem>
                            <ListItem><Text>Explains any technical terms in simple language</Text></ListItem>
                            <ListItem><Text>Includes suggestions for visual elements (charts, graphs, etc.) to illustrate key points</Text></ListItem>
                            <ListItem><Text>Ends with a clear summary of recommendations and next steps</Text></ListItem>
                            <ListItem><Text>Is approximately 5 minutes long when read at a normal speaking pace</Text></ListItem>
                        </OrderedList>
                        <Text>
                            Format the script with clear sections and include notes for visual elements or transitions between topics.
                        </Text>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Prompt Effectiveness</Subheading>
                    <Text>
                        This prompt uses constrained prompting by specifying the exact elements the video script should include and its target length. It encourages comprehensive output by requesting not just a translation of the written report, but also suggestions for visual elements and explanations of technical terms. The prompt also promotes accessibility by specifying the target audience, ensuring the script is suitable for viewers without deep accounting knowledge.
                    </Text>
                </div>
                <Text className="mt-8">
                    These examples demonstrate how GenAI can enhance reporting and documentation in accounting, from generating adaptable written reports to creating visual process documentation and engaging video presentations. By leveraging GenAI in these ways, accountants can communicate their findings more effectively, making complex information more accessible and actionable for various stakeholders.
                </Text>
            </ModuleContainer>
        </>
    );
}