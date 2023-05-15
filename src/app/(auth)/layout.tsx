import { Nunito } from "next/font/google";
import "../globals.css";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
