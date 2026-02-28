import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const international = [
  { name: "Dubai", country: "UAE", price: "₹25,999", days: "4N/5D", tag: "Best Seller", color: "from-amber-400 to-orange-500" },
  { name: "Thailand", country: "Bangkok + Pattaya", price: "₹18,999", days: "5N/6D", tag: "Popular", color: "from-green-400 to-teal-500" },
  { name: "Singapore", country: "Singapore", price: "₹32,999", days: "4N/5D", tag: "Premium", color: "from-red-400 to-pink-500" },
  { name: "Bali", country: "Indonesia", price: "₹28,999", days: "5N/6D", tag: "Trending", color: "from-blue-400 to-indigo-500" },
  { name: "Vietnam", country: "Hanoi + Ha Long", price: "₹22,999", days: "5N/6D", tag: "New", color: "from-yellow-400 to-amber-500" },
  { name: "Maldives", country: "Maldives", price: "₹45,999", days: "3N/4D", tag: "Luxury", color: "from-cyan-400 to-blue-500" },
  { name: "Europe", country: "Multi-Country", price: "₹89,999", days: "7N/8D", tag: "Grand Tour", color: "from-purple-400 to-violet-500" },
  { name: "Turkey", country: "Istanbul + Cappadocia", price: "₹42,999", days: "6N/7D", tag: "Adventure", color: "from-rose-400 to-red-500" },
];

const domestic = [
  { name: "Kashmir", price: "₹15,999", days: "5N/6D", tag: "Paradise" },
  { name: "Goa", price: "₹8,999", days: "3N/4D", tag: "Beach" },
  { name: "Kerala", price: "₹12,999", days: "4N/5D", tag: "Backwaters" },
  { name: "Rajasthan", price: "₹14,999", days: "5N/6D", tag: "Heritage" },
  { name: "Andaman", price: "₹19,999", days: "5N/6D", tag: "Island" },
  { name: "Ladakh", price: "₹22,999", days: "6N/7D", tag: "Adventure" },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-gradient-to-br from-navy-600 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Popular Destinations</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            B2B rates for international and domestic packages — best agent commissions guaranteed
          </p>
        </div>
      </section>

      {/* International */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-8">🌍 International Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {international.map((d) => (
              <div key={d.name} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group">
                <div className={`bg-gradient-to-br ${d.color} h-40 flex items-end p-4 relative`}>
                  <span className="absolute top-3 right-3 bg-white/90 text-xs font-bold px-2 py-1 rounded-full text-slate-700">{d.tag}</span>
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{d.name}</h3>
                    <p className="text-sm text-white/80">{d.country}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-slate-500">Starting from</p>
                      <p className="text-xl font-bold text-navy-800">{d.price}</p>
                    </div>
                    <span className="text-xs bg-navy-50 text-navy-600 px-2 py-1 rounded-full font-medium">{d.days}</span>
                  </div>
                  <Link href="/dashboard/packages/ready" className="block w-full text-center py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors">
                    View Package →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-8">🇮🇳 Domestic Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domestic.map((d) => (
              <div key={d.name} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all flex items-center justify-between">
                <div>
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-medium">{d.tag}</span>
                  <h3 className="text-lg font-bold text-navy-800 mt-2">{d.name}</h3>
                  <p className="text-sm text-slate-500">{d.days}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">From</p>
                  <p className="text-xl font-bold text-orange-500">{d.price}</p>
                  <p className="text-xs text-slate-400">per person</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
