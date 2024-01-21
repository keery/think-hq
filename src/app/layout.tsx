import type { Metadata } from "next";
import { EB_Garamond, Open_Sans } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Think HQ exercice",
  description: "Think HQ exercice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${ebGaramond.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
