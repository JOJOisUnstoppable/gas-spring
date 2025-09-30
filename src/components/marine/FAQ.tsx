import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  faqItems: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ title, faqItems }) => {
  return (
    <section className="faq-section">
      <div className="container">
        <h2>{title}</h2>
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;