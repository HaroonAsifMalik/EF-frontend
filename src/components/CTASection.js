import React from 'react';

function CTASection() {
    return (
        <section className="p-20 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-8">Unlock Your Potential with Our Powerful Bidding Platform</h2>
          <div className="flex justify-around">
            <div className="unlock-feature">
            <div className="w-24 h-24 mb-4 mx-auto">
            <img src="./images/automation.jpg" alt="automation" />
          </div>             
           <h3 className="text-xl font-semibold mb-2">Automate Bidding</h3>
              <p className="text-gray-700">Let our system handle bidding while you focus on your work.</p>
            </div>
            <div className="unlock-feature">
            <div className="w-24 h-24 mb-4 mx-auto">
            <img src="./images/opportunities.jpg" alt="opportunities" />
          </div>
                        <h3 className="text-xl font-semibold mb-2">Maximize Opportunities</h3>
              <p className="text-gray-700">Never miss a project that matches your skills and interests.</p>
            </div>
          </div>
        </section>
    )
}

export default CTASection;
