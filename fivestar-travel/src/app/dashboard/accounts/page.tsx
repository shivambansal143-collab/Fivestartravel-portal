"use client";
import { useState } from "react";

const ledger = [
  { date: "28 Feb 2026", ref: "FST-4521", desc: "Flight Booking - Rajesh Patel", debit: "₹24,500", credit: "-", balance: "₹2,20,500" },
  { date: "28 Feb 2026", ref: "WAL-1102", desc: "Wallet Top-up", debit: "-", credit: "₹50,000", balance: "₹2,45,000" },
  { date: "27 Feb 2026", ref: "FST-4520", desc: "Hotel Booking - Priya Singh", debit: "₹1,85,000", credit: "-", balance: "₹1,95,000" },
  { date: "27 Feb 2026", ref: "WAL-1101", desc: "Wallet Top-up", debit: "-", credit: "₹2,00,000", balance: "₹3,80,000" },
  { date: "26 Feb 2026", ref: "FST-4519", desc: "Visa Processing - Amit Kumar", debit: "₹6,500", credit: "-", balance: "₹1,80,000" },
  { date: "26 Feb 2026", ref: "FST-4518", desc: "Package Booking - Sunita Devi", debit: "₹45,000", credit: "-", balance: "₹1,86,500" },
  { date: "25 Feb 2026", ref: "CRN-201", desc: "Credit Note - Cancelled Flight", debit: "-", credit: "₹12,500", balance: "₹2,31,500" },
];

const invoices = [
  { id: "INV-5001", date: "28 Feb 2026", customer: "Rajesh Patel", amount: "₹26,950", gst: "₹2,450", total: "₹29,400", status: "Paid" },
  { id: "INV-5000", date: "27 Feb 2026", customer: "Priya Singh", amount: "₹2,03,500", gst: "₹18,500", total: "₹2,22,000", status: "Paid" },
  { id: "INV-4999", date: "26 Feb 2026", customer: "Amit Kumar", amount: "₹7,150", gst: "₹650", total: "₹7,800", status: "Pending" },
  { id: "INV-4998", date: "26 Feb 2026", customer: "Sunita Devi", amount: "₹49,500", gst: "₹4,500", total: "₹54,000", status: "Paid" },
];

export default function AccountsPage() {
  const [tab, setTab] = useState<"ledger" | "invoices" | "gst">("ledger");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">💰 Accounts & Finance</h1>
          <p className="text-sm text-slate-500">Ledger, invoices, credit notes, GST reports, P&L statements</p>
        </div>
        <div className="flex gap-2">
          {(["ledger", "invoices", "gst"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === t ? "bg-orange-500 text-white" : "bg-white border border-slate-200 text-slate-600"}`}>
              {t === "ledger" ? "Ledger" : t === "invoices" ? "Invoices" : "GST Report"}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue", value: "₹48.5L", period: "This Month", color: "text-green-600" },
          { label: "Total Expenses", value: "₹42.1L", period: "This Month", color: "text-red-500" },
          { label: "Net Profit", value: "₹6.4L", period: "This Month", color: "text-navy-800" },
          { label: "GST Payable", value: "₹2.8L", period: "This Quarter", color: "text-orange-500" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-slate-400">{s.period}</p>
          </div>
        ))}
      </div>

      {tab === "ledger" && (
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-navy-800">Account Ledger</h3>
            <button className="text-xs text-orange-500 font-medium hover:text-orange-600">Download Excel</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Reference</th>
                  <th className="text-left p-4">Description</th>
                  <th className="text-right p-4">Debit</th>
                  <th className="text-right p-4">Credit</th>
                  <th className="text-right p-4">Balance</th>
                </tr>
              </thead>
              <tbody>
                {ledger.map((l, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="p-4 text-sm text-slate-600">{l.date}</td>
                    <td className="p-4 text-sm font-medium text-navy-800">{l.ref}</td>
                    <td className="p-4 text-sm text-slate-600">{l.desc}</td>
                    <td className="p-4 text-sm text-right text-red-500 font-medium">{l.debit}</td>
                    <td className="p-4 text-sm text-right text-green-600 font-medium">{l.credit}</td>
                    <td className="p-4 text-sm text-right font-bold text-navy-800">{l.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "invoices" && (
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-navy-800">Invoices</h3>
            <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold transition-colors">+ Create Invoice</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  <th className="text-left p-4">Invoice #</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Customer</th>
                  <th className="text-right p-4">Amount</th>
                  <th className="text-right p-4">GST</th>
                  <th className="text-right p-4">Total</th>
                  <th className="text-center p-4">Status</th>
                  <th className="text-center p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="p-4 text-sm font-medium text-navy-800">{inv.id}</td>
                    <td className="p-4 text-sm text-slate-600">{inv.date}</td>
                    <td className="p-4 text-sm text-slate-600">{inv.customer}</td>
                    <td className="p-4 text-sm text-right">{inv.amount}</td>
                    <td className="p-4 text-sm text-right text-slate-500">{inv.gst}</td>
                    <td className="p-4 text-sm text-right font-bold text-navy-800">{inv.total}</td>
                    <td className="p-4 text-center">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${inv.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{inv.status}</span>
                    </td>
                    <td className="p-4 text-center">
                      <button className="text-xs text-orange-500 font-medium hover:text-orange-600">PDF</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "gst" && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-navy-800 mb-4">GST Report - Q4 FY 2025-26</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-sm text-slate-500">Output GST (Sales)</p>
              <p className="text-2xl font-bold text-blue-600">₹8,45,000</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <p className="text-sm text-slate-500">Input GST (Purchases)</p>
              <p className="text-2xl font-bold text-green-600">₹5,65,000</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 text-center">
              <p className="text-sm text-slate-500">Net GST Payable</p>
              <p className="text-2xl font-bold text-orange-600">₹2,80,000</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { month: "January 2026", sales: "₹15.2L", gst: "₹92,000", status: "Filed" },
              { month: "February 2026", sales: "₹18.5L", gst: "₹1,12,000", status: "Pending" },
              { month: "March 2026", sales: "-", gst: "-", status: "Upcoming" },
            ].map((m) => (
              <div key={m.month} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium text-navy-800">{m.month}</span>
                <span className="text-sm text-slate-600">Sales: {m.sales}</span>
                <span className="text-sm text-slate-600">GST: {m.gst}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  m.status === "Filed" ? "bg-green-100 text-green-700" : m.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-slate-200 text-slate-500"
                }`}>{m.status}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
