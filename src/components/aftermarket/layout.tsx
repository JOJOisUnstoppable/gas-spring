import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = 'aftermarket-page',
  description = 'Leading manufacturer of gas springs for the South American aftermarket'
}) => {
  // 结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DK Gas Spring",
    "url": "https://www.dkgasspring.com",
    "logo": "https://www.dkgasspring.com/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-574-8888-9999",
      "contactType": "sales",
      "availableLanguage": ["es", "pt", "en"]
    }
  };

  return (
    <div className={className}>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </div>
  );
};

export default Layout;