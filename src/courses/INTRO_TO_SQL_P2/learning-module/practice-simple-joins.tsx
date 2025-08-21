"use client"
import Dataset from '../datasets/owner_and_dog_database.json'

import { useEffect, useState } from "react"
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Code, Text } from "@/components/ui/text";

export function PracticeSimpleJoins({ setIsComplete }: { setIsComplete: () => void }) {
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
                            Show each person with a dog and include the name of their dog(s). Sort the data by Dogname in ascending order. Only include the PersonName and DogName columns (in that order).
                        </Text>
                        <SQLTerminal
                            title='Practice problem 1'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT PersonName, DogName\nFROM Person p\nINNER JOIN Dog d ON p.PersonID = d.OwnerID\nORDER BY DogName ASC;`}
                            explanation={`There are often many ways to answer SQL questions, so your solution may look different than ours and still produce the correct output. An INNER JOIN is required here because the question asks for people with dogs. This means we should only keep records that match on PersonID and OwnerID between the Person and Dog tables, respectively.`}
                            handleFinish={() => setProblemOneComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BDog%2Band%2BOwner%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 2</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Show each dog and their owner&apos;s name. However, still include dogs that have no owner. Sort the data by OwnerID ascending and include the following columns in this order: DogName, OwnerID, and PersonName. Hint: You may use either a LEFT or a RIGHT JOIN for this problem.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 2'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT DogName, OwnerID, PersonName\nFROM Dog d LEFT JOIN Person p ON d.OwnerID = p.PersonID\nORDER BY OwnerID;`}
                            explanation={`The wording of this problem requires a LEFT or RIGHT JOIN to be correct as it wants all dogs whether they have an owner or not. While it doesn’t matter whether you use a LEFT or RIGHT JOIN, you must make sure that the order of fields in the ON clause matches the order of their respective tables in the FROM clause, as shown in the solutions above. You should sort by OwnerID or the results will be ordered differently between LEFT and RIGHT JOIN queries.`}
                            handleFinish={() => setProblemTwoComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BDog%2Band%2BOwner%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
                <Accordian>
                    <AccordianTitle><Text>Practice problem 3</Text></AccordianTitle>
                    <AccordianContent>
                        <Text className='mb-4'>
                            Show each person who does not own a dog. Sort the data by PersonName in ascending order. Include just one column, PersonName.
                        </Text>
                        <Text>
                            Hint: One way to accomplish this is by using a <Code>WHERE</Code> clause with the &quot;IS NULL&quot; operator. Carefully consider which <Code>JOIN</Code> type is appropriate here.
                        </Text>
                        <SQLTerminal
                            title='Practice problem 3'
                            dataset={Dataset}
                            initialQuery={``}
                            validQuery={`SELECT PersonName\nFROM Person p LEFT JOIN Dog d ON p.PersonID = d.OwnerID\nWHERE DogName IS NULL\nORDER BY PersonName;`}
                            explanation={`The intuition of this query may seem tricky at first, so let’s walk through it. First, you want a list of all persons and their dogs if they have them, which we can accomplish through a LEFT JOIN. Then, we want to filter this list to only keep those persons who have NULL in the DogName field, which is accomplished through WHERE DogName IS NULL. It may seem counterintuitive to have to join the dog table when we are looking for persons without dogs – however, we need to join the Dog table to identify which persons to exclude – the dog owners in this case.`}
                            handleFinish={() => setProblemThreeComplete(true)}
                            editable
                            schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BDog%2Band%2BOwner%2Bwhite%2Bbackground.png"
                        />
                    </AccordianContent>
                </Accordian>
            </AccordianGroup>
        </>
    )
}