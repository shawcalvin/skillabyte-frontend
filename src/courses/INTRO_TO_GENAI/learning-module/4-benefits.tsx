"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Strong, Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Benefits"} {...props}>
                <Text>
                    With the growing use of generative AI in businesses, we are witnessing both its advantages and the drawbacks it presents. Let&apos;s start by exploring the benefits of implementing AI in accounting settings.
                </Text>

                <Text><Strong>Enhanced efficiency and precision</Strong>. AI can take over routine tasks such as using GenAI to generate reports from notes, freeing up accountants to engage in more strategic roles like financial analysis and client advisory, thus boosting productivity and minimizing errors.</Text>

                <Text><Strong>Cost reduction</Strong>. Companies like JPMorgan Chase utilize neural networks for fraud detection, which helps them save millions on legal expenses. Similarly, Walmart uses AI-driven robots for inventory management, cutting down on manual labor costs. These cases highlight how automation can streamline processes, reduce errors, and deliver significant cost savings.</Text>

                <Text><Strong>Better decision-making</Strong>. CFOs can leverage AI and machine learning to sift through large volumes of financial data, uncovering patterns and identifying potential savings. AI also enables real-time monitoring of financial performance, assisting management in adapting to fluctuating economic conditions.</Text>

                <Text>
                    With these examples, notice how AI can refer to the various definitions you learned previously. Given the current interest in GenAI, often people refer to AI or GenAI and they actually mean a different area of AI like machine learning. Realize each type of AI has a different meaning and try to use the appropriate language to describe it.
                </Text>

            </ModuleContainer>
        </>
    );
}