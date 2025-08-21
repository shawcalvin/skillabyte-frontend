"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, OrderedList, Text } from "@/components/ui/text";
import ClaudeArtifact from './claude-artifact-1'
import { Tile } from "@/components/ui/tile";
import { Subheading } from "@/components/ui/heading";
import { Image } from "@/components/ui/media";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"GenAI Model Development"} {...props}>
                <Text>
                    GenAI uses a model to generate text, images, videos, or music based on learned patterns from training data. The following material gives a brief overview of the entire process of creating a GenAI model. After this overview, we will spend additional time discussing the model in more detail.
                </Text>
                <ClaudeArtifact />
                <Text>
                    All GenAI models go through this process before they are given to users to use. Once finished, the user can then use the model for many different applications. It is important to note that these models do not always produce the same output, even when given the exact same prompt. The strength, and weakness, of GenAI models is that they can generate different answers. The models can even generate errors or nonsensical outputs called “hallucinations.” The following are a list of different ways that GenAI may hallucinate.
                </Text>
                <Tile center>
                    <OrderedList>
                        <ListItem>
                            <Subheading>Incorrect Arithmetic</Subheading>
                            <Text className="italic">User: &quot;What is 15 + 28?&quot;</Text>
                            <Text className="italic">AI: &quot;15 + 28 equals 50.&quot;</Text>
                        </ListItem>
                        <ListItem>
                            <Subheading>Nonexistent Historical Events</Subheading>
                            <Text className="italic">User: &quot;Who won the 1975 space race?&quot;</Text>
                            <Text className="italic">AI: &quot;In 1975, the United States and the Soviet Union held a joint competition to see who could colonize Mars first. The U.S. won the race that year.&quot;</Text>
                        </ListItem>
                        <ListItem>
                            <Subheading>Inventing a Scientific Theory</Subheading>
                            <Text className="italic">User: &quot;What is quantum teleportation&quot;</Text>
                            <Text className="italic">AI: &quot;Quantum teleportation is a method by which a physical object can be instantly moved across space using telekinetic powers harnessed by human thought.&quot;</Text>
                        </ListItem>
                        <ListItem>
                            <Subheading>Fictional Famous Quotes</Subheading>
                            <Text className="italic">User: &quot;What did Albert Einstein say about time travel?&quot;</Text>
                            <Text className="italic">AI: &quot;Einstein famously said, &apos;Time travel is like walking backward through a mirror of light.&apos;&quot;</Text>
                        </ListItem>
                        <ListItem>
                            <Subheading>Inventing Fictional Geographic Features</Subheading>
                            <Text className="italic">User: &quot;What is the tallest mountain if Africa?&quot;</Text>
                            <Text className="italic">AI: &quot;The tallest mountain if Africa is Mount Zanzibar, standing at 7,500 meters above sea level.&quot;</Text>
                        </ListItem>
                    </OrderedList>
                </Tile>
                <Text>
                    These are particularly egregious examples of hallucinations. Typically, hallucinations are more subtle and the user needs to take great care to review work to make sure details are technically accurate, math is performed correctly, and quotes or papers really were said or produced by the claimed author.
                </Text>
                <Text>
                    Hallucinations are particularly likely when a user gives complex instructions in long or unclear prompts. GenAI developers are developing methods to reduce output errors, like hallucinations. The table below shows some of those techniques. We cover these techniques in more details in the rest of this training. The techniques are separated into pre-training, post-training, deployment, and runtime techniques. Take a minute to carefully review the entire table.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/advanced-genai-topics/AI+Models+and+Systems.png"
                    alt="Methods for developing, adapting, and enhancing AI models and systems."
                    size="52rem"
                    className="rounded-md my-8"
                    center
                />
            </ModuleContainer>
        </>
    );
}