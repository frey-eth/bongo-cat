import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import Web3ModalProvider from "@/providers/web3Provider";
import { cookieToInitialState } from "wagmi";
import { config } from "../providers/wagmiConfig";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Bongo Cat",
  description:
    "The most memeable meowmeowcoin in existence. Bongo can do anything, it’s time for Bongo to take reign!!!!!!",
  openGraph: {
    title: "Bongo Cat",
    description:
      "The most memeable meowmeowcoin in existence. Bongo can do anything, it’s time for Bongo to take reign!!!!!!",
    siteName: "Bongo Cat",
    url: "https://www.zkbongo.xyz/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body>
        <Web3ModalProvider initialState={initialState}>
          <div className="overflow-hidden">{children}</div>
        </Web3ModalProvider>
        <Toaster reverseOrder={false} position="bottom-right" />
      </body>
    </html>
  );
}
