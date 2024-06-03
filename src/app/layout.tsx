import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utah Grown",
  description: "Utah's Cannabis Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"min-h-screen"}>
        
        {children}

      </body>
    </html>
  );
}
