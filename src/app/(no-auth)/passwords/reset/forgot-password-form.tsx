"use client"

import { useState } from "react";
import { requestResetPassword } from "@/actions/auth";
import { LoadingIcon } from "@/components/ui/loading-icon";
import { TextLogo } from "@/components/logo/logo";

export function ForgotPasswordForm() {
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const { email } = formData;
        if (!email) return "Please enter the email associated with your account.";
        return null;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setError(null);
        setLoading(true);

        try {
            const { email } = formData;
            const res = await requestResetPassword(email);

            if (res.code === 200) {
                setSuccess(true);
                return;
            }

            setError(res.message);

        } catch (e) {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <TextLogo color="blue" className='h-16 w-auto mx-auto mb-8' />

                        <p className="mt-10 text-center text-sm text-gray-500 mb-4">
                            Check your email for instructions on how to reset your password.{' '}
                        </p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                    <TextLogo color="blue" className='h-16 w-auto mx-auto mb-8' />
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
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
                </div>
            </div>
        </>
    )
}