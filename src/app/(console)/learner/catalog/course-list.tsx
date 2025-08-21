'use client'

import { useState, useMemo, useCallback } from "react";

import { Card, CardField, CardFieldGroup, CardGroup, CardText, CardTitle } from "@/components/ui/card";
import { AddOrganizationForm } from "../dashboard/add-organization";
import { RegisteredCourse } from "@/lib/types/course";
import { TagLabel } from "@/components/ui/tag";
import { Product } from "@/lib/types/payments";
import { FilterProvider, InputFilter, SelectFilter, TagFilter, useFilterContext } from "@/components/ui/filter";
import { HttpClient } from "@/lib/client";
import { revalidatePath } from "next/cache";
import { ArrowRightCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { addCourseToCart } from "@/actions/payments";

type CourseListProps = {
    courses: Product[];
    registered: RegisteredCourse[];
}

export function CourseList({ courses, registered }: CourseListProps) {
    const titleFilterFn = useCallback(
        (course: Product, value: string | undefined) => {
            return !value || course.course.title.toLowerCase().includes(value.toLowerCase());
        },
        []
    );

    const fieldFilterFn = useCallback(
        (course: Product, selectedFields: string[]) => {
            const courseFieldsOfStudy = course.course.fields_of_study.map((field) => field.name as string);
            return selectedFields.every((field) => courseFieldsOfStudy.includes(field));
        }, []
    )

    const tagFilterFn = useCallback(
        (course: Product, selectedTags: string[]) => {
            const courseTags = course.course.tags.map((tag) => tag.name as string);
            return selectedTags.every((tag) => courseTags.includes(tag));
        }, []
    )

    return (
        <>
            <div className="flex flex-col h-full mt-8">
                <FilterProvider initialItems={courses}>
                    <div className="flex flex-wrap items-center bg-gray-50 shadow-sm rounded-lg mb-8">
                        <div className="w-full md:w-96 h-10 m-4">
                            <AddOrganizationForm />
                        </div>
                        <div className="w-full md:w-96 m-4">
                            <InputFilter<Product>
                                label="Title"
                                filterFn={titleFilterFn}
                            />
                        </div>
                        <div className="w-full md:w-96 m-4">
                            <TagFilter
                                label="Field of Study"
                                options={Array.from(
                                    new Set(
                                        courses.flatMap((course) =>
                                            course.course.fields_of_study.map((field) => field.name as string)
                                        )
                                    )
                                ).map((fieldOfStudy) => ({
                                    label: fieldOfStudy,
                                    value: fieldOfStudy,
                                }))}
                                filterFn={fieldFilterFn}
                            />
                        </div>
                        <div className="w-full md:w-96 m-4">
                            <TagFilter
                                label="Course Tags"
                                options={Array.from(
                                    new Set(
                                        courses.flatMap((course) =>
                                            course.course.tags.map((tag) => tag.name as string)
                                        )
                                    )
                                ).map((tag) => ({
                                    label: tag,
                                    value: tag,
                                }))}
                                filterFn={tagFilterFn}
                            />
                        </div>
                    </div>
                    <CourseDisplay courses={courses} registered={registered} />
                </FilterProvider>
            </div>
        </>
    )
}

function CourseDisplay({ courses, registered }: CourseListProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const { filteredItems, clearFilters } = useFilterContext<Product>();

    const registeredCourseIds = useMemo(
        () => registered.map((course) => course.course.id),
        [registered]
    );

    const sortedCourses = useMemo(() => {
        return [...filteredItems].sort((a, b) => {
            const isARegistered = registeredCourseIds.includes(a.course.id);
            const isBRegistered = registeredCourseIds.includes(b.course.id);

            // If one course is registered and the other is not, sort accordingly
            if (isARegistered && !isBRegistered) return 1;
            if (!isARegistered && isBRegistered) return -1;

            // Otherwise, sort alphabetically by title
            return a.course.title.localeCompare(b.course.title);
        });
    }, [filteredItems, registeredCourseIds]);

    const handleAddCourse = async (id: number, title: string) => {
        try {
            await addCourseToCart(id)
            setAlertMessage(`${title} has been added to your cart.`)
        }
        catch (error) {
            {
                setAlertMessage(`${title} is already in your cart.`)
            }
        }
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex-1 overflow-y-auto p-4">
                <CardGroup>
                    {sortedCourses.map((course, index) => {
                        const disabled = registeredCourseIds.includes(course.course.id);

                        return (
                            <Card key={index} href={`/learner/catalog/courses/${course.course.id}/preview`} disabled={disabled}>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="flex-1 mr-4">
                                        {course.course.title}
                                    </CardTitle>
                                    {!disabled && (
                                        <button
                                            onClick={() => handleAddCourse(course.course.id, course.course.title)}
                                            className="group m-2 h-6 flex items-center justify-center text-xs z-20"
                                        >
                                            <div className="group-hover:text-gray-700">
                                                Add to Cart
                                            </div>
                                            <PlusCircleIcon className="w-5 group-hover:w-0 transition-all duration-300 ml-2" />
                                            <ArrowRightCircleIcon className="w-0 group-hover:w-5 transition-all duration-300 ml-2" />
                                        </button>
                                    )}
                                </div>
                                <div className="mt-1">
                                    {disabled && <TagLabel color="emerald">Purchased</TagLabel>}
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
                                    <CardField label="Price">
                                        ${course.price}
                                    </CardField>
                                    <CardField label="CPE Credits">
                                        {course.course.cpe_credits}
                                    </CardField>
                                    <CardField label="Knowledge Level">
                                        {course.course.knowledge_level.name}
                                    </CardField>
                                </CardFieldGroup>
                                <CardText>
                                    {course.course.description}
                                </CardText>
                                <Alert open={isOpen} onClose={setIsOpen}>
                                    <AlertTitle>
                                        {alertMessage}
                                    </AlertTitle>
                                    <AlertDescription>
                                        Visit your cart to finish purchasing this course, or continue shopping.
                                    </AlertDescription>
                                    <AlertActions>
                                        <Button plain onClick={() => setIsOpen(false)} className='text-gray-400'>
                                            Return to catalog
                                        </Button>
                                        <Link href={'/learner/payments/cart'} className='text-sm font-extrabold text-blue-500 hover:text-primary-blue-400'>
                                            View cart &rarr;
                                        </Link>
                                    </AlertActions>
                                </Alert>
                            </Card>
                        )
                    })}
                </CardGroup>
                {sortedCourses.length === 0 && <EmptyCourseList clearFilters={clearFilters} />}
            </div>
        </>
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