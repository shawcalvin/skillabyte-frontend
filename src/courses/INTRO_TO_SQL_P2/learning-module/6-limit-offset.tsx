"use client"

import Dataset from '../datasets/student_database.json'

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Code, ListItem, Text, TextLink, UnorderedList } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Tab, TabGroup } from "@/components/ui/tab";
import { Image } from "@/components/ui/media";
import { QueryResults } from "@/components/interactive/sql/results";
import { SQLTerminal } from '@/components/interactive/sql/terminal';
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { PracticeLimitOffset } from './practice-limit-offset';

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"LIMIT and OFFSET clauses"} isComplete={false} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Intro+to+SQL+(Part+2)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries.
                </Text>
                <Text>
                    In the previous section, you learned how to use the DISTINCT keyword to remove duplicate rows from your query results. However, even with duplicates removed, your query might still return a substantial number of rows that you may not need or want. In real-world scenarios, databases may contain millions or even billions of rows of data. When working with such large datasets, it is often neither practical nor efficient to retrieve all rows at once, especially when only a small subset is needed.
                </Text>
                <Text>
                    That&apos;s where <Code>LIMIT</Code> and <Code>OFFSET</Code> come into play. These two clauses let you control how many rows are retrieved from a query and where to start retrieving them. This is especially useful when your tables become too large to display or analyze conveniently all at once.
                </Text>
                <Heading>The dataset for this section</Heading>
                <Divider />
                <Text>
                    We will be using the student dataset again and have provided the ERD and tables for your reference during the examples and practice problems in this section.
                </Text>
                <Heading>Database Layout</Heading>
                <Divider />
                <TabGroup>
                    <Tab title="ERD">
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                            alt="Student ERD Diagram"
                            size="800px"
                            className="rounded-lg my-8"
                            center
                        />
                    </Tab>
                    <Tab title="Students_Spring2024 Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Students_Spring2024 table</Heading>
                                <QueryResults
                                    results={studentSpring2024Table}
                                />
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Students_Fall2024 Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Students_Fall2024 table</Heading>
                                <QueryResults
                                    results={studentFall2024Table}
                                />
                            </div>
                        </div>
                    </Tab>
                </TabGroup>
                <Text>
                    <Code>LIMIT x</Code> tells the database to stop returning rows after it has retrieved &quot;x&quot; number of rows. Imagine you want to see only the first 5 records in a table to quickly check if your data looks correct. Using <Code>LIMIT</Code> helps you to avoid getting overwhelmed by thousands of rows.
                </Text>
                <Text>
                    Expand the following two tabs to see how <Code>LIMIT</Code> works (using the student dataset again):
                </Text>
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle><Code>LIMIT</Code></AccordianTitle>
                        <AccordianContent>
                            <Text>
                                Suppose you want to display only 5 rows from the Students_Spring2024 table:
                            </Text>
                            <SQLTerminal
                                title='LIMIT query'
                                dataset={Dataset}
                                initialQuery={`SELECT student_id, full_name, major, academic_year, gpa, email\nFROM Students_Spring2024\nLIMIT 5;`}
                                explanation={`LIMIT 5 reduces the output to the first five rows (as defined by the database's default order, or by any ORDER BY you may specify).`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle><Code>LIMIT</Code> with ORDER BY</AccordianTitle>
                        <AccordianContent>
                            <Text>
                                While <Code>LIMIT</Code> alone restricts the number of rows, it&apos;s often paired with ORDER BY to specify which rows you see first. This is especially useful when you want to return the top x rows based on a certain value. For instance, if we want to see the top 3 students with the highest GPAs in Spring 2024, we would write:
                            </Text>
                            <SQLTerminal
                                title='LIMIT query'
                                dataset={Dataset}
                                initialQuery={`SELECT student_id, full_name, gpa\nFROM Students_Spring2024\nORDER BY gpa DESC\nLIMIT 3; `}
                                explanation={`In this query, ORDER BY gpa DESC first sorts the rows with the highest GPAs at the top. Then, LIMIT 3 takes the first 3 rows of that sorted list, giving us the top 3 GPAs.`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Text>
                    <Code>LIMIT</Code> is a simple clause but is extremely useful in limiting your output rows. It becomes even more versatile when paired with another clause: <Code>OFFSET</Code>.
                </Text>
                <Heading><Code>OFFSET</Code></Heading>
                <Divider />
                <Text>
                    Sometimes, you don&apos;t want just the first part of the data; you might want to skip certain rows before returning the next set. That&apos;s where the <Code>OFFSET</Code> clause can be used. <Code>OFFSET x</Code>instructs the query to skip the first &quot;x&quot; number of rows of the result, then return the rows after that.
                </Text>
                <AccordianGroup>
                    <Accordian>
                        <AccordianTitle>Pagination 1</AccordianTitle>
                        <AccordianContent>
                            <Text>
                                One common scenario is pagination, where you display data in &quot;pages&quot; of 10 rows each. You would retrieve page 1 with the following query:
                            </Text>
                            <SQLTerminal
                                title='Creating page 1'
                                dataset={Dataset}
                                initialQuery={`SELECT full_name, major, academic_year\nFROM Students_Fall2024\nORDER BY full_name\nLIMIT 10;`}
                                explanation={`This retrieves the first 10 rows, sorted by full_name. Notice that no OFFSET is needed for page 1.`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>Pagination 2</AccordianTitle>
                        <AccordianContent>
                            <Text>
                                To retrieve page 2, you would simply add an <Code>OFFSET</Code> clause to skip the first page&quot;s contents:
                            </Text>
                            <SQLTerminal
                                title='Creating page 2'
                                dataset={Dataset}
                                initialQuery={`SELECT full_name, major, academic_year\nFROM Students_Fall2024\nORDER BY full_name\nLIMIT 10\nOFFSET 10;`}
                                explanation={`OFFSET 10 skips the first 10 rows, then LIMIT 10 returns the next 10 rows.`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                            />
                        </AccordianContent>
                    </Accordian>
                    <Accordian>
                        <AccordianTitle>Pagination 3</AccordianTitle>
                        <AccordianContent>
                            <Text>
                                To retrieve page 3, you just increase the <Code>OFFSET</Code> from 10 to 20:
                            </Text>
                            <SQLTerminal
                                title='Creating page 2'
                                dataset={Dataset}
                                initialQuery={`SELECT full_name, major, academic_year\nFROM Students_Fall2024\nORDER BY full_name\nLIMIT 10\nOFFSET 20;`}
                                explanation={`This query jumps past the first 20 rows and grabs the next 10 rows (or in this case, the remaining 5 rows of the table).`}
                                schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                            />
                        </AccordianContent>
                    </Accordian>
                </AccordianGroup>
                <Heading>Practice</Heading>
                <Divider />
                <PracticeLimitOffset setIsComplete={() => props.setIsComplete(true)} />
                <Text>
                    Using the <Code>LIMIT</Code> and <Code>OFFSET</Code> clauses is essential when dealing with large or paginated data. It gives you precise control over which rows appear, making your SQL queries more efficient and user-friendly.
                </Text>
                <UnorderedList>
                    <ListItem><Text><Code>LIMIT</Code> reduces the total number of rows displayed.</Text></ListItem>
                    <ListItem><Text><Code>OFFSET</Code> lets you skip a certain number of rows before returning the next set.</Text></ListItem>
                </UnorderedList>
                <Text>
                    Click &quot;Next&quot; to advance to the comprehensive practice problems in preparation for the graded quiz.
                </Text>
            </ModuleContainer>
        </>
    );
}

const studentSpring2024Table = [
    {
        columns: ["student_id", "full_name", "major", "academic_year", "gpa", "email"],
        values: [
            ["1", "Aditi Patel", "Accounting", "Freshman", "3.50", "aditi.patel@myschool.edu"],
            ["2", "Mohammed Khan", "Finance", "Sophomore", "3.20", "mohammed.khan@myschool.edu"],
            ["3", "Sofia Gonzalez", "Supply Chain", "Junior", "3.75", "sofia.gonzalez@myschool.edu"],
            ["4", "Carlos Santos", "Accounting", "Senior", "3.10", "carlos.santos@myschool.edu"],
            ["5", "Emily Wong", "Accounting", "Freshman", "3.40", "emily.wong@myschool.edu"],
            ["6", "Felix Kim", "Finance", "Sophomore", "3.60", "felix.kim@myschool.edu"],
            ["7", "Grace Okafor", "Accounting", "Junior", "2.95", "grace.okafor@myschool.edu"],
            ["8", "Henry Lee", "Finance", "Senior", "3.30", "henry.lee@myschool.edu"],
            ["9", "Isabella Liu", "Supply Chain", "Freshman", "3.25", "isabella.liu@myschool.edu"],
            ["10", "James Nguyen", "Finance", "Junior", "3.90", "james.nguyen@myschool.edu"],
            ["11", "Ana Ramirez", "Supply Chain", "Senior", "3.80", "ana.ramirez@myschool.edu"],
            ["12", "Liam Hernandez", "Accounting", "Freshman", "3.05", "liam.hernandez@myschool.edu"],
            ["13", "Mia Jackson", "Finance", "Sophomore", "3.50", "mia.jackson@myschool.edu"],
            ["14", "Noah Clark", "Supply Chain", "Junior", "3.45", "noah.clark@myschool.edu"],
            ["15", "Olivia Osei", "Accounting", "Senior", "3.70", "olivia.osei@myschool.edu"],
            ["16", "Paul Young", "Accounting", "Freshman", "3.15", "paul.young@myschool.edu"],
            ["17", "Quinn Chen", "Finance", "Sophomore", "2.80", "quinn.chen@myschool.edu"],
            ["18", "Ruby Ahmed", "Supply Chain", "Junior", "3.55", "ruby.ahmed@myschool.edu"],
            ["19", "Sophia Brooks", "Finance", "Senior", "3.25", "sophia.brooks@myschool.edu"],
            ["20", "Thomas Moore", "Accounting", "Freshman", "2.90", "thomas.moore@myschool.edu"],
        ],
    },
]

const studentFall2024Table = [
    {
        columns: ["student_id", "full_name", "major", "academic_year", "gpa", "email"],
        values: [
            ["1", "Aditi Patel", "Accounting", "Sophomore", "3.70", "aditi.patel@myschool.edu"],
            ["2", "Mohammed Khan", "Finance", "Junior", "3.00", "mohammed.khan@myschool.edu"],
            ["3", "Sofia Gonzalez", "Supply Chain", "Senior", "3.65", "sofia.gonzalez@myschool.edu"],
            ["5", "Emily Wong", "Accounting", "Sophomore", "3.45", "emily.wong@myschool.edu"],
            ["6", "Felix Kim", "Finance", "Junior", "3.55", "felix.kim@myschool.edu"],
            ["7", "Grace Okafor", "Accounting", "Senior", "2.95", "grace.okafor@myschool.edu"],
            ["9", "Isabella Liu", "Supply Chain", "Sophomore", "3.10", "isabella.liu@myschool.edu"],
            ["10", "James Nguyen", "Finance", "Senior", "3.90", "james.nguyen@myschool.edu"],
            ["12", "Liam Hernandez", "Accounting", "Sophomore", "2.90", "liam.hernandez@myschool.edu"],
            ["13", "Mia Jackson", "Business Administration", "Junior", "3.75", "mia.jackson@myschool.edu"],
            ["14", "Noah Clark", "Supply Chain", "Senior", "3.45", "noah.clark@myschool.edu"],
            ["16", "Paul Young", "Accounting", "Sophomore", "3.30", "paul.young@myschool.edu"],
            ["17", "Quinn Chen", "Finance", "Junior", "2.95", "quinn.chen@myschool.edu"],
            ["18", "Ruby Ahmed", "Supply Chain", "Senior", "3.55", "ruby.ahmed@myschool.edu"],
            ["20", "Thomas Moore", "Business Administration", "Sophomore", "3.10", "thomas.moore@myschool.edu"],
            ["21", "Uma Rogers", "Accounting", "Freshman", "3.20", "uma.rogers@myschool.edu"],
            ["22", "Victor Price", "Finance", "Freshman", "3.60", "victor.price@myschool.edu"],
            ["23", "Wendy Scott", "Business Administration", "Freshman", "3.10", "wendy.scott@myschool.edu"],
            ["24", "Xavier Barnes", "Accounting", "Freshman", "3.50", "xavier.barnes@myschool.edu"],
            ["25", "Yara Chen", "Finance", "Freshman", "3.75", "yara.chen@myschool.edu"],
            ["26", "Zane Reid", "Supply Chain", "Freshman", "2.85", "zane.reid@myschool.edu"],
            ["27", "Abby Walker", "Accounting", "Freshman", "3.40", "abby.walker@myschool.edu"],
            ["28", "Bryce Flores", "Finance", "Sophomore", "3.30", "bryce.flores@myschool.edu"],
            ["29", "Carmen Rivera", "Supply Chain", "Sophomore", "3.65", "carmen.rivera@myschool.edu"],
            ["30", "Derek Watson", "Business Administration", "Freshman", "3.25", "derek.watson@myschool.edu"],
        ],
    },
]