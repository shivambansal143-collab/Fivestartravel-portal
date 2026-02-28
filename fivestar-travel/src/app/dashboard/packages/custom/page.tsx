"use client";
import { useState } from "react";

export default function CustomPackagePage() {
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-800">📦 Custom Package Builder</h1>
        <p className="text-sm text-slate-500">Build custom packages: Flight + Hotel + Transfer + Sightseeing with auto costing</p>
      </div>

      {/* Steps */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex items-center justify-between">
          {[
            { n: 1, label: "Destination" },
            { n: 2, label: "Flight" },
            { n: 3, label: "Hotel" },
            { n: 4, label: "Transfers" },
            { n: 5, label: "Activities" },
            { n: 6, label: "Review" },
          ].map((s) => (
            <button
              key={s.n}
              onClick={() => setStep(s.n)}
              className="flex items-center gap-2"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= s.n ? "bg-orange-500 text-white" : "bg-slate-200 text-slate-500"
              }`}>{s.n}</div>
              <span className={`text-xs font-medium hidden sm:inline ${step >= s.n ? "text-orange-600" : "text-slate-400"}`}>{s.label}</span>
              {s.n < 6 && <div className={`w-6 h-0.5 hidden sm:block ${step > s.n ? "bg-orange-500" : "bg-slate-200"}`} />}
            </button>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-navy-800 mb-4">Select Destination & Dates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Destination</label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Dubai, UAE</option>
                <option>Bangkok, Thailand</option>
                <option>Singapore</option>
                <option>Bali, Indonesia</option>
                <option>Vietnam</option>
                <option>Maldives</option>
                <option>Europe Multi-City</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number of Nights</label>
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>3 Nights / 4 Days</option>
                <option>4 Nights / 5 Days</option>
                <option>5 Nights / 6 Days</option>
                <option>6 Nights / 7 Days</option>
                <option>7 Nights / 8 Days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Travel Date</label>
              <input type="date" defaultValue="2026-03-15" className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Travellers</label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-xs text-slate-500">Adults</label>
                  <input type="number" defaultValue={2} min={1} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Children</label>
                  <input type="number" defaultValue={0} min={0} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="text-xs text-slate-500">Infants</label>
                  <input type="number" defaultValue={0} min={0} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => setStep(2)} className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
            Next: Select Flight →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-navy-800 mb-4">Select Flight</h3>
          <div className="space-y-3">
            {[
              { airline: "Air India AI-302", time: "06:30 - 10:45", price: "₹18,500", type: "GDS" },
              { airline: "IndiGo 6E-1423", time: "08:15 - 12:30", price: "₹14,200", type: "LCC" },
              { airline: "Emirates EK-511", time: "10:00 - 12:15", price: "₹24,800", type: "GDS" },
            ].map((f) => (
              <label key={f.airline} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:border-orange-300 hover:bg-orange-50 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="radio" name="flight" className="accent-orange-500" />
                  <div>
                    <p className="font-medium text-navy-800">{f.airline}</p>
                    <p className="text-sm text-slate-500">{f.time} · DEL → DXB</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${f.type === "GDS" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>{f.type}</span>
                  <p className="text-lg font-bold text-navy-800 mt-1">{f.price}</p>
                </div>
              </label>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep(1)} className="px-6 py-3 border border-slate-300 rounded-lg font-semibold text-sm text-slate-600 hover:bg-slate-50">← Back</button>
            <button onClick={() => setStep(3)} className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">Next: Select Hotel →</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-navy-800 mb-4">Select Hotel</h3>
          <div className="space-y-3">
            {[
              { name: "Rove Downtown", stars: 3, price: "₹4,200/night", total: "₹16,800" },
              { name: "Hilton Dubai Creek", stars: 4, price: "₹6,800/night", total: "₹27,200" },
              { name: "JW Marriott Marquis", stars: 5, price: "₹12,500/night", total: "₹50,000" },
            ].map((h) => (
              <label key={h.name} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:border-orange-300 hover:bg-orange-50 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="radio" name="hotel" className="accent-orange-500" />
                  <div>
                    <p className="font-medium text-navy-800">{h.name}</p>
                    <p className="text-sm text-slate-500">{"★".repeat(h.stars)} · {h.price}</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-navy-800">{h.total}</p>
              </label>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep(2)} className="px-6 py-3 border border-slate-300 rounded-lg font-semibold text-sm text-slate-600 hover:bg-slate-50">← Back</button>
            <button onClick={() => setStep(4)} className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">Next: Transfers →</button>
          </div>
        </div>
      )}

      {step >= 4 && step <= 5 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-navy-800 mb-4">{step === 4 ? "Add Transfers" : "Add Activities"}</h3>
          <div className="space-y-3">
            {(step === 4
              ? [
                  { name: "Airport Pickup (Sedan)", price: "₹2,800" },
                  { name: "Airport Drop (Sedan)", price: "₹2,800" },
                  { name: "Full Day City Tour", price: "₹5,500" },
                ]
              : [
                  { name: "Desert Safari with BBQ", price: "₹4,200" },
                  { name: "Burj Khalifa 124th Floor", price: "₹2,800" },
                  { name: "Dubai City Tour", price: "₹3,500" },
                  { name: "Abu Dhabi Day Trip", price: "₹5,500" },
                ]
            ).map((item) => (
              <label key={item.name} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:border-orange-300 hover:bg-orange-50 transition-colors">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="accent-orange-500" />
                  <span className="font-medium text-navy-800">{item.name}</span>
                </div>
                <span className="font-bold text-navy-800">{item.price}</span>
              </label>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep(step - 1)} className="px-6 py-3 border border-slate-300 rounded-lg font-semibold text-sm text-slate-600 hover:bg-slate-50">← Back</button>
            <button onClick={() => setStep(step + 1)} className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
              {step === 4 ? "Next: Activities →" : "Review Package →"}
            </button>
          </div>
        </div>
      )}

      {step === 6 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-navy-800 mb-4">Package Summary</h3>
          <div className="space-y-3">
            {[
              { item: "Flight: Air India AI-302 (DEL → DXB)", price: "₹18,500" },
              { item: "Hotel: Hilton Dubai Creek (4N)", price: "₹27,200" },
              { item: "Airport Pickup + Drop", price: "₹5,600" },
              { item: "Desert Safari + Burj Khalifa", price: "₹7,000" },
            ].map((l) => (
              <div key={l.item} className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-sm text-slate-600">{l.item}</span>
                <span className="text-sm font-semibold text-navy-800">{l.price}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-3 border-t-2 border-navy-200">
              <span className="text-lg font-bold text-navy-800">Total Package Cost</span>
              <span className="text-2xl font-bold text-orange-500">₹58,300</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-slate-500">Your Markup (10%)</span>
              <span className="text-sm font-semibold text-green-600">+ ₹5,830</span>
            </div>
            <div className="flex items-center justify-between py-2 bg-green-50 rounded-lg px-3">
              <span className="text-sm font-bold text-green-700">Selling Price</span>
              <span className="text-lg font-bold text-green-700">₹64,130</span>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep(5)} className="px-6 py-3 border border-slate-300 rounded-lg font-semibold text-sm text-slate-600 hover:bg-slate-50">← Back</button>
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">Confirm & Book Package</button>
            <button className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white rounded-lg font-semibold text-sm transition-colors">Download PDF Itinerary</button>
          </div>
        </div>
      )}

      {/* Cost Summary Sidebar */}
      <div className="bg-gradient-to-br from-navy-600 to-navy-800 rounded-xl p-5 text-white">
        <h3 className="font-semibold mb-3">Running Cost Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span className="text-slate-300">Flight</span><span>₹18,500</span></div>
          <div className="flex justify-between"><span className="text-slate-300">Hotel (4N)</span><span>₹27,200</span></div>
          <div className="flex justify-between"><span className="text-slate-300">Transfers</span><span>₹5,600</span></div>
          <div className="flex justify-between"><span className="text-slate-300">Activities</span><span>₹7,000</span></div>
          <div className="border-t border-navy-500 pt-2 flex justify-between font-bold text-lg">
            <span>Total</span><span className="text-orange-400">₹58,300</span>
          </div>
        </div>
      </div>
    </div>
  );
}
