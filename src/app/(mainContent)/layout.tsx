import { Nunito } from "next/font/google";
import "../globals.css";

import { Sidebar } from "@/components/shared-components/Sidebar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "BookWise",
  description: "Book recommendations platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.className} bg-gray-800 text-gray-100`}>
        <main className="px-5 pt-5 flex h-screen ">
          <Sidebar />

          {children}
        </main>
      </body>
    </html>
  );
}
