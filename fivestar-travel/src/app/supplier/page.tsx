"use client";
import Link from "next/link";

const inventory = [
  { name: "Hilton Dubai Creek", type: "Hotel", rooms: 45, booked: 32, rate: "₹6,800/night", status: "Active" },
  { name: "JW Marriott Marquis", type: "Hotel", rooms: 20, booked: 18, rate: "₹12,500/night", status: "Active" },
  { name: "Desert Safari Premium", type: "Tour", rooms: 100, booked: 67, rate: "₹4,200/pax", status: "Active" },
  { name: "Dubai City Tour", type: "Tour", rooms: 80, booked: 45, rate: "₹3,500/pax", status: "Active" },
  { name: "Airport Transfer Sedan", type: "Transfer", rooms: 50, booked: 38, rate: "₹2,800/trip", status: "Active" },
];

const bookings = [
  { id: "SUP-301", agent: "Shivam Travel", product: "Hilton Dubai Creek", checkIn: "15 Mar 2026", nights: 4, amount: "₹27,200", status: "Confirmed" },
  { id: "SUP-300", agent: "Royal Tours", product: "Desert Safari Premium", checkIn: "16 Mar 2026", nights: 1, amount: "₹8,400", status: "Confirmed" },
  { id: "SUP-299", agent: "Globe Trotters", product: "JW Marriott Marquis", checkIn: "18 Mar 2026", nights: 3, amount: "₹37,500", status: "Pending" },
];

export default function SupplierPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-8 h-8">
              <circle cx="20" cy="20" r="18" fill="#f97316" />
              <polygon points="20,8 22,15 30,15 24,20 26,27 20,23 14,27 16,20 10,15 18,15" fill="white" />
            </svg>
          </div>
          <div>
            <span className="font-bold">FiveStarTravel</span>
            <span className="text-orange-400 font-bold">.in</span>
            <span className="ml-2 text-xs bg-green-500 px-2 py-0.5 rounded-full font-bold">SUPPLIER</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-300">Desert Rose Hotels LLC</span>
          <Link href="/login" className="text-xs text-red-400 hover:text-red-300">Logout</Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">🏨 Supplier Dashboard</h1>
          <p className="text-sm text-slate-500">Upload rates, manage inventory, confirm bookings, update availability</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Active Products", value: "28", emoji: "📦" },
            { label: "This Month Bookings", value: "156", emoji: "📋" },
            { label: "Revenue", value: "₹18.5L", emoji: "💰" },
            { label: "Occupancy Rate", value: "78%", emoji: "📊" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">{s.label}</p>
                  <p className="text-2xl font-bold text-navy-800">{s.value}</p>
                </div>
                <span className="text-2xl">{s.emoji}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Rates */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-navy-800 mb-4">Upload New Rates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Product Type</label>
              <select className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Hotel Room</option>
                <option>Tour / Activity</option>
                <option>Transfer</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Valid From</label>
              <input type="date" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Valid To</label>
              <input type="date" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="flex items-end">
              <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
                Upload Rates
              </button>
            </div>
          </div>
        </div>

        {/* Inventory */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-navy-800">Inventory Management</h3>
            <button className="text-xs bg-orange-500 text-white px-3 py-1.5 rounded-lg font-medium">+ Add Product</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  <th className="text-left p-4">Product</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-center p-4">Total</th>
                  <th className="text-center p-4">Booked</th>
                  <th className="text-center p-4">Available</th>
                  <th className="text-right p-4">Rate</th>
                  <th className="text-center p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.name} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="p-4 text-sm font-medium text-navy-800">{item.name}</td>
                    <td className="p-4 text-sm text-slate-600">{item.type}</td>
                    <td className="p-4 text-sm text-center">{item.rooms}</td>
                    <td className="p-4 text-sm text-center text-orange-500 font-medium">{item.booked}</td>
                    <td className="p-4 text-sm text-center text-green-600 font-medium">{item.rooms - item.booked}</td>
                    <td className="p-4 text-sm text-right font-semibold text-navy-800">{item.rate}</td>
                    <td className="p-4 text-center">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bookings */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100">
            <h3 className="font-semibold text-navy-800">Recent Bookings to Confirm</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  <th className="text-left p-4">Booking ID</th>
                  <th className="text-left p-4">Agent</th>
                  <th className="text-left p-4">Product</th>
                  <th className="text-left p-4">Check-in</th>
                  <th className="text-right p-4">Amount</th>
                  <th className="text-center p-4">Status</th>
                  <th className="text-center p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="p-4 text-sm font-medium text-navy-800">{b.id}</td>
                    <td className="p-4 text-sm text-slate-600">{b.agent}</td>
                    <td className="p-4 text-sm text-slate-600">{b.product}</td>
                    <td className="p-4 text-sm text-slate-600">{b.checkIn}</td>
                    <td className="p-4 text-sm font-bold text-navy-800 text-right">{b.amount}</td>
                    <td className="p-4 text-center">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${b.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{b.status}</span>
                    </td>
                    <td className="p-4 text-center">
                      {b.status === "Pending" && (
                        <button className="text-xs bg-green-500 text-white px-3 py-1 rounded font-medium">Confirm</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
