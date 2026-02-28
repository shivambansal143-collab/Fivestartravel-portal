"use client";
import { useState } from "react";

const searchResults = [
  { airline: "Air India", code: "AI-302", dep: "06:30", arr: "10:45", from: "DEL", to: "DXB", duration: "3h 45m", type: "GDS", price: "₹18,500", seats: 9, stops: "Non-stop" },
  { airline: "IndiGo", code: "6E-1423", dep: "08:15", arr: "12:30", from: "DEL", to: "DXB", duration: "3h 45m", type: "LCC", price: "₹14,200", seats: 23, stops: "Non-stop" },
  { airline: "Emirates", code: "EK-511", dep: "10:00", arr: "12:15", from: "DEL", to: "DXB", duration: "3h 45m", type: "GDS", price: "₹24,800", seats: 4, stops: "Non-stop" },
  { airline: "SpiceJet", code: "SG-57", dep: "14:30", arr: "18:45", from: "DEL", to: "DXB", duration: "3h 45m", type: "LCC", price: "₹12,900", seats: 15, stops: "Non-stop" },
  { airline: "Vistara", code: "UK-845", dep: "16:00", arr: "20:15", from: "DEL", to: "DXB", duration: "3h 45m", type: "GDS", price: "₹21,300", seats: 7, stops: "Non-stop" },
  { airline: "FlyDubai", code: "FZ-434", dep: "22:00", arr: "00:15+1", from: "DEL", to: "DXB", duration: "3h 45m", type: "LCC", price: "₹15,600", seats: 12, stops: "Non-stop" },
];

const fixedDepartures = [
  { route: "DEL → DXB", date: "15 Mar 2026", airline: "Air India", price: "₹11,999", seats: 45, type: "Group" },
  { route: "BOM → BKK", date: "20 Mar 2026", airline: "Thai Airways", price: "₹16,500", seats: 30, type: "Group" },
  { route: "DEL → SIN", date: "25 Mar 2026", airline: "Singapore Air", price: "₹19,999", seats: 20, type: "Fixed" },
];

export default function FlightsPage() {
  const [tab, setTab] = useState<"search" | "fixed">("search");
  const [tripType, setTripType] = useState("oneway");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">✈️ Flight Booking</h1>
          <p className="text-sm text-slate-500">GDS + LCC + Fixed Departures — Real-time availability</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setTab("search")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === "search" ? "bg-orange-500 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
            Search Flights
          </button>
          <button onClick={() => setTab("fixed")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === "fixed" ? "bg-orange-500 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
            Fixed Departures
          </button>
        </div>
      </div>

      {tab === "search" && (
        <>
          {/* Search Form */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex gap-4 mb-4">
              {["oneway", "return", "multicity"].map((t) => (
                <label key={t} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="trip" checked={tripType === t} onChange={() => setTripType(t)} className="accent-orange-500" />
                  <span className="text-sm font-medium text-slate-700 capitalize">{t === "oneway" ? "One Way" : t === "return" ? "Round Trip" : "Multi City"}</span>
                </label>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">From</label>
                <input type="text" defaultValue="DEL - New Delhi" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">To</label>
                <input type="text" defaultValue="DXB - Dubai" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Departure</label>
                <input type="date" defaultValue="2026-03-15" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Passengers</label>
                <select className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults + 1 Child</option>
                  <option>2 Adults + 2 Children</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
                  Search Flights
                </button>
              </div>
            </div>
            <div className="flex gap-4 mt-3">
              <label className="flex items-center gap-2 text-xs text-slate-500">
                <input type="checkbox" className="accent-orange-500" /> GDS Only
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-500">
                <input type="checkbox" className="accent-orange-500" /> LCC Only
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-500">
                <input type="checkbox" className="accent-orange-500" /> Non-stop Only
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-500">
                <input type="checkbox" className="accent-orange-500" /> Refundable
              </label>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-3">
            {searchResults.map((f) => (
              <div key={f.code} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xs font-bold text-navy-700">
                      {f.airline.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-navy-800">{f.airline}</p>
                      <p className="text-xs text-slate-500">{f.code} · {f.stops}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 flex-1">
                    <div className="text-center">
                      <p className="text-lg font-bold text-navy-800">{f.dep}</p>
                      <p className="text-xs text-slate-500">{f.from}</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <p className="text-xs text-slate-400">{f.duration}</p>
                      <div className="w-full h-px bg-slate-300 relative my-1">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-navy-600 rounded-full" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full" />
                      </div>
                      <p className="text-xs text-slate-400">{f.stops}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-navy-800">{f.arr}</p>
                      <p className="text-xs text-slate-500">{f.to}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-1 ${f.type === "GDS" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                        {f.type}
                      </span>
                      <p className="text-xl font-bold text-navy-800">{f.price}</p>
                      <p className="text-xs text-slate-500">{f.seats} seats left</p>
                    </div>
                    <button className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === "fixed" && (
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100">
            <h3 className="font-semibold text-navy-800">Fixed Departure / Group Fares</h3>
            <p className="text-xs text-slate-500">Pre-blocked seats at special B2B rates</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  <th className="text-left p-4">Route</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Airline</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-right p-4">B2B Price</th>
                  <th className="text-center p-4">Seats</th>
                  <th className="text-center p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {fixedDepartures.map((f, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="p-4 text-sm font-medium text-navy-800">{f.route}</td>
                    <td className="p-4 text-sm text-slate-600">{f.date}</td>
                    <td className="p-4 text-sm text-slate-600">{f.airline}</td>
                    <td className="p-4"><span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">{f.type}</span></td>
                    <td className="p-4 text-sm font-bold text-navy-800 text-right">{f.price}</td>
                    <td className="p-4 text-sm text-center text-slate-600">{f.seats}</td>
                    <td className="p-4 text-center">
                      <button className="px-4 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold transition-colors">Book Now</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
