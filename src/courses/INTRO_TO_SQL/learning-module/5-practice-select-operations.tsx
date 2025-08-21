"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Code, Text, TextLink } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { PracticeSelect } from './practice-select';

export default function ModulePage(props: LearningModulePageProps) {

    return (
        <>
            <ModuleContainer title={"Practice: SELECT clause operations"} isComplete={false} {...props}>
                <Text className='italic mb-8'>
                    As you complete the following practice problems, reference the previous material to help you construct the SQL queries. You should download the <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/Intro+to+SQL+(Part+1)+-+Handout.docx" download>handout</TextLink> for this lesson, which includes the <Code>SELECT</Code> clause operations table from the previous page as well as the data type table for the Customer dataset. Refer to Graphic 2 while completing this course&apos;s practice questions.
                </Text>
                <Heading>How to use the practice question terminals</Heading>
                <Divider />
                <Text>
                    Type your SQL code into the black text box. Press “Run” to run the query and see the output or error message. After running, press “Grade Query” to see if your query is correct and receive AI feedback. The correct answer and an explanation will appear after you have pressed “Grade Query” twice or submitted the correct code, whichever comes first. Note that there are often many ways to answer SQL questions, so your solution may look different than ours and still produce the correct output.
                </Text>
                <PracticeSelect setIsComplete={() => props.setIsComplete(true)} />
                <Heading>Additional practice</Heading>
                <Divider />
                <Text>
                    If you would like additional practice on <Code>SELECT</Code> clauses (this is not required), you can visit <TextLink href="https://www.w3schools.com/sql/sql_select.asp">https://www.w3schools.com/sql/sql_select.asp</TextLink>.
                </Text>
                <Text>
                    The “Next” button will only be enabled once all terminal queries on this page have been graded. Make sure you have submitted and received feedback for every query before proceeding.
                </Text>
            </ModuleContainer>
        </>
    );
}