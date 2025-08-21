"use client"

import { Course } from "@/lib/types/course";
import Link from "next/link";
import { ArrowRightCircleIcon, PlusCircleIcon } from '@heroicons/react/16/solid';
import { HttpClient } from '@/lib/client';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { Alert, AlertActions, AlertDescription, AlertTitle } from '../../ui/alert';
import { Button } from '../../ui/button';
import { revalidatePath } from 'next/cache';
import { TagLabel } from "../../ui/tag";
import { Card, CardButton, CardField, CardFieldGroup, CardLabelGroup, CardText, CardTitle } from "@/components/ui/card";
import { BadgeButton } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import { Product } from "@/lib/types/payments";


type CatalogCardProps = {
    course: Product;
    disabled?: boolean;
}

export function CatalogCard({ course, disabled = false }: CatalogCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleAddCourse = async (id: number) => {
        try {
            await HttpClient.post('/payments/cart/add/', {
                course_id: id
            });
            setAlertMessage(`${course.course.title} has been added to your cart.`)
            revalidatePath('/payments/cart')
        }
        catch (error) {
            {
                setAlertMessage(`${course.course.title} is already in your cart.`)
            }
        }
        setIsOpen(true)
    }

    return (
        <Card
            href={`/learner/catalog/courses/${course.course.id}/preview`}
            disabled={disabled}
        >
            <div className="flex justify-between items-start">
                <CardTitle className="flex-1 mr-4">
                    {course.course.title}
                </CardTitle>
                {!disabled && (
                    <button
                        onClick={() => handleAddCourse(course.id)}
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
            <Divider />

            <CardLabelGroup>
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
            </CardLabelGroup>
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
                {course.course.prerequisite_courses.length > 0 &&
                    <CardField label="Suggested Prerequisite Courses">
                        {course.course.prerequisite_courses.map((course, index) => (
                            <BadgeButton key={index} href={`/learner/catalog/courses/${course.id}/preview`} color="blue" className="z-20">
                                {course.title}
                            </BadgeButton>
                        ))}
                    </CardField>}
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
    );
}