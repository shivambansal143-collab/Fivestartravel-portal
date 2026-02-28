"use client";
import { useState } from "react";
import Link from "next/link";

const roles = [
  { id: "agent", label: "Travel Agent", emoji: "✈️", desc: "Search, book & manage travel" },
  { id: "supplier", label: "Supplier", emoji: "🏨", desc: "Upload rates & manage inventory" },
  { id: "admin", label: "Admin", emoji: "👑", desc: "Full system control" },
  { id: "distributor", label: "Distributor", emoji: "🌐", desc: "Manage sub-agents & commissions" },
];

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("agent");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-600 via-navy-700 to-navy-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-navy-700 to-navy-900 p-10 text-white flex flex-col justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-10">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                  <circle cx="20" cy="20" r="18" fill="#f97316" />
                  <polygon points="20,8 22,15 30,15 24,20 26,27 20,23 14,27 16,20 10,15 18,15" fill="white" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold">FiveStarTravel</span>
                <span className="text-orange-400 text-xl font-bold">.in</span>
              </div>
            </Link>
            <h2 className="text-2xl font-bold mb-3">Welcome Back!</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Access your B2B travel portal dashboard. Manage bookings, check wallet balance, process visa applications and more.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Select Your Role</p>
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                  selectedRole === role.id
                    ? "bg-orange-500 text-white"
                    : "bg-navy-600/50 text-slate-300 hover:bg-navy-600"
                }`}
              >
                <span className="text-xl">{role.emoji}</span>
                <div>
                  <p className="text-sm font-semibold">{role.label}</p>
                  <p className={`text-xs ${selectedRole === role.id ? "text-orange-100" : "text-slate-400"}`}>{role.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-navy-600">
            <p className="text-xs text-slate-400">Trusted by 10,000+ agents | 500 Cr+ annual volume</p>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-navy-800 mb-1">
            {roles.find((r) => r.id === selectedRole)?.label} Login
          </h3>
          <p className="text-sm text-slate-500 mb-8">Enter your credentials to access the portal</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = selectedRole === "admin" ? "/admin" : selectedRole === "supplier" ? "/supplier" : selectedRole === "distributor" ? "/distributor" : "/dashboard";
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="agent@agency.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="rounded border-slate-300" />
                Remember me
              </label>
              <span className="text-sm text-orange-500 hover:text-orange-600 cursor-pointer font-medium">Forgot Password?</span>
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-colors text-sm"
            >
              Sign In as {roles.find((r) => r.id === selectedRole)?.label} →
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-orange-500 font-semibold hover:text-orange-600">Register Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
