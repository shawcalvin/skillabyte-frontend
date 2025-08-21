"use client"

import CustomerDataset from '../datasets/customers.json'

import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { Code, ListItem, Text, UnorderedList } from "@/components/ui/text";
import { useEffect, useState } from 'react';


export function PracticeGroupBy({ setIsComplete }: { setIsComplete: () => void }) {
    const [practiceOneComplete, setPracticeOneComplete] = useState(false);
    const [practiceTwoComplete, setPracticeTwoComplete] = useState(false);
    const [practiceThreeComplete, setPracticeThreeComplete] = useState(false);
    const [practiceFourComplete, setPracticeFourComplete] = useState(false);
    const [practiceFiveComplete, setPracticeFiveComplete] = useState(false);

    useEffect(() => {
        if (practiceOneComplete && practiceTwoComplete && practiceThreeComplete && practiceFourComplete && practiceFiveComplete) {
            setIsComplete()
        }
    }, [practiceOneComplete, practiceTwoComplete, practiceThreeComplete, practiceFourComplete, practiceFiveComplete])

    return (
        <AccordianGroup>
            <Accordian>
                <AccordianTitle>Practice problem 1</AccordianTitle>
                <AccordianContent>
                    <Text className='mb-4'>
                        What is the average credit score for customers in each state? Include the following column names: State and AvgCreditScore (in that order).
                    </Text>
                    <SQLTerminal
                        title='Practice problem 1: Average credit score by state'
                        dataset={CustomerDataset}
                        validQuery={
                            `SELECT c.State, AVG(c.CreditScore) AS AvgCreditScore\nFROM Customer AS c\nGROUP BY c.State;`
                        }
                        explanation="When aggregating data using GROUP BY, make sure that you always group by fields that have no aggregate function in the SELECT statement. In this case, c.CreditScore is being used in an aggregate function AVG(), so it should not be grouped, while c.State is not being used in an aggregate function, so it should be grouped."
                        handleFinish={() => setPracticeOneComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
            <Accordian>
                <AccordianTitle>Practice problem 2</AccordianTitle>
                <AccordianContent>
                    <Text className='mb-4'>
                        How many customers are listed in the database? Your output should contain only the NumberOfCust column.
                    </Text>
                    <SQLTerminal
                        title='Practice problem 2: Total customers'
                        dataset={CustomerDataset}
                        validQuery={
                            `SELECT COUNT(c.CustID) AS NumberOfCust\nFROM Customer AS c;`
                        }
                        explanation="This query does not need a GROUP BY clause since we want to return a single row. That is, we are grouping everything into a single group and not into distinct groups, so the COUNT function aggregates all the data together. We use CustID as the field to count since it is a primary key and cannot contain null values."
                        handleFinish={() => setPracticeTwoComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
            <Accordian>
                <AccordianTitle>Practice problem 3</AccordianTitle>
                <AccordianContent>
                    <Text className='mb-4'>
                        Correct the error in the following query that is preventing the query from running. This query is attempting to show the largest TotalOrdered amount for each year in the dataset.
                    </Text>
                    <SQLTerminal
                        title='Practice problem 3: Fix the error'
                        dataset={CustomerDataset}
                        initialQuery={`SELECT YEAR(c.FirstPurchase) AS PurchaseYear, MAX(c.TotalOrdered) AS MaxRevenue\nFROM Customer AS c\nGROUP BY Customer \nORDER BY PurchaseYear;`}
                        validQuery={
                            `SELECT YEAR(c.FirstPurchase) AS PurchaseYear, MAX(c.TotalOrdered) AS MaxRevenue\nFROM Customer AS c\nGROUP BY YEAR(c.FirstPurchase)\nORDER BY PurchaseYear;`
                        }
                        explanation={
                            <>
                                There are multiple mistakes in the original SQL code for this problem:
                                <UnorderedList>
                                    <ListItem><Code>GROUP BY Customer</Code> is attempting to group by a table, which doesn’t make sense. Rather, it should group by a field – in this case, YEAR(c.FirstPurchase).</ListItem>
                                    <ListItem><Code>ORDER BY Year</Code> doesn’t work because there is no field named Year. This should instead be <Code>ORDER BY PurchaseYear</Code>.</ListItem>
                                </UnorderedList>
                            </>
                        }
                        handleFinish={() => setPracticeThreeComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
            <Accordian>
                <AccordianTitle>Practice problem 4</AccordianTitle>
                <AccordianContent>
                    <Text className='mb-4'>
                        List the name of each city in Arizona and the total amount ordered in each city. Sort the data by the total amount ordered (ascending). Include the City and TotalOrdered columns in your output (in that order).
                    </Text>
                    <SQLTerminal
                        title='Practice problem 4: Total ordered by cities in Arizona'
                        dataset={CustomerDataset}
                        validQuery={
                            `SELECT c.City, SUM(c.TotalOrdered) AS TotalOrdered\nFROM Customer AS c\nWHERE c.State = "Arizona"\nGROUP BY c.City\nORDER BY SUM(c.TotalOrdered);`
                        }
                        explanation="Remember your order of operations here! The WHERE clause removes all records that aren’t in Arizona before the grouping of the results."
                        handleFinish={() => setPracticeFourComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
            <Accordian>
                <AccordianTitle>Practice problem 5</AccordianTitle>
                <AccordianContent>
                    <Text className='mb-4'>
                        How many customers are there for each combination of state and contact preference in the dataset? Order your results first by state (ascending) and then by the number of customers with that preference (descending). Your output should include the following columns: State, ContactPref, and numCustomers (in that order).
                    </Text>
                    <SQLTerminal
                        title='Practice problem 5: Customers by contact preference'
                        dataset={CustomerDataset}
                        validQuery={
                            `SELECT c.State, c.ContactPref, COUNT(c.CustID) AS numCustomers\nFROM Customer AS c\nGROUP BY c.State, c.ContactPref\nORDER BY c.State, COUNT(c.CustID) DESC;`
                        }
                        explanation="You can GROUP BY multiple fields! Also, you may have successfully used a different field for the COUNT() function – however, we recommend using the CustID field because it is a unique identifier and cannot contain null values."
                        handleFinish={() => setPracticeFiveComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
        </AccordianGroup>
    )
}