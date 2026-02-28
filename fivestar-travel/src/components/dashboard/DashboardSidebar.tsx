"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuSections = [
  {
    title: "MAIN",
    items: [
      { href: "/dashboard", label: "Dashboard", emoji: "📊" },
      { href: "/dashboard/flights", label: "Flights", emoji: "✈️" },
      { href: "/dashboard/hotels", label: "Hotels", emoji: "🏨" },
      { href: "/dashboard/visa", label: "Visa", emoji: "🛂" },
      { href: "/dashboard/insurance", label: "Insurance", emoji: "🛡️" },
    ],
  },
  {
    title: "TRAVEL",
    items: [
      { href: "/dashboard/tours", label: "Tours & Tickets", emoji: "🎟️" },
      { href: "/dashboard/transfers", label: "Transfers", emoji: "🚗" },
      { href: "/dashboard/cruise", label: "Cruise", emoji: "🚢" },
      { href: "/dashboard/railway", label: "Railway", emoji: "🚆" },
    ],
  },
  {
    title: "PACKAGES",
    items: [
      { href: "/dashboard/packages/custom", label: "Custom Packager", emoji: "📦" },
      { href: "/dashboard/packages/ready", label: "Ready Packages", emoji: "🎁" },
    ],
  },
  {
    title: "BUSINESS",
    items: [
      { href: "/dashboard/crm", label: "CRM", emoji: "📋" },
      { href: "/dashboard/accounts", label: "Accounts", emoji: "💰" },
      { href: "/dashboard/wallet", label: "Wallet", emoji: "💳" },
      { href: "/dashboard/payments", label: "Payments", emoji: "💵" },
      { href: "/dashboard/settings", label: "Settings", emoji: "⚙️" },
    ],
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-navy-900 text-white h-screen sticky top-0 transition-all duration-300 flex flex-col ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-navy-700">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <circle cx="20" cy="20" r="18" fill="#f97316" />
                <polygon points="20,8 22,15 30,15 24,20 26,27 20,23 14,27 16,20 10,15 18,15" fill="white" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-bold">FiveStar</span>
              <span className="text-orange-400 text-sm font-bold">.in</span>
            </div>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-navy-700 text-slate-400"
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-2">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-4">
            {!collapsed && (
              <p className="px-3 mb-1 text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                {section.title}
              </p>
            )}
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors mb-0.5 ${
                    active
                      ? "bg-orange-500 text-white font-semibold"
                      : "text-slate-300 hover:bg-navy-700 hover:text-white"
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <span className="text-base flex-shrink-0">{item.emoji}</span>
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="p-3 border-t border-navy-700">
        {!collapsed ? (
          <div className="bg-navy-800 rounded-lg p-3">
            <p className="text-xs text-slate-400">Logged in as</p>
            <p className="text-sm font-semibold">Travel Agent</p>
            <p className="text-xs text-orange-400">Premium Plan</p>
          </div>
        ) : (
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold mx-auto">
            TA
          </div>
        )}
      </div>
    </aside>
  );
}
