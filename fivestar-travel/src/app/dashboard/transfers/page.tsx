"use client";

const transfers = [
  { type: "Airport Transfer", vehicle: "Sedan (Toyota Camry)", from: "DXB Airport", to: "JBR Hotel", pax: "1-3", price: "₹2,800", duration: "35 min" },
  { type: "Airport Transfer", vehicle: "SUV (Toyota Fortuner)", from: "DXB Airport", to: "Palm Jumeirah", pax: "1-5", price: "₹4,200", duration: "40 min" },
  { type: "Private Car", vehicle: "Luxury Sedan (Mercedes E-Class)", from: "Any Location", to: "Any Location", pax: "1-3", price: "₹6,500", duration: "Full Day" },
  { type: "Coach", vehicle: "Mini Bus (15 Seater)", from: "Hotel", to: "City Tour", pax: "10-15", price: "₹12,000", duration: "8 hrs" },
  { type: "Coach", vehicle: "Full Bus (45 Seater)", from: "Hotel", to: "City Tour", pax: "30-45", price: "₹25,000", duration: "8 hrs" },
  { type: "Hourly Rental", vehicle: "Sedan with Driver", from: "Any Location", to: "Flexible", pax: "1-3", price: "₹1,500/hr", duration: "Min 4 hrs" },
];

export default function TransfersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-800">🚗 Transfer Booking</h1>
        <p className="text-sm text-slate-500">Airport transfers, private cars, coaches, hourly rentals</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Transfer Type</label>
            <select className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Airport Transfer</option>
              <option>Private Car</option>
              <option>Coach / Bus</option>
              <option>Hourly Rental</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Pickup Location</label>
            <input type="text" defaultValue="DXB Airport" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Drop Location</label>
            <input type="text" defaultValue="Hotel" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Date & Time</label>
            <input type="datetime-local" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div className="flex items-end">
            <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {transfers.map((t, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-navy-100 rounded-xl flex items-center justify-center text-2xl">🚗</div>
                <div>
                  <h3 className="font-bold text-navy-800">{t.vehicle}</h3>
                  <p className="text-sm text-slate-500">{t.type}</p>
                  <p className="text-xs text-slate-400">Max {t.pax} passengers</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-xs text-slate-500">Route</p>
                  <p className="text-sm font-medium text-slate-700">{t.from} → {t.to}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500">Duration</p>
                  <p className="text-sm font-medium text-slate-700">{t.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">B2B Price</p>
                  <p className="text-xl font-bold text-navy-800">{t.price}</p>
                </div>
                <button className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors">
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
