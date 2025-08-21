import { Divider } from "@/components/ui/divider";
import { TokenHandler } from "@/lib/tokens";

export async function DashboardHeader() {
    let firstName;
    try {
        firstName = await TokenHandler.getFirstNameServer();
    }
    catch (error) {
        firstName = ""
    }

    return (
        <>
            <div className="text-lg lg:text-xl text-primary-blue-900 font-bold mb-12">
                <span>Welcome back {firstName}!</span>
                <div className="mt-4 text-sm lg:text-lg font-normal">
                    <span className="font-normal">
                        Looking for something new?
                    </span>
                    <a className="text-primary-orange-500 font-semibold hover:text-primary-orange-400" href="/learner/catalog"> Explore the catalog &rarr;</a>
                </div>
            </div>
            <div className="flex justify-center">
            </div>
        </>
    );
}