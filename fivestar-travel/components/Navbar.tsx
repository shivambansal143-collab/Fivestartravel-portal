'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,10 90,90 10,90" fill="#1e3a8a" />
                  <path d="M 20 80 Q 50 20 80 80" stroke="#f97316" strokeWidth="4" fill="none" />
                  <circle cx="75" cy="25" r="3" fill="#f97316" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary-700">FiveStar</span>
                <span className="text-lg font-semibold text-secondary-500 -mt-1">Travel.in</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-700 font-medium transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-700 font-medium transition">
              Services
            </Link>
            <Link href="/destinations" className="text-gray-700 hover:text-primary-700 font-medium transition">
              Destinations
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-700 font-medium transition">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-700 font-medium transition">
              Contact
            </Link>
            <Link
              href="/login"
              className="bg-primary-700 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition font-medium"
            >
              Partner Login
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md font-medium">
              Home
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md font-medium">
              Services
            </Link>
            <Link href="/destinations" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md font-medium">
              Destinations
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md font-medium">
              About Us
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-primary-50 rounded-md font-medium">
              Contact
            </Link>
            <Link href="/login" className="block px-3 py-2 bg-primary-700 text-white rounded-md font-medium text-center">
              Partner Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
