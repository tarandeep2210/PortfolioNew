import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Tarandeep Singh - Full Stack Developer & ML Engineer",
  description: "Portfolio website of Tarandeep Singh, showcasing full-stack development and machine learning projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow pt-16">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
