"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Heading } from "@/components/ui/heading";
import { Image, Video } from "@/components/ui/media";
import { ListItem, Strong, Text, TextLink, UnorderedList } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Background on Melody Makers"} {...props}>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/melody-makers-logo.png"
                    alt="Melody Makers Logo"
                    size={256}
                    className="float-right rounded-lg"
                />
                <Text>
                    Melody Makers Inc, a private company based in Nashville, Tennessee, is committed to spreading musical joy across the United States. The company requires an audit to maintain its bank loan. It is January 18th, 20X2 and your accounting firm is conducting an audit of their financial statements. As the auditor, your role is to evaluate the control risk within a segment of the purchase-to-pay (P2P) cycle. This assessment is crucial, as it will significantly influence the evaluation of internal controls over financial reporting. Consequently, it will influence the control risk in the audit risk model and determine the extent of testing required (detection risk).
                </Text>
                <Heading>Controls at Melody Makers</Heading>
                <Text>
                    Melody Makers manages its expenditure cycle as follows: The process starts when an employee initiates a purchase through a requisition. The employee fills out the requisition form and sends it to a buying agent in the purchasing department. The buying agent reviews the requisition and decides whether to approve it. Upon approval, the agent issues a purchase order (PO) and selects a vendor from the approved vendor list, also signing the PO to indicate approval. Subsequently, the buying agent distributes copies of the purchase order to the employee who made the request, the vendor, and the accounts payable manager.
                </Text>
                <Text>
                    When goods are shipped to Melody Makers, they arrive with a bill of lading. An employee in the receiving department inspects the goods and prepares a receiving report detailing the received items, quantities, and any pertinent notes (e.g., damages). The receiving department manager signs the receiving report to confirm the inspection. The original report is filed in the receiving department, and copies are sent to the warehouse, purchasing department, and accounts payable.
                </Text>
                <Text>
                    Along with shipping the goods, the vendor sends an invoice to the accounts payable department requesting payment. Upon receiving the invoice, the accounts payable department reviews and signs it. If the approved PO, invoice, and receiving report all match, they prepare a voucher cover and sign it, indicating approval for payment. The signed voucher packet, which includes the voucher cover, PO, invoice, and receiving report, is then sent to the cashier for payment issuance to the vendor. The following diagram illustrates the flowchart of this process.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/flowchart.png"
                    alt="Melody Makers Internal Controls Flowchart"
                    size="48rem"
                    center
                    className="my-8"
                />
                <Text>
                    Your audit task involves focusing solely on this part of the purchase-to-pay (P2P) process. Another auditor will examine the remaining parts of the P2P process.
                </Text>
                <Text>
                    Bryce Saulls, your auditing colleague, has already reviewed 25 out of the 30 voucher packets selected for the audit. He has now been reassigned to another project, and your audit senior has asked you to complete this task by examining the remaining five voucher packets and finalizing the work papers. Before Bryce left, he recorded a video showing his evaluation of one of the 25 voucher packets. This video, provided below, will help explain the task you need to perform. Before watching the video, please download these two files and familiarize yourself with their contents.
                </Text>
                <UnorderedList>
                    <ListItem>
                        <Text>
                            <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/voucher_packet.pdf" download>Voucher Packets</TextLink> - This file contains scanned copies of the 30 voucher packets sorted by voucher number.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/audit_work_papers.xlsx" download>Audit Workpapers</TextLink> - This file contains the audit workpapers. Tab &quot;5&quot; is where you will document your work for each voucher packet, as demonstrated in the video. The “D24” tab is where you will document your conclusions.
                        </Text>
                    </ListItem>
                </UnorderedList>
                <Video
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/melody-makers/AuditExplanation.mp4"
                    size="48rem"
                    center
                    className="my-8 rounded-md"
                />
                <Heading>Task</Heading>
                <Text>
                    Your task is to review the remaining 5 voucher packets starting with #46214 (pages 101-120) and complete the audit papers, including audit paper 5, as shown in the video. The results on audit paper 5 automatically update as you enter the data in the fields in work paper D24.
                </Text>
                <Text>
                    The relevant employees at Melody Makers are
                </Text>
                <UnorderedList>
                    <ListItem><Text>Noah Roberts - Accounts Payable Manager</Text></ListItem>
                    <ListItem><Text>Luis Martinez - Receiving Manager</Text></ListItem>
                    <ListItem><Text>Grace Wilson - Buying Agent</Text></ListItem>
                    <ListItem><Text>Whitney Johnson - Buying Agent</Text></ListItem>
                    <ListItem><Text>Mei Chen - Buying Agent</Text></ListItem>
                </UnorderedList>
                <Text className="text-center mt-4"><Strong>When you have finished, click the Next button to continue.</Strong></Text>
            </ModuleContainer>
        </>
    )
}