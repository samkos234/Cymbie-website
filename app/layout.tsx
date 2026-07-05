import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cymbie — Date with Intention",
  description: "Cymbie is the premium dating app for people serious about meaningful connection. High-quality matches, deep compatibility, and an exclusive community.",
  keywords: ["dating app", "premium dating", "intentional dating", "meaningful connections", "cymbie"],
  authors: [{ name: "Cymbie Inc." }],
  openGraph: {
    title: "Cymbie — Date with Intention",
    description: "The premium dating app for those who connect with intention.",
    url: "https://cymbie.co",
    siteName: "Cymbie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cymbie — Date with Intention",
    description: "The premium dating app for meaningful connections.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}



