import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper"; // ⭐ new wrapper

export const metadata: Metadata = {
  title: "Maheen Adeeb | AI/ML Engineer Portfolio",
  description: "Portfolio + Blog showcasing AI, ML, LLM, and full-stack projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />

        <main className="pt-24 px-6 max-w-7xl mx-auto">
          <PageWrapper>{children}</PageWrapper>
        </main>

        <Footer />
      </body>
    </html>
  );
}

