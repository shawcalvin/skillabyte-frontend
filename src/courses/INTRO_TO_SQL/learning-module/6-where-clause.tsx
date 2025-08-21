"use client"

import CustomerDataset from '../datasets/customers.json'

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Code, Text, TextLink } from "@/components/ui/text";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from '@/components/ui/accordian';
import { Table, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import { ReviewQuiz } from '@/components/interactive/questions';
import { useEffect, useState } from 'react';

export default function ModulePage(props: LearningModulePageProps) {
    const [practiceOneComplete, setPracticeOneComplete] = useState(false);
    const [practiceTwoComplete, setPracticeTwoComplete] = useState(false);
    const [practiceThreeComplete, setPracticeThreeComplete] = useState(false);
    const [quizComplete, setQuizComplete] = useState(false);

    useEffect(() => {
        if (practiceOneComplete && practiceTwoComplete && practiceThreeComplete && quizComplete) {
            props.setIsComplete(true)
        }
    }, [practiceOneComplete, practiceTwoComplete, practiceThreeComplete, quizComplete])

    return (
        <>
            <ModuleContainer title={"WHERE clause"} isComplete={false} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/Intro+to+SQL+(Part+1)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries. Refer to Graphic 2 while completing this course&apos;s practice questions.
                </Text>
                <Text>
                    While the <Code>SELECT</Code> clause defines the number of columns and what is included in the output, the <Code>WHERE</Code> clause filters the number of rows in the output. <Code>WHERE</Code> has no impact on which columns are displayed from the working dataset.
                </Text>
                <Text>
                    Remembering the order of operations, we start with specifying the FROM clause to determine the data to use in other clauses. The SELECT limits the number of columns presented but it doesn’t operate until after other statements. The WHERE command filters (reduces) the number of rows based on the supplied criteria.
                </Text>
                <Text>
                    Here is the SQL to return all columns for customers in Utah.
                </Text>
                <Accordian>
                    <AccordianTitle>
                        Simple WHERE Query
                    </AccordianTitle>
                    <AccordianContent>
                        <SQLTerminal
                            title='Simple WHERE Query'
                            dataset={CustomerDataset}
                            initialQuery={`SELECT *\nFROM Customer\nWHERE State = "Utah"; `}
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Text>
                    There are many different criteria that can be specified in the WHERE clause, including criteria related to numbers (including dates), strings, and NULLS or empty cells. The table below will provide you with the criteria for each of these groups, as well as examples. The examples show special cases, so review them carefully. These examples will also show how you can use multiple conditions in the WHERE clause or even filter by fields not listed in the SELECT clause.
                </Text>
                <Divider />
                <Heading className='mt-8'>Numerical Operators</Heading>
                <Table striped>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Operator</TableHeader>
                            <TableHeader>Description</TableHeader>
                            <TableHeader>Example clause</TableHeader>
                            <TableHeader>Result</TableHeader>
                        </TableRow>
                    </TableHead>
                    {numericalOperatorTable.map((operator, index) => (
                        <TableRow key={index}>
                            <TableCell className="whitespace-normal break-words">{operator[0]}</TableCell>
                            <TableCell className="whitespace-normal break-words">{operator[1]}</TableCell>
                            <TableCell className="whitespace-normal break-words">{operator[2]}</TableCell>
                            <TableCell className="whitespace-normal break-words">{operator[3]}</TableCell>
                        </TableRow>
                    ))}
                </Table>
                <Text>
                    For the following examples, open the accordion to view and run the query. Each of these queries uses the same sample customer table that we have been working with throughout the course.
                </Text>
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle>
                            WHERE example 1: {'>='} query
                        </AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='WHERE >= query'
                                dataset={CustomerDataset}
                                initialQuery={
                                    `SELECT c.Name, c.OrdersPlaced\nFROM Customer AS c\nWHERE c.OrdersPlaced >=5; `
                                }
                                explanation='The query returns 13 rows. That is, it returns all customers who made five or more orders.'
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>
                            WHERE example 2: NOT BETWEEN query
                        </AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='WHERE NOT BETWEEN query'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.TotalOrdered\nFROM Customer AS c\nWHERE c.CreditLimit NOT BETWEEN 650 AND 700;`}
                                explanation='The code returns 19 records. Notice that c.CreditScore is in the WHERE clause but not in the SELECT clause. This is an example of how you can filter on fields even if that field doesn’t appear in the final output!'
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>
                            WHERE example 3: Query with two conditions
                        </AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='WHERE query with two conditions'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.CreditLimit, c.TotalOrdered\nFROM Customer AS c\nWHERE c.CreditLimit > 750 AND c.TotalOrdered > 20000;`}
                                explanation='The query returns 11 customers that have credit limits above 750 who have ordered more than $20,000.'
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Divider />
                <Heading className='mt-8'>String Operators</Heading>
                <Table striped>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Operator</TableHeader>
                            <TableHeader>Description</TableHeader>
                            <TableHeader>Example clause</TableHeader>
                            <TableHeader>Result</TableHeader>
                        </TableRow>
                    </TableHead>
                    {stringOperatorTable.map((operator, index) => (
                        <TableRow key={index}>
                            <TableCell className="whitespace-normal break-words">{operator[0]}</TableCell>
                            <TableCell className="whitespace-normal break-words">{operator[1]}</TableCell>
                            <TableCell className="whitespace-normal break-words">{operator[2]}</TableCell>
                            <TableCell className="whitespace-normal break-words">{operator[3]}</TableCell>
                        </TableRow>
                    ))}
                </Table>
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle>
                            WHERE example 4: String comparison query
                        </AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='String comparison query'
                                dataset={CustomerDataset}
                                initialQuery={
                                    `SELECT c.Name, c.City, c.State\nFROM Customer AS c\nWHERE c.City="Provo"; `
                                }
                                explanation='There are three rows returned for the three customers that live in the city of Provo.'
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>
                            WHERE example 5: Multiple string comparison query
                        </AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='Multiple string comparison query'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.City, c.State\nFROM Customer AS c\nWHERE c.State IN("Utah", "Arizona");`}
                                explanation='There are 14 rows where customers are from the state of Utah or Arizona. An alternative WHERE clause that would give the same answer is: WHERE c.State=”Utah” OR c.State=”Arizona”'
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>
                            WHERE example 6: Like query
                        </AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='LIKE query'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.ContactPref\nFROM Customer AS c\nWHERE c.Name LIKE '%a%';`}
                                explanation="The query returns 18 records that have the letter 'a' somewhere in the name."
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                            <div className='my-8'>
                                <Text>How would you change the query to only show those customers whose name starts with an “a”?</Text>
                                <Text>Answer: You would only have to remove the first percentage symbol, resulting in the following WHERE clause:</Text>
                            </div>
                            <SQLTerminal
                                title='LIKE query'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.ContactPref\nFROM Customer AS c\nWHERE c.Name LIKE 'a%';`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Divider />
                <Text>
                    In a database, NULL values represent missing or unknown data. Empty refers to a unique string with zero length. Unlike empty strings or zero values, NULL indicates the absence of any value in a cell. Handling NULL values is important because they can affect the results of queries and calculations, requiring special functions and considerations in SQL.
                </Text>
                <Heading className='mt-8'>Null or Empty Cells</Heading>
                <Table striped>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Operator</TableHeader>
                            <TableHeader>Description</TableHeader>
                            <TableHeader>Example clause</TableHeader>
                            <TableHeader>Result</TableHeader>
                        </TableRow>
                    </TableHead>
                    {nullOperatorTable.map((operator, index) => (
                        <TableRow key={index}>
                            <TableCell className="whitespace-normal break-words">{operator[0]}</TableCell>
                            <TableCell className="whitespace-normal break-words">{operator[1]}</TableCell>
                            <TableCell className="whitespace-normal break-words">{operator[2]}</TableCell>
                            <TableCell className="whitespace-normal break-words">{operator[3]}</TableCell>
                        </TableRow>
                    ))}
                </Table>
                <Text>
                    A string refers to a sequence of characters. Strings can be compared, concatenated and manipulated using various SQL functions. Strings can also sometimes be null or empty.
                </Text>
                <Accordian>
                    <AccordianTitle>
                        WHERE example 7: NULL query
                    </AccordianTitle>
                    <AccordianContent>
                        <SQLTerminal
                            title='NULL query'
                            dataset={CustomerDataset}
                            initialQuery={`SELECT c.Name\nFROM Customer AS c\nWHERE c.OrdersPlaced IS NULL;;`}
                            explanation="The query returns just the names of the two people who have not placed any orders. Notice that the fields in the WHERE clause do not have to appear in the SELECT clause to find and return the needed information."
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Divider />
                <Heading>Practice</Heading>
                <Text>
                    Now it’s your turn. As you complete the following practice problems, feel free to reference the previous material and the handout to help you construct the SQL queries.
                </Text>
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle>
                            Practice question 1
                        </AccordianTitle>
                        <AccordianContent>
                            <Text className='mb-4'>
                                Return the customer’s name, preferred contact preference, and the number of orders they placed. Do not return those who have not placed orders. Include the following columns: Name, ContactPref, and OrdersPlaced (in that order).
                            </Text>
                            <SQLTerminal
                                title='Practice Question 1'
                                dataset={CustomerDataset}
                                validQuery={`SELECT c.Name, c.ContactPref, c.OrdersPlaced\nFROM Customer AS c\nWHERE c.OrdersPlaced IS NOT NULL;`}
                                explanation='The key to this problem is filtering out all customers who have never placed an order (represented by NULL in the OrdersPlaced column). This is easily done through the use of the IS NOT NULL operator in the WHERE clause.'
                                handleFinish={() => setPracticeOneComplete(true)}
                                editable
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>
                            Practice question 2
                        </AccordianTitle>
                        <AccordianContent>
                            <Text className='mb-4'>
                                Create a list of all customers who prefer to be contacted via email and made their first purchase after 2015. Include the following column names: CustomerID, ContactPref, and FirstPurchase (in that order).
                            </Text>
                            <SQLTerminal
                                title='Practice Question 2'
                                dataset={CustomerDataset}
                                validQuery={`SELECT c.CustID AS CustomerID, c.ContactPref, c.FirstPurchase\nFROM Customer AS c\nWHERE c.ContactPref = "email" AND YEAR(c.FirstPurchase)>2015;`}
                                explanation='Make sure to carefully read the problem, especially when looking at equalities. This question asks for customers after 2015, meaning greater than 2015, not greater than or equal to 2015. Also, check that your column headers match exactly including the correct alias.'
                                handleFinish={() => setPracticeTwoComplete(true)}
                                editable
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>
                            Practice question 3
                        </AccordianTitle>
                        <AccordianContent>
                            <Text className='mb-4'>
                                The following SQL code is not written correctly. Identify what is wrong with the code and correct it so it executes correctly. The query should return the name, city, and state of customers who live in Provo and have a credit score of either 680, 700, or 740.
                            </Text>
                            <SQLTerminal
                                title='Practice Question 3'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.City WHERE (c.CITY="Provo"), AND c.STATE\nFROM Customer as c\nWHERE c.CreditScore IN(680, 700, 740);`}
                                validQuery={`SELECT c.Name, c.City, c.STATE\nFROM Customer as c\nWHERE c.City= "Provo" AND c.CreditScore IN(680, 700, 740);`}
                                explanation='There’s a lot that needs correcting with this query. The WHERE clause must come after the FROM clause, so it cannot be contained in the SELECT clause. Also, the AND operator should be used in the WHERE clause, not in the SELECT clause.  The numbers in the IN statement can be written in any order, so listing them as IN(740, 680, 700) will produce the same results as IN(680, 700, 740).'
                                handleFinish={() => setPracticeThreeComplete(true)}
                                editable
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Divider />
                <Heading>Additional Practice and Study</Heading>
                <Text>For additional practice and study with the WHERE clause (this is not required), visit <TextLink href="https://www.w3schools.com/sql/sql_where.asp">https://www.w3schools.com/sql/sql_where.asp</TextLink>.</Text>
                <Divider />
                <Heading>Ungraded Review</Heading>
                <Text>Assuming the SELECT and FROM clauses are done correctly, determine whether each of the following WHERE clauses is written correctly by selecting Valid or Invalid.</Text>
                <ReviewQuiz quiz={quiz} setIsComplete={() => setQuizComplete(true)} />
            </ModuleContainer>
        </>
    );
}

