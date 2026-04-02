import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "John Hernan — Web Developer",
    template: "%s | John Herman",
  },
  description:
    "Portfolio of John Herman, a passionate Web Developer building beautiful, performant web experiences with modern technologies.",
  keywords: [
    "web developer",
    "portfolio",
    "Next.js",
    "React",
    "frontend",
    "John Herman",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", inter.variable)}>
      <body className="font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-svh pt-[72px]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
