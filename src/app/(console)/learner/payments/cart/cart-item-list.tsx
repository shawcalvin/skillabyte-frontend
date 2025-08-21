"use client"

import { useRouter } from "next/navigation"

import { CartItemCard } from "@/components/resources/courses/cart-item-card";
import { Divider } from "@/components/ui/divider";
import { CartItem } from "@/lib/types/payments";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { HttpClient } from "@/lib/client";
import { Button } from "@/components/ui/button";
import { convertToSubcurrency } from "@/lib/payments";


export function CartItemList({ items }: { items: CartItem[] }) {
    const router = useRouter()

    const subtotal = items.reduce((acc, item) => acc + parseInt(item.product.price), 0);
    const credits = items.reduce((acc, item) => acc + item.product.course.cpe_credits, 0);

    const handleCheckout = async () => {
        const line_items = items.map(item => ({
            name: item.product.course.title,
            description: item.product.course.description,
            unit_price: convertToSubcurrency(parseInt(item.product.price)),
        }));
        const res = await HttpClient.post<{ url: string }>('/payments/checkout/', {
            line_items: line_items
        });
        router.push(res.data.url)
    }

    return (
        <>
            <div className="flex text-black text-2xl font-bold px-4 my-8">
                <ShoppingCartIcon className="w-8 mx-4" />
                Your Cart
            </div>
            <div className="lg:flex lg:flex-row">
                <div className="lg:w-2/3 flex flex-col items-center">
                    {items.map((item, index) => (
                        <CartItemCard key={index} item={item} />
                    ))}
                </div>
                <div className="lg:w-1/3 lg:mx-4 h-48 flex flex-col justify-between bg-gradient-to-b from-gray-100 via-white to-gray-100 rounded-lg p-6">
                    <div className="text-gray-900 font-bold">Summary</div>
                    <Divider />
                    <div className="flex justify-between text-primary-blue-900 text-sm font-semibold">
                        Subtotal ({items.length} items) <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-primary-blue-900 text-sm font-semibold">
                        CPE Credits <span>{credits.toFixed(1)}</span>
                    </div>
                    <Button color="blue" onClick={handleCheckout}>
                        Proceed to checkout &rarr;
                    </Button>
                </div>
            </div>
        </>
    )
}