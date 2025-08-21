import React from "react";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { Tooltip } from "./tooltip";
import clsx from "clsx";
import { InfoIcon } from "./info";

type CardButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    description?: string;
    children: React.ReactNode;
}

type CardFieldProps = {
    label: string;
    info?: string;
    children: React.ReactNode;
}

type CardProps = {
    href?: string;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
}

export function CardGroup({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-wrap w-full gap-4">
            {React.Children.map(children, (child) => (
                <>
                    {child}
                </>
            ))}
        </div>
    )
}

export function Card({ href, disabled = false, className, children }: CardProps) {
    return (
        <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 text-primary-blue-900 w-full h-64 md:w-96 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group/card">
            {disabled && (
                <div className="absolute inset-0 bg-gray-300 opacity-30 z-10 h-full w-full"></div>
            )}
            {href && !disabled && <Link href={href} className="absolute inset-0 z-10 opacity-0">
            </Link>}

            <div className={`absolute left-0 top-0 h-full w-4 bg-primary-gray-300 transition-colors duration-300 ${disabled ? "" : "group-hover/card:bg-primary-orange-500"}`}></div>
            <div className="pl-8 relative">
                {children}
            </div>
        </div>
    );
}

export function SkeletonCard() {
    return (
        <div className="relative bg-gradient-to-br from-gray-100 via-white to-gray-100 text-primary-blue-900 h-64 w-96 rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg animate-pulse">
            <div className="absolute inset-0 z-0 opacity-0">
            </div>
            <div className="mt-2 mx-8 bg-gray-200 w-48 h-5 rounded-lg"></div>
            <div className="mt-2 mx-8 bg-gray-200 w-80 h-12 rounded-lg"></div>
            <div className="mt-8 mx-8 bg-gray-200 w-80 h-5 rounded-lg"></div>
            <div className="mt-2 mx-8 bg-gray-200 w-80 h-20 rounded-lg"></div>

            <div className="absolute left-0 top-0 h-full w-4 bg-primary-gray-200 transition-colors duration-300 group-hover/card:bg-primary-orange-500"></div>
        </div>
    )
}

export function CardTitle({ className, children }: CardProps) {
    return (
        <>
            <div className={clsx("flex flex-wrap mt-2 items-center justify-between", className)}>
                <p className="text-sm font-bold mr-2 line-clamp-1">{children}</p>
            </div>
        </>
    )
}

export function CardButton({ onClick, children }: CardButtonProps) {
    return (
        <button onClick={onClick} className="group text-primary-blue-900 hover:text-primary-blue-500 p-2 rounded-md z-20">
            <div className="flex items-center">
                {children}
            </div>
        </button>
    )
}

export function CardLabelGroup({ children }: CardProps) {
    return (
        <div className="flex flex-wrap mt-2 items-center">
            {children}
        </div>
    )
}

export function CardFieldGroup({ children }: CardProps) {
    return (
        <div className="mt-2 mr-4">
            {children}
        </div>
    )
}

export function CardField({ label, children }: CardFieldProps) {
    return (
        <>
            <div className="grid grid-cols-2 mt-2">
                <div className="text-xs text-gray-500 flex items-center">
                    {label}
                </div>
                <div className="text-xs text-gray-900">
                    {children}
                </div>
            </div>
        </>
    )
}

export function CardText({ children }: CardProps) {
    return (
        <div className="text-sm mt-2 font-light line-clamp-4">
            {children}
        </div>
    )
}