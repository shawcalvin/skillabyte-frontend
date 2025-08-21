"use client"

import { useCallback, useEffect, useMemo, useState } from "react";
import { FilterProvider, SelectFilter, useFilterContext } from "@/components/ui/filter";
import { RegisteredCourse } from "@/lib/types/course";
import { Card, CardField, CardFieldGroup, CardGroup, CardTitle } from "@/components/ui/card";
import { AddOrganizationForm } from "./add-organization";
import { TagLabel } from "@/components/ui/tag";
import { formatDateString } from "@/lib/dates";
import { Button } from "@/components/ui/button";
import { HttpClient } from "@/lib/client";
import { LoadingIcon } from "@/components/ui/loading-icon";

export function CourseList() {
    const [courses, setCourses] = useState<RegisteredCourse[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const res = (await HttpClient.get<RegisteredCourse[]>('/courses/registered/')).data
                setCourses(res)
            } catch (error) {
                setCourses([])
            } finally {
                setLoading(false)
            }
        }

        fetchCourses()
    }, [])

    const completionFilterFn = useCallback(
        (course: RegisteredCourse, value: string | undefined) => {
            if (value === 'not-completed') return course.amount_completed < 100;
            if (value === 'completed') return course.amount_completed >= 100;
            return true;
        },
        []
    );

    const organizationFilterFn = useCallback(
        (course: RegisteredCourse, value: string | undefined) => {
            return course.organization.name === value;
        }, []
    )

    if (loading) {
        return (
            <div className="w-full flex justify-center">
                <LoadingIcon />
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col h-full">
                <FilterProvider initialItems={courses}>
                    <div className="flex flex-wrap items-center bg-gray-50 shadow-sm rounded-lg mb-8">
                        <div className="w-full md:w-96 h-10 m-4">
                            <AddOrganizationForm />
                        </div>
                        <div className="w-full md:w-96 m-4">
                            <SelectFilter<RegisteredCourse>
                                label="Completion"
                                options={[
                                    { label: "Completed", value: "completed" },
                                    { label: "Not Completed", value: "not-completed" }
                                ]}
                                filterFn={completionFilterFn}
                            />
                        </div>
                        <div className="w-full md:w-96 m-4">
                            <SelectFilter<RegisteredCourse>
                                label="Organization"
                                options={Array.from(
                                    new Set(
                                        courses.flatMap((course) =>
                                            course.organization.name
                                        )
                                    )
                                ).map((name) => ({
                                    label: name,
                                    value: name,
                                }))}
                                filterFn={organizationFilterFn}
                            />
                        </div>
                    </div>
                    <CourseDisplay />
                </FilterProvider>
            </div>
        </>
    );
}

function CourseDisplay() {

    const { filteredItems, clearFilters } = useFilterContext<RegisteredCourse>();

    // Deduplicate courses by course ID and update the organization field if needed
    const deduplicatedCourses = useMemo(() => {
        const courseMap = new Map<number, RegisteredCourse>();

        filteredItems.forEach((course) => {
            const courseId = course.course.id;

            if (courseMap.has(courseId)) {
                // If the course already exists, mark the organization as "Multiple Organizations"
                const existingCourse = courseMap.get(courseId)!;
                existingCourse.organization = {
                    ...existingCourse.organization,
                    name: "Multiple Organizations",
                    is_personal: false,
                };
            } else {
                // Otherwise, add the course to the map
                courseMap.set(courseId, course);
            }
        });

        return Array.from(courseMap.values());
    }, [filteredItems]);

    // Sort courses by title
    const sortedCourses = useMemo(() => {
        return [...deduplicatedCourses].sort((a, b) => {
            return a.course.title.localeCompare(b.course.title);
        });
    }, [deduplicatedCourses]);

    return (
        <div className="flex-1 overflow-y-auto p-4">
            <CardGroup>
                {sortedCourses.map((course, index) => (
                    <Card key={index} href={`/learner/courses/${course.course.id}/preview`}>
                        <CardTitle>{course.course.title}</CardTitle>
                        <div className="mt-1">
                            {course.course.fields_of_study.map((field, index) => (
                                <TagLabel key={index} color="orange">
                                    {field.name}
                                </TagLabel>
                            ))}
                            {course.course.tags.map((tag, index) => (
                                <TagLabel key={index}>
                                    {tag.name}
                                </TagLabel>
                            ))}
                        </div>
                        <CardFieldGroup>
                            <CardField label="CPE Credits">
                                {course.course.cpe_credits}
                            </CardField>
                            <CardField label="Knowledge Level">
                                {course.course.knowledge_level.name}
                            </CardField>
                            <CardField label="Expires">
                                {formatDateString(course.expires)}
                            </CardField>
                            {!course.organization.is_personal &&
                                <CardField label="Organization">
                                    {course.organization.name}
                                </CardField>}
                        </CardFieldGroup>
                    </Card>
                ))}
            </CardGroup>
            {sortedCourses.length === 0 && <EmptyCourseList clearFilters={clearFilters} />}
        </div>
    )
}

export function EmptyCourseList({ clearFilters }: { clearFilters: () => void }) {
    return (
        <div className="w-full flex flex-col items-center">
            <p className="text-gray-400 mb-4">
                No Courses Found
            </p>
            <Button onClick={clearFilters} className="w-64" outline>Clear Filters</Button>
        </div>
    )
}