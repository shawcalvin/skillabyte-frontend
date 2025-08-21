"use client"

import { ShortInputQuestion } from '@/components/interactive/questions'
import SunnyBlendzDataset from '../datasets/sunnyblendz.json'

import { SQLTerminal } from "@/components/interactive/sql/terminal"
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian"
import { Text } from "@/components/ui/text"
import { useEffect, useState } from "react"
import { QueryExplanation } from '@/components/interactive/sql/explanation'

export function PracticeSunnyBlendz({ setIsComplete }: { setIsComplete: () => void }) {
    const [scenarioOneComplete, setScenarioOneComplete] = useState(false)
    const [scenarioTwoComplete, setScenarioTwoComplete] = useState(false)
    const [scenarioThreeComplete, setScenarioThreeComplete] = useState(false)
    const [scenarioFourComplete, setScenarioFourComplete] = useState(false)

    useEffect(() => {
        if (scenarioOneComplete && scenarioTwoComplete && scenarioThreeComplete && scenarioFourComplete) {
            setIsComplete()
        }
    }, [scenarioOneComplete, scenarioTwoComplete, scenarioThreeComplete, scenarioFourComplete])

    return (
        <>
            <AccordianGroup>
                <Accordian>
                    <AccordianTitle>Scenario 1: Emma Wilson&apos;s reward balance</AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>A customer named Emma Wilson (CustomerID = 105) is at the counter and wants to know her reward balance. Write a query to retrieve Emma’s first name, last name, and reward balance.</Text>
                        <SQLTerminal
                            title='Scenario 1'
                            dataset={SunnyBlendzDataset}
                            editable
                            schema='https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Sunny+Blendz+white+background.png'
                        />
                        <Text>
                            Enter Emma’s rewards balance here in an integer:
                        </Text>
                        <ShortInputQuestion
                            answers={["7"]}
                            explanation={
                                <>
                                    <Text className='mb-4'>The correct answer is 7. There are often many ways to answer SQL questions, so your solution may look different than ours and still produce the correct output.</Text>
                                    <QueryExplanation
                                        code={`SELECT FirstName, LastName, RewardBalance\nFROM Customers\nWHERE CustomerID = 105;`}
                                    />
                                    <Text className='mt-4'>You could also search for Emma Wilson using her first and last name, but it’s safer to use CustomerID (the primary key) as it is a unique identifier. If there were multiple Emma Wilsons in the dataset, searching by name would yield multiple undesired results.</Text>
                                </>
                            }
                            handleFinish={() => setScenarioOneComplete(true)}
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle>Scenario 2: Marketing assistant&apos;s list</AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>The marketing assistant wants a list of all customers in the database with first name and last name together as CustName (in the following format: “[LastName], [FirstName]”). She then wants this list sorted in alphabetical order. Hint: Field aliases can be reused in the ORDER BY clause. This means you can sort by the newly created “CustName” field!</Text>
                        <SQLTerminal
                            title='Scenario 2'
                            dataset={SunnyBlendzDataset}
                            editable
                            schema='https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Sunny+Blendz+white+background.png'
                        />
                        <Text>
                            Type in the fourth person on this list in the Last Name, First Name format.
                        </Text>
                        <ShortInputQuestion
                            answers={["Davis, Sophie"]}
                            explanation={
                                <>
                                    <Text className='mb-4'>The correct answer is &apos;Davis, Sophie&apos;. There are often many ways to answer SQL questions, so your solution may look different than ours and still produce the correct output.</Text>
                                    <QueryExplanation
                                        code={`SELECT LastName || ", " || FirstName AS CustName\nFROM Customers\nORDER BY CustName;`}
                                    />
                                    <Text className='mt-4'>The trick here is making sure to properly concatenate using double bars || and including a space after the comma. Also be careful to put the last name first and sort by CustName.</Text>
                                </>
                            }
                            handleFinish={() => setScenarioTwoComplete(true)}
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle>Scenario 3: Green Detox Smoothie sales</AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>Management wants to see if the Green Detox Smoothie has been selling at all, as this was the product they were most concerned about. Write a SQL query to retrieve all orders where the Product is Green Detox Smoothie. Display OrderID, CustomerID, PurchaseDate, and Amount.</Text>
                        <SQLTerminal
                            title='Scenario 3'
                            dataset={SunnyBlendzDataset}
                            editable
                            schema='https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Sunny+Blendz+white+background.png'
                        />
                        <Text>
                            How many times have customers purchased the Green Detox Smoothie? Enter your answer as an integer only.
                        </Text>
                        <ShortInputQuestion
                            answers={["18"]}
                            explanation={
                                <>
                                    <Text className='mb-4'>The correct answer is 18.</Text>
                                    <div className='space-y-4'>
                                        <QueryExplanation
                                            title='Solution 1'
                                            code={`SELECT OrderID, CustomerID, PurchaseDate, Amount\nFROM Orders\nWHERE Product = "Green Detox Smoothie";`}
                                        />
                                        <QueryExplanation
                                            title='Solution 2'
                                            code={`SELECT OrderID, CustomerID, PurchaseDate, Amount\nFROM Orders\nWHERE Product LIKE "Green%";`}
                                        />
                                    </div>
                                    <Text className='mt-4'>You can filter for Green Detox Smoothie in several different ways, as indicated above. Note that when using a wildcard search (%), be careful that your matching criteria uniquely identifies the rows you are looking for. For example, if another smoothie were called “Green Machine”, then “Green%” would also return rows where Green Machine was purchased, which we wouldn’t want. Always read the ERD and skim the data tables to gain an understanding of how to filter on the dataset.</Text>
                                </>
                            }
                            handleFinish={() => setScenarioThreeComplete(true)}
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle>Scenario 4: Yahoo email issue</AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>The IT guy noticed that due to a system bug, all customers with Yahoo email addresses were not receiving the promotional emails. He needs you to generate a list of all customers who signed up with Yahoo email accounts (sorted by CustomerID ascending) so that he can fix the issue. Display these columns in your output: CustomerID, FirstName, LastName, and Email. Hint: You may find the RIGHT function or the LIKE operator useful for this task.</Text>
                        <SQLTerminal
                            title='Scenario 4'
                            dataset={SunnyBlendzDataset}
                            editable
                            schema='https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Sunny+Blendz+white+background.png'
                        />
                        <Text>
                            Enter an integer of customers with Yahoo email addresses here:
                        </Text>
                        <ShortInputQuestion
                            answers={["4"]}
                            explanation={
                                <>
                                    <Text className='mb-4'>The correct answer is 4.</Text>
                                    <div className='space-y-4'>
                                        <QueryExplanation
                                            title='Solution 1'
                                            code={`SELECT CustomerID, FirstName, LastName, Email\nFROM Customers\nWHERE RIGHT(Email, 9) = "yahoo.com";`}
                                        />
                                        <QueryExplanation
                                            title='Solution 2'
                                            code={`SELECT CustomerID, FirstName, LastName, Email\nFROM Customers\nWHERE Email LIKE "%yahoo%";`}
                                        />
                                    </div>
                                    <Text className='mt-4'>Again, there are multiple ways to write this query. Whether you use RIGHT, LIKE, or something else, just be careful to use correct syntax. Refer to the student handout or even a quick internet search to understand the correct format for using these operators.</Text>
                                </>
                            }
                            handleFinish={() => setScenarioFourComplete(true)}
                        />
                    </AccordianContent>
                </Accordian>
            </AccordianGroup>
        </>
    )
}