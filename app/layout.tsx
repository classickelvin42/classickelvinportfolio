import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import ThemeProvider from "./components/ThemeProvider";
import LoadingScreen from "./components/LoadingScreen";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

// SEO — replace with your real details before deploying
const SITE_URL = "https://yourname.dev"; // TODO: replace with your production domain
const SITE_NAME = "Your Name — Full-Stack Developer & Designer"; // TODO: replace

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Your Name"
  },
  description:
    "Full-stack developer and product designer building fast, accessible, and beautifully crafted web experiences.", // TODO: replace
  keywords: [
    "full-stack developer",
    "product designer",
    "web development",
    "UI/UX design",
    "Next.js developer"
  ],
  authors: [{ name: "Your Name", url: SITE_URL }], // TODO: replace
  creator: "Your Name", // TODO: replace
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description:
      "Full-stack developer and product designer building fast, accessible, and beautifully crafted web experiences.",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png", // TODO: add a real 1200x630 OG image to /public
        width: 1200,
        height: 630,
        alt: SITE_NAME
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Full-stack developer and product designer building fast, accessible, and beautifully crafted web experiences.",
    images: ["/og-image.png"],
    creator: "@yourhandle" // TODO: replace
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name", // TODO: replace
    url: SITE_URL,
    jobTitle: "Full-Stack Developer & Product Designer", // TODO: replace
    sameAs: [
      "https://github.com/yourhandle",
      "https://linkedin.com/in/yourhandle",
      "https://twitter.com/yourhandle"
    ] // TODO: replace with real profiles
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-base-950 text-ink-100 antialiased selection:bg-primary/30 selection:text-white`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
