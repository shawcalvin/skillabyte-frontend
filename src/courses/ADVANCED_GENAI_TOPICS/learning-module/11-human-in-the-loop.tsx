"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Image } from "@/components/ui/media";
import { ListItem, OrderedList, Strong, Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"The Importance of Human-in-the-Loop"} {...props}>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/advanced-genai-topics/Human+in+the+Loop.png.webp"
                    alt="Human in the Loop"
                    size="24rem"
                    className="rounded-lg float-right m-4"
                />
                <Text>
                    While we’ve explored various advanced techniques to enhance GenAI performance and reduce hallucinations, it’s important to remember that these techniques cannot guarantee 100% accuracy. The most effective safeguard against hallucinations is human oversight. The concept of “human-in-the-loop” is the most important safeguard to ensure the responsible and effective use of GenAI.
                </Text>
                <Text>
                    What is human-in-the-loop? Human-in-the-loop refers to the practice of keeping human judgment and decision-making as an integral part of AI systems. In this approach, AI assists and augments human capabilities rather than replacing them entirely. Humans provide oversight, make final decisions, and intervene when necessary. At its most basic level, human-in-the-loop means that a human reviews all content produced in full or in part by AI and takes final responsibility for the output.
                </Text>
                <Text>
                    This process involves several key aspects. Humans play a crucial role in validation, verifying the accuracy and appropriateness of AI-generated outputs. They also provide contextual understanding, offering nuanced interpretation of results and considering factors that may not be captured in the AI’s training data. Ethical oversight is another important function, where human judgment ensures AI outputs align with ethical standards and professional responsibilities. An AI may have a technically correct answer that is not ethical. The human can intervene to make sure decisions are ethical. Lastly, the human-in-the-loop approach facilitates continuous improvement, as feedback from human experts helps refine and improve AI models over time.
                </Text>
                <Text>
                    To implement human-in-the-loop, consider the following steps:
                </Text>
                <OrderedList>
                    <ListItem>
                        <Text><Strong>Define Clear Roles</Strong>: Establish when and how human intervention should occur in AI-assisted processes.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Training</Strong>: Ensure staff are trained to effectively oversee and interpret AI outputs.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Feedback Loops</Strong>: Create mechanisms for human experts to provide feedback on AI performance.</Text>
                    </ListItem>
                    <ListItem>
                        <Text><Strong>Documentation</Strong>: Maintain clear records of human decisions and interventions in AI-assisted processes.</Text>
                    </ListItem>
                </OrderedList>
                <Text>
                    Remember that while GenAI technologies offer powerful capabilities, they are tools to augment human expertise. To date, most GenAI technologies cannot fully replace human judgment; therefore, humans should be involved with GenAI in producing final outputs.
                </Text>
            </ModuleContainer>
        </>
    );
}