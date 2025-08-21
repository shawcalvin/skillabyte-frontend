import { HttpClient } from "@/lib/client";
import { UserSettingsForm } from "./settings-form";
import { User } from "@/lib/types/user";
import { Divider } from "@/components/ui/divider";
import { TokenHandler } from "@/lib/tokens";

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
    const userId = await TokenHandler.getUserIDServer();
    const user = (await HttpClient.get<User>(`/users/users/${userId}`)).data
    return (
        <div className="flex justify-center">
            <div>
                <div className="text-center text-primary-blue-900 text-xl font-bold mb-4">Account Settings</div>
                <Divider className="mb-8" />
                <UserSettingsForm user={user} />
            </div>
        </div>
    )
}