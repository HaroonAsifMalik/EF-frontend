import React from 'react';
import FeatureCard from '../feature/FeatureCard';


// static data for featuer section
const featuresData = [
  {
    img: './images/automation.jpg',
    alt: 'automation',
    title: 'Automate Bidding',
    description: 'Let our system handle bidding while you focus on your work.'
  },
  {
    img: './images/opportunities.jpg',
    alt: 'opportunities',
    title: 'Maximize Opportunities',
    description: 'Never miss a project that matches your skills and interests.'
  }
];

function CTASection() {
  return (
    <section
  id="services" // Add this ID for smooth scrolling
  className="p-20 bg-gray-100 text-center"
>
  <h2 className="text-3xl font-bold mb-8">Unlock Your Potential with Our Powerful Bidding Platform</h2>
  <div className="flex justify-around">
    {featuresData.map((feature, index) => (
      <FeatureCard
        key={index}
        img={feature.img}
        alt={feature.alt}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </div>
</section>

  );
}

export default CTASection;
