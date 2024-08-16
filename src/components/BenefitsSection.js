import React from 'react';

function BenefitsSection() {
    return (
        <section className="p-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Discover the Power of Auto Bidding</h2>
          <div className="flex justify-around">
            <div className="auto-bid-feature">
              <h3 className="text-xl font-semibold mb-2">Revolutionize Your Freelancing Experience</h3>
              <p className="text-gray-700">Our platform automates the bidding process, saving you time and effort.</p>
            </div>
            <div className="auto-bid-feature">
              <h3 className="text-xl font-semibold mb-2">Maximize Efficiency and Productivity</h3>
              <p className="text-gray-700">Focus on what you do best while our system handles the rest.</p>
            </div>
            <div className="auto-bid-feature">
              <h3 className="text-xl font-semibold mb-2">Stay Ahead of the Competition</h3>
              <p className="text-gray-700">Never miss an opportunity to bid on projects that match your skills.</p>
            </div>
          </div>
        </section>
      );
}

export default BenefitsSection;
