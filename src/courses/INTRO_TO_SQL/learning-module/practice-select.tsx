import CustomerDataset from '../datasets/customers.json'

import { useEffect, useState } from 'react';
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Code, ListItem, Text, UnorderedList } from '@/components/ui/text';


export function PracticeSelect({ setIsComplete }: { setIsComplete: () => void }) {
    const [problemOneComplete, setProblemOneComplete] = useState(false);
    const [problemTwoComplete, setProblemTwoComplete] = useState(false);
    const [problemThreeComplete, setProblemThreeComplete] = useState(false);

    useEffect(() => {
        if (problemOneComplete && problemTwoComplete) {
            setIsComplete()
        }
    }, [problemOneComplete, problemTwoComplete])

    return (
        <AccordianGroup>
            <Accordian>
                <AccordianTitle><Text>Practice question 1</Text></AccordianTitle>
                <AccordianContent>
                    <Text className='mb-4'>
                        Write a query that shows each customer name, their preferred method of contact, and city location. Include the following columns: Name, ContactPref, and City (in that order).
                    </Text>
                    <SQLTerminal
                        title='Practice question 1'
                        dataset={CustomerDataset}
                        initialQuery={``}
                        validQuery={`SELECT c.Name, c.ContactPref, c.City\nFROM Customer as c;`}
                        explanation='This query simply selects the name, ContactPref, and City fields from the Customer table. We gave the customer table an alias “c”, but this is not necessary for the query to run. However, it is good practice to use table aliases, as they will become essential for multi-table queries in the next course.'
                        handleFinish={() => setProblemOneComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
            <Accordian>
                <AccordianTitle><Text>Practice question 2</Text></AccordianTitle>
                <AccordianContent>
                    <Text className='mb-4'>
                        Write a query that shows each customer ID labeled CustomerID, name, and total ordered amount labeled TotalRevenue. Include the following columns: CustomerID, Name, and TotalRevenue (in that order).
                    </Text>
                    <SQLTerminal
                        title='Practice question 2'
                        dataset={CustomerDataset}
                        initialQuery={``}
                        validQuery={`SELECT c.CustID AS CustomerID, c.Name, c.TotalOrdered AS TotalRevenue\nFROM Customer AS c;`}
                        explanation='This problem requires the use of field aliases – that is, using the AS statement to rename a field in the output. In this case, we rename CustID as CustomerID and TotalOrdered as TotalRevenue.'
                        handleFinish={() => setProblemTwoComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
            <Accordian>
                <AccordianTitle><Text>Practice question 3 (challenge)</Text></AccordianTitle>
                <AccordianContent>
                    <Text className='mb-4'>
                        Write a query that shows the customer name, the city and state combined into a single field labeled CityState (formatted with a comma and space – for example, “Provo, Utah”); the number of years since the customer’s first purchase labeled as YearsAsCustomer (hint, assume it is 2025, so take 2025 minus the first year they made a purchase), and the amount ordered per year as calculation of total ordered divided by how many years they have been a customer (labeled as OrderedPerYear). Your output columns should be Name, CityState, YearsAsCustomer, and OrderedPerYear (in that order).
                    </Text>
                    <SQLTerminal
                        title='Practice question 3 (challenge)'
                        dataset={CustomerDataset}
                        initialQuery={``}
                        validQuery={`SELECT c.Name, c.City || ", " || c.State AS CityState, (2025-YEAR(FirstPurchase)) AS YearsAsCustomer, c.TotalOrdered/(2025-YEAR(FirstPurchase)) AS OrderedPerYear\nFROM Customer AS c; `}
                        explanation={
                            <>
                                This may have been a tricky problem, so let’s break down how the solution code works. Please note that all these operations are occurring in the <Code>SELECT</Code> statement:
                                <UnorderedList>
                                    <ListItem> <Code>c.Name</Code> selects the Name field </ListItem>
                                    <ListItem><Code>c.City || &quot;, &quot; State AS CityState</Code> concatenates the city and state fields with a comma and a space in between and assigns the alias CityState to the resulting concatenated string</ListItem>
                                    <ListItem><Code>(2025-YEAR(FirstPurchase)) AS YearsAsCustomer </Code>calculates a new field aliased as YearsAsCustomer, calculated as 2025 minus the year of the FirstPurchase field </ListItem>
                                    <ListItem><Code>c.TotalOrdered/(2025-YEAR(FirstPurchase)) AS OrderedPerYear</Code> calculates a new field aliased as OrderedPerYear, calculated as TotalOrdered divided by the YearsAsCustomer field from the previous step (however, we cannot use the newly created YearsAsCustomer alias in our denominator; instead, we use the same code as the previous step) </ListItem>
                                </UnorderedList>
                            </>
                        }
                        handleFinish={() => setProblemThreeComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
        </AccordianGroup>
    )
}