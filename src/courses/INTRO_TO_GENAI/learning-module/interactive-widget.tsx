"use client"

import { Button } from "@/components/ui/button";
import { Tile } from "@/components/ui/tile";
import { Image } from "@/components/ui/media";
import { ListItem, OrderedList, Strong, Text, TextLink, UnorderedList } from "@/components/ui/text";
import { useState } from "react";
import { SetStateFunction } from "@/lib/types/modules";


export function InteractiveWidget({ setIsComplete }: { setIsComplete: SetStateFunction }) {
    const [stepOneSubmitted, setStepOneSubmitted] = useState<boolean | null>(null)
    const [stepTwoSubmitted, setStepTwoSubmitted] = useState<boolean | null>(null)

    return (
        <>
            <Step1 />
            <Text className="text-center"><Strong>Did you perform both tasks?</Strong></Text>
            <div className="flex justify-center space-x-4">
                <Button className="w-24" color="green" onClick={() => setStepOneSubmitted(true)}>Yes</Button>
                <Button className="w-24" color="red" onClick={() => setStepOneSubmitted(false)}>No</Button>
            </div>
            {stepOneSubmitted && <Step2 />}
            {stepOneSubmitted !== null && !stepOneSubmitted && <p className="text-center text-red-500 text-sm">Please perform the task before continuing.</p>}

            {stepOneSubmitted && <Text className="text-center"><Strong>Did you perform both tasks?</Strong></Text>}
            {stepOneSubmitted &&
                <div className="flex justify-center space-x-4">
                    <Button className="w-24" color="green" onClick={() => {
                        setIsComplete(true)
                        setStepTwoSubmitted(true)
                    }}>Yes</Button>
                    <Button className="w-24" color="red" onClick={() => setStepTwoSubmitted(false)}>No</Button>
                </div>}
            {stepOneSubmitted && stepTwoSubmitted && <Step3 />}
            {stepOneSubmitted && stepTwoSubmitted !== null && !stepTwoSubmitted && <p className="text-center text-red-500 text-sm">Please perform the task before continuing.</p>}
        </>
    )
}

function Step1() {
    return (
        <UnorderedList>
            <ListItem>
                <Text>
                    You want to create a summary report to send to the client about how you are progressing on the task they hired you for (this is generic so you can choose if it is filing their taxes, performing a consulting engagement, or something else). Make a list of the key progress you have made and then ask the LLM to draft a concise project update summary based on those points. Experiment with how changing the language in your prompt can significantly change the output (if you want to see how drastic it can change the output, try writing “write the report as a pirate” in your prompt).
                </Text>
            </ListItem>
            <ListItem>
                <Text>
                    Go to <TextLink href="https://sec.gov">sec.gov</TextLink> and download a 10-K from a company of your choice. Copy part of the 10-K, into the LLM and ask the LLM to summarize the information. LLMs excel at summarizing information from large amounts of text. You can also ask the LLM to summarize the information in more basic or complex ways to help you learn more.
                </Text>
            </ListItem>
        </UnorderedList>
    )
}

function Step2() {
    return (
        <>
            <Text>
                Excellent! One possible prompt you could enter into an LLM for #1 is
            </Text>
            <Tile center>
                <Text>
                    &quot;Based on the following key progress points, please draft a concise project update summary to send to the client about how we are progressing on the task they hired us for. Choose whether this is for filing their taxes, performing a consulting engagement, or another professional service:
                </Text>
                <Text className="italic">
                    [Insert your points here]
                </Text>
                <Text>
                    Please keep the summary brief and professional. After you&apos;ve drafted the summary, rewrite it as if you were a pirate to demonstrate how changing the language in the prompt can significantly alter the output.&quot;
                </Text>
            </Tile>
            <Text>
                Notice how you can direct the AI to respond in various forms. Try experimenting with this example to see how your prompting influences the output.
            </Text>
            <Text>
                For prompt 2, you might write a prompt like the following:
            </Text>
            <Tile center>
                <Text>
                    &quot;I have copied a section of a 10-K report from a company I chose from sec.gov. The text is as follows:
                </Text>
                <Text className="italic">
                    [Paste the section of the 10-K report here]
                </Text>
                <Text>
                    Please summarize this information concisely. Then, provide two additional summaries: 1. A simplified version that a high school student could easily understand 2. A more complex version that delves into the financial and business implications for industry experts.&quot;
                </Text>
            </Tile>
            <Text>
                LLMs are particularly skilled at condensing information, restructuring data, and highlighting essential details from extensive texts. However, they often face challenges in delivering in-depth, contextual insights that require a thorough grasp of specialized jargon or accurately interpreting intricate financial data. Additionally, although LLMs can generate useful insights from the provided text, it might fall short when addressing prompts that demand real-time data or information not included in the document.
            </Text>
            <UnorderedList>
                <ListItem>
                    <Text>Use a GenAI model that generates images (e.g., ChatGPT, Adobe Firefly, etc.). Create a logo for Outdoor Rental LLC, a startup renting outdoor equipment for any high adventure. Give it specific details to make the logo look how you envision it. </Text>
                </ListItem>
            </UnorderedList>
        </>
    )
}

function Step3() {
    return (
        <>
            <Text>
                Great! Here is an example prompt. It is provided to show you different ways you can prompt. Practice is one of the best ways to improve your prompting.
            </Text>
            <Tile center>
                <Text>
                    &quot;Design a logo for Outdoor Rental LLC., a startup specializing in renting outdoor equipment for adventurous activities. The logo should feature a rugged mountain range and a stylized tent to emphasize outdoor adventure. Use earthy tones like green and brown to reflect the natural environment. Incorporate bold, modern typography for the company name, ensuring it&apos;s easily readable. Include subtle elements such as a compass or hiking boots to reinforce the adventure theme.&quot;
                </Text>
            </Tile>
            <Text>
                Note that the output isn&apos;t always perfect and AI often struggles with generating images. The output of this prompt with one image generator was as follows:
            </Text>
            <Image
                src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-genai/Logo1.jpg"
                alt="GenAI Logo Output"
                size="32rem"
                className="rounded-lg"
                center
            />
        </>
    )
}