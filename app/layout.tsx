import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import Web3ModalProvider from "@/providers/web3Provider";
import { cookieToInitialState } from "wagmi";
import { config } from "../providers/wagmiConfig";
export const metadata: Metadata = {
  title: "Bongo Cat",
  description: "Cat Musician",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body className="overflow-y-auto">
        <Web3ModalProvider initialState={initialState}>
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
