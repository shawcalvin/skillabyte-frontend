'use client'

import { Organization } from "@/lib/types/organization"
import { Alert, AlertActions, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Square2StackIcon } from "@heroicons/react/16/solid"
import { Card, CardButton, CardField, CardFieldGroup, CardLabelGroup, CardText, CardTitle } from "@/components/ui/card";
import { formatDateString } from "@/lib/dates";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";

type OrganizationCardProps = {
    href: string;
    organization: Organization;
}

const patternUrls = [

]
const colors = [
    'blue',
    'orange'
]
export function OrganizationCard({ href, organization }: OrganizationCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const copyAddCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setIsOpen(true);
    }

    return (
        <Card href={`/facilitator/organizations/${organization.id}/settings`}>
            <div className="flex justify-between items-start">

                <button
                    onClick={() => copyAddCode(organization.add_code)}
                    className="m-2 h-6 flex items-center justify-between w-full text-xs hover:text-primary-orange-600 z-20 transition-all duration-300"
                >
                    <CardTitle>
                        {organization.name}
                    </CardTitle>
                    <Square2StackIcon className="w-5 ml-2" />
                </button>
            </div>
            <Divider />
            <CardFieldGroup>
                <CardField label="Date Created">
                    {formatDateString(organization.date_created)}
                </CardField>
                <CardField label="Available Seats">
                    {organization.seats}
                </CardField>
                <CardField label="Used Seats">
                    {organization.used_seats}
                </CardField>
            </CardFieldGroup>
            <div className="mt-4">
                <CardText>
                    {organization.description}
                </CardText>
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
        </Card>
    )
}