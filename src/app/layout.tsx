import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/layouts/Header";
import "./globals.css";
import { cn } from "@/lib/utils";

const circularFont = localFont({
  src: [
    {
      path: "../../public/fonts/black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/book-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-circular",
});

export const metadata: Metadata = {
  title: "GOGO",
  description: "Thousands of cheap travels. One simple search.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(circularFont.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
