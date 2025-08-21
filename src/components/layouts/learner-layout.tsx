import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { BaseLayout } from "./base-layout"

export function LearnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: 'Dashboard', url: '/learner/dashboard' },
    { label: 'Catalog', url: '/learner/catalog' },
    { label: 'Certificates', url: '/learner/certificates' },
  ]

  const iconNavItems = [
    { icon: <ShoppingCartIcon />, url: '/learner/payments/cart' },
  ]

  return (
    <BaseLayout navItems={navItems} iconNavItems={iconNavItems}>
      {children}
    </BaseLayout>
  )
}