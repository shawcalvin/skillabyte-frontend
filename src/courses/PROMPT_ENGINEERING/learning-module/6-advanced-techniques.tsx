"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ListItem, Strong, Text, UnorderedList } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Advanced Prompting Techniques"} {...props}>
                <Text>
                    Building on the foundational skills of prompt engineering, we now move into more advanced techniques that allow you to harness AI tools in increasingly sophisticated ways. These techniques are designed to tackle more complex tasks, handle nuanced situations, and generate highly specific outputs. Mastering these methods can significantly expand your ability to use GenAI effectively in a variety of accounting contexts.
                </Text>
                <Text>
                    One advanced technique is <Strong>role prompting</Strong>, where you instruct the AI to take on a specific role or perspective when generating responses. This can be particularly useful in accounting scenarios that require a nuanced understanding of the subject matter. For example, you might prompt the GenAI to “Act as a tax advisor and draft a response to a client inquiry about potential deductions for small businesses.” By assigning a role to the GenAI (to be a tax advisor), you can guide it to produce more contextually appropriate and informed responses.
                </Text>
                <Text>
                    <Strong>Multi-step prompting</Strong> is another powerful approach, especially for tasks that require a sequence of actions or decisions. This technique involves guiding the GenAI through a series of individual prompts, each addressing a specific aspect of the overall task. In accounting, this might involve guiding the GenAI through a series of steps to perform a complex analysis. For instance, when conducting a financial risk assessment, you might first prompt the GenAI to identify potential risk factors, then to analyze these risks based on historical data, and finally to recommend mitigation strategies. By breaking down the task into smaller, manageable steps, multi-step prompting ensures that the GenAI’s output is both thorough and logically structured.
                </Text>
                <Text>
                    <Strong>Constrained prompting</Strong> involves setting specific parameters or limitations within which the GenAI must operate. This technique is valuable when you need precise, targeted outputs. In accounting, you might use constrained prompting to restrict the GenAI’s analysis to a particular set of data or to ensure compliance with specific regulatory guidelines. For example, you could prompt the GenAI to “Review this financial statement but focus only on cash flow inconsistencies without considering revenue or expense fluctuations.” Constrained prompts help ensure that the AI remains focused on the most relevant aspects of a task, reducing the risk of irrelevant or extraneous information.
                </Text>
                <Text>
                    <Strong>Recursive prompting</Strong> is particularly useful when dealing with complex, iterative tasks. This technique involves using the output from one prompt as the input for another, allowing you to refine and build upon the GenAI’s responses iteratively. In an audit scenario, for instance, you might first prompt the GenAI to generate a list of potential discrepancies in financial records. Then, you could take that list and prompt the GenAI to provide detailed explanations or justifications for each item, effectively deepening the analysis with each iteration. As another example, you might ask the GenAI to provide a list of common writing errors in professional reports. You could then use that list in a follow-up prompt, asking the GenAI to proofread your report.
                </Text>
                <Text>
                    <Strong>Adversarial prompting</Strong> is an advanced technique where you challenge the GenAI’s responses by intentionally providing counterarguments or conflicting information to test the robustness of its outputs. This is particularly useful in scenarios where accuracy is critical, such as fraud detection or compliance checks. By presenting the GenAI with hypothetical situations or conflicting data, you can assess how well it handles ambiguity and complexity, thereby ensuring that the final output is reliable.
                </Text>
                <Table striped className="my-8 p-9">
                    <TableHead>
                        <TableRow>
                            <TableHeader>Technique</TableHeader>
                            <TableHeader>Description</TableHeader>
                            <TableHeader>Key Benefits</TableHeader>
                            <TableHeader>Example Use in Accounting</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className="whitespace-normal break-words">Role Prompting</TableCell>
                            <TableCell className="whitespace-normal break-words">
                                Instructs the AI to take on a specific role or perspective when generating responses
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Produces more contextually appropriate responses</ListItem>
                                    <ListItem>Enhances subject-specific outputs</ListItem>
                                    <ListItem>Improves relevance to specific scenarios</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                “Act as a tax advisor and draft a response to a client inquiry about potential deductions for small businesses”
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="whitespace-normal break-words">Multi-step Prompting</TableCell>
                            <TableCell className="whitespace-normal break-words">
                                Guides the AI through a series of individual prompts, each addressing a specific aspect of the overall task
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Ensures thorough and logically structured output</ListItem>
                                    <ListItem>Breaks complex tasks into manageable steps</ListItem>
                                    <ListItem>Allows for more comprehensive analysis</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                Conducting a financial risk assessment:
                                <br />
                                1. Identify potential risk factors <br />
                                2. Analyze risks based on historical data <br />
                                3. Recommend mitigation strategies
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="whitespace-normal break-words">Constrained Prompting</TableCell>
                            <TableCell className="whitespace-normal break-words">
                                Sets specific parameters or limitations within which the AI must operate
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Produces precise, targeted outputs</ListItem>
                                    <ListItem>Ensures focus on relevant aspects</ListItem>
                                    <ListItem>Helps maintain compliance with specific guidelines</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                “Review this financial statement but focus only on cash flow inconsistencies without considering revenue or expense fluctuations”
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="whitespace-normal break-words">Recursive Prompting</TableCell>
                            <TableCell className="whitespace-normal break-words">
                                Uses the output from one prompt as the input for another, allowing for iterative refinement
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Deepens analysis through iteration</ListItem>
                                    <ListItem>Allows for progressive refinement of outputs</ListItem>
                                    <ListItem>Useful for complex, multi-layered tasks</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                1. Generate a list of potential discrepancies in financial records <br />
                                2. Provide detailed explanations for each discrepancy <br />
                                3. Suggest corrective actions for each explanation
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="whitespace-normal break-words">Adversarial Prompting</TableCell>
                            <TableCell className="whitespace-normal break-words">
                                Challenges the AI’s responses by providing counterarguments or conflicting information
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Tests robustness of AI outputs</ListItem>
                                    <ListItem>Enhances accuracy in critical scenarios</ListItem>
                                    <ListItem>Useful for assessing AI’s handling of ambiguity and complexity</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                Present conflicting financial data in a fraud detection scenario to test the AI’s ability to identify inconsistencies and potential fraudulent activities
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </ModuleContainer>
        </>
    );
}