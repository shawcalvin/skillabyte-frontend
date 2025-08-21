"use client"

import { CartItem } from "@/lib/types/payments"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "./checkout-form";

const key = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
if (!key) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined!")
}
const stripePromise = loadStripe(key)

type CheckoutFormProps = {
    items: CartItem[];
    clientSecret: string;
    amount: number
}

export function CheckoutFormProvider({ items, amount, clientSecret }: CheckoutFormProps) {
    return (
        <Elements
            stripe={stripePromise}
            options={{
                mode: "payment",
                amount: amount,
                currency: "usd"
            }}
        >
            <CheckoutForm items={items} clientSecret={clientSecret} amount={amount} />
        </Elements>
    )
}