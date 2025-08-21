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
            <ModuleContainer title={"Training and Development"} {...props}>
                <Text>
                    GenAI is improving the way accountants approach training and development. Here are two examples of how GenAI is being used in this area:
                </Text>
                <div className="my-8">
                    <Subheading className="mt-4 mb-2">Example</Subheading>
                    <Text>
                        You’re preparing for the CPA exam and want to ensure you’re truly mastering the material, not just memorizing facts. You decide to use GenAI to create challenging scenarios that test the depth of your understanding.
                    </Text>
                    <Subheading className="mt-4 mb-2">Discussion</Subheading>
                    <Text>
                        Adversarial prompting in GenAI can simulate complex, real-world scenarios that go beyond simple fact-checking. By challenging your knowledge with conflicting information or nuanced situations, this approach can help you develop a deeper understanding of accounting principles and their practical applications.
                    </Text>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt</Subheading>
                    <Tile>
                        <Text>
                            I’m studying for the CPA exam, focusing on the Auditing and Attestation (AUD) section. I want you to act as an adversarial examiner to test my understanding. Please:
                        </Text>
                        <OrderedList>
                            <ListItem><Text>Present a complex auditing scenario that involves a potential conflict between auditor independence and client relationships.</Text></ListItem>
                            <ListItem><Text>Provide three possible courses of action an auditor might take in this scenario.</Text></ListItem>
                            <UnorderedList>
                                <ListItem><Text>Explain why it might seem correct at first glance.</Text></ListItem>
                                <ListItem><Text>Challenge this action by pointing out potential ethical, legal, or practical issues it could raise.</Text></ListItem>
                                <ListItem><Text>Cite relevant auditing standards or regulations that apply to this situation.</Text></ListItem>
                            </UnorderedList>
                            <ListItem><Text>After presenting the scenario and challenges, ask me which course of action I would choose and why.</Text></ListItem>
                            <ListItem><Text>Regardless of my answer, present a counter-argument that forces me to defend my choice and consider alternative perspectives.</Text></ListItem>
                            <ListItem><Text>Finally, provide the most ethically and professionally sound course of action, explaining why it’s the best choice despite any challenges it might present.</Text></ListItem>
                        </OrderedList>
                        <Text>
                            Throughout this exercise, use language and scenarios similar to what I might encounter in the actual CPA exam.
                        </Text>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Prompt Effectiveness</Subheading>
                    <Text>
                        This prompt demonstrates effective use of adversarial prompting by creating a scenario that challenges the user’s understanding from multiple angles. It employs role prompting by asking the AI to act as an adversarial examiner. The prompt encourages comprehensive output by requesting not just a scenario, but also multiple perspectives, challenges, and counter-arguments. By asking the AI to respond to the user’s choice, it creates an interactive, dynamic learning experience. This approach helps develop critical thinking skills and a nuanced understanding of complex auditing principles, which are crucial for success in the CPA exam and real-world auditing situations.
                    </Text>
                    <Divider className="mt-4 mb-8" />
                </div>
                <div className="my-8">
                    <Subheading className="mt-4 mb-2">Example</Subheading>
                    <Text>
                        You’re on a business trip and want to use your travel time to learn about new developments in accounting technology. You decide to use a voice-activated GenAI capable of listening and responding (like ChatGPT 4.0 on the phone).
                    </Text>
                    <Subheading className="mt-4 mb-2">Discussion</Subheading>
                    <Text>
                        Voice-activated GenAI opens up new possibilities for learning on the go. It allows you to engage in interactive learning sessions, ask follow-up questions, and even request entertaining content to reinforce your understanding, all without needing to type or look at a screen.
                    </Text>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt (Initial Question)</Subheading>
                    <Tile>
                        <Text>
                            &quot;Can you explain what RAG means in the context of GenAI?&quot;
                        </Text>
                        <Text className="italic">
                            [After receiving the explanation, you might ask follow-up questions like the following]
                        </Text>
                        <UnorderedList>
                            <ListItem><Text>&quot;How is RAG different from traditional language models?&quot;</Text></ListItem>
                            <ListItem><Text>&quot;To help me remember this better, can you tell me a funny story that illustrates how RAG works in GenAI?&quot;</Text></ListItem>
                        </UnorderedList>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Prompt Effectiveness</Subheading>
                    <Text>
                        This series of prompts demonstrates effective use of chain-of-thought prompting. The initial question uses zero-shot prompting to request an explanation of a specific concept. The follow-up questions then build on this knowledge, encouraging a deeper understanding. By requesting a funny story, the prompt leverages the power of associative memory, making the technical concept more memorable. This approach takes advantage of the voice-activated format, allowing for a natural, conversational learning experience that can easily adapt to the user’s level of understanding and interest.
                    </Text>
                </div>
                <Text className="mt-8">
                    These examples showcase how GenAI can transform training and development in accounting, from creating comprehensive study plans for professional exams to enabling on-the-go learning experiences. By leveraging GenAI in these ways, accountants can enhance their learning efficiency, tailor their education to their specific needs, and stay up-to-date with industry developments even during busy times.
                </Text>
            </ModuleContainer>
        </>
    );
}