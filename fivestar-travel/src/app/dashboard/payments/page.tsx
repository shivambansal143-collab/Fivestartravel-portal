"use client";

const paymentMethods = [
  { name: "Razorpay", status: "Active", type: "Payment Gateway", supported: "UPI, Cards, Net Banking, Wallets", fee: "2%", emoji: "💳" },
  { name: "Stripe", status: "Active", type: "International", supported: "International Cards, Apple Pay, Google Pay", fee: "2.9% + ₹2", emoji: "🌐" },
  { name: "NEFT/RTGS", status: "Active", type: "Bank Transfer", supported: "Direct Bank Transfer", fee: "Free", emoji: "🏦" },
  { name: "UPI", status: "Active", type: "Instant", supported: "Google Pay, PhonePe, Paytm", fee: "0%", emoji: "📱" },
];

const recentPayments = [
  { id: "PAY-7701", date: "28 Feb 2026", customer: "Rajesh Patel", method: "Razorpay", type: "UPI", amount: "₹29,400", status: "Success", statusColor: "bg-green-100 text-green-700" },
  { id: "PAY-7700", date: "27 Feb 2026", customer: "Priya Singh", method: "NEFT", type: "Bank Transfer", amount: "₹2,22,000", status: "Success", statusColor: "bg-green-100 text-green-700" },
  { id: "PAY-7699", date: "26 Feb 2026", customer: "Amit Kumar", method: "Razorpay", type: "Credit Card", amount: "₹7,800", status: "Pending", statusColor: "bg-yellow-100 text-yellow-700" },
  { id: "PAY-7698", date: "26 Feb 2026", customer: "Sunita Devi", method: "Stripe", type: "International Card", amount: "₹54,000", status: "Success", statusColor: "bg-green-100 text-green-700" },
  { id: "PAY-7697", date: "25 Feb 2026", customer: "Vikram Rao", method: "UPI", type: "Google Pay", amount: "₹3,520", status: "Success", statusColor: "bg-green-100 text-green-700" },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-800">💵 Payment Gateway</h1>
        <p className="text-sm text-slate-500">Razorpay, Stripe, NEFT, UPI, Cards — Multi-gateway support</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Today's Collections", value: "₹3,16,720", change: "+22%", color: "text-green-600" },
          { label: "Pending Payments", value: "₹7,800", change: "1 pending", color: "text-yellow-600" },
          { label: "This Month", value: "₹48,52,000", change: "+18% vs last", color: "text-navy-800" },
          { label: "Refunds Processed", value: "₹1,25,000", change: "5 refunds", color: "text-red-500" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-xs text-slate-500">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-slate-400">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="font-semibold text-navy-800 mb-4">Payment Methods</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paymentMethods.map((m) => (
            <div key={m.name} className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{m.emoji}</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{m.status}</span>
              </div>
              <h4 className="font-bold text-navy-800">{m.name}</h4>
              <p className="text-xs text-slate-500 mt-1">{m.type}</p>
              <p className="text-xs text-slate-400 mt-1">{m.supported}</p>
              <p className="text-xs font-medium text-orange-500 mt-2">Fee: {m.fee}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Payments */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-semibold text-navy-800">Recent Payments</h3>
          <button className="text-xs text-orange-500 font-medium hover:text-orange-600">Export Report</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                <th className="text-left p-4">Payment ID</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Customer</th>
                <th className="text-left p-4">Method</th>
                <th className="text-left p-4">Type</th>
                <th className="text-right p-4">Amount</th>
                <th className="text-center p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentPayments.map((p) => (
                <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="p-4 text-sm font-medium text-navy-800">{p.id}</td>
                  <td className="p-4 text-sm text-slate-600">{p.date}</td>
                  <td className="p-4 text-sm text-slate-600">{p.customer}</td>
                  <td className="p-4 text-sm text-slate-600">{p.method}</td>
                  <td className="p-4 text-sm text-slate-500">{p.type}</td>
                  <td className="p-4 text-sm font-bold text-navy-800 text-right">{p.amount}</td>
                  <td className="p-4 text-center">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${p.statusColor}`}>{p.status}</span>
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
