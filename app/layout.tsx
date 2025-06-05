import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GridBackground } from "@/components/grid-background";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Developer Portfolio",
  description: "Showcasing projects, skills, and certifications of a passionate software developer.",
  openGraph: {
    title: "My Developer Portfolio",
    description: "Showcasing projects, skills, and certifications of a passionate software developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} scroll-smooth relative flex font-sans antialiased w-full min-h-dvh py-10 px-5 md:px-20 xl:px-70 `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <GridBackground />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
