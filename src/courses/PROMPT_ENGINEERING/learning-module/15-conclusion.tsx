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
                    This training course introduced you to the cutting-edge field of prompt engineering in accounting, showcasing how advanced generative AI technologies, particularly large language models, can revolutionize accounting practices. You developed skills to create precise and effective prompts, enabling you to harness the full potential of AI tools. The course emphasized practical application, guiding you through the process of evaluating AI outputs for their relevance and accuracy in accounting contexts. You gained hands-on experience in leveraging AI to streamline accounting tasks, extract valuable insights from complex data, and enhance communication with various stakeholders. Additionally, the training covered critical aspects of responsible AI integration, including ethical considerations and industry best practices, ensuring you&apos;re now well-equipped to implement AI solutions in accounting workflows both efficiently and ethically.
                </Text>
                <Heading>Learning Objectives</Heading>
                <OrderedList>
                    <ListItem><Text>Recognize the basic concepts of generative AI, including its benefits and drawbacks in accounting contexts.</Text></ListItem>
                    <ListItem><Text>Identify techniques for crafting effective AI prompts, including zero-shot, few-shot, and chain-of-thought prompting.</Text></ListItem>
                    <ListItem><Text>Distinguish between practical examples of generative AI in accounting and evaluate their potential effects on the field.</Text></ListItem>
                    <ListItem><Text>Recognize ethical considerations in using AI for accounting tasks and identify responsible AI practices.</Text></ListItem>
                </OrderedList>
                <Heading>Key Terms</Heading>
                <UnorderedList>
                    <ListItem><Text><Strong>Adversarial Prompting</Strong>: Challenging the AI&apos;s responses by intentionally providing counterarguments or conflicting information.</Text></ListItem>
                    <ListItem><Text><Strong>AI Governance Framework</Strong>: A structure of policies and practices to ensure responsible and ethical use of AI within an organization. The training mentions the framework at genai.global.</Text></ListItem>
                    <ListItem><Text><Strong>Chain-of-thought Prompting</Strong>: A technique that guides the AI through a step-by-step reasoning process.</Text></ListItem>
                    <ListItem><Text><Strong>Constrained Prompting</Strong>: Setting specific parameters or limitations within which the AI must operate.</Text></ListItem>
                    <ListItem><Text><Strong>Ethical AI Use</Strong>: The responsible application of AI technologies, adhering to ethical guidelines and considering potential impacts on individuals and society.</Text></ListItem>
                    <ListItem><Text><Strong>Few-shot Prompting</Strong>: A method of providing the AI with a few examples before asking it to complete a task.</Text></ListItem>
                    <ListItem><Text><Strong>Generative AI (GenAI)</Strong>: AI systems capable of creating new content, such as text, images, or code, based on patterns learned from training data.</Text></ListItem>
                    <ListItem><Text><Strong>Large Language Models (LLMs)</Strong>: Advanced AI systems trained on vast amounts of text data, capable of understanding and generating human-like text. The training material mentions GPT-4 as an example.</Text></ListItem>
                    <ListItem><Text><Strong>Multi-step Prompting</Strong>: Guiding the AI through a series of individual prompts, each addressing a specific aspect of the overall task.</Text></ListItem>
                    <ListItem><Text><Strong>Prompt Engineering</Strong>: The practice of crafting effective inputs for AI systems to generate desired outputs. This is a central concept throughout the training.</Text></ListItem>
                    <ListItem><Text><Strong>Recursive Prompting</Strong>: Using the output from one prompt as the input for another, allowing for iterative refinement.</Text></ListItem>
                    <ListItem><Text><Strong>Role Prompting</Strong>: Instructing the AI to take on a specific role or perspective when generating responses.</Text></ListItem>
                    <ListItem><Text><Strong>Zero-shot Prompting</Strong>: A technique where the AI is asked to perform a task without any examples or additional context.</Text></ListItem>
                </UnorderedList>
            </ModuleContainer>
        </>
    );
}