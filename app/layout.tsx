import "@fontsource-variable/space-grotesk";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imam Satrio — Software Engineer",
  description:
    "AI Engineer building production AI products for Indonesian SMEs — from 98%-accurate ML models to live WhatsApp sales agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
