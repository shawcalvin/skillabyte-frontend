"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/media";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Mapping Risks to Domains"} {...props}>
                <Text>
                    Each of the 16 risks maps to one of the 5 domains included in the governance framework. In this way, the user of the framework can either trace specific risks to domains where they can focus to see improvement, or focus on improving a domain, knowing that they will therefore effectively manage the relevant risks. Review the following graphic to see how domains and risks map together.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/genai-governance/domains.png"
                    alt="GenAI Risk Domains"
                    size="900px"
                    className="my-8 rounded-lg"
                    center
                />
                <Text>
                    The framework extends beyond mapping to provide the key control considerations for each domain to address each risk. In total, there are 69 different control considerations that help manage the risks. These control considerations are the key part of understanding how to manage risks. As one example, consider the domain of Operational and Technology Management, and the category of process management risks. The framework provides the following control considerations related to this risk:
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/genai-governance/controls.png"
                    alt="GenAI Risk Domains"
                    size="900px"
                    className="my-8 rounded-lg"
                    center
                />
                <Text>
                    Notice that for each risk there are possible control considerations. It is important to note that controls should be “considered” meaning that not all controls are relevant to every organization. This framework has been applied to small school districts and multi-billion-dollar public companies. The person applying the framework should use their judgment to only apply controls that are relevant to their specific organization. For instance, the above control about validation and testing protocol will be very important to a large organization that employs multiple different apps that use GenAI, especially if the GenAI is used to process sensitive data. In contrast, an organization that only uses a single app related to GenAI, will likely implement less stringent controls in this area.
                </Text>
                <Text>
                    In the next section, we describe how the framework can help mitigate risks.
                </Text>
            </ModuleContainer>
        </>
    );
}