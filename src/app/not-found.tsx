import { TextLogo } from "@/components/logo/logo";

export default function NotFound() {
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
            <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
                <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
                    <a href="#">
                        <span className="sr-only">Your Company</span>
                        <TextLogo color="blue" className="h-16 w-auto" />
                    </a>
                </header>
                <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
                    <div className="max-w-lg">
                        <p className="text-base/8 font-semibold text-primary-orange-500">404</p>
                        <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-primary-blue-500 sm:text-6xl">
                            Page not found
                        </h1>
                        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            Sorry, we couldn’t find the page you’re looking for.
                        </p>
                        <div className="mt-10">
                            <a href="/" className="text-sm/7 font-semibold text-primary-blue-500">
                                <span aria-hidden="true">&larr;</span> Back to home
                            </a>
                        </div>
                    </div>
                </main>
                <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
                    <img
                        alt=""
                        src="/images/graphics/not-found.svg"
                        className="mx-auto h-full w-full object-contain p-16"
                    />
                </div>

            </div>
        </>
    )
}
