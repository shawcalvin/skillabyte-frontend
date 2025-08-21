"use client"
import Dataset from '../datasets/student_database.json'

import { useEffect, useState } from "react"
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Code, Text } from "@/components/ui/text";

export function PracticeDistinct({ setIsComplete }: { setIsComplete: () => void }) {
    const [problemOneComplete, setProblemOneComplete] = useState(false)
    const [problemTwoComplete, setProblemTwoComplete] = useState(false)

    useEffect(() => {
        if (problemOneComplete && problemTwoComplete) {
            setIsComplete()
        }
    }, [problemOneComplete, problemTwoComplete])

    return (
        <>
            <AccordianGroup>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 1</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Show each unique GPA earned by students in Fall 2024, sorted in descending order. Your output should only have one column: gpa.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 1'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT DISTINCT gpa\nFROM Students_Fall2024\nORDER BY gpa DESC;`}
                            explanation={`Be sure to only include the column(s) specified in the problem, or DISTINCT may return unexpected results.`}
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
                            Show the total number of unique email addresses among Spring 2024 students. Your output should be a single column named &quot;NumAddresses&quot;.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 2'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT COUNT(DISTINCT email) AS NumAddresses\nFROM Students_Spring2024;`}
                            explanation={`Make sure to use the correct syntax for DISTINCT within the COUNT function.`}
                            handleFinish={() => setProblemTwoComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
            </AccordianGroup>
        </>
    )
}