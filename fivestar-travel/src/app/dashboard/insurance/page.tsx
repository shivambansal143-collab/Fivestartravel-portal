"use client";

const plans = [
  { provider: "ICICI Lombard", plan: "Travel Guard Gold", coverage: "₹50 Lakhs", medical: "₹25 Lakhs", baggage: "₹1 Lakh", price: "₹1,200", commission: "15%", region: "Worldwide" },
  { provider: "Bajaj Allianz", plan: "Travel Elite", coverage: "₹1 Crore", medical: "₹50 Lakhs", baggage: "₹2 Lakhs", price: "₹2,500", commission: "18%", region: "Worldwide" },
  { provider: "HDFC Ergo", plan: "Travel Protect", coverage: "₹25 Lakhs", medical: "₹15 Lakhs", baggage: "₹75,000", price: "₹800", commission: "12%", region: "Asia" },
  { provider: "Tata AIG", plan: "Travel Guard Plus", coverage: "₹75 Lakhs", medical: "₹35 Lakhs", baggage: "₹1.5 Lakhs", price: "₹1,800", commission: "16%", region: "Worldwide" },
  { provider: "Star Health", plan: "Travel Safe", coverage: "₹30 Lakhs", medical: "₹20 Lakhs", baggage: "₹50,000", price: "₹650", commission: "10%", region: "Asia" },
];

const recentPolicies = [
  { id: "INS-3301", customer: "Rajesh Patel", plan: "Travel Guard Gold", destination: "Dubai", premium: "₹1,200", status: "Issued", date: "27 Feb 2026" },
  { id: "INS-3300", customer: "Priya Singh", plan: "Travel Elite", destination: "Europe", premium: "₹2,500", status: "Issued", date: "26 Feb 2026" },
  { id: "INS-3299", customer: "Amit Kumar", plan: "Travel Protect", destination: "Thailand", premium: "₹800", status: "Pending", date: "25 Feb 2026" },
];

export default function InsurancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-800">🛡️ Travel Insurance</h1>
        <p className="text-sm text-slate-500">Instant policy issue with auto commission calculation</p>
      </div>

      {/* Quick Quote */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="font-semibold text-navy-800 mb-4">Get Instant Quote</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Destination</label>
            <select className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Worldwide</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>USA/Canada</option>
              <option>Schengen</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Travel Dates</label>
            <input type="date" defaultValue="2026-03-15" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Duration (Days)</label>
            <input type="number" defaultValue={7} className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Travellers</label>
            <select className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>Family (4)</option>
              <option>Group (10+)</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
              Get Quotes
            </button>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {plans.map((p) => (
          <div key={p.plan} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-navy-800">{p.plan}</h3>
                <p className="text-sm text-slate-500">{p.provider}</p>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{p.commission} Commission</span>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-slate-50 rounded-lg p-2 text-center">
                <p className="text-xs text-slate-500">Coverage</p>
                <p className="text-sm font-bold text-navy-800">{p.coverage}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-2 text-center">
                <p className="text-xs text-slate-500">Medical</p>
                <p className="text-sm font-bold text-navy-800">{p.medical}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-2 text-center">
                <p className="text-xs text-slate-500">Baggage</p>
                <p className="text-sm font-bold text-navy-800">{p.baggage}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">Premium from</p>
                <p className="text-xl font-bold text-orange-500">{p.price}</p>
                <p className="text-xs text-slate-400">{p.region}</p>
              </div>
              <button className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors">
                Issue Policy
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Policies */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-5 border-b border-slate-100">
          <h3 className="font-semibold text-navy-800">Recent Policies</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                <th className="text-left p-4">Policy ID</th>
                <th className="text-left p-4">Customer</th>
                <th className="text-left p-4">Plan</th>
                <th className="text-left p-4">Destination</th>
                <th className="text-right p-4">Premium</th>
                <th className="text-center p-4">Status</th>
                <th className="text-center p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentPolicies.map((p) => (
                <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="p-4 text-sm font-medium text-navy-800">{p.id}</td>
                  <td className="p-4 text-sm text-slate-600">{p.customer}</td>
                  <td className="p-4 text-sm text-slate-600">{p.plan}</td>
                  <td className="p-4 text-sm text-slate-600">{p.destination}</td>
                  <td className="p-4 text-sm font-bold text-navy-800 text-right">{p.premium}</td>
                  <td className="p-4 text-center">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${p.status === "Issued" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{p.status}</span>
                  </td>
                  <td className="p-4 text-center">
                    <button className="text-xs text-orange-500 font-medium hover:text-orange-600">Download PDF</button>
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
