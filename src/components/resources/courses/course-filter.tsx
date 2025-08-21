'use client'

import { useState, useCallback, useMemo } from "react";

import { CardGroup } from "@/components/ui/card";
import { Field, FieldGroup, Fieldset, Label } from "@/components/ui/fieldset";
import { RegisteredCourse } from "@/lib/types/course";
import { DashboardCard } from "@/components/resources/courses/dashboard-card";
import { Select } from "@/components/ui/select";
import { Divider } from "@/components/ui/divider";

type CourseListProps = {
    courses: RegisteredCourse[]
}

export function CourseList({ courses }: CourseListProps) {
    const [organization, setOrganization] = useState<string | null>(null);
    const [completed, setCompleted] = useState<string | null>(null);

    const allString = "$$ALL$$"

    const handleOrganization = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setOrganization(e.target.value);
    }, []);

    const handleCompleted = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setCompleted(e.target.value);
    }, []);

    const organizations = useMemo(() => {
        const orgSet = new Set(courses.map(course => course.organization.name));
        return Array.from(orgSet);
    }, [courses]);

    const uniqueCourses = useMemo(() => {
        const courseMap = new Map();
        courses.forEach(course => {
            const { title } = course.course;
            if (courseMap.has(title)) {
                courseMap.get(title).multipleOrganizations = true;
            } else {
                courseMap.set(title, { ...course, multipleOrganizations: false });
            }
        });
        return Array.from(courseMap.values());
    }, [courses]);

    const filteredCourses = useMemo(() => {
        const sorted = uniqueCourses?.sort((a, b) => a.course.title.localeCompare(b.course.title));
        return sorted?.filter(card => {
            const matchesOrganization = organization && organization !== allString
                ? card.multipleOrganizations
                    ? true
                    : card.organization.name === organization
                : true;
            const matchesCompleted = completed === null || completed === allString
                ? true
                : completed === "completed"
                    ? card.amount_completed === 100
                    : card.amount_completed < 100;
            return matchesOrganization && matchesCompleted;
        });
    }, [uniqueCourses, organization, completed]);

    return (
        <>
            <p className="text-primary-blue-500 text-xl font-bold mr-8">Registered Courses</p>
            <Divider className="my-4" />
            <Fieldset>
                <FieldGroup>
                    <div className="flex flex-col md:flex-row items-end space-x-8">
                        <Field className="w-full md:w-72">
                            <div className="flex justify-between items-center">
                                <Label className="text-primary-blue-600 font-bold">
                                    Completion
                                </Label>
                                <span className="mx-4 text-primary-blue-500 text-xs font-semibold hover:font-bold cursor-pointer" onClick={() => setCompleted(allString)}>
                                    clear
                                </span>
                            </div>
                            <Select value={String(completed) || ""} onChange={handleCompleted}>
                                <option value={allString}>All Modules</option>
                                <option value="completed">Completed</option>
                                <option value="not-completed">Not Completed</option>
                            </Select>
                        </Field>
                        <Field className="w-full md:w-72">
                            <div className="flex justify-between items-center">
                                <Label className="text-primary-blue-600 font-bold">
                                    Organization
                                </Label>
                                <span className="mx-4 text-primary-blue-500 text-xs font-semibold hover:font-bold cursor-pointer" onClick={() => setOrganization(allString)}>
                                    clear
                                </span>
                            </div>
                            <Select value={organization || ""} onChange={handleOrganization}>
                                <option value={allString}>
                                    All Organizations
                                </option>
                                {organizations.map((orgName, index) => (
                                    <option key={index} value={orgName}>
                                        {orgName}
                                    </option>
                                ))}
                            </Select>
                        </Field>
                    </div>
                </FieldGroup>
            </Fieldset>
            <div className="w-full md:flex mt-8">
                <div className="w-full">
                    <CardGroup>
                        {filteredCourses?.map((course, index) => (
                            <DashboardCard
                                key={index}
                                course={{
                                    ...course,
                                    organization: course.multipleOrganizations ? { name: "Multiple organizations" } : course.organization
                                }}
                            />
                        ))}
                    </CardGroup>
                </div>
            </div>
        </>
    )
}