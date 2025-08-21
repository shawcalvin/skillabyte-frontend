"use client"

import Dataset from '../datasets/officenookco_database.json'

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Code, ListItem, OrderedList, Strong, Text, TextLink } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Tab, TabGroup } from "@/components/ui/tab";
import { Image } from "@/components/ui/media";
import { QueryResults } from "@/components/interactive/sql/results";
import { SQLTerminal } from '@/components/interactive/sql/terminal';
import { PracticeMultipleJoins } from './practice-multiple-joins';

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"JOINs with more than two tables"} isComplete={false} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Intro+to+SQL+(Part+2)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries.
                </Text>
                <Text>
                    Thus far, we have been performing <Code>JOIN</Code>s on two tables. In this section, we will learn how to perform <Code>JOIN</Code>s with multiple tables.
                </Text>
                <Heading>The dataset for this section</Heading>
                <Divider />
                <Text>For this section, we will use a new dataset for OfficeNook Company, which sells home office supplies, including electronics. OfficeNook stores data about their customers, orders, and products in four different tables. Take some time to familiarize yourself with the ERD and tables for this dataset:</Text>
                <Heading>Database Layout</Heading>
                <TabGroup>
                    <Tab title="ERD">
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                            alt="Office Nook ERD Diagram"
                            size="800px"
                            className="rounded-lg my-8"
                            center
                        />
                    </Tab>
                    <Tab title="Customers Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Customers table</Heading>
                                <QueryResults
                                    results={customerTable}
                                />
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Orders Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Orders table</Heading>
                                <QueryResults
                                    results={orderTable}
                                />
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Order Details Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Order Details table</Heading>
                                <QueryResults
                                    results={orderDetailsTable}
                                />
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Products Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Products table</Heading>
                                <QueryResults
                                    results={productsTable}
                                />
                            </div>
                        </div>
                    </Tab>
                </TabGroup>
                <Heading>Joining more than two tables</Heading>
                <Divider />
                <Text>Suppose you wanted to see each order&apos;s ID and date. You would query:</Text>
                <SQLTerminal
                    title='All orders'
                    dataset={Dataset}
                    initialQuery={`SELECT o.OrderId, o.OrderDate\nFROM Orders o;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                />
                <Text>
                    Now suppose you wanted to rewrite this query to also include the product or products ordered for every order. By looking at the OfficeNook ERD above, we can tell that this query needs information from three tables: the Orders table (for OrderDate), the Products table (for ProductName), and the OrderDetails table (to connect the other two tables). The resulting query would look like this:
                </Text>
                <SQLTerminal
                    title='All orders with product listed'
                    dataset={Dataset}
                    initialQuery={`SELECT o.OrderId, o.OrderDate, p.ProductName\nFROM (Orders o INNER JOIN OrderDetails od ON o.OrderID = od.OrderID)\nINNER JOIN Products p ON od.ProductID = p.ProductID;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                />
                <Text>This query:</Text>
                <OrderedList>
                    <ListItem><Text>Joins the Orders table (aliased as o) with the OrderDetails table (aliased as od) on the OrderID field.</Text></ListItem>
                    <ListItem><Text>Joins the result of the first join with the Products table (aliased as p) on the ProductID field.</Text></ListItem>
                    <ListItem><Text>Selects the OrderId and OrderDate from the Orders table and the ProductName from the Products table.</Text></ListItem>
                </OrderedList>
                <Text>
                    Notice that this query <Code>JOIN</Code>s the three tables in the <Code>FROM</Code> statement. Some DBMS require that you use parentheses to JOIN two tables at a time; then, you can <Code>JOIN</Code> the third table to the joined product of the first two tables. This process is called &quot;nesting&quot; the <Code>JOIN</Code>s and is particularly helpful when combining tables that have a direct relationship before linking them to additional tables. The &quot;nesting&quot; concept is similar to what is found in mathematical formulas as the SQL functions will work from the innermost parentheses and work outwards.
                </Text>
                <Text>
                    As another example of nested <Code>JOIN</Code>s, let&apos;s repeat the query above but also include the customer&apos;s first and last name for each order. This means we will need to <Code>JOIN</Code> an additional table: Customers.
                </Text>
                <SQLTerminal
                    title='All orders with product and customer listed'
                    dataset={Dataset}
                    initialQuery={`SELECT o.OrderId, o.OrderDate, c.FirstName, c.LastName, p.ProductName\nFROM ((Orders o INNER JOIN OrderDetails od ON o.OrderID = od.OrderID)\nINNER JOIN Products p ON od.ProductID = p.ProductID)\nINNER JOIN Customers c ON o.CustomerID = c.CustomerID;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                />
                <Text>
                    You can <Code>JOIN</Code> as many tables as you want using the nesting pattern above. Care should be taken to only JOIN as many tables as needed. Joining additional tables beyond those needed can give different results than you would expect (especially with more complex database designs). The rule of thumb is that you only include the tables necessary to answer the question. That said, you will need to include interjoining tables to create a path to join data from two tables that do not share a key (like in our previous example using OrderDetails and Orders as linking tables to connect the Products and Customers tables). A good practice when joining multiple tables for complex queries is to start from the innermost <Code>JOIN</Code>, run it to confirm it produces the expected results, then add the next <Code>JOIN</Code> using parentheses, run it to confirm it produces the expected results, and so on until you complete the full nested <Code>JOIN</Code>.
                </Text>
                <Heading>Choosing the correct field for each <Code>ON</Code> statement</Heading>
                <Divider />
                <Text>
                    Understanding the layout of the data source or sources you are querying is critical for choosing the correct fields to link through the <Code>ON</Code> statement. If you don&apos;t understand how the data is structured, then you may inadvertently <Code>JOIN</Code> using two fields that don&apos;t make sense to use. For example, if you wanted to show all orders, order dates, and the customers who placed those orders (first and last name), you would need to JOIN the Orders and Customers tables. If you&apos;re not careful, however, you may mistakenly <Code>JOIN</Code> the tables using the wrong fields like this:
                </Text>
                <SQLTerminal
                    title='Incorrect JOIN example'
                    dataset={Dataset}
                    initialQuery={`SELECT o.OrderId, o.OrderDate, c.FirstName, c.LastName\nFROM Orders o\nINNER JOIN Customers c ON o.OrderId = c.CustomerID;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                />
                <Text>
                    The query successfully ran, but yielded no results, because there are no matches between the OrderID and CustomerID fields. The real danger arises if matches do exist between these fields, as the query would produce output rows, potentially leading you to mistakenly believe it generated the desired results.
                </Text>
                <Text>
                    You should <Strong>always</Strong> consult the ERD to avoid joining on incorrect fields. In most cases, linking fields often have the same name and are PK/FK relationships, connected by a line on the ERD. For example, by reading the OfficeNook ERD at the top of this page, you can see that the Orders and Customers tables are linked through the CustomerID field. Using this information, let&apos;s correct the erroneous query above to properly display all orders with the order date and customer name:
                </Text>
                <SQLTerminal
                    title='Correct JOIN example'
                    dataset={Dataset}
                    initialQuery={`SELECT o.OrderId, o.OrderDate, c.FirstName, c.LastName\nFROM Orders o\nINNER JOIN Customers c ON o.CustomerID = c.CustomerID;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                />
                <Text>
                    Some queries may correctly link on two fields that do not share the same name nor have a PK/FK relationship. For example, the dog dataset on the previous page had two tables connected on the PersonID and OwnerID fields. However, these types of linking fields are less common and will not appear in the remaining practice problems or quiz questions in this assignment.
                </Text>
                <Heading>Choosing the order in which to <Code>JOIN</Code> multiple tables</Heading>
                <Text>
                    When joining multiple tables in SQL, the order of the JOINs may or may not matter depending on the type of JOINs used and the database engine&apos;s optimization process. In most cases, modern SQL engines automatically optimize the query execution, determining the most efficient order for the JOINs, regardless of how the query is written.
                </Text>
                <Text>
                    However, in some scenarios, particularly with <Code>LEFT JOIN</Code>s or <Code>OUTER JOIN</Code>s, the order is significant because it affects which rows are preserved or excluded in the resulting dataset. For instance, if you use a <Code>LEFT JOIN</Code>, the table on the left-hand side will retain all its rows, even if there is no match in the joined table. Changing the order of the tables in such <Code>JOIN</Code>s could lead to different results. Understanding the logical flow of <Code>JOIN</Code>s and how they interact is essential for writing queries that return the desired output, especially in complex database structures.
                </Text>
                <Heading>Practice</Heading>
                <Divider />
                <Text>
                    Let&apos;s practice implementing multi-table <Code>JOIN</Code>s with the following problems.
                </Text>
                <PracticeMultipleJoins setIsComplete={() => props.setIsComplete(true)} />
            </ModuleContainer>
        </>
    );
}

const customerTable = [
    {
        columns: ["CustomerID", "FirstName", "LastName", "Email", "City", "State"],
        values: [
            ["1", "Amara", "Okafor", "amara.okafor@email.com", "New York", "NY"],
            ["2", "Hiroshi", "Tanaka", "hiroshi.tanaka@email.com", "Chicago", "IL"],
            ["3", "Fatima", "Hassan", "fatima.hassan@email.com", "Boston", "MA"],
            ["4", "Carlos", "Gomez", "carlos.gomez@email.com", "Miami", "FL"],
            ["5", "Aisha", "Nguyen", "aisha.nguyen@email.com", "Seattle", "WA"],
            ["6", "Santiago", "Morales", "santiago.morales@email.com", "Austin", "TX"],
            ["7", "Lila", "Patel", "lila.patel@email.com", "Denver", "CO"],
            ["8", "Yuki", "Kobayashi", "yuki.kobayashi@email.com", "San Francisco", "CA"],
            ["9", "Jamal", "Ali", "jamal.ali@email.com", "Phoenix", "AZ"],
            ["10", "Maria", "Fernandez", "maria.fernandez@email.com", "Orlando", "FL"],
            ["11", "Chinelo", "Adesanya", "chinelo.adesanya@email.com", "Houston", "TX"],
            ["12", "Jonas", "Johansson", "jonas.johansson@email.com", "Portland", "OR"],
            ["13", "Mei", "Chen", "mei.chen@email.com", "Dallas", "TX"],
            ["14", "Liam", "Murphy", "liam.murphy@email.com", "Atlanta", "GA"],
            ["15", "Anika", "Sharma", "anika.sharma@email.com", "Nashville", "TN"],
            ["16", "Kwame", "Boateng", "kwame.boateng@email.com", "Raleigh", "NC"],
            ["17", "Leila", "Karimi", "leila.karimi@email.com", "San Diego", "CA"],
            ["18", "Noah", "Park", "noah.park@email.com", "Pittsburgh", "PA"],
            ["19", "Sofia", "Martinez", "sofia.martinez@email.com", "Las Vegas", "NV"],
            ["20", "Zain", "Khan", "zain.khan@email.com", "Minneapolis", "MN"],
        ],
    },
];

const orderTable = [
    {
        columns: ["OrderID", "CustomerID", "OrderDate", "ShipCity", "ShipState"],
        values: [
            ["101", "1", "2024-01-10", "New York", "NY"],
            ["102", "2", "2024-01-15", "Chicago", "IL"],
            ["103", "3", "2024-01-20", "Boston", "MA"],
            ["104", "4", "2024-01-22", "Miami", "FL"],
            ["105", "5", "2024-01-25", "Seattle", "WA"],
            ["106", "6", "2024-01-30", "Austin", "TX"],
            ["107", "7", "2024-02-01", "Denver", "CO"],
            ["108", "1", "2024-02-10", "New York", "NY"],
            ["109", "10", "2024-02-15", "Orlando", "FL"],
            ["110", "12", "2024-02-20", "Portland", "OR"],
            ["111", "13", "2024-02-25", "Dallas", "TX"],
            ["112", "14", "2024-03-01", "Atlanta", "GA"],
            ["113", "17", "2024-03-05", "San Diego", "CA"],
            ["114", "18", "2024-03-10", "Pittsburgh", "PA"],
            ["115", "19", "2024-03-15", "Las Vegas", "NV"],
            ["116", "8", "2024-03-20", "San Francisco", "CA"],
            ["117", "11", "2024-03-25", "Houston", "TX"],
            ["118", "15", "2024-04-01", "Nashville", "TN"],
            ["119", "20", "2024-04-05", "Minneapolis", "MN"],
        ],
    },
];

const orderDetailsTable = [
    {
        columns: ["OrderID", "ProductID", "Quantity"],
        values: [
            ["101", "1", "1"],
            ["101", "2", "2"],
            ["102", "3", "1"],
            ["103", "4", "1"],
            ["105", "5", "2"],
            ["105", "6", "1"],
            ["107", "1", "1"],
            ["107", "8", "4"],
            ["108", "2", "3"],
            ["110", "4", "1"],
            ["111", "3", "2"],
            ["112", "7", "1"],
            ["114", "8", "1"],
            ["115", "6", "1"],
            ["118", "5", "1"],
            ["119", "2", "3"],
        ],
    },
];

const productsTable = [
    {
        columns: ["ProductID", "ProductName", "Category", "Price", "StockQuantity"],
        values: [
            ["1", "Laptop", "Electronics", "1000.00", "15"],
            ["2", "Smartphone", "Electronics", "500.00", "25"],
            ["3", "Desk Chair", "Furniture", "120.00", "50"],
            ["4", "Office Desk", "Furniture", "300.00", "10"],
            ["5", "Monitor", "Electronics", "200.00", "30"],
            ["6", "Printer", "Electronics", "150.00", "20"],
            ["7", "Bookshelf", "Furniture", "100.00", "5"],
            ["8", "Keyboard", "Accessories", "50.00", "40"],
            ["9", "Mousepad", "Accessories", "20.00", "40"],
        ],
    },
];
