"use client"

import CustomerDataset from '../datasets/customers.json'

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, Text, TextLink, UnorderedList } from "@/components/ui/text";
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { PracticeHaving } from './practice-having';
import { Heading } from '@/components/ui/heading';

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"HAVING clause"} isComplete={false} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/Intro+to+SQL+(Part+1)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries. Refer to Graphic 2 while completing this course&apos;s practice questions.
                </Text>
                <Text>
                    The HAVING clause is like the WHERE clause, with one key difference: The WHERE clause filters out rows before something is aggregated, while the HAVING clause filters out rows after they are aggregated. Consider the following two queries.
                </Text>
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle>WHERE Query</AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='WHERE query'
                                dataset={CustomerDataset}
                                initialQuery={
                                    `SELECT c.State, AVG(c.CreditScore) AS AvgCreditScore\nFROM Customer AS C\nWHERE c.State = "Utah"\nGROUP BY c.State;`
                                }
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>HAVING Query</AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='HAVING query'
                                dataset={CustomerDataset}
                                initialQuery={
                                    `SELECT c.State, AVG(c.CreditScore) AS AvgCreditScore\nFROM Customer AS C\nGROUP BY c.State\nHAVING AVG(c.CreditScore) > 700;`
                                }
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Text>
                    The WHERE query removes the records for all states other than Utah before the GROUP BY happens. Thus, it returns a single row and only averages rows for the state of Utah. In contrast, the HAVING query computes the average credit score for all states (during the GROUP BY clause) and then removes the state or states that do not meet the criteria — in this case, Utah is removed because its average credit score is not above 700.
                </Text>
                <Text>Tips:</Text>
                <UnorderedList>
                    <ListItem>
                        <Text>
                            You will never have an aggregation function (e.g., SUM, AVG, COUNT) in a WHERE clause as the WHERE clause can only filter before aggregation (remember the order of operations!). The WHERE clause comes before the GROUP BY clause both in syntax and the order of execution.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            You will always have an aggregation function (e.g., SUM, COUNT, MIN, MAX) in the HAVING clause because HAVING removes rows after the aggregation is performed. The HAVING clause comes after the GROUP BY clause both in syntax and in the order of execution.
                        </Text>
                    </ListItem>
                </UnorderedList>
                <Text>
                    You can have both WHERE clauses and HAVING clauses in the same query. Examine the following code and identify what the output will look like. Then, run the code to see if you are correct.
                </Text>
                <Accordian>
                    <AccordianTitle>WHERE and HAVING together</AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Combining WHERE and HAVING clauses allows filtering before and after aggregation. This query filters out rows with null values in OrdersPlaced before grouping, and then removes groups with MAX(c.TotalOrdered) greater than 50,000:
                        </Text>
                        <SQLTerminal
                            title='WHERE and HAVING together'
                            dataset={CustomerDataset}
                            initialQuery={
                                `SELECT c.City, MAX(c.TotalOrdered) AS MaxOrdered\nFROM Customer AS c\nWHERE c.OrdersPlaced IS NOT NULL\nGROUP BY c.City\nHAVING MAX(c.TotalOrdered) < 50000;`
                            }
                            explanation="The WHERE clause in this query removes the rows of data that have NULL values in the OrdersPlaced field before performing any aggregation. After those rows are removed, the query computes the maximum total ordered for each city and then the HAVING clause removes all cities where the maximum total order amount is greater than 50,000. The result is that the query returns seven rows of data."
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Text>
                    Now that you’ve seen how useful the HAVING clause is, put your knowledge to the test through the following practice problems!
                </Text>
                <PracticeHaving setIsComplete={() => props.setIsComplete(true)} />
                <Heading>Additional Practice</Heading>
                <Text>
                    For additional instruction and practice go to <TextLink href='https://www.w3schools.com/sql/sql_having.asp'>https://www.w3schools.com/sql/sql_having.asp</TextLink>. This is not required.
                </Text>
                <Text>
                    That’s it for the practice problems! Press “Next” to advance to the graded quiz. The “Next” button will only be enabled once all terminal queries on this page have been graded. Make sure you have submitted and received feedback for every query before proceeding.
                </Text>
            </ModuleContainer>
        </>
    );
}