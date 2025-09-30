import React from 'react';
import Image from 'next/image';

interface StoryCard {
  customerImageSrc: string;
  customerImageAlt: string;
  customerName: string;
  location: string;
  testimonial: string;
  results: string[];
}

interface SuccessStoriesProps {
  title: string;
  stories: StoryCard[];
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ title, stories }) => {
  return (
    <section className="success-stories">
      <div className="container">
        <h2>{title}</h2>
        <div className="stories-grid">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-header">
                <Image 
                  src={story.customerImageSrc} 
                  alt={story.customerImageAlt} 
                  width={60} 
                  height={60}
                />
                <div className="story-info">
                  <h3>{story.customerName}</h3>
                  <span className="location">{story.location}</span>
                </div>
              </div>
              <blockquote>{story.testimonial}</blockquote>
              <div className="story-results">
                {story.results.map((result, resultIndex) => (
                  <span key={resultIndex} className="result-item">
                    {result}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;