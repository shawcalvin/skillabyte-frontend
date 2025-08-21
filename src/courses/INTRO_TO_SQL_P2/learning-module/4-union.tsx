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
import { CodeEditor } from "@/components/ui/code";
import { PracticeUnion } from './practice-union';

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"UNION and UNION ALL statements"} isComplete={false} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Intro+to+SQL+(Part+2)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries.
                </Text>
                <Text>
                    In the last two sections, we focused on <Code>JOIN</Code>s. In this section, we will learn how to combine data in a different way through a <Code>UNION</Code> set operation.
                </Text>
                <Heading>The dataset for this section</Heading>
                <Divider />
                <Text>
                    For this section, we will use a new dataset containing student data. One table records students for the Spring 2024 semester and the other records students for the Fall 2024 semester. Notice that the tables are not connected to each other and that the tables have identical fields, making them suitable for unions.
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
                <Heading>What are unions?</Heading>
                <Divider />
                <Text>
                    A <Code>UNION</Code> is a different way of combining data. Instead of connecting data using a <Code>JOIN</Code>, a <Code>UNION</Code> &quot;stacks&quot; data. Microsoft describes a <Code>UNION</Code> as the following:
                </Text>
                <Text>
                    &quot;The <Code>UNION</Code> operator lets you combine two <Code>SELECT</Code> statements into one. The <Code>SELECT</Code> statements that you combine must have the same number of output fields, in the same order, and with the same or compatible data types. When you run the query, data from each set of corresponding fields is combined into one output field, so that the query output has the same number of fields as each of the select statements.&quot;
                </Text>
                <Text>
                    The image below shows two tables, Facebook and LinkedIn, and how you can use a <Code>UNION</Code> to stack the results in one of two ways: <Code>UNION</Code> or <Code>UNION ALL</Code>.
                </Text>
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/UNION%2Band%2BUNION%2BALL.png"
                            alt="UNION ALL Diagram"
                            className="rounded-lg my-8"
                            center
                        />
                    </div>
                </div>
                <Text>
                    Let&apos;s learn the difference between <Code>UNION</Code> and <Code>UNION ALL</Code> and how to use them in queries.
                </Text>
                <Heading>UNION</Heading>
                <Divider />
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/UNION.png"
                            alt="Office Nook ERD Diagram"
                            className="rounded-lg my-8"
                            center
                        />
                    </div>
                </div>
                <Text>
                    A <Code>UNION</Code> combines and keeps unique values from two datasets. The basic SQL syntax for a <Code>UNION</Code> query is as follows:
                </Text>
                <CodeEditor
                    language="sql"
                    title="UNION syntax"
                    value={`SELECT field_1\nFROM table_1\nUNION\nSELECT field_a\nFROM table_a;`}
                />
                <Text>
                    Let&apos;s consider a <Code>UNION</Code> example using our student dataset. To generate a list of all unique students between semesters (removing duplicate students), we would run the following query:
                </Text>
                <SQLTerminal
                    title='Simple UNION query'
                    dataset={Dataset}
                    initialQuery={`SELECT full_name FROM Students_Spring2024\nUNION\nSELECT full_name FROM Students_Fall2024;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                />
                <Text>
                    In this query, the <Code>UNION</Code> operator first combines the results together by stacking them into a single dataset. Since the <Code>UNION</Code> automatically removes duplicate rows, any student who is registered in both semesters will only appear once in the final output.
                </Text>
                <Text>
                    Just like any other query, <Code>UNION</Code> queries can be sorted using <Code>ORDER BY</Code>. Let&apos;s sort the query we just did in alphabetical order:
                </Text>
                <SQLTerminal
                    title='Simple UNION query sorted'
                    dataset={Dataset}
                    initialQuery={`SELECT full_name FROM Students_Spring2024\nUNION\nSELECT full_name FROM Students_Fall2024\nORDER BY full_name;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                />
                <Text>
                    A common mistake with the <Code>UNION</Code> operator is including columns that we do not need, which will change how the <Code>UNION</Code> filters the output. Continuing our previous example, let&apos;s suppose we mistakenly included the academic_year column with the full_name column. Run the query and see how many duplicate student names are kept in the output:
                </Text>
                <SQLTerminal
                    title='Incorrect UNION query'
                    dataset={Dataset}
                    initialQuery={`SELECT full_name, academic_year FROM Students_Spring2024\nUNION\nSELECT full_name, academic_year FROM Students_Fall2024\nORDER BY full_name; `}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                />
                <Text>
                    While the query still ran, the <Code>UNION</Code> operator failed to remove duplicate students. Why? This is because the <Code>UNION</Code> operator removes duplicates rows - if even one value in a column is different between rows, then they are not considered duplicates and won&apos;t be removed. In this case, <Code>UNION</Code> did not remove the duplicate students because their academic year changed between semesters (i.e., freshmen became sophomores, sophomores became juniors, and juniors became seniors)!
                </Text>
                <Text>
                    Exercise caution when deciding which columns to include in your <Code>UNION</Code> operations. Study the ERD and tables for the dataset that you are querying to more effectively utilize <Code>UNION</Code> operations.
                </Text>
                <Heading>UNION ALL</Heading>
                <Divider />
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/UNION%2BALL.png"
                            alt="Office Nook ERD Diagram"
                            className="rounded-lg my-8"
                            center
                        />
                    </div>
                </div>
                <Text><Code>UNION ALL</Code> combines and keeps all values, even if there are duplicates. The basic SQL syntax for a <Code>UNION ALL</Code> query is as follows:</Text>
                <CodeEditor
                    language="sql"
                    title="UNION syntax"
                    value={`SELECT field_1\nFROM table_1\nUNION ALL\nSELECT field_a\nFROM table_a;`}
                />
                <Text>
                    Returning to the student database, let&apos;s suppose we want to list each student and their GPA from both semesters. In this case, we don&apos;t care if there are duplicate student-GPA pairs, so we can use a <Code>UNION ALL</Code> to keep every record:
                </Text>
                <SQLTerminal
                    title='UNION ALL query'
                    dataset={Dataset}
                    initialQuery={`SELECT full_name, gpa\nFROM Students_Spring2024\nUNION ALL\nSELECT full_name, gpa\nFROM Students_Fall2024;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                />
                <Text>
                    You can use <Code>ORDER BY</Code> to sort <Code>UNION ALL</Code> queries, just like we did with the <Code>UNION</Code> queries. Let&apos;s sort the query we just did in alphabetical order so we can more easily see the duplicates we intentionally kept in our dataset:
                </Text>
                <SQLTerminal
                    title='Sorted UNION ALL query'
                    dataset={Dataset}
                    initialQuery={`SELECT full_name, gpa\nFROM Students_Spring2024\nUNION ALL\nSELECT full_name, gpa\nFROM Students_Fall2024\nORDER BY full_name;`}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                />
                <Text>
                    This dataset is getting more readable! However, sometimes it is nice to know which table a given row originated from. In the output we just created, we don&apos;t know whether each student-GPA combo is from Spring 2024 or Fall 2024. This can be easily remedied by creating a new column with a static value, as follows:
                </Text>
                <SQLTerminal
                    title='Labelled UNION ALL query'
                    dataset={Dataset}
                    initialQuery={`SELECT full_name, gpa, "Spring 2024" AS semester\nFROM Students_Spring2024\nUNION ALL\nSELECT full_name, gpa, "Fall 2024" AS semester\nFROM Students_Fall2024\nORDER BY full_name;  `}
                    schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                />
                <Text>
                    Static columns are extremely useful for labelling the tables before you use a <Code>UNION</Code> operation. Feel free to experiment adding your own columns in the practice problems below!
                </Text>
                <PracticeUnion setIsComplete={() => props.setIsComplete(true)} />
                <Heading>Additional Practice</Heading>
                <Divider />
                <Text>If you would like additional practice (this is not required), the following page talks about UNION operations: <TextLink href='https://www.w3schools.com/sql/sql_union.asp'>https://www.w3schools.com/sql/sql_union.asp</TextLink></Text>
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