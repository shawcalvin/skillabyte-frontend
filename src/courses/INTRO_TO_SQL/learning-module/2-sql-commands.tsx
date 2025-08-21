"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Code, ListItem, OrderedList, Strong, Text, UnorderedList } from "@/components/ui/text";
import { Image } from "@/components/ui/media";
import { Heading } from "@/components/ui/heading";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"What are SQL clauses and commands?"} {...props}>
                <Text>
                    A SQL clause is part of a statement that specifies a particular condition or operation within a database query. Clauses include instructions that query, or gather, the data you are looking for within a database. Some foundational clauses include:
                </Text>
                <UnorderedList>
                    <ListItem><Code>SELECT</Code></ListItem>
                    <ListItem><Code>FROM</Code></ListItem>
                    <ListItem><Code>JOIN</Code></ListItem>
                    <ListItem><Code>WHERE</Code></ListItem>
                    <ListItem><Code>GROUP BY</Code></ListItem>
                    <ListItem><Code>HAVING</Code></ListItem>
                    <ListItem><Code>ORDER BY</Code></ListItem>
                </UnorderedList>
                <Text>
                    Note: This is the order in which the clauses are usually written, but differs from how they are executed, as we will explain later in the course.
                </Text>
                <Text>
                    SQL commands consist of one or more clauses (typically written in all caps for clarity) and provide instructions to the database system on how to perform specific tasks, such as querying, modifying, or managing data. Commands like <Code>SELECT</Code>, <Code>INSERT</Code>, and <Code>UPDATE</Code> each have unique purposes, and their functionality is extended by clauses such as <Code>FROM</Code>, <Code>WHERE</Code>, <Code>GROUP BY</Code>, and <Code>HAVING</Code>. The graphic below illustrates the main functions of some of the more common commands and provides example code that completes each command with its respective clauses.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/Basic+SQL+Commands+Graphic+2.0.png"
                    alt="Basic SQL Commands"
                    size="800px"
                    className="rounded-lg my-8"
                    center
                />
                <Text>
                    To understand how to properly write queries, we need to understand the requirements and limitations of the database software that will run our queries. A database management system (DBMS) is software that creates, manages, and interacts with databases to facilitate organized and efficient data storage, retrieval, and administration. Throughout this course, we will explain the best coding practices to work with DBMS engines.
                </Text>
                <Text>
                    For starters, SQL clauses are typically written in all caps, though DBMS engines do not require capitalization (for example, we use “SELECT” instead of “Select” or “select” in this course). It is a good practice to always use capitalization as it helps distinguish a SQL clause from table names and other data elements. Additionally, names and entities in tables typically use initial caps (e.g., FirstName), though many database engines ignore cases when referencing table and field names. While most SQL clauses work in all DBMS engines, each engine has differences from the core SQL language. We’ll note these differences as we go along.
                </Text>
                <Text>
                    Now let’s talk about the order in which these SQL clauses are executed.
                </Text>
                <Heading>Order of execution</Heading>
                <Text>
                    SQL clauses are executed in a specific order, which is important to understand when writing effective and efficient queries. Here is a list of the order in which SQL clauses are executed when running a <Code>SELECT</Code> clause and a high-level description of what each clause does. We’ll talk more in depth about each of these later in this course or in later courses.
                </Text>
                <OrderedList>
                    <ListItem>
                        <Code>FROM</Code> (including <Code>JOIN</Code>): Identifies the source tables and establishes the dataset for subsequent operations by combining tables if necessary.
                    </ListItem>
                    <ListItem>
                        <Code>WHERE</Code>: Filters rows from the dataset based on specified conditions, reducing the initial data.
                    </ListItem>
                    <ListItem>
                        <Code>GROUP BY</Code>: Groups the filtered data into subsets based on specified columns, preparing it for aggregation.
                    </ListItem>
                    <ListItem>
                        <Code>HAVING</Code>: Filters aggregated data based on conditions applied to aggregate functions.
                    </ListItem>
                    <ListItem>
                        <Code>SELECT</Code>: Specifies the columns or expressions to be included in the final output.
                    </ListItem>
                    <ListItem>
                        <Code>DISTINCT</Code>: Removes duplicate rows from the selected data.
                    </ListItem>
                    <ListItem>
                        <Code>ORDER BY</Code>: Sorts the final result set based on specified columns and sorting directions.
                    </ListItem>
                    <ListItem>
                        <Code>LIMIT</Code> (or <Code>OFFSET</Code>): Restricts the number of rows returned (and optionally skips a specified number of rows).
                    </ListItem>
                </OrderedList>
                <Text>
                    Note that the order of execution differs from the syntax order — the order in which the clauses are written in the query. For example, the <Code>SELECT</Code> clause is written first when writing SQL queries (as shown in the Basic SQL commands graphic) but is executed fifth. Overall, many queries only use a few of the execution steps above.
                </Text>
                <Text>
                    In this course, we will focus on the <Code>SELECT</Code>, <Code>FROM</Code> (partially), <Code>WHERE</Code>, <Code>GROUP BY</Code>, <Code>HAVING</Code>, and <Code>ORDER BY</Code> clauses. In the Skillabyte Introduction to SQL – Part 2 course, you will learn more about <Code>FROM</Code> (including <Code>JOINS</Code>) and the remaining clauses. Click “Next” to begin with the <Code>SELECT</Code> and <Code>FROM</Code> clauses.
                </Text>
            </ModuleContainer>
        </>
    );
}