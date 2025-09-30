import React from 'react';
import Image from 'next/image';

interface AdvantageCard {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  title: string;
  advantages: AdvantageCard[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ title, advantages }) => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>{title}</h2>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">
                <Image 
                  src={advantage.iconSrc} 
                  alt={advantage.iconAlt} 
                  width={30} 
                  height={30}
                />
              </div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;