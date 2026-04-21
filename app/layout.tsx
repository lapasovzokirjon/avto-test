import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEKZOD PRAVA",
  description:
    "BEKZOD PRAVA kafolatlangan nazariy imtihonga tayyorlov kurslari page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}

