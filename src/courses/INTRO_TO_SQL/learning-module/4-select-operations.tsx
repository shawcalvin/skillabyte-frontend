/* eslint-disable react/jsx-key */
"use client"

import CustomerDataset from '../datasets/customers.json'

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Code, Text, TextLink } from "@/components/ui/text";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <div>
            <ModuleContainer title={"SELECT clause operations"} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/Intro+to+SQL+(Part+1)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries.
                </Text>
                <Text>
                    The <Code>SELECT</Code> clause can be used to do more than just identify the columns to output. Here are a few operations that can be used in the <Code>SELECT</Code> clause.
                </Text>
                <Table striped>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Operator</TableHeader>
                            <TableHeader>Description</TableHeader>
                            <TableHeader>Example clause</TableHeader>
                            <TableHeader>Result</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {operatorsTable.map((operator, index) => (
                            <TableRow key={index}>
                                <TableCell className="whitespace-normal break-words">{operator[0]}</TableCell>
                                <TableCell className="whitespace-normal break-words">{operator[1]}</TableCell>
                                <TableCell className="whitespace-normal break-words">{operator[2]}</TableCell>
                                <TableCell className="whitespace-normal break-words">{operator[3]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Text>
                    Run each of the queries below to see these operations in action! Pay attention to how the queries are written and what effect each query has on the output.
                </Text>
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle><Text>Multiplication</Text></AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='Multiplication'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.OrdersPlaced, (c.OrdersPlaced * 5) AS FutureOrders\nFROM Customer AS c;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Division</Text></AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='Division'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.TotalOrdered, c.OrdersPlaced, (c.TotalOrdered / c.OrdersPlaced) AS AvgOrder \nFROM Customer AS c;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Uppercase</Text></AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='Uppercase'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, UCASE(c.Name) AS NameAllCaps\nFROM Customer AS c;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Creating constants</Text></AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='Creating constants'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.State, 'USA' AS Country, NULL AS Planet \nFROM Customer AS c;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Selecting a subset of a string field (<Code>LEFT</Code>)</Text></AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='Selecting a subset of a string field (LEFT)'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, LEFT(c.Name, 4) AS First4Name\nFROM Customer AS c;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Selecting a subset of a string field (<Code>RIGHT</Code>)</Text></AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='Selecting a subset of a string field (RIGHT)'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, RIGHT(c.Name, 4) AS Last4Name\nFROM Customer AS c;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Extracting the year from a date field</Text></AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='Extracting the year from a date field'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, YEAR(c.FirstPurchase) AS FirstPYear\nFROM Customer AS c;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Concatenating two string fields</Text></AccordianTitle>
                        <AccordianContent>
                            <SQLTerminal
                                title='Concatenating two string fields'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name || ', ' || c.City AS NameAndCity\nFROM Customer AS c;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Text>Now it&apos;s time to try forming your own queries using <Code>SELECT</Code> clause operations! Press &quot;Next&quot; to advance to the practice problems.</Text>
            </ModuleContainer>
        </div>
    );
}

const operatorsTable = [
    [
        <div>
            Mathematical operators like +, -, *, etc.
            <br />
            Example: [FieldName] * [Constant]
        </div>,
        <p>Multiplies a number by a single numeric field</p>,
        <Code>SELECT c.Name, (c.OrdersPlaced * 5) AS FutureOrders FROM Customer AS c;</Code>,
        <div>
            1. <Code>SELECT c.Name:</Code> Retrieves the Name column from the Customer table. <br />
            2. <Code>(c.OrdersPlaced * 5) AS FutureOrders:</Code> Calculates a new value by multiplying the OrdersPlaced column by 5 for each row. Names the column as FutureOrders. <br />
            3. <Code>FROM Customer AS c:</Code> Specifies that the data should be retrieved from the Customer table and assigns it the alias <Code>c</Code>.
        </div>,
    ],
    [
        <p>[Field1] / [Field2]</p>,
        <p>Calculates the ratio between two numeric fields</p>,
        <Code>SELECT c.Name, c.TotalOrdered, c.OrdersPlaced, (c.TotalOrdered / c.OrdersPlaced) AS AvgOrder FROM Customer AS c;</Code>,
        <div>
            1. <Code>SELECT c.Name, c.TotalOrdered, c.OrdersPlaced:</Code> Retrieves the Name, TotalOrdered, and OrdersPlaced columns from the Customer table. <br />
            2. <Code>(c.TotalOrdered / c.OrdersPlaced) AS AvgOrder:</Code> Calculates a new value by dividing the TotalOrdered column by the OrdersPlaced column for each row and names this column AvgOrder. <br />
            3. <Code>FROM Customer AS c:</Code> Specifies that the data should be retrieved from the Customer table and assigns it the alias <Code>c</Code>.
        </div>,
    ],
    [
        <p>UCASE([FieldName])</p>,
        <p>Converts a string field to all uppercase characters</p>,
        <Code>SELECT UCASE(c.Name) AS NameAllCaps FROM Customer AS c;</Code>,
        <div>
            1. <Code>SELECT UCASE(c.Name) AS NameAllCaps:</Code> Converts all characters in the Name column from the Customer table to uppercase and assigns the alias NameAllCaps to the resulting uppercase name. <br />
            2. <Code>FROM Customer AS c:</Code> Specifies that the data should be retrieved from the Customer table and assigns it the alias <Code>c</Code>.
        </div>,
    ],
    [
        <p>[constant] AS [alias]<br />NULL AS [alias]</p>,
        <p>Adds constant values or NULL fields to results</p>,
        <Code>SELECT c.Name, c.State, &quot;USA&quot; AS Country, NULL AS Planet FROM Customer AS c;</Code>,
        <div>
            1. <Code>SELECT c.Name, c.State:</Code> Retrieves the Name and State columns from the Customer table. <br />
            2. <Code>&quot;USA&quot; AS Country:</Code> Adds a new column named Country to the result set, with the constant value &quot;USA&quot; for every row. <br />
            3. <Code>NULL AS Planet:</Code> Adds another new column named Planet to the result set, with the value NULL for every row. <br />
            4. <Code>FROM Customer AS c:</Code> Specifies that the data should be retrieved from the Customer table and assigns it the alias <Code>c</Code>.
        </div>,
    ],
    [
        <p>LEFT([FieldName], n)</p>,
        <div>
            Extracts the first specified number of characters (n) from a string field
            <br />
            You would enter an integer and not the letter “n”
        </div>,
        <Code>SELECT LEFT(c.Name, 4) AS First4Name FROM Customer AS c;</Code>,
        <div>
            1. <Code>SELECT LEFT(c.Name, 4) AS First4Name:</Code> Extracts the first 4 characters from the Name column in the Customer table and assigns the alias First4Name to the result. <br />
            2. <Code>FROM Customer AS c:</Code> Specifies that the data should come from the Customer table and assigns it the alias <Code>c</Code>.
        </div>
    ],
    [
        <p>RIGHT([FieldName], n)</p>,
        <div>
            Extracts the last specified number of characters (n) from a string field
            <br />
            You would enter an integer and not the letter “n”
        </div>,
        <Code>SELECT RIGHT(c.Name, 4) AS Last4Name FROM Customer AS c;</Code>,
        <div>
            1. <Code>SELECT RIGHT(c.Name, 4) AS Last4Name:</Code> Extracts the last 4 characters from the Name column in the Customer table and assigns the alias Last4Name to the result. <br />
            2. <Code>FROM Customer AS c:</Code> Specifies that the data should be retrieved from the Customer table and assigns it the alias <Code>c</Code>.
        </div>
    ],
    [
        <p>YEAR([DateField])</p>,
        <p>Retrieves the year component from a date field as a four-digit number</p>,
        <Code>SELECT c.Name, YEAR(c.FirstPurchase) AS FirstPYear FROM Customer AS c;</Code>,
        <div>
            1. <Code>SELECT c.Name:</Code> Retrieves the Name column from the Customer table. <br />
            2. <Code>YEAR(c.FirstPurchase) AS FirstPYear:</Code> Extracts the year from the FirstPurchase column and assigns the alias FirstPYear to the extracted year. <br />
            3. <Code>FROM Customer AS c:</Code> Specifies that the data should be retrieved from the Customer table and assigns it the alias <Code>c</Code>.
        </div>,
    ],
    [
        <p>[Field1] || [Field2]</p>,
        <p>Concatenates two string fields with designated separator</p>,
        <Code>SELECT c.Name || &quot;, &quot; || c.City AS NameAndCity FROM Customer AS c;</Code>,
        <div>
            1. <Code>SELECT c.Name || &quot;, &quot; || c.City AS NameAndCity:</Code> Concatenates the Name column and the City column from the Customer table, with a comma and a space in between, and assigns the alias NameAndCity to the resulting concatenated string. <br />
            2. <Code>FROM Customer AS c:</Code> Specifies that the data should be retrieved from the Customer table and assigns it the alias <Code>c</Code>.
        </div>,
    ],
];

