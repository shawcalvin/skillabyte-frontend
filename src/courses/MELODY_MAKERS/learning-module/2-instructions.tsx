"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Image } from "@/components/ui/media";
import { Text } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Interview Instructions"} {...props}>
                <Text>
                    Now that you have completed the initial testing of the last five voucher packets, you can proceed to the next audit step, which involves thoroughly understanding any issues identified during your or Bryce’s testing. Keep in mind that although Bryce tested the first 25 packets, you are responsible for understanding his work and providing the final documentation of the audit tests for all 30 packets.
                </Text>
                <Text>
                    To gain more information about the problems that either you or Bryce noted because of your testing, you have scheduled an interview with Noah Roberts, the accounts payable manager (pictured below).  Noah has been working with Melody Makers for 13 months now. He was hired by the company after graduating with an accounting degree from a nearby university.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/noah-young.png"
                    alt="Noah Roberts, Melody Makers Accounts Payable Manager"
                    size="24rem"
                    center
                    className="rounded-lg"
                />
                <Text>
                    The purpose of your interview is to gather evidence that will help you determine which, if any, of the issues you or Bryce identified are actual control deviations. Whenever possible, find corroborating evidence to support what Noah says and include that evidence in the work papers. You may find evidence he already collected in the voucher packet file if he included it there.
                </Text>
                <Text>
                    Remember, incorrectly concluding that something is a control deviation will make the audit less efficient as you will need to do more unnecessary work. Conversely, failing to identify an actual control deviation can make the audit less effective and could expose you to litigation or other negative consequences.
                </Text>
                <Text>
                    Recognize that Noah only has a limited amount of time to visit with you. Prepare well for your interview you so you do not waste his time. When you are ready, navigate to the next page to start your chat with Noah. You should act professionally with him. If you do not, he may end the interview, preventing you from getting the information you need and potentially reporting this to your supervisor.
                </Text>
                <Text>
                    Noah has an important meeting to attend soon. He will end the interview and let you know when he needs to leave. If you are finished asking questions before he excuses himself, end the meeting with a brief, professional message, such as &quot;thank you for your time today, I am finished with my questions.&quot;
                </Text>
            </ModuleContainer>
        </>
    )
}