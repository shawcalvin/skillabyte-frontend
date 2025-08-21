

export function NasbaStatement() {
    return (
        <div className="flex items-center mt-16 bg-gray-50 p-4 rounded-lg">
            <div className="w-full min-w-20 max-w-20 mr-8">
                <img
                    src="/images/logos/nasba_logo.png"
                    alt="NASBA Registered Sponsor Logo"
                    className="w-full h-auto flex-shrink-0"
                />
            </div>
            <div className="rounded-lg text-sm font-light">
                <div className="italic">
                    Skillabyte LLC is registered with the National Association of State Boards of Accountancy (NASBA) as a sponsor of continuing professional education on the National Registry of CPE Sponsors. State boards of accountancy have final authority on the acceptance of individual courses for CPE credit. Complaints regarding registered sponsors may be submitted to the National Registry of CPE Sponsors through its website: www.nasbaregistry.org.
                </div>
                <div className="min-h-8 mt-4 flex flex-wrap">
                    <div className="mr-4">
                        <a href="/legal/terms-of-service#refund-policy" className="text-blue-500 hover:underline">
                            Refund Policy
                        </a>
                    </div>
                    <div className="mr-4">
                        <a href="/legal/terms-of-service#complaint-resolution-policy" className="text-blue-500 hover:underline">
                            Complaint Resolution Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}