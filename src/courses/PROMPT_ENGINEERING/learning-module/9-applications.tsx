"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, Text, UnorderedList } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Applications in Accounting"} {...props}>
                <Text>
                    Now that you know the basics of prompt engineering, we will provide numerous examples of how you can use it in various accounting settings. The purpose of this section is to help you start to generate ideas of how you can use GenAI in your day-to-day work. These examples focus on simple tasks that many accountants perform. As you review these examples, write down other ideas you want to try in your own work. Also, carefully review the prompts so you can see best practices of how the prompting techniques you have learned can be used to enhance your work. We&apos;ll cover the following areas:
                </Text>
                <UnorderedList>
                    <ListItem><Text>Data Analysis and Risk Management</Text></ListItem>
                    <ListItem><Text>Reporting and Documentation</Text></ListItem>
                    <ListItem><Text>Communication and Content Creation</Text></ListItem>
                    <ListItem><Text>Training and Development </Text></ListItem>
                </UnorderedList>
                <Text>
                    For each area, we&apos;ll provide examples, discuss the role of GenAI, and present a hypothetical prompt along with an explanation of its effectiveness.
                </Text>
            </ModuleContainer>
        </>
    );
}