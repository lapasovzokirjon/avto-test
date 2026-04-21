import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TurboDrive Avto Maktab",
  description:
    "TurboDrive Avto Maktab uchun zamonaviy, ishonchli va konversiyaga yo'naltirilgan landing page.",
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
