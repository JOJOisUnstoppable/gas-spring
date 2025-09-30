import React from 'react';
import Image from 'next/image';

interface TrustItem {
  imageSrc: string;
  imageAlt: string;
  text: string;
}

interface TrustIndicatorsProps {
  trustItems: TrustItem[];
}

const TrustIndicators: React.FC<TrustIndicatorsProps> = ({ trustItems }) => {
  return (
    <section className="trust-indicators">
      <div className="container">
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item">
              <Image 
                src={item.imageSrc} 
                alt={item.imageAlt} 
                width={40} 
                height={40}
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;