import React from 'react';
import FAQ from './ComponentForFAQ';

// static data for FAQ section
const faqData = [
  {
    que: "How does it work?",
    ans: "Our platform automates the bidding process by using advanced algorithms to place bids on your behalf."
  },
  {
    que: "Is it secure?",
    ans: "Yes, our platform uses the latest security measures to ensure your data is protected."
  },
  {
    que: "What is the benefit?",
    ans: "You can focus on your work while our system handles the tedious bidding process."
  },
  {
    que: "Is there a subscription charge?",
    ans: "Yes, we offer a variety of subscription plans to suit your needs. Contact us for more details."
  }
];

function FAQSection() {
  return (
    <section className="p-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">FAQs</h2>
      <div className="text-left mx-auto max-w-4xl">
        {faqData.map((faq, index) => (
          <FAQ key={index} que={faq.que} ans={faq.ans} />
        ))}
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-700 mt-8">
          Still have questions? Contact Us
        </button>
      </div>
    </section>
  );
}

export default FAQSection;
