import { Nunito } from "next/font/google";

import "../globals.css";

import { NextAuthProvider } from "@/components/shared-components/NextAuthProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Login | BookWise",
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
        <NextAuthProvider>
          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
