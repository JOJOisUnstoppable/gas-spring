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
  submitButtonText
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirements: '',
    urgent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));

    // Set custom validation messages in English
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    if (target.required && !value.trim()) {
      target.setCustomValidity('Please fill out this field.');
    } else if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      target.setCustomValidity('Please enter a valid email address.');
    } else {
      target.setCustomValidity('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check form validity first
    const form = e.target as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    
    // Additional custom validation
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!formData.email.trim()) {
      alert('Please enter your email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!formData.requirements.trim()) {
      alert('Please describe your project requirements');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: 'Marine Gas Spring Quote Request',
          message: `Urgent: ${formData.urgent ? 'Yes' : 'No'}\n\nRequirements:\n${formData.requirements}`
        }),
      });

      if (response.ok) {
        alert('Thank you for your inquiry! We will contact you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          requirements: '',
          urgent: false
        });
      } else {
        alert('Failed to send your inquiry. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again or contact us directly.');
    }
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
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    title="Please enter your full name"
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
                    title="Please enter a valid email address"
                    required 
                  />
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
                  title="Please describe your project requirements in detail"
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
                  title="Check this if you need a response within 24 hours"
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