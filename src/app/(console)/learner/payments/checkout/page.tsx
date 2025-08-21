import { HttpClient } from "@/lib/client";
import { convertToSubcurrency } from "@/lib/payments";
import { CartItem } from "@/lib/types/payments";
import { CheckoutFormProvider } from "./checkout-form-provider";

export const dynamic = 'force-dynamic';

export default async function CheckoutPage() {
    const items = (await HttpClient.get<CartItem[]>('/payments/cart/')).data;
    const subtotal = items.reduce((acc, item) => acc + parseInt(item.product.price), 0);

    const clientSecret = (await HttpClient.post<string>('/payments/intent/', {
        amount: convertToSubcurrency(subtotal),
        currency: 'usd'
    })).data

    return (
        <>
            <CheckoutFormProvider items={items} amount={convertToSubcurrency(subtotal)} clientSecret={clientSecret} />
        </>
    )
}