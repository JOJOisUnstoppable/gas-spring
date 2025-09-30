'use client';
import React, { useState } from 'react';

interface BenefitItem {
  icon: string;
  text: string;
}

interface ApplicationOption {
  value: string;
  label: string;
}

interface QuoteFormProps {
  title: string;
  description: string;
  benefits: BenefitItem[];
  applicationOptions: ApplicationOption[];
  submitButtonText: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ 
  title, 
  description, 
  benefits, 
  applicationOptions, 
  submitButtonText
}) => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    application: '',
    requirements: '',
    urgent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    // Handle form submission logic here
    // You can add API calls or other submission logic
  };

  return (
    <section id="quote" className="quote-section">
      <div className="container">
        <div className="quote-content">
          <div className="quote-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="quote-benefits">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="quote-form">
            <form id="marine-quote-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="company">Company Name *</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="application">Application Type</label>
                  <select 
                    id="application" 
                    name="application"
                    value={formData.application}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Application</option>
                    {applicationOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="requirements">Project Requirements *</label>
                <textarea 
                  id="requirements" 
                  name="requirements" 
                  rows={4} 
                  placeholder="Please describe your marine gas spring requirements, including force needed, dimensions, quantity, and timeline..."
                  value={formData.requirements}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group checkbox-group">
                <input 
                  type="checkbox" 
                  id="urgent" 
                  name="urgent"
                  checked={formData.urgent}
                  onChange={handleInputChange}
                />
                <label htmlFor="urgent">This is an urgent request (24-hour response needed)</label>
              </div>
              <button type="submit" className="btn-primary btn-full">
                {submitButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;