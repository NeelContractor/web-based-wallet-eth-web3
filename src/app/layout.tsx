import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Appbar from "../components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Based Wallet",
  description: "A Web based wallet with functionily to create multiple wallets with a mnemonic phrase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-[100vh]">
          <Appbar />
          {children}
        </main>
      </body>
    </html>
  );
}
