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
  title: "Lovish Garg | Software Developer",

  description:
    "Portfolio of Lovish Garg, a software developer focused on modern web development, artificial intelligence, and building practical digital products.",

  keywords: [
    "Lovish Garg",
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Artificial Intelligence",
  ],

  authors: [
    {
      name: "Lovish Garg",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}