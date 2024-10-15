import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "PowerLine | Official Website",
  description:
    "Discover the future of advertising! Seamlessly create and manage ad campaigns, maximize reach, and engage your audience with our innovative platform.",
  keywords:
    "You earn while at it, advertising, ad campaigns, business advertising, dynamic ads, audience engagement, innovative platform, user-friendly ads, maximize reach, future of advertising, seamless advertising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../icons/hivenify-logo.svg" />
      </head>
      <Toaster />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
