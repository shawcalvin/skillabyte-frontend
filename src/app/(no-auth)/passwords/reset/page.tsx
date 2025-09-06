import { ForgotPasswordForm } from "./forgot-password-form";

export default function Page() {

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <ForgotPasswordForm />

                <p className="mt-10 text-center text-sm text-gray-500">
                    Changed your mind?{' '}
                    <a href="/login" className="font-semibold leading-6 text-primary-orange-500 hover:text-primary-orange-400">
                        Login &rarr;
                    </a>
                </p>
            </div>
        </>
    )
}