"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, OrderedList, Strong, Text, UnorderedList } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Summary"} {...props}>
                <Text>
                    In this assignment, you learned how to utilize different types of JOIN clauses to combine related records from multiple tables. You also learned how to stack data using UNION and UNION ALL, and how to filter using DISTINCT, LIMIT, and OFFSET.
                </Text>
                <Text>
                    Before advancing to the graded quiz, it may be helpful to:
                </Text>
                <UnorderedList>
                    <ListItem><Text>Download the student handout for this assignment.</Text></ListItem>
                    <ListItem><Text>Review the vocabulary below</Text></ListItem>
                    <ListItem><Text>Go back to any topics you found tricky</Text></ListItem>
                </UnorderedList>
                <Heading>Vocabulary</Heading>
                <Divider />
                <UnorderedList>
                    <ListItem>
                        <Text>
                            <Strong>Relational database: </Strong>
                            A type of database that stores data in tables connected by defined relationships, typically using primary and foreign keys.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Entity-Relationship Diagram (ERD): </Strong>
                            A visual representation of the structure of a database.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>JOIN: </Strong>
                            A SQL command used to combine data from two or more tables based on a related column.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>INNER JOIN: </Strong>
                            Returns rows with matching values.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>LEFT JOIN: </Strong>
                            Includes all rows from the left table.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>RIGHT JOIN: </Strong>
                            Includes all rows from the right table.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>CROSS JOIN: </Strong>
                            Cartesian product of rows.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>FULL OUTER JOIN: </Strong>
                            All rows from both tables.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>UNION: </Strong>
                            Combines SELECT results, removing duplicates.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>UNION ALL: </Strong>
                            Combines SELECT results, keeping duplicates.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>DISTINCT: </Strong>
                            Removes duplicate results.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>LIMIT: </Strong>
                            Restricts the number of results.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>OFFSET: </Strong>
                            Skips rows before returning results.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>COUNT(): </Strong>
                            Returns the number of rows.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Primary key (PK): </Strong>
                            Uniquely identifies each record.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Foreign key (FK): </Strong>
                            Connects rows in different tables.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Strong>Pagination: </Strong>
                            Splits results into pages.
                        </Text>
                    </ListItem>
                </UnorderedList>
                <Heading>Learning Objectives</Heading>
                <Divider />
                <OrderedList>
                    <ListItem><Text>Understand the structure and purpose of SQL.</Text></ListItem>
                    <ListItem><Text>Learn basic clauses like JOINs, UNIONs, DISTINCT, LIMIT, and OFFSET.</Text></ListItem>
                    <ListItem><Text>Practice querying and interpreting relational data.</Text></ListItem>
                </OrderedList>
                <Text>
                    Click “Begin Quiz” to move on to the graded quiz.
                </Text>
            </ModuleContainer>
        </>
    );
}