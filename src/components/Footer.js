import React from 'react';
import Section from './ComponentsForComponents/ComponentForFooter';

// git testing 
function Footer() {
    return (
            <footer className="bg-black text-white p-20 text-center">
              <h2 className="text-3xl font-bold mb-8">Stay Updated with Our Newsletter</h2>
              <form className="mb-8">
                <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md"/>
                <button type="submit" className="bg-white text-black px-6 py-2 rounded-r-md hover:bg-gray-200">Subscribe</button>
              </form>
              <div className="flex justify-around">

                <Section title = "Logo" li1 = "About Us" li2 = "Privacy Policy" li3 = "Terms of Service" li4 = "Contact" />
                <Section title = "Company" li1 = "Careers" li2 = "Blog" li3 = "Press" li4 = "Partners" />
                <Section title = "Support" li1 = "Help Center" li2 = "Safety Center" li3 = "Community Guidelines" li4 = "Contact Support" />
                
              </div>
            </footer>
      );
}

export default Footer;



