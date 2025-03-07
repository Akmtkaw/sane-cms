import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | simple corporate site",
    default: "simple corporate site",
  },
  description:
    'This is a website created with "Getting Started with Next.js + Headless CMS! Easy & Modern Website Development Guide."',
  openGraph: {
    title: "Simple Corporate Website",
    description:
      'This is a website created with "Getting Started with Next.js + Headless CMS! Easy & Modern Website Development Guide."',
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
      {/* <GoogleAnalytics gaId="G-hogehoge" /> */}
    </html>
  );
}
