"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Heading } from "@/components/ui/heading";
import { ListItem, OrderedList, Strong, Text, UnorderedList } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Conclusion"} isFinished={true} {...props}>
                <Text>
                    Each of the following GenAI topics discussed in this course are set to transform the industry, allowing business professionals to spend less of their time performing routine tasks, and more time making critical decisions.
                </Text>
                <UnorderedList>
                    <ListItem><Text>Fine-Tuning</Text></ListItem>
                    <ListItem><Text>Multi-Agent Systems</Text></ListItem>
                    <ListItem><Text>Tool Integration</Text></ListItem>
                    <ListItem><Text>Prompting</Text></ListItem>
                    <ListItem><Text>Retrieval-Augmented Generation (RAG)</Text></ListItem>
                    <ListItem><Text>Reasoning Models</Text></ListItem>
                </UnorderedList>
                <Text>
                    Understanding these techniques and their capabilities helps professionals optimize AI models for their organization’s specific needs. The most successful professionals will be those who leverage AI capabilities while applying critical thinking, ethical considerations, and domain-specific knowledge in solving complex challenges. As AI continues to advance, staying informed about the latest techniques and trends is vital to remain competitive in the field.
                </Text>
                <Text>
                    After completing this training, you should have achieved the following learning objectives and gained a better understanding of specific GenAI techniques you can utilize to optimize your GenAI use.
                </Text>
                <Heading>Learning Objectives</Heading>
                <OrderedList>
                    <ListItem><Text>Define advanced GenAI techniques (such as fine-tuning, multi-agent systems, tool integration, prompting, and Retrieval-Augmented Generation) and identify their applications in accounting and finance.</Text></ListItem>
                    <ListItem><Text>Evaluate the benefits, limitations, and ethical implications of implementing GenAI techniques in financial contexts, including considerations of data privacy, and transparency.</Text></ListItem>
                    <ListItem><Text>Apply appropriate GenAI techniques to address specific accounting and financial challenges, demonstrating the ability to select and implement suitable methods for different scenarios.</Text></ListItem>
                </OrderedList>
                <Heading>Key Terms</Heading>
                <UnorderedList>
                    <ListItem>
                        <Text><Strong>Anthropic</Strong>: An AI research company that developed the Claude model.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>API</Strong>: A set of protocols and tools for building software applications, allowing different systems to communicate.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Artificial Intelligence (AI)</Strong>: The simulation of human intelligence in machines programmed to think and learn like humans.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Chain-of-thought prompting</Strong>: A technique where an AI model is asked to explain its reasoning step-by-step.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>ChatGPT</Strong>: A large language model developed by OpenAI, capable of generating human-like text based on prompts.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Claude</Strong>: An AI large language model developed by Anthropic, designed for various tasks including analysis and conversation.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Few-shot learning</Strong>: A machine learning approach where a model can make accurate predictions based on only a few examples.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Fine-tuning</Strong>: The process of further training a pre-trained AI model on a specific dataset to improve its performance on particular tasks.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Generative AI (GenAI)</Strong>: AI systems capable of creating new content, such as text, images, or code.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Gemini</Strong>: An AI model developed by Google.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Grok</Strong>: An AI model developed by X (formerly Twitter).</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Hallucinations</Strong>: Incorrect or nonsensical outputs produced by AI models, often due to gaps in training data or misinterpretation of prompts.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Human-in-the-loop</Strong>: A process where human oversight is maintained in AI systems, ensuring that human judgment is applied in making final decisions or reviewing AI-generated content.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Large Language Models (LLMs)</Strong>: AI models trained on vast amounts of text data, capable of understanding and generating human-like text.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Llama</Strong>: A large language model developed by Meta (formerly Facebook).</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Multi-agent systems</Strong>: AI systems composed of multiple interacting intelligent agents working together to solve complex problems.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Prompting (Prompt engineering)</Strong>: AI models designed to logically process information and make decisions, often used to ensure consistency in complex multi-agent systems.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Reasoning Models</Strong>: AI models designed to logically process information and make decisions, often used to ensure consistency in complex multi-agent systems.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Retrieval-Augmented Generation (RAG)</Strong>: A technique that combines information retrieval with text generation to produce more accurate and informed AI responses</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Training Dataset</Strong>: A collection of data used to train an AI model, allowing it to learn patterns and associations necessary for generating responses.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Tool integration</Strong>: The process of enabling AI models to interact with and utilize external tools, databases, or APIs.</Text>
                    </ListItem>
                </UnorderedList>
            </ModuleContainer>
        </>
    );
}