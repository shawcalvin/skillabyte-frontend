"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text, TextLink } from "@/components/ui/text";
import { Tile } from "@/components/ui/tile";
import { Image } from "@/components/ui/media";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Governance Framework"} {...props}>
                <Text>
                    For this training, we will focus on the GenAI governance framework that is freely available at <TextLink href="https://genai.global/">GenAI Global</TextLink>. This framework was developed through the collective expertise of more than 1,000 practitioners and academics. Contributors included AI specialists, internal and external auditors, regulators, audit committee members, C-suite executives, and other experts across multiple domains. The aim was to identify the key risks of GenAI and then to create a robust governance model that serves a wide range of organizations, including for-profit, not-for-profit, and governmental sectors.
                </Text>
                <Text>
                    GenAI technology is often encountered in a variety of ways. Employees may directly use tools like OpenAI&apos;s ChatGPT or Google&apos;s Gemini, or they might unknowingly interact with GenAI through integrated features within software like Microsoft&apos;s Copilot that is integrated into Microsoft Word and other programs. Organizations may also develop proprietary GenAI systems, such as a custom “CompanyGPT.” In each of these scenarios, this framework provides the necessary tools to identify, assess, and mitigate GenAI-related risks, ensuring a balance between innovation and responsible use.
                </Text>
                <Text>
                    The framework is structured to offer practical guidance for aligning GenAI initiatives with organizational objectives, managing associated data and compliance risks, and fostering transparency and accountability. The framework is particularly valuable because of its adaptability and how it relates to risk. As stated by Waseem Samaan, head of internal audit for Boomi,
                </Text>
                <Tile center>
                    <Text>
                        &quot;This AI governance framework…[provides] a one-page summary ideal for boardroom discussions, alongside a detailed breakdown of controls for practical implementation. It&apos;s designed not only to be adopted but also to be adapted, allowing companies to assess their compliance and maturity, identifying areas of strength and opportunities for improvement.&quot;
                    </Text>
                </Tile>
                <Text>
                    The following image provides an overview of the framework. Carefully read the description of each of the five domains covered in the framework.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/genai-governance/framework-original.svg"
                    alt="GenAI Global Governance Framework"
                    size="80%"
                    className="rounded-lg my-8"
                    center
                />
                <Text>
                    The framework is designed to mitigate the key risks that GenAI introduces to an organization. Now that you have been introduced to the general framework, we will discuss the key risks and then return to how the framework helps mitigate these risks.
                </Text>
            </ModuleContainer>
        </>
    );
}