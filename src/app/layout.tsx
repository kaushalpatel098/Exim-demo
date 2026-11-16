import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import siteConfig from '@site-config';
import { getAssetPath } from '@/lib/asset-path';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  metadataBase: new URL(siteConfig.domain),
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.domain,
    siteName: siteConfig.companyName,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: siteConfig.companyName }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  icons: {
    icon: [
      { url: getAssetPath('/favicon.ico'), sizes: 'any' },
      { url: getAssetPath('/favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
      { url: getAssetPath('/favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
      { url: getAssetPath('/icon-192.png'), sizes: '192x192', type: 'image/png' },
      { url: getAssetPath('/icon-512.png'), sizes: '512x512', type: 'image/png' },
    ],
    apple: getAssetPath('/apple-touch-icon.png'),
  },
  manifest: getAssetPath('/site.webmanifest'),
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.companyName,
  url: siteConfig.domain,
  logo: `${siteConfig.domain}/logo.png`,
  description: siteConfig.seo.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.address.city,
    addressCountry: siteConfig.address.country,
  },
  email: siteConfig.emails.general,
  ...(Object.values(siteConfig.social).filter(Boolean).length > 0 && {
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Analytics — only loads when NEXT_PUBLIC_GA_ID is set at build time */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
