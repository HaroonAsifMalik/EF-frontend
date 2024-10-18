import React from 'react';
import FAQ from './ComponentsForComponents/ComponentForFAQ';

function FAQSection() {
    return (
        <section className="p-20 text-center">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
          <div className="text-left mx-auto max-w-4xl">

            <FAQ que = "How does it work?" ans = "Our platform automates the bidding process by using advanced algorithms to place bids on your behalf." />
            <FAQ que = "Is it secure?" ans = "Yes, our platform uses the latest security measures to ensure your data is protected." />
            <FAQ que = "What is the benefit?" ans = "You can focus on your work while our system handles the tedious bidding process." />
            <FAQ que = "Is there a subscription charge?" ans = "Yes, we offer a variety of subscription plans to suit your needs. Contact us for more details." />
           
            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700">Still have questions? Contact Us</button>
          </div>
        </section>
      );
}

export default FAQSection;
