export default function Services() {
  const services = [
    {
      title: 'Flight Bookings',
      icon: '✈️',
      description: 'Access to global airline inventory with competitive B2B rates',
      features: [
        'Domestic and international flights',
        'Real-time availability and pricing',
        'Instant booking confirmation',
        'Flexible payment options',
        'Group booking support',
        'Special corporate rates'
      ]
    },
    {
      title: 'Hotel Reservations',
      icon: '🏨',
      description: 'Extensive hotel network with exclusive partner rates',
      features: [
        '500,000+ hotels worldwide',
        'Competitive B2B pricing',
        'Instant confirmation',
        'Free cancellation options',
        'Special group rates',
        'Direct hotel contracts'
      ]
    },
    {
      title: 'Tour Packages',
      icon: '🌍',
      description: 'Customized tour packages for every destination',
      features: [
        'Pre-designed tour packages',
        'Custom itinerary creation',
        'Local expert guides',
        'Transportation included',
        'Activity bookings',
        'Flexible modifications'
      ]
    },
    {
      title: 'Visa Assistance',
      icon: '📋',
      description: 'Complete visa support and documentation services',
      features: [
        'Visa application support',
        'Document verification',
        'Embassy appointments',
        'Travel insurance',
        'Fast-track processing',
        'Expert consultation'
      ]
    },
    {
      title: 'Corporate Travel',
      icon: '💼',
      description: 'Specialized solutions for corporate travel management',
      features: [
        'Dedicated account manager',
        'Custom travel policies',
        'Expense management',
        'Travel analytics',
        'Priority support',
        'Volume discounts'
      ]
    },
    {
      title: 'MICE Services',
      icon: '🎯',
      description: 'Meetings, Incentives, Conferences & Events management',
      features: [
        'Venue selection',
        'Event planning',
        'Group accommodations',
        'Transportation logistics',
        'Team building activities',
        'On-ground support'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our B2B Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive travel solutions designed to empower your business and delight your customers
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-primary-700 to-primary-900 p-6 text-white">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why travel agencies choose FiveStarTravel.in
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Commissions</h3>
                <p className="text-gray-600">Earn attractive commissions on every booking with transparent pricing structure</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payments</h3>
                <p className="text-gray-600">Multiple payment options with secure transaction processing and instant confirmations</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Confirmations</h3>
                <p className="text-gray-600">Real-time booking confirmations with automated voucher generation</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
                <p className="text-gray-600">24/7 customer support with dedicated account managers for your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Access Premium B2B Services?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join our network of successful travel partners today
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            Become a Partner
          </a>
        </div>
      </section>
    </div>
  );
}
