"use client";

const cruises = [
  { name: "MSC World Europa", line: "MSC Cruises", route: "Dubai → Abu Dhabi → Doha → Dubai", duration: "7 Nights", cabin: "Interior", price: "₹45,000", sailing: "15 Mar 2026", capacity: "6,762 guests" },
  { name: "Costa Toscana", line: "Costa Cruises", route: "Dubai → Muscat → Abu Dhabi → Dubai", duration: "5 Nights", cabin: "Balcony", price: "₹62,000", sailing: "20 Mar 2026", capacity: "5,224 guests" },
  { name: "Royal Caribbean Odyssey", line: "Royal Caribbean", route: "Singapore → Penang → Phuket → Singapore", duration: "4 Nights", cabin: "Ocean View", price: "₹38,000", sailing: "25 Mar 2026", capacity: "4,905 guests" },
  { name: "Norwegian Prima", line: "Norwegian Cruise Line", route: "Barcelona → Marseille → Rome → Naples", duration: "7 Nights", cabin: "Suite", price: "₹1,25,000", sailing: "01 Apr 2026", capacity: "3,215 guests" },
];

export default function CruisePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-800">🚢 Cruise Booking</h1>
        <p className="text-sm text-slate-500">Cabin categories, sailing dates, dynamic pricing</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Departure Port</label>
            <select className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Dubai</option>
              <option>Singapore</option>
              <option>Barcelona</option>
              <option>Miami</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Month</label>
            <select className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>March 2026</option>
              <option>April 2026</option>
              <option>May 2026</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Cabin Type</label>
            <select className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>All Types</option>
              <option>Interior</option>
              <option>Ocean View</option>
              <option>Balcony</option>
              <option>Suite</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
              Search Cruises
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {cruises.map((c) => (
          <div key={c.name} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-56 h-40 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">🚢</span>
              </div>
              <div className="flex-1 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-navy-800">{c.name}</h3>
                    <p className="text-sm text-slate-500">{c.line}</p>
                    <p className="text-xs text-slate-400 mt-1">{c.capacity}</p>
                  </div>
                  <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded-full font-medium">{c.duration}</span>
                </div>
                <div className="mt-3 bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-500">Route</p>
                  <p className="text-sm font-medium text-slate-700">{c.route}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-4">
                    <div>
                      <p className="text-xs text-slate-500">Sailing</p>
                      <p className="text-sm font-medium text-slate-700">{c.sailing}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Cabin</p>
                      <p className="text-sm font-medium text-slate-700">{c.cabin}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs text-slate-500">From</p>
                      <p className="text-xl font-bold text-navy-800">{c.price}</p>
                      <p className="text-xs text-slate-400">per person</p>
                    </div>
                    <button className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
