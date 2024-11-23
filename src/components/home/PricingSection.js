import React from 'react';
import Plan from './Plan';

// static data for pricing section
const pricingPlans = [
  {
    title: "Basic",
    price: "$9.99/month",
    user: "1 User",
    storage: "10GB Storage",
    support: "Basic Support"
  },
  {
    title: "Pro",
    price: "$19.99/month",
    user: "5 Users",
    storage: "50GB Storage",
    support: "Prioritized Support"
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    user: "Unlimited Users",
    storage: "Unlimited Storage",
    support: "Dedicated Support"
  }
];

function PricingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <Plan
              key={index}
              title={plan.title}
              price={plan.price}
              user={plan.user}
              storage={plan.storage}
              support={plan.support}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
