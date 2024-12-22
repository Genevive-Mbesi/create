'use client'
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
          <a href="#" aria-label="Home">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-black"
    >
      <path d="M12 21a9 9 0 1 1 8.84-7.09 3.5 3.5 0 0 1-4.3 4.29c-.99-.12-2.02.18-2.52.69A3 3 0 0 1 12 21Z" />
      <circle cx="7.5" cy="10.5" r="1" />
      <circle cx="12" cy="7.5" r="1" />
      <circle cx="16.5" cy="10.5" r="1" />
    </svg>
  </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50">
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