const numericalOperatorTable = [
    [
        "=, !=, <, <=, >, >=",
        "Standard of equal to, not equal to, less than, less than or equal to, greater than, and greater than or equal to",
        <>
            <Code>c.CreditScore != 500</Code>
        </>,
        "Credit scores not equal to 500 will be returned",
    ],
    [
        "BETWEEN … AND …",
        "Values are within range (inclusive)",
        <>
            <Code>c.CreditScore BETWEEN 400 AND 700</Code>
        </>,
        "All credit scores from 400 to 700, inclusive, will be returned ",
    ],
    [
        "IN (...)",
        "Values exist in a list",
        <>
            <Code>c.CreditScore IN (400, 500, 600)</Code>
        </>,
        "All credit scores equal to 400, 500, or 600 will be returned",
    ],
    [
        "NOT BETWEEN … AND …",
        "Values are not within range (inclusive)",
        <>
            <Code>c.CreditScore NOT BETWEEN 400 AND 700</Code>
        </>,
        "All credit scores not between 400 and 700, inclusive, will be returned",
    ],
    [
        "NOT IN",
        "Value does not exist in a list",
        <>
            <Code>c.CreditScore NOT IN (400, 500, 600)</Code>
        </>,
        "All credit scores not equal to 400, 500, or 600, will be returned ",
    ],
];

