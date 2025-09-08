'use client';

import Head from 'next/head';

const SEO = ({ 
  title = "Boaz Farms | Leading Organic Agriculture & Agribusiness in Calabar, Nigeria",
  description = "Nigeria's premier organic agriculture company providing sustainable farming solutions, fresh organic produce, poultry farming, fish farming, and employment opportunities in Calabar, Cross River State.",
  keywords = "organic farming Nigeria, sustainable agriculture Calabar, agribusiness Cross River State, Boaz Farms Nigeria, organic food Calabar, poultry farming Nigeria, fish farming Calabar, agripreneurs Nigeria",
  image = "/images/logo-transparent.png",
  url = "https://boazfarms.com",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boaz Farms",
    "description": description,
    "url": url,
    "logo": `${url}${image}`,
    "image": `${url}${image}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calabar",
      "addressRegion": "Cross River State",
      "addressCountry": "Nigeria",
      "streetAddress": "Edundun Road, Calabar Municipality"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-8146-797-467",
      "contactType": "customer service",
      "email": "boazpartners@gmail.com"
    },
    "sameAs": [
      "https://facebook.com/boazfarms",
      "https://instagram.com/boazfarms",
      "https://twitter.com/boazfarms",
      "https://linkedin.com/company/boazfarms"
    ],
    "foundingDate": "2020",
    "industry": "Agriculture",
    "numberOfEmployees": "50-100",
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "serviceType": [
      "Organic Farming",
      "Poultry Farming", 
      "Fish Farming",
      "Agripreneurship Training",
      "Agricultural Employment"
    ]
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Boaz Farms" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Boaz Farms" />
      <meta property="og:locale" content="en_NG" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#15803d" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Boaz Farms" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Head>
  );
};

export default SEO;