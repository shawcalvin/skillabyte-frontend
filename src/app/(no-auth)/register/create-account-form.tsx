'use client'

import { useState } from "react";

import { createAccount } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { LoadingIcon } from "@/components/ui/loading-icon";
import { ErrorMessage, Field, FieldGroup, Fieldset, Label } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Checkbox, CheckboxField, CheckboxGroup } from "@/components/ui/checkbox";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { TextLogo } from "@/components/logo/logo";

type FormData = {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    confirmPassword: string | null;
    openToResearch: boolean;
    acceptedPrivacyPolicy: boolean;
}

export function CreateAccountForm() {
    const [loading, setLoading] = useState<boolean>(false);
    const [fieldErrors, setFieldErrors] = useState<{ has: (field: keyof FormData) => boolean; get: (field: keyof FormData) => string | null } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormData>({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
        openToResearch: true,
        acceptedPrivacyPolicy: false
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const validatePassword = (password: string) => {
        return (
            password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /\d/.test(password) &&
            /[!@#$%^&*(),.?":{}|<>]/.test(password)
        );
    };

    const validateForm = () => {
        const errors: Record<string, string> = {};
        if (!formData.firstName) {
            errors.firstName = "This field is required."
        }
        if (!formData.lastName) {
            errors.lastName = "This field is required."
        }
        if (!formData.email) {
            errors.email = "This field is required."
        }
        if (formData.password && !validatePassword(formData.password)) {
            errors.password = "Password must contain at least one uppercase character, lowercase character, digit, and special character."
        }
        if (formData.password && formData.password.length < 8) {
            errors.password = "Password must be at least 8 characters."
        }
        if (!formData.password) {
            errors.password = "This field is required."
        }
        if (!formData.confirmPassword || formData.confirmPassword != formData.password) {
            errors.confirmPassword = "Passwords do not match."
        }
        if (!formData.acceptedPrivacyPolicy) {
            errors.acceptedPrivacyPolicy = "This field is required."
        }
        return {
            has: (field: keyof FormData) => !!errors[field],
            get: (field: keyof FormData) => errors[field] || null,
        };
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const errors = validateForm();
        const hasErrors = ["firstName", "lastName", "email", "password", "confirmPassword", "acceptedPrivacyPolicy"].some(field => errors.has(field as keyof FormData));
        if (hasErrors) {
            setFieldErrors(errors);
            setLoading(false);
            return;
        }

        try {
            const { firstName, lastName, email, password, confirmPassword, openToResearch } = formData;
            const res = await createAccount(firstName!, lastName!, email!, password!, openToResearch);
            if (res.code === 201) {
                router.push("/learner/dashboard");
            } else {
                setError(res.message);
            }
        }
        catch (error) {
            setError("An unexpected error occurred. Please try again.");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <TextLogo color="blue" className='h-16 w-auto mx-auto mb-8' />
            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <Fieldset>
                    <FieldGroup className="space-y-4">
                        <div className="grid grid-cols-2">
                            <Field className="mr-1">
                                <Label>First Name<span className="text-red-500"> *</span></Label>
                                <Input
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName || ""}
                                    onChange={handleChange}
                                    autoComplete="given-name"
                                    invalid={fieldErrors?.has('firstName')}
                                />
                                {fieldErrors?.has('firstName') &&
                                    <div className="flex flex-row">
                                        <ExclamationCircleIcon className="w-4 text-red-500 mr-4" />
                                        <ErrorMessage>{fieldErrors.get('firstName')}</ErrorMessage>
                                    </div>}
                            </Field>
                            <Field className="ml-1">
                                <Label>Last Name<span className="text-red-500"> *</span></Label>
                                <Input
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName || ""}
                                    onChange={handleChange}
                                    autoComplete="family-name"
                                    invalid={fieldErrors?.has('lastName')}
                                />
                                {fieldErrors?.has('lastName') &&
                                    <div className="flex flex-row">
                                        <ExclamationCircleIcon className="w-4 text-red-500 mr-4" />
                                        <ErrorMessage>{fieldErrors.get('lastName')}</ErrorMessage>
                                    </div>}
                            </Field>
                        </div>
                        <Field>
                            <Label>Email<span className="text-red-500"> *</span></Label>
                            <Input
                                name="email"
                                type="email"
                                value={formData.email || ""}
                                onChange={handleChange}
                                autoComplete="email"
                                invalid={fieldErrors?.has('email')}
                            />
                            {fieldErrors?.has('email') &&
                                <div className="flex flex-row">
                                    <ExclamationCircleIcon className="w-4 text-red-500 mr-4" />
                                    <ErrorMessage>{fieldErrors.get('email')}</ErrorMessage>
                                </div>}
                        </Field>
                        <Field>
                            <Label className="flex justify-between items-center">
                                <div>
                                    Password<span className="text-red-500"> *</span>
                                </div>
                                <div className="flex items-center text-primary-gray-900 hover:font-bold" onClick={toggleShowPassword}>
                                    {showPassword ? <EyeSlashIcon className="h-4" /> : <EyeIcon className="h-4" />}
                                    <span className="text-xs mx-2">{showPassword ? "Hide" : "Show"}</span>
                                </div>
                            </Label>
                            <Input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={formData.password || ""}
                                onChange={handleChange}
                                autoComplete="current-password"
                                invalid={fieldErrors?.has('password')}
                            />
                            {fieldErrors?.has('password') &&
                                <div className="flex flex-row">
                                    <ExclamationCircleIcon className="w-4 text-red-500 mr-4" />
                                    <ErrorMessage>{fieldErrors.get('password')}</ErrorMessage>
                                </div>}
                        </Field>
                        <Field>
                            <Label>Confirm Password<span className="text-red-500"> *</span></Label>
                            <Input
                                name="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                value={formData.confirmPassword || ""}
                                onChange={handleChange}
                                invalid={fieldErrors?.has('confirmPassword')}
                            />
                            {fieldErrors?.has('confirmPassword') &&
                                <div className="flex flex-row">
                                    <ExclamationCircleIcon className="w-4 text-red-500 mr-4" />
                                    <ErrorMessage>{fieldErrors.get('confirmPassword')}</ErrorMessage>
                                </div>}
                        </Field>
                        <CheckboxGroup>
                            <CheckboxField>
                                <Checkbox
                                    color="blue"
                                    checked={formData.openToResearch}
                                    onChange={(checked: boolean) => setFormData({ ...formData, ["openToResearch"]: checked })}
                                />
                                <div className="inline">
                                    <Label>
                                        (Optional)  I consent to participate in<span> </span>
                                    </Label>
                                    <a href="legal/research-consent" target="blank" className="text-sm text-blue-600 underline">further research.</a>
                                </div>
                            </CheckboxField>
                            <CheckboxField>
                                <Checkbox
                                    color="blue"
                                    checked={formData.acceptedPrivacyPolicy}
                                    onChange={(checked: boolean) => setFormData({ ...formData, ["acceptedPrivacyPolicy"]: checked })}
                                />
                                <div className="inline">
                                    <Label>
                                        I have read and agreed to the <span> </span>
                                    </Label>
                                    <a href="legal/privacy-policy" target="blank" className="text-sm text-blue-600 underline">privacy policy.</a>
                                </div>
                                <div className="text-red-500">
                                    {fieldErrors?.has('acceptedPrivacyPolicy') && <ExclamationCircleIcon className="w-4" />}
                                </div>
                                {fieldErrors?.has('acceptedPrivacyPolicy') && <ErrorMessage className="w-full">{fieldErrors.get('acceptedPrivacyPolicy')}</ErrorMessage>}
                            </CheckboxField>
                        </CheckboxGroup>
                    </FieldGroup>
                </Fieldset>
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-primary-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <div className="flex items-center">
                            {loading &&
                                <LoadingIcon size={6} color="light" />
                            }
                            {!loading &&
                                <p>
                                    Create Account
                                </p>
                            }
                        </div>

                    </button>
                </div>
                <p className="text-xs text-center text-red-500 font-semibold">
                    {error}
                </p>
            </form>
        </div >
    )
}