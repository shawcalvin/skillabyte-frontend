import { Currency } from "../enums/payments";
import { Course } from "./course";

export type Product = {
    id: number;
    course: Course;
    price: string;
}

export type CartItem = {
    id: number;
    product: Product
}