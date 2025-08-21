"use client"
import Dataset from '../datasets/officenookco_database.json'

import { useEffect, useState } from "react"
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Code, Text } from "@/components/ui/text";

export function PracticeComprehensiveOffice({ setIsComplete }: { setIsComplete: () => void }) {
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
                            List the CustomerID and FirstName of all customers who have placed at least one order. Only list each customer once. Sort the data by CustomerID in descending order. Your output should include the following columns: CustomerID and FirstName (in that order).
                        </Text>
                        <SQLTerminal
                            title='Practice problem 1'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT DISTINCT c.CustomerID, c.FirstName\nFROM Customers c\nINNER JOIN Orders o ON c.CustomerID = o.CustomerID\nORDER BY c.CustomerID DESC;`}
                            explanation={`This problem implicitly asks for the use of DISTINCT since it requires the name of each customer who ordered at least one product – so we don’t need every instance of a customer name, but rather a single instance.`}
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
                            Show the OrderID, ShipCity, and customer’s City for all orders, including orders that have no associated customer in the database. Sort by OrderID ascending.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 2'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT o.OrderID, o.ShipCity, c.City\nFROM Orders o\nLEFT JOIN Customers c ON o.CustomerID = c.CustomerID\nORDER BY o.OrderID ASC;`}
                            explanation={`A LEFT or RIGHT JOIN is required in this problem to get orders that have no associated customer.`}
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
                            Show all products, their prices, and all order dates for each product. Include all products, even those that have never been ordered. Sort by ProductName in alphabetical order.
                        </Text>
                        <Text>
                            Hint: You must use a <Code>GROUP BY</Code> clause for this query.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 3'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT p.ProductName, p.Price, o.OrderDate\nFROM (Products p LEFT JOIN OrderDetails od ON p.ProductID = od.ProductID)\nLEFT JOIN Orders o ON od.OrderID = o.OrderID\nORDER BY p.ProductName;`}
                            explanation={`This is a question where using LEFT JOINs in a multi-table query is necessary, since we need to keep all products regardless of whether they’ve been ordered. Be careful to include Products as the first table of the chain of LEFT JOINs.`}
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
                            List the OrderID, ProductName, and CustomerID for all orders and their products. Sort by OrderID and then ProductName in ascending order.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 4'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT o.OrderID, p.ProductName, o.CustomerID\nFROM (Orders o INNER JOIN OrderDetails od ON o.OrderID = od.OrderID)\nINNER JOIN Products p ON od.ProductID = p.ProductID\nORDER BY o.OrderID, p.ProductName;`}
                            explanation={`Remember to identify which tables are needed for a given problem using the ERD. We need all tables except for the Customers table. You may have included the Customers table without error, but this is unnecessary because CustomerID is accessible in the Orders table.`}
                            handleFinish={() => setProblemFourComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 5</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Show the customer’s first and last name, the order date, and the product name for all orders placed by customers in &quot;Chicago&quot; for products in the &quot;Furniture&quot; category. Sort the results as specified.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 5'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT c.FirstName, c.LastName, o.OrderDate, p.ProductName\nFROM Products p\nINNER JOIN OrderDetails od ON p.ProductID = od.ProductID\nINNER JOIN Orders o ON od.OrderID = o.OrderID\nINNER JOIN Customers c ON o.CustomerID = c.CustomerID\nWHERE c.City = 'Chicago' AND p.Category = 'Furniture'\nORDER BY c.FirstName, c.LastName, o.OrderDate, p.ProductName;`}
                            explanation={`There’s a lot going in in this problem but do not be intimidated by that. Simply take the query step by step. This goes for all SQL problems.`}
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