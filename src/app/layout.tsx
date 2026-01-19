import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600", "700"],
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Gig Economy in America | CPS 2017 Analysis",
  description: "An analysis of 462 electronically mediated workers from the U.S. Census Bureau's Current Population Survey, May 2017.",
  keywords: ["gig economy", "gig workers", "CPS", "labor statistics", "data visualization"],
  authors: [{ name: "Data Analysis" }],
  openGraph: {
    title: "The Gig Economy in America",
    description: "An analysis of gig workers from the U.S. Census Bureau's CPS May 2017",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
