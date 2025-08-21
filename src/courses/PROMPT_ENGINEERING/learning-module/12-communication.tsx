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
            <ModuleContainer title={"Communication and Content Creation"} {...props}>
                <Text>
                    GenAI has transformed the way accountants approach communication and content creation tasks. Here are three examples of how GenAI is being used in this area:
                </Text>
                <div className="my-8">
                    <Subheading className="mt-4 mb-2">Example</Subheading>
                    <Text>
                        You’re a tax professional looking to draft a personalized email to a client, identifying potential additional services based on their previous year’s tax return.
                    </Text>
                    <Subheading className="mt-4 mb-2">Discussion</Subheading>
                    <Text>
                        By using a private GenAI tool to analyze a client’s tax return (with sensitive information removed), you can quickly identify upsell opportunities and draft a personalized email. This approach not only saves time but also ensures that you’re offering relevant, value-added services to your clients.
                    </Text>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt</Subheading>
                    <Tile>
                        <Text>
                            I’ve uploaded a client’s last year’s tax return to our private GenAI tool. Based on this information:
                        </Text>
                        <OrderedList>
                            <ListItem><Text>Identify 3-5 additional services our tax firm could offer this client</Text></ListItem>
                            <ListItem><Text>For each service, provide a brief explanation of why it would be beneficial based on their tax situation</Text></ListItem>
                            <ListItem><Text>Draft a professional, personalized email to the client that:</Text></ListItem>
                            <UnorderedList>
                                <ListItem><Text>Thanks them for their continued business</Text></ListItem>
                                <ListItem><Text>Briefly recaps their previous year’s tax situation</Text></ListItem>
                                <ListItem><Text>Introduces the additional services we could offer, explaining the benefits of each</Text></ListItem>
                                <ListItem><Text>Invites them to schedule a consultation to discuss these services further</Text></ListItem>
                            </UnorderedList>
                        </OrderedList>
                        <Text>
                            The tone should be professional yet warm, and the email should be no longer than 300 words.
                        </Text>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Prompt Effectiveness</Subheading>
                    <Text>
                        This prompt uses constrained prompting by specifying the exact elements the email should include and its maximum length. It encourages comprehensive output by requesting not just identification of services, but also explanations of their benefits. The prompt also promotes personalization by asking for a recap of the client’s tax situation, ensuring the email feels tailored to the individual client.
                    </Text>
                    <Divider className="mt-4 mb-8" />
                </div>
                <div className="my-8">
                    <Subheading className="mt-4 mb-2">Example</Subheading>
                    <Text>
                        Your firm has prepared tax planning recommendations for a client for the upcoming year, and you want to ensure they are clear, accurate, and effective before sending them to the client.
                    </Text>
                    <Subheading className="mt-4 mb-2">Discussion</Subheading>
                    <Text>
                        GenAI can act as a preliminary editor, reviewing your recommendations for clarity, consistency, and potential improvements. By using a two-step process, you can first get guidelines for good editing practices and then apply these to your specific document.
                    </Text>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt (Step 1)</Subheading>
                    <Tile>
                        <Text>
                            What are the key things a good editor should look for when reviewing tax planning recommendations? Please provide a comprehensive list of editing guidelines.
                        </Text>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt (Step 2)</Subheading>
                    <Tile>
                        <Text>
                            Using these editing guidelines:
                        </Text>
                        <Text className="italic">
                            [Paste in editing guidelines from first prompt]
                        </Text>
                        <Text>
                            Please review and edit the following tax planning recommendations:
                        </Text>
                        <Text className="italic">
                            [Insert tax planning recommendations]
                        </Text>
                        <Text>
                            Suggest any additional recommendations that might be relevant based on the information provided and provide the edited version along with a summary of the changes made and any suggestions for improvement.
                        </Text>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Prompt Effectiveness</Subheading>
                    <Text>
                        This two-step approach demonstrates effective use of recursive prompting, where the output from one prompt directly informs and is incorporated into the next. The first prompt uses zero-shot prompting to generate general editing guidelines. The second prompt then employs few-shot prompting by including these guidelines, providing a clear framework for the AI to follow. It also uses constrained prompting by specifying the exact tasks to be performed on the tax planning recommendations. By requesting additional relevant recommendations and a summary of changes, the prompt encourages comprehensive output that goes beyond simple editing to provide added value.
                    </Text>
                    <Divider className="mt-4 mb-8" />
                </div>
                <div className="my-8">
                    <Subheading className="mt-4 mb-2">Example</Subheading>
                    <Text>
                        Your company offers GenAI advisory services based on the governance framework at https://www.genai.global/, and you want to create a LinkedIn post and image to showcase your services.
                    </Text>
                    <Subheading className="mt-4 mb-2">Discussion</Subheading>
                    <Text>
                        GenAI can help create engaging social media content that effectively communicates your services while adhering to platform-specific best practices. This can save time and ensure your marketing messages are clear, concise, and impactful.
                    </Text>
                    <Subheading className="mt-4 mb-2">Hypothetical Prompt</Subheading>
                    <Tile>
                        <Text>
                            Our company offers GenAI services based on the governance framework at http://genai.global/. We want to create a LinkedIn post and accompanying image to showcase our services. Please:
                        </Text>
                        <OrderedList>
                            <ListItem><Text>Draft a LinkedIn post (maximum 200 words) that:</Text></ListItem>
                            <UnorderedList>
                                <ListItem><Text>Introduces our GenAI services</Text></ListItem>
                                <ListItem><Text>Highlights the importance of the genai.global governance framework</Text></ListItem>
                                <ListItem><Text>Outlines 2-3 key benefits of our services</Text></ListItem>
                                <ListItem><Text>Includes a call-to-action for readers to learn more or contact us</Text></ListItem>
                            </UnorderedList>
                            <ListItem><Text>Describe an image that could accompany this post, including:</Text></ListItem>
                            <UnorderedList>
                                <ListItem><Text>A central visual element representing GenAI</Text></ListItem>
                                <ListItem><Text>Visual representations of 2-3 key aspects of the governance framework</Text></ListItem>
                            </UnorderedList>
                            <ListItem><Text>Suggest 3-5 relevant hashtags to accompany the post</Text></ListItem>
                        </OrderedList>
                        <Text>
                            The tone should be professional, innovative, and trustworthy.
                        </Text>
                    </Tile>
                    <Subheading className="mt-4 mb-2">Prompt Effectiveness</Subheading>
                    <Text>
                        This prompt employs constrained prompting by specifying the exact elements the LinkedIn post and image description should include, as well as the maximum word count for the post. It uses multi-step prompting by breaking down the task into clear, sequential steps (post content, image description, hashtags). The prompt also encourages creativity while ensuring the output aligns with the company’s professional image and service offerings.
                    </Text>
                </div>
                <Text className="mt-8">
                    These examples illustrate how GenAI can enhance communication and content creation in accounting, from drafting personalized client emails to editing complex documents and creating engaging marketing content. By leveraging GenAI in these ways, accountants can communicate more effectively with clients, ensure the quality of their deliverables, and promote their services more efficiently.
                </Text>
            </ModuleContainer>
        </>
    );
}