import { HttpClient } from "@/lib/client"
import { CartItem } from "@/lib/types/payments"
import { CartItemList } from "./cart-item-list"
import { EmptyCartPage } from "./empty-cart-page";

export const dynamic = 'force-dynamic';

export default async function CartPage() {
    const res = await HttpClient.get<CartItem[]>('/payments/cart/');
    const items = res.data

    if (items.length === 0) {
        return <EmptyCartPage />
    }

    return (
        <CartItemList items={items} />
    )
}