"use client"

import { TagLabel } from "@/components/ui/tag";
import { LearningModule } from "@/lib/types/modules";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup, Fieldset, Label } from "@/components/ui/fieldset";
import { CourseRatingCategory, CourseRatingEntry, CourseRatingSubmission, RegisteredCourse } from "@/lib/types/course";
import { FaStar } from 'react-icons/fa';
import { Divider } from "@/components/ui/divider";
import { LoadingIcon } from "@/components/ui/loading-icon";
import { HttpClient } from "@/lib/client";
import { formatDateString } from "@/lib/dates";
import { InfoIcon } from "@/components/ui/info";

export function PreviewHeader({ courseId, learningModule, registeredCourse, categories, referer, isComplete }: { courseId: number; learningModule: LearningModule; registeredCourse: RegisteredCourse | null; categories: CourseRatingCategory[]; referer: string | null; isComplete: boolean }) {
    const refererPattern = /^https?:\/\/[^\/]+\/learner\/courses\/\d+\/quizzes\/attempts\/\d+\/?$/;
    const [isOpen, setIsOpen] = useState(refererPattern.test(referer || ''));
    const [isLoading, setIsLoading] = useState(false);
    const [ratings, setRatings] = useState<{ [key: number]: number }>(
        categories.reduce((acc, category) => ({
            ...acc,
            [category.id]: 0
        }), {})
    );
    const [comments, setComments] = useState('');

    const handleRating = (categoryId: number, score: number) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [categoryId]: score,
        }));
    };

    const handleComments = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComments(e.target.value);
    }

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            const response = await HttpClient.post(`/ratings/courses/${courseId}/submit/`, {
                entries: Object.entries(ratings).map(
                    ([category_id, score]): CourseRatingEntry => ({
                        category_id: parseInt(category_id, 10),
                        score,
                    })
                ),
                comments,
            });
        } catch (error) {
            console.error(error);
        }

        setIsLoading(false);
        setIsOpen(false);
    }

    return (
        <>
            <div className="flex justify-between space-x-4">
                <div className='w-full bg-gray-50 text-primary-blue-900 font-bold text-xl rounded-lg overflow-hidden shadow-md mb-8'>
                    <div className='min-h-16 flex items-center px-6 w-full border-b border-gray-200 '>
                        <div className="flex flex-wrap items-center my-2">
                            <p className="mr-4">
                                {learningModule.course.title}
                            </p>
                            <div>
                                <TagLabel color="sky">QAS Self Study</TagLabel>
                            </div>
                            <div>
                                <TagLabel color="sky">{learningModule.course.knowledge_level.name} Knowledge Level</TagLabel>
                            </div>
                            <div>
                                <TagLabel color="sky">Last reviewed {formatDateString(learningModule.course.reviewed_at)}</TagLabel>
                            </div>
                            <div>
                                <TagLabel color="sky">Last reviewed {formatDateString(learningModule.course.reviewed_at)}</TagLabel>
                            </div>
                            {registeredCourse && <div>
                                <TagLabel color="sky">Expires {formatDateString(registeredCourse?.expires)} <InfoIcon info="All courses for CPE credit must be completed within one year of your course purchase or enrollment date. You can still review or finish the course after one year, but any work completed beyond that period will not count toward your CPE credit." className="w-4" /></TagLabel>
                            </div>}
                        </div>
                    </div>
                    <div className="min-h-10 my-2 flex flex-wrap items-center text-sm">
                        <div className="mx-4">
                            <span className="font-bold">
                                CPE Credits Awarded: <span className="font-normal">{learningModule.course.cpe_credits}</span>
                            </span>
                        </div>
                        <div className="mx-4">
                            <div className="font-bold flex flex-wrap items-center gap-2">
                                Fields of Study: {learningModule.course.fields_of_study.map((field, index) => (
                                    <TagLabel key={index} color="orange">
                                        {field.name}
                                    </TagLabel>
                                ))}
                            </div>
                        </div>
                        <div className="mx-4">
                            <div className="font-bold flex flex-wrap items-center gap-2">
                                Tags: {learningModule.course.tags.map((tag, index) => (
                                    <TagLabel key={index}>
                                        {tag.name}
                                    </TagLabel>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {isComplete &&
                    <div className="h-28">
                        <Button onClick={() => setIsOpen(true)} color="light" className="h-28 w-52">
                            Share your Feedback
                            <StarIcon />
                        </Button>
                    </div>}
            </div>
            <Alert size="3xl" open={isOpen} onClose={setIsOpen}>
                <AlertTitle>
                    Help us improve this course by providing valuable feedback.
                </AlertTitle>
                <Divider className="mt-4 mb-8" />
                <form className="mt-4">
                    <Fieldset>
                        <FieldGroup>
                            {categories.map((category, index) => (
                                <Field key={index} className="flex justify-between">
                                    <Label>{category.prompt}</Label>
                                    <div className="ml-8 flex items-center">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <FaStar
                                                key={starIndex}
                                                size={20}
                                                className={`cursor-pointer ${starIndex < ratings[category.id]
                                                    ? 'text-primary-orange-500'
                                                    : 'text-gray-300'
                                                    }`}
                                                onClick={() =>
                                                    handleRating(category.id, starIndex + 1)
                                                }
                                            />
                                        ))}
                                    </div>
                                </Field>
                            ))}
                            <Field>
                                <Label>Additional Comments</Label>
                                <Textarea
                                    className="mt-2 w-full"
                                    value={comments}
                                    onChange={handleComments}
                                />
                            </Field>
                        </FieldGroup>
                    </Fieldset>
                </form>
                <AlertActions>
                    {!isLoading &&
                        <>
                            <Button plain onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={handleSubmit}>
                                Submit Rating
                            </Button>
                        </>
                    }
                </AlertActions>
                {isLoading &&
                    <div className="w-full flex justify-center">
                        <LoadingIcon />
                    </div>
                }
            </Alert>
        </>
    )
}