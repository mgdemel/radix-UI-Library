import { Theme } from "@/components";
import React from "react";
import "./globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
