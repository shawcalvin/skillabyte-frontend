import { LoadingIcon } from "@/components/ui/loading-icon";
import { Button } from "@/components/ui/button";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { CartItem } from "@/lib/types/payments";
import { Divider } from "@/components/ui/divider";


type CheckoutFormProps = {
    items: CartItem[];
    clientSecret: string;
    amount: number;
}
export function CheckoutForm({ items, clientSecret, amount }: CheckoutFormProps) {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const credits = items.reduce((acc, item) => acc + item.product.course.cpe_credits, 0);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const { error: submitError } = await elements.submit()
        if (submitError && submitError.message) {
            setErrorMessage(submitError.message);
            setLoading(false)
            return;
        }

        try {
            const { error } = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payments/success`
                }
            });
            if (error && error.message) {
                setErrorMessage(error.message)
            }
            else {

            }
            setLoading(false);
        }
        catch (error) {
            console.log(error)
            setLoading(false);
        }
    }

    return (
        <>
            <div className="bg-gradient-to-bl from-gray-200 via-white to-gray-200 rounded-xl shadow-lg py-16">
                <div className="lg:flex">
                    <div className="mb-16 lg:mb-0 lg:w-1/3 lg:mx-4 h-48 flex flex-col justify-between p-6">
                        <div className="text-gray-900 font-bold">Summary</div>
                        <Divider />
                        <div className="flex justify-between text-primary-blue-900 text-sm font-semibold">
                            Total ({items.length} items) <span>${(amount / 100).toFixed(2)}</span>
                        </div>
                        {items.map((item, index) => (
                            <div key={index} className="flex justify-between text-gray-500 text-sm font-semibold">
                                <div className="ml-4">{item.product.course.title} ({item.product.course.cpe_credits} Credits)</div>
                                <div>${parseInt(item.product.price).toFixed(2)}</div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-2/3 flex justify-center">
                        <form onSubmit={handleSubmit} className="w-1/2">
                            {clientSecret && <PaymentElement />}
                            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                            <Button type="submit" className="w-full mt-8">
                                {loading ? <LoadingIcon size={6} color="light" /> : `Pay $${(amount / 100).toFixed(2)}`}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}