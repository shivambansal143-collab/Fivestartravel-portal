"use client";
import { useState } from "react";

const countries = [
  { name: "Dubai (UAE)", type: "E-Visa", processing: "24-48 hrs", price: "₹6,500", docs: "Passport, Photo, Ticket", ocr: true },
  { name: "Vietnam", type: "E-Visa", processing: "3-5 days", price: "₹3,200", docs: "Passport, Photo, Itinerary", ocr: true },
  { name: "Singapore", type: "E-Visa", processing: "3-5 days", price: "₹4,500", docs: "Passport, Photo, Hotel, Ticket", ocr: true },
  { name: "Thailand", type: "E-Visa", processing: "5-7 days", price: "₹5,000", docs: "Passport, Photo, Bank Statement", ocr: true },
  { name: "Malaysia", type: "E-Visa", processing: "3-5 days", price: "₹3,800", docs: "Passport, Photo, Ticket", ocr: true },
  { name: "Sri Lanka", type: "ETA", processing: "24 hrs", price: "₹2,500", docs: "Passport, Photo", ocr: true },
];

const offlineVisas = [
  { name: "USA (B1/B2)", type: "Sticker", processing: "15-30 days", price: "₹14,500", status: "Appointment Required" },
  { name: "UK", type: "Sticker", processing: "15-20 days", price: "₹12,000", status: "File Ready" },
  { name: "Schengen (Europe)", type: "Sticker", processing: "15-20 days", price: "₹8,500", status: "Checklist Available" },
  { name: "Australia", type: "E-Visa", processing: "20-30 days", price: "₹10,000", status: "Online Application" },
  { name: "Canada", type: "Sticker", processing: "30-45 days", price: "₹11,500", status: "Biometric Required" },
];

const applications = [
  { id: "VIS-2201", name: "Rajesh Patel", country: "Dubai", type: "Tourist", status: "Approved", date: "27 Feb 2026", statusColor: "bg-green-100 text-green-700" },
  { id: "VIS-2200", name: "Priya Singh", country: "Vietnam", type: "Tourist", status: "Processing", date: "26 Feb 2026", statusColor: "bg-yellow-100 text-yellow-700" },
  { id: "VIS-2199", name: "Amit Kumar", country: "Singapore", type: "Business", status: "Documents Pending", date: "25 Feb 2026", statusColor: "bg-orange-100 text-orange-700" },
  { id: "VIS-2198", name: "Sunita Devi", country: "Thailand", type: "Tourist", status: "Approved", date: "24 Feb 2026", statusColor: "bg-green-100 text-green-700" },
];

export default function VisaPage() {
  const [tab, setTab] = useState<"online" | "offline" | "track">("online");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">🛂 Visa Processing</h1>
          <p className="text-sm text-slate-500">Online E-Visa with OCR + Offline Visa Management</p>
        </div>
        <div className="flex gap-2">
          {(["online", "offline", "track"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === t ? "bg-orange-500 text-white" : "bg-white border border-slate-200 text-slate-600"}`}>
              {t === "online" ? "E-Visa (OCR)" : t === "offline" ? "Offline Visa" : "Track Status"}
            </button>
          ))}
        </div>
      </div>

      {tab === "online" && (
        <>
          {/* OCR Upload Section */}
          <div className="bg-gradient-to-r from-navy-600 to-navy-800 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-2">OCR Passport Scanner</h3>
            <p className="text-sm text-slate-300 mb-4">Upload passport image for automatic data extraction</p>
            <div className="bg-white/10 border-2 border-dashed border-white/30 rounded-xl p-8 text-center">
              <span className="text-4xl">📷</span>
              <p className="text-sm mt-2">Drag & drop passport image or click to upload</p>
              <p className="text-xs text-slate-300 mt-1">Supports JPG, PNG, PDF — Auto OCR extraction</p>
              <button className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm font-semibold transition-colors">
                Upload Passport
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {["Full Name", "Passport No.", "Nationality", "Expiry Date"].map((f) => (
                <div key={f} className="bg-white/10 rounded-lg p-3">
                  <p className="text-xs text-slate-300">{f}</p>
                  <p className="text-sm font-medium mt-1">Auto-detected</p>
                </div>
              ))}
            </div>
          </div>

          {/* E-Visa Countries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((c) => (
              <div key={c.name} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-navy-800">{c.name}</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{c.type}</span>
                  </div>
                  {c.ocr && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">OCR</span>}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Processing</span><span className="font-medium text-slate-700">{c.processing}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">B2B Price</span><span className="font-bold text-navy-800">{c.price}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Documents</span><span className="text-xs text-slate-600">{c.docs}</span></div>
                </div>
                <button className="w-full mt-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === "offline" && (
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100">
            <h3 className="font-semibold text-navy-800">Offline Visa Services</h3>
            <p className="text-xs text-slate-500">Checklist, appointment booking, file tracking & SMS alerts</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  <th className="text-left p-4">Country</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-left p-4">Processing</th>
                  <th className="text-right p-4">Price</th>
                  <th className="text-center p-4">Status</th>
                  <th className="text-center p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {offlineVisas.map((v) => (
                  <tr key={v.name} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="p-4 text-sm font-medium text-navy-800">{v.name}</td>
                    <td className="p-4 text-sm text-slate-600">{v.type}</td>
                    <td className="p-4 text-sm text-slate-600">{v.processing}</td>
                    <td className="p-4 text-sm font-bold text-navy-800 text-right">{v.price}</td>
                    <td className="p-4 text-center"><span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{v.status}</span></td>
                    <td className="p-4 text-center">
                      <button className="px-4 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold transition-colors">Start File</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "track" && (
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100">
            <h3 className="font-semibold text-navy-800">Visa Application Tracker</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  <th className="text-left p-4">App ID</th>
                  <th className="text-left p-4">Applicant</th>
                  <th className="text-left p-4">Country</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-center p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((a) => (
                  <tr key={a.id} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="p-4 text-sm font-medium text-navy-800">{a.id}</td>
                    <td className="p-4 text-sm text-slate-600">{a.name}</td>
                    <td className="p-4 text-sm text-slate-600">{a.country}</td>
                    <td className="p-4 text-sm text-slate-600">{a.type}</td>
                    <td className="p-4 text-sm text-slate-500">{a.date}</td>
                    <td className="p-4 text-center"><span className={`text-xs px-2.5 py-1 rounded-full font-medium ${a.statusColor}`}>{a.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
