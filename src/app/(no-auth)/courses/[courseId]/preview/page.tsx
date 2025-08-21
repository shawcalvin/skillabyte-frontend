import { Course } from "@/lib/types/course";
import { HttpClient } from "@/lib/client";
import { Markdown } from "@/components/ui/markdown";
import { TagLabel } from "@/components/ui/tag";
import { formatDateString } from "@/lib/dates";
import { NasbaStatement } from "@/components/resources/courses/nasba-statement";

export const dynamic = 'force-dynamic';

export default async function CoursePreviewPage({
    params
}: {
    params: { courseId: number }
}) {
    const { courseId } = params;
    const res = await HttpClient.get<Course>(`/courses/courses/${courseId}`, false, { cache: 'no-store' });
    const course = res.data;

    return (
        <div className="flex flex-col items-center">
            <div className="w-full text-gray-800 max-w-[72rem]">
                <div className='w-full bg-gray-50 text-primary-blue-900 font-bold text-xl rounded-lg overflow-hidden shadow-md mb-8'>
                    <div className='min-h-16 flex items-center px-6 w-full border-b border-gray-200 justify-between'>
                        <div className="flex flex-wrap items-center my-2">
                            <p className="mr-4">
                                {course.title}
                            </p>
                            <div>
                                <TagLabel color="sky">QAS Self Study</TagLabel>
                            </div>
                            <div>
                                <TagLabel color="sky">{course.knowledge_level.name} Knowledge Level</TagLabel>
                            </div>
                            <div>
                                <TagLabel color="sky">Last reviewed {formatDateString(course.reviewed_at)}</TagLabel>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-10 flex flex-wrap items-center text-sm my-2">
                        <div className="mx-4">
                            <span className="font-bold">
                                CPE Credits Awarded: <span className="font-normal">{course.cpe_credits}</span>
                            </span>
                        </div>
                        <div className="mx-4">
                            <div className="font-bold flex flex-wrap items-center gap-2">
                                Fields of Study: {course.fields_of_study.map((field, index) => (
                                    <TagLabel key={index} color="orange">
                                        {field.name}
                                    </TagLabel>
                                ))}
                            </div>
                        </div>
                        <div className="mx-4">
                            <div className="font-bold flex flex-wrap items-center gap-2">
                                Tags: {course.tags.map((tag, index) => (
                                    <TagLabel key={index}>
                                        {tag.name}
                                    </TagLabel>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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
                </div>
                <NasbaStatement />
            </div>
        </div>
    )
}