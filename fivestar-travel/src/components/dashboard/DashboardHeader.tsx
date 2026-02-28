"use client";
import { useState } from "react";
import Link from "next/link";

export default function DashboardHeader() {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-navy-800">B2B Portal</h2>
          <div className="hidden md:flex bg-slate-100 rounded-lg px-3 py-2 w-80">
            <span className="text-slate-400 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search bookings, PNR, agents..."
              className="bg-transparent text-sm w-full outline-none text-slate-700"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-green-700">Wallet: ₹2,45,000</span>
          </div>

          <div className="relative">
            <button
              onClick={() => { setShowNotif(!showNotif); setShowProfile(false); }}
              className="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
            >
              <span className="text-lg">🔔</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            {showNotif && (
              <div className="absolute right-0 top-11 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                <p className="px-4 py-2 text-sm font-semibold text-navy-800 border-b border-slate-100">Notifications</p>
                {[
                  { msg: "Booking #FST-4521 confirmed", time: "2 min ago", type: "✅" },
                  { msg: "Wallet credited ₹50,000", time: "1 hr ago", type: "💰" },
                  { msg: "Visa application approved", time: "3 hr ago", type: "🛂" },
                  { msg: "New supplier rate uploaded", time: "5 hr ago", type: "📋" },
                ].map((n, i) => (
                  <div key={i} className="px-4 py-2 hover:bg-slate-50 cursor-pointer flex items-start gap-2">
                    <span>{n.type}</span>
                    <div>
                      <p className="text-sm text-slate-700">{n.msg}</p>
                      <p className="text-xs text-slate-400">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => { setShowProfile(!showProfile); setShowNotif(false); }}
              className="flex items-center gap-2 hover:bg-slate-100 rounded-lg px-2 py-1.5 transition-colors"
            >
              <div className="w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                SK
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-slate-700">Shivam Kumar</p>
                <p className="text-[10px] text-slate-400">Travel Agent</p>
              </div>
            </button>
            {showProfile && (
              <div className="absolute right-0 top-11 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="text-sm font-semibold text-navy-800">Shivam Kumar</p>
                  <p className="text-xs text-slate-400">shivam@agency.com</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-orange-100 text-orange-600 text-[10px] font-semibold rounded-full">
                    PREMIUM AGENT
                  </span>
                </div>
                {[
                  { href: "/dashboard/settings", label: "Settings", emoji: "⚙️" },
                  { href: "/dashboard/wallet", label: "Wallet", emoji: "💳" },
                  { href: "/dashboard/accounts", label: "Accounts", emoji: "📊" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    <span>{item.emoji}</span> {item.label}
                  </Link>
                ))}
                <div className="border-t border-slate-100 mt-1">
                  <Link href="/login" className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50">
                    🚪 Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
