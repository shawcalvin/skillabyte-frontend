import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

import { Profile } from "../enums/profile";
import { TokenHandler } from "../tokens";

const getProfiles = (): Profile[] => {
    const profiles = [Profile.LEARNER]
    if (TokenHandler.getIsFacilitator()) {
        profiles.push(Profile.FACILITATOR)
    }

    return profiles
}

interface ProfileState {
    profiles: Profile[];
    activeProfile: Profile;
    setActiveProfile: (newProfile: Profile) => void;
}

export const useProfileStore = create<ProfileState>()(
    persist(
        (set) => ({
            profiles: getProfiles(),
            activeProfile: Profile.LEARNER,
            setActiveProfile: (newProfile: Profile) => set({ activeProfile: newProfile }),
        }),
        {
            name: 'profile-store',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);