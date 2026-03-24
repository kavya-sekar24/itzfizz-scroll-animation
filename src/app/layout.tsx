import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scroll Hero Animation | GSAP + React",
  description: "Smooth scroll-driven hero section animation built with Next.js, React, GSAP, and Tailwind CSS. Experience premium motion and parallax effects.",
  keywords: ["animation", "gsap", "react", "scroll", "hero", "next.js", "tailwind"],
  authors: [{ name: "Frontend Developer" }],
  openGraph: {
    title: "Scroll Hero Animation",
    description: "Premium scroll-driven hero section with GSAP animations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950">{children}</body>
    </html>
  );
}
