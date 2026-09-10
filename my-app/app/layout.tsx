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
  title: "Happy Birthday Harkirat! 🎂 | A Special Wish",
  description:
    "Today isn't just another day... it's the day someone truly amazing came into this world. Happy Birthday Harkirat!",
  keywords: ["Birthday", "Harkirat", "Celebration", "Special Day", "Wishes"],
  authors: [{ name: "With Love" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070414] text-slate-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
