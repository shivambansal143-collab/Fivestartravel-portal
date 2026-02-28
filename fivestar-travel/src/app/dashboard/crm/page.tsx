"use client";
import { useState } from "react";

const leads = [
  { id: "CRM-1001", name: "Vikram Mehta", phone: "+91 98765 43210", email: "vikram@email.com", destination: "Dubai", budget: "₹1,50,000", source: "Website", status: "Hot", followUp: "28 Feb 2026", agent: "Shivam" },
  { id: "CRM-1002", name: "Neha Gupta", phone: "+91 87654 32109", email: "neha@email.com", destination: "Thailand", budget: "₹80,000", source: "WhatsApp", status: "Warm", followUp: "01 Mar 2026", agent: "Shivam" },
  { id: "CRM-1003", name: "Rahul Sharma", phone: "+91 76543 21098", email: "rahul@email.com", destination: "Europe", budget: "₹3,00,000", source: "Referral", status: "Hot", followUp: "28 Feb 2026", agent: "Priya" },
  { id: "CRM-1004", name: "Sunita Devi", phone: "+91 65432 10987", email: "sunita@email.com", destination: "Singapore", budget: "₹1,20,000", source: "Phone", status: "Cold", followUp: "05 Mar 2026", agent: "Shivam" },
  { id: "CRM-1005", name: "Amit Patel", phone: "+91 54321 09876", email: "amit@email.com", destination: "Bali", budget: "₹90,000", source: "Website", status: "Warm", followUp: "02 Mar 2026", agent: "Rahul" },
  { id: "CRM-1006", name: "Priya Singh", phone: "+91 43210 98765", email: "priya@email.com", destination: "Maldives", budget: "₹2,50,000", source: "Instagram", status: "Hot", followUp: "28 Feb 2026", agent: "Shivam" },
];

const stats = [
  { label: "Total Leads", value: "248", change: "+12 today", emoji: "📋", color: "bg-blue-500/10" },
  { label: "Hot Leads", value: "45", change: "+5 today", emoji: "🔥", color: "bg-red-500/10" },
  { label: "Converted", value: "89", change: "36% rate", emoji: "✅", color: "bg-green-500/10" },
  { label: "Follow-ups Today", value: "12", change: "3 overdue", emoji: "📞", color: "bg-orange-500/10" },
];

export default function CRMPage() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">📋 CRM System</h1>
          <p className="text-sm text-slate-500">Lead management, follow-ups, WhatsApp integration, performance reports</p>
        </div>
        <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors">
          + Add Lead
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">{s.label}</p>
                <p className="text-2xl font-bold text-navy-800">{s.value}</p>
                <p className="text-xs text-slate-400">{s.change}</p>
              </div>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${s.color}`}>{s.emoji}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {[
          { id: "all", label: "All Leads" },
          { id: "hot", label: "🔥 Hot" },
          { id: "warm", label: "🟡 Warm" },
          { id: "cold", label: "🔵 Cold" },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f.id ? "bg-orange-500 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                <th className="text-left p-4">Lead ID</th>
                <th className="text-left p-4">Customer</th>
                <th className="text-left p-4">Destination</th>
                <th className="text-left p-4">Budget</th>
                <th className="text-left p-4">Source</th>
                <th className="text-center p-4">Status</th>
                <th className="text-left p-4">Follow-up</th>
                <th className="text-center p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads
                .filter((l) => filter === "all" || l.status.toLowerCase() === filter)
                .map((l) => (
                  <tr key={l.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-sm font-medium text-navy-800">{l.id}</td>
                    <td className="p-4">
                      <p className="text-sm font-medium text-navy-800">{l.name}</p>
                      <p className="text-xs text-slate-400">{l.phone}</p>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{l.destination}</td>
                    <td className="p-4 text-sm font-semibold text-navy-800">{l.budget}</td>
                    <td className="p-4 text-sm text-slate-500">{l.source}</td>
                    <td className="p-4 text-center">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        l.status === "Hot" ? "bg-red-100 text-red-700" : l.status === "Warm" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"
                      }`}>{l.status}</span>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{l.followUp}</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium hover:bg-green-200">WhatsApp</button>
                        <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium hover:bg-blue-200">Email</button>
                        <button className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded font-medium hover:bg-orange-200">Call</button>
                      </div>
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
