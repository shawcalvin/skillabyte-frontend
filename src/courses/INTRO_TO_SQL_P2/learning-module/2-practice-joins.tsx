"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Code, ListItem, Text, TextLink, UnorderedList } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Tab, TabGroup } from "@/components/ui/tab";
import { Image } from "@/components/ui/media";
import { QueryResults } from "@/components/interactive/sql/results";
import { PracticeSimpleJoins } from "./practice-simple-joins";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"Practice - simple JOINs"} isComplete={false} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Intro+to+SQL+(Part+2)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries.
                </Text>
                <Text>
                    Now that we&apos;ve learned about the different types of <Code>JOIN</Code>s, let&apos;s apply our knowledge with some practice problems. This section uses the same database with the dogs and owners tables. Since it is good practice to reference the ERD and tables while you query, we have included these again:
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
                <Heading>How to use the practice question terminals</Heading>
                <Text>
                    Type your SQL code into the black text box. Press &quot;Run&quot; to run the query and see the output or error message. After running, press &quot;Submit&quot; to see if your query is correct and receive AI feedback (note that if you change your code between pressing &quot;Run&quot; and &quot;Submit&quot;, your score and AI feedback will reflect the most recent code that you have ran, not written). The correct answer and an explanation will appear after you have pressed &quot;Submit&quot; twice or submitted the correct code, whichever comes first.
                </Text>
                <PracticeSimpleJoins setIsComplete={() => props.setIsComplete(true)} />
                <Heading>Additional practice</Heading>
                <Text>
                    If you would like additional practice (this is not required), the following pages discuss different JOINs and contain more examples:
                </Text>
                <UnorderedList>
                    <ListItem><TextLink href="https://www.w3schools.com/sql/sql_join.asp">https://www.w3schools.com/sql/sql_join.asp</TextLink></ListItem>
                    <ListItem><TextLink href="https://www.w3schools.com/sql/sql_join_inner.asp">https://www.w3schools.com/sql/sql_join_inner.asp</TextLink></ListItem>
                    <ListItem><TextLink href="https://www.w3schools.com/sql/sql_join_left.asp">https://www.w3schools.com/sql/sql_join_left.asp</TextLink></ListItem>
                    <ListItem><TextLink href="https://www.w3schools.com/sql/sql_join_right.asp">https://www.w3schools.com/sql/sql_join_right.asp</TextLink></ListItem>
                </UnorderedList>
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