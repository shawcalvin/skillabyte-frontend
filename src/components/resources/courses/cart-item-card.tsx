"use client"

import { CartItem } from "@/lib/types/payments";
import { TagLabel } from "../../ui/tag";
import { HttpClient } from "@/lib/client";
import { useRouter } from "next/navigation";
import { MinusCircleIcon } from "@heroicons/react/16/solid";


export function CartItemCard({ item }: { item: CartItem }) {
    const router = useRouter()

    const removeItem = async (id: number) => {
        await HttpClient.post('/payments/cart/remove/', {
            course_id: id
        });
        router.refresh();
    }
    return (
        <>
            <div className="w-full min-h-48 mb-4 p-8 rounded-lg text-primary-blue-900 bg-gradient-to-br from-gray-100 via-white to-gray-100 shadow-sm">
                <div className="flex justify-between">
                    <div className="flex flex-row items-center">
                        <div className="font-bold">
                            {item.product.course.title}
                        </div>
                        <div className="ml-4 text-sm text-gray-500">
                            {`Credits Awarded on Completion: ${item.product.course.cpe_credits.toFixed(1)}`}
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="font-bold">
                            ${item.product.price}
                        </div>
                        <button onClick={() => removeItem(item.product.course.id)} className="flex flex-wrap mt-1 text-sm text-blue-500 hover:text-blue-400 items-center">
                            Remove course
                            <MinusCircleIcon className="w-0 lg:w-4 ml-2" />
                        </button>
                    </div>
                </div>
                <div className="flex">
                    {item.product.course.fields_of_study.map((field, index) => (
                        <TagLabel key={index} color="orange">
                            {field.name}
                        </TagLabel>
                    ))}
                    {item.product.course.tags.map((tag, index) => (
                        <TagLabel key={index} color="orange">
                            {tag.name}
                        </TagLabel>
                    ))}
                </div>
                <div className="lg:w-1/2 mt-2 text-sm text-gray-700">
                    {item.product.course.description}
                </div>
            </div>
        </>
    )
}