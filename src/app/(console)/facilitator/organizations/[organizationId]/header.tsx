"use client"

import { Organization } from "@/lib/types/organization"
import { Alert, AlertActions, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Square2StackIcon } from "@heroicons/react/16/solid"
import { useState } from "react"
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";

type OrganizationHeaderProps = {
    organization: Organization;
}
export function Header({ organization }: OrganizationHeaderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code);
        setIsOpen(true);
    };

    return (
        <>
            <div className="min-w-96 mb-16 lg:mb-0">
                <div className="text-primary-blue-900 text-2xl font-bold">
                    Organization Details
                </div>
                <div className="mt-2 text-primary-blue-900 text-xl font-bold">
                    {organization.name}
                </div>
                <Divider className="mt-2" />
                <div className="mt-2 text-gray-500 text-lg font-semibold">
                    {organization.description}
                </div>
                <div className="mt-2 text-gray-500 text-md font-normal flex">
                    Add Code: <span className="ml-2 font-normal">{organization.add_code}</span>
                    <Square2StackIcon
                        onClick={() => handleCopy(organization.add_code)}
                        className="w-5 ml-2 transition-color duration-100 hover:text-gray-400 cursor-pointer"
                    />
                </div>
                <Alert open={isOpen} onClose={setIsOpen}>
                    <AlertTitle>
                        Add code copied to clipboard.
                    </AlertTitle>
                    <AlertDescription>
                        Share this code with the individuals you want to join your organization. They can use it to register and gain access to this organization&apos;s courses.
                    </AlertDescription>
                    <AlertActions>
                        <Button plain onClick={() => setIsOpen(false)} className="text-gray-400">
                            Close
                        </Button>
                    </AlertActions>
                </Alert>
            </div>
        </>
    );
}