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
  title: "Jawhart Al Bahar Trading & Contracting Co | Kuwait",
  description:
    "Jawhart Al Bahar Trading & Contracting Co is a Kuwait-based enterprise delivering contracting, infrastructure, HVAC, facility development, industrial services, and strategic business growth.",
  
  icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/favicon.ico",
},

    keywords: [
    "Jawhart Al Bahar",
    "J Al Bahar",
    "Waste management Kuwait",
    "Industrial waste solutions Kuwait",
    "Sustainable waste processing Kuwait",
    "Kuwait contracting company",
    "Trading company Kuwait",
    "HVAC Kuwait",
    "Facility development Kuwait",
    "Industrial services Kuwait",
  ],
  authors: [{ name: "Jawhart Al Bahar Trading & Contracting Co" }],
  creator: "Jawhart Al Bahar Trading & Contracting Co",
  publisher: "Jawhart Al Bahar Trading & Contracting Co",
  metadataBase: new URL("https://jalbahar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jawhart Al Bahar Trading & Contracting Co | Kuwait",
    description:
      "Kuwait-based enterprise delivering contracting, infrastructure, HVAC, facility development, and industrial excellence.",
    url: "https://jalbahar.com",
    siteName: "Jawhart Al Bahar Trading & Contracting Co",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
