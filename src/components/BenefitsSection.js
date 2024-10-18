import React from 'react';
import Feature from './ComponentsForComponents/Feature';

function BenefitsSection() {
    return (
        <section className="p-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Discover the Power of Auto Bidding</h2>
          <div className="flex justify-around">

            <Feature title = "Revolutionize Your Freelancing Experience" description = "Our platform automates the bidding process, saving you time and effort."/>
            <Feature title ="Maximize Efficiency and Productivity" description = "Focus on what you do best while our system handles the rest." />
            <Feature title = "Stay Ahead of the Competition" description = "Never miss an opportunity to bid on projects that match your skills." />
           
          </div>
        </section>
      );
}

export default BenefitsSection;
