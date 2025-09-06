'use client'

import { useState } from "react";

import { confirmResetPassword } from "@/actions/auth";
import { useParams } from "next/navigation";
import { LoadingIcon } from "@/components/ui/loading-icon";
import { ErrorMessage, Field, FieldGroup, Fieldset, Label } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { TextLogo } from "@/components/logo/logo";

type FormData = {
    password: string | null;
    confirmPassword: string | null;
}

export function ResetPasswordForm() {
    const params = useParams<{ uid: string; token: string }>()

    const [loading, setLoading] = useState<boolean>(false);
    const [fieldErrors, setFieldErrors] = useState<{ has: (field: keyof FormData) => boolean; get: (field: keyof FormData) => string | null } | null>(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormData>({
        password: null,
        confirmPassword: null,
    });

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
        if (!formData.password) {
            errors.password = "Please enter your new password."
        }
        if (formData.password && !validatePassword(formData.password)) {
            errors.password = "Password must contain at least one uppercase character, lowercase character, digit, and special character."
        }
        if (formData.password && formData.password.length < 8) {
            errors.password = "Password must be at least 8 characters."
        }
        if (!formData.password) {
            errors.password = "This confirm your new password."
        }
        if (!formData.confirmPassword || formData.confirmPassword != formData.password) {
            errors.confirmPassword = "Passwords do not match."
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
        const hasErrors = ["password", "confirmPassword"].some(field => errors.has(field as keyof FormData));
        if (hasErrors) {
            setFieldErrors(errors);
            setLoading(false);
            return;
        }

        try {
            const { password, confirmPassword } = formData;
            const res = await confirmResetPassword(params.token, params.uid, password!, confirmPassword!)
            if (res.code === 200) {
                setSuccess(true)
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

    if (success) {
        return (
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 text-center">
                <TextLogo color="blue" className='h-16 w-auto mx-auto mb-8' />

                <p className="mt-10 text-center text-sm text-gray-500 mb-4">
                    Your password has been reset successfully.{' '}
                </p>
                <a href="/login" className="text-sm font-semibold leading-6 text-primary-orange-500 hover:text-primary-orange-400">
                    Login &rarr;
                </a>
            </div>
        )
    }

    return (
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <TextLogo color="blue" className='h-16 w-auto mx-auto mb-8' />
            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <Fieldset>
                    <FieldGroup className="space-y-4">
                        <Field>
                            <Label className="flex justify-between items-center">
                                <div>
                                    New Password<span className="text-red-500"> *</span>
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
                                    Reset Password
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