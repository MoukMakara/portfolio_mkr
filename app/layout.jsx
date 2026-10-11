import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import BackgroundFX from "@/components/BackgroundFX";
import { themeScript } from "@/lib/theme";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const defaultTitle = `${site.name} | ${site.title}`;

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description: site.description,
  authors: [{ name: site.name }],
  keywords: [
    "Mouk Makara",
    "Full Stack Developer",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Next.js",
    "PostgreSQL",
    "Python",
    "FastAPI",
    "Microservices",
    "AI Engineering",
    "Phnom Penh",
  ],
  openGraph: {
    type: "website",
    title: defaultTitle,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06070a" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
  ],
};

export default function RootLayout({ children }) {
  return (
    // data-theme defaults to dark; themeScript swaps it before paint, so hydration may see a different value.
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col overflow-x-clip">
        <BackgroundFX />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
