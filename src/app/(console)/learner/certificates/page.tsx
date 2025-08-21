import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HttpClient } from "@/lib/client"
import { formatDateString } from "@/lib/dates";
import { CompletedCourse } from "@/lib/types/course";
import { CertificatesDownload } from "./download";
import { InfoIcon } from "@/components/ui/info";

export const dynamic = 'force-dynamic';

export default async function CertificatesPage() {

    const res = await HttpClient.get<CompletedCourse[]>('/courses/completed');
    const completedCourses = res.data;

    return (
        <div className="flex justify-center w-full">
            <div className="w-full max-w-5xl">
                <div className="w-full flex justify-center items-center mb-16 mt-8 space-x-4">
                    <div className="text-primary-blue-900 text-xl text-center font-bold">
                        Course Certificates
                    </div>
                    <InfoIcon info="Earn certificates by scoring at least 70% on a course. View and download your completed certificates for CPE reporting here." position="right" />
                </div>
                <Table striped className="">
                    <TableHead>
                        <TableRow>
                            <TableHeader>Course</TableHeader>
                            <TableHeader>Date Completed</TableHeader>
                            <TableHeader>Certificate</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {completedCourses.map((course, index) => (
                            <TableRow key={index}>
                                <TableCell>{course.course.title}</TableCell>
                                <TableCell>{formatDateString(course.completed_date)}</TableCell>
                                <TableCell>
                                    <div className="text-primary-blue-500 hover:text-primary-blue-400 underline">
                                        <CertificatesDownload course={course} text="Download" />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}