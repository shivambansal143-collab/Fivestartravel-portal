"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("agent");

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-600 via-navy-700 to-navy-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-navy-700 to-navy-800 p-6 text-white">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <circle cx="20" cy="20" r="18" fill="#f97316" />
                <polygon points="20,8 22,15 30,15 24,20 26,27 20,23 14,27 16,20 10,15 18,15" fill="white" />
              </svg>
            </div>
            <span className="font-bold">FiveStarTravel<span className="text-orange-400">.in</span></span>
          </Link>
          <h2 className="text-xl font-bold">Register Your Agency</h2>
          <p className="text-sm text-slate-300 mt-1">Join 10,000+ travel agents on India&apos;s #1 B2B platform</p>

          {/* Steps */}
          <div className="flex items-center gap-2 mt-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= s ? "bg-orange-500" : "bg-navy-600"
                }`}>{s}</div>
                <span className="text-xs text-slate-300 hidden sm:inline">
                  {s === 1 ? "Role" : s === 2 ? "Details" : "Verify"}
                </span>
                {s < 3 && <div className={`w-8 h-0.5 ${step > s ? "bg-orange-500" : "bg-navy-600"}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="p-8">
          {step === 1 && (
            <div>
              <h3 className="text-lg font-semibold text-navy-800 mb-4">Select Registration Type</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "agent", label: "Travel Agent", emoji: "✈️", desc: "Book flights, hotels, packages for clients" },
                  { id: "supplier", label: "Supplier", emoji: "🏨", desc: "Upload hotel rates, tour inventory" },
                  { id: "distributor", label: "Distributor", emoji: "🌐", desc: "Manage sub-agents, set commissions" },
                  { id: "corporate", label: "Corporate", emoji: "🏢", desc: "Corporate travel management" },
                ].map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRole(r.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      role === r.id ? "border-orange-500 bg-orange-50" : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-2xl">{r.emoji}</span>
                    <p className="font-semibold text-navy-800 mt-2">{r.label}</p>
                    <p className="text-xs text-slate-500 mt-1">{r.desc}</p>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(2)} className="w-full mt-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-colors">
                Continue →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-semibold text-navy-800 mb-4">Agency Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Agency Name</label>
                  <input type="text" placeholder="Your Travel Agency" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Contact Person</label>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" placeholder="email@agency.com" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">PAN Number</label>
                  <input type="text" placeholder="ABCDE1234F" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">GST Number</label>
                  <input type="text" placeholder="22AAAAA0000A1Z5" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                  <input type="text" placeholder="City" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)} className="flex-1 py-3 border border-slate-300 rounded-xl font-semibold text-slate-600 hover:bg-slate-50">
                  ← Back
                </button>
                <button onClick={() => setStep(3)} className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-colors">
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">✅</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Registration Submitted!</h3>
              <p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto">
                Your application is under review. You&apos;ll receive an email confirmation within 24 hours. Our team will verify your documents and activate your account.
              </p>
              <div className="flex gap-3 justify-center">
                <Link href="/login" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-colors">
                  Go to Login →
                </Link>
                <Link href="/" className="px-6 py-3 border border-slate-300 rounded-xl font-semibold text-slate-600 hover:bg-slate-50">
                  Back to Home
                </Link>
              </div>
            </div>
          )}

          {step < 3 && (
            <p className="text-center text-sm text-slate-500 mt-6">
              Already have an account? <Link href="/login" className="text-orange-500 font-semibold">Login</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
