"use client";

const packages = [
  {
    name: "Dubai Delight",
    destination: "Dubai, UAE",
    duration: "4N/5D",
    departure: "15 Mar 2026",
    includes: ["Return Flights", "4★ Hotel", "Desert Safari", "City Tour", "Airport Transfers"],
    price: "₹32,999",
    originalPrice: "₹42,000",
    tag: "Best Seller",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Thailand Explorer",
    destination: "Bangkok + Pattaya",
    duration: "5N/6D",
    departure: "20 Mar 2026",
    includes: ["Return Flights", "3★ Hotel", "Coral Island", "Safari World", "Transfers"],
    price: "₹24,999",
    originalPrice: "₹32,000",
    tag: "Popular",
    color: "from-green-400 to-teal-500",
  },
  {
    name: "Singapore Special",
    destination: "Singapore",
    duration: "4N/5D",
    departure: "25 Mar 2026",
    includes: ["Return Flights", "4★ Hotel", "Universal Studios", "Night Safari", "Transfers"],
    price: "₹38,999",
    originalPrice: "₹48,000",
    tag: "Premium",
    color: "from-red-400 to-pink-500",
  },
  {
    name: "Bali Paradise",
    destination: "Bali, Indonesia",
    duration: "5N/6D",
    departure: "01 Apr 2026",
    includes: ["Return Flights", "Villa Stay", "Ubud Tour", "Water Sports", "Transfers"],
    price: "₹35,999",
    originalPrice: "₹45,000",
    tag: "Trending",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Kashmir Paradise",
    destination: "Srinagar + Gulmarg + Pahalgam",
    duration: "5N/6D",
    departure: "10 Apr 2026",
    includes: ["Flights", "Houseboat + Hotel", "Shikara Ride", "Gondola", "All Transfers"],
    price: "₹18,999",
    originalPrice: "₹25,000",
    tag: "Domestic",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Europe Grand Tour",
    destination: "Paris + Swiss + Rome",
    duration: "7N/8D",
    departure: "15 Apr 2026",
    includes: ["Return Flights", "4★ Hotels", "Eiffel Tower", "Jungfraujoch", "Colosseum", "Eurail"],
    price: "₹99,999",
    originalPrice: "₹1,30,000",
    tag: "Luxury",
    color: "from-purple-400 to-violet-500",
  },
];

export default function ReadyPackagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">🎁 Ready Packages</h1>
          <p className="text-sm text-slate-500">Pre-designed itineraries with fixed departures — instant booking</p>
        </div>
        <div className="flex gap-2">
          {["All", "International", "Domestic", "Luxury"].map((f) => (
            <button key={f} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-slate-200 text-slate-600 hover:bg-orange-50 hover:border-orange-200 transition-colors">
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((p) => (
          <div key={p.name} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
            <div className={`bg-gradient-to-br ${p.color} h-36 flex items-end p-4 relative`}>
              <span className="absolute top-3 right-3 bg-white/90 text-xs font-bold px-2 py-1 rounded-full text-slate-700">{p.tag}</span>
              <div className="text-white">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-sm text-white/80">{p.destination}</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-navy-100 text-navy-700 px-2 py-0.5 rounded-full font-medium">{p.duration}</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">{p.departure}</span>
              </div>
              <div className="space-y-1.5 mb-4">
                {p.includes.map((inc) => (
                  <div key={inc} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-orange-500 text-xs">✓</span> {inc}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-400 line-through">{p.originalPrice}</p>
                  <p className="text-xl font-bold text-orange-500">{p.price}</p>
                  <p className="text-xs text-slate-400">per person</p>
                </div>
                <button className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
