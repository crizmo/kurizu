import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";

import { RESUME_DATA } from "../data/resume-data";

import "./globals.css";

export const metadata = {
  title: `${RESUME_DATA.name} — Portfolio, Projects & Art`,
  description: RESUME_DATA.summary,
  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl),
  alternates: {
    canonical: RESUME_DATA.personalWebsiteUrl,
  },
  keywords: [
    "Kurizu",
    "portfolio",
    "web developer",
    "React",
    "Next.js",
    "drawings",
    "art",
    "projects",
  ],
  authors: [{ name: RESUME_DATA.name }],
  openGraph: {
    title: `${RESUME_DATA.name} — Portfolio, Projects & Art`,
    description: RESUME_DATA.summary,
    url: RESUME_DATA.personalWebsiteUrl,
    siteName: RESUME_DATA.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${RESUME_DATA.name} — Portfolio, Projects & Art`,
    description: RESUME_DATA.summary,
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
