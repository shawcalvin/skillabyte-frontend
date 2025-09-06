import { ResetPasswordForm } from "./reset-password-form";

export default function Page() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-[520px]">
                    <ResetPasswordForm />
                </div>
            </div>
        </>
    )
}