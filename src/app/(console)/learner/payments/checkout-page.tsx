"use client"

import { Button } from "@/components/ui/button";
import { LoadingIcon } from "@/components/ui/loading-icon";
import { HttpClient } from "@/lib/client"
import { convertToSubcurrency } from "@/lib/payments"
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react"

export function Checkout({ amount }: { amount: number }) {
    const stripe = useStripe();
    const elements = useElements();

    const [clientSecret, setClientSecret] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await HttpClient.post<string>('/payments/intent/', {
                amount: convertToSubcurrency(amount),
                currency: 'usd'
            })
            setClientSecret(res.data);
        }

        if (!clientSecret) {
            fetchData()
        }

    }, [amount, clientSecret])

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
                    return_url: 'http://localhost:3000/payment-success'
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

    if (!clientSecret || !stripe || !elements) {
        return <SkeletonCheckout />
    }

    return (
        <>
            <div className="flex justify-center text-black">
                <form onSubmit={handleSubmit} className="w-1/2">
                    {clientSecret && <PaymentElement />}
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                    <Button type="submit" className="w-full mt-8">
                        {loading ? <LoadingIcon size={6} color="light" /> : `Pay $${amount}`}
                    </Button>
                </form>
            </div>
        </>
    )
}

function SkeletonCheckout() {
    return (
        <div className="flex justify-center text-black min-h-[200px]">
            <div className="w-1/2">
                <div className="w-full rounded-lg h-5/6 bg-gray-200 animate-pulse">

                </div>
                <div className="mt-8 rounded-lg w-full h-1/6 bg-gray-200 animate-pulse">

                </div>
            </div>
        </div>
    )
}