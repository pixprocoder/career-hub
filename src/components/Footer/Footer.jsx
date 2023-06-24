import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Social</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Email: info@example.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Phone: 123-456-7890
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Address: 123 Street, City
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
