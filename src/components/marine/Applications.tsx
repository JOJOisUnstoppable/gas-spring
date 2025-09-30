import React from 'react';
import Image from 'next/image';

interface ApplicationItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface ApplicationsProps {
  title: string;
  applications: ApplicationItem[];
}

const Applications: React.FC<ApplicationsProps> = ({ title, applications }) => {
  return (
    <section className="applications">
      <div className="container">
        <h2>{title}</h2>
        <div className="applications-grid">
          {applications.map((application, index) => (
            <div key={index} className="application-item">
              <Image 
                src={application.imageSrc} 
                alt={application.imageAlt} 
                width={120} 
                height={120}
              />
              <div className="application-content">
                <h3>{application.title}</h3>
                <p>{application.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;