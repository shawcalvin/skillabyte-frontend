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
            <div className="text-lg lg:text-xl text-primary-blue-900 font-bold mb-8">
                <span>Welcome back {firstName}!</span>
            </div >
            <div className="mb-2 text-lg lg:text-xl font-semibold text-primary-blue-500">
                Organization Dashboard
            </div>
            <Divider className="mb-8" />
        </>
    );
}