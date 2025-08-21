"use client"

import { useState } from "react";
import clsx from "clsx";
import { MagnifyingGlassCircleIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface PopupProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    description?: string
}

export function Popup({ description, ...props }: PopupProps) {
    const [visible, setVisible] = useState(false)

    return (
        <>
            {/* Trigger button */}
            <div className={props.className}>
                <button
                    type="button"
                    onClick={() => setVisible(true)}
                    className={clsx(
                        "right-2 p-1 bg-gray-100 hover:bg-gray-200 rounded flex items-center text-xs text-gray-700",
                    )
                    }
                    aria-label="Show Popup"
                >
                    <p className="ml-2">
                        {description}
                    </p>
                    <MagnifyingGlassCircleIcon className="h-5 w-5 text-gray-600 mx-2" />
                </button>
            </div>

            {/* Full‐screen overlay */}
            {visible && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={() => setVisible(false)}
                >
                    <div
                        className="inline-flex items-start max-w-3xl mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={props.src}
                            alt={props.alt}
                            className="max-h-[90vh] w-auto rounded shadow-lg"
                        />
                        <button
                            type="button"
                            onClick={() => setVisible(false)}
                            aria-label="Close image preview"
                            className="ml-2 mt-2 p-1 bg-gray-400 bg-opacity-50 hover:bg-gray-200 hover:bg-opacity-50 rounded-full z-10 self-start"
                        >
                            <XMarkIcon className="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
