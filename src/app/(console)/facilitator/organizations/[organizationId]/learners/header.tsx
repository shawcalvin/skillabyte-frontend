import { Organization } from "@/lib/types/organization"


type LearnerHeaderProps = {
    organization: Organization;
}
export default function LearnerHeader({ organization }: LearnerHeaderProps) {
    const seatPercentage = Math.round((organization.used_seats / organization.seats) * 100);

    return (
        <div className="w-full max-w-7xl flex flex-col items-center text-primary-blue-900 text-center bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 shadow-sm p-5 rounded-lg mb-8">
            <div className="font-semibold">
                <span className="mr-2">Seats Filled:</span>
                <span>{organization.used_seats}/{organization.seats}</span>
            </div>
            <div className="w-full max-w-2xl bg-gray-300 rounded-full h-2 mb-6">
                <div
                    className={`bg-primary-blue-500 h-2 rounded-full`}
                    style={{ width: `${seatPercentage}%` }}
                />
            </div>
            <div className="font-normal">
                To request more seats, contact David Wood at davidwood@byu.edu.
            </div>
        </div>
    )
}