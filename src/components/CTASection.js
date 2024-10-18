import React from 'react';
import Feature from './ComponentsForComponents/FeatureForCTA';

function CTASection() {
    return (
        <section className="p-20 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-8">Unlock Your Potential with Our Powerful Bidding Platform</h2>
           <div className="flex justify-around">

            <Feature img = "./images/automation.jpg" alt = "automation" title = "Automate Bidding" description = "Let our system handle bidding while you focus on your work." />
            <Feature img = "./images/opportunities.jpg" alt = "opportunities" title = "Maximize Opportunities" description = "Never miss a project that matches your skills and interests." /> 
          

          </div>
        </section>
    )
}

export default CTASection;
