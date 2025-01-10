import React, { useState } from 'react';

const pricingPlans = [
  {
    title: "Basic",
    price: 9.99, // base price per month
    user: "1 User",
    storage: 10, // base storage in GB
    support: "Basic Support"
  },
  {
    title: "Pro",
    price: 19.99,
    user: "5 Users",
    storage: 50,
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
  const [months, setMonths] = useState(1);  // Default to 1 month
  const [storage, setStorage] = useState(10); // Default to 10GB storage

  const handleMonthChange = (event) => {
    setMonths(event.target.value);
  };

  const handleStorageChange = (event) => {
    setStorage(event.target.value);
  };

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
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.title}</h3>
              <p className="text-xl font-semibold text-gray-700 mb-2">
                {typeof plan.price === 'number'
                  ? `$${(plan.price * months).toFixed(2)}/month`
                  : plan.price}
              </p>

              <ul className="text-gray-600 space-y-2">
                <li>{plan.user}</li>
                {typeof plan.storage === 'number' && (
                  <li>{storage} GB Storage</li>
                )}
                <li>{plan.support}</li>
              </ul>

              {/* Adjusters */}
              <div className="mt-4">
                {/* Months Adjuster */}
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Months</label>
                  <input
                    type="number"
                    value={months}
                    onChange={handleMonthChange}
                    min="1"
                    max="12"
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded"
                  />
                </div>

                {/* Storage Adjuster (Slider) */}
                {typeof plan.storage === 'number' && (
                  <div>
                    <label className="block text-gray-600 mb-2">Storage (GB)</label>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      value={storage}
                      onChange={handleStorageChange}
                      className="w-full"
                    />
                    <p className="text-gray-600 mt-2">{storage} GB</p>
                  </div>
                )}
              </div>

              {/* Button */}
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
