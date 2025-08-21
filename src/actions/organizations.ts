"use server"

import { HttpClient } from "@/lib/client"
import { AxiosError } from "axios"
import { revalidatePath } from "next/cache"

export async function updateOrganization(id: number, name: string, description: string) {
    try {
        const res = await HttpClient.patch(`/organizations/organizations/${id}/`, {
            name: name,
            description: description
        })
        revalidatePath(`/facilitator/organizations/${id}`)

        return {
            message: "Organization updated successfully.",
            code: res.status
        }
    }
    catch (error) {
        if (error instanceof AxiosError) {
            console.log(error.response)
            let errorMessage;
            switch (error.code) {
                case 'ECONNABORTED':
                    errorMessage = "The request took too long. Please try again later.";
                    break;
                case 'ENOTFOUND':
                    errorMessage = "Unable to connect to the server. Please check your network connection.";
                    break;
                case 'ERR_BAD_REQUEST':
                    errorMessage = "Invalid data input. Please try again.";
                    break;
                case 'ERR_NETWORK':
                    errorMessage = "A network error occurred. Please check your connection and try again.";
                    break;
                case 'ERR_FR_TOO_MANY_REDIRECTS':
                    errorMessage = "Too many redirects. Please try again later.";
                    break;
                case 'ERR_BAD_RESPONSE':
                    errorMessage = "Server responded with an error. Please try again later.";
                    break;
                default:
                    errorMessage = "An unexpected error occurred. Please try again.";
                    break;
            }
            return {
                message: errorMessage,
                code: error.response?.status || 500,
            };
        }
        return {
            message: "An unexpected error occurred. Please try again.",
            code: 500,
        };
    }
}


export async function registerOrganization(addCode: string) {
    try {
        const res = await HttpClient.post(`/organizations/registered/`, {
            add_code: addCode
        })
        revalidatePath('/learner/dashboard')

        return {
            message: "Organization added successfully.",
            code: res.status
        }
    }
    catch (error) {
        let errorMessage = "An unexpected error occurred. Please try again."
        if (error instanceof AxiosError && error.response) {
            errorMessage = error.response.data?.error || "An unexpected error occurred. Please try again.";
            return {
                message: errorMessage,
                code: error.response?.status || 500,
            };
        }
        return {
            message: errorMessage,
            code: 500,
        };
    }
}