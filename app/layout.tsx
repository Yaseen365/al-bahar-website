import type { Metadata } from "next";
import Script from "next/script";
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
  title: "J Al Bahar Trading & Contracting Co | Kuwait",
  description:
    "J Al Bahar Trading & Contracting Co is a Kuwait-based enterprise delivering contracting, infrastructure, HVAC, facility development, industrial services, and strategic business growth.",
  
  icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/favicon.ico",
},

    keywords: [
    "J Al Bahar",
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
  authors: [{ name: "J Al Bahar Trading & Contracting Co" }],
  creator: "J Al Bahar Trading & Contracting Co",
  publisher: "J Al Bahar Trading & Contracting Co",
  metadataBase: new URL("https://jalbahar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "J Al Bahar Trading & Contracting Co | Kuwait",
    description:
      "Kuwait-based enterprise delivering contracting, infrastructure, HVAC, facility development, and industrial excellence.",
    url: "https://jalbahar.com",
    siteName: "J Al Bahar Trading & Contracting Co",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "J Al Bahar Trading & Contracting Co",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J Al Bahar Trading & Contracting Co | Kuwait",
    description: "Kuwait-based enterprise delivering contracting, infrastructure, HVAC, facility development, and industrial excellence.",
    images: ["/og-image.png"],
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
      <body className="min-h-full flex flex-col">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-X1CG5C401D" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X1CG5C401D');
        `}</Script>
      </body>
    </html>
  );
}
