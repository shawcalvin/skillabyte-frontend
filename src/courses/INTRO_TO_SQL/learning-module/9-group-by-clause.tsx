"use client"

import CustomerDataset from '../datasets/customers.json'

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Strong, Text, TextLink } from "@/components/ui/text";
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import { PracticeGroupBy } from './practice-group-by';

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"GROUP BY clause"} isComplete={false} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/Intro+to+SQL+(Part+1)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries. Refer to Graphic 2 while completing this course’s practice questions.
                </Text>
                <Text>
                    Thus far, we have used SQL to return all values from a table or to reduce the number of rows by using a WHERE clause. Now, you will learn how SQL queries can create aggregations of the data. For example, you could sum up all sales in a database to compute gross revenues.
                </Text>
                <Text>
                    To aggregate data, you use the GROUP BY clause. Remember, in terms of syntax order, the GROUP BY clause comes after the SELECT, FROM, and WHERE clauses and before the HAVING clause, which we will discuss shortly. In terms of execution order, the GROUP BY clause is processed after the FROM and WHERE clauses, but before the HAVING and SELECT clauses. Refer to the handout to help you remember the correct order.
                </Text>
                <Text>
                    The GROUP BY clause is usually used with aggregate functions. You are likely familiar with the aggregation formulas of SUM, COUNT, MIN, MAX, etc. from Microsoft Excel. These aggregations are available in SQL as well.
                </Text>
                <Text>
                    To start off, let’s compare two similar, but slightly different, SQL statements.
                </Text>
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle>States without grouping</AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='States without grouping'
                                dataset={CustomerDataset}
                                initialQuery={
                                    `SELECT c.State\nFROM Customer AS c;`
                                }
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>States with grouping</AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='States with grouping'
                                dataset={CustomerDataset}
                                initialQuery={
                                    `SELECT c.State\nFROM Customer AS c\nGROUP BY c.State;`
                                }
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Text>
                    Both of these queries create a list of states that customers are from. In the first query, the output will be all 20 rows of customer data listing the states of each customer. The second query groups all similar states, displaying only one row for each unique state.
                </Text>
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle>AVG() query</AccordianTitle>
                        <AccordianContent>
                            <Text>
                                The GROUP BY clause becomes more valuable when you use it with aggregating functions, such as AVG(), SUM(), and COUNT(). The following SQL code shows the average of the TotalOrdered field for each state.
                            </Text>
                            <SQLTerminal
                                title='AVG() query'
                                dataset={CustomerDataset}
                                initialQuery={
                                    `SELECT c.State, AVG(c.TotalOrdered) AS AvgTotalOrdered\nFROM Customer AS c\nGROUP BY c.State;`
                                }
                                explanation="The results from the query show the average computed for each state. We strongly encourage you to use aliases of aggregate functions. Absence of an alias will cause the DBMS to create meaningless column headings."
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>AVG() query with multiple grouped fields</AccordianTitle>
                        <AccordianContent>
                            <Text>
                                Aggregations can be performed on multiple items in a single SQL statement. The following SQL code shows the average amount ordered by the combinations of state and city.
                            </Text>
                            <SQLTerminal
                                title='AVG() query with multiple grouped fields'
                                dataset={CustomerDataset}
                                initialQuery={
                                    `SELECT c.State, c.City, AVG(c.TotalOrdered) AS AvgTotalOrdered\nFROM Customer AS c\nGROUP BY c.State, c.City;`
                                }
                                explanation="The results from this query show the average amount ordered for each unique combination of state and city. That is, there are four customers from Las Vegas in Nevada, so the average of $30,250 is for those four customers. There is only one customer from Duncan, Arizona, so $72,000 is simply the amount ordered by that one person (i.e., the average of a single number is that number)."
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>Multiple aggregated fields</AccordianTitle>
                        <AccordianContent>
                            <Text>
                                If we wanted to show both the average and count for each city and state combination, we could revise the query as follows:
                            </Text>
                            <SQLTerminal
                                title='Multiple aggregated fields'
                                dataset={CustomerDataset}
                                initialQuery={
                                    `SELECT c.State, c.City, AVG(c.TotalOrdered) AS AvgTotalOrdered, COUNT(c.TotalOrdered) AS NumOfOrders\nFROM Customer AS c\nGROUP BY c.State, c.City;`
                                }
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Heading>Tips for using GROUP BY</Heading>
                <Divider />
                <Text>
                    <Strong>IMPORTANT:</Strong> When using an aggregate function in the SELECT clause, every field (column) in the SELECT clause that does not have an aggregate function must appear in the GROUP BY clause. Otherwise, your query will either result in an error or return arbitrary values for the unaggregated fields.
                </Text>
                <Text>
                    For example:
                </Text>
                <SQLTerminal
                    title='GROUP BY error'
                    dataset={CustomerDataset}
                    initialQuery={
                        `SELECT c.State, c.City, AVG(c.TotalOrdered) as AvgTotalOrdered, COUNT(c.TotalOrdered) as NumofOrders\nFROM Customer AS c\nGROUP BY c.State;`
                    }
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                />
                <Text>
                    While this query doesn’t throw an error, it returned the wrong results. Why? City is a column that does not have an aggregate function, nor does it appear in the GROUP BY clause – yet we have included it in our SELECT clause. The database cannot determine how to group the results without including all non-aggregated columns in the GROUP BY clause, so it includes arbitrary city values for each of the three states.
                </Text>
                <Text>
                    Instead, it should look like:
                </Text>
                <SQLTerminal
                    title='GROUP BY error - corrected'
                    dataset={CustomerDataset}
                    initialQuery={
                        `SELECT c.State, c.City, AVG(c.TotalOrdered) AS AvgTotalOrdered, COUNT(c.TotalOrdered) AS NumOfOrders\nFROM Customer AS c\nGROUP BY c.State, c.City;`
                    }
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                />
                <Text>
                    In this corrected query, both State and City are appropriately included in the GROUP BY clause, which allows the database to know how to group the results. When using GROUP BY, be sure to carefully read and understand the problem so you can choose the correct aggregate function. For example, if the problem asks for a COUNT, don’t mistakenly use AVG.
                </Text>
                <Text>
                    Using alias names in ORDER BY can get complicated. When sorting results with the ORDER BY clause after grouping with GROUP BY, you can use alias names as defined in the SELECT clause. This is because ORDER BY is processed after the SELECT clause, so the alias is already defined and can be referenced by the query.
                </Text>
                <Text>
                    You cannot use aliases in the GROUP BY clause because the GROUP BY clause is processed before the SELECT clause and, as such, the alias doesn’t exist when the GROUP BY clause is evaluated.
                </Text>
                <Text>
                    Consider the previous correct example. To order by the average total ordered amount, the code would look like this:
                </Text>
                <SQLTerminal
                    title='GROUP BY error - corrected and sorted'
                    dataset={CustomerDataset}
                    initialQuery={
                        `SELECT c.State, c.City, AVG(c.TotalOrdered) as AvgTotalOrdered\nFROM Customer AS c\nGROUP BY c.State, c.City\nORDER BY AVG(c.TotalOrdered); `
                    }
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                />
                <Heading>Practice</Heading>
                <Divider />
                <PracticeGroupBy setIsComplete={() => props.setIsComplete(true)} />
                <Heading>Additional Practice</Heading>
                <Divider />
                <Text>
                    <Text>You can learn more and practice the GROUP BY clause at <TextLink href="https://www.w3schools.com/sql/sql_groupby.asp">https://www.w3schools.com/sql/sql_groupby.asp</TextLink>.</Text>
                </Text>
                <Text>
                    The “Next” button will only be enabled once all terminal queries on this page have been graded. Make sure you have submitted and received feedback for every query before proceeding.
                </Text>
            </ModuleContainer>
        </>
    );
}