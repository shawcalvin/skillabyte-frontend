"use client"
import Dataset from '../datasets/student_database.json'

import { useEffect, useState } from "react"
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Text } from "@/components/ui/text";

export function PracticeLimitOffset({ setIsComplete }: { setIsComplete: () => void }) {
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
                            Find the 3 students with the lowest GPAs in Spring 2024. Your output should only have two columns: full_name and gpa (in that order).
                        </Text>
                        <SQLTerminal
                            title='Practice problem 1'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT full_name, gpa\nFROM Students_Spring2024\nORDER BY gpa ASC\nLIMIT 3;`}
                            explanation={`Exercise caution when choosing how to sort using ORDER BY before using LIMIT, as this will change which rows are kept. For example, if you inadvertently sorted by gpa in descending order, LIMIT 3 would have returned the three students with the highest gpas instead.`}
                            handleFinish={() => setProblemOneComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 2a</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Return the first page of data for Fall 2024, assuming that a page is 8 rows of data. Sort by student ID ascending. Your output should include all fields in the Students_Fall2024 table.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 2a'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT *\nFROM Students_Fall2024\nORDER BY student_id\nLIMIT 8;`}
                            explanation={`Since we are returning page 1, we have no need for OFFSET as we aren’t skipping any rows.`}
                            handleFinish={() => setProblemTwoComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 2b</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Display the second page of data for Fall 2024, assuming that a page is 8 rows of data. Sort by student ID ascending. Your output should include all fields in the Students_Fall2024 table.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 2b'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT *\nFROM Students_Fall2024\nORDER BY student_id\nLIMIT 8\nOFFSET 8;`}
                            explanation={`Since we are returning page 2, we need to skip the first 8 rows (which belong to page 1) using OFFSET 8 and then return the next 8 rows using LIMIT 8.`}
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