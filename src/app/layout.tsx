import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '600'],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Kayren | Business Consulting",
  description: "Business Consulting, Strategy & HR. High-level consulting in corporate strategy and human talent development.",
  openGraph: {
    title: "Kayren | Business Consulting",
    description: "High-level consulting in corporate strategy and human talent development.",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ibmPlexSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}