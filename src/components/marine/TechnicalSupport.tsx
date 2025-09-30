import React from 'react';
import Image from 'next/image';

interface SupportFeature {
  icon: string;
  title: string;
  description: string;
}

interface TechnicalSupportProps {
  title: string;
  description: string;
  features: SupportFeature[];
  imageSrc: string;
  imageAlt: string;
}

const TechnicalSupport: React.FC<TechnicalSupportProps> = ({ 
  title, 
  description, 
  features, 
  imageSrc, 
  imageAlt 
}) => {
  return (
    <section className="technical-support">
      <div className="container">
        <div className="support-content">
          <div className="support-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="support-features">
              {features.map((feature, index) => (
                <div key={index} className="support-feature">
                  <span className="support-icon">{feature.icon}</span>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="support-image">
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              width={500} 
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSupport;