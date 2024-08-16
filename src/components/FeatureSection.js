import React from 'react';


function FeatureSection() {
  return (
    <section className="p-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Experience the Power of Auto Bidding on Our Freelancer Platform</h2>
      <div className="flex justify-around">
        <div className="feature">
          <div className="w-24 h-24 mb-4 mx-auto">
            <img src="./images/Effortless_Bidding.jpg" alt="Effortless Bidding" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Effortless Bidding</h3>
          <p className="text-gray-700">Automatically place bids on projects that match your skills.</p>
        </div>
        <div className="feature">
          <div className="w-24 h-24 mb-4 mx-auto">
            <img src="./images/Maximize_Your_Potential.jpg" alt="Maximize Your Potential" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Maximize Your Potential</h3>
          <p className="text-gray-700">Never miss an opportunity with our auto bidding system.</p>
        </div>
        <div className="feature">
          <div className="w-24 h-24 mb-4 mx-auto">
            <img src="./images/competition.jpg" alt="Stay Ahead of the Competition" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Stay Ahead of the Competition</h3>
          <p className="text-gray-700">Ensure you’re always in the running for the best projects.</p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;