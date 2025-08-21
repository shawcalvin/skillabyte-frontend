"use client"

import { LoadingIcon } from "@/components/ui/loading-icon";
import { Profile } from "@/lib/enums/profile";
import { useProfileStore } from "@/lib/stores/profile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LandingPage() {
  const router = useRouter();
  const activeProfile = useProfileStore((state) => state.activeProfile);

  useEffect(() => {
    if (activeProfile === Profile.FACILITATOR) {
      router.push("/facilitator/dashboard")
    }
    else if (activeProfile === Profile.LEARNER) {
      router.push("/learner/dashboard")
    }
    else {
      router.push("/login")
    }
  }, [])

  return (
    <>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <LoadingIcon />
      </div>
    </>
  )
}