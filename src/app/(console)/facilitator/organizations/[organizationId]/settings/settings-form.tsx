"use client"

import { updateOrganization } from "@/actions/organizations";
import { Button } from "@/components/ui/button";
import { LoadingIcon } from "@/components/ui/loading-icon";
import { ErrorMessage, Field, FieldGroup, Fieldset, Label, Legend } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatDateString } from "@/lib/dates";
import { Organization } from "@/lib/types/organization";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SettingsFormProps = {
    organization: Organization
}

type FormData = {
    name: string;
    description: string;
}

export function SettingsForm({ organization }: SettingsFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: organization.name,
        description: organization.description,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<{ has: (field: keyof FormData) => boolean; get: (field: keyof FormData) => string | null } | null>(null);

    const router = useRouter();

    const validateForm = () => {
        const errors: Record<string, string> = {};
        if (!formData.name) {
            errors.name = "This field is required."
        }
        if (!formData.description) {
            errors.description = "This field is required."
        }
        return {
            has: (field: keyof FormData) => !!errors[field],
            get: (field: keyof FormData) => errors[field] || null,
        };
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const errors = validateForm();
        const hasErrors = ["name", "description"].some(field => errors.has(field as keyof FormData));

        if (hasErrors) {
            setFieldErrors(errors);
            setLoading(false);
            return;
        }

        try {
            const res = await updateOrganization(organization.id, formData.name, formData.description);
            if (res.code === 200) {

            }
            else {
                setError(res.message)
            }
        }
        catch (error) {
            setError("An unexpected error occurred. Please try again.");
        }
        finally {
            setLoading(false);
        }

    }

    const handleCancel = () => {
        setFormData({
            name: organization.name,
            description: organization.description,
        });
    }

    if (loading) {
        return <LoadingIcon size={8} color="light" />
    }

    return (
        <form className="w-full max-w-xl" onSubmit={handleSubmit}>
            <Fieldset>
                <FieldGroup>
                    <div className="flex justify-between">
                        <Field className="w-1/2 mr-2">
                            <Label>
                                Add code
                            </Label>
                            <Input
                                value={organization.add_code}
                                disabled
                            />
                        </Field>
                        <Field className="w-1/2 ml-2">
                            <Label>
                                Total seats
                            </Label>
                            <Input
                                value={organization.seats}
                                disabled
                            />
                        </Field>
                    </div>
                    <Field>
                        <Label>
                            Date created
                        </Label>
                        <Input
                            value={formatDateString(organization.date_created)}
                            disabled
                        />
                    </Field>
                    <Field>
                        <Label>
                            Organization Name
                        </Label>
                        <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            invalid={fieldErrors?.has('name')}
                        />
                        {fieldErrors?.has('name') &&
                            <div className="flex flex-row">
                                <ExclamationCircleIcon className="w-4 text-red-500 mr-4" />
                                <ErrorMessage>{fieldErrors.get('name')}</ErrorMessage>
                            </div>}
                    </Field>
                    <Field>
                        <Label>
                            Description
                        </Label>
                        <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            invalid={fieldErrors?.has('description')}
                        />
                        {fieldErrors?.has('description') &&
                            <div className="flex flex-row">
                                <ExclamationCircleIcon className="w-4 text-red-500 mr-4" />
                                <ErrorMessage>{fieldErrors.get('description')}</ErrorMessage>
                            </div>}
                    </Field>
                </FieldGroup>
            </Fieldset>
            <div className="w-full flex justify-center mt-8">
                <Button outline className="mx-4" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button type="submit" className="mx-4">
                    Save changes
                </Button>
            </div>
        </form>
    )
}