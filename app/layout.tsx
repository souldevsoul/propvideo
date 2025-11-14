import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { mantineTheme } from '@/lib/mantine-theme';
import { CookieConsent } from '@/components/marketing/CookieConsent';
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// Stack Sans Headline from Google Fonts
// Note: Loading via CSS since next/font/google doesn't support this font yet
// Font will be loaded through globals.css

export const metadata: Metadata = {
  title: {
    default: "PropVideo - AI Property Tour Video Generation",
    template: "%s | PropVideo"
  },
  description: "Create stunning property tour videos in minutes with AI. Transform photos into cinematic real estate tours with professional voiceovers and music.",
  keywords: ["property tour", "real estate video", "AI video generation", "property marketing", "listing video", "real estate tours", "property videos"],
  authors: [{ name: "PropVideo, Inc." }],
  creator: "PropVideo",
  publisher: "PropVideo",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: "PropVideo - AI Property Tour Video Generation",
    description: "Transform property photos into cinematic video tours with AI. Professional voiceovers, music, and branding in minutes.",
    url: "/",
    siteName: "PropVideo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PropVideo - AI Property Tour Video Generation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PropVideo - AI Property Tour Video Generation",
    description: "Create stunning property tour videos in minutes with AI",
    creator: "@propvideo",
    images: ["/og-image.png"]
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <MantineProvider theme={mantineTheme} defaultColorScheme="light">
          <Notifications position="top-right" zIndex={1000} />
          {children}
          <CookieConsent />
        </MantineProvider>
      </body>
    </html>
  );
}
