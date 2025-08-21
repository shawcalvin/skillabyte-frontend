"use server";

import { revalidatePath } from "next/cache";
import { HttpClient } from "@/lib/client";

export async function addCourseToCart(id: number) {
    await HttpClient.post("/payments/cart/add/", { course_id: id });
    revalidatePath("/payments/cart");
}