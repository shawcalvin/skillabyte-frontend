import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/ui/dropdown'
import { Navbar, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '@/components/ui/navbar'
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from '@/components/ui/sidebar'
import { StackedLayout } from '@/components/ui/stacked-layout'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  UserIcon,
} from '@heroicons/react/16/solid'

import { TextLogo } from '../logo/logo'

const navItems = [
  { label: 'Home', url: '/' },
  { label: 'Courses', url: '/courses' },
]

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

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            {navItems.map(({ label, url }) => (
              <NavbarItem key={label} href={url}>
                {label}
              </NavbarItem>
            ))}
          </NavbarSection>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem} className='border border-primary-gray-200 hover:border-primary-gray-300 rounded-md'>
                <UserIcon />
                <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/login">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign in</DropdownLabel>
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