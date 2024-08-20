import React from "react";
import "./globals.css";
import { Theme } from "@/components/Theme";

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
