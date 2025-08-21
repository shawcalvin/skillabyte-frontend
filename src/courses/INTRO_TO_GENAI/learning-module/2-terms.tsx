"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Divider } from "@/components/ui/divider";
import { Image } from "@/components/ui/media";
import { Strong, Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Terms and Analogy"} {...props}>
                <Text>
                    We will now discuss important terms related to AI. To help you learn these terms, we have created an analogy using sports coaching, which you will read below.
                </Text>
                <Text>
                    <Strong>Artificial Intelligence (AI)</Strong>: The replication of human intelligence by machines and computers. This is a broad, umbrella term encompassing many of the subsequent terms.
                </Text>
                <Text>
                    <Strong>Machine Learning (ML)</Strong>: A branch of artificial intelligence that enables computer systems to learn and improve from experience without being explicitly programmed. ML algorithms analyze large datasets to identify patterns and make decisions with minimal human intervention. As these systems encounter more data, they refine their models, becoming increasingly accurate in tasks such as classification, prediction, and problem-solving. Machine Learning powers a wide range of applications, from recommendation systems in streaming services to fraud detection in financial transactions, and forms the foundation for more advanced AI techniques like deep learning.
                </Text>
                <Text>
                    <Strong>Deep Learning</Strong>: An advanced form of machine learning that uses layered neural networks to process and learn from vast amounts of data. These networks, inspired by the human brain, can automatically discover and extract important features from raw data. As the system processes more information through its multiple layers, it becomes increasingly adept at recognizing complex patterns, enabling it to perform tasks like image and speech recognition with remarkable accuracy. Deep learning powers many of today&apos;s AI breakthroughs, from virtual assistants to self-driving cars.</Text>
                <Text>
                    <Strong>Generative AI (GenAI)</Strong>: A cutting-edge branch of artificial intelligence that focuses on creating new, original content rather than simply analyzing or categorizing existing data. These AI systems use advanced machine learning techniques, particularly deep learning and neural networks, to understand patterns in vast amounts of training data and then generate novel outputs that mimic those patterns. Generative AI can produce a wide range of content types, including text, images, music, and even video.
                </Text>
                <Text>
                    <Strong>Neural Networks</Strong>: A computational model inspired by the structure and function of the human brain. These systems consist of interconnected nodes (artificial neurons) organized in layers, which process and transmit information. Each connection between nodes has a weight that adjusts as the network learns, allowing it to recognize patterns and make decisions. Neural networks can learn to perform tasks by analyzing large sets of examples, gradually improving their accuracy through a process called training.
                </Text>
                <Text>
                    <Strong>Natural Language Processing (NLP)</Strong>: A branch of artificial intelligence that focuses on the interaction between computers and human language. NLP combines computational linguistics, machine learning, and deep learning techniques to enable computers to understand, interpret, and generate human language in both text and speech forms. These systems analyze language structure, context, and patterns to derive meaning, allowing them to perform tasks such as translation, sentiment analysis, and question-answering.
                </Text>
                <Text>
                    <Strong>Large Language Models (LLMs)</Strong>: Advanced artificial intelligence systems that represent the cutting edge of Natural Language Processing (NLP). These models are built using massive neural networks trained on enormous datasets of text from diverse sources. By analyzing patterns in this vast amount of language data, LLMs can understand context, generate human-like text, and perform a wide range of language-related tasks with remarkable accuracy. They use deep learning techniques to process and predict sequences of words, allowing them to engage in conversations, answer questions, summarize texts, and even generate creative content. ChatGPT, Claude, Copilot, and Gemini are all examples of LLMs.
                </Text>
                <Divider className="mt-8 mb-16" />
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-genai/Gym.png"
                    alt="AI Vocabulary Coaching Analogy"
                    size="32rem"
                    className="float-right rounded-lg"
                />
                <Text>
                    To help you understand the vocabulary of AI technology, consider this sports coaching analogy:
                </Text>
                <Text>
                    <Strong>Artificial Intelligence (AI)</Strong>: AI is like a state-of-the-art sports training facility designed to enhance athletic performance by simulating and improving human coaching abilities. This facility has several specialized components.
                </Text>
                <Text>
                    <Strong>Machine Learning (ML)</Strong>: ML is like a coach who not only analyzes past performances but also continuously adjusts training methods based on real-time feedback during practice sessions. This coach refines techniques through trial and error, learning from both successes and failures to optimize the athlete&apos;s performance over time.
                </Text>
                <Text>
                    <Strong>Deep Learning</Strong>: Deep learning is like an elite coach with an uncanny ability to process and interpret vast amounts of unstructured information - from game footage to biometric data. This coach excels at identifying intricate patterns that might be invisible to others, leading to breakthroughs in performance and strategy.
                </Text>
                <Text>
                    <Strong>Neural Networks</Strong>: Neural networks represent the coach&apos;s brain structure, where each neuron (node) is like a specialized coach focusing on a specific aspect of training. These &apos;mini-coaches&apos; are interconnected, sharing information and collectively making decisions, much like how different regions of the brain work together to process complex information.
                </Text>
                <Text>
                    <Strong>Natural Language Processing (NLP)</Strong>: NLP is like having a multilingual, context-aware communication expert in the facility. This expert not only understands multiple languages but also grasps nuances, idioms, and even non-verbal cues, ensuring clear communication between coaches and athletes from diverse backgrounds.
                </Text>
                <Text>
                    <Strong>Generative AI (GenAI)</Strong>: GenAI is like having a creative director and content producer on the coaching staff. This innovative team member can generate new training videos, create personalized motivational speeches, design custom workout plans, and even produce realistic simulations of potential game scenarios. GenAI can also adapt existing training materials to suit different learning styles or create entirely new coaching resources on demand, enhancing the facility&apos;s ability to cater to each athlete&apos;s unique needs and preferences.
                </Text>
                <Text>
                    <Strong>Large Language Models (LLMs)</Strong>: LLMs are like having access to an infinitely knowledgeable and creative sports consultant. This consultant not only has encyclopedic knowledge of all sports and training methods but can also generate entirely new training plans, strategies, and even predict future trends in sports science, all tailored to the specific needs of each athlete.
                </Text>
            </ModuleContainer>
        </>
    );
}