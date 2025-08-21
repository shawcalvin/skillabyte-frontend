"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, OrderedList, Text } from "@/components/ui/text";
import { Subheading } from "@/components/ui/heading";

import InteractiveWidget from './interactive-widget'

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Key GenAI Risks"} {...props}>
                <Text>
                    As part of developing this framework, the authors interviewed and surveyed numerous professionals and academics about the most important risks that GenAI introduces to organizations. They categorized these risks into 16 categories. We show you the 16 categories, but reading over this list can be a bit overwhelming…and boring. To make this content sink in, review the stories presented in the widget related to each risk. While each story is hypothetical, they are representative of the challenges that are occurring in real organizations.
                </Text>
                <Subheading>Risk Categories</Subheading>
                <OrderedList>
                    <ListItem>
                        <Text>Enhanced Operational and IT Security Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Strategic and Planning Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Data-Related Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Technology Evaluation and Selection Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Transparency and Trust Issues</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Ethical and Bias Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Process Management Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Control Environment Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Environment, Social, and Governance (ESG) Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Knowledge and Training Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Traceability Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>HR and Employment Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Psychological and Social Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Legal and Regulatory Regime Risks</Text>
                    </ListItem>
                    <ListItem>
                        <Text>High Conceptual or Hypothetical Risk</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Miscellaneous Risks</Text>
                    </ListItem>
                </OrderedList>
                <InteractiveWidget />
                <Text>The framework maps each of these risks to the 5 domains, which we will cover subsequently.</Text>
            </ModuleContainer>
        </>
    );
}