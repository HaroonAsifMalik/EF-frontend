import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

// Static data for navbar links
const navbarLinks = [
  { id: 1, label: "Discover", to: "discover" },
  { id: 2, label: "Services", to: "services" },
  { id: 3, label: "Pricing", to: "pricing" },
];

function Navbar() {
  return (
    <nav className="bg-black px-2 py-2">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <img src="/images/logo.jpeg" alt="Logo" className="h-10 w-10 rounded-full" /> {/* Logo with circular shape */}
        </a>

        {/* Hamburger Menu Button for Mobile */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Navbar Links - Centered */}
        <div className="w-full md:w-auto flex justify-center">
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-3 md:space-y-0 p-3 md:p-0 border border-gray-700 rounded-lg bg-black md:border-0 md:bg-black">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block py-1 px-3 text-sm text-white hover:text-gray-900 hover:bg-white rounded cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}

            {/* Dropdown for More Options */}
            <li className="relative group">
              <button
                className="block py-1 px-3 text-sm text-white hover:text-gray-900 hover:bg-white rounded"
              >
                More Options
              </button>
              <div className="absolute left-0 mt-1 w-32 bg-black text-white shadow-lg rounded-lg hidden group-hover:block">
                <ScrollLink
                  to="our-team"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block px-3 py-1 text-sm hover:bg-gray-700 cursor-pointer whitespace-nowrap"
                >
                  Our Team
                </ScrollLink>
                <ScrollLink
                  to="faqs"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block px-3 py-1 text-sm hover:bg-gray-700 cursor-pointer"
                >
                  FAQs
                </ScrollLink>
              </div>
            </li>
          </ul>
        </div>

        {/* Register & Login Links Styled Like Navbar Links */}
        <div className="flex items-center space-x-3">
          <Link
            to="/register"
            className="block py-1 px-3 text-sm text-white hover:text-gray-900 hover:bg-white rounded"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="block py-1 px-3 text-sm text-white hover:text-gray-900 hover:bg-white rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
