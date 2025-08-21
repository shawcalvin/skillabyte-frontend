"use client"

import { Course } from "@/lib/types/course";
import Link from "next/link";
import { ArrowRightCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { TagLabel } from "@/components/ui/tag";
import { Alert, AlertActions, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HttpClient } from "@/lib/client";
import { revalidatePath } from "next/cache";
import { formatDateString } from "@/lib/dates";

export function PreviewHeader({ course }: { course: Course }) {
    const [isOpen, setIsOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleAddCourse = async (id: number) => {
        try {
            await HttpClient.post('/payments/cart/add/', {
                course_id: id
            });
            setAlertMessage(`${course.title} has been added to your cart.`)
            revalidatePath('/payments/cart')
        }
        catch (error) {
            setAlertMessage(`${course.title} is already in your cart.`)
        }
        setIsOpen(true)
    }

    return (
        <>
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
                    <div onClick={() => handleAddCourse(course.id)} className="flex flex-row font-normal hover:font-bold group transition-all duration-300">
                        <span className="text-sm mr-2 hidden md:inline">Add to cart</span>
                        <PlusCircleIcon className="w-5 group-hover:w-0 transition-all duration-300" />
                        <ArrowRightCircleIcon className="w-0 group-hover:w-5 transition-all duration-300" />
                    </div>
                </div>
                <div className="min-h-10 my-2 flex flex-wrap items-center text-sm">
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
            <Alert open={isOpen} onClose={setIsOpen}>
                <AlertTitle>
                    {alertMessage}
                </AlertTitle>
                <AlertDescription>
                    Visit your cart to finish purchasing this course, or continue shopping.
                </AlertDescription>
                <AlertActions>
                    <Button plain onClick={() => setIsOpen(false)} className='text-gray-400'>
                        Continue Shopping
                    </Button>
                    <Link href={'/learner/payments/cart'} className='text-sm font-extrabold text-primary-blue-900 hover:text-primary-blue-800'>
                        View Cart &rarr;
                    </Link>
                </AlertActions>
            </Alert>
        </>
    )
}