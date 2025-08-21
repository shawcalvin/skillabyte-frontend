import CustomerDataset from '../datasets/customers.json'

import { SQLTerminal } from "@/components/interactive/sql/terminal";
import { Accordian, AccordianContent, AccordianGroup, AccordianTitle } from "@/components/ui/accordian";
import { Text } from "@/components/ui/text";
import { useEffect, useState } from "react";


export function PracticeHaving({ setIsComplete }: { setIsComplete: () => void }) {
    const [practiceOneComplete, setPracticeOneComplete] = useState(false);
    const [practiceTwoComplete, setPracticeTwoComplete] = useState(false);
    const [practiceThreeComplete, setPracticeThreeComplete] = useState(false);

    useEffect(() => {
        if (practiceOneComplete && practiceTwoComplete && practiceThreeComplete) {
            setIsComplete()
        }
    }, [practiceOneComplete, practiceTwoComplete, practiceThreeComplete])

    return (
        <AccordianGroup>
            <Accordian>
                <AccordianTitle>Practice Problem 1</AccordianTitle>
                <AccordianContent>
                    <Text className="mb-4">
                        List the average credit score for each type of contract preference. Only show contract preferences with averages greater than 700. Your output should contain the ContactPref and AvgCreditScore columns (in that order).
                    </Text>
                    <SQLTerminal
                        title='Practice Problem 1: Avg Credit Score by Contact Preference'
                        dataset={CustomerDataset}
                        validQuery={
                            `SELECT c.ContactPref, AVG(c.CreditScore) AS AvgCreditScore\nFROM Customer AS c\nGROUP BY c.ContactPref\nHAVING AVG(c.CreditScore) > 700; `
                        }
                        explanation="For this problem, you must use HAVING instead of WHERE because we are filtering by an aggregated field AVG(c.CreditScore). Also, note how the Email contact preference was filtered out because its average credit score was not greater than 700."
                        handleFinish={() => setPracticeOneComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
            <Accordian>
                <AccordianTitle>Practice Problem 2</AccordianTitle>
                <AccordianContent>
                    <Text className="mb-4">
                        Create a list of the preferred contact preference for customers in each city, along with a count of individuals for that preference. Only show preferences that have more than one customer with that preferred contact preference. Sort the data by contact preference (ascending) and then the number of responses (descending). Include the following columns in your output: ContactPref, City, and Responses (in that order).
                    </Text>
                    <SQLTerminal
                        title='Practice problem 2: Count by contact preference'
                        dataset={CustomerDataset}
                        validQuery={
                            `SELECT c.ContactPref, c.City, COUNT(c.CustID) as Responses\nFROM Customer AS c\nGROUP BY c.ContactPref, c.City\nHAVING COUNT(c.CustID) >1\nORDER BY c.ContactPref, COUNT(c.CustID) DESC;`
                        }
                        explanation="We count CustID so that null values do not complicate our results. Also, you must include c.ContactPref and c.City in the GROUP BY clause since they are both listed in the SELECT clause."
                        handleFinish={() => setPracticeTwoComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
            <Accordian>
                <AccordianTitle>Practice Problem 3</AccordianTitle>
                <AccordianContent>
                    <Text className="mb-4">
                        List the states and cities where the largest credit score is greater than or equal to 800 and the largest credit limit is greater than 10,000. Sort the data by state (descending) and city (ascending). Include the following columns in your output: State, City, MaxCreditScore, and MaxCreditLimit (in that order).
                    </Text>
                    <SQLTerminal
                        title='Practice Problem 3: States and Cities with Criteria'
                        dataset={CustomerDataset}
                        validQuery={
                            `SELECT c.State, c.City, MAX(c.CreditScore) AS MaxCreditScore, MAX(c.CreditLimit) AS MaxCreditLimit\nFROM Customer AS c\nGROUP BY c.State, c.City\nHAVING MAX(c.CreditScore) >= 800 AND MAX(c.CreditLimit) > 10000\nORDER BY c.State DESC, c.City; `
                        }
                        explanation="The correct answer really was zero rows! This isn’t a trick - null result sets are real. As you continue practicing SQL, you will gain confidence that sometimes the right answer is null. One way to check your answer is to remove the HAVING clause, run the query, and visually check if your answer makes sense (manually sorting your dataset can also help in this regard, at least with small datasets)."
                        handleFinish={() => setPracticeThreeComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
            <Accordian>
                <AccordianTitle>Practice Problem 4</AccordianTitle>
                <AccordianContent>
                    <Text className="mb-4">
                        Create a list of states showing the average amount of TotalOrdered for customers who have the letter “i” in their name and whose state average for these customers is not equal to $27,500. Your output should only contain two columns: State and AvgOrdered (in that order). Hint: The key to this question is putting the correct criteria in the WHERE and HAVING clauses. You need to filter out the customers without the letter “i” in their name before you compute any averages. Then, after the aggregation, you need to filter out the states that have average total orders equaling $27,500 (using != to represent “not equals”).
                    </Text>
                    <SQLTerminal
                        title='Practice problem 4: challenge'
                        dataset={CustomerDataset}
                        validQuery={
                            `SELECT c.State, AVG(c.TotalOrdered) as AvgOrdered\nFROM Customer AS c\nWHERE c.Name LIKE "%i%"\nGROUP BY c.State\nHAVING AVG(c.TotalOrdered) != 27500; `
                        }
                        explanation='Make sure to include a wildcard (%) before and after the “i” in the WHERE statement. LIKE "i%" would only include names that start with i and LIKE "%i" would only include names that end with i.'
                        handleFinish={() => setPracticeOneComplete(true)}
                        editable
                        schema="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Customer.png"
                    />
                </AccordianContent>
            </Accordian>
        </AccordianGroup>
    )
}