import { Nunito } from "next/font/google";
import "../globals.css";

import { Sidebar } from "@/components/shared-components/Sidebar";
import { ReactNode } from "react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "BookWise",
  description: "Book recommendations platform",
};

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.className} bg-gray-800 text-gray-100`}>
        <main className="flex h-screen px-5 pt-5 ">
          <Sidebar />

          {children}
        </main>

        {modal}
      </body>
    </html>
  );
}
