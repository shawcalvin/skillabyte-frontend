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
            <ModuleContainer title={"Data Analysis and Risk Management"} {...props}>
                <div className="my-8">
                    <Subheading className="mt-4 mb-2">Example</Subheading>
                    <Text>
                        Imagine you’re working on a complex financial model that requires a fuzzy match between items in column A and column B. Traditionally, this would involve large Excel formulas that can be time-consuming to write and debug.
                    </Text>
                    <Subheading className="mt-4 mb-2">Discussion</Subheading>
                    <Text>
                        GenAI can significantly streamline this process. It can help write complex formulas and even assist in troubleshooting when formulas aren’t working as expected. This not only saves time but also reduces the risk of errors in your financial models.
                    </Text>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt</Subheading>
                    <Tile>
                        <Text>
                            I need help creating an Excel formula for a fuzzy match between items in column A and column B. The match should:
                        </Text>
                        <UnorderedList>
                            <ListItem><Text>Allow for slight spelling variations and typos</Text></ListItem>
                            <ListItem><Text>Return the best match if an exact match isn&apos;t found</Text></ListItem>
                            <ListItem><Text>Include a confidence score for each match</Text></ListItem>
                        </UnorderedList>
                        <Text>
                            Please provide the formula in Excel syntax and explain how each part of the formula works. Also, suggest any potential limitations or considerations when using this formula.
                        </Text>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Prompt Effectiveness</Subheading>
                    <Text>
                        This prompt uses constrained prompting by clearly specifying the requirements for the fuzzy match formula. It also employs chain-of-thought prompting by requesting an explanation of the formula’s components and potential limitations, encouraging a more comprehensive and educational response.
                    </Text>
                    <Divider className="mt-4 mb-8" />
                </div>
                <div className="my-8">
                    <Subheading className="mt-4 mb-2">Example</Subheading>
                    <Text>
                        As an auditor, you’re tasked with performing a fraud risk assessment for your organization. You have collected data about the area, past problems, current issues, and your concerns, but synthesizing this information into a comprehensive risk assessment is challenging.
                    </Text>
                    <Subheading className="mt-4 mb-2">Discussion</Subheading>
                    <Text>
                        GenAI can be a powerful tool in brainstorming and identifying potential fraud risks. By inputting your collected data and concerns, you can leverage GenAI to generate a comprehensive set of potential risks that you might not have considered otherwise.
                    </Text>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt</Subheading>
                    <Tile>
                        <Text>
                            Act as an experienced fraud auditor. Based on the following information about our organization, generate a comprehensive fraud risk assessment:
                        </Text>
                        <Text className="italic">
                            [Insert collected data about the area, past problems, current issues, and concerns]
                        </Text>
                        <Text>
                            Please provide:
                        </Text>
                        <OrderedList>
                            <ListItem><Text>A list of potential fraud risks, categorized by type (e.g., financial reporting fraud, asset misappropriation, corruption)</Text></ListItem>
                            <ListItem><Text>For each risk, provide a brief explanation of why it’s relevant to our organization</Text></ListItem>
                            <ListItem><Text>Suggest potential red flags or indicators for each identified risk</Text></ListItem>
                            <ListItem><Text>Recommend initial steps for mitigating each risk</Text></ListItem>
                        </OrderedList>
                        <Text>
                            Format the output as a structured report suitable for presentation to senior management.
                        </Text>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Prompt Effectiveness</Subheading>
                    <Text>
                        This prompt effectively uses role prompting by asking the AI to act as an experienced fraud auditor. It also employs multi-step prompting by breaking down the risk assessment into clear, sequential tasks. The prompt encourages comprehensive output by requesting not just a list of risks, but also explanations, indicators, and mitigation strategies.
                    </Text>
                    <Divider className="mt-4 mb-8" />
                </div>
                <div className="my-8">
                    <Subheading className="mt-4 mb-2">Example</Subheading>
                    <Text>
                        During an internal audit, you want to assess the soft controls within the organization through sentiment analysis. Soft controls are cultural and behavior-influencing factors that can significantly impact an organization’s risk profile and operational effectiveness.
                    </Text>
                    <Subheading className="mt-4 mb-2">Discussion</Subheading>
                    <Text>
                        GenAI can be used to conduct sophisticated analyses of employee feedback, identifying negative sentiments or cultural issues that might warrant further investigation. This approach can provide valuable insights into management practices and cultural aspects that traditional audit methods might miss.
                    </Text>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt</Subheading>
                    <Tile>
                        <Text>
                            Assume the role of an experienced internal auditor specializing in auditing culture and behavior. Based on the attached text (obtained from an employee satisfaction survey), conduct an analysis according to the eight soft controls from the integrity model as defined by Muel Kaptein:
                        </Text>
                        <Text>
                            1. Clarity 2. Role Modeling 3. Achievability 4. Commitment 5. Transparency 6. Accountability 7. Enforcement 8. Openness to Criticism
                        </Text>
                        <Text>
                            For each category:
                        </Text>
                        <UnorderedList>
                            <ListItem><Text>Identify key themes or patterns in the employee feedback</Text></ListItem>
                            <ListItem><Text>Highlight any areas of concern or potential risk</Text></ListItem>
                            <ListItem><Text>Suggest areas that may require further investigation</Text></ListItem>
                            <ListItem><Text>Provide recommendations for improvement</Text></ListItem>
                        </UnorderedList>
                        <Text>
                            Present your analysis in a structured report format, suitable for inclusion in an internal audit report.
                        </Text>
                        <Text className="italic">
                            [Include the section with open comments from an employee satisfaction survey or copy and paste into the chat]
                        </Text>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Prompt Effectiveness</Subheading>
                    <Text>
                        This prompt demonstrates effective use of role prompting by asking the AI to act as a specialized internal auditor. It employs constrained prompting by specifying the exact framework (Muel Kaptein’s eight soft controls) to be used in the analysis. The prompt also uses multi-step prompting by breaking down the analysis into clear tasks for each category. By requesting a structured report format, it promotes the creation of a professional, audit-ready document.
                    </Text>
                </div>
                <Text className="mt-8">
                    These examples illustrate how GenAI can enhance data analysis and risk management in accounting, from handling complex Excel formulas to conducting nuanced assessments of organizational culture. By leveraging GenAI in these ways, accountants can uncover deeper insights, identify risks more effectively, and provide more value to their organizations or clients.
                </Text>
            </ModuleContainer>
        </>
    );
}