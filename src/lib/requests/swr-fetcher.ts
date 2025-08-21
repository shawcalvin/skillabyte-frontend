import { HttpClient } from "../client";

export const swrFetcher = async <T>(url: string) => {
    const res = await HttpClient.get<T>(url);
    return res.data;
};