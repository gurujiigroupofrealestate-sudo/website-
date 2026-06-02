import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, type, keywords }) => {
  const defaultTitle = 'Gurujii Group of Real Estates | Premium Plots in Madurai';
  const defaultDescription = 'Premium DTCP approved plots, luxury villas, and prime commercial properties for sale in Madurai. Discover gated communities for safe investment in South Tamil Nadu.';
  const defaultKeywords = 'Madurai real estate, Best Real Estate Company in Madurai, Luxury Villas in Madurai, Plots in Tamil Nadu, DTCP approved plots Madurai';

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | Gurujii Group` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* OpenGraph tags */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content="Gurujii Group of Real Estates" />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;
