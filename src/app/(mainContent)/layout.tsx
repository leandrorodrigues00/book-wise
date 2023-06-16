import { Nunito } from "next/font/google";

import "../globals.css";

import { ReactNode } from "react";

import { NextAuthProvider } from "@/components/next-auth-provider";
import { Sidebar } from "@/components/sidebar-nav";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "BookWise",
  description: "Book recommendations platform",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.className} bg-gray-800 text-gray-100`}>
        <NextAuthProvider>
          <main className="flex h-screen px-5 pt-5 ">
            {/* @ts-expect-error Server Component */}
            <Sidebar />

            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
