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
  title: {
    default: "Lovish Garg | Developer & ASCE",
    template: "%s | Lovish Garg",
  },

  description:
    "Portfolio of Lovish Garg, a software developer and digital marketer behind ASCE, building modern websites, web applications, digital products and online experiences.",

  keywords: [
    "Lovish Garg",
    "ASCE",
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Digital Marketer",
    "Web Development",
    "Website Development",
    "E-commerce Development",
    "Landing Page Development",
    "Artificial Intelligence",
  ],

  authors: [
    {
      name: "Lovish Garg",
    },
  ],

  creator: "Lovish Garg",
  publisher: "ASCE",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Lovish Garg | Developer behind ASCE",
    description:
      "Modern websites, digital products and online experiences built through ASCE.",
    type: "website",
    locale: "en_IN",
    siteName: "Lovish Garg | ASCE",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lovish Garg | Developer behind ASCE",
    description:
      "Modern websites, digital products and online experiences built through ASCE.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}