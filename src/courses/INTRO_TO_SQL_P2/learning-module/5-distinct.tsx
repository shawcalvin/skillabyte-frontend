"use client"

import Dataset from '../datasets/student_database.json'

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Code, Text, TextLink } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Tab, TabGroup } from "@/components/ui/tab";
import { Image } from "@/components/ui/media";
import { QueryResults } from "@/components/interactive/sql/results";
import { SQLTerminal } from '@/components/interactive/sql/terminal';
import { PracticeDistinct } from './practice-distinct';

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"DISTINCT"} isComplete={false} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Intro+to+SQL+(Part+2)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries.
                </Text>
                <Text>
                    In the last section, we learned how the <Code>UNION</Code> operation stacks data and filters out duplicate records. But what if we want to filter out duplicates for non-union queries? This is where the <Code>DISTINCT</Code> keyword is used.
                </Text>
                <Text>
                    The <Code>DISTINCT</Code> keyword filters out duplicate values across one or more columns of the dataset. It can be used in many places in an SQL query, but we will only discuss <Code>DISTINCT</Code> in the <Code>SELECT</Code> clause and in the <Code>COUNT()</Code> function.
                </Text>
                <Heading>The dataset for this section</Heading>
                <Divider />
                <Text>
                    We will use the student dataset again. For your reference, we have provided you with the ERD and tables to help you with the examples and practice problems in this section.
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
                <Heading>DISTINCT in the SELECT clause</Heading>
                <Divider />
                <Text>
                    One of the most frequent uses of <Code>DISTINCT</Code> is the <Code>SELECT DISTINCT</Code> statement. Let&apos;s return to the student dataset that we used to practice <Code>UNION</Code> operations. Suppose we want to identify each unique academic year in the Spring 2024 semester. If we don&apos;t use <Code>DISTINCT</Code>, we get the following:
                </Text>
                <SQLTerminal
                    title='Non-DISTINCT query'
                    dataset={Dataset}
                    initialQuery={`SELECT academic_year\nFROM Students_Spring2024; `}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                />
                <Text>
                    This result set includes many duplicate values. Why? Because this query simply grabs the entire academic_year column from the Students_Spring2024 table. In other words, the academic year is listed for every student record in Spring 2024, which includes many duplicate academic years. To identify each unique academic year in the Spring 2024 semester, let&apos;s add the <Code>DISTINCT</Code> keyword to our <Code>SELECT</Code> clause:
                </Text>
                <SQLTerminal
                    title='DISTINCT query'
                    dataset={Dataset}
                    initialQuery={`SELECT DISTINCT academic_year\nFROM Students_Spring2024; `}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                />
                <Text>
                    Now our output displays &quot;Freshman&quot;, &quot;Sophomore&quot;, &quot;Junior&quot; and &quot;Senior&quot; only once each, just like we wanted! <Code>DISTINCT</Code> removed the duplicates and only returned the unique values.
                </Text>
                <Text>
                    You can add more fields into the <Code>SELECT DISTINCT</Code> clause too. In this case, let&apos;s return each unique combination of academic year and major for the Spring 2024 semester:
                </Text>
                <SQLTerminal
                    title='DISTINCT with multiple fields'
                    dataset={Dataset}
                    initialQuery={`SELECT DISTINCT academic_year, major\nFROM Students_Spring2024\nORDER BY academic_year;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                />
                <Heading>DISTINCT in the COUNT() function</Heading>
                <Divider />
                <Text>
                    <Code>DISTINCT</Code> is also powerful when used in the aggregate function <Code>COUNT()</Code>. If you need a review of aggregate functions and <Code>GROUP BY</Code>, refer to the Intro to SQL – Part 1 course.
                </Text>
                <Text>
                    Consider this simple example:
                </Text>
                <SQLTerminal
                    title='COUNT() without DISTINCT'
                    dataset={Dataset}
                    initialQuery={`SELECT COUNT(major) AS NumMajors\nFROM Students_Fall2024;   `}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                />
                <Text>
                    This query attempts to count the number of majors among the Fall 2024 student body – however, it returns 25 as the number of majors offered, which we know is incorrect! This is because it is counting every instance of major in the Students_Fall2024 table, which would be 25 (one for each row in the table).
                </Text>
                <Text>
                    To correctly count the number of majors, we need to add the <Code>DISTINCT</Code> keyword:
                </Text>
                <SQLTerminal
                    title='COUNT() without DISTINCT'
                    dataset={Dataset}
                    initialQuery={`SELECT COUNT(DISTINCT major) AS NumMajors\nFROM Students_Fall2024;   `}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                />
                <Text>
                    Now the query removes the duplicates from the major column before counting them, returning the correct answer of four majors.
                </Text>
                <Text>
                    <Code>DISTINCT</Code> is not difficult to use, but new SQL users may overuse <Code>DISTINCT</Code> or forget that it applies to every field in the <Code>SELECT DISTINCT</Code> clause. Like every other SQL concept we have learned, be sure to understand your dataset and determine if <Code>DISTINCT</Code> is appropriate for your query.
                </Text>
                <PracticeDistinct setIsComplete={() => props.setIsComplete(true)} />
                <Text>
                    Great job practicing <Code>DISTINCT</Code> queries! Let&apos;s move on to the last of our new content: the <Code>LIMIT</Code> and <Code>OFFSET</Code> clauses.
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