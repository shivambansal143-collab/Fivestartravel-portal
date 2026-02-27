export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About FiveStarTravel.in</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted B2B travel partner committed to excellence and innovation
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading B2B Travel Solutions Provider
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                FiveStarTravel.in is India's premier B2B travel portal, dedicated to empowering travel agencies and tour operators with cutting-edge technology and competitive pricing.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Since our inception, we have been committed to providing seamless booking experiences, comprehensive travel solutions, and exceptional customer service to our partner network.
              </p>
              <p className="text-lg text-gray-600">
                Our platform connects travel professionals with a vast inventory of flights, hotels, tour packages, and ancillary services, enabling them to serve their customers better and grow their business.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl p-12 text-center">
              <div className="text-6xl mb-6">🌟</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To revolutionize the B2B travel industry by providing innovative technology solutions, competitive pricing, and unparalleled support to our partners worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600">Building lasting relationships through transparency and reliability</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Continuously evolving with cutting-edge technology solutions</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600">Growing together with our network of travel professionals</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Delivering superior service and quality in everything we do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600">
              Advantages that set us apart in the B2B travel industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Pricing</h3>
              <p className="text-gray-600">
                Access to exclusive B2B rates and competitive commissions that maximize your profit margins
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art booking platform with real-time inventory and instant confirmations
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                24/7 customer support with dedicated account managers for personalized assistance
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Extensive network of suppliers and partners across 150+ destinations worldwide
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Analytics</h3>
              <p className="text-gray-600">
                Comprehensive reporting and analytics tools to track performance and growth
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Transactions</h3>
              <p className="text-gray-600">
                Bank-grade security with multiple payment options and instant payment processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals driving innovation in B2B travel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 h-48 flex items-center justify-center text-6xl">
                👨‍💼
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Rajesh Kumar</h3>
                <p className="text-secondary-600 font-semibold mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">20+ years in travel industry with vision to transform B2B travel solutions</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center">
              <div className="bg-gradient-to-br from-secondary-500 to-secondary-700 h-48 flex items-center justify-center text-6xl">
                👩‍💼
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Priya Sharma</h3>
                <p className="text-secondary-600 font-semibold mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">Leading technology innovation with expertise in travel tech solutions</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 h-48 flex items-center justify-center text-6xl">
                👨‍💼
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Amit Patel</h3>
                <p className="text-secondary-600 font-semibold mb-3">Head of Operations</p>
                <p className="text-gray-600 text-sm">Ensuring seamless operations and exceptional partner experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Network
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Become part of India's leading B2B travel platform
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            Partner With Us
          </a>
        </div>
      </section>
    </div>
  );
}
