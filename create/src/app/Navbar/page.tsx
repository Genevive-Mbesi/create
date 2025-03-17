"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home">
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
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="hover:bg-gray-100 px-3 py-2 rounded-md font-bold text-sm  transition"
              aria-label="Navigate to Home"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-bold transition"
              aria-label="View Projects"
            >
              About
            </Link> 
            <Link
              href="/Skills"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-bold transition"
              aria-label="View Projects"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-bold transition"
              aria-label="Contact Page"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
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
          <Link
            href="/"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-bold transition"
            aria-label="Navigate to Home"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-bold transition"
            aria-label="View Projects"
          >
            About
          </Link>
          <Link
            href="/Skills"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-bold transition"
            aria-label="View Projects"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-bold transition"
            aria-label="Contact Page"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
