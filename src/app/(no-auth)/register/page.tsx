import { CreateAccountForm } from "./create-account-form";

export default function Page() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-[520px]">
                    <CreateAccountForm />
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an acconut?{' '}
                        <a href="/login" className="font-semibold leading-6 text-primary-orange-500 hover:text-primary-orange-400">
                            Sign in &rarr;
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}