import { Nunito } from "next/font/google";
import "../globals.css";

import { Sidebar } from "@/components/shared-components/Sidebar";
import { ReactNode } from "react";
import { NextAuthProvider } from "@/components/shared-components/NextAuthProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "BookWise",
  description: "Book recommendations platform",
};

interface RootLayoutProps {
  children: ReactNode;
  ratingsModal: ReactNode;
  loginModal: ReactNode;
}

export default function RootLayout({
  children,
}: // ratingsModal,
// loginModal,
RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.className} bg-gray-800 text-gray-100`}>
        <NextAuthProvider>
          <main className="flex h-screen px-5 pt-5 ">
            {/* @ts-expect-error Server Component */}
            <Sidebar />

            {children}
          </main>
          {/* 
          {loginModal}
          {ratingsModal} */}
        </NextAuthProvider>
      </body>
    </html>
  );
}
