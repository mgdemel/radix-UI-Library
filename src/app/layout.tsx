import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React from "react";
import "./globals.css";
import { ContainerProvider } from "@/context";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Theme accentColor="crimson" grayColor="sand" radius="large">
          <ContainerProvider>{children}</ContainerProvider>
        </Theme>
      </body>
    </html>
  );
}
