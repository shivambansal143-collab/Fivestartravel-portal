"use client";
import Link from "next/link";

const stats = [
  { label: "Total Agents", value: "10,248", change: "+48 this week", emoji: "👥", color: "bg-blue-500/10" },
  { label: "Today's Revenue", value: "₹42.5L", change: "+22% vs yesterday", emoji: "💰", color: "bg-green-500/10" },
  { label: "Active Bookings", value: "1,247", change: "89 pending", emoji: "📋", color: "bg-orange-500/10" },
  { label: "Total Suppliers", value: "52", change: "+3 this month", emoji: "🏢", color: "bg-purple-500/10" },
  { label: "Wallet Pool", value: "₹8.2 Cr", change: "Active balance", emoji: "💳", color: "bg-teal-500/10" },
  { label: "Monthly Volume", value: "₹48.5 Cr", change: "+18% growth", emoji: "📈", color: "bg-pink-500/10" },
];

const recentAgents = [
  { name: "Shivam Travel Agency", city: "Noida", plan: "Premium", balance: "₹2,45,000", bookings: 156, status: "Active" },
  { name: "Royal Tours & Travels", city: "Mumbai", plan: "Enterprise", balance: "₹8,50,000", bookings: 342, status: "Active" },
  { name: "Globe Trotters", city: "Delhi", plan: "Basic", balance: "₹45,000", bookings: 23, status: "Active" },
  { name: "Wanderlust Holidays", city: "Bangalore", plan: "Premium", balance: "₹1,20,000", bookings: 89, status: "Suspended" },
  { name: "Dream Vacations", city: "Chennai", plan: "Premium", balance: "₹3,80,000", bookings: 201, status: "Active" },
];

const pendingApprovals = [
  { type: "Agent Registration", name: "New Horizon Travels, Pune", date: "28 Feb 2026" },
  { type: "Credit Limit Increase", name: "Royal Tours - ₹5L → ₹10L", date: "27 Feb 2026" },
  { type: "Supplier Onboarding", name: "Desert Rose Hotels, Dubai", date: "27 Feb 2026" },
  { type: "Refund Request", name: "FST-4510 - ₹24,500", date: "26 Feb 2026" },
];

export default function AdminPage() {
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
            <span className="ml-2 text-xs bg-red-500 px-2 py-0.5 rounded-full font-bold">ADMIN</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-300">Super Admin</span>
          <Link href="/login" className="text-xs text-red-400 hover:text-red-300">Logout</Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">👑 Admin Dashboard</h1>
          <p className="text-sm text-slate-500">Full system control — agents, suppliers, finances, markup</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">{s.label}</p>
                  <p className="text-2xl font-bold text-navy-800">{s.value}</p>
                  <p className="text-xs text-slate-400">{s.change}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${s.color}`}>{s.emoji}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Agents */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-navy-800">Travel Agents</h3>
              <button className="text-xs bg-orange-500 text-white px-3 py-1.5 rounded-lg font-medium">+ Add Agent</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                    <th className="text-left p-4">Agency</th>
                    <th className="text-left p-4">City</th>
                    <th className="text-left p-4">Plan</th>
                    <th className="text-right p-4">Balance</th>
                    <th className="text-center p-4">Bookings</th>
                    <th className="text-center p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAgents.map((a) => (
                    <tr key={a.name} className="border-b border-slate-50 hover:bg-slate-50">
                      <td className="p-4 text-sm font-medium text-navy-800">{a.name}</td>
                      <td className="p-4 text-sm text-slate-600">{a.city}</td>
                      <td className="p-4"><span className={`text-xs px-2 py-0.5 rounded-full font-medium ${a.plan === "Enterprise" ? "bg-purple-100 text-purple-700" : a.plan === "Premium" ? "bg-orange-100 text-orange-700" : "bg-slate-100 text-slate-600"}`}>{a.plan}</span></td>
                      <td className="p-4 text-sm font-semibold text-navy-800 text-right">{a.balance}</td>
                      <td className="p-4 text-sm text-center text-slate-600">{a.bookings}</td>
                      <td className="p-4 text-center">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${a.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{a.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white rounded-xl border border-slate-200">
            <div className="p-5 border-b border-slate-100">
              <h3 className="font-semibold text-navy-800">Pending Approvals</h3>
            </div>
            <div className="p-4 space-y-3">
              {pendingApprovals.map((a, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-lg">
                  <p className="text-xs text-orange-500 font-medium">{a.type}</p>
                  <p className="text-sm font-medium text-navy-800 mt-1">{a.name}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-slate-400">{a.date}</span>
                    <div className="flex gap-2">
                      <button className="text-xs bg-green-500 text-white px-2 py-1 rounded font-medium">Approve</button>
                      <button className="text-xs bg-red-500 text-white px-2 py-1 rounded font-medium">Reject</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Admin Actions */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="font-semibold text-navy-800 mb-4">Admin Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: "Manage Agents", emoji: "👥", color: "bg-blue-500" },
              { label: "Manage Suppliers", emoji: "🏢", color: "bg-purple-500" },
              { label: "Set Markup", emoji: "💲", color: "bg-green-500" },
              { label: "Financial Reports", emoji: "📊", color: "bg-orange-500" },
              { label: "System Settings", emoji: "⚙️", color: "bg-slate-500" },
              { label: "API Management", emoji: "🔌", color: "bg-teal-500" },
            ].map((a) => (
              <button key={a.label} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100">
                <div className={`w-10 h-10 ${a.color} rounded-lg flex items-center justify-center text-white text-lg`}>{a.emoji}</div>
                <span className="text-xs font-medium text-slate-600">{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
