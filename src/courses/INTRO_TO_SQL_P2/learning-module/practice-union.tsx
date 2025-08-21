"use client"
import Dataset from '../datasets/student_database.json'

import { useEffect, useState } from "react"
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Code, Text } from "@/components/ui/text";

export function PracticeUnion({ setIsComplete }: { setIsComplete: () => void }) {
    const [problemOneComplete, setProblemOneComplete] = useState(false)
    const [problemTwoComplete, setProblemTwoComplete] = useState(false)
    const [problemThreeComplete, setProblemThreeComplete] = useState(false)

    useEffect(() => {
        if (problemOneComplete && problemTwoComplete && problemThreeComplete) {
            setIsComplete()
        }
    }, [problemOneComplete, problemTwoComplete, problemThreeComplete])

    return (
        <>
            <AccordianGroup>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 1</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            List all student email addresses from both semesters (Spring and Fall), removing any duplicates. Sort the results by email in ascending order. Your output should only have one column: email.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 1'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT email\nFROM Students_Spring2024\nUNION\nSELECT email\nFROM Students_Fall2024\nORDER BY email;`}
                            explanation={`Remember that UNION removes duplicates while UNION ALL keeps them. In this case, the problem asks that we remove duplicates, so UNION is required.`}
                            handleFinish={() => setProblemOneComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 2</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Show all student records who are freshman in either Spring 2024 or Fall 2024. Keep duplicates if the same student appears as a freshman in both tables. Sort by full_name in alphabetical order. You should include the following columns in this order: full_name, major, academic_year, and gpa.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 2'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT full_name, major, academic_year, gpa\nFROM Students_Spring2024\nWHERE academic_year = 'Freshman'\nUNION ALL\nSELECT full_name, major, academic_year, gpa\nFROM Students_Fall2024\nWHERE academic_year = 'Freshman'\nORDER BY full_name;`}
                            explanation={`Since we are keeping duplicates, UNION ALL is required. However, you may notice that in this case, UNION yields the same output as UNION ALL. Why? Well, there are no students who appear as Freshmen in both semesters because they’ve all moved on to being sophomores! UNION and UNION ALL won’t always yield the same results, though, so be careful to use the correct union type for your query.`}
                            handleFinish={() => setProblemTwoComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 3</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Display the name of each unique major that students have declared in the Spring or Fall 2024 semesters. Sort your output by major in alphabetical order. Only include one column: major.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 3'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT major\nFROM Students_Spring2024\nUNION\nSELECT major\nFROM Students_Fall2024\nORDER BY major;`}
                            explanation={`This problem is relatively straightforward; make sure to read the problem carefully and select the correct fields, UNION type, and field to sort by.`}
                            handleFinish={() => setProblemThreeComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
            </AccordianGroup>
        </>
    )
}