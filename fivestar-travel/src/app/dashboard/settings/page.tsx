"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [tab, setTab] = useState<"profile" | "markup" | "notifications">("profile");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-800">⚙️ Settings</h1>
        <p className="text-sm text-slate-500">Profile, markup control, notifications, API settings</p>
      </div>

      <div className="flex gap-2">
        {(["profile", "markup", "notifications"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === t ? "bg-orange-500 text-white" : "bg-white border border-slate-200 text-slate-600"}`}>
            {t === "profile" ? "Profile" : t === "markup" ? "Markup Control" : "Notifications"}
          </button>
        ))}
      </div>

      {tab === "profile" && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-navy-800 mb-6">Agency Profile</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Agency Name</label>
              <input type="text" defaultValue="Shivam Travel Agency" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Contact Person</label>
              <input type="text" defaultValue="Shivam Kumar" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" defaultValue="shivam@agency.com" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input type="tel" defaultValue="+91 98765 43210" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">PAN Number</label>
              <input type="text" defaultValue="ABCDE1234F" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">GST Number</label>
              <input type="text" defaultValue="09AAACI0000A1Z5" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
              <textarea rows={2} defaultValue="123, Travel Street, Sector 62, Noida, UP 201301" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" />
            </div>
          </div>
          <button className="mt-6 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
            Save Changes
          </button>
        </div>
      )}

      {tab === "markup" && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-navy-800 mb-6">Markup Control System</h3>
          <div className="space-y-4">
            {[
              { service: "Flights (GDS)", markup: "₹500", type: "Fixed" },
              { service: "Flights (LCC)", markup: "3%", type: "Percentage" },
              { service: "Hotels", markup: "10%", type: "Percentage" },
              { service: "Visa", markup: "₹1,000", type: "Fixed" },
              { service: "Insurance", markup: "15%", type: "Percentage" },
              { service: "Tours & Activities", markup: "12%", type: "Percentage" },
              { service: "Transfers", markup: "₹300", type: "Fixed" },
              { service: "Cruise", markup: "8%", type: "Percentage" },
              { service: "Railway", markup: "₹200", type: "Fixed" },
              { service: "Packages", markup: "10%", type: "Percentage" },
            ].map((m) => (
              <div key={m.service} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium text-navy-800 w-40">{m.service}</span>
                <div className="flex items-center gap-3">
                  <select defaultValue={m.type} className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Fixed</option>
                    <option>Percentage</option>
                  </select>
                  <input type="text" defaultValue={m.markup} className="w-24 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
            Save Markup Settings
          </button>
        </div>
      )}

      {tab === "notifications" && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-semibold text-navy-800 mb-6">Notification Preferences</h3>
          <div className="space-y-4">
            {[
              { label: "Booking Confirmations", desc: "Get notified when a booking is confirmed", email: true, sms: true, whatsapp: true },
              { label: "Wallet Alerts", desc: "Low balance and top-up notifications", email: true, sms: true, whatsapp: false },
              { label: "Visa Status Updates", desc: "Track visa application progress", email: true, sms: false, whatsapp: true },
              { label: "Payment Receipts", desc: "Payment confirmation and receipts", email: true, sms: false, whatsapp: false },
              { label: "Promotional Offers", desc: "Special deals and supplier offers", email: false, sms: false, whatsapp: true },
              { label: "CRM Follow-up Reminders", desc: "Lead follow-up reminders", email: true, sms: true, whatsapp: true },
            ].map((n) => (
              <div key={n.label} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-navy-800">{n.label}</p>
                  <p className="text-xs text-slate-500">{n.desc}</p>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1.5 text-xs text-slate-600">
                    <input type="checkbox" defaultChecked={n.email} className="accent-orange-500" /> Email
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-slate-600">
                    <input type="checkbox" defaultChecked={n.sms} className="accent-orange-500" /> SMS
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-slate-600">
                    <input type="checkbox" defaultChecked={n.whatsapp} className="accent-orange-500" /> WhatsApp
                  </label>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-sm transition-colors">
            Save Preferences
          </button>
        </div>
      )}
    </div>
  );
}
