"use client";

import { useState } from "react";
import clsx from 'clsx';
import path from 'path';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Pagination,
    PaginationGap,
    PaginationList,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

import jsonData from "@/data/searchIndex.json";


export function KeywordSearch({ modulePath }: { modulePath: string }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<
        { pageNumber: number; before: string; searchTerm: string; after: string }[]
    >([]);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 5;

    const handleSearch = (input: string) => {
        setCurrentPage(1);
        if (!input.trim()) {
            setSearchResults([]);
            return;
        }

        const relevantEntries = jsonData.filter((entry) => {
            const pageIdSegments = entry.pageId.split(path.sep);
            return pageIdSegments[0] === modulePath;
        });

        const results: { pageNumber: number; before: string; searchTerm: string; after: string }[] = [];

        relevantEntries.forEach((entry) => {
            const regex = new RegExp(`(.{0,30})(${input})(.{0,30})`, "gi");
            let match;

            const pageIdSegments = entry.pageId.split(path.sep);
            const lastSegment = pageIdSegments[pageIdSegments.length - 1];
            const pageNumberMatch = lastSegment.match(/(\d+)-/);
            const pageNumberStr = pageNumberMatch ? pageNumberMatch[1] : null;
            const pageNumber = pageNumberStr ? parseInt(pageNumberStr, 10) : NaN;

            if (!isNaN(pageNumber)) {
                while ((match = regex.exec(entry.text)) !== null) {
                    let [fullMatch, before, searchTerm, after] = match;

                    before = before.replace(/\n/g, " ");
                    searchTerm = searchTerm.replace(/\n/g, " ");
                    after = after.replace(/\n/g, " ");

                    results.push({
                        pageNumber,
                        before,
                        searchTerm,
                        after,
                    });

                    if (regex.lastIndex === match.index) {
                        regex.lastIndex++;
                    }
                }
            }
        });

        results.sort((a, b) => a.pageNumber - b.pageNumber);

        setSearchResults(results);
    };

    const totalResults = searchResults.length;
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
        <>
            <div className="w-full py-2">
                {/* Search Input */}
                <div className="flex items-center mb-4">
                    <Input
                        type="text"
                        placeholder="Search keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 mr-2"
                    />
                    <Button className="mr-2" onClick={() => handleSearch(searchQuery)}>Search</Button>
                    <Button plain onClick={() => {
                        setSearchQuery("")
                        handleSearch("")
                    }}>Clear</Button>
                </div>

                {/* Display Search Results */}
                {searchResults.length > 0 && (
                    <>
                        <Table>
                            <TableBody>
                                {currentResults.map((result, index) => (
                                    <TableRow key={index}>
                                        <TableCell>Page {result.pageNumber}</TableCell>
                                        <TableCell>
                                            ...{result.before}
                                            <strong className="bg-yellow-200">{result.searchTerm}</strong>
                                            {result.after}...
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        {totalPages > 1 && (
                            <div className="mt-4 flex justify-center">
                                <Pagination>
                                    <PaginationPrevious
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handlePreviousPage();
                                        }}
                                        className={clsx(currentPage === 1 && 'pointer-events-none opacity-50')}
                                    />
                                    <PaginationList>
                                        {/* Display page numbers with gaps if necessary */}
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                            if (
                                                page === 1 ||
                                                page === totalPages ||
                                                (page >= currentPage - 2 && page <= currentPage + 2)
                                            ) {
                                                return (
                                                    <PaginationPage
                                                        key={page}
                                                        href="#"
                                                        current={page === currentPage}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handlePageChange(page);
                                                        }}
                                                    >
                                                        {page}
                                                    </PaginationPage>
                                                );
                                            } else if (
                                                page === currentPage - 3 ||
                                                page === currentPage + 3
                                            ) {
                                                return <PaginationGap key={page} />;
                                            } else {
                                                return null;
                                            }
                                        })}
                                    </PaginationList>
                                    <PaginationNext
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNextPage();
                                        }}
                                        className={clsx(currentPage === totalPages && 'pointer-events-none opacity-50')}
                                    />
                                </Pagination>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
