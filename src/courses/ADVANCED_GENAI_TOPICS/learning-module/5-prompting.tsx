"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Tile } from "@/components/ui/tile";
import { ListItem, Strong, Text, UnorderedList } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {

    props.setIsComplete(true);

    return (
        <>
            <ModuleContainer title={"Runtime Strategies: Prompting"} {...props}>
                <Text>
                    Prompting, or prompt engineering, is a runtime strategy where users guide the AI model&apos;s output by providing specific instructions and context. Effective prompting can significantly enhance the model&apos;s performance without requiring technical changes to the model itself.
                </Text>
                <Text>
                    Consider an internal auditor using GenAI to assist with an audit of the company&apos;s procurement process. A basic prompt might be: &quot;Analyze our procurement process for weaknesses.&quot; However, this broad request could lead to hallucinations or missed important details. Let&apos;s explore how to improve this prompt to minimize hallucinations:
                </Text>
                <Tile center>
                    <UnorderedList>
                        <ListItem>
                            <Text><Strong>Be specific and clear</Strong>: Provide detailed instructions and context to guide the model.
                                <Text className="mt-2 mb-4">
                                    Improved prompt: &quot;Analyze the procurement process for XYZ Manufacturing Company, focusing on potential control weaknesses in vendor selection, purchase order approval, and invoice payment steps.&quot;
                                </Text>
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text><Strong>Use constraints</Strong>: Specify limitations or boundaries for the AI&apos;s response.
                                <Text className="mt-2 mb-4">
                                    Improved prompt: &quot;Analyze the procurement process for XYZ Manufacturing Company. Identify the top 3 most significant control weaknesses, if any, and explain their potential impact on financial reporting and operational efficiency.&quot;
                                </Text>
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text><Strong>Request step-by-step reasoning </Strong>(called chain-of-thought prompting): Ask the model to explain its thought process.
                                <Text className="mt-2 mb-4">
                                    Improved prompt: &quot;Analyze the procurement process for XYZ Manufacturing Company. For each potential control weakness identified, explain your reasoning step-by-step, referencing specific parts of the process flow and internal control framework.&quot;
                                </Text>
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text><Strong>Implement fact-checking prompts</Strong>: Encourage the model to verify information.
                                <Text className="mt-2 mb-4">
                                    Improved prompt: &quot;Analyze the procurement process for XYZ Manufacturing Company. For each potential control weakness, cross-reference with COSO Internal Control Framework guidelines. If you&apos;re unsure about any information, explicitly state that it requires verification.&quot;
                                </Text>
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text><Strong>Use few-shot learning</Strong>: Provide examples of correct responses in the prompt.
                                <Text className="mt-2 mb-4">
                                    Improved prompt: &quot;Analyze the procurement process for XYZ Manufacturing Company for control weaknesses. Here&apos;s an example of the analysis format I&apos;m looking for:
                                    <UnorderedList>
                                        <ListItem>Weakness: Lack of segregation of duties in purchase order approval</ListItem>
                                        <ListItem>Evidence: Same individual creates and approves purchase orders</ListItem>
                                        <ListItem>Risk: Potential for unauthorized purchases or fraud</ListItem>
                                    </UnorderedList>
                                    Please provide your analysis in a similar format.&quot;
                                </Text>
                            </Text>
                        </ListItem>
                    </UnorderedList>
                </Tile>
                <Text>
                    Despite these techniques, prompting has limitations in preventing hallucinations. The model may still misinterpret complex prompts, show overconfidence in incorrect responses, or lack real-time factual information. Small changes in prompts can also lead to significantly different outputs. Also, sometimes individuals try to get the GenAI to stop hallucinating by saying something like, &quot;don&apos;t hallucinate&quot; or &quot;don&apos;t&apos; make up facts.&quot; This is not an effective strategy to reduce hallucinations.
                </Text>
                <Text>
                    Because of these weaknesses, most prompting still requires human-in-the-loop to review and carefully scrutinize output. It&apos;s crucial to stress that the human user will ultimately take responsibility for what is produced and should therefore be careful and diligent in reviewing material.
                </Text>
                <Text>
                    A cautionary example of the risks of not properly reviewing AI-generated content comes from a recent legal case. In 2023, two lawyers submitted a legal brief to a federal court that contained citations to non-existent cases generated by ChatGPT. The lawyers failed to verify the AI&apos;s output, assuming its responses were accurate. This led to severe consequences, including a $5,000 fine and a disciplinary hearing. The judge in the case emphasized that AI could be used to assist in drafting legal documents, but it was the lawyer&apos;s responsibility to ensure the accuracy of any filed materials.
                </Text>
                <Text>
                    This example demonstrates the importance of human oversight in using GenAI, especially in professional fields like accounting and law where accuracy and integrity are critical. While AI can be a powerful tool for enhancing productivity and insight, it should be viewed as an assistant when prompting rather than a replacement for professional judgment and due diligence.
                </Text>
            </ModuleContainer>
        </>
    );
}