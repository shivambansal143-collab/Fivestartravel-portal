export default function Destinations() {
  const destinations = [
    {
      name: 'Dubai, UAE',
      image: '🏙️',
      description: 'Luxury shopping, ultramodern architecture, and vibrant nightlife',
      packages: '25+ Packages',
      price: 'Starting ₹35,000'
    },
    {
      name: 'Maldives',
      image: '🏝️',
      description: 'Pristine beaches, crystal-clear waters, and luxury resorts',
      packages: '30+ Packages',
      price: 'Starting ₹45,000'
    },
    {
      name: 'Thailand',
      image: '🛕',
      description: 'Tropical beaches, royal palaces, and ancient ruins',
      packages: '40+ Packages',
      price: 'Starting ₹25,000'
    },
    {
      name: 'Singapore',
      image: '🌆',
      description: 'Modern city-state with diverse culture and attractions',
      packages: '20+ Packages',
      price: 'Starting ₹30,000'
    },
    {
      name: 'Switzerland',
      image: '🏔️',
      description: 'Alpine scenery, chocolate, watches, and skiing',
      packages: '15+ Packages',
      price: 'Starting ₹85,000'
    },
    {
      name: 'Paris, France',
      image: '🗼',
      description: 'Art, fashion, gastronomy, and iconic landmarks',
      packages: '18+ Packages',
      price: 'Starting ₹75,000'
    },
    {
      name: 'Bali, Indonesia',
      image: '🌺',
      description: 'Volcanic mountains, beaches, coral reefs, and rice paddies',
      packages: '35+ Packages',
      price: 'Starting ₹28,000'
    },
    {
      name: 'Turkey',
      image: '🕌',
      description: 'Rich history, stunning landscapes, and vibrant bazaars',
      packages: '22+ Packages',
      price: 'Starting ₹40,000'
    },
    {
      name: 'Australia',
      image: '🦘',
      description: 'Great Barrier Reef, Sydney Opera House, and outback',
      packages: '12+ Packages',
      price: 'Starting ₹95,000'
    }
  ];

  const domesticDestinations = [
    {
      name: 'Goa',
      image: '🏖️',
      description: 'Beaches, nightlife, and Portuguese heritage',
      packages: '50+ Packages',
      price: 'Starting ₹8,000'
    },
    {
      name: 'Kerala',
      image: '🌴',
      description: 'Backwaters, hill stations, and Ayurveda',
      packages: '45+ Packages',
      price: 'Starting ₹10,000'
    },
    {
      name: 'Rajasthan',
      image: '🏰',
      description: 'Royal palaces, forts, and desert safaris',
      packages: '40+ Packages',
      price: 'Starting ₹12,000'
    },
    {
      name: 'Himachal Pradesh',
      image: '⛰️',
      description: 'Hill stations, adventure sports, and monasteries',
      packages: '35+ Packages',
      price: 'Starting ₹9,000'
    },
    {
      name: 'Kashmir',
      image: '🏔️',
      description: 'Paradise on Earth with stunning valleys',
      packages: '25+ Packages',
      price: 'Starting ₹15,000'
    },
    {
      name: 'Andaman',
      image: '🐚',
      description: 'Pristine beaches and water sports',
      packages: '20+ Packages',
      price: 'Starting ₹18,000'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Destinations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover amazing destinations worldwide with our exclusive B2B packages and competitive rates
          </p>
        </div>
      </section>

      {/* International Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              International Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Popular international packages for your clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 h-48 flex items-center justify-center text-8xl">
                  {destination.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-primary-700">{destination.packages}</span>
                    <span className="text-sm font-semibold text-secondary-600">{destination.price}</span>
                  </div>
                  <button className="w-full bg-primary-700 hover:bg-primary-800 text-white py-3 rounded-lg font-semibold transition">
                    View Packages
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Domestic Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Explore incredible India with our curated packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticDestinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-br from-secondary-500 to-secondary-700 h-48 flex items-center justify-center text-8xl">
                  {destination.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-primary-700">{destination.packages}</span>
                    <span className="text-sm font-semibold text-secondary-600">{destination.price}</span>
                  </div>
                  <button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-3 rounded-lg font-semibold transition">
                    View Packages
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special B2B Offers
            </h2>
            <p className="text-xl text-gray-600">
              Exclusive deals for our partner agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-xl p-8 text-white">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-4">Early Bird Discounts</h3>
              <p className="text-gray-200 mb-6">
                Book 60 days in advance and get up to 25% additional discount on select international packages
              </p>
              <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Offers
              </button>
            </div>

            <div className="bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl p-8 text-white">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">Group Booking Benefits</h3>
              <p className="text-gray-200 mb-6">
                Special rates for group bookings of 10+ passengers with complimentary tour leader arrangements
              </p>
              <button className="bg-white text-secondary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Custom Packages?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Our team can create tailored itineraries for your specific requirements
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            Request Custom Package
          </a>
        </div>
      </section>
    </div>
  );
}
