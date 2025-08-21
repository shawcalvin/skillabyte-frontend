"use client"

import { TokenHandler } from "@/lib/tokens"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
    const router = useRouter()

    useEffect(() => {
        const logout = async () => {
            await TokenHandler.removeTokens();
            sessionStorage.clear();

            router.push("/login");
        }

        logout()
    }, []);

    return (
        <>
        </>
    )
}