import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@blossom-carousel/react/style.css";
import "lenis/dist/lenis.css";
import { PillNav } from "./components/PillNav";
import { DeferredChatBot } from "./components/DeferredChatBot";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { MusicPlayer } from "./components/MusicPlayer";
import { MusicProvider } from "./context/MusicContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SmoothScroll } from "./components/SmoothScroll";
import { ScrollHUD } from "./components/ScrollHUD";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://khalil-jammazi.vercel.app'),
  title: {
    default: "Mohamed Khalil Jammazi | Front-End & Full-Stack Developer",
    template: "%s | Mohamed Khalil Jammazi"
  },
  description: "Front-end and full-stack developer with 4+ years of experience building high-traffic telecom portals, micro-frontends, banking integrations, and enterprise applications.",
  keywords: [
    "Mohamed Khalil Jammazi",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Freelance Developer",
    "Portfolio"
  ],
  authors: [{ name: "Mohamed Khalil Jammazi" }],
  creator: "Mohamed Khalil Jammazi",
  publisher: "Mohamed Khalil Jammazi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khalil-jammazi.vercel.app",
    title: "Mohamed Khalil Jammazi | Front-End & Full-Stack Developer",
    description: "Enterprise web case studies across telecom, banking, retail, analytics, and scalable platform engineering.",
    siteName: "Mohamed Khalil Jammazi Portfolio",
    images: [
      {
        url: "/img/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Khalil Jammazi - Front-End and Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Khalil Jammazi | Front-End & Full-Stack Developer",
    description: "Enterprise web development across telecom, banking, retail, analytics, and AI-assisted platforms.",
    images: ["/img/avatar.jpg"],
    creator: "@jammazikhalil",
  },
  alternates: {
    canonical: "https://khalil-jammazi.vercel.app",
  },
  verification: {
    google: "r5CXw8Undrb8A1Yn_NG4WyTz0qB_xkGP2z2oaYMOV-k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/img/loder-avatar-img.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/img/loder-avatar-img.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohamed Khalil Jammazi",
              "url": "https://khalil-jammazi.vercel.app",
              "image": "https://khalil-jammazi.vercel.app/img/avatar.jpg",
              "sameAs": [
                "https://github.com/khaliljammazi",
                "https://linkedin.com/in/jammazikhalil",
                "https://twitter.com/jammazikhalil"
              ],
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": "Front-end and full-stack developer building high-traffic portals, micro-frontends, banking integrations, and enterprise applications.",
              "knowsAbout": [
                "React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Node.js", "MongoDB", "PostgreSQL"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <ThemeProvider>
            <MusicProvider>
              <LoadingScreen />
              <PillNav />
              <ScrollHUD />
              {children}
              <Footer />
              <DeferredChatBot />
              <MusicPlayer />
            </MusicProvider>
          </ThemeProvider>
        </SmoothScroll>
        <SpeedInsights />
      </body>
    </html>
  );
}
