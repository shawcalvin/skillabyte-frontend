"use server"

import { HttpClient } from "@/lib/client";
import { HttpError } from "@/lib/error";
import { TokenHandler } from "@/lib/tokens"
import { redirect } from "next/navigation";

export async function login(email: string, password: string): Promise<{ message: string, code: number }> {
    const url = process.env.NEXT_PUBLIC_API_URL + "/auth/login/"
    const res = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    });

    const data = await res.json()
    if (res.ok) {
        TokenHandler.setTokens(data.access, data.refresh);

        return {
            message: "Tokens set successfully",
            code: res.status
        }
    }


    let errorMessage;
    switch (res.status) {
        case 408:
            errorMessage = "The request took too long. Please try again later.";
            break;
        case 404:
            errorMessage = "Unable to connect to the server. Please check your network connection.";
            break;
        case 400:
        case 401:
            errorMessage = "Invalid email or password. Please check your credentials and try again.";
            break;
        case 502:
            errorMessage = "A network error occurred. Please check your connection and try again.";
            break;
        default:
            errorMessage = "An unexpected error occurred. Please try again.";
            break;
    }
    return {
        message: errorMessage,
        code: res.status
    }
};

export async function logout() {
    await TokenHandler.removeTokens();
    redirect("/login")
}

export async function createAccount(firstName: string, lastName: string, email: string, password: string, open_to_research: boolean) {
    try {
        const createRes = await HttpClient.post('/auth/register/', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            open_to_research: open_to_research
        }, false);

        const loginRes = await HttpClient.post<{ access: string, refresh: string }>('/auth/login/', {
            email: email,
            password: password
        }, false);

        TokenHandler.setTokens(loginRes.data.access, loginRes.data.refresh);
        return {
            message: "Account created successfully",
            code: createRes.status
        }
    }
    catch (error) {
        if (error instanceof HttpError) {
            let errorMessage;
            switch (error.code) {
                case 401:
                    errorMessage = "Unable to connect to the server. Please check your network connection.";
                    break;
                case 400:
                    if (error.data.email) {
                        errorMessage = "An account already exists with this email. Please use a different email or log in.";
                    } else {
                        errorMessage = "Invalid input. Please check the information provided and try again.";
                    }
                    break;
                case 502:
                case 503:
                    errorMessage = "A network error occurred. Please check your connection and try again.";
                    break;
                default:
                    errorMessage = "An unexpected error occurred. Please try again.";
                    break;
            }
            return {
                message: errorMessage,
                code: error.code || 500,
            };
        }
        return {
            message: "An unexpected error occurred. Please try again.",
            code: 500,
        };
    }
}