const stringOperatorTable = [
    [
        "=",
        "Exact string comparison",
        <>
            <Code>c.Name = &quot;Liam Amias&quot;</Code>
        </>,
        "Returns all names that are “Liam Amias”",
    ],
    [
        "!= or <>",
        "Exact string inequality",
        <>
            <Code>c.Name != “Hiroshi Giulia”</Code>
        </>,
        "Returns all names that are not “Hiroshi Giulia”",
    ],
    [
        "LIKE",
        "String comparison – case insensitive",
        <>
            <Code>c.Name LIKE “Isla”</Code>
        </>,
        "Returns all names that match “Isla”, “ISLA”, etc.",
    ],
    [
        "NOT LIKE",
        "String comparison – case insensitive",
        <>
            <Code>c.Name NOT LIKE “Imani”</Code>
        </>,
        "Returns all names that do not match “Imani”, “IMANI”, etc. ",
    ],
    [
        "%",
        "Wildcard matches any character zero or more times",
        <>
            <Code>c.Name LIKE “Fred%”</Code>
        </>,
        "Returns all names that begin with “Fred” (“Fred”,“Freddy”, “Freda”, etc.)",
    ],
    [
        "IN(...)",
        <>
            String exists in a list
            <br />
            <i>Note: wildcards are not allowed in IN statements</i>
        </>,
        <>
            <Code>c.Name IN (“Hiroshi”, “Isla”, “Fred”)</Code>
        </>,
        "Returns all names that match “Hiroshi”, “Isla”, or “Fred” ",
    ],
    [
        "NOT IN (...)",
        "String does not exist in a list",
        <>
            <Code>c.Name NOT IN (“Hiroshi”, “Isla”, “Fred”)</Code>
        </>,
        "Returns all names that do not match “Hiroshi”, “Isla”, or “Fred”",
    ],
];

