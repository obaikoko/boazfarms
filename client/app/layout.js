import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://boazfarms.com'),
  title: 'Boaz Farms | Leading Organic Agriculture & Agribusiness in Calabar, Nigeria',
  description:
    'Boaz Farms is Nigeria\'s premier organic agriculture company providing sustainable farming solutions, fresh organic produce, poultry farming, fish farming, and employment opportunities in Calabar, Cross River State. Empowering agripreneurs and communities.',
  keywords: [
    'organic farming Nigeria',
    'sustainable agriculture Calabar',
    'agribusiness Cross River State',
    'Boaz Farms Nigeria',
    'organic food Calabar',
    'poultry farming Nigeria',
    'fish farming Calabar',
    'agripreneurs Nigeria',
    'employment agriculture Nigeria',
    'fresh farm produce',
    'organic eggs Nigeria',
    'sustainable farming practices',
    'agricultural innovation Nigeria',
    'farm to table Calabar',
    'organic vegetables Nigeria'
  ],
  authors: [{ name: 'Boaz Farms' }],
  creator: 'Boaz Farms',
  publisher: 'Boaz Farms',
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
    type: 'website',
    locale: 'en_NG',
    url: 'https://boazfarms.com',
    siteName: 'Boaz Farms',
    title: 'Boaz Farms | Leading Organic Agriculture & Agribusiness in Calabar, Nigeria',
    description: 'Nigeria\'s premier organic agriculture company providing sustainable farming solutions, fresh organic produce, and employment opportunities in Calabar, Cross River State.',
    images: [
      {
        url: '/images/logo-transparent.png',
        width: 1200,
        height: 630,
        alt: 'Boaz Farms - Organic Agriculture and Agribusiness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boaz Farms | Leading Organic Agriculture & Agribusiness in Calabar, Nigeria',
    description: 'Nigeria\'s premier organic agriculture company providing sustainable farming solutions and fresh organic produce.',
    images: ['/images/logo-transparent.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://boazfarms.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo-transparent.png" />
        <meta name="theme-color" content="#15803d" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Boaz Farms",
              "description": "Leading organic agriculture and agribusiness company in Calabar, Nigeria",
              "url": "https://boazfarms.com",
              "logo": "https://boazfarms.com/images/logo-transparent.png",
              "image": "https://boazfarms.com/images/logo-transparent.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Calabar",
                "addressRegion": "Cross River State",
                "addressCountry": "Nigeria"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-XXX-XXX-XXXX",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://facebook.com/boazfarms",
                "https://instagram.com/boazfarms",
                "https://twitter.com/boazfarms"
              ],
              "foundingDate": "2020",
              "industry": "Agriculture",
              "numberOfEmployees": "50-100"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <PerformanceOptimizer />
        {children}
      </body>
    </html>
  );
}
