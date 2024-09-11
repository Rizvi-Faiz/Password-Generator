import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Password Generator</title>
        <meta name="description" content="A modern password generator and strength checker app." />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
