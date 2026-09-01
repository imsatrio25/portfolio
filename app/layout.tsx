import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imam Satrio — Software Engineer",
  description: "Portfolio of Imam Satrio. Building SaaS, APIs, and full-stack products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
