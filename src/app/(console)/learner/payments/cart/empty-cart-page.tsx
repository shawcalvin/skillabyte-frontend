import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export function EmptyCartPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-primary-blue-900 bg-gradient-to-br from-gray-100 via-white to-gray-100 rounded-xl shadow-sm min-h-96 p-8">
                <ShoppingCartIcon className="w-24" />
                <p className="text-center font-semibold">
                    Your cart is currently empty! Discover new courses on the <a href={'/learner/catalog'} className="underline font-bold hover:text-primary-blue-800">catalog page &rarr;</a>
                </p>
            </div>
        </>
    )
}