import React from 'react';
import FeatureCard from '../feature/FeatureCard';

// static data for benefits section
const benefits = [
  {
    title: "Revolutionize Your Freelancing Experience",
    description: "Our platform automates the bidding process, saving you time and effort."
  },
  {
    title: "Maximize Efficiency and Productivity",
    description: "Focus on what you do best while our system handles the rest."
  },
  {
    title: "Stay Ahead of the Competition",
    description: "Never miss an opportunity to bid on projects that match your skills."
  }
];

function BenefitsSection() {
  return (
    <section
  id="discover" // Add this ID for smooth scrolling
  className="p-20 text-center"
  style={{ backgroundColor: "white" }}
>
  <h2 className="text-3xl font-bold mb-8">Discover the Power of Auto Bidding</h2>
  <div className="flex justify-around">
    {benefits.map((benefit, index) => (
      <FeatureCard
        key={index}
        title={benefit.title}
        description={benefit.description}
      />
    ))}
  </div>
</section>

  );
}

export default BenefitsSection;
