import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suleman Khan",
  description: "Portfolio",
  keywords: [
    "Suleman Khan",
    "Portfolio",
    "Research Associate",
    "Research",
    "Lecturer",
  ],
  applicationName: "Suleman Khan Portfolio",
  openGraph: {
    title: "Suleman Khan - A Research Associate Portfolio",
    description:
      "A portfolio showcasing the research and study of Suleman Khan.",
    siteName: "Suleman Khan Portfolio",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-300`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
