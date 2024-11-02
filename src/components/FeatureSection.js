import React from 'react';
import Feature from "./ComponentsForComponents/componentForFeatureSection";

// static data for features section
const features = [
  {
    img: "/images/Effortless_Bidding.jpg",
    alt: "Effortless Bidding",
    title: "Effortless Bidding",
    description: "Automatically place bids on projects that match your skills."
  },
  {
    img: "/images/Maximize_Your_Potential.jpg",
    alt: "Maximize Your Potential",
    title: "Maximize Your Potential",
    description: "Never miss an opportunity with our auto bidding system."
  },
  {
    img: "/images/competition.jpg",
    alt: "Stay Ahead of the Competition",
    title: "Stay Ahead of the Competition",
    description: "Ensure you’re always in the running for the best projects."
  }
];

function FeatureSection() {
  return (
    <section className="p-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">
        Experience the Power of Auto Bidding on Our Freelancer Platform
      </h2>
      <div className="flex justify-around">
        {features.map((feature, index) => (
          <Feature
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

export default FeatureSection;
