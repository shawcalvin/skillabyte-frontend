"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Code, ListItem, OrderedList, Text, TextLink } from "@/components/ui/text";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Conclusion"} isFinished={true} {...props}>
                <Text>
                    Let’s revisit the order of execution with a bit more discussion now that you have studied each of the different commands and clauses.
                </Text>
                <OrderedList>
                    <ListItem>
                        <Text>
                            <Code>FROM</Code> clause, including JOIN – SQL must first know the source of the data and how to combine it (more on joining will come in the next lesson).
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Code>WHERE</Code> clause – After getting the data, SQL filters out the rows that are not needed for the rest of the query.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Code>GROUP BY</Code> clause – With the filtered dataset, SQL can now make any aggregations that need to take place (with the appropriate fields in the SELECT clause).
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Code>HAVING</Code> clause – With the data aggregated, SQL can perform another filter of rows based on the aggregated data.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Code>SELECT</Code> clause – The dataset is finalized, and SQL now allows you to specify the columns you will display. While SELECT is presented first when writing SQL syntax, the actual clause is executed later after the final dataset is created.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text>
                            <Code>ORDER BY</Code> clause – After the dataset is created, including headers, you specify the sort order of the final data.
                        </Text>
                    </ListItem>
                </OrderedList>
                <Text>
                    The order of execution and other helpful concepts are summarized on the handout for this lesson, which you can find <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/Intro+to+SQL+(Part+1)+-+Handout.docx" download>here</TextLink>.
                </Text>
                <Text>
                    The best way to learn SQL is to practice. Making sure you understand the basics covered in this lecture will help you more easily progress to more advanced queries.
                </Text>
            </ModuleContainer>
        </>
    );
}