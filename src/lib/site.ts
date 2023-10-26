import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://dendron-swart.vercel.app"),

  title: {
    default: "Dendron - Note Taking App",
    template: "%s | Dendron",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  description:
    "Dendron is a feature-rich note taking web app built with Next.js. Organize notes, sync across devices, Markdown support, fast search, and more.",

  openGraph: {
    title: "Dendron - Note Taking Web Application",
    description:
      "Dendron is a feature-rich note taking web app built with Next.js. Organize notes, sync across devices, Markdown support, fast search, and more.",
    url: new URL("https://dendron-swart.vercel.app"),
    siteName: "Dendron",
    locale: "en-US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    title: "Dendron - Note Taking Web Application",
    card: "summary_large_image",
  },

  keywords: [
    "note taking app",
    "nextjs notes",
    "react notes",
    "markdown notes",
    "sync notes",
    "take notes online",
  ],
};
