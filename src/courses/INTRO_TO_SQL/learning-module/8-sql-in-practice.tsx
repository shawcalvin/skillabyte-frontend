"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { ListItem, Text, TextLink, UnorderedList } from "@/components/ui/text";
import { Image } from "@/components/ui/media";
import { Tab, TabGroup } from "@/components/ui/tab";
import { QueryResults } from "@/components/interactive/sql/results";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { PracticeSunnyBlendz } from "./practice-sunny-blendz";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"SQL in practice: Sunny Blendz"} isComplete={false}  {...props}>
                <Text className='italic mb-8'>
                    Click <TextLink href="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/Intro+to+SQL+(Part+1)+-+Handout.docx" download>here</TextLink> to download the handout for this course, which contains the database tables and other useful material for writing SQL queries.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/Sunny+Blendz.jpeg"
                    alt="Sunny Blendz"
                    size="800px"
                    className="rounded-lg my-8"
                    center
                />
                <Text>
                    Sunny Blendz is a brand-new smoothie shop in Chicago, Illinois, where every sip feels like a tropical escape from the freezing winter. With a menu as colorful as a beach sunset, it’s not just any smoothie shop; it’s a paradise of flavors and fun. Now that the store has been open for a month, the manager has brought you in as a data analyst who specializes in SQL. Let’s see how you can “shake things up” by using SQL to help the store and its customers!
                </Text>
                <Text>
                    Study the database layout below and then move on to the scenarios. Note that this is an entirely new dataset from the one we’ve been using up until now, so be sure to carefully reference the ERD and data table below while doing the problems. For example, in this dataset the table containing customer info is called “Customers”, not “Customer”.
                </Text>
                <TabGroup>
                    <Tab title="ERD">
                        <Image
                            src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-to-sql/ERD+-+Sunny+Blendz+white+background.png"
                            alt="Sunny Blendz ERD Diagram"
                            size="800px"
                            className="rounded-lg my-8"
                            center
                        />
                    </Tab>
                    <Tab title="Customers">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Customers table</Heading>
                                <QueryResults
                                    results={customersTable}
                                />
                            </div>
                        </div>
                    </Tab>
                    <Tab title="Orders">
                        <div className="w-full flex justify-center">
                            <div>
                                <Heading className="mb-4 mx-2">Orders table</Heading>
                                <QueryResults
                                    results={transactionsTable}
                                />
                            </div>
                        </div>
                    </Tab>
                </TabGroup>
                <PracticeSunnyBlendz setIsComplete={() => props.setIsComplete(true)} />
                <Heading>Why this matters</Heading>
                <Divider />
                <Text>
                    Sunny Blendz and other businesses can rely on simple SQL queries like these to:
                </Text>
                <Text>
                    <UnorderedList>
                        <ListItem>Offer personalized promotions</ListItem>
                        <ListItem>Improve customer service by quickly accessing key data</ListItem>
                        <ListItem>Tailor rewards programs to individual customer habits</ListItem>
                        <ListItem>Track inventory levels, monitor stock, and manage reorders</ListItem>
                        <ListItem>Generate financial reports</ListItem>
                    </UnorderedList>
                </Text>
                <Text>
                    This example shows how even basic SQL queries are useful for effective customer relationship management in a real-world business context.
                </Text>
                <Text>Click “Next” to continue learning some basic SQL clauses, starting with the GROUP BY clause.</Text>
            </ModuleContainer>
        </>
    );
}

const customersTable = [{
    columns: ['CustomerID', 'FirstName', 'LastName', 'Email', 'RewardBalance'],
    values: [
        ['101', 'Olivia', 'Miller', 'olivia.miller@gmail.com', '16'],
        ['102', 'Ethan', 'Moore', 'ethan.moore@gmail.com', '40'],
        ['103', 'James', 'Davis', 'james.davis@yahoo.com', '31'],
        ['104', 'John', 'Lopez', 'john.lopez@outlook.com', '78'],
        ['105', 'Emma', 'Wilson', 'emma.wilson@gmail.com', '7'],
        ['106', 'Ethan', 'Taylor', 'ethan.taylor@gmail.com', '31'],
        ['107', 'Liam', 'Moore', 'liam.moore@gmail.com', '76'],
        ['108', 'Ethan', 'Wilson', 'ethan.wilson@outlook.com', '11'],
        ['109', 'James', 'Clark', 'james.clark@yahoo.com', '74'],
        ['110', 'James', 'Moore', 'james.moore@gmail.com', '52'],
        ['111', 'Isabella', 'Smith', 'isabella.smith@yahoo.com', '68'],
        ['112', 'John', 'Smith', 'john.smith@gmail.com', '87'],
        ['113', 'Liam', 'Smith', 'liam.smith@gmail.com', '71'],
        ['114', 'Ava', 'Clark', 'ava.clark@gmail.com', '55'],
        ['115', 'Emma', 'Moore', 'emma.moore@outlook.com', '97'],
        ['116', 'Mason', 'Smith', 'mason.smith@outlook.com', '64'],
        ['117', 'Olivia', 'Lopez', 'olivia.lopez@gmail.com', '41'],
        ['118', 'Liam', 'White', 'liam.white@yahoo.com', '86'],
        ['119', 'Sophie', 'Miller', 'sophie.miller@gmail.com', '44'],
        ['120', 'Sophie', 'Davis', 'sophie.davis@outlook.com', '13'],
    ]
}]

