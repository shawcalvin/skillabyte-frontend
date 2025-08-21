"use client"

import CustomerDataset from '../datasets/customers.json'

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text, TextLink, Code } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { CodeEditor } from "@/components/ui/code";
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { Divider } from '@/components/ui/divider';
import { QueryResults } from '@/components/interactive/sql/results';

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"SELECT and FROM clauses"} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/Intro+to+SQL+(Part+1)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries.
                </Text>
                <Text>
                    The <Code>SELECT</Code> clause and <Code>FROM</Code> clause work together to identify the data you want presented in the query results. The <Code>FROM</Code> clause requires you to specify the entity or entities from which you are getting the data. For now, we will work only with tables as our entities.
                </Text>
                <Text>
                    The following table will be our database throughout this course. This table tells us the field (column) names for each entity (like CustID on the left) and their data types (like double on the right). In this dataset, we can see that there are 10 unique fields from CustID through FirstPurchase, and each has one of three unique data types (double, varchar(255), and datetime).
                </Text>
                <Text>
                    In a relational database, fields (also known as columns) can have different data types. Common field types include, but are not limited to, string (text), integer, float (decimal), date/time, and boolean. Each field type is designed to handle specific kinds of data, ensuring that the data is stored efficiently and accurately. We’ll talk more about field types later. For now, know that varchar(255) is a type of string (text) field and double is a numeric field type.
                </Text>
                <div className="w-full flex justify-center">
                    <div>
                        <p className='my-2 font-semibold text-gray-800 mx-2'>Customer data types table</p>
                        <Divider className='mb-4' />
                        <QueryResults
                            results={customerFields}
                        />
                    </div>
                </div>
                <Text>
                    To teach the basics of SQL, we will use a very simple database. The database only has a single table, called the Customer table, and relatively few records in the table. The Customer table below shows all of the field names and rows of data that you will query in this course. In future courses, we will use larger databases that contain multiple tables and more data.
                </Text>
                <div className="flex justify-center">
                    <div className="w-full max-w-5xl my-8">
                        <p className='my-2 font-semibold text-gray-800 mx-2'>Customer table</p>
                        <Divider className='mb-4' />
                        <QueryResults
                            results={customers}
                        />
                    </div>
                </div>
                <Text>
                    Now that we understand the structure of our dataset, let’s learn how to query data from the Customer table.
                </Text>
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle><Text>Step 1: Specify the table</Text></AccordianTitle>
                        <AccordianContent>
                            <Text className="mb-4">Use the <Code>FROM</Code> clause to indicate which table or tables you want to draw data from. In this case, we want to draw from the Customer table, so our <Code>FROM</Code> statement looks like:</Text>
                            <CodeEditor
                                language="sql"
                                title="Incomplete Query"
                                value="FROM Customer;"
                                editable
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Step 1: Specify the output</Text></AccordianTitle>
                        <AccordianContent>
                            <Text className="mb-4">The <Code>SELECT</Code> clause allows you to specify the columns of data (i.e., the fields) you want to return from the entities you specified in the <Code>FROM</Code> clause. For example, if you want a list of all the customer names in the Customer table, you would write:</Text>
                            <SQLTerminal
                                title='Complete query'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT Name\nFROM Customer;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Step 3: Query multiple columns</Text></AccordianTitle>
                        <AccordianContent>
                            <Text className='mb-4'>Now suppose we want to see both the customers&apos; state and their credit score alongside their name. We would simply add those additional fields in the <Code>SELECT</Code> clause, separating each with commas:</Text>
                            <SQLTerminal
                                title='Query with multiple columns'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT Name, State, CreditScore\nFROM Customer;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Step 4: Select all columns</Text></AccordianTitle>
                        <AccordianContent>
                            <Text className='mb-4'>If you want to show all fields in a table, you can use the <Code>*</Code> wildcard. For example, to show all information in the Customer table, you would write:</Text>
                            <SQLTerminal
                                title='Query with multiple columns'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT *\nFROM Customer;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Text>
                    Congratulations — you have run your first queries! Note how each query ends with a semicolon <Code>;</Code> — this indicates that the query is finished. While not every DBMS requires a semicolon at the end of the query, it is good practice, and it helps you know when the statement ends. As such, in this course, we will end our queries with a semicolon.
                </Text>
                <Heading>Brackets and reserved characters</Heading>
                <Divider />
                <Text>
                    In all previous examples, there is only a single table, and all field names are unique. However, in more complicated queries with multiple tables, you need to specify which table each field originates from. You do this by first listing the table name, then the field name with a period between them. For example, we rewrite the &quot;Name&quot; field name as <Code>Customer.Name</Code> to specify that it comes from the Customer table.
                </Text>
                <Text>
                    In some DBMS, like Microsoft Access, field names containing spaces or other reserved characters must include brackets to identify the field name. For instance, you would write <Code>[Customer].[First Name]</Code> if the field name included a space between &quot;First&quot; and &quot;Name&quot;. To avoid having to use brackets, it’s best to use short, descriptive field names without reserved characters. Below are some instances that would require brackets.
                </Text>
                <div className="w-full flex justify-center">
                    <div>
                        <p className='my-2 font-semibold text-gray-800 mx-2'>Reserved character table</p>
                        <Divider className='mb-4' />
                        <QueryResults
                            results={reservedChars}
                        />
                    </div>
                </div>
                <Text>
                    This course will not require you to use brackets but be mindful of their purpose in future SQL queries.
                </Text>
                <Heading>Aliases</Heading>
                <Divider />
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle><Text>Aliasing a field with <Code className='mx-1'>AS</Code></Text></AccordianTitle>
                        <AccordianContent>
                            <Text className="mb-4">You can also rename fields using the <Code>AS</Code> command within the <Code>SELECT</Code> clause. This is called &quot;aliasing.&quot; If you want the output set to have CustomerName as the field header instead of Name, you would write the query as follows:</Text>
                            <SQLTerminal
                                title='Aliasing a field'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT Name as CustomerName\nFROM Customer;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Aliasing a field without <Code className='mx-1'>AS</Code></Text></AccordianTitle>
                        <AccordianContent>
                            <Text className="mb-4">You could also write the query without using <Code>AS</Code> and SQL will still understand that it is meant to be an alias. We will generally use the word <Code>AS</Code> for aliasing to be clear, though it is not required in practice. Let’s run the same query without the <Code>AS</Code> command as follows:</Text>
                            <SQLTerminal
                                title='Aliasing a field'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT Name CustomerName\nFROM Customer;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Text>Aliasing a table</Text></AccordianTitle>
                        <AccordianContent>
                            <Text className='mb-4'>You can also alias table names by using the <Code>AS</Code> command in the <Code>FROM</Code> clause. If you choose to alias a table name, you must use that alias name instead of the table name any other time the table is mentioned in the query. Aliasing table names is a very convenient shortcut when writing queries. Consider the following example.</Text>
                            <SQLTerminal
                                title='Aliasing a table'
                                dataset={CustomerDataset}
                                initialQuery={`SELECT c.Name, c.State, c.CreditScore\nFROM Customer AS c;`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Text>
                    Now let’s learn about some powerful operations you can perform in the <Code>SELECT</Code> clause.
                </Text>
            </ModuleContainer>
        </>
    );
}

