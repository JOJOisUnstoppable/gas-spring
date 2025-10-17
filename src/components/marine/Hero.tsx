'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import QuoteModal from './QuoteModal';

interface FeatureItem {
  icon: string;
  text: string;
}

interface CTAButton {
  text: string;
  href: string;
  isPrimary?: boolean;
}

interface HeroProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
  ctaButtons: CTAButton[];
  heroImageSrc: string;
  heroImageAlt: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  features, 
  ctaButtons, 
  heroImageSrc, 
  heroImageAlt 
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleCTAClick = (href: string, e: React.MouseEvent) => {
    // 如果是询价相关的链接，打开弹窗而不是跳转
    if (href === '#quote' || href.includes('quote') || href.includes('contact')) {
      e.preventDefault();
      setIsQuoteModalOpen(true);
    }
    // 其他链接正常跳转
  };
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="hero-cta">
            {ctaButtons.map((button, index) => (
              <Link 
                key={index}
                href={button.href} 
                className={button.isPrimary ? 'btn-primary' : 'btn-secondary'}
                onClick={(e) => handleCTAClick(button.href, e)}
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <Image 
            src={heroImageSrc} 
            alt={heroImageAlt} 
            width={600} 
            height={400}
            priority
          />
        </div>
      </div>

      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productName="Marine Gas Spring"
        productType="Hero CTA Inquiry"
      />
    </section>
  );
};

export default Hero;