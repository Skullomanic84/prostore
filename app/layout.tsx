import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "@/resources/assets/styles/globals.css";
import React from "react";
import {APP_DESCRIPTION, APP_NAME, SERVER_URL} from "@/lib/constants";

const grotesk = Host_Grotesk({ subsets: ['latin']});

export const metadata: Metadata = {
  title: {
      template: `%s | Prostore`,
      default: APP_NAME,
  },
  description: `${APP_DESCRIPTION}`,
    metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${grotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
