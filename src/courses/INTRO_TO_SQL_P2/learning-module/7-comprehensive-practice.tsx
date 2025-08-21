"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text, TextLink } from "@/components/ui/text";
import { Tab, TabGroup } from "@/components/ui/tab";
import { Image } from "@/components/ui/media";
import { QueryResults } from "@/components/interactive/sql/results";
import { Heading } from "@/components/ui/heading";
import { PracticeComprehensiveOffice } from "./practice-comprehensive-office";
import { useEffect, useState } from "react";
import { PracticeComprehesiveStudent } from "./practice-comprehensive-student";

export default function ModulePage(props: LearningModulePageProps) {
    const [problemOneComplete, setProblemOneComplete] = useState(false)
    const [problemTwoComplete, setProblemTwoComplete] = useState(false)

    useEffect(() => {
        if (problemOneComplete && problemTwoComplete) {
            props.setIsComplete(true)
        }
    }, [problemOneComplete, problemTwoComplete])

    return (
        <>
            <ModuleContainer title={"Comprehensive practice problems"} isComplete={false} {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/Intro+to+SQL+(Part+2)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries.
                </Text>
                <Text>
                    Apply your SQL skills with the following practice problems! Like the quiz, the practice problems are grouped by which dataset is being used (OfficeNook or Student). We again include the ERDs and tables for your reference as you write your queries.
                </Text>
                <Heading>OfficeNookCo Database Layout</Heading>
                <TabGroup>
                    <Tab title="ERD">
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BOfficeNook%2BCo%2Bwhite%2Bbackground.png"
                            alt="Office Nook ERD Diagram"
                            size="800px"
                            className="rounded-lg my-8"
                            center
                        />
                    </Tab>
                    <Tab title="Customers Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Customers table</Heading>
                                <QueryResults
                                    results={customerTable}
                                />
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Orders Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Orders table</Heading>
                                <QueryResults
                                    results={orderTable}
                                />
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Order Details Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Order Details table</Heading>
                                <QueryResults
                                    results={orderDetailsTable}
                                />
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Products Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Products table</Heading>
                                <QueryResults
                                    results={productsTable}
                                />
                            </div>
                        </div>
                    </Tab>
                </TabGroup>
                <PracticeComprehensiveOffice setIsComplete={() => setProblemOneComplete(true)} />
                <Heading>Student Database Layout</Heading>
                <TabGroup>
                    <Tab title="ERD">
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql-2/ERD%2B-%2BStudentDataset%2Bwhite%2Bbackground.png"
                            alt="Student ERD Diagram"
                            size="800px"
                            className="rounded-lg my-8"
                            center
                        />
                    </Tab>
                    <Tab title="Students_Spring2024 Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Students_Spring2024 table</Heading>
                                <QueryResults
                                    results={studentSpring2024Table}
                                />
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Students_Fall2024 Table">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Students_Fall2024 table</Heading>
                                <QueryResults
                                    results={studentFall2024Table}
                                />
                            </div>
                        </div>
                    </Tab>
                </TabGroup>
                <PracticeComprehesiveStudent setIsComplete={() => setProblemTwoComplete(true)} />
                <Text>
                    Click &quot;Next&quot; to advance to the assignment summary followed by the graded quiz.
                </Text>
            </ModuleContainer>
        </>
    );
}

const customerTable = [
    {
        columns: ["CustomerID", "FirstName", "LastName", "Email", "City", "State"],
        values: [
            ["1", "Amara", "Okafor", "amara.okafor@email.com", "New York", "NY"],
            ["2", "Hiroshi", "Tanaka", "hiroshi.tanaka@email.com", "Chicago", "IL"],
            ["3", "Fatima", "Hassan", "fatima.hassan@email.com", "Boston", "MA"],
            ["4", "Carlos", "Gomez", "carlos.gomez@email.com", "Miami", "FL"],
            ["5", "Aisha", "Nguyen", "aisha.nguyen@email.com", "Seattle", "WA"],
            ["6", "Santiago", "Morales", "santiago.morales@email.com", "Austin", "TX"],
            ["7", "Lila", "Patel", "lila.patel@email.com", "Denver", "CO"],
            ["8", "Yuki", "Kobayashi", "yuki.kobayashi@email.com", "San Francisco", "CA"],
            ["9", "Jamal", "Ali", "jamal.ali@email.com", "Phoenix", "AZ"],
            ["10", "Maria", "Fernandez", "maria.fernandez@email.com", "Orlando", "FL"],
            ["11", "Chinelo", "Adesanya", "chinelo.adesanya@email.com", "Houston", "TX"],
            ["12", "Jonas", "Johansson", "jonas.johansson@email.com", "Portland", "OR"],
            ["13", "Mei", "Chen", "mei.chen@email.com", "Dallas", "TX"],
            ["14", "Liam", "Murphy", "liam.murphy@email.com", "Atlanta", "GA"],
            ["15", "Anika", "Sharma", "anika.sharma@email.com", "Nashville", "TN"],
            ["16", "Kwame", "Boateng", "kwame.boateng@email.com", "Raleigh", "NC"],
            ["17", "Leila", "Karimi", "leila.karimi@email.com", "San Diego", "CA"],
            ["18", "Noah", "Park", "noah.park@email.com", "Pittsburgh", "PA"],
            ["19", "Sofia", "Martinez", "sofia.martinez@email.com", "Las Vegas", "NV"],
            ["20", "Zain", "Khan", "zain.khan@email.com", "Minneapolis", "MN"],
        ],
    },
];

const orderTable = [
    {
        columns: ["OrderID", "CustomerID", "OrderDate", "ShipCity", "ShipState"],
        values: [
            ["101", "1", "2024-01-10", "New York", "NY"],
            ["102", "2", "2024-01-15", "Chicago", "IL"],
            ["103", "3", "2024-01-20", "Boston", "MA"],
            ["104", "4", "2024-01-22", "Miami", "FL"],
            ["105", "5", "2024-01-25", "Seattle", "WA"],
            ["106", "6", "2024-01-30", "Austin", "TX"],
            ["107", "7", "2024-02-01", "Denver", "CO"],
            ["108", "1", "2024-02-10", "New York", "NY"],
            ["109", "10", "2024-02-15", "Orlando", "FL"],
            ["110", "12", "2024-02-20", "Portland", "OR"],
            ["111", "13", "2024-02-25", "Dallas", "TX"],
            ["112", "14", "2024-03-01", "Atlanta", "GA"],
            ["113", "17", "2024-03-05", "San Diego", "CA"],
            ["114", "18", "2024-03-10", "Pittsburgh", "PA"],
            ["115", "19", "2024-03-15", "Las Vegas", "NV"],
            ["116", "8", "2024-03-20", "San Francisco", "CA"],
            ["117", "11", "2024-03-25", "Houston", "TX"],
            ["118", "15", "2024-04-01", "Nashville", "TN"],
            ["119", "20", "2024-04-05", "Minneapolis", "MN"],
        ],
    },
];

const orderDetailsTable = [
    {
        columns: ["OrderID", "ProductID", "Quantity"],
        values: [
            ["101", "1", "1"],
            ["101", "2", "2"],
            ["102", "3", "1"],
            ["103", "4", "1"],
            ["105", "5", "2"],
            ["105", "6", "1"],
            ["107", "1", "1"],
            ["107", "8", "4"],
            ["108", "2", "3"],
            ["110", "4", "1"],
            ["111", "3", "2"],
            ["112", "7", "1"],
            ["114", "8", "1"],
            ["115", "6", "1"],
            ["118", "5", "1"],
            ["119", "2", "3"],
        ],
    },
];

const productsTable = [
    {
        columns: ["ProductID", "ProductName", "Category", "Price", "StockQuantity"],
        values: [
            ["1", "Laptop", "Electronics", "1000.00", "15"],
            ["2", "Smartphone", "Electronics", "500.00", "25"],
            ["3", "Desk Chair", "Furniture", "120.00", "50"],
            ["4", "Office Desk", "Furniture", "300.00", "10"],
            ["5", "Monitor", "Electronics", "200.00", "30"],
            ["6", "Printer", "Electronics", "150.00", "20"],
            ["7", "Bookshelf", "Furniture", "100.00", "5"],
            ["8", "Keyboard", "Accessories", "50.00", "40"],
            ["9", "Mousepad", "Accessories", "20.00", "40"],
        ],
    },
];

const studentSpring2024Table = [
    {
        columns: ["student_id", "full_name", "major", "academic_year", "gpa", "email"],
        values: [
            ["1", "Aditi Patel", "Accounting", "Freshman", "3.50", "aditi.patel@myschool.edu"],
            ["2", "Mohammed Khan", "Finance", "Sophomore", "3.20", "mohammed.khan@myschool.edu"],
            ["3", "Sofia Gonzalez", "Supply Chain", "Junior", "3.75", "sofia.gonzalez@myschool.edu"],
            ["4", "Carlos Santos", "Accounting", "Senior", "3.10", "carlos.santos@myschool.edu"],
            ["5", "Emily Wong", "Accounting", "Freshman", "3.40", "emily.wong@myschool.edu"],
            ["6", "Felix Kim", "Finance", "Sophomore", "3.60", "felix.kim@myschool.edu"],
            ["7", "Grace Okafor", "Accounting", "Junior", "2.95", "grace.okafor@myschool.edu"],
            ["8", "Henry Lee", "Finance", "Senior", "3.30", "henry.lee@myschool.edu"],
            ["9", "Isabella Liu", "Supply Chain", "Freshman", "3.25", "isabella.liu@myschool.edu"],
            ["10", "James Nguyen", "Finance", "Junior", "3.90", "james.nguyen@myschool.edu"],
            ["11", "Ana Ramirez", "Supply Chain", "Senior", "3.80", "ana.ramirez@myschool.edu"],
            ["12", "Liam Hernandez", "Accounting", "Freshman", "3.05", "liam.hernandez@myschool.edu"],
            ["13", "Mia Jackson", "Finance", "Sophomore", "3.50", "mia.jackson@myschool.edu"],
            ["14", "Noah Clark", "Supply Chain", "Junior", "3.45", "noah.clark@myschool.edu"],
            ["15", "Olivia Osei", "Accounting", "Senior", "3.70", "olivia.osei@myschool.edu"],
            ["16", "Paul Young", "Accounting", "Freshman", "3.15", "paul.young@myschool.edu"],
            ["17", "Quinn Chen", "Finance", "Sophomore", "2.80", "quinn.chen@myschool.edu"],
            ["18", "Ruby Ahmed", "Supply Chain", "Junior", "3.55", "ruby.ahmed@myschool.edu"],
            ["19", "Sophia Brooks", "Finance", "Senior", "3.25", "sophia.brooks@myschool.edu"],
            ["20", "Thomas Moore", "Accounting", "Freshman", "2.90", "thomas.moore@myschool.edu"],
        ],
    },
]

const studentFall2024Table = [
    {
        columns: ["student_id", "full_name", "major", "academic_year", "gpa", "email"],
        values: [
            ["1", "Aditi Patel", "Accounting", "Sophomore", "3.70", "aditi.patel@myschool.edu"],
            ["2", "Mohammed Khan", "Finance", "Junior", "3.00", "mohammed.khan@myschool.edu"],
            ["3", "Sofia Gonzalez", "Supply Chain", "Senior", "3.65", "sofia.gonzalez@myschool.edu"],
            ["5", "Emily Wong", "Accounting", "Sophomore", "3.45", "emily.wong@myschool.edu"],
            ["6", "Felix Kim", "Finance", "Junior", "3.55", "felix.kim@myschool.edu"],
            ["7", "Grace Okafor", "Accounting", "Senior", "2.95", "grace.okafor@myschool.edu"],
            ["9", "Isabella Liu", "Supply Chain", "Sophomore", "3.10", "isabella.liu@myschool.edu"],
            ["10", "James Nguyen", "Finance", "Senior", "3.90", "james.nguyen@myschool.edu"],
            ["12", "Liam Hernandez", "Accounting", "Sophomore", "2.90", "liam.hernandez@myschool.edu"],
            ["13", "Mia Jackson", "Business Administration", "Junior", "3.75", "mia.jackson@myschool.edu"],
            ["14", "Noah Clark", "Supply Chain", "Senior", "3.45", "noah.clark@myschool.edu"],
            ["16", "Paul Young", "Accounting", "Sophomore", "3.30", "paul.young@myschool.edu"],
            ["17", "Quinn Chen", "Finance", "Junior", "2.95", "quinn.chen@myschool.edu"],
            ["18", "Ruby Ahmed", "Supply Chain", "Senior", "3.55", "ruby.ahmed@myschool.edu"],
            ["20", "Thomas Moore", "Business Administration", "Sophomore", "3.10", "thomas.moore@myschool.edu"],
            ["21", "Uma Rogers", "Accounting", "Freshman", "3.20", "uma.rogers@myschool.edu"],
            ["22", "Victor Price", "Finance", "Freshman", "3.60", "victor.price@myschool.edu"],
            ["23", "Wendy Scott", "Business Administration", "Freshman", "3.10", "wendy.scott@myschool.edu"],
            ["24", "Xavier Barnes", "Accounting", "Freshman", "3.50", "xavier.barnes@myschool.edu"],
            ["25", "Yara Chen", "Finance", "Freshman", "3.75", "yara.chen@myschool.edu"],
            ["26", "Zane Reid", "Supply Chain", "Freshman", "2.85", "zane.reid@myschool.edu"],
            ["27", "Abby Walker", "Accounting", "Freshman", "3.40", "abby.walker@myschool.edu"],
            ["28", "Bryce Flores", "Finance", "Sophomore", "3.30", "bryce.flores@myschool.edu"],
            ["29", "Carmen Rivera", "Supply Chain", "Sophomore", "3.65", "carmen.rivera@myschool.edu"],
            ["30", "Derek Watson", "Business Administration", "Freshman", "3.25", "derek.watson@myschool.edu"],
        ],
    },
]