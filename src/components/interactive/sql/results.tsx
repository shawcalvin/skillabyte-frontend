"use client";

import { useState } from "react";
import { LoadingIcon } from "@/components/ui/loading-icon";
import {
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationPrevious,
    PaginationNext,
    PaginationList,
    PaginationPage,
    PaginationGap,
} from "@/components/ui/pagination";

type QueryResultsProps = {
    results: { columns: string[]; values: any[][] }[];
    error?: string | null;
    loading?: boolean;
    pageSize?: number;
};

export function QueryResults({
    results,
    error,
    loading,
    pageSize = 10,
}: QueryResultsProps) {
    if (loading) {
        return (
            <div className="w-full flex justify-center py-4">
                <LoadingIcon />
            </div>
        );
    }

    if (error) {
        return <div className="text-red-600 font-medium py-2">{error}</div>;
    }

    if (results.length === 0) {
        return (
            <div className="text-gray-600 py-2">
                No results. Click the ‘Run’ button to execute your query.
            </div>
        );
    }

    return (
        <div className="max-w-fit">
            {results.map((res, idx) => (
                <PaginatedTable
                    key={idx}
                    columns={res.columns}
                    values={res.values}
                    pageSize={pageSize}
                />
            ))}
        </div>
    );
}

function PaginatedTable({
    columns,
    values,
    pageSize,
}: {
    columns: string[];
    values: any[][];
    pageSize: number;
}) {
    const [pageIndex, setPageIndex] = useState(0);
    const totalPages = Math.ceil(values.length / pageSize);
    const currentPage = pageIndex + 1;

    const start = pageIndex * pageSize;
    const pageRows = values.slice(start, start + pageSize);

    const pages: (number | "gap")[] = [];
    if (totalPages >= 1) {
        pages.push(1);

        if (currentPage > 4) {
            pages.push("gap");
        }

        for (
            let p = Math.max(2, currentPage - 2);
            p <= Math.min(totalPages - 1, currentPage + 2);
            p++
        ) {
            pages.push(p);
        }

        if (currentPage < totalPages - 3) {
            pages.push("gap");
        }

        if (totalPages > 1) {
            pages.push(totalPages);
        }
    }

    return (
        <>
            <p className="mx-2 text-gray-600">{columns.length} columns, {values.length} rows</p>
            <div className="my-4 border border-gray-200 rounded-md overflow-hidden">
                <Table striped grid dense>
                    <TableHead className="bg-gray-800/90">
                        <TableRow className="text-white">
                            {columns.map((col) => (
                                <TableHeader
                                    key={col}
                                    className="min-w-[50px] max-w-max !px-4"
                                >
                                    {col}
                                </TableHeader>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pageRows.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="text-center py-4 text-gray-800">
                                    No values returned
                                </TableCell>
                            </TableRow>
                        ) : (
                            pageRows.map((row, ri) => (
                                <TableRow key={ri}>
                                    {row.map((cell, ci) => (
                                        <TableCell
                                            key={ci}
                                            className="min-w-[50px] max-w-max !px-4"
                                        >
                                            {cell != null ? String(cell) : "NULL"}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )))}
                    </TableBody>
                </Table>

                {totalPages > 1 && <Pagination className="my-4 mx-2">
                    <PaginationPrevious
                        href={currentPage === 1 ? null : "#"}
                        onClick={(e) => {
                            e.preventDefault();
                            setPageIndex((p) => Math.max(p - 1, 0));
                        }}
                    />

                    <PaginationList>
                        {pages.map((p, i) =>
                            p === "gap" ? (
                                <PaginationGap key={`gap-${i}`} />
                            ) : (
                                <PaginationPage
                                    key={p}
                                    href="#"
                                    current={p === currentPage}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPageIndex(p - 1);
                                    }}
                                >
                                    {p}
                                </PaginationPage>
                            )
                        )}
                    </PaginationList>

                    <PaginationNext
                        href={currentPage === totalPages ? null : "#"}
                        onClick={(e) => {
                            e.preventDefault();
                            setPageIndex((p) => Math.min(p + 1, totalPages - 1));
                        }}
                    />
                </Pagination>}
            </div>
        </>
    );
}
