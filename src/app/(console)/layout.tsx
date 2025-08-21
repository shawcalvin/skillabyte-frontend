"use client"

import { sessionStorageProvider } from "@/lib/requests/session-storage-provider"
import { SWRConfig } from "swr"

export default function RootConsoleLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <SWRConfig value={{ provider: sessionStorageProvider }}>
            {children}
        </SWRConfig>
    )
}