// Transactions Table
const transactionsTable = [
    {
        columns: ['OrderID', 'CustomerID', 'Product', 'PurchaseDate', 'Amount'],
        values: [
            ['1001', '101', 'Tropical Mango Smoothie', '2025-01-01', '12.50'],
            ['1002', '120', 'Citrus Splash Juice', '2025-01-01', '10.00'],
            ['1003', '109', 'Berry Blast Smoothie', '2025-01-01', '15.00'],
            ['1004', '101', 'Citrus Splash Juice', '2025-01-02', '10.00'],
            ['1005', '116', 'Citrus Splash Juice', '2025-01-02', '10.00'],
            ['1006', '119', 'Protein Power Smoothie', '2025-01-02', '20.00'],
            ['1007', '110', 'Green Detox Smoothie', '2025-01-03', '22.00'],
            ['1008', '118', 'Citrus Splash Juice', '2025-01-03', '10.00'],
            ['1009', '103', 'Green Detox Smoothie', '2025-01-03', '22.00'],
            ['1010', '102', 'Tropical Mango Smoothie', '2025-01-04', '12.50'],
            ['1011', '111', 'Tropical Mango Smoothie', '2025-01-04', '12.50'],
            ['1012', '105', 'Berry Blast Smoothie', '2025-01-04', '15.00'],
            ['1013', '101', 'Protein Power Smoothie', '2025-01-05', '20.00'],
            ['1014', '103', 'Protein Power Smoothie', '2025-01-05', '20.00'],
            ['1015', '120', 'Protein Power Smoothie', '2025-01-05', '20.00'],
            ['1016', '113', 'Tropical Mango Smoothie', '2025-01-05', '12.50'],
            ['1017', '102', 'Tropical Mango Smoothie', '2025-01-06', '12.50'],
            ['1018', '110', 'Tropical Mango Smoothie', '2025-01-06', '12.50'],
            ['1019', '111', 'Protein Power Smoothie', '2025-01-06', '20.00'],
            ['1020', '106', 'Protein Power Smoothie', '2025-01-06', '20.00'],
            ['1021', '109', 'Citrus Splash Juice', '2025-01-07', '10.00'],
            ['1022', '102', 'Berry Blast Smoothie', '2025-01-07', '15.00'],
            ['1023', '103', 'Citrus Splash Juice', '2025-01-08', '10.00'],
            ['1024', '109', 'Berry Blast Smoothie', '2025-01-08', '15.00'],
            ['1025', '107', 'Green Detox Smoothie', '2025-01-08', '22.00'],
            ['1026', '108', 'Tropical Mango Smoothie', '2025-01-09', '12.50'],
            ['1027', '114', 'Protein Power Smoothie', '2025-01-09', '20.00'],
            ['1028', '119', 'Green Detox Smoothie', '2025-01-09', '22.00'],
            ['1029', '102', 'Green Detox Smoothie', '2025-01-09', '22.00'],
            ['1030', '110', 'Berry Blast Smoothie', '2025-01-10', '15.00'],
            ['1031', '105', 'Protein Power Smoothie', '2025-01-10', '20.00'],
            ['1032', '104', 'Protein Power Smoothie', '2025-01-11', '20.00'],
            ['1033', '108', 'Green Detox Smoothie', '2025-01-11', '22.00'],
            ['1034', '115', 'Citrus Splash Juice', '2025-01-11', '10.00'],
            ['1035', '111', 'Berry Blast Smoothie', '2025-01-12', '15.00'],
            ['1036', '102', 'Tropical Mango Smoothie', '2025-01-12', '12.50'],
            ['1037', '108', 'Citrus Splash Juice', '2025-01-12', '10.00'],
            ['1038', '103', 'Protein Power Smoothie', '2025-01-13', '20.00'],
            ['1039', '103', 'Tropical Mango Smoothie', '2025-01-13', '12.50'],
            ['1040', '104', 'Citrus Splash Juice', '2025-01-13', '10.00'],
            ['1041', '111', 'Berry Blast Smoothie', '2025-01-13', '15.00'],
            ['1042', '117', 'Tropical Mango Smoothie', '2025-01-14', '12.50'],
            ['1043', '117', 'Citrus Splash Juice', '2025-01-14', '10.00'],
            ['1044', '120', 'Tropical Mango Smoothie', '2025-01-14', '12.50'],
            ['1045', '107', 'Tropical Mango Smoothie', '2025-01-14', '12.50'],
            ['1046', '105', 'Citrus Splash Juice', '2025-01-15', '10.00'],
            ['1047', '111', 'Berry Blast Smoothie', '2025-01-15', '15.00'],
            ['1048', '107', 'Tropical Mango Smoothie', '2025-01-15', '12.50'],
            ['1049', '101', 'Protein Power Smoothie', '2025-01-15', '20.00'],
            ['1050', '119', 'Berry Blast Smoothie', '2025-01-16', '15.00'],
            ['1051', '117', 'Berry Blast Smoothie', '2025-01-16', '15.00'],
            ['1052', '106', 'Protein Power Smoothie', '2025-01-17', '20.00'],
            ['1053', '118', 'Citrus Splash Juice', '2025-01-17', '10.00'],
            ['1054', '116', 'Green Detox Smoothie', '2025-01-17', '22.00'],
            ['1055', '107', 'Tropical Mango Smoothie', '2025-01-18', '12.50'],
            ['1056', '110', 'Citrus Splash Juice', '2025-01-18', '10.00'],
            ['1057', '108', 'Citrus Splash Juice', '2025-01-18', '10.00'],
            ['1058', '104', 'Tropical Mango Smoothie', '2025-01-19', '12.50'],
            ['1059', '112', 'Berry Blast Smoothie', '2025-01-19', '15.00'],
            ['1060', '116', 'Protein Power Smoothie', '2025-01-19', '20.00'],
            ['1061', '102', 'Tropical Mango Smoothie', '2025-01-20', '12.50'],
            ['1062', '108', 'Tropical Mango Smoothie', '2025-01-20', '12.50'],
            ['1063', '119', 'Green Detox Smoothie', '2025-01-20', '22.00'],
            ['1064', '120', 'Tropical Mango Smoothie', '2025-01-21', '12.50'],
            ['1065', '104', 'Green Detox Smoothie', '2025-01-21', '22.00'],
            ['1066', '117', 'Tropical Mango Smoothie', '2025-01-21', '12.50'],
            ['1067', '101', 'Berry Blast Smoothie', '2025-01-22', '15.00'],
            ['1068', '104', 'Protein Power Smoothie', '2025-01-22', '20.00'],
            ['1069', '119', 'Citrus Splash Juice', '2025-01-22', '10.00'],
            ['1070', '109', 'Citrus Splash Juice', '2025-01-22', '10.00'],
            ['1071', '116', 'Protein Power Smoothie', '2025-01-23', '20.00'],
            ['1072', '101', 'Citrus Splash Juice', '2025-01-23', '10.00'],
            ['1073', '112', 'Green Detox Smoothie', '2025-01-23', '22.00'],
            ['1074', '119', 'Citrus Splash Juice', '2025-01-23', '10.00'],
            ['1075', '119', 'Tropical Mango Smoothie', '2025-01-24', '12.50'],
            ['1076', '104', 'Citrus Splash Juice', '2025-01-24', '10.00'],
            ['1077', '111', 'Berry Blast Smoothie', '2025-01-25', '15.00'],
            ['1078', '108', 'Berry Blast Smoothie', '2025-01-25', '15.00'],
            ['1079', '119', 'Citrus Splash Juice', '2025-01-25', '10.00'],
            ['1080', '119', 'Tropical Mango Smoothie', '2025-01-26', '12.50'],
            ['1081', '101', 'Tropical Mango Smoothie', '2025-01-26', '12.50'],
            ['1082', '105', 'Berry Blast Smoothie', '2025-01-26', '15.00'],
            ['1083', '118', 'Protein Power Smoothie', '2025-01-27', '20.00'],
            ['1084', '110', 'Green Detox Smoothie', '2025-01-27', '22.00'],
            ['1085', '120', 'Green Detox Smoothie', '2025-01-27', '22.00'],
            ['1086', '119', 'Berry Blast Smoothie', '2025-01-27', '15.00'],
            ['1087', '116', 'Green Detox Smoothie', '2025-01-28', '22.00'],
            ['1088', '102', 'Green Detox Smoothie', '2025-01-28', '22.00'],
            ['1089', '116', 'Tropical Mango Smoothie', '2025-01-28', '12.50'],
            ['1090', '115', 'Berry Blast Smoothie', '2025-01-29', '15.00'],
            ['1091', '115', 'Protein Power Smoothie', '2025-01-29', '20.00'],
            ['1092', '119', 'Berry Blast Smoothie', '2025-01-29', '15.00'],
            ['1093', '105', 'Tropical Mango Smoothie', '2025-01-29', '12.50'],
            ['1094', '116', 'Tropical Mango Smoothie', '2025-01-30', '12.50'],
            ['1095', '120', 'Protein Power Smoothie', '2025-01-30', '20.00'],
            ['1096', '111', 'Green Detox Smoothie', '2025-01-30', '22.00'],
            ['1097', '105', 'Green Detox Smoothie', '2025-01-31', '22.00'],
            ['1098', '114', 'Green Detox Smoothie', '2025-01-31', '22.00'],
            ['1099', '116', 'Citrus Splash Juice', '2025-01-31', '10.00'],
            ['1100', '105', 'Tropical Mango Smoothie', '2025-01-31', '12.50'],
            ['1101', '106', 'Green Detox Smoothie', '2025-01-31', '22.00']
        ]
    }
];
