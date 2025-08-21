import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { ListItem, Text, UnorderedList } from "@/components/ui/text";

export default function PrivacyPolicyPage() {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-full max-w-3xl space-y-5 mt-8">
                    <Heading>
                        Participate in Research
                    </Heading>
                    <Divider />
                    <Text>
                        A few times a year, you may receive email invitations to participate in research studies. These studies typically involve tasks such as:
                    </Text>
                    <ul className="list-disc ml-6 space-y-2 text-gray-800">
                        <ListItem><Text>Answering survey questions</Text></ListItem>
                        <ListItem><Text>Responding to short vignettes</Text></ListItem>
                        <ListItem><Text>Participating in experiments</Text></ListItem>
                        <ListItem><Text>Similar activities lasting generally less than 30 minutes</Text></ListItem>
                    </ul>
                    <Text>
                        Participation is entirely voluntary, and some studies may offer compensation. By contributing to these studies, you help scholars advance knowledge and build a better future. Your decisions to participate (or not) will remain confidential and will not be disclosed to your organization.
                    </Text>
                    <Text>
                        We encourage you to consider participating when you receive these invitations.
                    </Text>
                </div>
            </div>
        </>
    )
}