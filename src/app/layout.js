import "./globals.css";
import { Inter, Montserrat } from 'next/font/google';
import Script from "next/script";
import { commonMetadata } from "@/common/shared-metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = { 
  title: commonMetadata.title, 
  description: commonMetadata.description,
  keywords: [
    "redesign strony internetowej",
    "automatyzacje dla małych i średnich firm",
    "AI dla biznesu",
    "modernizacja strony internetowej",
    "strony internetowe dla firm",
    "automatyzacje AI",
    "microapps dla biznesu"
  ],
  openGraph: {
    title: commonMetadata.title,
    description: commonMetadata.description,
    url: "https://microapps.pl",
    siteName: "MicroApps",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "MicroApps",
              "description": commonMetadata.description,
              "url": "https://microapps.pl",
              "email": "example@microapps.pl",
              "telephone": "+48000000000",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+48000000000",
                "contactType": "customer service",
                "areaServed": "PL",
                "availableLanguage": ["Polish"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ul. Example 123",
                "addressLocality": "Łódź",
                "postalCode": "92-003",
                "addressCountry": "PL"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Polska"
              }
            }),
          }}
        />
      </head>
      <body className="font-montserrat">
        <Navbar />
        {children}
        <Footer />  
      </body>
    </html>
  );
}
