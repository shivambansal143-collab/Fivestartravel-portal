"use client";
import Link from "next/link";

const subAgents = [
  { name: "Shivam Travel Agency", city: "Noida", commission: "5%", balance: "₹2,45,000", bookings: 156, revenue: "₹18.5L", status: "Active" },
  { name: "Globe Trotters", city: "Delhi", commission: "4%", balance: "₹45,000", bookings: 23, revenue: "₹2.8L", status: "Active" },
  { name: "Dream Vacations", city: "Chennai", commission: "5%", balance: "₹3,80,000", bookings: 201, revenue: "₹24.2L", status: "Active" },
  { name: "Wanderlust Holidays", city: "Bangalore", commission: "3%", balance: "₹1,20,000", bookings: 89, revenue: "₹10.5L", status: "Active" },
  { name: "Paradise Tours", city: "Kolkata", commission: "4%", balance: "₹78,000", bookings: 45, revenue: "₹5.4L", status: "Inactive" },
];

export default function DistributorPage() {
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
            <span className="ml-2 text-xs bg-blue-500 px-2 py-0.5 rounded-full font-bold">DISTRIBUTOR</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-300">Master Agent - North India</span>
          <Link href="/login" className="text-xs text-red-400 hover:text-red-300">Logout</Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">🌐 Distributor Dashboard</h1>
          <p className="text-sm text-slate-500">Manage sub-agents, set commissions, manage wallets</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Sub-Agents", value: "48", change: "+3 this month", emoji: "👥" },
            { label: "Total Revenue", value: "₹1.2 Cr", change: "This month", emoji: "💰" },
            { label: "Commission Earned", value: "₹5.4L", change: "+22% growth", emoji: "📈" },
            { label: "Distributor Wallet", value: "₹12,50,000", change: "Active", emoji: "💳" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">{s.label}</p>
                  <p className="text-2xl font-bold text-navy-800">{s.value}</p>
                  <p className="text-xs text-slate-400">{s.change}</p>
                </div>
                <span className="text-2xl">{s.emoji}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-Agent Management */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-navy-800">Sub-Agent Management</h3>
            <button className="text-xs bg-orange-500 text-white px-3 py-1.5 rounded-lg font-medium">+ Add Sub-Agent</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  <th className="text-left p-4">Agency</th>
                  <th className="text-left p-4">City</th>
                  <th className="text-center p-4">Commission</th>
                  <th className="text-right p-4">Wallet</th>
                  <th className="text-center p-4">Bookings</th>
                  <th className="text-right p-4">Revenue</th>
                  <th className="text-center p-4">Status</th>
                  <th className="text-center p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subAgents.map((a) => (
                  <tr key={a.name} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="p-4 text-sm font-medium text-navy-800">{a.name}</td>
                    <td className="p-4 text-sm text-slate-600">{a.city}</td>
                    <td className="p-4 text-sm text-center font-medium text-orange-500">{a.commission}</td>
                    <td className="p-4 text-sm text-right font-semibold text-navy-800">{a.balance}</td>
                    <td className="p-4 text-sm text-center">{a.bookings}</td>
                    <td className="p-4 text-sm text-right font-semibold text-green-600">{a.revenue}</td>
                    <td className="p-4 text-center">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${a.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{a.status}</span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">Edit</button>
                        <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium">Top-up</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Commission Settings */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-navy-800 mb-4">Commission Structure</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { service: "Flights", commission: "2-5%", earnings: "₹1.2L" },
              { service: "Hotels", commission: "3-8%", earnings: "₹2.1L" },
              { service: "Packages", commission: "5-10%", earnings: "₹1.5L" },
              { service: "Visa & Others", commission: "₹200-500", earnings: "₹60K" },
            ].map((c) => (
              <div key={c.service} className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm font-medium text-navy-800">{c.service}</p>
                <p className="text-lg font-bold text-orange-500 mt-1">{c.commission}</p>
                <p className="text-xs text-slate-500 mt-1">Earned: {c.earnings}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wallet Management */}
        <div className="bg-gradient-to-br from-navy-600 to-navy-800 rounded-xl p-6 text-white">
          <h3 className="font-semibold mb-4">Sub-Agent Wallet Management</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-slate-300 mb-1">Select Sub-Agent</label>
              <select className="w-full px-3 py-2.5 bg-navy-700 border border-navy-500 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                {subAgents.map((a) => (
                  <option key={a.name}>{a.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">Amount</label>
              <input type="number" placeholder="₹50,000" className="w-full px-3 py-2.5 bg-navy-700 border border-navy-500 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="flex items-end">
              <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold text-sm transition-colors">
                Top-up Sub-Agent Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
