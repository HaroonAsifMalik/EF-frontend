import React from 'react';

function Footer() {
    return (
            <footer className="bg-gray-900 text-white p-20 text-center">
              <h2 className="text-3xl font-bold mb-8">Stay Updated with Our Newsletter</h2>
              <form className="mb-8">
                <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md"/>
                <button type="submit" className="bg-white text-black px-6 py-2 rounded-r-md hover:bg-gray-200">Subscribe</button>
              </form>
              <div className="flex justify-around">
                <div className="footer-link">
                  <h3 className="font-semibold">Logo</h3>
                  <ul>
                    <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                    <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                  </ul>
                </div>
                <div className="footer-link">
                  <h3 className="font-semibold">Company</h3>
                  <ul>
                    <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                    <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                    <li><a href="#" className="hover:text-gray-400">Press</a></li>
                    <li><a href="#" className="hover:text-gray-400">Partners</a></li>
                  </ul>
                </div>
                <div className="footer-link">
                  <h3 className="font-semibold">Support</h3>
                  <ul>
                    <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
                    <li><a href="#" className="hover:text-gray-400">Safety Center</a></li>
                    <li><a href="#" className="hover:text-gray-400">Community Guidelines</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contact Support</a></li>
                  </ul>
                </div>
              </div>
            </footer>
      );
}

export default Footer;
