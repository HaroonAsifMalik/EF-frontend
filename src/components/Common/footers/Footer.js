import React from 'react';
import FooterSection from './FooterSection';

// static data for footer section
const footerSections = [
  {
    title: "Logo",
    links: ["About Us", "Privacy Policy", "Terms of Service", "Contact"]
  },
  {
    title: "Company",
    links: ["Careers", "Blog", "Press", "Partners"]
  },
  {
    title: "Support",
    links: ["Help Center", "Safety Center", "Community Guidelines", "Contact Support"]
  }
];

// git testing 
function Footer() {
  return (
    <footer className="bg-black text-white p-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Stay Updated with Our Newsletter</h2>
      <form className="mb-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-l-md"
        />
        <button type="submit" className="bg-white text-black px-6 py-2 rounded-r-md hover:bg-gray-200">
          Subscribe
        </button>
      </form>
      <div className="flex justify-around">
        {footerSections.map((section, index) => (
          <FooterSection key={index} title={section.title} li1={section.links[0]} li2={section.links[1]} li3={section.links[2]} li4={section.links[3]} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
