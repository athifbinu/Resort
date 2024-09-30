import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-11">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <h1 className="font-extrabold text-white text-3xl">
              THE <br /> BRENDFORD <br /> PROJECT
            </h1>
          </div>
          <p className="text-gray-400">
            Deleniti aeue corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt...
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* About Us Links */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold">About Us</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Our Teams
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info and Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact Info</h3>
          <div className="space-y-1 text-gray-400">
            <p>
              <i className="fas fa-phone"></i> +61 3 8376 6284
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@whizcyber.om
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> 21 King Street,
              Melbourne, 3000, Australia
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Sign up for Newsletter</h3>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none"
              />
              <button className="px-4 py-2 bg-orange-600 text-white rounded-r hover:bg-orange-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <hr className="border-gray-400" />
      </div>
      <div className="mt-8 text-center text-gray-600">
        Cyborparagons copyright © 2022. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
