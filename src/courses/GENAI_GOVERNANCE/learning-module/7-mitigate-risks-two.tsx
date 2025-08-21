"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/media";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"How the Maturity Model Helps Mitigate Risks"} {...props}>
                <Text>
                    The GenAI Governance Maturity Model is a complementary tool to the governance framework that helps organizations evaluate their current AI governance capabilities and guide their journey towards improved maturity. It provides a structured way for organizations to assess where they stand in terms of governance across various domains, such as strategy alignment, data management, risk assessment, and compliance. By evaluating maturity, organizations can understand their strengths, identify areas for improvement, and develop actionable plans to enhance their AI governance.
                </Text>
                <Text>
                    The maturity model categorizes an organization&apos;s AI governance capabilities into different levels, ranging from nascent to leading. Each level represents a distinct stage in the development of AI governance practices, with specific criteria that need to be met to advance to the next level. For example, an organization with a nascent control level may have basic policies and minimal oversight, while an organization with a leading control level has fully integrated AI governance into all business processes, with robust monitoring and accountability mechanisms.
                </Text>
                <Text>
                    As an example, consider the domain of &quot;Human, ethical, and social considerations&quot; One important control consideration is that the company implement &quot;human-in-the-middle&quot; policies for sensitive disclosures. The framework describes that this means, &quot;For disclosures that are deemed important or sensitive, require that all AI-generated content be reviewed by a human or humans before being released.&quot; The framework helps assess where the company is currently performing in this regard on the following scale:
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/genai-governance/scale.png"
                    alt="GenAI Risk Domains"
                    size="900px"
                    className="my-8 rounded-lg"
                    center
                />
                <Text>
                    Once a company assesses where they sit on the maturity scale regarding the “human-in-the-middle” control, they may decide that they have this risk adequately covered and need no further action, or they may determine that additional steps are necessary. If they identify gaps, they should develop a targeted action plan to address these shortcomings. This may involve prioritizing initiatives such as investing in specific employee training programs focused on understanding and implementing human-in-the-loop processes, updating existing policies to mandate human oversight for sensitive AI-generated content, and assigning dedicated staff to review these outputs.
                </Text>
                <Text>
                    By using the maturity model, organizations can systematically determine which areas require more attention. It also helps set clear benchmarks for progress, enabling organizations to track their improvements over time. The maturity model is particularly valuable for aligning AI governance with business strategy, ensuring that AI initiatives not only manage risk but also contribute to achieving long-term organizational goals.
                </Text>
            </ModuleContainer>
        </>
    );
}