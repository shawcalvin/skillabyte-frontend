"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Image } from "@/components/ui/media";
import { Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Deployment Strategies: Tool Integration"} {...props}>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/advanced-genai-topics/AI+Tools.png"
                    alt=""
                    size="24rem"
                    className="m-8 rounded-md float-right"
                />
                <Text>
                    Deployment strategies are used after the model is created and before the end-user uses the model. We will focus on language models specifically (i.e., models used to produce text outputs). Deployment strategies can enhance a model’s abilities and compensate for weaknesses in large language models.
                </Text>
                <Text>
                    Tool integration is a deployment strategy that enables AI models to interact with external tools, databases, and APIs allowing AI to access real-time information and perform actions beyond its initial training. A simple tool integration is the use of a calculator. Language models do not perform math like a calculator, but instead try to predict the next word of a written statement. As such, they often get math problems wrong. With tool integration, the AI can read a prompt and then realize that there is a math problem. Once it realizes that it needs to answer a math problem, the AI can use a tool, in this case a calculator, to perform the task. The AI will call the tool and send inputs to the tool. The tool will perform its functions and send the result back to the AI. The AI will then finalize the output. In this way, the AI is less likely to hallucinate because the correct tool performs its function.
                </Text>
                <Text>
                    Tool integration significantly enhances accounting workflows by allowing a GenAI model to access real-time data directly from accounting software like QuickBooks. For instance, when prompted to “Generate a financial summary for this month,” the AI taps into the accounting software’s API to pull up-to-date information such as bank transactions, accounts payable, and other key financial metrics. This direct connection means the generated report reflects the latest business activity, ensuring the information is accurate and eliminating the need for manual data entry. The process is streamlined, efficient, and minimizes the chances of outdated or incomplete data being used.
                </Text>
                <Text>
                    Beyond simple data retrieval, the AI can leverage other integrated tools to add more depth to its reporting. For instance, a document reader can be used to access and verify details from invoices and receipts, ensuring expense records match the scanned documentation. When generating a summary, the AI can cross-check these invoice values against the company’s financial records, adding a layer of accuracy and validation that goes beyond basic database queries. By integrating such specialized tools, the model minimizes the risk of hallucinations—errors or misstatements made when relying purely on predictive output—and instead delivers consistent, data-backed financial reports. This makes GenAI not only more reliable but also far more useful in practical, real-world accounting tasks.
                </Text>
                <Text>
                    Despite these advantages, significant risks and security concerns are introduced with giving AI the ability to use tools. Allowing AI to interact with external systems—such as databases, APIs, or document readers—raises questions around data privacy, unauthorized access, and potential misuse of sensitive information. There is a risk that the AI, if not properly restricted, could access or expose confidential financial data, either due to a vulnerability in the integration or due to misconfiguration. Additionally, security flaws could be exploited by malicious actors, leading to data breaches or manipulation. Ensuring strict access controls, regular audits, and encrypted data transmission are therefore crucial to mitigate these risks. Proper safeguards, such as limiting the scope of data the AI can access and closely monitoring interactions, are essential to balance the benefits of tool integration with the need for maintaining robust security and privacy standards.
                </Text>
            </ModuleContainer>
        </>
    );
}