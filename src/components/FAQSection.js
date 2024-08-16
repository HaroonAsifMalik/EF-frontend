import React from 'react';

function FAQSection() {
    return (
        <section className="p-20 text-center">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
          <div className="text-left mx-auto max-w-4xl">
            <h3 className="text-xl font-semibold mb-4">How does it work?</h3>
            <p className="text-gray-700 mb-8">Our platform automates the bidding process by using advanced algorithms to place bids on your behalf.</p>
            <h3 className="text-xl font-semibold mb-4">Is it secure?</h3>
            <p className="text-gray-700 mb-8">Yes, our platform uses the latest security measures to ensure your data is protected.</p>
            <h3 className="text-xl font-semibold mb-4">What is the benefit?</h3>
            <p className="text-gray-700 mb-8">You can focus on your work while our system handles the tedious bidding process.</p>
            <h3 className="text-xl font-semibold mb-4">Is there a subscription charge?</h3>
            <p className="text-gray-700 mb-8">Yes, we offer a variety of subscription plans to suit your needs. Contact us for more details.</p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700">Still have questions? Contact Us</button>
          </div>
        </section>
      );
}

export default FAQSection;
