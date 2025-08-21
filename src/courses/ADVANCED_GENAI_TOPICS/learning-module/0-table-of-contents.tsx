"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ListItem, OrderedList, Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {

    return (
        <>
            <ModuleContainer title={"Table of Contents"} {...props}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>What is GenAI?</TableCell>
                            <TableCell>2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>GenAI Model Development</TableCell>
                            <TableCell>3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pre-Training and Post-Training Techniques</TableCell>
                            <TableCell>4</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Deployment Strategies: Tool Integration</TableCell>
                            <TableCell>5</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Runtime Strategies: Prompting</TableCell>
                            <TableCell>6</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Deployment Strategies: Multi-Agent Systems</TableCell>
                            <TableCell>7</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Review Quiz</TableCell>
                            <TableCell>8</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Runtime Strategies: Retrieval-Augmented Generation</TableCell>
                            <TableCell>9</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Runtime Strategies: Advanced Reasoning Models</TableCell>
                            <TableCell>10</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Review Quiz</TableCell>
                            <TableCell>11</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>The Importance of Human-in-the-Loop</TableCell>
                            <TableCell>12</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Selecting the Right Techniques</TableCell>
                            <TableCell>13</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Conclusion</TableCell>
                            <TableCell>14</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </ModuleContainer>
        </>
    );
}