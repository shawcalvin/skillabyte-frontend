"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, OrderedList, Text, UnorderedList } from "@/components/ui/text";
import { Heading, Subheading } from "@/components/ui/heading";
import { ChallengeFourWidget } from "./challenge-4-widget";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Challenge 4 - Develop a basic GenAI governance action plan for an accounting environment."} isComplete={false} {...props}>
                <Text>
                    You have been brought in as an outside consultant by TechnoVista Solutions, a rapidly growing tech company that has recently implemented several GenAI systems across its operations. The company’s leadership is concerned about potential risks and wants to ensure their GenAI governance policies are up to industry standards. Company management developed the GenAI governance policies they were most concerned about based on the five domains of the GenAI Governance Framework:
                </Text>
                <OrderedList>
                    <ListItem>
                        <Text>Strategy and Planning</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Operational and Technology Management</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Human, Ethical, and Social Considerations</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Security and Risk Management</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Compliance and Audit Management</Text>
                    </ListItem>
                </OrderedList>
                <Heading>Your Task</Heading>
                <Text>As an expert consultant, you are asked to:</Text>
                <OrderedList>
                    <ListItem>
                        <Text>Review the provided policies carefully</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Identify which policies, if any, need to be changed to align with best practices in GenAI governance. Once you correctly identify the policies that need changing, you will be asked to explain to company management:</Text>
                        <UnorderedList>
                            <ListItem>
                                <Text>Why the current policy is problematic or insufficient</Text>
                            </ListItem>
                            <ListItem>
                                <Text>How the policy should be changed to address these issues.</Text>
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                </OrderedList>
                <Text>
                    If your answers are deemed acceptable, you will be given a code that allows you to advance to the next screen.
                </Text>
                <Heading>Important Notes</Heading>
                <UnorderedList>
                    <ListItem>
                        <Text>Do not recommend new policies. Focus only on identifying and improving existing policies that need revision.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Not all policies may need changes. Be prepared to defend well-formulated policies if questioned.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Your analysis should be grounded in the principles of the GenAI Governance Framework.</Text>
                    </ListItem>
                </UnorderedList>
                <Text>
                    Remember, your role is to provide expert guidance to improve TechnoVista’s existing policies, not to overhaul their entire governance structure. Good luck, consultant!
                </Text>
                <Heading>TechnoVista Solutions GenAI Governance Policies</Heading>
                <Subheading>1. Strategy and Planning</Subheading>
                <Text>1.1 Innovation: We encourage innovation with GenAI while adhering to established ethical guidelines and risk management protocols. All new GenAI initiatives must be reviewed and approved by our AI Governance Committee before implementation.</Text>
                <Text>1.2 Risk Assessment: We conduct comprehensive, multi-faceted risk assessments of our GenAI systems quarterly, covering technical, ethical, social, and financial risks.</Text>
                <Subheading>2. Operational and Technology Management</Subheading>
                <Text>2.1 Data Usage: All employees must use company-approved, secure GenAI tools for data analysis. Sensitive financial information must only be processed on internal, authorized systems.</Text>
                <Text>2.2 Updates and Maintenance: GenAI systems are updated on a regular schedule, with additional updates as needed. The IT department, in collaboration with relevant business units, determines the update frequency based on system criticality and regulatory requirements.</Text>
                <Subheading>3. Human, Ethical, and Social Considerations</Subheading>
                <Text>3.1 Ethical Considerations: Our GenAI systems are designed with ethics as a primary consideration. We have established an ethics board to oversee AI development and usage, ensuring alignment with our company values and societal norms.</Text>
                <Text>3.2 Training and Education: Employees are encouraged to use public GenAI tools for non-sensitive tasks to gain experience. There is no formal training program, as we believe in learning through hands-on experience.</Text>
                <Subheading>4. Security and Risk Management</Subheading>
                <Text>4.1 Human Oversight: To fully leverage the power of GenAI, all AI-generated reports and analyses are considered final and do not require human review before submission to clients or stakeholders.</Text>
                <Text>4.2 Model Transparency: Our proprietary GenAI models are considered valuable assets. We implement explainable AI techniques and allow regular internal audits of the AI model’s decision-making process to ensure transparency and trust.</Text>
                <Subheading>5. Compliance and Audit Management</Subheading>
                <Text>5.1 Compliance: Our GenAI systems are designed with a flexible architecture to adapt to regulatory changes. We have a dedicated team that monitors regulatory updates and initiates system adjustments as needed.</Text>
                <Text>5.2 Incident Response: In the event of a GenAI-related incident, employees should report it to their immediate supervisor, who will decide whether further action is necessary.</Text>
                <ChallengeFourWidget courseId={props.courseId} attemptId={props.attemptId} setIsComplete={() => props.setIsComplete(true)} />
            </ModuleContainer>
        </>
    );
}