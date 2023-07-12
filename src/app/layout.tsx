"use client";
import { NextUIProvider, CssBaseline } from "@nextui-org/react";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
