"use client"

import { convertToSubcurrency } from "@/lib/payments"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Checkout } from "./checkout-page"

const key = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
if (!key) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined!")
}
const stripePromise = loadStripe(key)

export default function PaymentsPage() {
    const amount = 120;
    return (
        <Elements
            stripe={stripePromise}
            options={{
                mode: "payment",
                amount: convertToSubcurrency(amount),
                currency: "usd"
            }}
        >
            <Checkout amount={amount} />
        </Elements>
    )
}