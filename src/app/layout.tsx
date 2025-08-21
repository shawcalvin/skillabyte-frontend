import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./globals.css";

import 'prismjs/themes/prism-tomorrow.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skillabyte",
  description: "Skillabyte offers engaging and interactive CPE courses designed to help accounting professionals meet their certification requirements. With easy access to course materials, progress tracking, and certificate management, Skillabyte simplifies continuing education for individuals and enterprises alike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-Q42DTNEEME" />
    </html>
  );
}
