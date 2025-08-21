'use client'

import { useState, useCallback, useMemo } from "react";

import { CardGroup } from "@/components/ui/card";
import { Field, FieldGroup, Fieldset, Label } from "@/components/ui/fieldset";
import { CourseCard } from "@/components/resources/courses/course-card";
import { Input } from "@/components/ui/input";
import { TagLabel } from "@/components/ui/tag";
import { Product } from "@/lib/types/payments";
import { TextLink } from "@/components/ui/text";

type CourseListProps = {
    courses: Product[];
}

export function CourseList({ courses }: CourseListProps) {
    const [searchTerm, setSearchTerm] = useState<string | null>(null);
    const [selectedFieldsOfStudy, setselectedFieldsOfStudy] = useState<string[]>([])
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const availableFieldsOfStudy = Array.from(
        new Set(courses.flatMap(course => course.course.fields_of_study.map(field => field.name)))
    ).filter(field => !selectedFieldsOfStudy.includes(field));

    const availableTags = Array.from(
        new Set(courses.flatMap(course => course.course.tags.map(tag => tag.name)))
    ).filter(tag => !selectedTags.includes(tag));

    const toggleTag = (tag: string) => {
        setSelectedTags(prevSelectedTags =>
            prevSelectedTags.includes(tag)
                ? prevSelectedTags.filter(t => t !== tag)
                : [...prevSelectedTags, tag]
        );
    };

    const toggleField = (field: string) => {
        setselectedFieldsOfStudy(prevSelectedFields =>
            prevSelectedFields.includes(field)
                ? prevSelectedFields.filter(t => t !== field)
                : [...prevSelectedFields, field]
        );
    };

    const handleSearchTerm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, []);

    const filteredCourses = useMemo(() => {
        const sorted = courses?.sort((a, b) => a.course.title.localeCompare(b.course.title));
        return sorted?.filter(course => {
            const matchesSearchTerm = searchTerm
                ? (course.course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    course.course.description.toLowerCase().includes(searchTerm.toLowerCase()))
                : true;

            const matchesSelectedTags = selectedTags.length > 0
                ? course.course.tags.some(tag => selectedTags.includes(tag.name))
                : true;

            const matchesSelectedFieldsOfStudy = selectedFieldsOfStudy.length > 0
                ? course.course.fields_of_study.some(field => selectedFieldsOfStudy.includes(field.name))
                : true;

            return matchesSearchTerm && matchesSelectedTags && matchesSelectedFieldsOfStudy;
        });
    }, [courses, searchTerm, selectedTags, selectedFieldsOfStudy]);

    return (
        <>
            <div className="w-full mt-32">
                <div className="bg-gray-50 p-8">
                    <Fieldset className="w-full">
                        <FieldGroup>
                            <Field>
                                <div className="flex items-center">
                                    <Label className="text-primary-blue-600 font-bold">
                                        Search Courses
                                    </Label>
                                    <span className="mx-4 text-primary-blue-500 text-xs font-semibold hover:font-bold cursor-pointer" onClick={() => setSearchTerm(null)}>
                                        clear
                                    </span>
                                </div>
                                <Input
                                    value={searchTerm || ""}
                                    onChange={handleSearchTerm}
                                />
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <Label className="text-primary-blue-600 font-bold">
                                        Fields of Study
                                    </Label>
                                    <span className="mx-4 text-primary-blue-500 text-xs font-semibold hover:font-bold cursor-pointer" onClick={() => setselectedFieldsOfStudy([])}>
                                        clear
                                    </span>
                                </div>
                                <div className="flex flex-wrap">
                                    {selectedFieldsOfStudy.map((field, index) => (
                                        <div key={index} onClick={() => toggleField(field)} className="cursor-pointer">
                                            <TagLabel color="orange">{field} <span className="font-bold">x</span></TagLabel>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap">
                                    {availableFieldsOfStudy.map((field, index) => (
                                        <div key={index} onClick={() => toggleField(field)} className="cursor-pointer">
                                            <TagLabel>{field} <span className="font-bold">+</span></TagLabel>
                                        </div>
                                    ))}
                                </div>
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <Label className="text-primary-blue-600 font-bold">
                                        Course Tags
                                    </Label>
                                    <span className="mx-4 text-primary-blue-500 text-xs font-semibold hover:font-bold cursor-pointer" onClick={() => setSelectedTags([])}>
                                        clear
                                    </span>
                                </div>
                                <div className="flex flex-wrap">
                                    {selectedTags.map((tag, index) => (
                                        <div key={index} onClick={() => toggleTag(tag)} className="cursor-pointer">
                                            <TagLabel color="orange">{tag} <span className="font-bold">x</span></TagLabel>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap">
                                    {availableTags.map((tag, index) => (
                                        <div key={index} onClick={() => toggleTag(tag)} className="cursor-pointer">
                                            <TagLabel>{tag} <span className="font-bold">+</span></TagLabel>
                                        </div>
                                    ))}
                                </div>
                            </Field>
                        </FieldGroup>
                    </Fieldset>
                </div>
                <div className="mt-8">
                    <div className="w-full">
                        <CardGroup>
                            {filteredCourses?.map((course, index) => (
                                <CourseCard key={index} course={course} />
                            ))}
                        </CardGroup>
                    </div>
                </div>
            </div>
        </>
    )
}