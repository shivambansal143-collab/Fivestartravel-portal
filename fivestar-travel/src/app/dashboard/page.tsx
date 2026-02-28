"use client";
import StatsCard from "@/components/dashboard/StatsCard";
import Link from "next/link";

const stats = [
  { title: "Today's Bookings", value: "47", change: "+12% vs yesterday", changeType: "up" as const, emoji: "📋", color: "bg-blue-500/10" },
  { title: "Revenue (Today)", value: "₹8.2L", change: "+18% vs yesterday", changeType: "up" as const, emoji: "💰", color: "bg-green-500/10" },
  { title: "Wallet Balance", value: "₹2,45,000", change: "Credit limit: ₹5L", changeType: "neutral" as const, emoji: "💳", color: "bg-purple-500/10" },
  { title: "Pending Bookings", value: "12", change: "-3 from yesterday", changeType: "down" as const, emoji: "⏳", color: "bg-orange-500/10" },
];

const recentBookings = [
  { id: "FST-4521", type: "Flight", customer: "Rajesh Patel", route: "DEL → DXB", amount: "₹24,500", status: "Confirmed", statusColor: "bg-green-100 text-green-700" },
  { id: "FST-4520", type: "Hotel", customer: "Priya Singh", route: "Burj Al Arab, Dubai", amount: "₹1,85,000", status: "Confirmed", statusColor: "bg-green-100 text-green-700" },
  { id: "FST-4519", type: "Visa", customer: "Amit Kumar", route: "Dubai Tourist Visa", amount: "₹6,500", status: "Processing", statusColor: "bg-yellow-100 text-yellow-700" },
  { id: "FST-4518", type: "Package", customer: "Sunita Devi", route: "Thailand 5N/6D", amount: "₹45,000", status: "Confirmed", statusColor: "bg-green-100 text-green-700" },
  { id: "FST-4517", type: "Insurance", customer: "Vikram Rao", route: "Travel Insurance - Family", amount: "₹3,200", status: "Issued", statusColor: "bg-blue-100 text-blue-700" },
  { id: "FST-4516", type: "Transfer", customer: "Neha Gupta", route: "DXB Airport → Hotel", amount: "₹2,800", status: "Pending", statusColor: "bg-orange-100 text-orange-700" },
];

const quickActions = [
  { href: "/dashboard/flights", label: "Book Flight", emoji: "✈️", color: "bg-blue-500" },
  { href: "/dashboard/hotels", label: "Book Hotel", emoji: "🏨", color: "bg-purple-500" },
  { href: "/dashboard/visa", label: "Apply Visa", emoji: "🛂", color: "bg-green-500" },
  { href: "/dashboard/packages/custom", label: "Build Package", emoji: "📦", color: "bg-orange-500" },
  { href: "/dashboard/insurance", label: "Insurance", emoji: "🛡️", color: "bg-teal-500" },
  { href: "/dashboard/wallet", label: "Wallet", emoji: "💳", color: "bg-pink-500" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">Dashboard</h1>
          <p className="text-sm text-slate-500">Welcome back, Shivam! Here&apos;s your business overview.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Today</p>
          <p className="text-sm font-semibold text-navy-800">28 Feb 2026</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatsCard key={s.title} {...s} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickActions.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100 hover:border-orange-200"
            >
              <div className={`w-12 h-12 ${a.color} rounded-xl flex items-center justify-center text-xl text-white`}>
                {a.emoji}
              </div>
              <span className="text-xs font-medium text-slate-600">{a.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-semibold text-navy-800">Recent Bookings</h3>
          <span className="text-xs text-orange-500 font-medium cursor-pointer hover:text-orange-600">View All →</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                <th className="text-left p-4">Booking ID</th>
                <th className="text-left p-4">Type</th>
                <th className="text-left p-4">Customer</th>
                <th className="text-left p-4">Details</th>
                <th className="text-right p-4">Amount</th>
                <th className="text-center p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((b) => (
                <tr key={b.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-sm font-medium text-navy-800">{b.id}</td>
                  <td className="p-4 text-sm text-slate-600">{b.type}</td>
                  <td className="p-4 text-sm text-slate-600">{b.customer}</td>
                  <td className="p-4 text-sm text-slate-500">{b.route}</td>
                  <td className="p-4 text-sm font-semibold text-navy-800 text-right">{b.amount}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${b.statusColor}`}>
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Revenue Chart Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="font-semibold text-navy-800 mb-4">Revenue Trend (Last 7 Days)</h3>
          <div className="space-y-3">
            {[
              { day: "Mon", value: 65, amount: "₹6.5L" },
              { day: "Tue", value: 78, amount: "₹7.8L" },
              { day: "Wed", value: 55, amount: "₹5.5L" },
              { day: "Thu", value: 90, amount: "₹9.0L" },
              { day: "Fri", value: 82, amount: "₹8.2L" },
              { day: "Sat", value: 70, amount: "₹7.0L" },
              { day: "Sun", value: 45, amount: "₹4.5L" },
            ].map((d) => (
              <div key={d.day} className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-8">{d.day}</span>
                <div className="flex-1 bg-slate-100 rounded-full h-6 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-orange-500 h-full rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${d.value}%` }}
                  >
                    <span className="text-[10px] text-white font-semibold">{d.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="font-semibold text-navy-800 mb-4">Booking Distribution</h3>
          <div className="space-y-4">
            {[
              { type: "Flights", count: 156, pct: 40, color: "bg-blue-500" },
              { type: "Hotels", count: 89, pct: 23, color: "bg-purple-500" },
              { type: "Packages", count: 67, pct: 17, color: "bg-orange-500" },
              { type: "Visa", count: 45, pct: 12, color: "bg-green-500" },
              { type: "Others", count: 31, pct: 8, color: "bg-slate-400" },
            ].map((d) => (
              <div key={d.type}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-slate-600">{d.type}</span>
                  <span className="text-slate-500">{d.count} bookings ({d.pct}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div className={`${d.color} h-full rounded-full`} style={{ width: `${d.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
