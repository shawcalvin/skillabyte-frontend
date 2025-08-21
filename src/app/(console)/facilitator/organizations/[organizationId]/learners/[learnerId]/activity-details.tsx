'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"

export function ActivityDetails() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>
                        Attempt
                    </TableHeader>
                    <TableHeader>
                        Time Started
                    </TableHeader>
                    <TableHeader>
                        Time Submitted
                    </TableHeader>
                    <TableHeader>
                        Flagged
                    </TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>

                    </TableCell>
                    <TableCell>

                    </TableCell>
                    <TableCell>

                    </TableCell>
                    <TableCell>

                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}