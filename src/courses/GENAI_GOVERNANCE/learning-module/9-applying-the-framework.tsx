"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, OrderedList, Text } from "@/components/ui/text";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Applying the GenAI Framework"} {...props}>
                <Text>
                    To help you internalize the benefits of a framework, we now present you with a simulated consulting experience. You are being tested by TechnoVista Solutions, a cutting-edge tech company that has recently implemented several GenAI systems across its operations, to see if they will hire you to perform consulting work for the company. The company&apos;s leadership is concerned about potential risks and wants to ensure their GenAI governance is up to industry standards.
                </Text>
                <Text>
                    Your mission is to first prove you have what it takes to work for TechnoVista and then guide TechnoVista through a series of critical challenges, applying your expertise in the GenAI Governance Framework and Maturity Model. This consulting engagement will test your ability to:
                </Text>
                <OrderedList>
                    <ListItem>
                        <Text>
                            Identify and explain key GenAI risks in a business context
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            Apply the framework to real-world scenarios
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            Evaluate the maturity of GenAI implementation using the provided model
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            Develop actionable governance strategies
                        </Text>
                    </ListItem>
                </OrderedList>
                <Text>
                    While this engagement mimics a fun escape room, it&apos;s designed to deepen your understanding of GenAI risks, controls, and governance principles. Your recommendations will shape TechnoVista&apos;s approach to responsible AI use.
                </Text>
                <Text>
                    To prepare for your consultation, ensure you have the GenAI Governance Framework and Maturity Model readily available. You should carefully review both before you begin. These will be valuable references to use as you navigate the challenges ahead.
                </Text>
                <Text>
                    Are you ready to showcase your expertise and help TechnoVista Solutions secure its future in the world of GenAI? Let&apos;s see if you can get hired to help TechnoVista Solutions!
                </Text>
            </ModuleContainer>
        </>
    );
}