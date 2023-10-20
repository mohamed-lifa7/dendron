import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/site";
import { ThemeProvider } from "@/context/theme-provider";
import ConvexClientProvider from "@/context/convex-client-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  ...siteConfig,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="dendron-theme"
        >
          <body className={`font-sans ${inter.variable}`}>{children}</body>
        </ThemeProvider>
      </ConvexClientProvider>
    </html>
  );
}