const customerFields = [{
    columns: ['Field Name', 'Data Type'],
    values: [
        ['CustID', 'integer'],
        ['Name', 'varchar(255)'],
        ['City', 'varchar(255)'],
        ['State', 'varchar(255)'],
        ['CreditScore', 'double'],
        ['CreditLimit', 'double'],
        ['ContactPref', 'varchar(255)'],
        ['OrdersPlaced', 'double'],
        ['TotalOrdered', 'double'],
        ['FirstPurchase', 'datetime']
    ]
}
];

const customers = [
    {
        columns: ['CustID', 'Name', 'City', 'State', 'CreditScore', 'CreditLimit', 'ContactPref', 'OrdersPlaced', 'TotalOrdered', 'FirstPurchase'],
        values: [
            ['1021', 'Steve Klein', 'Provo', 'Utah', '740', '8000', 'email', '3', '9000', '9/14/2016'],
            ['1022', 'Akbar Luzzatto', 'Reno', 'Nevada', '825', '6000', 'phone', '4', '20000', '11/23/2013'],
            ['1023', 'Amram Hannigan', 'St. George', 'Utah', '650', '1000', 'text', 'null', '0', 'null'],
            ['1024', 'Regina Nurmi', 'Tucson', 'Arizona', '750', '8000', 'text', '9', '45000', '8/19/2020'],
            ['1025', 'Eziz Fabian', 'Las Vegas', 'Nevada', '670', '7000', 'email', '10', '20000', '12/19/2020'],
            ['1026', 'Elvira Hawking', 'Las Vegas', 'Nevada', '700', '4000', 'email', '7', '35000', '12/20/2017'],
            ['1027', 'Naveen Allan', 'Salt Lake City', 'Utah', '810', '9000', 'email', '3', '3000', '9/19/2016'],
            ['1028', 'Maxi Garver', 'Phoenix', 'Arizona', '790', '15000', 'text', '25', '50000', '6/1/2010'],
            ['1029', 'Else Sander', 'Phoenix', 'Arizona', '750', '6000', 'phone', '5', '25000', '11/26/2013'],
            ['1030', 'Ronaldo Merino', 'Salt Lake City', 'Utah', '350', 'null', 'email', '3', '15000', '10/19/2019'],
            ['1031', 'Katie Owens', 'Provo', 'Utah', '815', '5000', 'email', '2', '10000', '3/27/2013'],
            ['1032', 'Pratap Rome', 'Las Vegas', 'Nevada', '640', '6000', 'email', '7', '21000', '2/3/2019'],
            ['1033', 'Jonna Whalen', 'Green River', 'Utah', '720', '7000', 'text', '18', '72000', '4/1/2019'],
            ['1034', 'Trees Venner', 'Monticello', 'Utah', '660', '1000', 'phone', '20', '20000', '3/18/2017'],
            ['1035', 'Alisher Kumar', 'Prescott', 'Arizona', '690', '6000', 'phone', '11', '55000', '3/20/2014'],
            ['1036', 'Chizoba Ortega', 'Duncan', 'Arizona', '800', '5000', 'null', '18', '72000', '2/25/2010'],
            ['1037', 'Cam Fernandes', 'Las Vegas', 'Nevada', '840', '8000', 'email', '9', '45000', '6/5/2020'],
            ['1038', 'Hadasa Davtyan', 'Provo', 'Utah', '680', '1500', 'email', 'null', '0', 'null'],
            ['1039', 'Lal Gupta', 'West Wendover', 'Nevada', '640', '2000', 'text', '8', '40000', '3/9/2010'],
            ['1040', 'Petera Knaggs', 'Prescott', 'Arizona', '625', '5000', 'phone', '15', '60000', '9/20/2016']
        ]
    }
];

const reservedChars = [{
    columns: ['Reserved character type', 'Example'],
    values: [
        ['Special characters', 'Dollar sign ($), at sign (@), hashtag (#)'],
        ['Numeric field names', '123Field, 2023Sales'],
        ['Quotes', '“MyTable”, “Employee\'s Data” '],
        ['Unicode characters', 'नाव, 名字, اسم, имя'],
        ['Field names with dashes', 'First-Name, Order-Detail, Join-Date'],
        ['Field names with periods', 'Order.Detail, Customer.Address']
    ]
}
];
