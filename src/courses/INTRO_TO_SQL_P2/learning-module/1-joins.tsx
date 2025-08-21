"use client"

import Dataset from '../datasets/owner_and_dog_database.json'

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Code, Text, TextLink } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Tab, TabGroup } from "@/components/ui/tab";
import { Image } from "@/components/ui/media";
import { QueryResults } from "@/components/interactive/sql/results";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { CodeEditor } from "@/components/ui/code";
import { Divider } from '@/components/ui/divider';

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"JOINS with two tables"} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Intro+to+SQL+(Part+2)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries.
                </Text>
                <Heading>The dataset for this section</Heading>
                <Divider />
                <Text>
                    Let&apos;s introduce the dataset that we will be using for our simple JOIN queries. Let&apos;s take a moment to explore the tables and the entity relationship diagram (ERD) below to learn how the dataset is structured.
                </Text>
                <Heading>Database Layout</Heading>
                <Divider />
                <TabGroup>
                    <Tab title="ERD">
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BDog%2Band%2BOwner%2Bwhite%2Bbackground.png"
                            alt="ERD Diagram"
                            size="800px"
                            className="rounded-lg my-8"
                            center
                        />
                    </Tab>
                    <Tab title="Dog Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Dog table</Heading>
                                <QueryResults
                                    results={dogTable}
                                />
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Person Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Person table</Heading>
                                <QueryResults
                                    results={personTable}
                                />
                            </div>
                        </div>
                    </Tab>
                </TabGroup>
                <Text>
                    This dataset has two tables: Dog and Person. The Dog table&apos;s OwnerID field corresponds to the Person table&apos;s PersonID field, as indicated by the connecting line in the ERD diagram.
                </Text>
                <Heading>Joining two tables</Heading>
                <Divider />
                <Text>
                    Remember that in Introduction to SQL – Part 1, we introduced the <Code>FROM</Code> clause; however, in that assignment, we only pulled data from a single table. In this assignment, we will now expand on the <Code>FROM</Code> clause to discuss pulling data from multiple tables using variations of the <Code>JOIN</Code> clause. We will start by learning how to join two tables together.
                </Text>
                <Text>
                    In the <Code>FROM</Code> clause, you specify how tables will be joined. The most common JOINs you will use are an <Code>INNER JOIN</Code>, <Code>LEFT JOIN</Code> or <Code>RIGHT JOIN</Code>, <Code>FULL OUTER JOIN</Code>, and a <Code>CROSS JOIN</Code> (also called a cartesian join). The tabs below show examples of each of these <Code>JOIN</Code>s and the basic SQL to make the <Code>JOIN</Code>s.
                </Text>
                <Heading>INNER JOIN</Heading>
                <Divider />
                <div className="flex flex-col md:flex-row space-x-12 space-y-8 justify-center items-center">
                    <div className='w-full max-w-sm'>
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Inner%2BJoin.png"
                            alt="Inner Join SQL Diagram"
                            className="rounded-lg"
                            center
                        />
                    </div>
                    <Text>
                        <Code>INNER JOIN</Code> only returns values where the JOIN criteria match in both Table A and Table B. This is the most common type of JOIN. The SQL for this type of JOIN looks like this:
                    </Text>

                </div>
                <CodeEditor
                    language="sql"
                    title="INNER JOIN Query"
                    value={`SELECT *\nFROM Person\nINNER JOIN Dog ON Person.PersonID = Dog.OwnerID;`}
                />
                <Text>
                    Notice you must use the <Code>FROM</Code> statement, the joining operator, and the <Code>ON</Code> statement. The <Code>ON</Code> statement specifies the fields (often a primary to foreign key relation) that will connect the two tables.
                </Text>
                <Text>
                    Press “Run” to see the output produced by the following INNER JOIN query:
                </Text>
                <SQLTerminal
                    title='INNER JOIN Query'
                    dataset={Dataset}
                    initialQuery={`SELECT *\nFROM Person\nINNER JOIN Dog ON Person.PersonID = Dog.OwnerID;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BDog%2Band%2BOwner%2Bwhite%2Bbackground.png"
                />
                <Text>
                    Note that this query does not return a row for Lassie from the Dog table. This is because there isn’t an OwnerID in Lassie’s row, so you can’t match a PersonID from the Person table. The query also doesn’t include a row for George Jetson from the Person table because there isn’t a Dog with his PersonID in the Dog table. Additionally, Laura Ingalls appears in two rows of this query, because her PersonID matched an OwnerID twice in the Dog table for both Jack and Bandit.
                </Text>
                <Text>
                    In many Database Management Systems (DBMSs), <Code>INNER JOIN</Code> can also be expressed as just <Code>JOIN</Code>. You may choose either when completing this course&apos;s practice problems or quiz questions.
                </Text>
                <Heading>LEFT JOIN</Heading>
                <Divider />
                <div className="flex flex-col md:flex-row space-x-12 space-y-8 justify-center items-center">
                    <div className='w-full max-w-sm'>
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Left%2BJoin.png"
                            alt="Left Join SQL Diagram"
                            className="rounded-lg"
                            center
                        />
                    </div>
                    <Text>
                        Another popular join, <Code>LEFT JOIN</Code>, returns all rows from Table A and those rows from Table B that match the ON criteria. This type of <Code>JOIN</Code> is used to add attributes from Table B to the list of attributes in Table A. The LEFT refers to the table specified on the left of the JOIN word. The SQL for this type of <Code>JOIN</Code> looks like this:
                    </Text>

                </div>
                <CodeEditor
                    language="sql"
                    title="Simple LEFT JOIN Query"
                    value={`SELECT <select_list>\nFROM TableA AS a\nLEFT JOIN TableB AS b ON a.field=b.field;`}
                />
                <Text>Run the following <Code>LEFT JOIN</Code> query:</Text>
                <SQLTerminal
                    title='LEFT JOIN Query'
                    dataset={Dataset}
                    initialQuery={`SELECT *\nFROM Person p\nLEFT JOIN Dog d ON p.PersonID = d.OwnerID;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BDog%2Band%2BOwner%2Bwhite%2Bbackground.png"
                />
                <Text>
                    Notice how this query returns all owners in the Person table – even George Jetson, who does not have any dogs in the Dog table. Also, note how Lassie was excluded from the results because she does not have an owner listed.
                </Text>
                <Heading>RIGHT JOIN</Heading>
                <Divider />
                <div className="flex flex-col md:flex-row space-x-12 space-y-8 justify-center items-center">
                    <div className='w-full max-w-sm'>
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Right%2BJoin.png"
                            alt="Right Join SQL Diagram"
                            className="rounded-lg"
                            center
                        />
                    </div>
                    <Text>
                        <Code>RIGHT JOIN</Code> is the same as <Code>LEFT JOIN</Code>, the difference being that a <Code>RIGHT JOIN</Code> keeps all the rows from the table specified on the right of the <Code>JOIN</Code> word. The SQL for this type of <Code>JOIN</Code> looks like this:
                    </Text>
                </div>
                <CodeEditor
                    language="sql"
                    title="Simple RIGHT JOIN Query"
                    value={`SELECT <select_list>\nFROM TableA AS a\nRIGHT JOIN TableB AS b ON a.field=b.field;`}
                />
                <Text>Run the following <Code>RIGHT JOIN</Code> query:</Text>
                <SQLTerminal
                    title='RIGHT JOIN Query'
                    dataset={Dataset}
                    initialQuery={`SELECT *\nFROM Person p\nRIGHT JOIN Dog d ON p.PersonID = d.OwnerID;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BDog%2Band%2BOwner%2Bwhite%2Bbackground.png"
                />
                <Text>
                    Notice how this query returns all dogs in the Dog table – even Lassie, who does not have an owner associated. Also, note how George Jetson was excluded from the results because the Dog table doesn’t have George listed as an owner for any of the dogs.
                </Text>
                <Text>
                    A SQL statement using a LEFT JOIN can produce similar results to a RIGHT JOIN by simply switching the table order in the FROM statement. For example, let’s rewrite the query we just ran but with a LEFT JOIN instead:
                </Text>
                <SQLTerminal
                    title='RIGHT JOIN to LEFT JOIN Query'
                    dataset={Dataset}
                    initialQuery={`SELECT *\nFROM Dog d\nLEFT JOIN Person p ON d.OwnerID = p.PersonID;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BDog%2Band%2BOwner%2Bwhite%2Bbackground.png"
                />
                <Text>
                    The output is the same as before, except the column order is slightly different. Since <Code>LEFT JOIN</Code> and <Code>RIGHT JOIN</Code> are essentially interchangeable, <Code>LEFT JOIN</Code> is often preferred for consistency’s sake.
                </Text>
                <Heading>CROSS JOIN</Heading>
                <Divider />
                <div className="flex flex-col md:flex-row space-x-12 space-y-8 justify-center items-center">
                    <div className='w-full max-w-sm'>
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Cross%2BJoin.png"
                            alt="Cross Join SQL Diagram"
                            className="rounded-lg"
                            center
                        />
                    </div>
                    <Text>
                        Another type of <Code>JOIN</Code> is a <Code>CROSS JOIN</Code> or <Code>CARTESIAN JOIN</Code> that combines every possible record in Table 1 with every possible record in Table 2. In the image to the left, the output would be 9 records: Table 1 record 1 paired with Table 2 record 1, Table 1 record 1 paired with Table 2 record 2, etc. These types of JOINs produce a tremendous number of results. You can calculate how many results a <Code>CROSS JOIN</Code> will yield by multiplying the number of rows in Table 1 by the number of rows in Table 2.
                    </Text>
                </div>
                <Text>
                    You may want to use a <Code>CROSS JOIN</Code> for several reasons. For example, assume you manage t-shirt inventory and have a list of colors and a list of sizes. By using a <Code>CROSS JOIN</Code>, you can generate a list that shows every possible combination of color and size for your t-shirts.
                </Text>
                <Text>
                    The SQL to produce this type of <Code>JOIN</Code> is as follows:
                </Text>
                <CodeEditor
                    language="sql"
                    title="Simple CROSS JOIN Query"
                    value={`SELECT <select_list>\nFROM TableA AS a\nRIGHT JOIN TableB AS b ON a.field=b.field;`}
                />
                <Text>
                    <Code>CROSS JOIN</Code>s are unique because they do not need an <Code>ON</Code> statement, as they are joining every record of one table with every record of the other. Run the following <Code>CROSS JOIN</Code> of the Dog and Person tables to see the output:
                </Text>
                <SQLTerminal
                    title='CROSS JOIN Query'
                    dataset={Dataset}
                    initialQuery={`SELECT *\nFROM Person, Dog;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BDog%2Band%2BOwner%2Bwhite%2Bbackground.png"
                />
                <Text>
                    This query produces 42 rows of data representing 42 unique owner-dog combinations (6 owners * 7 dogs = 42 combinations).
                </Text>
                <Text>
                    While <Code>CROSS JOIN</Code>s may be useful at times, exercise caution in their use. <Code>CROSS JOIN</Code>s can easily be mistaken for regular <Code>JOIN</Code>s because they are performed by merely separating two or more tables with commas. Also, <Code>CROSS JOIN</Code>s on massive datasets may take an excessive time to load or may crash the DBMS session altogether.
                </Text>
                <Text>
                    Some may choose to use <Code>CROSS JOIN</Code>s in the following manner (though we advise against it because it can be very resource intensive and slow):
                </Text>
                <SQLTerminal
                    title='Unadvised CROSS JOIN Query'
                    dataset={Dataset}
                    initialQuery={`SELECT *\nFROM Person, Dog\nWHERE Person.PersonID = Dog.OwnerID;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BDog%2Band%2BOwner%2Bwhite%2Bbackground.png"
                />
                <Text>
                    Let&apos;s consider this query: What you see is a <Code>CROSS JOIN</Code> where all possible combinations of rows are created. Then, the <Code>WHERE</Code> clause removes all rows where Person.PersonID is not equal to Dog.OwnerID. In doing so, the query has accomplished the same task as an <Code>INNER JOIN</Code>! However, even though this query works, it takes significantly more computational resources and clutters the <Code>WHERE</Code> clause by relying on it to both finish the JOIN and perform other filtering operations. By keeping the <Code>WHERE</Code> clause free of <Code>JOIN</Code> operations, your SQL becomes more readable. Further, you are less likely to make critical querying errors.
                </Text>
                <Heading>FULL OUTER JOIN</Heading>
                <Divider />
                <div className="flex flex-col md:flex-row space-x-12 space-y-8 justify-center items-center">
                    <div className='w-full max-w-sm'>
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Full%2BOuter%2BJoin.png"
                            alt="Full Outer Join SQL Diagram"
                            className="rounded-lg"
                            center
                        />
                    </div>
                    <Text>
                        A <Code>FULL OUTER JOIN</Code> returns all rows from both Table A and Table B. For example, if we performed a <Code>FULL OUTER JOIN</Code> on the Dog and Owner tables, we would get the following output:
                    </Text>
                </div>
                <div className='w-full flex justify-center'>
                    <div>
                        <Heading className='mb-2 mt-16'>Owner and Dog Table</Heading>
                        <QueryResults
                            results={ownerAndDogTable}
                        />
                    </div>
                </div>
                <Text>
                    Similar to <Code>LEFT JOIN</Code> and <Code>RIGHT JOIN</Code>s, a <Code>FULL OUTER JOIN</Code> includes records from one table that do not correspond to records in the other table. Lassie is included despite having no owner and George Jetson is included despite having no dogs.
                </Text>
                <Text>
                    Many DBMSs do not support this type of <Code>JOIN</Code>. For example, to perform this <Code>FULL OUTER JOIN</Code> in Microsoft Access using SQL, you would need to use a <Code>CROSS JOIN</Code> with criteria or a <Code>UNION</Code> of a <Code>LEFT JOIN</Code> and <Code>RIGHT JOIN</Code>. (We will discuss <Code>UNION</Code>s later in this assignment). While performing <Code>FULL OUTER JOIN</Code>s is beyond the scope of this assignment, be aware that they exist and can be useful in certain situations.
                </Text>
                <Heading>JOIN types summary</Heading>
                <Divider />
                <Text>Here is a summary graphic containing all the JOIN types that we have learned:</Text>
                <div className='sm:px-16 md:px-32'>
                    <Image
                        src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/All%2BJoins.png"
                        alt="Join Summary SQL Diagram"
                        className="rounded-lg"
                        center
                    />
                </div>
                <Text>Click “Next” to advance and practice some simple <Code>JOIN</Code> problems.</Text>
            </ModuleContainer>
        </>
    );
}

const dogTable = [
    {
        columns: ["DogID", "DogName", "OwnerID"],
        values: [
            ["10", "Jack", "2"],
            ["11", "Bandit", "2"],
            ["12", "Einstein", "3"],
            ["13", "Fang", "4"],
            ["14", "Lassie", ""],
            ["15", "Snoopy", "6"],
            ["16", "Toto", "5"],
        ]
    }
];

const personTable = [
    {
        columns: ["PersonID", "PersonName"],
        values: [
            ["1", "George Jetson"],
            ["2", "Laura Ingalls"],
            ["3", "Emmit Brown"],
            ["4", "Rubeus Hagrid"],
            ["5", "Dorothy Gale"],
            ["6", "Charlie Brown"],
        ]
    }
];

const ownerAndDogTable = [
    {
        columns: ["DogID", "DogName", "OwnerID", "PersonID", "PersonName"],
        values: [
            ["10", "Jack", "2", "2", "Laura Ingalls"],
            ["11", "Bandit", "2", "2", "Laura Ingalls"],
            ["12", "Einstein", "3", "3", "Emmit Brown"],
            ["13", "Fang", "4", "4", "Rubeus Hagrid"],
            ["14", "Lassie", "", "", ""],
            ["15", "Snoopy", "6", "6", "Charlie Brown"],
            ["16", "Toto", "5", "5", "Dorothy Gale"],
            ["", "", "", "1", "George Jetson"],
        ]
    }
];
