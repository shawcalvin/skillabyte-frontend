"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, OrderedList, Strong, Text, UnorderedList } from "@/components/ui/text";
import ClaudeArtifact from './claude-artifact-1'
import { Heading, Subheading } from "@/components/ui/heading";
import { Tile } from "@/components/ui/tile";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Basics of Prompt Engineering"} {...props}>
                <Text>
                    Prompt engineering is both an art and a science. It requires a clear understanding of how AI models process information and generate responses and the ability to be creative. Before we teach about prompt engineering, we have created a widget to help you see how GenAI works at a basic level. Click through the widget and read the “how it works” description at the bottom of the widget.
                </Text>
                <ClaudeArtifact />
                <Text>
                    Here’s additional explanation of what is happening with GenAI. When a user enters a prompt, it guides the AI model by influencing the probabilities of which word comes next. For example, consider the phrase included in the above widget, “To be or not to be, that is the...” A prompt can significantly alter the likely word choices that follow. If the prompt before this sentence was “I want a very surprising and funny result for this sentence,” the AI might choose unexpected words like “pickle,” “waffle,” “penguin,” “spatula,” or “taco.” On the other hand, if the prompt before the sentence was “I want a very traditional result for this sentence,” the AI would be more likely to select words like “question,” “dilemma,” “issue,” or “problem.” This demonstrates how dramatically a prompt can impact the AI’s output.
                </Text>
                <Text>
                    The key to effective prompting lies in clarity, brevity, and iterative refinement. A well-crafted prompt is clear and specific, ensuring that the AI understands the task at hand. It is also concise, providing just enough information to guide the model without overwhelming it. When prompts are very long, the AI may miss some of the details or be unable to do everything in the prompt if there are conflicting statements. When longer prompts are needed, generally it is better to put the most critical details early in the prompt.
                </Text>
                <Text>
                    Even the most carefully crafted prompt may not yield the desired result on the first try. This is why iterative refinement, where prompts are adjusted based on the output, is crucial to the process. Feedback loops—where you analyze the AI’s response and adjust your prompt accordingly—play an important role in refining prompts to achieve the best possible outcomes. You can even use the AI as a feedback tool to improve your prompting. For instance, imagine you enter the following:
                </Text>
                <UnorderedList>
                    <ListItem>Original Prompt: &quot;Tell me a funny joke about accountants.&quot;</ListItem>
                    <ListItem>GenAI Response: &quot;Why did the accountant break up with the calculator? Because it was constantly trying to divide their attention!&quot;</ListItem>
                    <ListItem>Updated Prompt: &quot;Tell me how I can improve the prompt: Tell me a funny joke about accountants.&quot;</ListItem>
                    <ListItem>
                        GenAI Response: &quot;To improve the prompt for generating a more tailored or creative response, you could add specific details or a desired tone. Here are a few examples:
                        <OrderedList>
                            <ListItem>
                                <Text>
                                    <Strong>Contextual Prompt</Strong>: &quot;I&apos;m looking for a clever and light-hearted joke about accountants that would make someone in finance laugh.&quot;
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text>
                                    <Strong>Tone-Specific Prompt</Strong>: &quot;Can you tell me a witty and dry humor joke about accountants?&quot;
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text>
                                    <Strong>Themed Prompt</Strong>: &quot;Tell me a funny joke about accountants that plays on tax season stress.&quot;
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text>
                                    <Strong>Audience-Specific Prompt</Strong>: &quot;Share a funny accountant joke that would be perfect for a corporate office meeting.&quot;
                                </Text>
                            </ListItem>
                        </OrderedList>
                        <Text>These variations give the prompt more direction, which can lead to a joke that&apos;s better suited to your needs.</Text>
                    </ListItem>
                </UnorderedList>
                <Text>
                    At this point, you could even ask the AI to explain why these prompts are better, helping you learn how to improve your original prompt in the future. It&apos;s important to note that most AI chatbots are designed to remember your previous prompts in the same prompt window, enabling ongoing conversations. However, be aware that some implementations of GenAI do not have this capability, so you may need to include all relevant information in a single prompt.
                </Text>
                <Text>
                    In addition to what has been discussed, there are three basic prompt engineering techniques that can help you improve your prompting: zero-shot prompting, few-shot prompting, and chain-of-thought prompting.
                </Text>
                <Heading>Zero-shot Prompting</Heading>
                <Text>
                    Zero-shot prompting involves asking the AI to perform a task without any examples. This technique relies on the model’s pre-existing knowledge and is useful for straightforward tasks where the AI is expected to know the answer or perform the task without additional context.
                </Text>
                <Subheading>
                    Examples:
                </Subheading>
                <UnorderedList>
                    <ListItem><Text>&quot;Explain the difference between FIFO and LIFO inventory valuation methods.&quot;</Text></ListItem>
                    <ListItem><Text>&quot;List the main components of a balance sheet.&quot;</Text></ListItem>
                    <ListItem><Text>&quot;Describe the purpose of an audit trail in accounting.&quot;</Text></ListItem>
                </UnorderedList>
                <Heading>Few-shot Prompting</Heading>
                <Text>
                    Few-shot prompting involves providing the AI with a few examples before asking it to complete a task. This technique is particularly useful when the task is complex or requires the AI to follow a specific pattern.
                </Text>
                <Subheading>
                    Examples:
                </Subheading>
                <UnorderedList>
                    <ListItem><Text>Show the AI a few examples of correctly formatted journal entries, then asking it to create new entries for specific transactions. This approach might look like this (you would paste everything below into a single prompt):</Text>
                    </ListItem>
                </UnorderedList>
                <Tile center>
                    <Text>Transaction 1: Purchase of office supplies on account for $500.</Text>
                    <Text className="ml-4">Journal Entry:</Text>
                    <Text className="ml-4">Date: 01/15/2024</Text>
                    <Text className="ml-4">Account Titles and Explanation: Office Supplies</Text>
                    <Text className="ml-4">Debit: $500</Text>
                    <Text className="ml-4">Credit: Accounts Payable $500</Text>
                    <Text className="ml-4">(Purchased office supplies on account)</Text>
                    <Text className="mt-4">Transaction 2: Payment of $1,200 for a monthly rent.</Text>
                    <Text className="ml-4">Journal Entry:</Text>
                    <Text className="ml-4">Date: 01/20/2024</Text>
                    <Text className="ml-4">Account Titles and Explanation: Rent Expense</Text>
                    <Text className="ml-4">Debit: $1,200</Text>
                    <Text className="ml-4">Credit: Cash $1,200</Text>
                    <Text className="ml-4">(Paid monthly rent)</Text>
                    <Text className="mt-4">Question: What is the journal entry for Payment of $800 for utilities.</Text>
                </Tile>
                <Text>
                    When using the few-shot prompting technique, you should experiment with how many examples to provide to get the output you want. Sometimes only a few examples are needed and other times providing many examples results in better outputs.
                </Text>
                <Heading>Chain-of-Thought Prompting</Heading>
                <Text>
                    Chain-of-thought prompting guides the AI through a step-by-step reasoning process. This is especially useful in accounting scenarios where decision-making involves multiple steps or considerations.
                </Text>
                <Subheading>
                    Examples:
                </Subheading>
                <UnorderedList>
                    <ListItem><Text>&quot;To determine if we need to recognize a deferred tax asset, let&apos;s consider: 1. Are there deductible temporary differences? 2. What&apos;s the likelihood of future taxable income? 3. Are there any tax planning strategies available?”&quot;</Text></ListItem>
                    <ListItem><Text>&quot;To assess the collectability of accounts receivable: 1. Review the aging of receivables. 2. Analyze historical collection patterns. 3. Consider current economic conditions. 4. Evaluate specific customer information.&quot;</Text></ListItem>
                    <ListItem><Text>&quot;To decide on the most appropriate cost allocation method for a manufacturing company: 1. Identify the main cost drivers. 2. Assess the complexity of the production process. 3. Consider the diversity of products. 4. Evaluate the impact on pricing decisions.&quot;</Text></ListItem>
                </UnorderedList>
                <Text>
                    Chain-of-thought prompting can be written as a zero-shot prompt or written as a few-shot prompt—if examples are included. One of the simplest ways to convert a zero-shot prompt into a chain-of-thought prompt is by including the phrase &quot;show your work&quot; in the prompt. This signals to the AI that you&apos;re not just interested in the final answer, but also in the reasoning process it used to arrive at that answer.
                </Text>
            </ModuleContainer>
        </>
    );
}