import React from 'react';

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
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Basic</h3>
                <p className="text-gray-600 text-lg">$9.99/month</p>
                <ul className="list-none p-0 mb-4">
                  <li className="flex items-center mb-2">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span>1 User</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span>10GB Storage</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span>Basic Support</span>
                  </li>
                </ul>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </div>
    
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pro</h3>
                <p className="text-gray-600 text-lg">$19.99/month</p>
                <ul className="list-none p-0 mb-4">
                  <li className="flex items-center mb-2">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span>5 Users</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span>50GB Storage</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span>Prioritized Support</span>
                  </li>
                </ul>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </div>
    
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise</h3>
                <p className="text-gray-600 text-lg">Custom Pricing</p>
                <ul className="list-none p-0 mb-4">
                  <li className="flex items-center mb-2">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span>Unlimited Users</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span>Unlimited Storage</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <i className="fas fa-check text-green-600 mr-2"></i>
                    <span>Dedicated Support</span>
                  </li>
                </ul>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      );
}

export default PricingSection;
