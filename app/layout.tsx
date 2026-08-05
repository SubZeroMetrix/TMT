import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://themoderntradesmentor.com"),
  title: {
    default: "The Modern Trades Mentor | Contractor Technology & AI Guidance",
    template: "%s | The Modern Trades Mentor",
  },
  description:
    "The Modern Trades Mentor helps Tampa Bay contractors choose the right software, AI, and systems for their business — guided by 24+ years of real HVAC and facilities operations experience.",
  openGraph: {
    title: "The Modern Trades Mentor",
    description:
      "Real HVAC knowledge from the field, applied to modern software and AI decisions for contractors.",
    url: "https://themoderntradesmentor.com",
    siteName: "The Modern Trades Mentor",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} ${greatVibes.variable}`}
    >
      <body className="font-body bg-ink text-silver-light">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
