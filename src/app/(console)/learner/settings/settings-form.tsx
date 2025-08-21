"use client"

import { updateUser } from "@/actions/users";
import { Button } from "@/components/ui/button";
import { LoadingIcon } from "@/components/ui/loading-icon";
import { Field, FieldGroup, Fieldset, Label } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";
import { formatDateString } from "@/lib/dates";
import { User } from "@/lib/types/user";
import { useState } from "react";

type SettingsFormProps = {
    user: User;
}

type FormData = {
    first_name: string;
    last_name: string;
    email: string;
}

export function UserSettingsForm({ user }: SettingsFormProps) {
    const [formData, setFormData] = useState<FormData>({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<{ has: (field: keyof FormData) => boolean; get: (field: keyof FormData) => string | null } | null>(null);

    const validateForm = () => {
        const errors: Record<string, string> = {};
        if (!formData.first_name) {
            errors.first_name = "This field is required."
        }
        if (!formData.last_name) {
            errors.last_name = "This field is required."
        }
        if (!formData.email) {
            errors.email = "This field is required."
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
        const hasErrors = ["first_name", "last_name", "email"].some(field => errors.has(field as keyof FormData));

        if (hasErrors) {
            setFieldErrors(errors);
            setLoading(false);
            return;
        }

        try {
            const res = await updateUser(formData.first_name, formData.last_name, formData.email);
            // if (res.code === 200) {

            // }
            // else {
            //     setError(res.message)
            // }
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
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
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
                                First name
                            </Label>
                            <Input
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                invalid={fieldErrors?.has('first_name')}
                            />
                        </Field>
                        <Field className="w-1/2 ml-2">
                            <Label>
                                Last name
                            </Label>
                            <Input
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                invalid={fieldErrors?.has('last_name')}
                            />
                        </Field>
                    </div>
                    <Field>
                        <Label>
                            Email
                        </Label>
                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            invalid={fieldErrors?.has('email')}
                        />
                    </Field>
                    <Field>
                        <Field>
                            <Label>
                                Date joined
                            </Label>
                            <Input
                                value={formatDateString(user.date_joined)}
                                disabled
                            />
                        </Field>
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