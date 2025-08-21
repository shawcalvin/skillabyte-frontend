"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ListItem, Text, UnorderedList } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Summary of Prompting Techniques"} {...props}>
                <Table className="my-8">
                    <TableHead>
                        <TableRow>
                            <TableHeader>Technique</TableHeader>
                            <TableHeader>Strengths</TableHeader>
                            <TableHeader>Weaknesses</TableHeader>
                            <TableHeader>Best Use Case</TableHeader>
                            <TableHeader>Preparation Required</TableHeader>
                            <TableHeader>Output Consistency</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className="whitespace-normal break-words">Zero-shot Prompting</TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Quick and straightforward</ListItem>
                                    <ListItem>Relies on model&apos;s existing knowledge</ListItem>
                                    <ListItem>Useful for simple, direct tasks</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>May lack specificity</ListItem>
                                    <ListItem>Less effective for complex tasks</ListItem>
                                    <ListItem>Potential for misunderstanding context</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>General knowledge questions</ListItem>
                                    <ListItem>Simple classifications</ListItem>
                                    <ListItem>Basic text generation</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">Minimal - just formulating the prompt</TableCell>
                            <TableCell className="whitespace-normal break-words">Can vary depending on prompt clarity</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="whitespace-normal break-words">Few-shot Prompting</TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Provides context through examples</ListItem>
                                    <ListItem>Improves accuracy for specific patterns</ListItem>
                                    <ListItem>Effective for complex or nuanced tasks</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Requires preparation of examples</ListItem>
                                    <ListItem>May introduce bias from examples</ListItem>
                                    <ListItem>Can be time-consuming to set up</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Specific formatting tasks</ListItem>
                                    <ListItem>Domain-specific queries</ListItem>
                                    <ListItem>Tasks requiring consistent output structure</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">Moderate - need to prepare relevant examples</TableCell>
                            <TableCell className="whitespace-normal break-words">Generally high, especially with well-chosen examples</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="whitespace-normal break-words">Chain-of-thought Prompting</TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Guides through complex reasoning</ListItem>
                                    <ListItem>Improves transparency of AI&apos;s process</ListItem>
                                    <ListItem>Useful for multi-step problem-solving</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Can be lengthy and time-consuming</ListItem>
                                    <ListItem>May oversimplify complex issues</ListItem>
                                    <ListItem>Requires careful structuring of prompts</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">
                                <UnorderedList>
                                    <ListItem>Complex problem-solving</ListItem>
                                    <ListItem>Decision-making processes</ListItem>
                                    <ListItem>Explanations of reasoning</ListItem>
                                </UnorderedList>
                            </TableCell>
                            <TableCell className="whitespace-normal break-words">High - need to outline step-by-step thought process</TableCell>
                            <TableCell className="whitespace-normal break-words">High for reasoning process, may vary in final conclusions</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </ModuleContainer>
        </>
    );
}