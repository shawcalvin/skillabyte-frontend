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
                    In this training, you’ve learned about the history of AI, what generative AI is, and the benefits and challenges to using AI. Below are the learning objectives once more. Please reflect on them and make sure you can answer each one before moving on to the graded quiz.
                </Text>
                <Heading>Learning Objectives</Heading>
                <OrderedList>
                    <ListItem><Text>Recognize the basic concepts of generative AI, including its benefits and drawbacks in accounting contexts.</Text></ListItem>
                    <ListItem><Text>Differentiate generative AI from other types of AI.</Text></ListItem>
                    <ListItem><Text>Identify practical examples of generative AI in accounting and evaluate their potential effects on the field.</Text></ListItem>
                    <ListItem><Text>Identify emerging trends in AI and distinguish between actionable strategies for integrating AI into accounting practices.</Text></ListItem>
                </OrderedList>
                <Heading>Key Terms</Heading>
                <UnorderedList>
                    <ListItem><Text><Strong>AI Governance</Strong>: The framework of policies and practices to ensure responsible and ethical use of AI within an organization. The training dedicates a section to this topic, discussing its importance and mentioning a specific framework.</Text></ListItem>
                    <ListItem><Text><Strong>AI Winter</Strong>: Periods of reduced funding and interest in AI research due to unmet expectations and limitations in early AI systems.</Text></ListItem>
                    <ListItem><Text><Strong>Algorithm</Strong>: A process or set of rules followed by a computer in problem-solving operations.</Text></ListItem>
                    <ListItem><Text><Strong>Artificial Intelligence (AI)</Strong>: The simulation of human intelligence processes by machines, especially computer systems.</Text></ListItem>
                    <ListItem><Text><Strong>Bias</Strong>: Prejudices in data that can lead to unfair outcomes in AI systems.</Text></ListItem>
                    <ListItem><Text><Strong>Black Box</Strong>: AI models, especially deep learning ones, that operate in ways that are difficult to understand or explain.</Text></ListItem>
                    <ListItem><Text><Strong>Deep Learning</Strong>: A subset of ML involving neural networks with many layers, enabling the analysis of large amounts of data and the extraction of complex patterns.</Text></ListItem>
                    <ListItem><Text><Strong>Deepfakes</Strong>: AI-generated false content such as videos or images that appear authentic.</Text></ListItem>
                    <ListItem><Text><Strong>Expert Systems</Strong>: AI systems that mimic human decision-making using rule-based logic.</Text></ListItem>
                    <ListItem><Text><Strong>Fine-Tuning</Strong>: The process of further training a pre-trained AI model on a smaller, more specific dataset to specialize or improve performance in certain areas.</Text></ListItem>
                    <ListItem><Text><Strong>Generative Artificial Intelligence (GenAI)</Strong>: AI technology that generates new content such as text, images, or music, rather than simply analyzing existing data.</Text></ListItem>
                    <ListItem><Text><Strong>Hallucinations</Strong>: Instances where AI systems produce outputs that are not grounded in the input data or reality.</Text></ListItem>
                    <ListItem><Text><Strong>Human-in-the-loop</Strong>: An approach that keeps humans involved in the AI process, particularly for oversight and validation of AI outputs. This concept is mentioned in the training as “human-in-the-middle” when discussing solutions to AI challenges.</Text></ListItem>
                    <ListItem><Text><Strong>Large Language Models</Strong>: Advanced NLP models that can understand and generate human-like text based on vast amounts of data.</Text></ListItem>
                    <ListItem><Text><Strong>Machine Learning (ML)</Strong>: A subset of AI involving the use of algorithms and statistical models to enable computers to improve their performance on a task with experience.</Text></ListItem>
                    <ListItem><Text><Strong>Multimodal AI</Strong>: AI models capable of processing and generating multiple types of data, such as text, images, and audio. This term is mentioned when discussing emerging trends in AI.</Text></ListItem>
                    <ListItem><Text><Strong>Natural Language Processing (NLP)</Strong>: The branch of AI focused on the interaction between computers and humans through natural language.</Text></ListItem>
                    <ListItem><Text><Strong>Neural Networks</Strong>: Computing systems inspired by the biological neural networks of animal brains, crucial for deep learning.</Text></ListItem>
                    <ListItem><Text><Strong>Prompt</Strong>: The instructions or words typed into an AI model to generate a certain response.</Text></ListItem>
                    <ListItem><Text><Strong>Prompt Engineering</Strong>: The practice of crafting precise and detailed prompts to enhance the effectiveness of AI models. This is discussed in the section on dealing with AI challenges.</Text></ListItem>
                    <ListItem><Text><Strong>Regulatory Compliance</Strong>: Ensuring that AI systems adhere to evolving accounting standards and regulations.</Text></ListItem>
                    <ListItem><Text><Strong>Temperature</Strong>: A parameter in AI models that controls the level of randomness in the generated responses, balancing between predictable and creative outputs. This is explained in detail in the section about how GPT models function.</Text></ListItem>
                </UnorderedList>
            </ModuleContainer>
        </>
    );
}