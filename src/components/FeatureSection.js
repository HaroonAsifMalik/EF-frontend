import React from 'react';
import Feature from "./ComponentsForComponents/componentForFeatureSection";


function FeatureSection() {
  return (
    <section className="p-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Experience the Power of Auto Bidding on Our Freelancer Platform</h2>
      <div className="flex justify-around">

        <Feature img = "./images/Effortless_Bidding.jpg" alt = "Effortless Bidding" title = "Effortless Bidding" description = "Automatically place bids on projects that match your skills." />
        <Feature img = "/images/Maximize_Your_Potential.jpg" alt = "Maximize Your Potential" title = "Maximize Your Potential" description = "Never miss an opportunity with our auto bidding system." />
        <Feature img = "./images/competition.jpg" alt = "Stay Ahead of the Competition" title = "Stay Ahead of the Competition" description = "Ensure you’re always in the running for the best projects." />

      </div>
    </section>
  );
}

export default FeatureSection;