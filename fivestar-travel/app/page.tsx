import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium B2B Travel Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Empowering travel businesses with world-class booking solutions, competitive rates, and exceptional service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FiveStarTravel.in?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive B2B travel solutions tailored for your business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Pricing</h3>
              <p className="text-gray-600">
                Access exclusive B2B rates for flights, hotels, and packages. Maximize your profit margins with our competitive pricing structure.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Booking</h3>
              <p className="text-gray-600">
                Real-time availability and instant confirmation. Our advanced booking engine ensures seamless transactions 24/7.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated account managers and round-the-clock support. We're here to help your business grow and succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our B2B Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive travel solutions for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flight Bookings</h3>
              <p className="text-gray-600 mb-4">Domestic and international flights with best fares</p>
              <Link href="/services" className="text-primary-700 font-semibold hover:text-primary-800">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hotel Reservations</h3>
              <p className="text-gray-600 mb-4">Global hotel inventory with exclusive rates</p>
              <Link href="/services" className="text-primary-700 font-semibold hover:text-primary-800">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tour Packages</h3>
              <p className="text-gray-600 mb-4">Customized packages for every destination</p>
              <Link href="/services" className="text-primary-700 font-semibold hover:text-primary-800">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visa Assistance</h3>
              <p className="text-gray-600 mb-4">Complete visa support and documentation</p>
              <Link href="/services" className="text-primary-700 font-semibold hover:text-primary-800">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg text-gray-200">Partner Agencies</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-lg text-gray-200">Bookings/Month</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-lg text-gray-200">Destinations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg text-gray-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Travel Business?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join hundreds of successful travel agencies partnering with FiveStarTravel.in
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
