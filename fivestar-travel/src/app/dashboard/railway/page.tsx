"use client";

const railPasses = [
  { name: "Eurail Global Pass", coverage: "33 European Countries", duration: "15 Days", class: "1st Class", price: "₹42,000", type: "Flexi" },
  { name: "Swiss Travel Pass", coverage: "Switzerland", duration: "8 Days", class: "2nd Class", price: "₹28,000", type: "Consecutive" },
  { name: "Japan Rail Pass", coverage: "All Japan", duration: "7 Days", class: "Green Car", price: "₹35,000", type: "Consecutive" },
  { name: "BritRail Pass", coverage: "England, Scotland, Wales", duration: "4 Days", class: "Standard", price: "₹18,000", type: "Flexi" },
];

const routes = [
  { from: "Paris", to: "London", train: "Eurostar", duration: "2h 16m", price: "₹8,500", departures: "12 daily" },
  { from: "Rome", to: "Florence", train: "Frecciarossa", duration: "1h 32m", price: "₹4,200", departures: "20 daily" },
  { from: "Tokyo", to: "Kyoto", train: "Shinkansen", duration: "2h 15m", price: "₹9,800", departures: "15 daily" },
  { from: "Zurich", to: "Interlaken", train: "SBB", duration: "1h 55m", price: "₹3,500", departures: "8 daily" },
  { from: "Barcelona", to: "Madrid", train: "AVE", duration: "2h 30m", price: "₹5,600", departures: "10 daily" },
];

export default function RailwayPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-800">🚆 Railway Booking</h1>
        <p className="text-sm text-slate-500">Europe rail passes, country-specific tickets, API integration</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">From Station</label>
            <input type="text" defaultValue="Paris Gare du Nord" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">To Station</label>
            <input type="text" defaultValue="London St Pancras" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Date</label>
            <input type="date" defaultValue="2026-03-15" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Passengers</label>
            <select className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults + 1 Child</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
              Search Trains
            </button>
          </div>
        </div>
      </div>

      {/* Rail Passes */}
      <div>
        <h3 className="text-lg font-semibold text-navy-800 mb-4">Rail Passes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {railPasses.map((p) => (
            <div key={p.name} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium">{p.type}</span>
              <h3 className="font-bold text-navy-800 mt-2">{p.name}</h3>
              <p className="text-sm text-slate-500">{p.coverage}</p>
              <div className="mt-3 space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Duration</span><span className="font-medium">{p.duration}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Class</span><span className="font-medium">{p.class}</span></div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-orange-500">{p.price}</p>
                <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold transition-colors">Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Routes */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-5 border-b border-slate-100">
          <h3 className="font-semibold text-navy-800">Popular Routes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                <th className="text-left p-4">Route</th>
                <th className="text-left p-4">Train</th>
                <th className="text-left p-4">Duration</th>
                <th className="text-left p-4">Frequency</th>
                <th className="text-right p-4">Price</th>
                <th className="text-center p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((r, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="p-4 text-sm font-medium text-navy-800">{r.from} → {r.to}</td>
                  <td className="p-4 text-sm text-slate-600">{r.train}</td>
                  <td className="p-4 text-sm text-slate-600">{r.duration}</td>
                  <td className="p-4 text-sm text-slate-500">{r.departures}</td>
                  <td className="p-4 text-sm font-bold text-navy-800 text-right">{r.price}</td>
                  <td className="p-4 text-center">
                    <button className="px-4 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold transition-colors">Book</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
