import type { Metadata } from "next";
import { Manrope, Oxanium, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NowPlaying from "@/components/NowPlaying";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  weight: ["500", "600", "700", "800"],
  variable: "--font-oxanium",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ingrid's personal website",
  description: "Ingrid Yeung: data science and analytics for music, live entertainment and product.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${spaceMono.variable} ${oxanium.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <NowPlaying />
      </body>
    </html>
  );
}
