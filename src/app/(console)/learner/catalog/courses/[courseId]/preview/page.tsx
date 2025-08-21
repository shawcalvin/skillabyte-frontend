import { Course } from "@/lib/types/course";
import { HttpClient } from "@/lib/client";
import { PreviewHeader } from "./preview-header";
import { Markdown } from "@/components/ui/markdown";
import { NasbaStatement } from "@/components/resources/courses/nasba-statement";

export default async function CoursePreviewPage({
    params
}: {
    params: { courseId: number }
}) {
    const { courseId } = params;
    const res = await HttpClient.get<Course>(`/courses/courses/${courseId}`);
    const course = res.data;

    return (
        <div className="flex flex-col items-center">
            <div className="w-full text-gray-800 max-w-[72rem]">
                <PreviewHeader course={course} />
                <PreviewContent course={course} />
            </div>
        </div>
    )
}

function PreviewContent({ course }: { course: Course }) {
    return (
        <>
            <div className="mt-8">
                <div className="mt-8">
                    <div className="w-64 text-base font-semibold text-primary-blue-800">
                        Module Overview
                    </div>
                    <div className="mt-4">
                        <Markdown>
                            {course.overview}
                        </Markdown>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="w-64 text-base font-semibold text-primary-blue-800">
                        Learning Objectives
                    </div>
                    <ol className="ml-8 mt-4 list-decimal">
                        {course.learning_objectives.map((objective, index) => (
                            <li key={index} className="pl-2">
                                {objective.objective}
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="mt-8">
                    <div className="w-64 text-base font-semibold text-primary-blue-800">
                        Prerequisite Knowledge
                    </div>
                    <div className="mt-4">
                        <Markdown>
                            {course.prerequisite_knowledge}
                        </Markdown>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="w-64 text-base font-semibold text-primary-blue-800">
                        Advance Preparation
                    </div>
                    <div className="mt-4">
                        <Markdown>
                            {course.advance_preparation}
                        </Markdown>
                    </div>
                </div>
                <NasbaStatement />
            </div>
        </>
    )
}