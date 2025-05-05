import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderSection from "@/components/Header/HeaderSection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SumanRayamajhi | Portfolio",
  description: "Generated Portfolio with nextjs | Typescript | TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderSection />
        <main>{children}</main>
      </body>
    </html>
  );
}
