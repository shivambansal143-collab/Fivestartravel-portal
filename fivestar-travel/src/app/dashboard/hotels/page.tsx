"use client";
import { useState } from "react";

const hotels = [
  { name: "JW Marriott Marquis", location: "Dubai Marina, Dubai", stars: 5, rating: 9.2, rooms: "Deluxe King", price: "₹12,500", originalPrice: "₹18,000", nights: "per night", source: "API", meals: "Breakfast", cancellation: "Free" },
  { name: "Atlantis The Palm", location: "Palm Jumeirah, Dubai", stars: 5, rating: 9.5, rooms: "Ocean View", price: "₹22,000", originalPrice: "₹32,000", nights: "per night", source: "Contract", meals: "Half Board", cancellation: "Non-refundable" },
  { name: "Hilton Dubai Creek", location: "Deira, Dubai", stars: 4, rating: 8.4, rooms: "Superior Twin", price: "₹6,800", originalPrice: "₹9,500", nights: "per night", source: "API", meals: "Room Only", cancellation: "Free" },
  { name: "Rove Downtown", location: "Downtown Dubai", stars: 3, rating: 8.1, rooms: "Rover Room", price: "₹4,200", originalPrice: "₹5,800", nights: "per night", source: "API", meals: "Breakfast", cancellation: "Free" },
  { name: "Burj Al Arab", location: "Jumeirah, Dubai", stars: 5, rating: 9.8, rooms: "Deluxe Suite", price: "₹85,000", originalPrice: "₹1,20,000", nights: "per night", source: "Contract", meals: "All Inclusive", cancellation: "48hr policy" },
];

export default function HotelsPage() {
  const [view, setView] = useState<"search" | "contract">("search");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">🏨 Hotel Booking</h1>
          <p className="text-sm text-slate-500">Bedbank API + Direct Contracts + Allotment Booking</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setView("search")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${view === "search" ? "bg-orange-500 text-white" : "bg-white border border-slate-200 text-slate-600"}`}>
            Search Hotels
          </button>
          <button onClick={() => setView("contract")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${view === "contract" ? "bg-orange-500 text-white" : "bg-white border border-slate-200 text-slate-600"}`}>
            Contract Rates
          </button>
        </div>
      </div>

      {/* Search Form */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Destination</label>
            <input type="text" defaultValue="Dubai, UAE" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Check-in</label>
            <input type="date" defaultValue="2026-03-15" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Check-out</label>
            <input type="date" defaultValue="2026-03-19" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Rooms & Guests</label>
            <select className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
              <option>1 Room, 2 Adults</option>
              <option>2 Rooms, 4 Adults</option>
              <option>1 Room, 2 Adults, 1 Child</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
              Search Hotels
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {hotels.map((h) => (
          <div key={h.name} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="w-full lg:w-48 h-32 bg-gradient-to-br from-navy-100 to-navy-200 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🏨</span>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-navy-800">{h.name}</h3>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${h.source === "API" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                        {h.source}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{h.location}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: h.stars }).map((_, i) => (
                        <span key={i} className="text-yellow-500 text-sm">★</span>
                      ))}
                      <span className="ml-2 bg-navy-600 text-white text-xs px-1.5 py-0.5 rounded font-bold">{h.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{h.rooms}</span>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{h.meals}</span>
                  <span className={`text-xs px-2 py-1 rounded ${h.cancellation === "Free" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                    {h.cancellation === "Free" ? "Free Cancellation" : h.cancellation}
                  </span>
                </div>
              </div>
              <div className="text-right flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-400 line-through">{h.originalPrice}</p>
                  <p className="text-2xl font-bold text-navy-800">{h.price}</p>
                  <p className="text-xs text-slate-500">{h.nights}</p>
                </div>
                <button className="mt-3 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors">
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
