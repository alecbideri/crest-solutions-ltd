import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/archivo/wght.css";
import "@fontsource-variable/archivo/wght-italic.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { company, SITE_URL } from "@/content/company";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Crest Solutions Ltd",
    template: "%s | Crest Solutions Ltd",
  },
  description: company.seo.home,
  applicationName: "Crest Solutions Ltd",
  authors: [{ name: "Crest Solutions Ltd" }],
  creator: "Crest Solutions Ltd",
  publisher: "Crest Solutions Ltd",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Crest Solutions Ltd",
    title: "Crest Solutions Ltd",
    description: company.seo.home,
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crest Solutions Ltd, materials logistics and construction.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crest Solutions Ltd",
    description: company.seo.home,
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ece9df",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: company.legalName,
      url: SITE_URL,
      email: company.email,
      telephone: company.phone,
      description: company.description,
      logo: `${SITE_URL}/icon.svg`,
      areaServed: {
        "@type": "Place",
        name: "East Africa, Dubai and China",
      },
      knowsAbout: ["Materials logistics", "Construction", "Project cargo", "Fit-out"],
      employee: company.leadership.map((person) => ({
        "@type": "Person",
        name: person.name,
        jobTitle: person.role,
      })),
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: company.email,
          telephone: company.phone,
          areaServed: "East Africa",
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: company.legalName,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:bg-ink focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:tracking-widest focus:text-bone"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}
