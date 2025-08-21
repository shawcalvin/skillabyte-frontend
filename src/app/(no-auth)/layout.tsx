import { RootLayout } from "@/components/layouts/root-layout"

export default function RootConsoleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  )
}