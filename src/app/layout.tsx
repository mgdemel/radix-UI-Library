import React from "react";
import "./globals.css";
import { ContainerProvider } from "@/context";
import { Theme } from "@/components/Theme";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Theme>
          <ContainerProvider>{children}</ContainerProvider>
        </Theme>
      </body>
    </html>
  );
}
