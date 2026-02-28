"use client";

const tours = [
  { name: "Dubai City Tour", location: "Dubai, UAE", duration: "6 hrs", price: "₹3,500", type: "Sightseeing", rating: 4.8, available: true },
  { name: "Desert Safari with BBQ", location: "Dubai, UAE", duration: "7 hrs", price: "₹4,200", type: "Adventure", rating: 4.9, available: true },
  { name: "Burj Khalifa 124th Floor", location: "Dubai, UAE", duration: "2 hrs", price: "₹2,800", type: "Ticket", rating: 4.7, available: true },
  { name: "Abu Dhabi Full Day Tour", location: "Abu Dhabi, UAE", duration: "10 hrs", price: "₹5,500", type: "Sightseeing", rating: 4.6, available: true },
  { name: "Bangkok Temple Tour", location: "Bangkok, Thailand", duration: "5 hrs", price: "₹2,200", type: "Cultural", rating: 4.5, available: true },
  { name: "Phi Phi Island Day Trip", location: "Phuket, Thailand", duration: "8 hrs", price: "₹3,800", type: "Island", rating: 4.8, available: true },
  { name: "Singapore Night Safari", location: "Singapore", duration: "4 hrs", price: "₹3,200", type: "Ticket", rating: 4.7, available: true },
  { name: "Universal Studios Singapore", location: "Singapore", duration: "Full Day", price: "₹5,000", type: "Theme Park", rating: 4.9, available: true },
  { name: "Bali Ubud Rice Terrace Tour", location: "Bali, Indonesia", duration: "8 hrs", price: "₹2,500", type: "Nature", rating: 4.6, available: true },
];

export default function ToursPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-800">🎟️ Tours & Tickets</h1>
        <p className="text-sm text-slate-500">Activity API + Manual Upload — Theme parks, local tours, sightseeing</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Destination</label>
            <input type="text" defaultValue="Dubai" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Date</label>
            <input type="date" defaultValue="2026-03-15" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Category</label>
            <select className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>All Categories</option>
              <option>Sightseeing</option>
              <option>Adventure</option>
              <option>Theme Park</option>
              <option>Cultural</option>
              <option>Island</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
              Search Tours
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tours.map((t) => (
          <div key={t.name} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
              <span className="text-5xl">🎟️</span>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs bg-navy-100 text-navy-700 px-2 py-0.5 rounded-full font-medium">{t.type}</span>
                <span className="text-xs text-yellow-600 font-medium">★ {t.rating}</span>
              </div>
              <h3 className="font-bold text-navy-800">{t.name}</h3>
              <p className="text-sm text-slate-500">{t.location}</p>
              <p className="text-xs text-slate-400 mt-1">Duration: {t.duration}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-xs text-slate-500">B2B Price</p>
                  <p className="text-lg font-bold text-orange-500">{t.price}</p>
                </div>
                <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors">
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
