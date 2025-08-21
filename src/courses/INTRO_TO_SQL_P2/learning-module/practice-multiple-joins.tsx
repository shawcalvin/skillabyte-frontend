"use client"
import Dataset from '../datasets/officenookco_database.json'

import { useEffect, useState } from "react"
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Code, Text } from "@/components/ui/text";

export function PracticeMultipleJoins({ setIsComplete }: { setIsComplete: () => void }) {
    const [problemOneComplete, setProblemOneComplete] = useState(false)
    const [problemTwoComplete, setProblemTwoComplete] = useState(false)
    const [problemThreeComplete, setProblemThreeComplete] = useState(false)
    const [problemFourComplete, setProblemFourComplete] = useState(false)

    useEffect(() => {
        if (problemOneComplete && problemTwoComplete && problemThreeComplete && problemFourComplete) {
            setIsComplete()
        }
    }, [problemOneComplete, problemTwoComplete, problemThreeComplete, problemFourComplete])

    return (
        <>
            <AccordianGroup>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 1</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            List all products that have been ordered along with the cities where they were shipped. Sort the output by product name and then shipping city, both in alphabetical order. Only include the ProductName and ShipCity columns in your output (in that order).
                        </Text>
                        <SQLTerminal
                            title='Practice problem 1'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT p.ProductName, o.ShipCity\nFROM (Products p INNER JOIN OrderDetails od ON p.ProductID = od.ProductID)\nINNER JOIN Orders o ON od.OrderID = o.OrderID\nORDER BY p.ProductName, o.ShipCity;`}
                            explanation={`Unless something in the problem indicates otherwise, it is usually best to user INNER JOINs for multi-table queries. Make sure to use the dataset’s ERD to understand on which fields to connect these tables – in this case, Product connects to OrderDetails through the ProductID field, and OrderDetails connects to Orders on the OrderID field.`}
                            handleFinish={() => setProblemOneComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 2</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Show all products ordered along with the names of the customers who placed them and the order date. Sort your output by product name and then order date both in ascending order. Include the following columns: ProductName, FirstName, LastName, and OrderDate (in that order).
                        </Text>
                        <SQLTerminal
                            title='Practice problem 2'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT p.ProductName, c.FirstName, c.LastName, o.OrderDate\nFROM ((Orders o INNER JOIN Customers c ON o.CustomerID = c.CustomerID)\nINNER JOIN OrderDetails od ON o.OrderID = od.OrderID)\nINNER JOIN Products p ON od.ProductID = p.ProductID\nORDER BY p.ProductName, o.OrderDate;`}
                            explanation={`Like all multi-table joins, it is simply a matter of identifying the tables you need and then joining them on the correct fields in a logical order.`}
                            handleFinish={() => setProblemTwoComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 3</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            List all customers along with the total quantity of all products they have ordered. Include customers who have not placed any orders, showing NULL for their total quantity. Sort your output by TotalQuantity in descending order, FirstName in ascending order, and then LastName in ascending order. Only include the following columns in this exact order: FirstName, LastName, and TotalQuantity.
                        </Text>
                        <Text>
                            Hint: You must use a <Code>GROUP BY</Code> clause for this query.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 3'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT c.FirstName, c.LastName, SUM(od.Quantity) AS TotalQuantity\nFROM (Customers c LEFT JOIN Orders o ON c.CustomerID = o.CustomerID)\nLEFT JOIN OrderDetails od ON o.OrderID = od.OrderID\nGROUP BY c.CustomerID, c.FirstName, c.LastName\nORDER BY TotalQuantity DESC, FirstName, LastName;`}
                            explanation={`We grouped by CustomerID in addition to FirstName and LastName, as this is the primary key (unique identifier) for each customer.`}
                            handleFinish={() => setProblemThreeComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 4</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Correct the query below, which attempts to show each order’s customer first name and last name, order date, and product category. The output should include all customers, including customers who have never placed an order. Do not change how the data is sorted or the sequence of the table joins (i.e., first join Customers to Orders, then to OrderDetails, then to Products).
                        </Text>
                        <SQLTerminal
                            title='Practice problem 4'
                            dataset={Dataset}
                            initialQuery={`SELECT c.Firstname, c.LastName, o.OrderDate, p.Category\nFROM ((Customers c INNER JOIN Orders o ON c.CustomerID = o.OrderID)\nINNER JOIN OrderDetails od ON o.OrderID = od.OrderID)\nINNER JOIN Products p ON od.OrderID = p.ProductID;`}
                            validQuery={`SELECT c.Firstname, c.LastName, o.OrderDate, p.Category\nFROM ((Customers c LEFT JOIN Orders o ON c.CustomerID = o.CustomerID)\nLEFT JOIN OrderDetails od ON o.OrderID = od.OrderID)\nLEFT JOIN Products p ON od.ProductID = p.ProductID;`}
                            explanation={`Many times when trying to troubleshoot SQL code (especially code you didn’t write) it may be easier to simply start over to make sure you understand each fundamental part of the code. For example, in this case, it may be difficult to identify that some of the fields used in the ON clauses are incorrect without attempting the query for yourself first.`}
                            handleFinish={() => setProblemFourComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
            </AccordianGroup>
        </>
    )
}