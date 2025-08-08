import React, { useState, useEffect } from 'react';

export const Footer = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true); // Trigger animation on mount
  }, []);

  return (
    <footer
      className={`bg-black-900 text-blue-400 py-10 px-5 font-sans transition-transform duration-700 ease-out ${
        slideIn ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around">
        <div className="flex-1 min-w-[200px] m-3">
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p>
            We are a company dedicated to providing the best services to our customers.
          </p>
        </div>
        <div className="flex-1 min-w-[200px] m-3">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="list-none p-0">
            <li>
              <a href="#home" className="text-gray-200 hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#services" className="text-gray-200 hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-200 hover:text-gray-400">Contact</a>
            </li>
            <li>
              <a href="#about" className="text-gray-200 hover:text-gray-400">About</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[200px] m-3">
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p>Email: tamboroussel@gmail.com</p>
          <p>Phone: +237 681 910 894</p>
          <div className="mt-3 flex space-x-6 text-2xl">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-600">📘</a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400">🐦</a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-700">🔗</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm">
        &copy; {new Date().getFullYear()} Leprince.Tambo All rights reserved.
      </div>
    </footer>
  );
};
