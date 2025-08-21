"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Implications for Accounting Professionals"} {...props}>
                <Text>As AI becomes increasingly widespread, accounting professionals must develop new competencies, including a solid understanding of AI. Accountants will need to master AI tools to either augment their existing tasks or take over functions previously performed by humans. Since adopting new technologies can be challenging, accountants should dedicate time to familiarize themselves with these systems. Given the fast-paced nature of AI advancements, a commitment to ongoing learning and adaptation is essential. Staying updated on the latest AI innovations and best practices will be crucial for accountants to maintain their edge in the industry. </Text>
            </ModuleContainer>
        </>
    );
}