"use client"

import CustomerDataset from '../datasets/customers.json'

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text, TextLink } from "@/components/ui/text";
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"ORDER BY clause"} isComplete={false} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/Intro+to+SQL+(Part+1)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries. Refer to Graphic 2 while completing this course’s practice questions.
                </Text>
                <Text>
                    The ORDER BY clause specifies how the data will be sorted in the resulting output. Results can be sorted by one or more fields in ascending or descending order. You can sort by number (including dates) or string fields. Without the ORDER BY clause, results are unsorted and will display in the order recorded in the database. The default sort order in the ORDER BY clause is ascending (ASC).
                </Text>
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle>
                            ASC query
                        </AccordianTitle>
                        <AccordianContent>
                            <Text className='mb-4'>
                                The following query will display the names of all customers sorted in ascending order.
                            </Text>
                            <SQLTerminal
                                title='ASC query'
                                dataset={CustomerDataset}
                                initialQuery={
                                    `SELECT c.Name\nFROM Customer AS c\nORDER BY c.Name;`
                                }
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>
                            ASC alternative query
                        </AccordianTitle>
                        <AccordianContent>
                            <Text className='mb-4'>
                                Alternatively, you could specify the ascending order with ASC, though this is unnecessary as ASC is the default sort order.
                            </Text>
                            <SQLTerminal
                                title='ASC alternative query'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name\nFROM Customer AS c\nORDER BY c.Name ASC;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>
                            ORDER BY multiple fields
                        </AccordianTitle>
                        <AccordianContent>
                            <Text className='mb-4'>
                                Queries can also be sorted by multiple fields according to the order they are listed in the ORDER BY clause. The following query presents the customer&apos;s name, city, and state sorted first by state in descending order, then by city in ascending order, and then by name in descending order. Remember, you do not have to list ASC to sort in ascending order, and in the future, we will generally not list this in our code.
                            </Text>
                            <SQLTerminal
                                title='ORDER BY multiple fields'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.City, c.State\nFROM Customer AS c\nORDER BY c.State DESC, c.City ASC, c.Name DESC;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>
                            Alternative ORDER BY multiple fields
                        </AccordianTitle>
                        <AccordianContent>
                            <Text className='mb-4'>
                                You can remove the ASC and get the same result, as in the following query:
                            </Text>
                            <SQLTerminal
                                title='Alternative ORDER BY multiple fields'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.City, c.State\nFROM Customer AS c\nORDER BY c.State DESC, c.City, c.Name DESC;`}
                                explanation='The query returns 11 customers that have credit limits above 750 who have ordered more than $20,000.'
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Heading>Hint for writing ORDER BY</Heading>
                <Divider />
                <Text>
                    For practice problems and quizzes, your ORDER BY must match the field order and sort order as specified in the problem description. Make sure to read the problem carefully.
                </Text>
                <Heading>Practice problem</Heading>
                <Divider />
                <div className='w-full flex justify-center'>
                    <div className='w-full max-w-5xl'>
                        <Text className='mb-8'>
                            Create a list of all customers sorted by the date of their first purchase in ascending order and then in descending order by credit limit. Include the following column names: Name, FirstPurchase, and CreditLimit in that order.
                        </Text>
                        <SQLTerminal
                            title='Practice ORDER BY'
                            dataset={CustomerDataset}
                            validQuery={`SELECT c.Name, c.FirstPurchase, c.CreditLimit\nFROM Customer AS c\nORDER BY c.FirstPurchase ASC, c.CreditLimit DESC;`}
                            explanation='The ORDER BY clause will sort the output by all fields that you list, in the order that you list them – so be careful to put FirstPurchase first and then CreditLimit second. Also, note that the default sort order for a field is ascending, so you don’t need to list ASC for FirstPurchase.'
                            handleFinish={() => props.setIsComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                        />
                    </div>
                </div>
                <Heading>Additional practice</Heading>
                <Divider />
                <Text>
                    <Text>You can learn more and practice the ORDER BY clause at <TextLink href="https://www.w3schools.com/sql/sql_orderby.asp">https://www.w3schools.com/sql/sql_orderby.asp</TextLink>.</Text>
                </Text>
                <Text>
                    Before we learn about the GROUP BY clause, let’s take a break to learn about a real-world application of SQL at a fictional company: Sunny Blendz. The “Next” button will only be enabled once all terminal queries on this page have been graded. Make sure you have submitted and received feedback for every query before proceeding.
                </Text>
            </ModuleContainer>
        </>
    );
}