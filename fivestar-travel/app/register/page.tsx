'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gstNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Registration successful! Our team will verify your details and contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
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
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Partner Registration</h2>
            <p className="text-gray-600 mt-2">Join India's leading B2B travel platform</p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-200">
                Company Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company/Agency Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="ABC Travels Pvt Ltd"
                  />
                </div>

                <div>
                  <label htmlFor="gstNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    GST Number
                  </label>
                  <input
                    type="text"
                    id="gstNumber"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="22AAAAA0000A1Z5"
                  />
                </div>
              </div>
            </div>

            {/* Owner Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-200">
                Owner Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ownerName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Owner Full Name *
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="owner@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-200">
                Business Address
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Building name, street, area"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="Mumbai"
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="Maharashtra"
                    />
                  </div>

                  <div>
                    <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="400001"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-200">
                Create Password
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Minimum 8 characters"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Re-enter password"
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 mt-1 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-primary-700 hover:text-primary-800 font-medium">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary-700 hover:text-primary-800 font-medium">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-700 hover:bg-primary-800 text-white py-4 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Register as Partner
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Already have an account?{' '}
              <Link href="/login" className="text-primary-700 hover:text-primary-800 font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white">
          <h3 className="font-bold text-lg mb-4">What Happens Next?</h3>
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li>Submit your registration form</li>
            <li>Our team will verify your details within 24-48 hours</li>
            <li>You'll receive login credentials via email</li>
            <li>Start booking and growing your business!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
