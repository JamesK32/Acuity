import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acuity | Automated Phone-Free Classrooms",
  description:
    "Acuity uses NFC technology to automatically enforce phone-free learning. Students tap in, apps lock, teachers see a real-time dashboard. Solve phone policy enforcement without pouches or manual collection.",
  keywords: [
    "phone-free classroom",
    "school phone policy",
    "NFC education",
    "classroom focus",
    "student phone management",
    "K-12 technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <div className="h-16" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
