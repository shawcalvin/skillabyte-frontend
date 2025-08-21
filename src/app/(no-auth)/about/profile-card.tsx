import { Image } from "@/components/ui/media";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

type ProfileCardProps = {
    name: string;
    title: string;
    description: string;
    src: string;
    linkedin: string;
    size?: string;
}
export function ProfileCard({ name, title, description, src, linkedin, size = "510px" }: ProfileCardProps) {
    return (
        <div className="max-w-[19rem] w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            {/* Image Section */}
            <div className="relative">
                <Image
                    className="object-cover object-top"
                    src={src}
                    alt={`${name}'s profile`}
                    size={size}
                />
            </div>
            <div className="px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Name and Title */}
                    <div className="flex items-baseline space-x-2">
                        <p className="text-md font-semibold text-gray-800">{name}</p>
                        <p className="text-sm text-gray-500">{title}</p>
                    </div>
                    {/* LinkedIn Icon */}
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 ml-2"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={30} />
                        </a>
                    )}
                </div>
                {/* Description */}
                <p className="text-md mb-8 font-medium text-gray-800">{description}</p>
            </div>
        </div>
    );
};
