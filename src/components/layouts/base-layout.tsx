'use client'

import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from '@/components/ui/dropdown'
import { Navbar, NavbarDivider, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/ui/navbar'
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarSection } from '@/components/ui/sidebar'
import { StackedLayout } from '@/components/ui/stacked-layout'
import {
    ArrowRightStartOnRectangleIcon,
    ChevronDownIcon,
    QuestionMarkCircleIcon,
    InformationCircleIcon,
    ShieldCheckIcon,
    UserIcon,
    SparklesIcon,
    CheckCircleIcon,
    Cog6ToothIcon,
    ShoppingCartIcon,
} from '@heroicons/react/16/solid'

import { TextLogo } from '../logo/logo'
import { useProfileStore } from '@/lib/stores/profile'
import { useRouter } from 'next/navigation'
import { IconNavItem, NavItem } from '@/lib/types/navigation'
import { Profile } from '@/lib/enums/profile'

function CompanyDropdownMenu() {
    return (
        <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
            <DropdownItem href="/about">
                <InformationCircleIcon />
                <DropdownLabel>About Us</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/frequently-asked-questions">
                <QuestionMarkCircleIcon />
                <DropdownLabel>Frequently Asked Questions</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/legal/privacy-policy">
                <ShieldCheckIcon />
                <DropdownLabel>Privacy Policy</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/legal/terms-of-service">
                <CheckCircleIcon />
                <DropdownLabel>Terms of Service</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/help">
                <SparklesIcon />
                <DropdownLabel>Help Center</DropdownLabel>
            </DropdownItem>
        </DropdownMenu>
    )
}

export function BaseLayout({
    navItems,
    iconNavItems,
    children,
}: Readonly<{
    navItems: NavItem[];
    iconNavItems: IconNavItem[];
    children: React.ReactNode;
}>) {

    const profileStore = useProfileStore();
    const router = useRouter();

    return (
        <StackedLayout
            navbar={
                <Navbar>
                    <NavbarSection className="max-lg:hidden">
                        <Dropdown>
                            <DropdownButton as={NavbarItem} className="max-lg:hidden">
                                <TextLogo color="blue" className='h-10 w-auto' />
                                <ChevronDownIcon />
                            </DropdownButton>
                            <CompanyDropdownMenu />
                        </Dropdown>
                    </NavbarSection>
                    <NavbarDivider className="max-lg:hidden" />
                    <NavbarSection className="max-lg:hidden">
                        {navItems && navItems.map(({ label, url }) => (
                            <NavbarItem key={label} href={url}>
                                {label}
                            </NavbarItem>
                        ))}
                    </NavbarSection>
                    <NavbarSpacer />
                    <NavbarSection>
                        {iconNavItems && iconNavItems.map(({ icon, url }, index) => (
                            <NavbarItem key={index} href={url}>
                                {icon}
                            </NavbarItem>
                        ))}
                        <Dropdown>
                            <DropdownButton as={NavbarItem} className='border border-primary-gray-200 hover:border-primary-gray-300 rounded-md'>
                                <UserIcon />
                                <ChevronDownIcon />
                            </DropdownButton>
                            <DropdownMenu className="min-w-64" anchor="bottom end">
                                {
                                    profileStore.profiles.length > 1 && <>
                                        {profileStore.profiles.map((profile, index) => (
                                            <DropdownItem key={index}
                                                onClick={() => {
                                                    profileStore.setActiveProfile(profile);
                                                    router.push(`/${profile.toLowerCase()}/dashboard`)
                                                }
                                                }
                                                disabled={profile === profileStore.activeProfile}
                                                className={profile === profileStore.activeProfile ? 'bg-gray-200' : ''}
                                            >
                                                <UserIcon />
                                                {profile} Profile
                                            </DropdownItem>
                                        ))}
                                        <DropdownDivider />
                                    </>
                                }
                                <DropdownItem
                                    onClick={() => {
                                        profileStore.setActiveProfile(Profile.LEARNER);
                                        router.push(`/learner/settings`)
                                    }}>
                                    <Cog6ToothIcon />
                                    <DropdownLabel>Account settings</DropdownLabel>
                                </DropdownItem>
                                <DropdownDivider />
                                <DropdownItem href="/logout">
                                    <ArrowRightStartOnRectangleIcon />
                                    <DropdownLabel>Sign out</DropdownLabel>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarSection>
                </Navbar>
            }
            sidebar={
                <Sidebar>
                    <SidebarHeader>
                        <Dropdown>
                            <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                                <TextLogo color="blue" className='h-10 w-auto' />
                                <ChevronDownIcon />
                            </DropdownButton>
                            <CompanyDropdownMenu />
                        </Dropdown>
                    </SidebarHeader>
                    <SidebarBody>
                        <SidebarSection>
                            {navItems.map(({ label, url }) => (
                                <SidebarItem key={label} href={url}>
                                    {label}
                                </SidebarItem>
                            ))}
                        </SidebarSection>
                    </SidebarBody>
                </Sidebar>
            }
        >
            {children}
        </StackedLayout>
    )
}