const nullOperatorTable = [
    [
        'IS NULL',
        'Cell is null',
        <>
            <Code>c.Name IS NULL</Code>
        </>,
        'Returns all name values that are null '
    ],
    [
        'IS NOT NULL',
        'Cell is not null',
        <>
            <Code>c.Name IS NOT NULL</Code>
        </>,
        'Returns all name values that are not null '
    ],
    [
        '= ""',
        'Cell is empty',
        <>
            <Code>c.Name = &quot;&quot;</Code>
        </>,
        'Returns all name values that are empty '
    ],
    [
        '!= ""',
        'Cell is not empty',
        <>
            <Code>c.Name != &quot;&quot; </Code>
        </>,
        'Returns all name values that are not empty'
    ],
];

const quiz = [
    {
        "question": "WHERE “%a%” LIKE Name",
        "answers": [
            {
                "answer": "Valid",
                "isCorrect": false,
                "feedback": "Incorrect. Name and “%a%” should be reversed."
            },
            {
                "answer": "Invalid",
                "isCorrect": true,
                "feedback": "Correct. Name and “%a%” should be reversed."
            }
        ]
    },
    {
        "question": "WHERE CustID => 2",
        "answers": [
            {
                "answer": "Valid",
                "isCorrect": false,
                "feedback": "Incorrect. Greater than or equal to should be expressed as >= and not =>."
            },
            {
                "answer": "Invalid",
                "isCorrect": true,
                "feedback": "Correct. Greater than or equal to should be expressed as >= and not =>."
            }
        ]
    },
    {
        "question": "WHERE CustID IS NOT NULL",
        "answers": [
            {
                "answer": "Valid",
                "isCorrect": true,
                "feedback": "Correct. This WHERE clause filters the rows in the table to include only those where the CustID column has a value (i.e., it is not NULL)."
            },
            {
                "answer": "Invalid",
                "isCorrect": false,
                "feedback": "Incorrect. This WHERE clause filters the rows in the table to include only those where the CustID column has a value (i.e., it is not NULL)."
            }
        ]
    },
    {
        "question": "WHERE CreditScore = 500 OR 700",
        "answers": [
            {
                "answer": "Valid",
                "isCorrect": false,
                "feedback": "Incorrect. The syntax is wrong – the correct version of this clause would be WHERE CreditScore = 500 OR CreditScore = 700."
            },
            {
                "answer": "Invalid",
                "isCorrect": true,
                "feedback": "Correct. The syntax is wrong – the correct version of this clause would be WHERE CreditScore = 500 OR CreditScore = 700."
            }
        ]
    },
    {
        "question": "WHERE CustID NOT IN(1022, 1024, 1027, 1025)",
        "answers": [
            {
                "answer": "Valid",
                "isCorrect": true,
                "feedback": "Correct. This WHERE clause will filter the rows in the table to exclude those where the CustID is equal to any of the four values listed."
            },
            {
                "answer": "Invalid",
                "isCorrect": false,
                "feedback": "Incorrect. This WHERE clause will filter the rows in the table to exclude those where the CustID is equal to any of the four values listed."
            }
        ]
    }
]