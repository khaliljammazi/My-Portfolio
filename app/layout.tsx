import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PillNav } from "./components/PillNav";
import { ChatBot } from "./components/ChatBot";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { MusicPlayer } from "./components/MusicPlayer";
import { MusicProvider } from "./context/MusicContext";

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
    default: "Jammazi Khalil | Full-Stack Developer & Software Engineer",
    template: "%s | Jammazi Khalil"
  },
  description: "Passionate full-stack developer specializing in React, Next.js, Vue.js, and modern web technologies. Building scalable applications with clean, maintainable code. Available for freelance work.",
  keywords: [
    "Jammazi Khalil",
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
  authors: [{ name: "Jammazi Khalil" }],
  creator: "Jammazi Khalil",
  publisher: "Jammazi Khalil",
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
    title: "Jammazi Khalil | Full-Stack Developer & Software Engineer",
    description: "Passionate full-stack developer specializing in React, Next.js, Vue.js, and modern web technologies. Building scalable applications with clean, maintainable code.",
    siteName: "Jammazi Khalil Portfolio",
    images: [
      {
        url: "/img/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Jammazi Khalil - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jammazi Khalil | Full-Stack Developer & Software Engineer",
    description: "Passionate full-stack developer specializing in React, Next.js, Vue.js, and modern web technologies.",
    images: ["/img/avatar.jpg"],
    creator: "@jammazikhalil",
  },
  alternates: {
    canonical: "https://khalil-jammazi.vercel.app",
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="google-site-verification" content="r5CXw8Undrb8A1Yn_NG4WyTz0qB_xkGP2z2oaYMOV-k" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jammazi Khalil",
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
              "description": "Passionate full-stack developer specializing in React, Next.js, Vue.js, and modern web technologies.",
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
        <ThemeProvider>
          <MusicProvider>
            <PillNav />
            {children}
            <Footer />
            <ChatBot />
            <MusicPlayer />
          </MusicProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
