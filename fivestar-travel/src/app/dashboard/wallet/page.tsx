"use client";
import { useState } from "react";

const transactions = [
  { id: "TXN-8801", date: "28 Feb 2026", type: "Debit", desc: "Flight Booking FST-4521", amount: "₹24,500", balance: "₹2,20,500", status: "Completed" },
  { id: "TXN-8800", date: "28 Feb 2026", type: "Credit", desc: "Wallet Top-up (NEFT)", amount: "₹50,000", balance: "₹2,45,000", status: "Completed" },
  { id: "TXN-8799", date: "27 Feb 2026", type: "Debit", desc: "Hotel Booking FST-4520", amount: "₹1,85,000", balance: "₹1,95,000", status: "Completed" },
  { id: "TXN-8798", date: "27 Feb 2026", type: "Credit", desc: "Wallet Top-up (UPI)", amount: "₹2,00,000", balance: "₹3,80,000", status: "Completed" },
  { id: "TXN-8797", date: "26 Feb 2026", type: "Debit", desc: "Visa Processing FST-4519", amount: "₹6,500", balance: "₹1,80,000", status: "Completed" },
  { id: "TXN-8796", date: "26 Feb 2026", type: "Credit", desc: "Refund - Cancelled Booking", amount: "₹12,500", balance: "₹1,86,500", status: "Completed" },
];

export default function WalletPage() {
  const [showTopup, setShowTopup] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">💳 Wallet System</h1>
          <p className="text-sm text-slate-500">Agent wallet, auto debit, top-up, credit limit management</p>
        </div>
        <button
          onClick={() => setShowTopup(!showTopup)}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors"
        >
          + Top Up Wallet
        </button>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-navy-600 to-navy-800 rounded-xl p-6 text-white">
          <p className="text-sm text-slate-300">Available Balance</p>
          <p className="text-3xl font-bold mt-1">₹2,45,000</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-slate-300">Active</span>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <p className="text-sm text-slate-500">Credit Limit</p>
          <p className="text-3xl font-bold text-navy-800 mt-1">₹5,00,000</p>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>Used: ₹2,55,000</span>
              <span>51%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-orange-500 h-full rounded-full" style={{ width: "51%" }} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <p className="text-sm text-slate-500">This Month Spend</p>
          <p className="text-3xl font-bold text-navy-800 mt-1">₹12,45,000</p>
          <p className="text-xs text-green-600 mt-2">↑ 18% vs last month</p>
        </div>
      </div>

      {/* Top-up Form */}
      {showTopup && (
        <div className="bg-white rounded-xl border border-orange-200 p-6">
          <h3 className="font-semibold text-navy-800 mb-4">Top Up Wallet</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Amount</label>
              <input type="number" placeholder="₹50,000" className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Payment Method</label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>NEFT / RTGS</option>
                <option>UPI</option>
                <option>Net Banking</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-sm transition-colors">
                Add Funds →
              </button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {["₹10,000", "₹25,000", "₹50,000", "₹1,00,000"].map((amt) => (
              <button key={amt} className="py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-orange-50 hover:border-orange-200 transition-colors">
                {amt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Transactions */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-semibold text-navy-800">Transaction History</h3>
          <button className="text-xs text-orange-500 font-medium hover:text-orange-600">Download Statement</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                <th className="text-left p-4">Txn ID</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Description</th>
                <th className="text-center p-4">Type</th>
                <th className="text-right p-4">Amount</th>
                <th className="text-right p-4">Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="p-4 text-sm font-medium text-navy-800">{t.id}</td>
                  <td className="p-4 text-sm text-slate-600">{t.date}</td>
                  <td className="p-4 text-sm text-slate-600">{t.desc}</td>
                  <td className="p-4 text-center">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${t.type === "Credit" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{t.type}</span>
                  </td>
                  <td className={`p-4 text-sm text-right font-semibold ${t.type === "Credit" ? "text-green-600" : "text-red-500"}`}>
                    {t.type === "Credit" ? "+" : "-"}{t.amount}
                  </td>
                  <td className="p-4 text-sm text-right font-bold text-navy-800">{t.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
