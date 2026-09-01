import "@fontsource-variable/space-grotesk";
import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://imamsatrio.dev";

const DESCRIPTION =
  "AI Engineer building production AI products for Indonesian SMEs — from 98%-accurate ML models to live WhatsApp sales agents.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Imam Satrio — AI Engineer",
  description: DESCRIPTION,
  openGraph: {
    title: "Imam Satrio — AI Engineer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "imamsatrio.dev",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imam Satrio — AI Engineer",
    description: DESCRIPTION,
  },
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
