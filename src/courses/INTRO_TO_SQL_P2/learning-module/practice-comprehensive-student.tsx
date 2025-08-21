"use client"
import Dataset from '../datasets/student_database.json'

import { useEffect, useState } from "react"
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Text } from "@/components/ui/text";

export function PracticeComprehesiveStudent({ setIsComplete }: { setIsComplete: () => void }) {
    const [problemOneComplete, setProblemOneComplete] = useState(false)
    const [problemTwoComplete, setProblemTwoComplete] = useState(false)
    const [problemThreeComplete, setProblemThreeComplete] = useState(false)
    const [problemFourComplete, setProblemFourComplete] = useState(false)

    useEffect(() => {
        if (problemOneComplete && problemTwoComplete && problemThreeComplete && problemFourComplete) {
            setIsComplete()
        }
    }, [problemOneComplete, problemTwoComplete, problemThreeComplete, problemFourComplete])

    return (
        <>
            <AccordianGroup>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 6</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Display a list of all unique student names from both Spring 2024 and Fall 2024, combined. Sort the results by full_name in ascending order. Your output should only have one column: full_name.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 6'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT full_name\nFROM Students_Spring2024\nUNION\nSELECT full_name\nFROM Students_Fall2024\nORDER BY full_name;`}
                            explanation={`UNION is needed for this problem as you are asked to only include unique student names (removing duplicates). UNION ALL would keep these duplicates and result in a different output.`}
                            handleFinish={() => setProblemOneComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 7</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Combine the email addresses from both semesters, including duplicates if an email appears in both tables. Sort by email ascending. Your output should only have one column: email.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 7'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT email\nFROM Students_Spring2024\nUNION ALL\nSELECT email\nFROM Students_Fall2024\nORDER BY email;`}
                            explanation={`This problem requires UNION ALL to include duplicate email addresses.`}
                            handleFinish={() => setProblemTwoComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 8</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Display all distinct academic_year values from Fall 2024. Sort the results in ascending (alphabetical) order. Your output should only have one column: academic_year.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 8'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT DISTINCT academic_year\nFROM Students_Fall2024\nORDER BY academic_year;`}
                            explanation={`You may have been tempted to try and use a UNION for this problem – however, you are not stacking two datasets here. Since you are only using one dataset, you should use DISTINCT to remove duplicate academic years.`}
                            handleFinish={() => setProblemThreeComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 9</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Imagine you’re showing the Spring 2024 students in “pages” of 5 records each, sorted by full_name in ascending order. Show the second “page” of results with your columns as student_id, full_name, and email (in that order).
                        </Text>
                        <SQLTerminal
                            title='Practice problem 9'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT student_id, full_name, email\nFROM Students_Spring2024\nORDER BY full_name\nLIMIT 5\nOFFSET 5;`}
                            explanation={`OFFSET 5 skips the first 5 rows of data (the first page) and LIMIT 5 returns the next 5 rows.`}
                            handleFinish={() => setProblemFourComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
            </AccordianGroup>
        </>
    )
}