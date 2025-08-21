"use client"

import React, { useState, useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { IoInformationCircle } from "react-icons/io5";

type InfoIconProps = {
    info?: string;
    className?: string;
    position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "left"
    | "right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
};

export function InfoIcon({
    info,
    className,
    position = "top-center",
}: InfoIconProps) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipCoords, setTooltipCoords] = useState({ top: 0, left: 0 });
    const iconRef = useRef<HTMLSpanElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const offset = 8; // Gap between the icon and tooltip

    // Compute tooltip placement based on the icon and tooltip dimensions.
    const calculateTooltipPosition = () => {
        if (!iconRef.current || !tooltipRef.current) return;
        const iconRect = iconRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        let top = 0;
        let left = 0;

        switch (position) {
            case "top-left":
                top = iconRect.top - offset - tooltipRect.height;
                left = iconRect.left;
                break;
            case "top-center":
                top = iconRect.top - offset - tooltipRect.height;
                left = iconRect.left + iconRect.width / 2 - tooltipRect.width / 2;
                break;
            case "top-right":
                top = iconRect.top - offset - tooltipRect.height;
                left = iconRect.right - tooltipRect.width;
                break;
            case "bottom-left":
                top = iconRect.bottom + offset;
                left = iconRect.left;
                break;
            case "bottom-center":
                top = iconRect.bottom + offset;
                left = iconRect.left + iconRect.width / 2 - tooltipRect.width / 2;
                break;
            case "bottom-right":
                top = iconRect.bottom + offset;
                left = iconRect.right - tooltipRect.width;
                break;
            case "left":
                top = iconRect.top + iconRect.height / 2 - tooltipRect.height / 2;
                left = iconRect.left - offset - tooltipRect.width;
                break;
            case "right":
                top = iconRect.top + iconRect.height / 2 - tooltipRect.height / 2;
                left = iconRect.right + offset;
                break;
            default:
                top = iconRect.top - offset - tooltipRect.height;
                left = iconRect.left + iconRect.width / 2 - tooltipRect.width / 2;
        }

        setTooltipCoords({ top, left });
    };

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    // When the tooltip is shown, measure its size and then recalc its position.
    useLayoutEffect(() => {
        if (showTooltip) {
            calculateTooltipPosition();
        }
    }, [showTooltip, position, info]);

    return (
        <span
            ref={iconRef}
            className={clsx("inline-flex relative text-primary-blue-500 items-center", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <IoInformationCircle className="w-5 h-5" />
            {showTooltip && info &&
                ReactDOM.createPortal(
                    <div
                        ref={tooltipRef}
                        className={clsx(
                            "p-2 bg-white rounded shadow-lg z-50 border-2 border-gray-100 flex items-center"
                        )}
                        style={{
                            position: "fixed",
                            top: tooltipCoords.top,
                            left: tooltipCoords.left,
                            // Instead of a fixed width, let the tooltip size naturally (or use maxWidth as needed)
                            maxWidth: "18rem", // Tailwind w-72 equivalent
                        }}
                    >
                        <p className="text-sm text-gray-700">{info}</p>
                    </div>,
                    document.body
                )}
        </span>
    );
}

export function InfoIconLink({
    info,
    href,
    className,
}: {
    info?: string;
    href: string;
    className?: string;
}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <InfoIcon info={info} className={className} />
        </a>
    );
}
